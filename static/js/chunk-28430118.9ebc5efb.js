(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28430118"],{"456d":function(t,e,n){var i=n("4bf8"),r=n("0d58");n("5eda")("keys",(function(){return function(t){return r(i(t))}}))},"5eda":function(t,e,n){var i=n("5ca1"),r=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),i(i.S+i.F*o((function(){n(1)})),"Object",a)}},"6cb4":function(t,e,n){"use strict";n("7f7f");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card mb-3",staticStyle:{"line-height":"1.2"}},[e("div",{staticClass:"card-header d-flex align-items-center"},[t._v("\n\t\t规格项：\n\t\t"),e("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",value:t.item.name},on:{input:function(e){return t.vModel("name",t.index,e)}}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-more"},on:{click:t.chooseSkus},slot:"append"})],1),e("el-radio-group",{staticClass:"ml-2",staticStyle:{"margin-bottom":"-10px"},attrs:{size:"mini",value:t.item.type},on:{input:function(e){return t.vModel("type",t.index,e)}}},[e("el-radio",{attrs:{label:0}},[t._v("无")]),e("el-radio",{attrs:{label:1}},[t._v("颜色")]),e("el-radio",{attrs:{label:2}},[t._v("图片")])],1),e("el-button",{staticClass:"ml-auto",attrs:{size:"mini",disabled:0===t.index,icon:"el-icon-top"},on:{click:function(e){return t.sortCard("moveUp",t.index)}}}),e("el-button",{attrs:{size:"mini",disabled:t.total===t.index+1,icon:"el-icon-bottom"},on:{click:function(e){return t.sortCard("moveDown",t.index)}}}),e("el-button",{attrs:{size:"mini",type:"text"},on:{click:t.delSkuCardEvent}},[t._v("删除")])],1),e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex align-items-center flex-wrap"},t._l(t.list,(function(n,i){return e("sku-card-children",{directives:[{name:"dragging",rawName:"v-dragging",value:{item:n,list:t.list,group:"skuItem".concat(t.index)},expression:"{ item: item2, list: list, group: `skuItem${index}` }"}],key:i,attrs:{type:t.item.type,item:n,index:i,cardIndex:t.index}})})),1),e("div",{staticClass:"mt-2"},[e("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-plus"},on:{click:t.addSkuValueEvent}},[t._v("\n\t\t\t\t增加规格值\n\t\t\t")])],1)])])},r=[],o=(n("8e6e"),n("456d"),n("ac6a"),n("ade3")),a=(n("c5f6"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"border py-1 px-2 rounded mr-2 position-relative d-flex align-items-center"},[0!=t.type?e("div",[1===t.type?e("el-color-picker",{attrs:{size:"mini",value:t.item.color},on:{change:t.onColorChange}}):[t.item.image?e("img",{staticClass:"rounded",staticStyle:{width:"45px",height:"45px",cursor:"pointer"},attrs:{src:t.item.image},on:{click:t.chooseImage}}):e("span",{staticClass:"btn btn-light border mr-2",on:{click:t.chooseImage}},[e("i",{staticClass:"el-icon-plus"})])]],2):t._e(),0===t.type?e("input",{staticClass:"form-control text-center border-0",staticStyle:{width:"80px","font-size":"15px"},domProps:{value:t.item.text},on:{input:t.inputChange}}):t._e(),e("span",{staticClass:"btn btn-light p-0 position-absolute",staticStyle:{"line-height":"1",right:"-10px",top:"-10px"},on:{click:t.delSkuValueEvent}},[e("i",{staticClass:"el-icon-circle-close"})])])}),s=[],c=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={inject:["app","layout"],props:{type:{type:Number,default:0},item:Object,index:Number,cardIndex:Number},watch:{type:function(t,e){var n=["text","color","image"],i=["属性值","#FFFFFF","/favicon.ico"];this.item.value=this.item[n[t]]?this.item[n[t]]:i[t],this.updateSkuValueEvent()}},methods:u(u({},Object(c["c"])(["delSkuValue","updateSkuValue"])),{},{delSkuValueEvent:function(){var t=this;this.layout.showLoading(),this.axios.post("/admin/goods_skus_card_value/"+this.item.id+"/delete",{},{token:!0}).then((function(e){e.data.data;t.delSkuValue({cardIndex:t.cardIndex,valueIndex:t.index}),t.layout.hideLoading()})).catch((function(e){t.layout.hideLoading()}))},updateSkuValueEvent:function(){var t=["text","color","image"];this.item.value=this.item[t[this.type]],this.axios.post("/admin/goods_skus_card_value/"+this.item.id,this.item,{token:!0})},inputChange:function(t){this.vModel("text",t.target.value)},vModel:function(t,e){this.updateSkuValue({cardIndex:this.cardIndex,valueIndex:this.index,key:t,value:e}),console.log(this.item),this.updateSkuValueEvent()},chooseImage:function(){var t=this;this.app.chooseImage((function(e){t.vModel("image",e[0].url)}),1)},onColorChange:function(t){this.vModel("color",t)}})},p=d,m=n("2877"),f=Object(m["a"])(p,a,s,!1,null,null,null),v=f.exports;function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=["属性值","#FFFFFF","/favicon.ico"],y={inject:["app","layout"],components:{skuCardChildren:v},props:{item:Object,index:Number,total:Number},data:function(){return{list:this.item.list}},mounted:function(){var t=this;this.$watch("item.list",(function(e,n){t.list=e})),this.$dragging.$on("dragend",(function(e){e.group==="skuItem"+t.index&&(t.sortSkuValue({index:t.index,value:t.list}),console.log(t.list),t.axios.post("/admin/goods_skus_card_value/sort",{sortdata:t.list.map((function(t,e){return{id:t.id,order:e+1}}))},{token:!0}))}))},computed:b({},Object(c["d"])({sku_card:function(t){return t.goods_create.sku_card}})),methods:b(b({},Object(c["c"])(["delSkuCard","vModelSkuCard","sortSkuCard","addSkuValue","sortSkuValue"])),{},{addSkuValueEvent:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.layout.showLoading(),this.axios.post("/admin/goods_skus_card_value",{goods_skus_card_id:this.item.id,name:this.item.name,order:50,value:"string"===typeof e?e:g[this.item.type]},{token:!0}).then((function(e){var n=e.data.data;n.text=0===t.item.type?n.value:g[0],n.color=1===t.item.type?n.value:g[1],n.image=2===t.item.type?n.value:g[2],t.addSkuValue({index:t.index,data:n}),t.layout.hideLoading()})).catch((function(e){t.layout.hideLoading()}))},delSkuCardEvent:function(){var t=this;this.layout.showLoading(),this.axios.post("/admin/goods_skus_card/"+this.item.id+"/delete",{},{token:!0}).then((function(e){e.data.data;t.delSkuCard(t.index),t.layout.hideLoading()})).catch((function(e){t.layout.hideLoading()}))},updateSkuCard:function(){this.axios.post("/admin/goods_skus_card/"+this.item.id,this.item,{token:!0})},vModel:function(t,e,n){this.vModelSkuCard({key:t,index:e,value:n}),this.updateSkuCard()},sortCard:function(t,e){this.sortSkuCard({action:t,index:e}),this.axios.post("/admin/goods_skus_card/sort",{sortdata:this.sku_card.map((function(t,e){return{id:t.id,order:e+1}}))},{token:!0})},chooseSkus:function(){var t=this;this.app.chooseSkus((function(e){t.vModel("name",t.index,e.name),t.vModel("type",t.index,e.type),e.list.forEach((function(e){t.addSkuValueEvent(e.name)}))}))}})},x=y,O=Object(m["a"])(x,i,r,!1,null,null,null);e["a"]=O.exports},"8e6e":function(t,e,n){var i=n("5ca1"),r=n("990b"),o=n("6821"),a=n("11e9"),s=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=o(t),c=a.f,l=r(i),u={},d=0;while(l.length>d)n=c(i,e=l[d++]),void 0!==n&&s(u,e,n);return u}})},"990b":function(t,e,n){var i=n("9093"),r=n("2621"),o=n("cb7c"),a=n("7726").Reflect;t.exports=a&&a.ownKeys||function(t){var e=i.f(o(t)),n=r.f;return n?e.concat(n(t)):e}},aaff:function(t,e,n){"use strict";var i=function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",attrs:{"label-width":"80px"}},[e("el-form-item",{attrs:{label:"市场价格"}},[e("el-input",{staticClass:"w-25",attrs:{type:"number",value:t.oprice},on:{input:function(e){return t.vModel("oprice",e)}}},[e("template",{slot:"append"},[t._v("元")])],2)],1),e("el-form-item",{attrs:{label:"销售价格"}},[e("el-input",{staticClass:"w-25",attrs:{type:"number",value:t.pprice},on:{input:function(e){return t.vModel("pprice",e)}}},[e("template",{slot:"append"},[t._v("元")])],2)],1),e("el-form-item",{attrs:{label:"成本价格"}},[e("el-input",{staticClass:"w-25",attrs:{type:"number",value:t.cprice},on:{input:function(e){return t.vModel("cprice",e)}}},[e("template",{slot:"append"},[t._v("元")])],2)],1),e("el-form-item",{attrs:{label:"商品重量"}},[e("el-input",{staticClass:"w-25",attrs:{type:"number",value:t.weight},on:{input:function(e){return t.vModel("weight",e)}}},[e("template",{slot:"append"},[t._v("公斤")])],2)],1),e("el-form-item",{attrs:{label:"商品体积"}},[e("el-input",{staticClass:"w-25",attrs:{type:"number",value:t.volume},on:{input:function(e){return t.vModel("volume",e)}}},[e("template",{slot:"append"},[t._v("立方米")])],2)],1)],1)},r=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),a=n("2f62");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={computed:c({},Object(a["d"])({oprice:function(t){return t.goods_create.oprice},pprice:function(t){return t.goods_create.pprice},cprice:function(t){return t.goods_create.cprice},weight:function(t){return t.goods_create.weight},volume:function(t){return t.goods_create.volume}})),methods:c(c({},Object(a["c"])(["vModelState"])),{},{vModel:function(t,e){this.vModelState({key:t,value:e})}})},u=l,d=n("2877"),p=Object(d["a"])(u,i,r,!1,null,null,null);e["a"]=p.exports},ade3:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("53ca");function r(t,e){if("object"!==Object(i["a"])(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==Object(i["a"])(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function o(t){var e=r(t,"string");return"symbol"===Object(i["a"])(e)?e:String(e)}function a(t,e,n){return e=o(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},deb6:function(t,e,n){"use strict";n("7f7f");var i=function(){var t=this,e=t._self._c;return e("table",{staticClass:"table table-sm table-bordered"},[e("thead",[e("tr",t._l(t.tableThs,(function(n,i){return e("th",{key:i,staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{scope:"col",rowspan:n.rowspan,colspan:n.colspan}},[t._v("\n\t\t  "+t._s(n.name)+"\n\t  ")])})),0),e("tr",t._l(t.skuLabels,(function(n,i){return e("th",{key:i,staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{scope:"col",rowspan:"1",colspan:"1"}},[t._v("\n\t\t\t"+t._s(n.name)+"\n\t\t")])})),0)]),e("tbody",t._l(t.list,(function(n,i){return e("tr",{key:i},[t._l(n.skus,(function(n,i){return e("th",{key:i,staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(n.value))])})),e("td",{staticClass:"text-center",attrs:{width:"100"}},[n.image?e("img",{staticClass:"rounded",staticStyle:{width:"45px",height:"45px",cursor:"pointer"},attrs:{src:n.image},on:{click:function(e){return t.chooseImage(n)}}}):e("span",{staticClass:"btn btn-light border mr-2",on:{click:function(e){return t.chooseImage(n)}}},[e("i",{staticClass:"el-icon-plus"})])]),e("td",{staticClass:"text-center",attrs:{width:"100"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.pprice,expression:"item.pprice"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:n.pprice},on:{input:function(e){e.target.composing||t.$set(n,"pprice",e.target.value)}}})]),e("td",{staticClass:"text-center",attrs:{width:"100"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.oprice,expression:"item.oprice"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:n.oprice},on:{input:function(e){e.target.composing||t.$set(n,"oprice",e.target.value)}}})]),e("td",{staticClass:"text-center",attrs:{width:"100"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.cprice,expression:"item.cprice"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:n.cprice},on:{input:function(e){e.target.composing||t.$set(n,"cprice",e.target.value)}}})]),e("td",{staticClass:"text-center",attrs:{width:"100"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.stock,expression:"item.stock"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:n.stock},on:{input:function(e){e.target.composing||t.$set(n,"stock",e.target.value)}}})]),e("td",{staticClass:"text-center",attrs:{width:"100"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.volume,expression:"item.volume"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:n.volume},on:{input:function(e){e.target.composing||t.$set(n,"volume",e.target.value)}}})]),e("td",{staticClass:"text-center",attrs:{width:"100"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.weight,expression:"item.weight"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:n.weight},on:{input:function(e){e.target.composing||t.$set(n,"weight",e.target.value)}}})]),e("td",{staticClass:"text-center",attrs:{width:"100"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.code,expression:"item.code"}],staticClass:"form-control text-center",attrs:{type:"text"},domProps:{value:n.code},on:{input:function(e){e.target.composing||t.$set(n,"code",e.target.value)}}})])],2)})),0)])},r=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),a=n("2f62");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={inject:["app"],data:function(){return{list:[]}},computed:c(c({},Object(a["b"])(["tableThs","tableData","skuLabels"])),Object(a["d"])({sku_card:function(t){return t.goods_create.sku_card}})),watch:{tableData:function(t,e){this.list=t}},mounted:function(){this.list=this.tableData},methods:{chooseImage:function(t){this.app.chooseImage((function(e){t.image=e[0].url}),1)}}},u=l,d=n("2877"),p=Object(d["a"])(u,i,r,!1,null,null,null);e["a"]=p.exports},f1ae:function(t,e,n){"use strict";var i=n("86cc"),r=n("4630");t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}}}]);
//# sourceMappingURL=chunk-28430118.9ebc5efb.js.map