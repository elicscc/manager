webpackJsonp([25],{"8HrM":function(e,n){},aAcf:function(e,n,t){"use strict";function i(e,n,t,i){var c=void 0!==window.screenLeft?window.screenLeft:screen.left,o=void 0!==window.screenTop?window.screenTop:screen.top,s=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-t/2+c,r=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-i/2+o,a=window.open(e,n,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+t+", height="+i+", top="+r+", left="+s);window.focus&&a.focus()}Object.defineProperty(n,"__esModule",{value:!0});var c={name:"login-social-signin",methods:{wechatHandleClick:function(e){this.$store.commit("SET_AUTH_TYPE",e);i("https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirectUri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect")+"&response_type=code&scope=snsapi_login#wechat_redirect",e,540,540)},tencentHandleClick:function(e){this.$store.commit("SET_AUTH_TYPE",e);i("https://graph.qq.com/oauth2.0/authorize?response_type=code&clientId=xxxxx&redirectUri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),e,540,540)}}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(n){return e.wechatHandleClick("wechat")}}},[t("span",{staticClass:"wx-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v(" Wechat\n  ")]),e._v(" "),t("div",{staticClass:"sign-btn",on:{click:function(n){return e.tencentHandleClick("tencent")}}},[t("span",{staticClass:"qq-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v(" QQ\n  ")])])},staticRenderFns:[]};var s=t("C7Lr")(c,o,!1,function(e){t("8HrM")},"data-v-db1236c6",null);n.default=s.exports}});
//# sourceMappingURL=25.f03acd7ac3d689891944.js.map