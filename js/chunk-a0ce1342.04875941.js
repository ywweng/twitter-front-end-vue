(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0ce1342"],{"06eb":function(t,e,s){"use strict";s("d9b8")},"0bf5":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ms-0",attrs:{id:"popular-user"}},[s("div",{staticClass:"title menu-text w-100"},[t._v("Popular")]),t.isLoading?s("Spinner"):t._e(),t._l(t.users,(function(e){return s("div",{key:e.id,staticClass:"user d-flex align-items-center"},[s("div",{},[s("router-link",{attrs:{to:{name:"user-profile",params:{userId:e.id}}}},[s("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:"",width:"50px"}})])],1),s("div",{staticClass:"account d-flex flex-column me-auto"},[s("span",{staticClass:"text-name"},[t._v(t._s(e.name))]),s("span",{staticClass:"text-account"},[t._v("@"+t._s(e.account))])]),s("div",{staticClass:"follow"},[e.isFollowed?s("button",{staticClass:"btn-following",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.deleteFollowing(e.id)}}},[t._v(" 正在跟隨 ")]):s("button",{staticClass:"btn-follow",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFollowing(e.id)}}},[t._v(" 跟隨 ")])])])}))],2)},a=[],n=s("5530"),i=s("1da1"),o=(s("96cf"),s("d9e2"),s("d81d"),s("2375")),c=s("1602"),l={components:{Spinner:o["a"]},data:function(){return{users:[],isLoading:!0,alertMsg:"",alertStatus:!1}},created:function(){this.fetchTopUsers()},methods:{alertShow:function(){var t=this,e=s("7b17"),r=document.querySelector("#alert");e.Alert.getInstance(r),setTimeout((function(){t.alertStatus=!1}),2e3)},fetchTopUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getTopUsers();case 3:if(s=e.sent,r=s.data,"error"!==r.status){e.next=7;break}throw new Error(r.message);case 7:t.users=r.data,t.isLoading=!1,e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](0),t.alertMsg=e.t0.response.data.message,t.alertStatus="error",t.alertShow();case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))()},addFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c["a"].addFollowing({id:t});case 3:if(r=s.sent,a=r.data,"success"===a.status){s.next=7;break}throw new Error(a.message);case 7:e.users=e.users.map((function(e){return e.id!==t?e:Object(n["a"])(Object(n["a"])({},e),{},{isFollowed:!0})})),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),console.log(s.t0.response.data.message);case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()},deleteFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c["a"].deleteFollowing({followingId:t});case 3:if(r=s.sent,a=r.data,"success"===a.status){s.next=7;break}throw new Error(a.message);case 7:e.users=e.users.map((function(e){return e.id!==t?e:Object(n["a"])(Object(n["a"])({},e),{},{isFollowed:!1})})),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),console.log(s.t0.response.data.message);case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()}}},u=l,d=(s("e070"),s("2877")),m=Object(d["a"])(u,r,a,!1,null,"2b27d769",null);e["a"]=m.exports},"24bd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBzZiBkcIgEEW/V0FKSAlXAiXYAXRkOsh15HXAdRA78NiROA4QwwIbfDPrjErYNwsJECBGubi4sC7ulXF1MbsY0YDBi92F4uJzFMtdBeVeK1okKVm5VCVZjIlOLB5zsXhIPGek57ICgzkhVyv2yoBYcuJ0EM69M9qjEBchm7D8Egw1eWoFtYsFj6poCOSpEdTBtYtEntILNdJ3/xZLZruIEsGUHIV5c43xYstOuwiuYIlcFRzBw+WAfMEuckCeYDc5YF9wS046LOU+JaROwXdqOKIPt6+MRi03Dlxu9LE3xAZ9hvj5vMy5SbYkNQ4gR5Aw6CSZK0gYdJDkCBIGB0tyBQkDviT9l7NvRAvBLcl3+0Gb2S6iVDAlaSXy1AiukiS2t89rJii1chQJ0lL3F/z2jfaER9lfMKBDdDiPpA/uM6cDhfRWp/YAP/i+baL/EUwmlC/q3GC99lj5+Ndvq6RkJSc0mtujix+0qaj1YgqF/AMT2fbOKe1HBQAAAABJRU5ErkJggg=="},6783:function(t,e,s){"use strict";s("a4d3"),s("e01a");var r=s("2fa3");e["a"]={getTweets:function(){return r["b"].get("/tweets")},getOneTweet:function(t){var e=t.id;return r["b"].get("/tweets/".concat(e))},postTweet:function(t){var e=t.description;return r["b"].post("/tweets",{description:e})},getTweetReplies:function(t){var e=t.id;return r["b"].get("/tweets/".concat(e,"/replies"))},postTweetReply:function(t){var e=t.id,s=t.comment;return r["b"].post("/tweets/".concat(e,"/replies"),{comment:s})},addLike:function(t){var e=t.id;return r["b"].post("/tweets/".concat(e,"/like"))},deleteLike:function(t){var e=t.id;return r["b"].post("/tweets/".concat(e,"/unlike"))}}},"8d50":function(t,e,s){},"8f1f":function(t,e,s){},a7e0:function(t,e,s){t.exports=s.p+"img/UserProfileActive.008313ab.svg"},a92b:function(t,e,s){t.exports=s.p+"img/Setting.2ff65de4.svg"},b7d0:function(t,e,s){t.exports=s.p+"img/Menu.52b5f7af.svg"},c466:function(t,e,s){t.exports=s.p+"img/SettingActive.df6893fe.svg"},c4dc:function(t,e,s){t.exports=s.p+"img/MenuActive.e19deed5.svg"},d81d:function(t,e,s){"use strict";var r=s("23e7"),a=s("b727").map,n=s("1dde"),i=n("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},d9b8:function(t,e,s){},e01a:function(t,e,s){"use strict";var r=s("23e7"),a=s("83ab"),n=s("da84"),i=s("e330"),o=s("1a2d"),c=s("1626"),l=s("3a9b"),u=s("577e"),d=s("9bf2").f,m=s("e893"),f=n.Symbol,p=f&&f.prototype;if(a&&c(f)&&(!("description"in p)||void 0!==f().description)){var g={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=l(p,this)?new f(t):void 0===t?f():f(t);return""===t&&(g[e]=!0),e};m(v,f),v.prototype=p,p.constructor=v;var b="Symbol(test)"==String(f("test")),w=i(p.toString),h=i(p.valueOf),A=/^Symbol\((.*)\)[^)]+$/,x=i("".replace),C=i("".slice);d(p,"description",{configurable:!0,get:function(){var t=h(this),e=w(t);if(o(g,t))return"";var s=b?C(e,7,-1):x(e,A,"$1");return""===s?void 0:s}}),r({global:!0,forced:!0},{Symbol:v})}},e070:function(t,e,s){"use strict";s("8f1f")},e0f6:function(t,e,s){t.exports=s.p+"img/UserProfile.da93a574.svg"},efa6:function(t,e,s){"use strict";s("8d50")},fb62:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column h-100 py-3 ms-auto",attrs:{id:"menu"}},[r("div",{staticClass:"logo ms-3"},[r("img",{attrs:{src:s("bca0"),width:"30px"}})]),r("div",{staticClass:"mb-auto"},[r("div",{staticClass:"ms-3 mb-4 lh-1"},[r("ul",[r("li",{staticClass:"menu-icon mb-4"},[r("router-link",{staticClass:"menu-text",attrs:{to:"/main"}},[r("img",{staticClass:"me-3",attrs:{src:t.mainUrl}}),t._v(" 首頁 ")])],1),r("li",{staticClass:"menu-icon mb-4"},[r("router-link",{staticClass:"menu-text",attrs:{to:{name:"user-profile",params:{userId:t.currentUser.id}}}},[r("img",{staticClass:"profile-icon",attrs:{src:t.userProfileUrl}}),t._v(" 個人資料 ")])],1),r("li",{staticClass:"menu-icon mb-4"},[r("router-link",{staticClass:"menu-text",attrs:{to:{name:"setting"}}},[r("img",{staticClass:"me-3",attrs:{src:t.settingUrl}}),t._v(" 設定 ")])],1)])]),r("button",{staticClass:"btn-active btn-tweet w-100",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#new-tweet-modal"}},[t._v(" 推文 ")])]),r("div",[r("button",{staticClass:"ms-3 d-flex align-items-center",on:{click:t.logout}},[t._m(0),r("a",{staticClass:"menu-text ms-2 logout"},[t._v("登出")])])]),r("NewTweetModal"),!1!==t.alertStatus?r("div",{staticClass:"alert d-flex fixed-top",attrs:{id:"alert",role:"alert"}},[r("div",{staticClass:"ms-2 mx-auto my-auto text-alert"},[t._v(t._s(t.alertMsg))]),r("div",{staticClass:"ms-auto"},["error"===t.alertStatus?r("img",{attrs:{src:s("ba0e")}}):"success"===t.alertStatus?r("img",{attrs:{src:s("08f6")}}):t._e()])]):t._e()],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"me-2"},[r("img",{staticClass:"d-block",attrs:{width:"20px",src:s("24bd")}})])}],n=s("5530"),i=(s("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade",attrs:{id:"new-tweet-modal",tabindex:"-1","aria-labelledby":"newTweetModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[t._m(0),r("div",{staticClass:"modal-body d-flex"},[r("div",{},[r("img",{staticClass:"avatar",attrs:{width:"50px",src:t.currentUser.avatar,alt:""}})]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"input-new-tweet mt-2",attrs:{rows:"2",cols:"35",placeholder:"有什麼新鮮事？"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),r("div",{staticClass:"modal-footer"},[t.isError?r("span",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg))]):t._e(),r("button",{staticClass:"btn-active",attrs:{type:"submit",disabled:t.isProcessing},on:{click:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t._v(" 推文 ")])])])]),!1!==t.alertStatus?r("div",{staticClass:"alert d-flex fixed-top",attrs:{id:"alert",role:"alert"}},[r("div",{staticClass:"ms-2 mx-auto my-auto text-alert"},[t._v(t._s(t.alertMsg))]),r("div",{staticClass:"ms-auto"},["error"===t.alertStatus?r("img",{attrs:{src:s("ba0e")}}):"success"===t.alertStatus?r("img",{attrs:{src:s("08f6")}}):t._e()])]):t._e()])}),o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],c=s("1da1"),l=(s("96cf"),s("a4d3"),s("e01a"),s("2f62")),u=s("6783"),d={name:"NewTweetModal",data:function(){return{description:"",isError:!1,errorMsg:"",isProcessing:!1,alertMsg:"",alertStatus:!1}},computed:Object(n["a"])({},Object(l["b"])(["currentUser","newTweets"])),methods:{alertShow:function(){var t=this,e=s("7b17"),r=document.querySelector("#alert");e.Alert.getInstance(r),setTimeout((function(){t.alertStatus=!1}),2e3)},hideModal:function(){var t=s("7b17"),e=document.querySelector("#new-tweet-modal"),r=t.Modal.getInstance(e);setTimeout((function(){r.hide()}),1e3)},handleSubmit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.description){e.next=7;break}return t.isError=!0,t.errorMsg="內容不可空白",e.abrupt("return");case 7:if(!(t.description.length>140)){e.next=13;break}return t.isError=!0,t.errorMsg="字數不可超過 140 字",e.abrupt("return");case 13:t.isError=!1;case 14:return t.isProcessing=!0,e.next=17,u["a"].postTweet({description:t.description});case 17:s=e.sent,r=s.data,console.log(r),a={UserId:t.currentUser.id,description:t.description,replyCount:0,likeCount:0,createdAt:(new Date).toISOString(),User:{avatar:t.currentUser.avatar,name:t.currentUser.name,account:t.currentUser.account}},t.$store.commit("setNewTweet",a),t.alertMsg="推文成功",t.alertStatus="success",t.alertShow(),t.isProcessing=!1,t.description="",t.hideModal(),e.next=35;break;case 30:e.prev=30,e.t0=e["catch"](0),t.alertMsg=e.t0.response.data.message,t.alertStatus="error",t.alertShow();case 35:case"end":return e.stop()}}),e,null,[[0,30]])})))()}}},m=d,f=(s("06eb"),s("2877")),p=Object(f["a"])(m,i,o,!1,null,"5a8afb50",null),g=p.exports,v={name:"Menu",components:{NewTweetModal:g},data:function(){return{mainUrl:s("b7d0"),mainActiveUrl:s("c4dc"),userProfileUrl:s("e0f6"),userProfileActiveUrl:s("a7e0"),settingUrl:s("a92b"),settingActiveUrl:s("c466"),alertMsg:"",alertStatus:!1}},computed:Object(n["a"])({},Object(l["b"])(["currentUser","isAuthenticated","newTweets"])),methods:{alertShow:function(){var t=this,e=s("7b17"),r=document.querySelector("#alert");e.Alert.getInstance(r),setTimeout((function(){t.alertStatus=!1}),2e3)},logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/login")}},mounted:function(){var t=this;localStorage.getItem("token")||(this.alertMsg="您尚未登入",this.alertStatus="error",this.alertShow(),setTimeout((function(){t.$router.push("/login")}),5e3))},created:function(){"/main"===this.$route.path&&(this.mainUrl=this.mainActiveUrl),"user-tweets"===this.$route.name&&(this.userProfileUrl=this.userProfileActiveUrl),"/setting"===this.$route.path&&(this.settingUrl=this.settingActiveUrl)}},b=v,w=(s("efa6"),Object(f["a"])(b,r,a,!1,null,null,null));e["a"]=w.exports}}]);
//# sourceMappingURL=chunk-a0ce1342.04875941.js.map