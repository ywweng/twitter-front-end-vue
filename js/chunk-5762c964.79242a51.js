(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5762c964"],{"3d4f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"new-reply-modal",tabindex:"-1","aria-labelledby":"newReplyModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body d-flex flex-column"},[s("div",{staticClass:"tweet-card d-flex"},[s("div",{staticClass:"h-100 d-flex flex-column"},[s("img",{staticClass:"avatar",attrs:{src:t.tweet.User.avatar,alt:"",width:"50px",height:"50px"}}),s("div",{staticClass:"border ms-4"})]),s("div",{staticClass:"tweet-info d-flex flex-column"},[s("div",{staticClass:"h-100"},[s("span",{staticClass:"text-name me-2"},[t._v(t._s(t.tweet.User.name))]),s("span",{staticClass:"text-account"},[t._v("@"+t._s(t.tweet.User.account)+"．"+t._s(t._f("fromNow")(t.tweet.createdAt)))])]),s("div",{staticClass:"tweet-content"},[t._v(" "+t._s(t.tweet.description)+" ")]),s("div",[s("span",{staticClass:"text-account"},[t._v("回覆給")]),s("span",{staticClass:"text-tag ms-2"},[t._v("@"+t._s(t.tweet.User.name))])])])]),s("div",{staticClass:"reply-content d-flex"},[s("div",[s("img",{staticClass:"avatar",attrs:{width:"50px",src:t.currentUser.avatar,alt:""}})]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"input-new-tweet mt-2",attrs:{rows:"5",cols:"50",placeholder:"推你的回覆"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),s("div",{staticClass:"modal-footer"},[t.isError?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg))]):t._e(),s("button",{staticClass:"btn-active",attrs:{type:"submit"},on:{click:t.handleSubmit}},[t._v(" 回覆 ")])])])]),!1!==t.alertStatus?s("div",{staticClass:"alert d-flex fixed-top",attrs:{id:"alert",role:"alert"}},[s("div",{staticClass:"ms-2 mx-auto my-auto text-alert"},[t._v(t._s(t.alertMsg))]),s("div",{staticClass:"ms-auto"},["error"===t.alertStatus?s("img",{attrs:{src:a("ba0e")}}):"success"===t.alertStatus?s("img",{attrs:{src:a("08f6")}}):t._e()])]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],n=a("1da1"),i=a("5530"),c=(a("96cf"),a("d9e2"),a("c1df")),o=a.n(c),l=a("2f62"),u=a("6783"),d={name:"NewReplyModal",props:{tweet:{type:[Array,Object]}},data:function(){return{comment:"",alertMsg:"",alertStatus:!1,isError:!1,errorMsg:""}},computed:Object(i["a"])({},Object(l["b"])(["currentUser"])),filters:{fromNow:function(t){return t?o()(t).fromNow():"-"}},methods:{alertShow:function(){var t=this,e=a("7b17"),s=document.querySelector("#alert");e.Alert.getInstance(s),setTimeout((function(){t.alertStatus=!1}),2e3)},hideModal:function(){var t=a("7b17"),e=document.querySelector("#new-reply-modal"),s=t.Modal.getInstance(e);setTimeout((function(){s.hide()}),1e3)},handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.comment){e.next=5;break}return t.isError=!0,t.errorMsg="內容不可空白",e.abrupt("return");case 5:return e.next=7,u["a"].postTweetReply({id:t.tweet.id,comment:t.comment});case 7:if(a=e.sent,s=a.data,"error"!==s.status){e.next=11;break}throw new Error(s.message);case 11:t.$emit("after-reply-submit",{tweetId:t.tweet.id,replyCount:t.tweet.replyCount+1}),t.$emit("after-single-reply",{User:t.currentUser,comment:t.comment,created_at:(new Date).toISOString()}),t.alertMsg="留言成功",t.alertStatus="success",t.alertShow(),t.comment="",t.hideModal(),e.next=26;break;case 20:e.prev=20,e.t0=e["catch"](0),t.comment="",t.alertMsg=e.t0.response.data.message,t.alertStatus="error",t.alertShow();case 26:case"end":return e.stop()}}),e,null,[[0,20]])})))()}}},m=d,f=(a("a167"),a("2877")),p=Object(f["a"])(m,s,r,!1,null,"c004f134",null);e["a"]=p.exports},6211:function(t,e,a){t.exports=a.p+"img/Reply.3004ae28.svg"},6783:function(t,e,a){"use strict";a("a4d3"),a("e01a");var s=a("2fa3");e["a"]={getTweets:function(){return s["b"].get("/tweets")},getOneTweet:function(t){var e=t.id;return s["b"].get("/tweets/".concat(e))},postTweet:function(t){var e=t.description;return s["b"].post("/tweets",{description:e})},getTweetReplies:function(t){var e=t.id;return s["b"].get("/tweets/".concat(e,"/replies"))},postTweetReply:function(t){var e=t.id,a=t.comment;return s["b"].post("/tweets/".concat(e,"/replies"),{comment:a})},addLike:function(t){var e=t.id;return s["b"].post("/tweets/".concat(e,"/like"))},deleteLike:function(t){var e=t.id;return s["b"].post("/tweets/".concat(e,"/unlike"))}}},7082:function(t,e,a){"use strict";a("b191")},9267:function(t,e,a){t.exports=a.p+"img/LikeActive.fc5a7556.svg"},"9bf3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-100",attrs:{id:"single-tweet"}},[t.isLoading?s("Spinner"):t._e(),s("div",{staticClass:"title menu-text"},[s("button",{staticClass:"d-flex",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[s("img",{staticClass:"my-auto",attrs:{src:a("ccfe"),width:"17px",height:"14px"}}),s("span",{staticClass:"ms-4 my-auto menu-text"},[t._v("推文")])])]),s("div",{staticClass:"tweet-section d-flex flex-column"},[s("div",{staticClass:"user-info d-flex"},[s("div",[s("img",{staticClass:"avatar",attrs:{src:t.tweet.User.avatar,alt:""}})]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text-name"},[t._v(t._s(t.tweet.User.name))]),s("span",{staticClass:"text-account"},[t._v("@"+t._s(t.tweet.User.account))])])]),s("div",{staticClass:"tweet d-flex flex-column w-100"},[s("div",{staticClass:"tweet-content"},[t._v(" "+t._s(t.tweet.description)+" ")]),s("div",{staticClass:"tweet-time w-100"},[t._v(t._s(t._f("format")(t.tweet.createdAt)))]),s("div",{staticClass:"like-reply"},[s("span",{staticClass:"text-reply"},[s("strong",[t._v(t._s(t.tweet.replyCount))]),t._v(" 回覆")]),s("span",{staticClass:"text-like"},[s("strong",[t._v(t._s(t.tweet.likeCount))]),t._v(" 喜歡次數")])]),s("div",{staticClass:"action"},[s("button",{staticClass:"btn-reply",attrs:{"data-bs-toggle":"modal","data-bs-target":"#new-reply-modal"}},[s("img",{attrs:{src:a("6211")}})]),t.tweet.isLiked?s("button",{staticClass:"btn-like",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(t.tweet.id)}}},[s("img",{attrs:{src:a("9267"),width:"24px"}})]):s("button",{staticClass:"btn-like",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(t.tweet.id)}}},[s("img",{attrs:{src:a("cb58")}})])])])]),s("div",{staticClass:"replies",attrs:{id:"reply-list"}},t._l(t.replies,(function(e){return s("div",{key:e.id,staticClass:"reply-card d-flex"},[s("div",[s("img",{staticClass:"avatar",attrs:{src:e.User.avatar,alt:""}})]),s("div",{staticClass:"tweet-info d-flex flex-column justify-content-evenly w-100 h-100"},[s("div",{},[s("span",{staticClass:"text-name me-2"},[t._v(t._s(e.User.name))]),s("span",{staticClass:"text-account"},[t._v("@"+t._s(e.User.account)+"．"+t._s(t._f("fromNow")(e.createdAt)))])]),s("div",[s("span",{staticClass:"text-account"},[t._v("回覆")]),s("span",{staticClass:"text-tag ms-2"},[t._v("@"+t._s(t.tweet.User.account))])]),s("div",[t._v(t._s(e.comment))])])])})),0),s("NewReplyModal",{attrs:{tweet:t.tweet},on:{"after-single-reply":t.afterSingleReply}})],1)},r=[],n=a("1da1"),i=a("5530"),c=(a("d9e2"),a("96cf"),a("6783")),o=a("3d4f"),l=a("2375"),u=a("2f62"),d=a("c1df"),m=a.n(d),f={name:"SingleTweet",components:{NewReplyModal:o["a"],Spinner:l["a"]},data:function(){return{tweet:[],replies:[],alertMsg:"",alertStatus:!1,isProcessing:!1,isLoading:!0}},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),filters:{format:function(t){return t?(m.a.locale("zh-tw"),m()(t).format("A hh:mm．LL")):"-"},fromNow:function(t){return t?m()(t).fromNow():"-"}},created:function(){this.fetchTweet(),this.fetchReplies()},methods:{alertShow:function(){var t=this,e=a("7b17"),s=document.querySelector("#alert");e.Alert.getInstance(s),setTimeout((function(){t.alertStatus=!1}),2e3)},fetchTweet:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getOneTweet({id:t.$route.params.tweetId});case 3:a=e.sent,s=a.data,t.tweet=s,t.isLoading=!1,e.next=14;break;case 9:e.prev=9,e.t0=e["catch"](0),t.alertMsg="載入推文失敗，請稍後再試",t.alertStatus="error",t.alertShow();case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()},fetchReplies:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getTweetReplies({id:t.tweet.id||t.$route.params.tweetId});case 3:if(a=e.sent,s=a.data,"error"!==s.status){e.next=7;break}throw new Error(s.message);case 7:t.replies=s,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),t.alertMsg="載入留言失敗，請稍後再試",t.alertStatus="error",t.alertShow();case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()},addLike:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].addLike({id:t});case 3:if(s=a.sent,r=s.data,e.isProcessing=!0,"error"!==r.status){a.next=8;break}throw new Error(r.message);case 8:e.tweet.likeCount=e.tweet.likeCount+1,e.tweet.isLiked=!0,e.isProcessing=!1,a.next=18;break;case 13:a.prev=13,a.t0=a["catch"](0),e.alertMsg="按讚失敗，請稍後再試",e.alertStatus="error",e.alertShow();case 18:case"end":return a.stop()}}),a,null,[[0,13]])})))()},deleteLike:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].deleteLike({id:t});case 3:if(s=a.sent,r=s.data,e.isProcessing=!0,"error"!==r.status){a.next=8;break}throw new Error(r.message);case 8:e.tweet.likeCount=e.tweet.likeCount-1,e.tweet.isLiked=!1,e.isProcessing=!1,a.next=18;break;case 13:a.prev=13,a.t0=a["catch"](0),e.alertMsg="按讚失敗，請稍後再試",e.alertStatus="error",e.alertShow();case 18:case"end":return a.stop()}}),a,null,[[0,13]])})))()},afterSingleReply:function(t){this.replies.unshift(Object(i["a"])({},t)),this.tweet.replyCount=this.tweet.replyCount+1}}},p=f,v=(a("7082"),a("2877")),w=Object(v["a"])(p,s,r,!1,null,"3d6983e5",null);e["default"]=w.exports},a167:function(t,e,a){"use strict";a("f2f5")},b191:function(t,e,a){},cb58:function(t,e,a){t.exports=a.p+"img/Like.ac406642.svg"},ccfe:function(t,e,a){t.exports=a.p+"img/back.55664783.svg"},e01a:function(t,e,a){"use strict";var s=a("23e7"),r=a("83ab"),n=a("da84"),i=a("e330"),c=a("1a2d"),o=a("1626"),l=a("3a9b"),u=a("577e"),d=a("9bf2").f,m=a("e893"),f=n.Symbol,p=f&&f.prototype;if(r&&o(f)&&(!("description"in p)||void 0!==f().description)){var v={},w=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=l(p,this)?new f(t):void 0===t?f():f(t);return""===t&&(v[e]=!0),e};m(w,f),w.prototype=p,p.constructor=w;var g="Symbol(test)"==String(f("test")),b=i(p.toString),h=i(p.valueOf),x=/^Symbol\((.*)\)[^)]+$/,C=i("".replace),_=i("".slice);d(p,"description",{configurable:!0,get:function(){var t=h(this),e=b(t);if(c(v,t))return"";var a=g?_(e,7,-1):C(e,x,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:w})}},f2f5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5762c964.79242a51.js.map