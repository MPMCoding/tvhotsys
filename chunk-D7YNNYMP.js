import{d as H}from"./chunk-K6O7BOLI.js";import{C as m,E as r,F as _,G as g,H as l,I as s,J as u,K as S,L as v,M as d,N as R,O as C,P as y,Q as w,R as c,S as p,T as L,Y as E,a as b,c as I,da as V,ea as U,fa as j,ga as D,ha as T,i as z,ia as q,l as P,n as x,o as h,pa as M,sa as B,t as A,u as F,v as o,x as k,y as $}from"./chunk-4ZWRJEC3.js";var O=class i{constructor(t,e,n){this.http=t;this.authService=e;this.router=n}getSessoes(){let t=this.authService.getToken(),e=new T({Authorization:`Bearer ${t}`});return this.http.get("https://api.hotsys.com.br/api/gap/suporte/slideshow",{headers:e}).toPromise()}enviarSessao(t){let e=this.authService.getToken(),n=new T({Authorization:`Bearer ${e}`});return this.http.post("https://api.hotsys.com.br/api/gap/suporte/slideshow",t,{headers:n}).toPromise()}static \u0275fac=function(e){return new(e||i)(P(q),P(B),P(M))};static \u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"})};var J=["dadosListaVendaUnidade"],W=["dadosListaVendaUnidadeColuna"],X=["dadosListaVenda"],Z=["dadosListaVendaColuna"],ee=["dadosListaAniversariante"],te=["dadosListaAniversarianteColuna"],ie=i=>({maximized:i}),ne=i=>({active:i}),oe=i=>({"center-single":i});function ae(i,t){if(i&1&&(l(0,"div",30),u(1,"div",31),l(2,"p",32),c(3),s(),l(4,"p",33),c(5),s()()),i&2){let e=t.$implicit,n=d(3).$implicit,a=d();o(),_("background-image","url("+(e.url_lider||"./sessaofotos/avatar_padrao.avif")+")"),o(2),p(e.unidade),o(2),p(a.transformReal(e.valor_base_comissao,n.tipo_sumalizacao))}}function le(i,t){if(i&1&&(l(0,"div",28,0),m(2,ae,6,4,"div",29),s()),i&2){let e=d(2).$implicit;g("scrollable",(e==null||e.dados==null||e.dados.agentes==null?null:e.dados.agentes.length)>4),r("id",e.id_scroll),o(2),r("ngForOf",e==null||e.dados==null?null:e.dados.agentes)}}function se(i,t){if(i&1&&(l(0,"div",36),u(1,"div",31),l(2,"p",37),c(3),s()()),i&2){let e=t.$implicit,n=d(3).$implicit,a=d();o(),_("background-image","url("+(e.url_agente||"./sessaofotos/avatar_padrao.avif")+")"),o(2),p(e.unidade+" - "+a.transformReal(e.valor_base_comissao,n.tipo_sumalizacao))}}function de(i,t){if(i&1&&(l(0,"div",34,1),m(2,se,4,3,"div",35),s()),i&2){let e=d(2).$implicit;g("scrollable",(e==null||e.dados==null?null:e.dados.agentes.length)>5),r("id",e.id_scroll),o(2),r("ngForOf",e==null||e.dados==null?null:e.dados.agentes)}}function re(i,t){if(i&1&&(l(0,"p",44),c(1),s()),i&2){let e=d().$implicit,n=d(3).$implicit,a=d();o(),p(e.unidade+" - "+a.transformReal(e.valor_base_comissao,n.tipo_sumalizacao))}}function ce(i,t){if(i&1&&(l(0,"p",45),c(1),s()),i&2){let e=d().$implicit,n=d(3).$implicit,a=d();o(),p(e.unidade+" - "+a.transformReal(e.valor_base_comissao,n.tipo_sumalizacao))}}function pe(i,t){if(i&1&&(l(0,"div",40),m(1,re,2,1,"p",41),u(2,"div",42),m(3,ce,2,1,"p",43),s()),i&2){let e=t.$implicit,n=t.index,a=d(3).$implicit;g("central",n===1&&a.dados.agentes.length===3)("lateral",n!==1||a.dados.agentes.length!==3),o(),r("ngIf",n===1),o(),_("background-image","url("+(e.url_agente||"./sessaofotos/avatar_padrao.avif")+")"),g("segundo",n===0)("terceiro",n===2),o(),r("ngIf",n!==1)}}function me(i,t){if(i&1&&(l(0,"div",38),m(1,pe,4,12,"div",39),s()),i&2){let e=d(2).$implicit;o(),r("ngForOf",e==null||e.dados==null?null:e.dados.agentes)}}function ue(i,t){if(i&1){let e=S();l(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"h4"),c(5),s(),l(6,"p"),c(7),s(),l(8,"h3",21),c(9),s()()(),l(10,"div",22)(11,"img",23),v("click",function(){x(e);let a=d(2);return h(a.toggleMaximize())}),s()()(),l(12,"div",24),m(13,le,3,4,"div",25)(14,de,3,4,"div",26)(15,me,2,1,"div",27),s()()}if(i&2){let e=d().$implicit;o(5),p(e==null?null:e.nome),o(2),p(e==null?null:e.subtitulo),o(2),p(e==null?null:e.data),o(4),r("ngIf",(e==null?null:e.layout)=="L"),o(),r("ngIf",(e==null?null:e.layout)=="C"&&(e==null||e.dados==null||e.dados.agentes==null?null:e.dados.agentes.length)>0),o(),r("ngIf",(e==null?null:e.layout)=="D"&&(e==null||e.dados==null||e.dados.agentes==null?null:e.dados.agentes.length)>0)}}function _e(i,t){if(i&1&&(l(0,"div",19),u(1,"div",52),l(2,"div",20)(3,"h4"),c(4),s(),l(5,"p"),c(6),s()()()),i&2){let e=d(2).$implicit;o(),_("background-image","url("+((e==null?null:e.url_lider)||"./sessaofotos/avatar_padrao.avif")+")"),o(3),p(e==null?null:e.unidade),o(2),p(e==null?null:e.lider)}}function ge(i,t){if(i&1&&(l(0,"div",19)(1,"div",20)(2,"h4"),c(3),s(),l(4,"p"),c(5),s(),l(6,"p"),c(7),s()()()),i&2){let e=d(2).$implicit;o(3),p(e==null?null:e.nome),o(2),p(e==null?null:e.subtitulo),o(2),p(e==null?null:e.data)}}function fe(i,t){if(i&1&&(l(0,"h3"),c(1),s()),i&2){let e=d(2).$implicit;o(),p(e==null?null:e.nome)}}function ve(i,t){if(i&1&&(l(0,"h3"),c(1),s()),i&2){let e=d(2).$implicit;o(),p(e==null?null:e.subtitulo)}}function xe(i,t){if(i&1&&(l(0,"h3",21),c(1),s()),i&2){let e=d(2).$implicit;o(),p(e==null?null:e.data)}}function he(i,t){if(i&1&&(l(0,"div",30),u(1,"div",31),l(2,"p",32),c(3),s(),l(4,"p",33),c(5),s()()),i&2){let e=t.$implicit,n=d(3).$implicit,a=d();o(),_("background-image","url("+(e.url_agente||"/sessaofotos/avatar_padrao.avif")+")"),o(2),p(e.nome_agente),o(2),p(a.transformReal(e.valor_base_comissao,n.tipo_sumalizacao))}}function Se(i,t){if(i&1&&(l(0,"div",28,2),m(2,he,6,4,"div",29),s()),i&2){let e=d(2).$implicit;g("scrollable",(e==null||e.propostas==null?null:e.propostas.length)>4),r("id",e.id_scroll),o(2),r("ngForOf",e==null?null:e.propostas)}}function Ce(i,t){if(i&1&&(l(0,"div",36),u(1,"div",31),l(2,"p",37),c(3),s()()),i&2){let e=t.$implicit,n=d(3).$implicit,a=d();o(),_("background-image","url("+(e.url_agente||"/sessaofotos/avatar_padrao.avif")+")"),o(2),p(e.nome_agente+" - "+a.transformReal(e.valor_base_comissao,n.tipo_sumalizacao))}}function ye(i,t){if(i&1&&(l(0,"div",34,3),m(2,Ce,4,3,"div",35),s()),i&2){let e=d(2).$implicit;g("scrollable",(e==null||e.dados==null?null:e.dados.propostas.length)>12),r("id",e.id_scroll),o(2),r("ngForOf",e==null?null:e.propostas)}}function we(i,t){if(i&1&&(l(0,"p",44),c(1),s()),i&2){let e=d().$implicit,n=d(3).$implicit,a=d();o(),p("1\xBA "+e.nome_agente+" - "+a.transformReal(e.valor_base_comissao,n.tipo_sumalizacao))}}function be(i,t){if(i&1&&(l(0,"p",45),c(1),s()),i&2){let e=d(),n=e.$implicit,a=e.index,f=d(3).$implicit,N=d();o(),p((a==0?"2\xBA ":"3\xBA ")+n.nome_agente+" - "+N.transformReal(n.valor_base_comissao,f.tipo_sumalizacao))}}function Ie(i,t){if(i&1&&(l(0,"div",40),m(1,we,2,1,"p",41),u(2,"div",42),m(3,be,2,1,"p",43),s()),i&2){let e=t.$implicit,n=t.index,a=d(3).$implicit;g("central",n===1&&(a==null?null:a.propostas.length)===3)("lateral",n!==1||(a==null?null:a.propostas.length)!==3),o(),r("ngIf",n===1),o(),_("background-image","url("+(e.url_agente||"/sessaofotos/avatar_padrao.avif")+")"),g("segundo",n===0)("terceiro",n===2),o(),r("ngIf",n!==1)}}function Pe(i,t){if(i&1&&(l(0,"div",38),m(1,Ie,4,12,"div",39),s()),i&2){let e=d(2).$implicit;o(),r("ngForOf",e==null?null:e.propostas)}}function Ee(i,t){if(i&1){let e=S();l(0,"div",46)(1,"div",18),m(2,_e,7,4,"div",47)(3,ge,8,3,"div",47),l(4,"div",22)(5,"img",48),v("click",function(){x(e);let a=d(2);return h(a.toggleMaximize())}),s(),m(6,fe,2,1,"h3",49)(7,ve,2,1,"h3",49)(8,xe,2,1,"h3",50),s()(),l(9,"div",51)(10,"p"),c(11),s()(),l(12,"div",24),m(13,Se,3,4,"div",25)(14,ye,3,4,"div",26)(15,Pe,2,1,"div",27),s()()}if(i&2){let e=d().$implicit,n=d();o(2),r("ngIf",!(e!=null&&e.agrupar_agente)),o(),r("ngIf",e==null?null:e.agrupar_agente),o(3),r("ngIf",!(e!=null&&e.agrupar_agente)),o(),r("ngIf",!(e!=null&&e.agrupar_agente)),o(),r("ngIf",!(e!=null&&e.agrupar_agente)),o(3),L("Total: ",n.transformReal(e==null?null:e.valor_base_comissao,e.tipo_sumalizacao),""),o(2),r("ngIf",(e==null?null:e.layout)=="L"),o(),r("ngIf",(e==null?null:e.layout)=="C"&&(e==null?null:e.propostas.length)>0),o(),r("ngIf",(e==null?null:e.layout)=="D"&&(e==null?null:e.propostas.length)>0)}}function Me(i,t){if(i&1&&(l(0,"h3",59),c(1),s()),i&2){let e=d(2).$implicit;o(),p(e==null||e.dados==null?null:e.dados.unidade)}}function Oe(i,t){if(i&1&&(l(0,"div",30),u(1,"div",31),l(2,"p"),c(3),s()()),i&2){let e=t.$implicit;o(),_("background-image","url("+(e.url||"/sessaofotos/avatar_padrao.avif")+")"),o(2),p(e.conteudo)}}function ke(i,t){if(i&1&&(l(0,"div",28,4),m(2,Oe,4,3,"div",29),s()),i&2){let e=d(2).$implicit;g("scrollable",(e==null||e.dados==null?null:e.dados.agentes.length)>6),r("id",e.id_scroll),o(2),r("ngForOf",e.dados.agentes)}}function Te(i,t){if(i&1&&(l(0,"div",36),u(1,"div",31),l(2,"p"),c(3),s()()),i&2){let e=t.$implicit;o(),_("background-image","url("+(e.url||"/sessaofotos/avatar_padrao.avif")+")"),o(2),p(e.conteudo)}}function ze(i,t){if(i&1&&(l(0,"div",34,5),m(2,Te,4,3,"div",35),s()),i&2){let e=d(2).$implicit;g("scrollable",(e==null||e.dados==null?null:e.dados.agentes.length)>5),r("id",e.id_scroll),o(2),r("ngForOf",e.dados.agentes)}}function Ae(i,t){if(i&1&&(l(0,"p",62),c(1),s()),i&2){let e=d().$implicit;o(),p(e.conteudo)}}function Fe(i,t){if(i&1&&(l(0,"p",45),c(1),s()),i&2){let e=d().$implicit;o(),p(e.conteudo)}}function $e(i,t){if(i&1&&(l(0,"div",40),m(1,Ae,2,1,"p",60),u(2,"div",61),m(3,Fe,2,1,"p",43),s()),i&2){let e=t.$implicit,n=t.index,a=d(3).$implicit;g("central",n===1&&a.dados.agentes.length===3)("lateral",n!==1||a.dados.agentes.length!==3),o(),r("ngIf",n===1),o(),_("background-image","url("+(e.url||"/sessaofotos/avatar_padrao.avif")+")"),o(),r("ngIf",n!==1)}}function Re(i,t){if(i&1&&(l(0,"div",38),m(1,$e,4,8,"div",39),s()),i&2){let e=d(2).$implicit;o(),r("ngForOf",e.dados.agentes)}}function Le(i,t){if(i&1){let e=S();l(0,"div",53)(1,"div",54)(2,"h3"),c(3),s(),l(4,"h3",55),c(5),s(),m(6,Me,2,1,"h3",56),l(7,"img",57),v("click",function(){x(e);let a=d(2);return h(a.toggleMaximize())}),s()(),l(8,"div",58),m(9,ke,3,4,"div",25)(10,ze,3,4,"div",26)(11,Re,2,1,"div",27),s()()}if(i&2){let e=d().$implicit;o(3),p(e==null?null:e.nome),o(2),p(e==null||e.dados==null?null:e.dados.data),o(),r("ngIf",e==null||e.dados==null?null:e.dados.unidade),o(3),r("ngIf",(e==null?null:e.layout)=="L"&&(e==null||e.dados==null?null:e.dados.agentes)&&(e==null||e.dados==null?null:e.dados.agentes.length)>0),o(),r("ngIf",(e==null?null:e.layout)=="C"&&(e==null||e.dados==null?null:e.dados.agentes)&&(e==null||e.dados==null?null:e.dados.agentes.length)>0),o(),r("ngIf",(e==null?null:e.layout)=="D"&&(e==null||e.dados==null?null:e.dados.agentes)&&(e==null||e.dados==null?null:e.dados.agentes.length)>0)}}function Ve(i,t){if(i&1&&(l(0,"div",69),u(1,"img",70),s()),i&2){let e=d(2).$implicit;o(),R("alt",e==null?null:e.autor),r("src",e==null?null:e.url_imagem,A)}}function Ue(i,t){if(i&1){let e=S();l(0,"div",63)(1,"div",64)(2,"img",57),v("click",function(){x(e);let a=d(2);return h(a.toggleMaximize())}),s()(),m(3,Ve,2,2,"div",65),l(4,"div",66)(5,"h3",67),c(6),s(),l(7,"p",68),c(8),s()()()}if(i&2){let e=d().$implicit;o(3),r("ngIf",e==null?null:e.url_imagem),o(3),p(e==null?null:e.autor),o(2),p(e==null?null:e.frase)}}function je(i,t){if(i&1&&(l(0,"div",76)(1,"p",44),c(2,"Maior Venda"),s(),u(3,"div",42),l(4,"p",77),c(5),s(),l(6,"p",77),c(7),s(),l(8,"p",77),c(9),s()()),i&2){let e=d(2).$implicit,n=d();g("lateral",!0),o(3),_("background-image","url("+(e.dados.agentes.maior_venda.url||"/sessaofotos/avatar_padrao.avif")+")"),o(2),p(e.dados.agentes.maior_venda.nome),o(2),p(n.transformNumeroReal(e.dados.agentes.maior_venda.valor_base_comissao)),o(2),p(e==null||e.dados==null?null:e.dados.data)}}function De(i,t){if(i&1&&(l(0,"div",40)(1,"p",44),c(2,"Recordista Venda"),s(),u(3,"div",42),l(4,"p",77),c(5),s(),l(6,"p",77),c(7),s(),l(8,"p",77),c(9),s()()),i&2){let e=d(2).$implicit,n=d();g("lateral",!0),o(3),_("background-image","url("+(e.dados.agentes.recordista_venda.url||"/sessaofotos/avatar_padrao.avif")+")"),o(2),p(e.dados.agentes.recordista_venda.nome),o(2),p(n.transformReal(e.dados.agentes.recordista_venda.valor_base_comissao,e.tipo_sumalizacao)),o(2),p(e==null||e.dados==null?null:e.dados.data)}}function qe(i,t){if(i&1){let e=S();l(0,"div",71)(1,"div",54)(2,"h3"),c(3),s(),l(4,"h3",21),c(5),s(),u(6,"h3",55),l(7,"h3",72),c(8),s(),l(9,"img",57),v("click",function(){x(e);let a=d(2);return h(a.toggleMaximize())}),s()(),l(10,"div",73),m(11,je,10,7,"div",74)(12,De,10,7,"div",75),s()()}if(i&2){let e=d().$implicit;o(3),p(e==null?null:e.nome),o(2),p(e==null?null:e.data),o(3),p(e==null?null:e.subtitulo),o(2),r("ngClass",E(6,oe,!(e.dados.agentes.recordista_venda!=null&&e.dados.agentes.recordista_venda.nome)||!(e.dados.agentes.maior_venda!=null&&e.dados.agentes.maior_venda.nome)||e.produto=="7")),o(),r("ngIf",(e.dados.agentes.maior_venda==null?null:e.dados.agentes.maior_venda.nome)&&e.produto!="7"),o(),r("ngIf",e.dados.agentes.recordista_venda==null?null:e.dados.agentes.recordista_venda.nome)}}function Be(i,t){if(i&1){let e=S();l(0,"div",78)(1,"div",54)(2,"h3"),c(3),s(),u(4,"h3",55),l(5,"img",57),v("click",function(){x(e);let a=d(2);return h(a.toggleMaximize())}),s()()()}if(i&2){let e=d().$implicit;o(3),p(e==null?null:e.nome)}}function He(i,t){if(i&1&&(l(0,"div",10),m(1,ue,16,6,"div",11)(2,Ee,16,9,"div",12)(3,Le,12,6,"div",13)(4,Ue,9,3,"div",14)(5,qe,13,8,"div",15)(6,Be,6,1,"div",16),s()),i&2){let e=t.$implicit,n=t.index,a=d();_("background-image","url("+(e==null?null:e.background)+")"),r("ngClass",E(9,ne,n===a.sessaoAtualIndex)),o(),r("ngIf",(e==null?null:e.tipo)=="S"&&(e==null?null:e.tipo_sessao)=="U"),o(),r("ngIf",(e==null?null:e.tipo)=="S"&&(e==null?null:e.tipo_sessao)=="A"),o(),r("ngIf",(e==null?null:e.tipo)=="A"),o(),r("ngIf",(e==null?null:e.layout)=="T"),o(),r("ngIf",(e==null?null:e.tipo)=="R"),o(),r("ngIf",(e==null?null:e.layout)=="F")}}var Q=class i{constructor(t,e){this.router=t;this.service=e}dadosListaVendaUnidade;dadosListaVendaUnidadeColuna;dadosListaVenda;dadosListaVendaColuna;dadosListaAniversariante;dadosListaAniversarianteColuna;loading=!1;visible=!0;isMaximized=!1;sessoes=[];carregamento=0;sessoesCarregadas=[];scrollInterval;sessaoAtualIndex=0;limiteProcessamento=6;passarSlideAutomatico;controleSessoes=0;ngOnInit(){this.carregamentoSessoes()}carregamentoSessoes(){this.service.getSessoes().then(t=>{this.loading=!1,this.sessoes=t,this.carregarSessoes()},t=>{this.carregamento<3&&(this.carregamento++,this.carregamentoSessoes())})}sessoesProntas=0;carregandoSessoes=!1;carregarSessoes(){return I(this,null,function*(){if(this.carregandoSessoes)return;this.carregandoSessoes=!0,this.carregamentoSessao=!0,this.pararSlideAutomatico();let t=this.sessaoAtualIndex+this.limiteProcessamento;for(let e=this.sessoesProntas;e<=t&&e<this.sessoes.length;e++){let n=this.sessoes[e];n.layout!=="F"&&n.layout!=="T"&&n.id_sessao?(yield this.enviarSessaoAoBackend(n),this.sessoesProntas=this.sessoesProntas+1):(this.sessoesCarregadas.push(n),this.sessoesProntas=this.sessoesProntas+1)}this.carregandoSessoes=!1,this.carregamentoSessao=!1,this.iniciarSlideAutomatico()})}indexScroll=0;enviarSessaoAoBackend(t){let e={id_sessao:t?.id_sessao,tipo_dado:t?.tipo_dado,id_unidade_negocios:t?.id_unidade_negocios,unidade_negocios:t?.unidade_negocios,tipo:t?.tipo,periodo:t?.periodo,status_proposta:t?.status_proposta,produto:t?.produto,tipo_sessao:t?.tipo_sessao,limite_agente:t?.limite_agente,limite_unidade:t?.limite_unidade,tipo_sumalizacao:t?.tipo_sumalizacao,agrupar_agente:t?.agrupar_agente};return this.service.enviarSessao(e).then(n=>{if(this.loading=!1,this.carregamento=0,n.ok===!1)return n;if(t?.tipo=="S"&&t?.tipo_sessao=="A")if(!t.agrupar_agente)n?.agentes.forEach(a=>{if(a.nome=t?.nome,a.subtitulo=t?.subtitulo,a.layout=t?.layout,a.tipo=t?.tipo,a.tipo_sessao=t?.tipo_sessao,a.agrupar_agente=t?.agrupar_agente,a.background=t?.background,a.id_scroll=this.indexScroll,a.data=n?.data,t?.layout==="D"&&a?.propostas?.length===3)if(a?.agentes){let f=b({},a?.propostas[0]);a.agentes[0]=a?.propostas[1],a.agentes[1]=f}else{let f=b({},a?.propostas[0]);a.propostas[0]=a?.propostas[1],a.propostas[1]=f}this.sessoesCarregadas.push(a),this.indexScroll=this.indexScroll+1});else{t.data=n.data;let a=0;if(n?.agentes.forEach(f=>{a+=f.valor_base_comissao}),t.valor_base_comissao=a,t?.layout==="D"&&n.agentes?.length===3){let f=b({},n.agentes[0]);n.agentes[0]=n?.agentes[1],n.agentes[1]=f}t.propostas=n.agentes,this.sessoesCarregadas.push(t)}else{if(t.layout==="D"&&n?.agentes?.length===3){let a=b({},n.agentes[0]);n.agentes[0]=n.agentes[1],n.agentes[1]=a}t.id_scroll=this.indexScroll,t.dados=n,t.data=n?.data,this.sessoesCarregadas.push(t),this.indexScroll=this.indexScroll+1}return n},n=>this.carregamento<3?(this.carregamento++,this.enviarSessaoAoBackend(t)):(this.sessoesProntas=this.sessoesProntas-1,Promise.reject(n)))}voltarSessao(){this.pararSlideAutomatico(),this.sessaoAtualIndex>0&&this.sessaoAtualIndex--,this.iniciarSlideAutomatico(),this.verificarCondicoesSlideAtual(),this.pararRolagem()}avancarSessao(){return I(this,null,function*(){this.pararSlideAutomatico(),this.pararRolagem(),!this.carregandoSessoes&&(this.sessoesProntas<this.sessoes.length&&(yield this.esperarCarregamentoProximoSlide()),setTimeout(()=>{if(this.sessaoAtualIndex<this.sessoesCarregadas.length-1){this.sessaoAtualIndex++;let t=this.sessaoAtualIndex+this.limiteProcessamento;this.sessoesProntas<=t&&this.sessaoAtualIndex<this.sessoes.length&&this.carregarSessoes()}else this.sessoesCarregadas=[],this.sessaoAtualIndex=0,this.sessoesProntas=0,this.carregamentoSessoes();this.verificarCondicoesSlideAtual(),this.iniciarSlideAutomatico()},2))})}carregamentoSessao=!1;esperarCarregamentoProximoSlide(){return I(this,null,function*(){let t=this.sessoesProntas,e=this.sessaoAtualIndex+this.limiteProcessamento;for(;(this.sessoesProntas<this.sessoes.length&&this.sessoesProntas<=e||this.carregandoSessoes)&&t==this.sessoesProntas;)this.carregamentoSessao=!0,yield new Promise(n=>setTimeout(n,500));this.carregamentoSessao=!1})}embaralharSessoes(){for(let t=this.sessoesCarregadas.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[this.sessoesCarregadas[t],this.sessoesCarregadas[e]]=[this.sessoesCarregadas[e],this.sessoesCarregadas[t]]}}pararRolagem(){this.scrollInterval&&(clearInterval(this.scrollInterval),this.scrollInterval=null);let t=this.dadosListaVenda?.nativeElement;t&&(t.scrollTop=0),t=this.dadosListaVendaColuna?.nativeElement,t&&(t.scrollTop=0),t=this.dadosListaVendaUnidade?.nativeElement,t&&(t.scrollTop=0),t=this.dadosListaVendaUnidadeColuna?.nativeElement,t&&(t.scrollTop=0),t=this.dadosListaAniversariante?.nativeElement,t&&(t.scrollTop=0),t=this.dadosListaAniversarianteColuna?.nativeElement,t&&(t.scrollTop=0)}verificarCondicoesSlideAtual(){let t=this.sessoesCarregadas[this.sessaoAtualIndex];(t?.layout==="L"&&t?.dados?.agentes?.length>5||t?.layout==="C"&&t?.dados?.agentes?.length>12||t?.layout==="L"&&t?.propostas?.length>5||t?.layout==="C"&&t?.propostas?.length>12)&&this.iniciarRolagem(t?.id_scroll)}iniciarRolagem(t){let e=0;clearInterval(e),this.pararSlideAutomatico(),setTimeout(()=>{let n=document.getElementById(t);if(!n)return;n.scrollTop=0,this.pararSlideAutomatico();let a=1,f=50;this.sessoesCarregadas[this.sessaoAtualIndex]?.layout=="C"&&(a=1.5),setTimeout(()=>{e=setInterval(()=>{this.pararSlideAutomatico(),n.scrollTop+=a,n.scrollTop+n.clientHeight>=n.scrollHeight&&(n.scrollTop=0,clearInterval(e),e=null,setTimeout(()=>this.avancarSessao(),3e3))},f),this.scrollInterval=e},50)},0)}iniciarSlideAutomatico(){this.pararSlideAutomatico(),this.passarSlideAutomatico=setInterval(()=>{this.avancarSessao()},1e4)}pararSlideAutomatico(){this.passarSlideAutomatico&&clearInterval(this.passarSlideAutomatico)}onKeyDown(t){t.key==="ArrowRight"?(this.pararSlideAutomatico(),this.avancarSessao()):t.key==="ArrowLeft"&&(this.pararSlideAutomatico(),this.voltarSessao())}toggleMaximize(){this.isMaximized=!this.isMaximized,this.isMaximized?this.enterFullScreen():this.exitFullScreen()}enterFullScreen(){let t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}exitFullScreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}transformReal(t,e){return typeof t=="string"&&(t=parseFloat(t.replace(",","."))),t!=null&&t!==void 0&&!isNaN(t)?e==="V"?t===0?"R$0,00":"R$"+t.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):t===0?"0":t.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,"."):t}transformNumeroReal(t){return t==""?t:(typeof t=="string"&&(t=parseFloat(t.replace(",","."))),t!=null&&t!==void 0&&!isNaN(t)?t===0?"R$0,00":"R$"+t.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):t)}ngOnDestroy(){this.pararSlideAutomatico(),this.pararRolagem(),this.carregandoSessoes=!1,this.carregamentoSessao=!1}static \u0275fac=function(e){return new(e||i)(k(M),k(O))};static \u0275cmp=$({type:i,selectors:[["ng-component"]],viewQuery:function(e,n){if(e&1&&(C(J,5),C(W,5),C(X,5),C(Z,5),C(ee,5),C(te,5)),e&2){let a;y(a=w())&&(n.dadosListaVendaUnidade=a.first),y(a=w())&&(n.dadosListaVendaUnidadeColuna=a.first),y(a=w())&&(n.dadosListaVenda=a.first),y(a=w())&&(n.dadosListaVendaColuna=a.first),y(a=w())&&(n.dadosListaAniversariante=a.first),y(a=w())&&(n.dadosListaAniversarianteColuna=a.first)}},hostBindings:function(e,n){e&1&&v("keydown",function(f){return n.onKeyDown(f)},!1,F)},decls:4,vars:4,consts:[["dadosListaVendaUnidade",""],["dadosListaVendaUnidadeColuna",""],["dadosListaVenda",""],["dadosListaVendaColuna",""],["dadosListaAniversariante",""],["dadosListaAniversarianteColuna",""],[1,"custom-dialog",3,"ngClass"],[1,"dialog-content"],[1,"slideshow-container"],["class","slide",3,"ngClass","backgroundImage",4,"ngFor","ngForOf"],[1,"slide",3,"ngClass"],["class","slide-vendas-unidade","style","width: 100% !important;",4,"ngIf"],["class","slide-vendas","style","width: 100% !important;",4,"ngIf"],["class","slide-aniversariantes",4,"ngIf"],["class","slide-citacao",4,"ngIf"],["class","slide-rank",4,"ngIf"],["class","slide-outro",4,"ngIf"],[1,"slide-vendas-unidade",2,"width","100% !important"],[1,"dialog-header-venda",2,"justify-content","space-between !important"],[1,"lider-info"],[1,"lider-detalhes"],[2,"font-size","3.5rem"],[1,"titulo-area"],["src","./sys.png","alt","HotSys Logo",1,"hotsys-logo-venda",3,"click"],[1,"slide-content",2,"width","100% !important","max-height","calc(100vh - 540px)"],["class","dados-lista",3,"scrollable","id",4,"ngIf"],["class","dados-lista-colunas",3,"scrollable","id",4,"ngIf"],["class","dados-lista-lado-a-lado",4,"ngIf"],[1,"dados-lista",3,"id"],["class","dado-item",4,"ngFor","ngForOf"],[1,"dado-item"],[1,"dado-foto"],[1,"dado-esquerda"],[1,"dado-direta"],[1,"dados-lista-colunas",3,"id"],["class","dado-item-coluna",4,"ngFor","ngForOf"],[1,"dado-item-coluna"],[2,"width","100% !important"],[1,"dados-lista-lado-a-lado"],["class","dado-item-lado-a-lado",3,"central","lateral",4,"ngFor","ngForOf"],[1,"dado-item-lado-a-lado"],["class","dado-nome central-nome",4,"ngIf"],[1,"dado-foto-grande"],["class","dado-nome lateral-nome",4,"ngIf"],[1,"dado-nome","central-nome"],[1,"dado-nome","lateral-nome"],[1,"slide-vendas",2,"width","100% !important"],["class","lider-info",4,"ngIf"],["src","./sys.png","alt","HotSys Logo",1,"hotsys-logo",3,"click"],[4,"ngIf"],["style","font-size: 3.5rem;",4,"ngIf"],[1,"total-area"],[1,"lider-foto"],[1,"slide-aniversariantes"],[1,"dialog-header"],[2,"font-size","30px","padding-top","0px"],["class","h1direita",4,"ngIf"],["src",".\\sys.png","alt","HotSys Logo",1,"hotsys-logo",3,"click"],[1,"slide-content"],[1,"h1direita"],["class","dado-nome central-nome","style","margin-right: 100px; padding: 0px;",4,"ngIf"],[1,"dado-foto-grande",2,"margin-right","100px","padding","0px"],[1,"dado-nome","central-nome",2,"margin-right","100px","padding","0px"],[1,"slide-citacao"],[1,"dialog-header",2,"padding","70px !important"],["class","autor-imagem",4,"ngIf"],[1,"autor-texto"],[1,"autor-nome"],[1,"autor-citacao"],[1,"autor-imagem"],[1,"autor-foto",3,"src","alt"],[1,"slide-rank"],[2,"text-align","right","flex","1","font-size","3.2rem"],[1,"dados-lista-lado-a-lado",3,"ngClass"],["style","padding-right: 300px !important;","class","dado-item-lado-a-lado",3,"lateral",4,"ngIf"],["class","dado-item-lado-a-lado",3,"lateral",4,"ngIf"],[1,"dado-item-lado-a-lado",2,"padding-right","300px !important"],[1,"dado-nome","lateral-nome",2,"padding-bottom","0px !important"],[1,"slide-outro"]],template:function(e,n){e&1&&(l(0,"div",6)(1,"div",7)(2,"div",8),m(3,He,7,11,"div",9),s()()()),e&2&&(r("ngClass",E(2,ie,n.isMaximized)),o(3),r("ngForOf",n.sessoesCarregadas))},dependencies:[D,V,U,j,H],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}p[_ngcontent-%COMP%]{font-family:Segoe UI Light,Segoe UI,sans-serif;font-weight:900}.custom-dialog[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:url(/sessaofotos/fundo_slideshow.png) no-repeat center center;background-size:cover;border-radius:10px;box-shadow:0 4px 8px #0003;transition:opacity .3s ease,transform .3s ease;width:70%;height:80%;z-index:9998}.custom-dialog.maximized[_ngcontent-%COMP%]{width:100%;height:100%;top:0%;left:0%;border-radius:0;transform:none;opacity:1}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}.dialog-header[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;background:#ddd;padding:10px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;color:#000;z-index:1;border-bottom:10px solid #FFCE00}.dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Segoe UI Light,Segoe UI,sans-serif;font-weight:300}.dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:first-of-type{margin-bottom:2px;font-size:65px}.h1direita[_ngcontent-%COMP%]{position:absolute;top:80%;padding-right:4px;right:0;transform:translateY(-50%);background:transparent;border:none;color:#000;font-size:45px;cursor:pointer}.dialog-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:50%;right:0;transform:translateY(-50%);background:transparent;border:none;color:#fff;font-size:18px;cursor:pointer}.slideshow-container[_ngcontent-%COMP%]{position:relative;flex-grow:1;display:flex;justify-content:center;align-items:center;max-width:100%;max-height:100%;height:56.25vw;overflow:hidden}.slide[_ngcontent-%COMP%]{position:absolute;top:0;left:100%;width:100%;height:100%;background-size:cover;background-position:center;display:flex;justify-content:center;align-items:center;opacity:0;transition:all .5s ease-in-out}.slide.active[_ngcontent-%COMP%]{left:0;opacity:1}.slide-content[_ngcontent-%COMP%]{color:#000;padding:20px;text-align:center;width:100%}.dados-lista[_ngcontent-%COMP%]{margin-top:20px;max-height:700px;overflow:hidden;position:relative}.dados-lista.scrollable[_ngcontent-%COMP%]{padding-top:20px;overflow-y:auto;scroll-behavior:smooth}.dado-item[_ngcontent-%COMP%]{margin-bottom:10px;color:#fff;font-size:60px;text-align:left;display:flex;align-items:center;padding-bottom:20px}.controls[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%;display:flex;justify-content:space-between;padding:0 20px}.dado-foto[_ngcontent-%COMP%]{width:110px;height:110px;border-radius:50%;background-size:cover;background-position:center;border:3px solid gold;margin-right:10px}.dados-lista-colunas[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:0px;overflow-y:auto;max-height:600px;justify-content:space-around;margin:0;padding:0}.dados-lista-colunas[_ngcontent-%COMP%]:has(.dado-item-coluna:nth-child(1):only-child)   .dado-item-coluna[_ngcontent-%COMP%]{flex:0 1 100%}.dado-item-coluna[_ngcontent-%COMP%]{flex:0 1 calc(50% - 15px);display:flex;flex-direction:row;align-items:center;text-align:left;padding:2px;color:#fff;box-sizing:border-box}.dado-item-coluna[_ngcontent-%COMP%]   .dado-foto[_ngcontent-%COMP%]{width:50px;height:50px;background-size:cover;background-position:center;border-radius:50%}.dado-item-coluna[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;flex:1;font-size:40px}.dados-lista[_ngcontent-%COMP%], .dados-lista-colunas[_ngcontent-%COMP%]{margin-top:70px!important;padding-top:70px!important;max-height:650px;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none}.dados-lista-lado-a-lado[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-end;gap:0px;margin:20px 0;position:relative}.dado-item-lado-a-lado[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;text-align:center}.dado-foto-grande[_ngcontent-%COMP%]{width:320px;height:320px;border-radius:50%;background-repeat:no-repeat;transition:all .3s ease;background-size:cover;background-position:center;border:8px solid gold}.segundo[_ngcontent-%COMP%]{border:8px solid rgb(168,168,168)}.terceiro[_ngcontent-%COMP%]{border:8px solid rgb(71,43,0)}.dado-item-lado-a-lado.central[_ngcontent-%COMP%]   .dado-foto-grande[_ngcontent-%COMP%]{width:390px;height:390px;margin-bottom:150px;background-size:cover;background-position:center;border:10px solid gold}.dado-item-lado-a-lado.lateral[_ngcontent-%COMP%]   .dado-foto-grande[_ngcontent-%COMP%]{margin-top:0}.dado-item-lado-a-lado.lateral[_ngcontent-%COMP%]{margin-top:200px}.dado-nome[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-top:10px}.central-nome[_ngcontent-%COMP%]{margin-bottom:10px;color:#fff;font-size:30px;text-align:left}.lateral-nome[_ngcontent-%COMP%]{margin-top:10px;color:#fff;font-size:30px;text-align:left}.hotsys-logo[_ngcontent-%COMP%]{position:fixed;top:10px;right:10px;width:250px;height:auto;z-index:100}.slide-citacao[_ngcontent-%COMP%], .slide-vendas[_ngcontent-%COMP%]{display:flex;align-items:center;height:100vh;width:100%;overflow:hidden}.autor-imagem[_ngcontent-%COMP%]{width:40%;max-width:400px;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.autor-foto[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border:1px solid #fff;clip-path:polygon(0 0,calc(100% - 40px) 0,100% 40px,100% calc(100% - 40px),calc(100% - 40px) 100%,0 100%)}.autor-texto[_ngcontent-%COMP%]{flex-grow:1;color:#fff;padding:0 40px;display:flex;flex-direction:column;justify-content:center;word-wrap:break-word}.autor-nome[_ngcontent-%COMP%]{font-size:4rem;margin:0;font-weight:300;word-wrap:break-word}.autor-citacao[_ngcontent-%COMP%]{font-size:2.5rem;font-style:italic;opacity:.8;margin-top:20px;word-wrap:break-word}.dialog-header-venda[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px;position:absolute;background:#ddd;border-bottom:10px solid #FFCE00;top:0;left:0;right:0}.dialog-header-venda[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Segoe UI Light,Segoe UI,sans-serif;font-weight:300;font-size:4.5rem}.titulo-area[_ngcontent-%COMP%]{text-align:right;flex-grow:1;font-size:5rem;padding-top:70px;display:flex;flex-direction:column;align-items:flex-end;gap:0}.total-area[_ngcontent-%COMP%]{position:absolute;top:27%;right:2px;padding:0;font-size:4.5rem;font-family:Segoe UI,sans-serif;color:#333;color:#fff;z-index:10}.titulo-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{white-space:nowrap}.hotsys-logo-venda[_ngcontent-%COMP%]{display:block;margin:0;width:250px;height:auto}.lider-info[_ngcontent-%COMP%]{display:flex;align-items:center}.lider-foto[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:50%;background-size:cover;background-position:center;border:3px solid gold;margin-right:15px}.lider-detalhes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:4.2rem;margin:0;font-family:Segoe UI,sans-serif;font-weight:600}.lider-detalhes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:4rem;margin:0;opacity:1;font-family:Segoe UI Light,Segoe UI,sans-serif}.titulo-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.dado-esquerda[_ngcontent-%COMP%]{text-align:left;flex:1;margin-right:20%}.dado-direita[_ngcontent-%COMP%]{text-align:right;white-space:nowrap;flex-shrink:0}"]})};export{Q as SlideShowComponent};
