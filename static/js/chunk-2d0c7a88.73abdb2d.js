(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7a88"],{"520e":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white px-3",staticStyle:{margin:"-20px","margin-top":"-1rem","margin-bottom":"0!important"}},[e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"注册与访问",name:"first"}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"160px"}},[e("el-form-item",{attrs:{label:"是否允许注册会员"}},[e("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.open_reg,callback:function(e){t.$set(t.form,"open_reg",e)},expression:"form.open_reg"}},[e("el-radio-button",{attrs:{label:1}},[t._v("是")]),e("el-radio-button",{attrs:{label:0}},[t._v("否")])],1)],1),e("el-form-item",{attrs:{label:"注册类型"}},[e("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.reg_method,callback:function(e){t.$set(t.form,"reg_method",e)},expression:"form.reg_method"}},[e("el-radio-button",{attrs:{label:"username"}},[t._v("普通注册")]),e("el-radio-button",{attrs:{label:"phone"}},[t._v("手机注册")])],1)],1),e("el-form-item",{attrs:{label:"密码最小长度"}},[e("el-input",{staticStyle:{width:"25%"},attrs:{type:"number",size:"mini",placeholder:"密码最小长度"},model:{value:t.form.password_min,callback:function(e){t.$set(t.form,"password_min",e)},expression:"form.password_min"}})],1),e("el-form-item",{attrs:{label:"强制密码复杂度"}},[e("el-checkbox-group",{attrs:{size:"mini"},model:{value:t.form.password_encrypt,callback:function(e){t.$set(t.form,"password_encrypt",e)},expression:"form.password_encrypt"}},[e("el-checkbox-button",{attrs:{label:"0"}},[t._v("数字")]),e("el-checkbox-button",{attrs:{label:"1"}},[t._v("小写字母")]),e("el-checkbox-button",{attrs:{label:"2"}},[t._v("大写字母")]),e("el-checkbox-button",{attrs:{label:"3"}},[t._v("符号")])],1)],1)],1)],1),e("el-tab-pane",{attrs:{label:"上传设置",name:"second"}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"160px"}},[e("el-form-item",{attrs:{label:"默认上传方式"}},[e("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.upload_method,callback:function(e){t.$set(t.form,"upload_method",e)},expression:"form.upload_method"}},[e("el-radio-button",{attrs:{label:"local"}},[t._v("本地存储")]),e("el-radio-button",{attrs:{label:"oss"}},[t._v("阿里oss")])],1)],1),"oss"===t.form.upload_method?[e("el-form-item",{attrs:{label:"Bucket"}},[e("el-input",{staticStyle:{width:"25%"},attrs:{size:"mini",placeholder:"Bucket"},model:{value:t.form.upload_config.Bucket,callback:function(e){t.$set(t.form.upload_config,"Bucket",e)},expression:"form.upload_config.Bucket"}})],1),e("el-form-item",{attrs:{label:"ACCESS_KEY"}},[e("el-input",{staticStyle:{width:"25%"},attrs:{size:"mini",placeholder:"ACCESS_KEY"},model:{value:t.form.upload_config.ACCESS_KEY,callback:function(e){t.$set(t.form.upload_config,"ACCESS_KEY",e)},expression:"form.upload_config.ACCESS_KEY"}})],1),e("el-form-item",{attrs:{label:"SECRET_KEY"}},[e("el-input",{staticStyle:{width:"25%"},attrs:{size:"mini",placeholder:"SECRET_KEY"},model:{value:t.form.upload_config.SECRET_KEY,callback:function(e){t.$set(t.form.upload_config,"SECRET_KEY",e)},expression:"form.upload_config.SECRET_KEY"}})],1),e("el-form-item",{attrs:{label:"空间域名"}},[e("el-input",{staticStyle:{width:"25%"},attrs:{size:"mini",placeholder:"http"},model:{value:t.form.upload_config.http,callback:function(e){t.$set(t.form.upload_config,"http",e)},expression:"form.upload_config.http"}}),e("small",{staticClass:"text-secondary d-block"},[t._v("请补全http:// 或 https://")])],1)]:t._e()],2)],1),e("el-tab-pane",{attrs:{label:"Api安全",name:"third"}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"160px"}},[e("el-form-item",{attrs:{label:"是否开启API安全"}},[e("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.api_safe,callback:function(e){t.$set(t.form,"api_safe",e)},expression:"form.api_safe"}},[e("el-radio-button",{attrs:{label:1}},[t._v("是")]),e("el-radio-button",{attrs:{label:0}},[t._v("否")])],1),e("small",{staticClass:"text-secondary d-block"},[t._v("api安全功能开启之后调用前端api需要传输签名串")])],1),e("el-form-item",{attrs:{label:"秘钥"}},[e("el-input",{staticStyle:{width:"50%"},attrs:{size:"mini",placeholder:"秘钥"},model:{value:t.form.api_secret,callback:function(e){t.$set(t.form,"api_secret",e)},expression:"form.api_secret"}}),e("small",{staticClass:"text-secondary d-block"},[t._v("秘钥设置关系系统中api调用传输签名串的编码规则，以及会员token解析，请慎重设置，注意设置之后对应会员要求重新登录获取token")])],1)],1)],1)],1),e("el-form",{attrs:{"label-width":"160px"}},[e("el-form-item",[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submit}},[t._v("保存")])],1)],1)],1)},l=[],r=(a("28a5"),{inject:["layout"],data:function(){return{activeName:"first",form:{open_reg:1,reg_method:"username",password_min:"",password_encrypt:["0"],upload_method:"local",upload_config:{Bucket:"",ACCESS_KEY:"",SECRET_KEY:"",http:""},api_safe:1,api_secret:""}}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.layout.showLoading(),this.axios.get("/admin/sysconfig",{token:!0}).then((function(e){t.form=e.data.data,t.form.password_encrypt=t.form.password_encrypt.split(","),t.layout.hideLoading()})).catch((function(e){t.layout.hideLoading()}))},submit:function(){var t=this;this.layout.showLoading(),this.form.password_encrypt=this.form.password_encrypt.join(","),this.axios.post("/admin/sysconfig",this.form,{token:!0}).then((function(e){t.$message({type:"success",message:"修改成功"}),t.getData(),t.layout.hideLoading()})).catch((function(e){t.layout.hideLoading()}))}}}),i=r,s=a("2877"),n=Object(s["a"])(i,o,l,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0c7a88.73abdb2d.js.map