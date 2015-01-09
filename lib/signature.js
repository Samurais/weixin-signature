var crypto = require("crypto");

module.exports.sign = function (config){
    var arr = Object.keys(config).sort();
    for (var keyIndex in arr)
    {
        arr[keyIndex] += "=" + config[arr[keyIndex]];
    }
    config.text = arr.join("&");
    config.signature = require("crypto").createHash('sha1').update(config.text, "utf8").digest('hex');
    return config;
};