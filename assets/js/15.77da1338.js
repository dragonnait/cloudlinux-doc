(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{283:function(t,i,n){},306:function(t,i,n){"use strict";var e=n(283);n.n(e).a},315:function(t,i,n){"use strict";n.r(i);n(20),n(87),n(88);var e=n(57),s={props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,i){Promise.all([Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,355,7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,356,7))]).then(function(i){var n=Object(e.a)(i,1)[0];n=n.default;t.algoliaOptions;n(Object.assign({},t,{inputSelector:"#algolia-search-input"}))})},update:function(t,i){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,i)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}},a=(n(306),n(34)),l=Object(a.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,i=this._self._c||t;return i("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form"}},[i("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null);i.default=l.exports}}]);