(this.webpackJsonpkyupidd=this.webpackJsonpkyupidd||[]).push([[5],{60:function(e,t,a){"use strict";var r=a(2);t.a=function(){return Object(r.jsx)("div",{className:"loader"})}},61:function(e,t,a){"use strict";var r=a(59),i=a(0),c=a(100),n=a(109),s=a(101),l=a(102),o=a(60),j=a(66),d=a.n(j),u=function(e,t,a){return d.a.scale(["red","orange","yellow","green"]).domain([t,a])(e).hex()},b=(a(67),a(2));t.a=function(e){var t=e.featureData,a=e.loading,j=e.stats,d=e.param,p=e.description,h=Object(i.useState)(""),O=Object(r.a)(h,2),x=O[0],f=O[1],m=Object(i.useState)(""),v=Object(r.a)(m,2),g=v[0],y=v[1],w=function(){return Object(b.jsx)("div",{className:"leaflet-bottom leaflet-right",children:Object(b.jsxs)("div",{className:"legend leaflet-control leaflet-bar",children:[Object(b.jsx)("h6",{children:Object(b.jsx)("b",{children:"Legend"})}),[1,2,3,4,5,6,7,8,9,10].map((function(e){return 1===e?Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{style:{background:"".concat(u(e,1,10))}}),j.minVal," (min)",Object(b.jsx)("br",{})]},e):10===e?Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{style:{background:"".concat(u(e,1,10))}}),j.maxVal," (max)",Object(b.jsx)("br",{})]},e):Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{style:{background:"".concat(u(e,1,10))}}),Object(b.jsx)("br",{})]},e)}))]})})},k=function(){return Object(b.jsx)("div",{className:"leaflet-top leaflet-right",children:Object(b.jsxs)("div",{className:"stats leaflet-control leaflet-bar",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h6",{children:Object(b.jsx)("b",{children:"Maximum Value:"})}),Object(b.jsxs)("h6",{children:[j.maxArea," : ",j.maxVal]}),Object(b.jsx)("br",{}),Object(b.jsx)("h6",{children:Object(b.jsx)("b",{children:"Minimum Value:"})}),Object(b.jsxs)("h6",{children:[j.minArea," : ",j.minVal]})]})})},S=function(e){return{fillColor:u(e.properties[d],j.minVal,j.maxVal),weight:2,color:"white",fillOpacity:.7}},N={weight:5,fillOpacity:1};return Object(b.jsx)(b.Fragment,{children:a?Object(b.jsx)(o.a,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("b",{children:Object(b.jsx)("p",{children:p})}),Object(b.jsxs)(c.a,{center:[12.971599,77.594566],zoom:11,style:{height:"80vh",width:"80vw"},children:[Object(b.jsx)(n.a,{url:"http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(b.jsx)(k,{}),Object(b.jsx)(w,{}),Object(b.jsx)(s.a,{style:S,data:t.features,onEachFeature:function(e,t){t.on({mouseover:function(t){t.target.setStyle(N),f(e.properties.name),y(e.properties[d])},mouseout:function(t){t.target.setStyle(S(e)),f(""),y("")}})},children:Object(b.jsx)(l.a,{sticky:!0,direction:"top",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{children:x}),Object(b.jsx)("h6",{children:g})]})})},x)]})]})})}},99:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a(62),i=a.n(r),c=a(63),n=a(27),s=a(59),l=a(0),o=a(61),j=a(64),d=a.n(j),u=a(2);function b(){var e=Object(l.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],j=Object(l.useState)({}),b=Object(s.a)(j,2),p=b[0],h=b[1],O=Object(l.useState)(),x=Object(s.a)(O,2),f=x[0],m=x[1];Object(l.useEffect)((function(){document.title="Gender Skew";var e=function(e,t){var a,i,c,s,l=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER;null===e||void 0===e||null===(a=e.features)||void 0===a||a.forEach((function(e){var a=!1,r=0,n=0;for(i=0;i<t.length&&("M"===t[i].gender&&t[i].area_id===(null===e||void 0===e?void 0:e.properties.area_id)?(r++,a=!0):"F"===t[i].gender&&t[i].area_id===(null===e||void 0===e?void 0:e.properties.area_id)&&(n++,a=!0),!a||t[i].area_id===(null===e||void 0===e?void 0:e.properties.area_id));i++);var j=n?r/n:r;j>l&&(l=j,c=e.properties.name),j<o&&(o=j,s=e.properties.name),j=j.toFixed(2),e.properties.mfRatio=j}));var j={};j.minVal=o,j.maxVal=l,j.minArea=s,j.maxArea=c,h(Object(n.a)(Object(n.a)({},p),j)),m(e),r(!1)};function t(){return(t=Object(c.a)(i.a.mark((function t(){var a,r,c,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([d.a.get("https://kyupid-api.vercel.app/api/areas"),d.a.get("https://kyupid-api.vercel.app/api/users")]);case 2:n=t.sent,e(null===(a=n[0])||void 0===a?void 0:a.data,null===(r=n[1])||void 0===r||null===(c=r.data)||void 0===c?void 0:c.users);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);return Object(u.jsx)(o.a,{featureData:f,loading:a,stats:p,param:"mfRatio",description:"This map shows ratio of Male users to Female users count"})}}}]);
//# sourceMappingURL=5.d9efabf1.chunk.js.map