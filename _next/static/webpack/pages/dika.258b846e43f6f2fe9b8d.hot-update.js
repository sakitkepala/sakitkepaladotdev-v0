webpackHotUpdate_N_E("pages/dika",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Layout.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/Layout.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Layout_halaman__PVm9i {\\n  min-height: 100vh;\\n  font-size: 14pt;\\n  font-family: \\\"DM Sans\\\", sans-serif;\\n  color: #002f3c;\\n  background-image: url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='pattern' width='20' height='20' viewBox='0 0 40 40' patternUnits='userSpaceOnUse'%3E%3Crect id='pattern-background' width='400%25' height='400%25' fill='rgba(248, 248, 255,1)'%3E%3C/rect%3E%3Ccircle fill='rgba(176, 196, 222,1)' cx='20' cy='20' r='2'%3E%3C/circle%3E%3Cpath fill='rgba(255, 255, 255,1)' d='M18 20aInfinityInfinity 0 0 0InfinityNaNaInfinityInfinity 0 0 0-InfinityNaN'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23pattern)' height='100%25' width='100%25'%3E%3C/rect%3E%3C/svg%3E\\\");\\n  background-repeat: repeat;\\n}\\n\\n.Layout_header__3BOnh {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 10;\\n  display: flex;\\n  justify-content: space-between;\\n  /** Karena diposisikan fixed, width-nya kolaps, gak dapet width dari parent-nya.\\n      * Perlu dihitung manual widthnya\\n      */\\n  --margin-kanan: 90px;\\n  width: calc(100vw - var(--margin-kanan) - 42px);\\n  margin-top: 27px;\\n  margin-left: 42px;\\n  margin-right: var(--margin-kanan);\\n}\\n@media (max-width: 800px) {\\n  .Layout_header__3BOnh {\\n    --margin-kanan: 60px;\\n  }\\n}\\n@media (max-width: 600px) {\\n  .Layout_header__3BOnh {\\n    --margin-kanan: 42px;\\n  }\\n}\\n\\n.Layout_footer__2HGdY {\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  align-items: center;\\n  min-height: 72px;\\n  margin: 0 30px;\\n  font-size: 16px;\\n  font-family: \\\"DM Mono\\\", monospace;\\n}\\n@media (max-width: 800px) {\\n  .Layout_footer__2HGdY {\\n    grid-template-columns: 1fr;\\n    margin: 0;\\n    font-size: 14px;\\n  }\\n}\\n@media (max-width: 600px) {\\n  .Layout_footer__2HGdY {\\n    font-size: 14px;\\n  }\\n}\\n.Layout_footer__2HGdY .Layout_grid__20rLc {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n}\\n@media (max-width: 600px) {\\n  .Layout_footer__2HGdY .Layout_grid__20rLc {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n.Layout_footer__logo__1xuw9 {\\n  font-family: \\\"Krona One\\\", sans-serif;\\n  text-align: left;\\n}\\n@media (max-width: 800px) {\\n  .Layout_footer__logo__1xuw9 {\\n    height: 48px;\\n    margin-left: 42px;\\n    text-align: left;\\n  }\\n}\\n@media (max-width: 600px) {\\n  .Layout_footer__logo__1xuw9 {\\n    height: 28px;\\n    margin: 0;\\n    text-align: center;\\n  }\\n}\\n.Layout_footer__hak-cipta__a8uch {\\n  text-align: center;\\n}\\n@media (max-width: 800px) {\\n  .Layout_footer__hak-cipta__a8uch {\\n    height: 48px;\\n    margin-right: 42px;\\n    text-align: right;\\n  }\\n}\\n@media (max-width: 600px) {\\n  .Layout_footer__hak-cipta__a8uch {\\n    margin: 0;\\n    text-align: center;\\n  }\\n}\\n.Layout_footer__kode-sumber__2YmXY {\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  text-align: right;\\n}\\n@media (max-width: 800px) {\\n  .Layout_footer__kode-sumber__2YmXY {\\n    justify-content: center;\\n    height: 42px;\\n    background-color: #002f3c;\\n    color: ghostwhite;\\n    text-align: center;\\n  }\\n}\\n.Layout_footer__kode-sumber__2YmXY > span {\\n  margin-right: 12px;\\n}\\n@media (max-width: 600px) {\\n  .Layout_footer__kode-sumber__2YmXY > span {\\n    margin-right: 12px;\\n  }\\n}\\n.Layout_footer__kode-sumber__2YmXY .Layout_linkGithub__fv-N8 {\\n  width: 36px;\\n  height: 36px;\\n}\\n@media (max-width: 800px) {\\n  .Layout_footer__kode-sumber__2YmXY .Layout_linkGithub__fv-N8 {\\n    width: 24px;\\n    height: 24px;\\n    margin: 0;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Layout.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,iBAAA;EAEA,eAAA;EACA,kCAAA;EACA,cAAA;EAEA,yoBAAA;EACA,yBAAA;AADF;;AAIA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,aAAA;EACA,8BAAA;EAEA;;OAAA;EAGA,oBAAA;EAUA,+CAAA;EAEA,gBAAA;EACA,iBAAA;EACA,iCAAA;AAbF;AACE;EAdF;IAeI,oBAAA;EAEF;AACF;AAAE;EAlBF;IAmBI,oBAAA;EAGF;AACF;;AAMA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EAEA,gBAAA;EACA,cAAA;EAEA,eAAA;EACA,iCAAA;AALF;AAOE;EAXF;IAYI,0BAAA;IACA,SAAA;IACA,eAAA;EAJF;AACF;AAME;EAjBF;IAkBI,eAAA;EAHF;AACF;AAKE;EACE,aAAA;EACA,8BAAA;AAHJ;AAKI;EAJF;IAKI,0BAAA;EAFJ;AACF;AAKE;EACE,oCAAA;EACA,gBAAA;AAHJ;AAKI;EAJF;IAKI,YAAA;IACA,iBAAA;IACA,gBAAA;EAFJ;AACF;AAII;EAVF;IAWI,YAAA;IACA,SAAA;IACA,kBAAA;EADJ;AACF;AAIE;EACE,kBAAA;AAFJ;AAII;EAHF;IAII,YAAA;IACA,kBAAA;IACA,iBAAA;EADJ;AACF;AAGI;EATF;IAUI,SAAA;IACA,kBAAA;EAAJ;AACF;AAGE;EACE,aAAA;EACA,yBAAA;EACA,mBAAA;EAEA,iBAAA;AAFJ;AAII;EAPF;IAQI,uBAAA;IACA,YAAA;IAEA,yBAAA;IACA,iBAAA;IAEA,kBAAA;EAHJ;AACF;AAKI;EACE,kBAAA;AAHN;AAKM;EAHF;IAII,kBAAA;EAFN;AACF;AAKI;EACE,WAAA;EACA,YAAA;AAHN;AAKM;EAJF;IAKI,WAAA;IACA,YAAA;IACA,SAAA;EAFN;AACF\",\"sourcesContent\":[\".halaman {\\n  min-height: 100vh;\\n\\n  font-size: 14pt;\\n  font-family: \\\"DM Sans\\\", sans-serif;\\n  color: #002f3c;\\n\\n  background-image: url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='pattern' width='20' height='20' viewBox='0 0 40 40' patternUnits='userSpaceOnUse'%3E%3Crect id='pattern-background' width='400%25' height='400%25' fill='rgba(248, 248, 255,1)'%3E%3C/rect%3E%3Ccircle fill='rgba(176, 196, 222,1)' cx='20' cy='20' r='2'%3E%3C/circle%3E%3Cpath fill='rgba(255, 255, 255,1)' d='M18 20aInfinityInfinity 0 0 0InfinityNaNaInfinityInfinity 0 0 0-InfinityNaN'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23pattern)' height='100%25' width='100%25'%3E%3C/rect%3E%3C/svg%3E\\\");\\n  background-repeat: repeat;\\n}\\n\\n.header {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 10;\\n\\n  display: flex;\\n  justify-content: space-between;\\n\\n  /** Karena diposisikan fixed, width-nya kolaps, gak dapet width dari parent-nya.\\n      * Perlu dihitung manual widthnya\\n      */\\n  --margin-kanan: 90px;\\n\\n  @media (max-width: 800px) {\\n    --margin-kanan: 60px;\\n  }\\n\\n  @media (max-width: 600px) {\\n    --margin-kanan: 42px;\\n  }\\n\\n  width: calc(100vw - var(--margin-kanan) - 42px);\\n\\n  margin-top: 27px;\\n  margin-left: 42px;\\n  margin-right: var(--margin-kanan);\\n}\\n\\n.footer {\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  align-items: center;\\n\\n  min-height: 72px;\\n  margin: 0 30px;\\n\\n  font-size: 16px;\\n  font-family: \\\"DM Mono\\\", monospace;\\n\\n  @media (max-width: 800px) {\\n    grid-template-columns: 1fr;\\n    margin: 0;\\n    font-size: 14px;\\n  }\\n\\n  @media (max-width: 600px) {\\n    font-size: 14px;\\n  }\\n\\n  .grid {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n\\n    @media (max-width: 600px) {\\n      grid-template-columns: 1fr;\\n    }\\n  }\\n\\n  &__logo {\\n    font-family: \\\"Krona One\\\", sans-serif;\\n    text-align: left;\\n\\n    @media (max-width: 800px) {\\n      height: 48px;\\n      margin-left: 42px;\\n      text-align: left;\\n    }\\n\\n    @media (max-width: 600px) {\\n      height: 28px;\\n      margin: 0;\\n      text-align: center;\\n    }\\n  }\\n\\n  &__hak-cipta {\\n    text-align: center;\\n\\n    @media (max-width: 800px) {\\n      height: 48px;\\n      margin-right: 42px;\\n      text-align: right;\\n    }\\n\\n    @media (max-width: 600px) {\\n      margin: 0;\\n      text-align: center;\\n    }\\n  }\\n\\n  &__kode-sumber {\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n\\n    text-align: right;\\n\\n    @media (max-width: 800px) {\\n      justify-content: center;\\n      height: 42px;\\n\\n      background-color: #002f3c;\\n      color: ghostwhite;\\n\\n      text-align: center;\\n    }\\n\\n    & > span {\\n      margin-right: 12px;\\n\\n      @media (max-width: 600px) {\\n        margin-right: 12px;\\n      }\\n    }\\n\\n    .linkGithub {\\n      width: 36px;\\n      height: 36px;\\n\\n      @media (max-width: 800px) {\\n        width: 24px;\\n        height: 24px;\\n        margin: 0;\\n      }\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"halaman\": \"Layout_halaman__PVm9i\",\n\t\"header\": \"Layout_header__3BOnh\",\n\t\"footer\": \"Layout_footer__2HGdY\",\n\t\"grid\": \"Layout_grid__20rLc\",\n\t\"footer__logo\": \"Layout_footer__logo__1xuw9\",\n\t\"footer__hak-cipta\": \"Layout_footer__hak-cipta__a8uch\",\n\t\"footer__kode-sumber\": \"Layout_footer__kode-sumber__2YmXY\",\n\t\"linkGithub\": \"Layout_linkGithub__fv-N8\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0xheW91dC5tb2R1bGUuc2Nzcz80MmMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywyQkFBMkIsc0JBQXNCLG9CQUFvQix5Q0FBeUMsbUJBQW1CLGdwQkFBZ3BCLDhCQUE4QixHQUFHLDJCQUEyQixvQkFBb0IsV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsbUNBQW1DLCtKQUErSixvREFBb0QscUJBQXFCLHNCQUFzQixzQ0FBc0MsR0FBRyw2QkFBNkIsMkJBQTJCLDJCQUEyQixLQUFLLEdBQUcsNkJBQTZCLDJCQUEyQiwyQkFBMkIsS0FBSyxHQUFHLDJCQUEyQixrQkFBa0IsbUNBQW1DLHdCQUF3QixxQkFBcUIsbUJBQW1CLG9CQUFvQix3Q0FBd0MsR0FBRyw2QkFBNkIsMkJBQTJCLGlDQUFpQyxnQkFBZ0Isc0JBQXNCLEtBQUssR0FBRyw2QkFBNkIsMkJBQTJCLHNCQUFzQixLQUFLLEdBQUcsNkNBQTZDLGtCQUFrQixtQ0FBbUMsR0FBRyw2QkFBNkIsK0NBQStDLGlDQUFpQyxLQUFLLEdBQUcsK0JBQStCLDJDQUEyQyxxQkFBcUIsR0FBRyw2QkFBNkIsaUNBQWlDLG1CQUFtQix3QkFBd0IsdUJBQXVCLEtBQUssR0FBRyw2QkFBNkIsaUNBQWlDLG1CQUFtQixnQkFBZ0IseUJBQXlCLEtBQUssR0FBRyxvQ0FBb0MsdUJBQXVCLEdBQUcsNkJBQTZCLHNDQUFzQyxtQkFBbUIseUJBQXlCLHdCQUF3QixLQUFLLEdBQUcsNkJBQTZCLHNDQUFzQyxnQkFBZ0IseUJBQXlCLEtBQUssR0FBRyxzQ0FBc0Msa0JBQWtCLDhCQUE4Qix3QkFBd0Isc0JBQXNCLEdBQUcsNkJBQTZCLHdDQUF3Qyw4QkFBOEIsbUJBQW1CLGdDQUFnQyx3QkFBd0IseUJBQXlCLEtBQUssR0FBRyw2Q0FBNkMsdUJBQXVCLEdBQUcsNkJBQTZCLCtDQUErQyx5QkFBeUIsS0FBSyxHQUFHLGdFQUFnRSxnQkFBZ0IsaUJBQWlCLEdBQUcsNkJBQTZCLGtFQUFrRSxrQkFBa0IsbUJBQW1CLGdCQUFnQixLQUFLLEdBQUcsT0FBTyxtRkFBbUYsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssbUNBQW1DLHNCQUFzQixzQkFBc0IseUNBQXlDLG1CQUFtQixrcEJBQWtwQiw4QkFBOEIsR0FBRyxhQUFhLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLG9CQUFvQixtQ0FBbUMsaUtBQWlLLGlDQUFpQywyQkFBMkIsS0FBSyxpQ0FBaUMsMkJBQTJCLEtBQUssc0RBQXNELHVCQUF1QixzQkFBc0Isc0NBQXNDLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLHdCQUF3Qix1QkFBdUIsbUJBQW1CLHNCQUFzQix3Q0FBd0MsaUNBQWlDLGlDQUFpQyxnQkFBZ0Isc0JBQXNCLEtBQUssaUNBQWlDLHNCQUFzQixLQUFLLGFBQWEsb0JBQW9CLHFDQUFxQyxtQ0FBbUMsbUNBQW1DLE9BQU8sS0FBSyxlQUFlLDZDQUE2Qyx1QkFBdUIsbUNBQW1DLHFCQUFxQiwwQkFBMEIseUJBQXlCLE9BQU8sbUNBQW1DLHFCQUFxQixrQkFBa0IsMkJBQTJCLE9BQU8sS0FBSyxvQkFBb0IseUJBQXlCLG1DQUFtQyxxQkFBcUIsMkJBQTJCLDBCQUEwQixPQUFPLG1DQUFtQyxrQkFBa0IsMkJBQTJCLE9BQU8sS0FBSyxzQkFBc0Isb0JBQW9CLGdDQUFnQywwQkFBMEIsMEJBQTBCLG1DQUFtQyxnQ0FBZ0MscUJBQXFCLG9DQUFvQywwQkFBMEIsNkJBQTZCLE9BQU8sa0JBQWtCLDJCQUEyQixxQ0FBcUMsNkJBQTZCLFNBQVMsT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQ0FBcUMsc0JBQXNCLHVCQUF1QixvQkFBb0IsU0FBUyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDL21QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL0xheW91dC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5MYXlvdXRfaGFsYW1hbl9fUFZtOWkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE0cHQ7XFxuICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwMDJmM2M7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNSclM0UlM0NkZWZzJTNFJTNDcGF0dGVybiBpZD0ncGF0dGVybicgd2lkdGg9JzIwJyBoZWlnaHQ9JzIwJyB2aWV3Qm94PScwIDAgNDAgNDAnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnJTNFJTNDcmVjdCBpZD0ncGF0dGVybi1iYWNrZ3JvdW5kJyB3aWR0aD0nNDAwJTI1JyBoZWlnaHQ9JzQwMCUyNScgZmlsbD0ncmdiYSgyNDgsIDI0OCwgMjU1LDEpJyUzRSUzQy9yZWN0JTNFJTNDY2lyY2xlIGZpbGw9J3JnYmEoMTc2LCAxOTYsIDIyMiwxKScgY3g9JzIwJyBjeT0nMjAnIHI9JzInJTNFJTNDL2NpcmNsZSUzRSUzQ3BhdGggZmlsbD0ncmdiYSgyNTUsIDI1NSwgMjU1LDEpJyBkPSdNMTggMjBhSW5maW5pdHlJbmZpbml0eSAwIDAgMEluZmluaXR5TmFOYUluZmluaXR5SW5maW5pdHkgMCAwIDAtSW5maW5pdHlOYU4nJTNFJTNDL3BhdGglM0UlM0MvcGF0dGVybiUzRSUzQy9kZWZzJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzcGF0dGVybiknIGhlaWdodD0nMTAwJTI1JyB3aWR0aD0nMTAwJTI1JyUzRSUzQy9yZWN0JTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG59XFxuXFxuLkxheW91dF9oZWFkZXJfXzNCT25oIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAvKiogS2FyZW5hIGRpcG9zaXNpa2FuIGZpeGVkLCB3aWR0aC1ueWEga29sYXBzLCBnYWsgZGFwZXQgd2lkdGggZGFyaSBwYXJlbnQtbnlhLlxcbiAgICAgICogUGVybHUgZGloaXR1bmcgbWFudWFsIHdpZHRobnlhXFxuICAgICAgKi9cXG4gIC0tbWFyZ2luLWthbmFuOiA5MHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1tYXJnaW4ta2FuYW4pIC0gNDJweCk7XFxuICBtYXJnaW4tdG9wOiAyN3B4O1xcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1rYW5hbik7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLkxheW91dF9oZWFkZXJfXzNCT25oIHtcXG4gICAgLS1tYXJnaW4ta2FuYW46IDYwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkxheW91dF9oZWFkZXJfXzNCT25oIHtcXG4gICAgLS1tYXJnaW4ta2FuYW46IDQycHg7XFxuICB9XFxufVxcblxcbi5MYXlvdXRfZm9vdGVyX18ySEdkWSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDcycHg7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuTGF5b3V0X2Zvb3Rlcl9fMkhHZFkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkxheW91dF9mb290ZXJfXzJIR2RZIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG4uTGF5b3V0X2Zvb3Rlcl9fMkhHZFkgLkxheW91dF9ncmlkX18yMHJMYyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5MYXlvdXRfZm9vdGVyX18ySEdkWSAuTGF5b3V0X2dyaWRfXzIwckxjIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi5MYXlvdXRfZm9vdGVyX19sb2dvX18xeHV3OSB7XFxuICBmb250LWZhbWlseTogXFxcIktyb25hIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5MYXlvdXRfZm9vdGVyX19sb2dvX18xeHV3OSB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkxheW91dF9mb290ZXJfX2xvZ29fXzF4dXc5IHtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuLkxheW91dF9mb290ZXJfX2hhay1jaXB0YV9fYTh1Y2gge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5MYXlvdXRfZm9vdGVyX19oYWstY2lwdGFfX2E4dWNoIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQycHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5MYXlvdXRfZm9vdGVyX19oYWstY2lwdGFfX2E4dWNoIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbi5MYXlvdXRfZm9vdGVyX19rb2RlLXN1bWJlcl9fMlltWFkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLkxheW91dF9mb290ZXJfX2tvZGUtc3VtYmVyX18yWW1YWSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJmM2M7XFxuICAgIGNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbi5MYXlvdXRfZm9vdGVyX19rb2RlLXN1bWJlcl9fMlltWFkgPiBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuTGF5b3V0X2Zvb3Rlcl9fa29kZS1zdW1iZXJfXzJZbVhZID4gc3BhbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIH1cXG59XFxuLkxheW91dF9mb290ZXJfX2tvZGUtc3VtYmVyX18yWW1YWSAuTGF5b3V0X2xpbmtHaXRodWJfX2Z2LU44IHtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5MYXlvdXRfZm9vdGVyX19rb2RlLXN1bWJlcl9fMlltWFkgLkxheW91dF9saW5rR2l0aHViX19mdi1OOCB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0xheW91dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUVBLHlvQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBRUE7O09BQUE7RUFHQSxvQkFBQTtFQVVBLCtDQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FBYkY7QUFDRTtFQWRGO0lBZUksb0JBQUE7RUFFRjtBQUNGO0FBQUU7RUFsQkY7SUFtQkksb0JBQUE7RUFHRjtBQUNGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0VBQ0EsaUNBQUE7QUFMRjtBQU9FO0VBWEY7SUFZSSwwQkFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VBSkY7QUFDRjtBQU1FO0VBakJGO0lBa0JJLGVBQUE7RUFIRjtBQUNGO0FBS0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFISjtBQUtJO0VBSkY7SUFLSSwwQkFBQTtFQUZKO0FBQ0Y7QUFLRTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBSkY7SUFLSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQUZKO0FBQ0Y7QUFJSTtFQVZGO0lBV0ksWUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQURKO0FBQ0Y7QUFJRTtFQUNFLGtCQUFBO0FBRko7QUFJSTtFQUhGO0lBSUksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFESjtBQUNGO0FBR0k7RUFURjtJQVVJLFNBQUE7SUFDQSxrQkFBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7QUFGSjtBQUlJO0VBUEY7SUFRSSx1QkFBQTtJQUNBLFlBQUE7SUFFQSx5QkFBQTtJQUNBLGlCQUFBO0lBRUEsa0JBQUE7RUFISjtBQUNGO0FBS0k7RUFDRSxrQkFBQTtBQUhOO0FBS007RUFIRjtJQUlJLGtCQUFBO0VBRk47QUFDRjtBQUtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBSkY7SUFLSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUFGTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oYWxhbWFuIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgZm9udC1zaXplOiAxNHB0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMDAyZjNjO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnJTNFJTNDZGVmcyUzRSUzQ3BhdHRlcm4gaWQ9J3BhdHRlcm4nIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgdmlld0JveD0nMCAwIDQwIDQwJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUzRSUzQ3JlY3QgaWQ9J3BhdHRlcm4tYmFja2dyb3VuZCcgd2lkdGg9JzQwMCUyNScgaGVpZ2h0PSc0MDAlMjUnIGZpbGw9J3JnYmEoMjQ4LCAyNDgsIDI1NSwxKSclM0UlM0MvcmVjdCUzRSUzQ2NpcmNsZSBmaWxsPSdyZ2JhKDE3NiwgMTk2LCAyMjIsMSknIGN4PScyMCcgY3k9JzIwJyByPScyJyUzRSUzQy9jaXJjbGUlM0UlM0NwYXRoIGZpbGw9J3JnYmEoMjU1LCAyNTUsIDI1NSwxKScgZD0nTTE4IDIwYUluZmluaXR5SW5maW5pdHkgMCAwIDBJbmZpbml0eU5hTmFJbmZpbml0eUluZmluaXR5IDAgMCAwLUluZmluaXR5TmFOJyUzRSUzQy9wYXRoJTNFJTNDL3BhdHRlcm4lM0UlM0MvZGVmcyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM3BhdHRlcm4pJyBoZWlnaHQ9JzEwMCUyNScgd2lkdGg9JzEwMCUyNSclM0UlM0MvcmVjdCUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIC8qKiBLYXJlbmEgZGlwb3Npc2lrYW4gZml4ZWQsIHdpZHRoLW55YSBrb2xhcHMsIGdhayBkYXBldCB3aWR0aCBkYXJpIHBhcmVudC1ueWEuXFxuICAgICAgKiBQZXJsdSBkaWhpdHVuZyBtYW51YWwgd2lkdGhueWFcXG4gICAgICAqL1xcbiAgLS1tYXJnaW4ta2FuYW46IDkwcHg7XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLS1tYXJnaW4ta2FuYW46IDYwcHg7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLS1tYXJnaW4ta2FuYW46IDQycHg7XFxuICB9XFxuXFxuICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1hcmdpbi1rYW5hbikgLSA0MnB4KTtcXG5cXG4gIG1hcmdpbi10b3A6IDI3cHg7XFxuICBtYXJnaW4tbGVmdDogNDJweDtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLWthbmFuKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIG1pbi1oZWlnaHQ6IDcycHg7XFxuICBtYXJnaW46IDAgMzBweDtcXG5cXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19sb2dvIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJLcm9uYSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faGFrLWNpcHRhIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA0MnB4O1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2tvZGUtc3VtYmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGhlaWdodDogNDJweDtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZjNjO1xcbiAgICAgIGNvbG9yOiBnaG9zdHdoaXRlO1xcblxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmID4gc3BhbiB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcblxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubGlua0dpdGh1YiB7XFxuICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgaGVpZ2h0OiAzNnB4O1xcblxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhhbGFtYW5cIjogXCJMYXlvdXRfaGFsYW1hbl9fUFZtOWlcIixcblx0XCJoZWFkZXJcIjogXCJMYXlvdXRfaGVhZGVyX18zQk9uaFwiLFxuXHRcImZvb3RlclwiOiBcIkxheW91dF9mb290ZXJfXzJIR2RZXCIsXG5cdFwiZ3JpZFwiOiBcIkxheW91dF9ncmlkX18yMHJMY1wiLFxuXHRcImZvb3Rlcl9fbG9nb1wiOiBcIkxheW91dF9mb290ZXJfX2xvZ29fXzF4dXc5XCIsXG5cdFwiZm9vdGVyX19oYWstY2lwdGFcIjogXCJMYXlvdXRfZm9vdGVyX19oYWstY2lwdGFfX2E4dWNoXCIsXG5cdFwiZm9vdGVyX19rb2RlLXN1bWJlclwiOiBcIkxheW91dF9mb290ZXJfX2tvZGUtc3VtYmVyX18yWW1YWVwiLFxuXHRcImxpbmtHaXRodWJcIjogXCJMYXlvdXRfbGlua0dpdGh1Yl9fZnYtTjhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Layout.module.scss\n");

/***/ })

})