import{A as B,B as Ue,C as qe,D as Ge,E as ze,F as Je,G as Ke,H as Qe,I as We,J as Xe,K as Ye,L as V,M as Ze,N as et,O as re,P as tt,Q as it,R as rt,S as ot,T as nt,U as at,V as mt,W as st,a as K,b,c as De,d as Q,e as W,f as T,g as X,h as Y,i as Pe,j as Ne,k as I,l as Le,m as Te,n as Oe,o as je,p as Be,q as Ve,r as Z,s as Ae,t as Re,u as O,v as ee,w as j,x as te,y as $e,z as ie}from"./chunk-A4OGZKN2.js";import{a as we,g as z,h as Fe,i as L,j as J,k as ce,l as ke,m as He}from"./chunk-NZAYO5YE.js";import"./chunk-JGYM447R.js";import{$ as q,A as me,Bb as f,Bc as Me,C as se,Cc as Ee,Db as E,Dc as ye,I as ge,Kb as w,Lb as a,Mb as H,Nb as d,Qb as Se,Rb as le,Sb as y,T as $,Ta as P,Tb as F,Ub as be,Vb as Ie,Wa as m,Xa as u,_ as ve,da as Ce,ja as g,ka as G,ma as _e,mb as v,n as ae,ob as c,r as he,sa as C,ta as _,ub as n,vb as r,wb as p,xc as S,yb as M,yc as N,zc as xe}from"./chunk-5OECESXO.js";var St=()=>({width:"250px"});function bt(i,e){if(i&1){let l=M();n(0,"mat-list-item",9),f("click",function(){C(l),E();let o=w(2);return _(o.toggle())}),n(1,"mat-icon",10),a(2),r(),a(3),r()}if(i&2){let l=e.$implicit;c("routerLink",l.url),m(2),H(l.icon),m(),d(" ",l.label," ")}}var ct=(()=>{let e=class e{constructor(t,o){this.authService=t,this.router=o,this.sidebarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xF1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}]}get user(){return this.authService.currentUser}onLogout(){this.authService.logout(),this.router.navigate(["/auth/login"])}};e.\u0275fac=function(o){return new(o||e)(u(He),u(L))},e.\u0275cmp=g({type:e,selectors:[["app-layout-page"]],decls:23,vars:4,consts:[["sidenav",""],["fullscreen",""],["mode","push",3,"ngStyle"],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["color","primary"],["mat-button","",3,"click"],[1,"container","p-2"],[3,"click","routerLink"],["matListItemIcon",""]],template:function(o,s){if(o&1){let h=M();n(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-toolbar")(4,"span"),a(5,"Men\xFA"),r(),p(6,"span",3),n(7,"button",4),f("click",function(){C(h);let R=w(2);return _(R.toggle())}),n(8,"mat-icon"),a(9,"menu"),r()()(),n(10,"mat-nav-list"),v(11,bt,4,3,"mat-list-item",5),r()(),n(12,"mat-toolbar",6)(13,"button",4),f("click",function(){C(h);let R=w(2);return _(R.toggle())}),n(14,"mat-icon"),a(15,"menu"),r()(),p(16,"span",3),n(17,"span"),a(18),r(),n(19,"button",7),f("click",function(){return C(h),_(s.onLogout())}),a(20,"Logout"),r()(),n(21,"div",8),p(22,"router-outlet"),r()()}o&2&&(m(),c("ngStyle",Se(3,St)),m(10),c("ngForOf",s.sidebarItems),m(7),d(" ",s.user==null?null:s.user.email," "))},dependencies:[S,xe,Fe,J,b,De,T,tt,re,Ze,ot,nt,mt]});let i=e;return i})();var de=function(i){return i.DCComics="DC Comics",i.MarvelComics="Marvel Comics",i}(de||{});var pt=(()=>{let e=class e{constructor(t,o){this.dialogRef=t,this.data=o}onNoClick(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}};e.\u0275fac=function(o){return new(o||e)(u(Ge),u(ze))},e.\u0275cmp=g({type:e,selectors:[["app-confirm-dialog"]],decls:11,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],[1,"spacer"],["mat-button","","color","primary",3,"click"]],template:function(o,s){o&1&&(n(0,"h1",0),a(1," \xBFEst\xE1 seguro? "),r(),n(2,"div",1)(3,"p"),a(4),r()(),n(5,"div",2)(6,"button",3),f("click",function(){return s.onNoClick()}),a(7,"No thanks"),r(),p(8,"span",4),n(9,"button",5),f("click",function(){return s.onConfirm()}),a(10,"Ok"),r()()),o&2&&(m(4),d("Este proceso no es reversible, est\xE1 a punto de eliminar a ",s.data.superhero,""))},dependencies:[b,Ke,We,Qe],encapsulation:2});let i=e;return i})();var k=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl=ke.baseUrl}getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}getHeroById(t){return this.http.get(`${this.baseUrl}/heroes/${t}`).pipe(se(()=>ae(void 0)))}getSuggestions(t){return this.http.get(`${this.baseUrl}/heroes?q=${t}&_limit=6`)}addHero(t){return this.http.post(`${this.baseUrl}/heroes`,t)}updateHero(t){if(!t.id)throw Error("Hero id is required");return this.http.patch(`${this.baseUrl}/heroes/${t.id}`,t)}deleteHeroById(t){return this.http.delete(`${this.baseUrl}/heroes/${t}`).pipe(he(o=>!0),se(o=>ae(!1)))}};e.\u0275fac=function(o){return new(o||e)(Ce(we))},e.\u0275prov=ve({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var A=(()=>{let e=class e{transform(t){return!t.id&&!t.alt_img?"assets/no-image.png":t.alt_img?t.alt_img:`assets/heroes/${t.id}.jpg`}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=_e({name:"heroImage",type:e,pure:!0});let i=e;return i})();function wt(i,e){if(i&1&&(n(0,"mat-option",16),a(1),r()),i&2){let l=e.$implicit;c("value",l.id),m(),d(" ",l.desc," ")}}function Ft(i,e){if(i&1){let l=M();n(0,"button",17),f("click",function(){C(l);let o=E();return _(o.onDeleteHero())}),a(1,"Borrar"),r()}}var fe=(()=>{let e=class e{constructor(t,o,s,h,D){this.heroesService=t,this.activatedRoute=o,this.router=s,this.snackbar=h,this.dialog=D,this.heroForm=new Ne({id:new I(""),superhero:new I("",{nonNullable:!0}),publisher:new I(de.DCComics),alter_ego:new I(""),first_appearance:new I(""),characters:new I(""),alt_img:new I("")}),this.publishers=[{id:"DC Comics",desc:"DC - Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}]}get currentHero(){return this.heroForm.value}ngOnInit(){this.router.url.includes("edit")&&this.activatedRoute.params.pipe($(({id:t})=>this.heroesService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigateByUrl("/");this.heroForm.reset(t)})}onSubmit(){if(!this.heroForm.invalid){if(this.currentHero.id){this.heroesService.updateHero(this.currentHero).subscribe(t=>{this.showSnackbar(`${t.superhero} updated!`)});return}this.heroesService.addHero(this.currentHero).subscribe(t=>{this.router.navigate(["heroes/edit",t.id]),this.showSnackbar(`${t.superhero} created!`)})}}onDeleteHero(){if(!this.currentHero.id)throw Error("Hero id is required");this.dialog.open(pt,{data:this.heroForm.value}).afterClosed().pipe(me(o=>o),$(()=>this.heroesService.deleteHeroById(this.currentHero.id)),me(o=>o)).subscribe(()=>{this.router.navigate(["/heroes"])})}showSnackbar(t){this.snackbar.open(t,"done",{duration:2500})}};e.\u0275fac=function(o){return new(o||e)(u(k),u(z),u(L),u(at),u(Je))},e.\u0275cmp=g({type:e,selectors:[["app-new-page"]],decls:44,vars:7,consts:[[1,"mb-2"],[1,"grid"],[1,"col-12","sm:col-6"],[1,"grid",3,"ngSubmit","formGroup"],["type","text","matInput","","required","","formControlName","superhero"],["type","text","matInput","","required","","formControlName","alter_ego"],[1,"col-12"],["type","text","matInput","","required","","formControlName","first_appearance"],["type","text","matInput","","required","","formControlName","characters"],["required","","formControlName","publisher"],[3,"value",4,"ngFor","ngForOf"],["type","text","matInput","","formControlName","alt_img"],[1,"flex","justify-content-between"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","","color","primary",3,"click"],["alt","Imagen del h\xE9roe","mat-card-image","",3,"src"],[3,"value"],["mat-flat-button","","color","warn",3,"click"]],template:function(o,s){o&1&&(n(0,"h1"),a(1),r(),p(2,"mat-divider",0),n(3,"div",1)(4,"div",2)(5,"mat-card")(6,"mat-card-content")(7,"form",3),f("ngSubmit",function(){return s.onSubmit()}),n(8,"mat-form-field",2)(9,"mat-label"),a(10,"Super h\xE9roe"),r(),p(11,"input",4),r(),n(12,"mat-form-field",2)(13,"mat-label"),a(14,"Alter ego"),r(),p(15,"input",5),r(),n(16,"mat-form-field",6)(17,"mat-label"),a(18,"Primera aparici\xF3n"),r(),p(19,"input",7),r(),n(20,"mat-form-field",6)(21,"mat-label"),a(22,"Personajes"),r(),p(23,"input",8),r(),n(24,"mat-form-field",6)(25,"mat-label"),a(26,"Creador"),r(),n(27,"mat-select",9),v(28,wt,2,2,"mat-option",10),r()(),n(29,"mat-form-field",6)(30,"mat-label"),a(31,"Alternative Image"),r(),p(32,"input",11),r()(),n(33,"div",12),v(34,Ft,2,0,"button",13),p(35,"span"),n(36,"button",14),f("click",function(){return s.onSubmit()}),n(37,"mat-icon"),a(38,"save"),r(),a(39,"Guardar"),r()()()()(),n(40,"div",2)(41,"mat-card"),p(42,"img",15),y(43,"heroImage"),r()()()),o&2&&(m(),d(" ",s.currentHero.id?"Editar":"Agregar"," h\xE9roe "),m(6),c("formGroup",s.heroForm),m(21),c("ngForOf",s.publishers),m(6),c("ngIf",s.currentHero.id),m(8),c("src",F(43,5,s.currentHero),P))},dependencies:[S,N,Le,X,Y,Pe,Be,Oe,je,K,b,O,j,B,W,Q,T,Z,V,rt,A]});let i=e;return i})();function kt(i,e){if(i&1&&(n(0,"mat-option",6),a(1),r()),i&2){let l=e.$implicit;c("value",l),m(),d(" ",l.superhero," ")}}function Ht(i,e){if(i&1&&(n(0,"mat-option",7),a(1),r()),i&2){let l=E();m(),d(" No se encontr\xF3 nada con el t\xE9rmino ",l.searchInput.value," ")}}var ft=(()=>{let e=class e{constructor(t){this.heroesService=t,this.searchInput=new I(""),this.heroes=[]}searchHero(){let t=this.searchInput.value||"";this.heroesService.getSuggestions(t).subscribe(o=>this.heroes=o)}onSelectedOption(t){if(!t.option.value){this.selectedHero=void 0;return}let o=t.option.value;this.searchInput.setValue(o.superhero),this.selectedHero=o}};e.\u0275fac=function(o){return new(o||e)(u(k))},e.\u0275cmp=g({type:e,selectors:[["app-search-page"]],decls:13,vars:7,consts:[["auto","matAutocomplete"],[1,"flex","flex-column","p-2"],["type","text","matInput","",3,"input","formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value",4,"ngFor","ngForOf"],["value","",4,"ngIf"],[3,"value"],["value",""]],template:function(o,s){if(o&1){let h=M();n(0,"div",1)(1,"h3"),a(2,"Buscador"),r(),n(3,"mat-form-field")(4,"mat-label"),a(5,"Buscador de h\xE9roes"),r(),n(6,"input",2),f("input",function(){return C(h),_(s.searchHero())}),r(),n(7,"mat-autocomplete",3,0),f("optionSelected",function(R){return C(h),_(s.onSelectedOption(R))}),v(9,kt,2,2,"mat-option",4)(10,Ht,2,1,"mat-option",5),r()(),a(11),y(12,"json"),r()}if(o&2){let h=w(8);m(6),c("formControl",s.searchInput)("matAutocomplete",h),m(3),c("ngForOf",s.heroes),m(),c("ngIf",s.heroes.length===0&&s.searchInput.value&&s.searchInput.value.length>0),m(),d(" ",F(12,5,s.selectedHero),`
`)}},dependencies:[S,N,X,Y,Te,Ae,K,Re,W,Q,Z,Me]});let i=e;return i})();function Dt(i,e){i&1&&(n(0,"mat-grid-list",2)(1,"mat-grid-tile"),p(2,"mat-spinner"),r()())}function Pt(i,e){if(i&1){let l=M();n(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),a(4),r(),n(5,"mat-card-subtitle"),a(6),r()(),p(7,"img",5),y(8,"heroImage"),r(),n(9,"mat-card",4)(10,"mat-card-header")(11,"mat-card-title"),a(12," Informaci\xF3n "),r(),n(13,"mat-card-subtitle"),a(14),r()(),n(15,"mat-card-content")(16,"mat-list")(17,"mat-list-item"),a(18),r(),n(19,"mat-list-item"),a(20),r(),n(21,"mat-list-item"),a(22),r(),n(23,"mat-list-item"),a(24),r()(),n(25,"button",6),f("click",function(){C(l);let o=E();return _(o.goBack())}),a(26,"Regresar"),r()()()()}if(i&2){let l=E();m(4),d(" ",l.hero.alter_ego," "),m(2),d(" ",l.hero.superhero," "),m(),c("src",F(8,9,l.hero),P)("alt",l.hero.superhero),m(7),d(" ",l.hero.superhero," "),m(4),d(" ",l.hero.first_appearance," "),m(2),d(" ",l.hero.characters," "),m(2),d(" ",l.hero.publisher," "),m(2),d(" ",l.hero.alter_ego," ")}}var ht=(()=>{let e=class e{constructor(t,o,s){this.heroService=t,this.activatedRoute=o,this.router=s}ngOnInit(){this.activatedRoute.params.pipe(ge(1e3),$(({id:t})=>this.heroService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigate(["/heroes/list"]);this.hero=t,console.log({hero:t})})}goBack(){this.router.navigateByUrl("heroes/list")}};e.\u0275fac=function(o){return new(o||e)(u(k),u(z),u(L))},e.\u0275cmp=g({type:e,selectors:[["app-hero-page"]],decls:3,vars:2,consts:[["divLoading",""],["class","grid p-2",4,"ngIf","ngIfElse"],["cols","1"],[1,"grid","p-2"],[1,"col-12","sm:col-6"],["mat-card-image","",3,"src","alt"],["mat-button","","color","warn",3,"click"]],template:function(o,s){if(o&1&&v(0,Dt,3,0,"ng-template",null,0,Ie)(2,Pt,27,11,"div",1),o&2){let h=w(1);m(2),c("ngIf",s.hero)("ngIfElse",h)}},dependencies:[N,b,O,j,ie,B,te,ee,Ye,Xe,et,re,it,A]});let i=e;return i})();var Nt=i=>["/heroes/edit",i],Lt=i=>["/heroes",i];function Tt(i,e){if(i&1&&(n(0,"mat-chip"),a(1),r()),i&2){let l=e.$implicit;m(),H(l)}}var gt=(()=>{let e=class e{constructor(){}ngOnInit(){if(!this.hero)throw Error("Hero property is required")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["heroes-hero-card"]],inputs:{hero:"hero"},decls:30,vars:19,consts:[["matCardImage","",3,"src","alt"],[1,"mt-2"],[4,"ngFor","ngForOf"],["mat-button","","mat-raised","","color","primary",3,"routerLink"],[1,"spacer"],["mat-button","","mat-raised","",3,"routerLink"]],template:function(o,s){o&1&&(n(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),a(3),r(),n(4,"mat-card-subtitle"),a(5),r()(),p(6,"img",0),y(7,"heroImage"),n(8,"mat-card-content",1)(9,"h4"),a(10),r(),n(11,"p")(12,"strong"),a(13,"Primera aparici\xF3n"),r(),a(14),p(15,"br"),n(16,"mat-chip-listbox"),v(17,Tt,2,1,"mat-chip",2),y(18,"slice"),r()()(),p(19,"mat-divider"),n(20,"mat-card-actions")(21,"button",3)(22,"mat-icon"),a(23,"edit "),r(),a(24,"Editar"),r(),p(25,"span",4),n(26,"button",5)(27,"mat-icon"),a(28,"more_horiz"),r(),a(29,"M\xE1s "),r()()()),o&2&&(m(3),H(s.hero.superhero),m(2),H(s.hero.alter_ego),m(),c("src",F(7,9,s.hero),P)("alt",s.hero.superhero),m(4),H(s.hero.publisher),m(4),d(" ",s.hero.first_appearance," "),m(3),c("ngForOf",be(18,11,s.hero.characters.split(","),0,3)),m(4),c("routerLink",le(15,Nt,s.hero.id)),m(5),c("routerLink",le(17,Lt,s.hero.id)))},dependencies:[S,J,b,O,$e,j,ie,B,te,ee,Ue,qe,T,V,Ee,A]});let i=e;return i})();function jt(i,e){if(i&1&&(n(0,"div",2),p(1,"heroes-hero-card",3),r()),i&2){let l=e.$implicit;m(),c("hero",l)}}var vt=(()=>{let e=class e{constructor(t){this.heroesService=t,this.heroes=[]}ngOnInit(){this.heroesService.getHeroes().subscribe(t=>this.heroes=t)}};e.\u0275fac=function(o){return new(o||e)(u(k))},e.\u0275cmp=g({type:e,selectors:[["app-list-page"]],decls:5,vars:1,consts:[[1,"grid","bm-8","pt-2"],["class","col-12 sm:col-4 md:col-3 xl:col-2",4,"ngFor","ngForOf"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero"]],template:function(o,s){o&1&&(n(0,"h1"),a(1,"Listado de H\xE9roes"),r(),p(2,"mat-divider"),n(3,"div",0),v(4,jt,2,1,"div",1),r()),o&2&&(m(4),c("ngForOf",s.heroes))},dependencies:[S,V,gt]});let i=e;return i})();var Bt=[{path:"",component:ct,children:[{path:"new-hero",component:fe},{path:"search",component:ft},{path:"edit/:id",component:fe},{path:"list",component:vt},{path:":id",component:ht},{path:"**",redirectTo:"list"}]}],Ct=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=G({type:e}),e.\u0275inj=q({imports:[ce.forChild(Bt),ce]});let i=e;return i})();var Bi=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=G({type:e}),e.\u0275inj=q({imports:[ye,Ct,Ve,st]});let i=e;return i})();export{Bi as HeroesModule};