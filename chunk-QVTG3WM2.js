import{a as E,b as D,c as I,d as B}from"./chunk-K6O7BOLI.js";import{C as m,E as g,H as i,I as r,J as l,L as w,M as x,R as f,S as v,U as d,V as u,W as U,fa as F,ga as b,i as h,ia as P,l as C,pa as M,ra as S,sa as A,v as a,x as c,y}from"./chunk-4ZWRJEC3.js";var p=class t{constructor(n){this.http=n}Getlogin(n,o){return this.http.get(`https://api.hotsys.com.br/api/dashboard?login=${n}&password=${o}`).toPromise().then(e=>e)}static \u0275fac=function(o){return new(o||t)(C(P))};static \u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})};function k(t,n){if(t&1&&(i(0,"div",18)(1,"p"),f(2),r()()),t&2){let o=x();a(2),v(o.mensagem)}}function z(t,n){t&1&&(i(0,"span",19),f(1,"Entrar"),r())}function N(t,n){t&1&&(i(0,"span",19),f(1,"Carregando..."),r())}function R(t,n){t&1&&l(0,"i",20)}function K(t,n){t&1&&l(0,"div",21)}var L=class t{constructor(n,o,e){this.loginService=n;this.router=o;this.authService=e}email="";password="";loadingLogin=!1;mensagem="";login(){this.loadingLogin=!0,this.loginService.Getlogin(this.email,this.password).then(n=>{this.authService.setToken(n.token),this.loadingLogin=!1,this.router.navigate(["/tv"])},n=>{this.loadingLogin=!1,this.mensagem=n?.error?.mensagem||n?.error?.message})}static \u0275fac=function(o){return new(o||t)(c(p),c(M),c(A))};static \u0275cmp=y({type:t,selectors:[["app-login"]],decls:22,vars:7,consts:[[1,"fundo"],[1,"container"],[1,"screen"],[1,"screen__content"],["src","/sys.png","alt","Logo",1,"logo"],[1,"login"],[1,"login__field"],[1,"login__icon","fas","fa-user"],["type","text","autofocus","","placeholder","Login",1,"login__input",3,"ngModelChange","ngModel"],[1,"login__icon","fas","fa-lock"],["type","password","placeholder","Password",1,"login__input",3,"ngModelChange","ngModel"],["class","error-message",4,"ngIf"],[1,"button","login__submit",3,"click"],["class","button__text",4,"ngIf"],["class","button__icon fas fa-chevron-right",4,"ngIf"],["class","spinner",4,"ngIf"],[1,"social-login"],[1,"screen__background"],[1,"error-message"],[1,"button__text"],[1,"button__icon","fas","fa-chevron-right"],[1,"spinner"]],template:function(o,e){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),l(4,"img",4),i(5,"div",5)(6,"div",6),l(7,"i",7),i(8,"input",8),U("ngModelChange",function(s){return u(e.email,s)||(e.email=s),s}),r()(),i(9,"div",6),l(10,"i",9),i(11,"input",10),U("ngModelChange",function(s){return u(e.password,s)||(e.password=s),s}),r()(),m(12,k,3,1,"div",11),i(13,"button",12),w("click",function(){return e.login()}),m(14,z,2,0,"span",13)(15,N,2,0,"span",13)(16,R,1,0,"i",14)(17,K,1,0,"div",15),r()(),i(18,"div",16)(19,"h3"),f(20,"Log In TV"),r()()(),l(21,"div",17),r()()()),o&2&&(a(8),d("ngModel",e.email),a(3),d("ngModel",e.password),a(),g("ngIf",e.mensagem),a(2),g("ngIf",!e.loadingLogin),a(),g("ngIf",e.loadingLogin),a(),g("ngIf",!e.loadingLogin),a(),g("ngIf",e.loadingLogin))},dependencies:[b,F,B,E,D,I,S],styles:['@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0;font-family:Raleway,sans-serif}.fundo[_ngcontent-%COMP%]{background:url(/fundologin.png) no-repeat center center;width:100%;height:100%;top:0%;left:0%;border-radius:0;opacity:1;position:fixed;transform:translate(0);background-size:cover;box-shadow:0 4px 8px #0003;transition:opacity .3s ease,transform .3s ease;z-index:9998}.container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh}.screen[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff9100,#ff4800);position:relative;height:600px;width:360px;box-shadow:0 0 24px #ff6a14;border-radius:10px}.screen__content[_ngcontent-%COMP%]{z-index:1;position:relative;height:100%}.screen__background[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}.login[_ngcontent-%COMP%]{width:320px;padding:120px 30px 30px}.login__field[_ngcontent-%COMP%]{padding:20px 0;position:relative}.login__icon[_ngcontent-%COMP%]{position:absolute;top:30px;color:#ff4500}.login__input[_ngcontent-%COMP%]{border:none;border-bottom:2px solid #D1D1D4;background:none;padding:10px 10px 10px 24px;font-weight:700;width:75%;transition:.2s}.login__submit[_ngcontent-%COMP%]{background:#fff;font-size:14px;margin-top:30px;padding:16px 20px;border-radius:26px;border:1px solid #D4D3E8;text-transform:uppercase;font-weight:700;display:flex;align-items:center;width:100%;color:#ff4500;box-shadow:0 2px 2px #d2691e;cursor:pointer;transition:.2s}.login__submit[_ngcontent-%COMP%]:active, .login__submit[_ngcontent-%COMP%]:focus, .login__submit[_ngcontent-%COMP%]:hover{border-color:#9e7d67;outline:none}.button__icon[_ngcontent-%COMP%]{font-size:24px;margin-left:auto;color:#7875b5}.social-login[_ngcontent-%COMP%]{position:absolute;height:140px;width:160px;text-align:center;bottom:0;right:0;color:#fff}.social-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.social-login__icon[_ngcontent-%COMP%]{padding:20px 10px;color:#fff;text-decoration:none;text-shadow:0px 0px 8px #7875B5}.social-login__icon[_ngcontent-%COMP%]:hover{transform:scale(1.5)}.logo[_ngcontent-%COMP%]{width:100px;margin:20px auto;padding-left:15px}.spinner[_ngcontent-%COMP%]{border:3px solid #f3f3f3;border-top:3px solid #FF4500;border-radius:50%;width:20px;margin-left:8px;height:20px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}button[disabled][_ngcontent-%COMP%]{background-color:#f1f1f1;cursor:not-allowed;opacity:.6}button[_ngcontent-%COMP%]:not([disabled]){cursor:pointer}.error-message[_ngcontent-%COMP%]{color:#ff9090;font-size:14px;margin-bottom:10px;text-align:start;background-color:#0c000b8a;padding:8px;border-radius:5px}']})};export{L as LoginComponent};
