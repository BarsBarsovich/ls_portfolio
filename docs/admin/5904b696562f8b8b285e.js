(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{332:function(t,a,s){},346:function(t,a,s){"use strict";var e=s(332);s.n(e).a},357:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"add-tags"},[s("div",{staticClass:"add-tags__wrapper"},[s("app-input",{attrs:{title:"Добавление тега"},model:{value:t.tags,callback:function(a){t.tags=a},expression:"tags"}})],1),s("tags",{attrs:{tags:t.tagsArray,interactive:!0},on:{remove:t.removeTag}})],1)};e._withStripped=!0;var n={components:{appInput:()=>s.e(0).then(s.bind(null,354)),tags:()=>s.e(5).then(s.bind(null,355))},data:()=>({tags:""}),computed:{tagsArray(){return!1==!!this.tags.length?[]:this.tags.split(",")}},methods:{removeTag(t){const a=[...this.tagsArray];a.splice(t,1),this.tags=a.join(",")}}},i=(s(346),s(93)),r=Object(i.a)(n,e,[],!1,null,"c7bf2d56",null);r.options.__file="src/admin/components/add-tags.vue";a.default=r.exports}}]);