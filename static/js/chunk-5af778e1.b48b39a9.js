(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af778e1"],{3442:function(t,e,a){"use strict";var l=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex align-items-center"},[t._t("left"),t.showSearch?e("div",{directives:[{name:"show",rawName:"v-show",value:!t.superSearch,expression:"!superSearch"}],staticClass:"ml-auto"},[t._t("right",(function(){return[e("el-input",{staticClass:"mr-2",staticStyle:{width:"150px"},attrs:{placeholder:t.placeholder,size:"mini"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),e("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(e){return t.$emit("search",t.keyword)}}},[t._v("搜索")]),t.showSuperSearch?e("el-button",{attrs:{size:"mini"},on:{click:function(e){t.superSearch=!0}}},[t._v("高级搜索")]):t._e()]}))],2):t._e()],2),e("el-card",{directives:[{name:"show",rawName:"v-show",value:t.superSearch,expression:"superSearch"}],staticClass:"box-card bg-light my-3"},[e("div",{staticClass:"clearfix",staticStyle:{margin:"-10px"},attrs:{slot:"header"},slot:"header"},[e("span",[t._v("高级搜索")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.closeSuperSearch}},[t._v("收起")])],1),t._t("form")],2)],1)},s=[],r={props:{placeholder:{type:String,default:""},showSearch:{type:Boolean,default:!0},showSuperSearch:{type:Boolean,default:!0}},data:function(){return{keyword:"",superSearch:!1}},methods:{closeSuperSearch:function(){this.superSearch=!1}}},i=r,o=a("2877"),n=Object(o["a"])(i,l,s,!1,null,null,null);e["a"]=n.exports},e05a:function(t,e,a){"use strict";a.r(e);a("7f7f");var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white px-3",staticStyle:{margin:"-20px","margin-top":"-1rem","margin-bottom":"0!important"}},[e("button-search",{staticClass:"pt-3",scopedSlots:t._u([{key:"left",fn:function(){return[e("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){return t.openModel(!1)}}},[t._v("添加等级")])]},proxy:!0},{key:"right",fn:function(){return[e("div",[e("small",{staticClass:"mr-2"},[t._v("选择升级标准：")]),e("el-radio-group",{attrs:{size:"mini"},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}},[e("el-radio-button",{attrs:{label:0}},[t._v("累计消费")]),e("el-radio-button",{attrs:{label:1}},[t._v("累计次数")])],1)],1)]},proxy:!0}])}),e("el-table",{staticClass:"mt-3",staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[e("el-table-column",{attrs:{align:"center",label:"会员等级",prop:"name"}}),e("el-table-column",{attrs:{align:"center",width:"250",label:"升级条件"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t"+t._s(t.getLevel.name+":"+e.row[t.getLevel.value])+"\n\t\t\t")]}}])}),e("el-table-column",{attrs:{prop:"discount",align:"center",label:"折扣率(%)"}}),e("el-table-column",{attrs:{prop:"level",align:"center",label:"等级序号"}}),e("el-table-column",{attrs:{prop:"status",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:a.row.status?"success":"danger",size:"mini",plain:""},on:{click:function(e){return t.changeStatus(a.row)}}},[t._v(t._s(a.row.status?"启用":"禁用")+"\n\t\t\t\t")])]}}])}),e("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.openModel(a)}}},[t._v("修改")]),e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.deleteItem(a.row)}}},[t._v("删除")])]}}])})],1),e("div",{staticStyle:{height:"60px"}}),e("el-footer",{staticClass:"border-top d-flex align-items-center px-0 position-fixed bg-white",staticStyle:{bottom:"0",left:"200px",right:"0","z-index":"100"}},[e("div",{staticClass:"px-2",staticStyle:{flex:"1"}},[e("el-pagination",{attrs:{"current-page":t.page.current,"page-sizes":t.page.sizes,"page-size":t.page.size,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),e("el-dialog",{attrs:{title:"添加等级",visible:t.createModel,top:"5vh"},on:{"update:visible":function(e){t.createModel=e}}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"等级名称",prop:"name"}},[e("el-input",{staticStyle:{width:"25%"},attrs:{placeholder:"等级名称",size:"mini"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e("small",{staticClass:"text-secondary d-block"},[t._v("\n\t\t\t\t设置会员等级名称\n\t\t\t")])],1),e("el-form-item",{attrs:{label:"等级权重",prop:"level"}},[e("el-input",{staticStyle:{width:"25%"},attrs:{type:"number",placeholder:"等级权重",size:"mini"},model:{value:t.form.level,callback:function(e){t.$set(t.form,"level",e)},expression:"form.level"}}),e("small",{staticClass:"text-secondary d-block"},[t._v("\n\t\t\t\t设置会员等级排序(此参数决定等级的高低,排序越大等级越高,请谨慎选择)\n\t\t\t")])],1),e("el-form-item",{attrs:{label:"是否启用"}},[e("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[e("el-radio",{attrs:{label:1,border:""}},[t._v("启用")]),e("el-radio",{attrs:{label:0,border:""}},[t._v("禁用")])],1)],1),e("el-form-item",{attrs:{label:"升级条件"}},[e("div",[e("small",{staticClass:"mr-2"},[t._v("累计消费满")]),e("el-input",{staticStyle:{width:"25%"},attrs:{type:"number",placeholder:"累计消费",size:"mini"},model:{value:t.form.max_price,callback:function(e){t.$set(t.form,"max_price",e)},expression:"form.max_price"}},[e("template",{slot:"append"},[t._v("元")])],2),e("small",{staticClass:"text-secondary d-block"},[t._v("\n\t\t\t\t\t设置会员等级所需要的累计消费必须大于等于0,单位：元\n\t\t\t\t")])],1),e("div",[e("small",{staticClass:"mr-2"},[t._v("累计次数满")]),e("el-input",{staticStyle:{width:"25%"},attrs:{type:"number",placeholder:"累计次数",size:"mini"},model:{value:t.form.max_times,callback:function(e){t.$set(t.form,"max_times",e)},expression:"form.max_times"}},[e("template",{slot:"append"},[t._v("次")])],2),e("small",{staticClass:"text-secondary d-block"},[t._v("\n\t\t\t\t\t设置会员等级所需要的购买量必须大于等于0,单位：笔\n\t\t\t\t")])],1)]),e("el-form-item",{attrs:{label:"折扣率(%)"}},[e("el-input",{staticStyle:{width:"25%"},attrs:{size:"mini",type:"number",placeholder:"折扣率"},model:{value:t.form.discount,callback:function(e){t.$set(t.form,"discount",e)},expression:"form.discount"}},[e("template",{slot:"append"},[t._v("%")])],2),e("small",{staticClass:"text-secondary d-block"},[t._v("\n\t\t\t\t折扣率单位为百分比，如输入90，表示该会员等级的用户可以以商品原价的90%购买\n\t\t\t")])],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.createModel=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},s=[],r=a("3442"),i=a("6590"),o={inject:["app","layout"],mixins:[i["a"]],components:{buttonSearch:r["a"]},data:function(){return{preUrl:"user_level",level:0,tableData:[],createModel:!1,editIndex:-1,search:{keyword:"",group_id:0,time:""},form:{name:"",max_price:0,max_times:0,discount:0,level:0,status:1}}},computed:{getLevel:function(){var t=[{name:"累计消费",value:"max_price"},{name:"累计次数",value:"max_times"}];return t[this.level]}},methods:{getListResult:function(t){this.tableData=t.list,console.log(t)},openModel:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t?(this.form={name:t.row.name,max_price:t.row.max_price,max_times:t.row.max_times,discount:t.row.discount,level:t.row.level,status:t.row.status},this.editIndex=t.$index):(this.form={name:"",max_price:0,max_times:0,discount:0,level:0,status:1},this.editIndex=-1),this.createModel=!0},submit:function(){var t=0;-1!==this.editIndex&&(t=this.tableData[this.editIndex].id),this.addOrEdit(this.form,t),this.createModel=!1},clearSearch:function(){this.search={keyword:"",group_id:"",time:""},this.$refs.buttonSearch[this.tabIndex].closeSuperSearch()},searchEvent:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("string"===typeof t)return console.log("简单搜索",t);console.log("搜索事件")},chooseImage:function(){var t=this;this.app.chooseImage((function(e){t.form.avatar=e[0].url}),1)}}},n=o,c=a("2877"),u=Object(c["a"])(n,l,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5af778e1.b48b39a9.js.map