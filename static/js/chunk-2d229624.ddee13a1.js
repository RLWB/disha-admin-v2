(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229624"],{dce4:function(e,t,a){"use strict";a.r(t);a("7f7f");var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-white px-3",staticStyle:{margin:"-20px","margin-top":"-1rem","margin-bottom":"0!important"}},[t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"运费模板",name:"second"}},[t("div",[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.openModal(!1)}}},[e._v("添加模板")])],1),t("el-table",{staticClass:"mt-3",staticStyle:{width:"100%"},attrs:{border:"",data:e.tableData}},[t("el-table-column",{attrs:{align:"center",label:"模板名称",prop:"name"}}),t("el-table-column",{attrs:{align:"center",width:"250",label:"计费方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\t\t\t\t\t"+e._s(e._f("formatType")(t.row.type))+"\n\t\t\t\t")]}}])}),t("el-table-column",{attrs:{prop:"order",align:"center",label:"排序"}}),t("el-table-column",{attrs:{align:"center",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.openModal(a.$index)}}},[e._v("修改")]),t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.openDrawer(a.row)}}},[e._v("配置模板("+e._s(a.row.express_values.length)+")")]),t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.deleteItem(a.row)}}},[e._v("删除")])]}}])})],1)],1),t("el-tab-pane",{attrs:{label:"物流跟踪",name:"third"}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"160px"}},[t("el-form-item",{attrs:{label:"快递100 Customer"}},[t("el-input",{staticStyle:{width:"50%"},attrs:{size:"mini",placeholder:"快递100 Customer"},model:{value:e.form.customer,callback:function(t){e.$set(e.form,"customer",t)},expression:"form.customer"}}),t("small",{staticClass:"text-secondary d-block"},[e._v("用于查询物流信息，"),t("a",{attrs:{href:"#"}},[e._v("快递100申请")])])],1),t("el-form-item",{attrs:{label:"快递100 Key"}},[t("el-input",{staticStyle:{width:"50%"},attrs:{size:"mini",placeholder:"快递100 Key"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("保存")])],1)],1)],1)],1),t("div",{staticStyle:{height:"60px"}}),t("el-footer",{staticClass:"border-top d-flex align-items-center px-0 position-fixed bg-white",staticStyle:{bottom:"0",left:"200px",right:"0","z-index":"100"}},[t("div",{staticClass:"px-2",staticStyle:{flex:"1"}},[t("el-pagination",{attrs:{"current-page":e.page.current,"page-sizes":e.page.sizes,"page-size":e.page.size,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),t("el-dialog",{attrs:{title:"添加模板",visible:e.createModal,top:"5vh"},on:{"update:visible":function(t){e.createModal=t}}},[t("el-form",{ref:"form",attrs:{model:e.modal,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"模板名称",prop:"name"}},[t("el-input",{staticStyle:{width:"25%"},attrs:{placeholder:"模板名称",size:"mini"},model:{value:e.modal.name,callback:function(t){e.$set(e.modal,"name",t)},expression:"modal.name"}})],1),t("el-form-item",{attrs:{label:"排序",prop:"level"}},[t("el-input",{staticStyle:{width:"25%"},attrs:{type:"number",placeholder:"排序",size:"mini"},model:{value:e.modal.order,callback:function(t){e.$set(e.modal,"order",t)},expression:"modal.order"}})],1),t("el-form-item",{attrs:{label:"是否启用"}},[t("el-radio-group",{attrs:{size:"mini"},model:{value:e.modal.type,callback:function(t){e.$set(e.modal,"type",t)},expression:"modal.type"}},[t("el-radio",{attrs:{label:1,border:""}},[e._v("按重量")]),t("el-radio",{attrs:{label:0,border:""}},[e._v("按件数")])],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.createModal=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("el-drawer",{attrs:{size:"70%",visible:e.drawer,"with-header":!1},on:{"update:visible":function(t){e.drawer=t}}},[t("div",{staticClass:"p-3"},[t("el-table",{staticClass:"mt-3",staticStyle:{width:"100%"},attrs:{border:"",data:e.express_values}},[t("el-table-column",{attrs:{align:"center",label:"ID",prop:"id"}}),t("el-table-column",{attrs:{align:"center",label:"可配送区域",width:"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-cascader",{attrs:{size:"mini",options:e.options,props:e.props,"collapse-tags":"",clearable:""},on:{change:function(t){return e.change(a.row)}},model:{value:a.row.region,callback:function(t){e.$set(a.row,"region",t)},expression:"scope.row.region"}})]}}])}),t("el-table-column",{attrs:{align:"center",width:"150",label:"首件(个)/首重(Kg)"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{attrs:{type:"number",size:"mini"},on:{change:function(t){return e.change(a.row)}},model:{value:a.row.first,callback:function(t){e.$set(a.row,"first",t)},expression:"scope.row.first"}})]}}])}),t("el-table-column",{attrs:{align:"center",width:"150",label:"运费(元)"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{attrs:{type:"number",size:"mini"},on:{change:function(t){return e.change(a.row)}},model:{value:a.row.first_price,callback:function(t){e.$set(a.row,"first_price",t)},expression:"scope.row.first_price"}})]}}])}),t("el-table-column",{attrs:{align:"center",width:"150",label:"续件/续重"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{attrs:{type:"number",size:"mini"},on:{change:function(t){return e.change(a.row)}},model:{value:a.row.add,callback:function(t){e.$set(a.row,"add",t)},expression:"scope.row.add"}})]}}])}),t("el-table-column",{attrs:{align:"center",width:"150",label:"续费(元)"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{attrs:{type:"number",size:"mini"},on:{change:function(t){return e.change(a.row)}},model:{value:a.row.add_price,callback:function(t){e.$set(a.row,"add_price",t)},expression:"scope.row.add_price"}})]}}])}),t("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.deleteValue(a.row,a.$index)}}},[e._v("删除")])]}}])})],1),t("el-button",{staticClass:"mt-3",attrs:{type:"primary"},on:{click:e.addValue}},[e._v("添加策略")])],1)])],1)},r=[],n=a("6590"),i={inject:["app","layout"],mixins:[n["a"]],data:function(){return{drawer:!1,drawerId:0,preUrl:"express",activeName:"second",tableData:[],form:{customer:"",key:""},createModal:!1,modal:{name:"",order:50,type:0},modalIndex:-1,express_values:[],props:{multiple:!0,label:"name",value:"name"},options:[]}},filters:{formatType:function(e){var t=["按件数","按重量"];return t[e]}},methods:{getListResult:function(e){console.log(e),this.tableData=e.list,this.options=e.area.map((function(e){return e.children=e.citys.map((function(e){return e.children=e.districts,e})),e}))},openModal:function(e){if(!1===e)return this.modal={name:"",order:50,type:0},this.modalIndex=-1,this.createModal=!0;var t=this.tableData[e];this.modal={name:t.name,order:t.order,type:t.type},this.modalIndex=e,this.createModal=!0},submit:function(){var e=0;-1!==this.modalIndex&&(e=this.tableData[this.modalIndex].id),this.addOrEdit(this.modal,e),this.createModal=!1},openDrawer:function(e){this.express_values=e.express_values,this.drawer=!0,this.drawerId=e.id},addValue:function(){var e=this;this.axios.post("/admin/express_value",{first:0,first_price:0,add:0,add_price:0,express_id:this.drawerId,region:[["全国","所有","所有"]]},{token:!0}).then((function(t){var a=t.data.data;e.express_values.push(a)}))},deleteValue:function(e,t){var a=this;this.axios.post("/admin/express_value/"+e.id+"/delete",{},{token:!0}).then((function(e){a.express_values.splice(t,1),a.$message({type:"success",message:"删除成功"})}))},change:function(e){this.axios.post("/admin/express_value/"+e.id,e,{token:!0}).then((function(e){console.log(e)}))}}},o=i,s=a("2877"),c=Object(s["a"])(o,l,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d229624.ddee13a1.js.map