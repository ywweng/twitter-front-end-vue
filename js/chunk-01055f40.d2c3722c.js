(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01055f40"],{2375:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"bouncing-loader"},[n("div"),n("div"),n("div")])])}],a=(n("b434"),n("2877")),i={},s=Object(a["a"])(i,r,o,!1,null,"6c5d302b",null);e["a"]=s.exports},"408a":function(t,e,n){var r=n("e330");t.exports=r(1..valueOf)},"44d9":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("e330"),o=n("1d80"),a=n("577e"),i=n("5899"),s=r("".replace),c="["+i+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t){return function(e){var n=a(o(e));return 1&t&&(n=s(n,l,"")),2&t&&(n=s(n,u,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},7156:function(t,e,n){var r=n("1626"),o=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,s;return a&&r(i=e.constructor)&&i!==n&&o(s=i.prototype)&&s!==n.prototype&&a(t,s),t}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),o=n("da84"),a=n("e330"),i=n("94ca"),s=n("6eeb"),c=n("1a2d"),l=n("7156"),u=n("3a9b"),f=n("d9b5"),d=n("c04e"),p=n("d039"),g=n("241c").f,v=n("06cf").f,b=n("9bf2").f,w=n("408a"),m=n("58a8").trim,h="Number",I=o[h],_=I.prototype,x=o.TypeError,F=a("".slice),N=a("".charCodeAt),E=function(t){var e=d(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,o,a,i,s,c,l=d(t,"number");if(f(l))throw x("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=m(l),e=N(l,0),43===e||45===e){if(n=N(l,2),88===n||120===n)return NaN}else if(48===e){switch(N(l,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(a=F(l,2),i=a.length,s=0;s<i;s++)if(c=N(a,s),c<48||c>o)return NaN;return parseInt(a,r)}return+l};if(i(h,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var k,C=function(t){var e=arguments.length<1?0:I(E(t)),n=this;return u(_,n)&&p((function(){w(n)}))?l(Object(e),n,C):e},y=r?g(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;y.length>j;j++)c(I,k=y[j])&&!c(C,k)&&b(C,k,v(I,k));C.prototype=_,_.constructor=C,s(o,h,C)}},b434:function(t,e,n){"use strict";n("ec88")},d71b:function(t,e,n){"use strict";n("44d9")},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde"),i=a("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e6cd:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t.isLoading?n("Spinner"):t._e(),n("div",{staticClass:"follow-list"},t._l(t.followings,(function(e){return n("div",{key:e.followingId,staticClass:"user-card d-flex position-relative"},[n("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:""}}),n("div",{staticClass:"user-info d-flex flex-column"},[n("div",{staticClass:"text-name"},[t._v(t._s(e.name))]),n("div",{staticClass:"text-account ms-0"},[t._v("@"+t._s(e.account))]),n("div",{staticClass:"text-content"},[t._v(" "+t._s(e.introduction)+" ")])]),t.isFollowing?n("button",{staticClass:"btn btn-following position-absolute",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFollowing(t.followingId)}}},[t._v(" 正在跟隨 ")]):n("button",{staticClass:"btn btn-follow position-absolute",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFollowing(t.followingId)}}},[t._v(" 跟隨 ")])])})),0)],1)},o=[],a=n("1da1"),i=n("5530"),s=(n("96cf"),n("a9e3"),n("d81d"),n("2375")),c=n("2fa3"),l=n("1602"),u=n("2f62"),f={name:"userFollowingList",components:{Spinner:s["a"]},props:{userId:{type:Number,default:14}},data:function(){return{followings:[],isLoading:!0,isFollowing:!0}},created:function(){var t=this.userId;this.fetchFollowing(t)},watch:{userId:function(t){this.fetchFollowing(t)}},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),methods:{fetchFollowing:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l["a"].getUserFollowing({userId:t});case 3:r=n.sent,o=r.data,e.followings=o,e.isLoading=!1,n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),e.isLoading=!1;case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},addFollowing:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l["a"].addFollowing({id:t});case 3:r=n.sent,o=r.data,c["a"].fire({icon:"error",title:o.message}),e.followings=e.followings.map((function(e){return e.followingId!==t?e:Object(i["a"])(Object(i["a"])({},e),{},{isFollowed:!0})})),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),console.log(n.t0.response.data.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},deleteFollowing:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l["a"].deleteFollowing({followingId:t});case 3:r=n.sent,o=r.data,c["a"].fire({icon:"error",title:o.message}),e.followings=e.followings.map((function(e){return e.followingId!==t?e:Object(i["a"])(Object(i["a"])({},e),{},{isFollowed:!0})})),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),c["a"].fire({icon:"error",title:n.t0.response.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}}},d=f,p=(n("d71b"),n("2877")),g=Object(p["a"])(d,r,o,!1,null,"39762369",null);e["default"]=g.exports},ec88:function(t,e,n){}}]);
//# sourceMappingURL=chunk-01055f40.d2c3722c.js.map