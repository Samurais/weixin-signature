# weixin-signature
# 微信JSAPI签名生成算法
Provide the Signature Of Weixin JSAPI

[Weixin Signature Definition](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html#.E9.99.84.E5.BD.951-JS-SDK.E4.BD.BF.E7.94.A8.E6.9D.83.E9.99.90.E7.AD.BE.E5.90.8D.E7.AE.97.E6.B3.95)

## Example:

```JavaScript
var sign = require("weixin-signature").sign;
var config = {
    noncestr    : "Wm3WZYTPz0wzccnW",
    jsapi_ticket: "sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg",
    timestamp   : 1414587457,
    url         : "http://mp.weixin.qq.com"
};

sign(config); // should output {signature: "f4d90daf4b3bca3078ab155816175ba34c443a7b" ...}

```
