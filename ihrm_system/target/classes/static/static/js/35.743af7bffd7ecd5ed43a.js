webpackJsonp([35],{AihV:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l("bd2Q"),s=l("/xqb"),i={data:function(){return{roleFormVisible:!1,formBase:{},checkedRoles:[],data:[],roles:[],id:null}},methods:{toAssignPrem:function(e){var t=this;Object(s.c)({id:e}).then(function(l){t.checkedRoles=l.data.data.roleIds,Object(o.d)().then(function(l){t.id=e,t.roles=l.data.data,t.roleFormVisible=!0})})},createData:function(){var e=this;Object(s.b)({id:this.id,roleIds:this.checkedRoles}).then(function(t){e.$message({message:t.data.message,type:t.data.success?"success":"error"}),e.roleFormVisible=!1})}}},a={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"add-form"},[l("el-dialog",{staticStyle:{height:"300px"},attrs:{title:"分配角色",visible:e.roleFormVisible},on:{"update:visible":function(t){e.roleFormVisible=t}}},[l("el-form",{staticStyle:{"margin-left":"120px",width:"500px"},attrs:{model:e.formBase,"label-position":"left","label-width":"120px"}},[l("el-checkbox-group",{model:{value:e.checkedRoles,callback:function(t){e.checkedRoles=t},expression:"checkedRoles"}},e._l(e.roles,function(t,o){return l("el-checkbox",{key:o,attrs:{label:t.id}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v("提交")]),e._v(" "),l("el-button",{on:{click:function(t){e.roleFormVisible=!1}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},r=l("C7Lr")(i,a,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=35.743af7bffd7ecd5ed43a.js.map