webpackJsonp([34],{cAwZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("f0da"),i=(n("X2Oc"),{data:function(){return{dataList:[],pointEnable:{}}},created:function(){this.getList()},methods:{getList:function(){var t=this;Object(a.b)({type:1,pid:0}).then(function(e){t.dataList=e.data.data})},show:function(t,e){var n=this;null==!this.pointEnable[e]||void 0==this.pointEnable[e]?Object(a.b)({type:2,pid:e}).then(function(a){for(var i=0;i<a.data.data.length;i++)n.dataList.splice(t+1,0,a.data.data[i]);n.pointEnable[e]=a.data.data.length}):(this.dataList.splice(t+1,this.pointEnable[e]),this.pointEnable[e]=null)}}}),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataList,fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{fixed:"",prop:"name",label:"菜单名称",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{class:1==e.row.type?"ivu-icon fa fa-folder-open-o fa-fw":"ivu-icon  el-icon-view",style:1==e.row.type?"margin-left: 0px":"margin-left: 20px"}),t._v(" "),n("span",{on:{click:function(n){return t.show(e.$index,e.row.id)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"",prop:"code",label:"权限标识",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"",prop:"description",label:"描述",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleClick(e.row)}}},[t._v("查看")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)},staticRenderFns:[]},o=n("C7Lr")(i,l,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=34.63711bd5883ee09b0e4f.js.map