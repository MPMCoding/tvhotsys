import{J as m,Z as c,i as p,ja as s,ka as f,l as n,la as l,ma as u,na as v,oa as d,pa as h,qa as C,sa as g,y as a}from"./chunk-4ZWRJEC3.js";var i=class t{constructor(o,e){this.router=o;this.authService=e}canActivate(o,e){return this.authService.getToken()?!0:(this.router.navigate(["/"]),!1)}static \u0275fac=function(e){return new(e||t)(n(h),n(g))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})},S=[{path:"",loadComponent:()=>import("./chunk-RR6YRCOC.js").then(t=>t.LoginComponent)},{path:"tv",canActivate:[i],loadComponent:()=>import("./chunk-D7YNNYMP.js").then(t=>t.SlideShowComponent)}];var A={providers:[c({eventCoalescing:!0}),C(S),v(u()),s(f())]};var r=class t{title="tvhotsys";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,b){e&1&&m(0,"router-outlet")},dependencies:[d],encapsulation:2})};l(r,A).catch(t=>console.error(t));
