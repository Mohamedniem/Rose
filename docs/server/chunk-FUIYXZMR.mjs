import './polyfills.server.mjs';
import{$ as l,$a as y,Ab as u,Bb as f,Fb as m,Ha as h,La as a,Xa as b,cb as _,db as s,eb as g,ib as p,jb as c,kb as r,qb as M,rb as d,ua as x,va as n}from"./chunk-64GSWUYP.mjs";var C=class e{width=n.required();height=n.required();color=n.required();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-loader"]],inputs:{width:[1,"width"],height:[1,"height"],color:[1,"color"]},standalone:!0,features:[m],decls:1,vars:2,consts:[[1,"loader"]],template:function(t,i){t&1&&r(0,"span",0),t&2&&_("width: "+i.width()+" ;height:"+i.height()+"; border: 5px dotted "+i.color()+";")},styles:[".loader[_ngcontent-%COMP%]{border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 2s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})};function w(e,o){if(e&1&&r(0,"img",2),e&2){let t=d(2);s("w-[13px] h-[15px] "+t.btnIconClasses()),y("src",t.btnIcon(),h)}}function P(e,o){if(e&1&&(p(0,"span"),u(1),c(),b(2,w,1,3,"img",1)),e&2){let t=d();s(t.btnTextClasses()),a(),f(t.btnText()),a(),g(t.btnIcon()?2:-1)}}function k(e,o){if(e&1&&(p(0,"span"),u(1),c(),r(2,"app-loader",3)),e&2){let t=d();s("text-primary"),a(),f(t.loadingMsg()+"...")}}var T=class e{btnText=n.required();btnIcon=n();btnIconClasses=n();btnClasses=n();isDisabled=n();isLoading=n();loadingMsg=n();btnTextClasses=n();handleBtnClick=x();onClick(){this.isDisabled()||this.handleBtnClick.emit()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-primary-btn"]],inputs:{btnText:[1,"btnText"],btnIcon:[1,"btnIcon"],btnIconClasses:[1,"btnIconClasses"],btnClasses:[1,"btnClasses"],isDisabled:[1,"isDisabled"],isLoading:[1,"isLoading"],loadingMsg:[1,"loadingMsg"],btnTextClasses:[1,"btnTextClasses"]},outputs:{handleBtnClick:"handleBtnClick"},standalone:!0,features:[m],decls:3,vars:3,consts:[[3,"click"],["alt","right arrow",3,"src","class"],["alt","right arrow",3,"src"],["width","20px","height","20px","color","var(--primary-color)"]],template:function(t,i){t&1&&(p(0,"a",0),M("click",function(){return i.onClick()}),b(1,P,3,4)(2,k,3,3),c()),t&2&&(s("flex items-center border-0  "+(i.isDisabled()?"bg-gray-300 text-primary":"bg-primary text-white cursor-pointer")+" "+(i.btnClasses()?i.btnClasses():" rounded-[30px] px-[31px] text-center justify-center h-[50px]")),a(),g(i.isLoading()?2:1))},dependencies:[C]})};export{T as a};
