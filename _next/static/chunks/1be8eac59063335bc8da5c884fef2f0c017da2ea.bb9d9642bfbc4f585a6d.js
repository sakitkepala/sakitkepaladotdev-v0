(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/KA5":function(a,e,i){a.exports={navigasi:"MenuNavigasi_navigasi__2_cTb",listMenu:"MenuNavigasi_listMenu__gU_Sd",link:"MenuNavigasi_link__2lASA",hamburger:"MenuNavigasi_hamburger__3xZBl",tombolToggle:"MenuNavigasi_tombolToggle__3Rve5",screenMenu:"MenuNavigasi_screenMenu__B8MtX",close:"MenuNavigasi_close__2Ezye"}},"5NS8":function(a,e,i){a.exports={bungkus:"LogoHeader_bungkus__3MgDG",logoteks:"LogoHeader_logoteks__34peA",stack:"LogoHeader_stack__1XbbF"}},Lnxd:function(a,e,i){"use strict";i.d(e,"a",(function(){return l}));var t=i("q1tI"),n=i.n(t),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.a.createContext&&n.a.createContext(r),_=function(){return(_=Object.assign||function(a){for(var e,i=1,t=arguments.length;i<t;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}).apply(this,arguments)},o=function(a,e){var i={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&e.indexOf(t)<0&&(i[t]=a[t]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(a);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(i[t[n]]=a[t[n]])}return i};function c(a){return a&&a.map((function(a,e){return n.a.createElement(a.tag,_({key:e},a.attr),c(a.child))}))}function l(a){return function(e){return n.a.createElement(u,_({attr:_({},a.attr)},e),c(a.child))}}function u(a){var e=function(e){var i,t=a.attr,r=a.size,s=a.title,c=o(a,["attr","size","title"]),l=r||e.size||"1em";return e.className&&(i=e.className),a.className&&(i=(i?i+" ":"")+a.className),n.a.createElement("svg",_({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,t,c,{className:i,style:_(_({color:a.color||e.color},e.style),a.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&n.a.createElement("title",null,s),a.children)};return void 0!==s?n.a.createElement(s.Consumer,null,(function(a){return e(a)})):e(r)}},ODXe:function(a,e,i){"use strict";function t(a,e){(null==e||e>a.length)&&(e=a.length);for(var i=0,t=new Array(e);i<e;i++)t[i]=a[i];return t}function n(a,e){return function(a){if(Array.isArray(a))return a}(a)||function(a,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(a)){var i=[],t=!0,n=!1,r=void 0;try{for(var s,_=a[Symbol.iterator]();!(t=(s=_.next()).done)&&(i.push(s.value),!e||i.length!==e);t=!0);}catch(o){n=!0,r=o}finally{try{t||null==_.return||_.return()}finally{if(n)throw r}}return i}}(a,e)||function(a,e){if(a){if("string"===typeof a)return t(a,e);var i=Object.prototype.toString.call(a).slice(8,-1);return"Object"===i&&a.constructor&&(i=a.constructor.name),"Map"===i||"Set"===i?Array.from(a):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(a,e):void 0}}(a,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.d(e,"a",(function(){return n}))},T4CY:function(a,e,i){"use strict";i.d(e,"a",(function(){return o}));var t=i("nKUr"),n=i("LjP0"),r=i("zHVU"),s=i("Vu1q"),_=i.n(s);function o(){return Object(t.jsxs)("footer",{className:_.a.footer,children:[Object(t.jsxs)("div",{className:_.a.grid,children:[Object(t.jsx)("div",{className:_.a.footer__logo,children:Object(t.jsx)(r.a,{href:"/",children:"/ Eksperimennya Dika"})}),Object(t.jsxs)("div",{className:_.a["footer__hak-cipta"],children:[(new Date).getFullYear()," ",Object(t.jsx)("span",{children:"\u2615\u27ad"})," Andika Priyotama D."]})]}),Object(t.jsxs)("div",{className:_.a["footer__kode-sumber"],children:[Object(t.jsx)("span",{children:"Kode sumber di"})," ",Object(t.jsx)("a",{className:_.a.linkGithub,href:"https://github.com/sakitkepala/sakitkepaladotdev",children:Object(t.jsx)(n.b,{size:"100%"})})]})]})}},Vu1q:function(a,e,i){a.exports={halaman:"Layout_halaman__PVm9i",header:"Layout_header__3BOnh",footer:"Layout_footer__2HGdY",grid:"Layout_grid__20rLc",footer__logo:"Layout_footer__logo__1xuw9","footer__hak-cipta":"Layout_footer__hak-cipta__a8uch","footer__kode-sumber":"Layout_footer__kode-sumber__2YmXY",linkGithub:"Layout_linkGithub__fv-N8"}},XMET:function(a,e,i){"use strict";i.d(e,"a",(function(){return d}));var t=i("nKUr"),n=i("ODXe"),r=i("YFqc"),s=i.n(r),_=i("mrSG"),o=i("q1tI"),c=i.n(o),l=function(a,e,i){var t=e-a;return((i-a)%t+t)%t+a};var u=i("/KA5"),b=i.n(u);function d(){var a=function(a,e,i){var t=a.map((function(a){return window.matchMedia(a)})),r=function(){var a=t.findIndex((function(a){return a.matches}));return"undefined"!==typeof e[a]?e[a]:i},s=c.a.useState(r),_=Object(n.a)(s,2),o=_[0],l=_[1];return c.a.useEffect((function(){var a=function(){return l(r)};return t.forEach((function(e){return e.addListener(a)})),function(){return t.forEach((function(e){return e.removeListener(a)}))}}),[]),o}(["(max-width: 600px)"],[!0],!1),e=function(){for(var a=[],e=0;e<arguments.length;e++)a[e]=arguments[e];var i=Object(o.useRef)(0),t=Object(_.c)(Object(o.useState)(a[i.current]),2),n=t[0],r=t[1];return[n,function(e){i.current="number"!==typeof e?l(0,a.length,i.current+1):e,r(a[i.current])}]}(!1,!0),i=Object(n.a)(e,2),r=i[0],u=i[1],d=a&&r;return Object(t.jsxs)("div",{className:b.a.navigasi,children:[!a&&Object(t.jsxs)("nav",{className:b.a.listMenu,children:[Object(t.jsx)(s.a,{href:"/",children:Object(t.jsx)("a",{className:b.a.link,children:"Depan"})}),Object(t.jsx)(s.a,{href:"/lab",children:Object(t.jsx)("a",{className:b.a.link,children:"Lab"})}),Object(t.jsx)(s.a,{href:"/dika",children:Object(t.jsx)("a",{className:b.a.link,children:"Dika"})})]}),Object(t.jsx)("div",{className:b.a.hamburger,children:Object(t.jsx)("button",{className:b.a.tombolToggle,onClick:function(){a&&u()},children:Object(t.jsxs)("svg",{viewBox:"0 0 100 40",width:"30",height:"30",children:[Object(t.jsx)("rect",{width:"100",height:"10"}),Object(t.jsx)("rect",{y:"30",width:"70",height:"10"})]})})}),d&&Object(t.jsxs)("div",{className:b.a.screenMenu,children:[Object(t.jsx)("button",{className:b.a.close,onClick:function(){return u()},children:Object(t.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:Object(t.jsx)("path",{d:"M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"})})}),Object(t.jsxs)("nav",{children:[Object(t.jsx)(s.a,{href:"/",children:Object(t.jsx)("a",{className:b.a.link,children:"Depan"})}),Object(t.jsx)(s.a,{href:"/lab",children:Object(t.jsx)("a",{className:b.a.link,children:"Lab"})}),Object(t.jsx)(s.a,{href:"/dika",children:Object(t.jsx)("a",{className:b.a.link,children:"Dika"})})]})]})]})}},b9Hb:function(a,e,i){"use strict";i.d(e,"a",(function(){return _}));var t=i("nKUr"),n=i("zHVU"),r=i("5NS8"),s=i.n(r);function _(){return Object(t.jsx)("div",{className:s.a.bungkus,children:Object(t.jsx)(n.a,{href:"/",children:Object(t.jsxs)("div",{className:s.a.logoteks,children:[Object(t.jsx)("span",{className:s.a.stack,children:"> andika"}),Object(t.jsx)("span",{className:s.a.stack,children:"priyotama"})]})})})}},eVFU:function(a,e,i){a.exports={"halaman-depan-dummy":"Dika_halaman-depan-dummy__2LpoV","main-dummy":"Dika_main-dummy__3kU-Q","artikel-dummy":"Dika_artikel-dummy__154r6","artikel-dummy__heading":"Dika_artikel-dummy__heading__2d2SI","artikel-dummy__deskripsi":"Dika_artikel-dummy__deskripsi__hyHeZ","footer-dummy":"Dika_footer-dummy__RgVv9",halaman:"Dika_halaman__2D0iY",header:"Dika_header__1XlUS",bagian:"Dika_bagian__2ulsc","bagian-hai":"Dika_bagian-hai__2F7Xu","bagian-hai__sambut":"Dika_bagian-hai__sambut__1fSr0","bagian-hai__sambut-teks":"Dika_bagian-hai__sambut-teks__3CJLL","bagian-hai__sambut-teks--span-animasi":"Dika_bagian-hai__sambut-teks--span-animasi__YER4s",link:"Dika_link__11KxY",anotasi:"Dika_anotasi__1IS8V","bagian-hai__deskripsi":"Dika_bagian-hai__deskripsi__2fyYz","heading-bagian":"Dika_heading-bagian__3DR1L","bagian-situs":"Dika_bagian-situs__2-v1G","bagian-situs__deskripsi":"Dika_bagian-situs__deskripsi__1aeNb","bagian-dika":"Dika_bagian-dika__1JVdl","bagian-dika__penampakan":"Dika_bagian-dika__penampakan__3HyIJ","bagian-dika__img-dika":"Dika_bagian-dika__img-dika__2JzYx","bagian-internet":"Dika_bagian-internet__13y8F","bagian-internet__deskripsi":"Dika_bagian-internet__deskripsi__38902","bagian-internet__list-akun":"Dika_bagian-internet__list-akun__xEK6Z","bagian-internet__list-item-ikon":"Dika_bagian-internet__list-item-ikon__3zjL5","bagian-lab":"Dika_bagian-lab__1-MUD","bagian-lab__deskripsi--eksperimen":"Dika_bagian-lab__deskripsi--eksperimen__2ZdSU","bagian-lab__deskripsi--projek":"Dika_bagian-lab__deskripsi--projek__1ougQ","bagian-lab__list-eksperimen":"Dika_bagian-lab__list-eksperimen__1doOS","bagian-lab__list-projek":"Dika_bagian-lab__list-projek__2Psa1","bagian-lab__heading-deskripsi":"Dika_bagian-lab__heading-deskripsi__1QdqD","bagian-lab__tulisan-deskripsi":"Dika_bagian-lab__tulisan-deskripsi__WcLEu","lab-artikel":"Dika_lab-artikel__1ItHM","lab-artikel__thumb":"Dika_lab-artikel__thumb__23ChN",footer:"Dika_footer__12YO6",footer__logo:"Dika_footer__logo__2zsUc","footer__hak-cipta":"Dika_footer__hak-cipta__1oo_U"}}}]);