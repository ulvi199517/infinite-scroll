(this["webpackJsonpinfinite-scroll"]=this["webpackJsonpinfinite-scroll"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),o=a(6),c=a.n(o),i=(a(16),a(4)),r=a.n(i),d=a(5),l=a(7),g=a(8),u=a(9),h=a(2),m=a(11),j=a(10),f=(a(18),a.p+"static/media/loader.7c452f59.svg"),p=a(0),b=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(g.a)(this,a),(n=e.call(this,t)).getPhotos=Object(l.a)(r.a.mark((function t(){var e,a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({isLoading:!0}),10,"JY3Kdz5zSiwA-NHacB4PqhGjKf38md4NkLAmqvPkMck",e="https://api.unsplash.com/photos/random/?client_id=".concat("JY3Kdz5zSiwA-NHacB4PqhGjKf38md4NkLAmqvPkMck","&count=").concat(10),t.prev=4,t.next=7,fetch(e);case 7:return a=t.sent,t.next=10,a.json();case 10:s=t.sent,n.setState({photos:[].concat(Object(d.a)(n.state.photos),Object(d.a)(s)),totalImages:n.state.totalImages+s.length}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0);case 17:console.log("totalImages",n.state.totalImages);case 18:case"end":return t.stop()}}),t,null,[[4,14]])}))),n.imageLoaded=function(){n.setState({imagesLoaded:n.state.imagesLoaded+1},(function(){console.log("imagesLoaded",n.state.imagesLoaded),n.state.imagesLoaded===n.state.totalImages&&n.setState({ready:!0,isLoading:!1})}))},n.state={photos:[],isLoading:!1,ready:!1,totalImages:0,imagesLoaded:0},window.onscroll=function(){var t=Object(h.a)(n).getPhotos;window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&n.state.ready&&n.setState({ready:!1},(function(){t()}))},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getPhotos()}},{key:"render",value:function(){var t=this,e=this.state,a=e.photos,n=e.isLoading;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"UNSPLASH API - INFINITE SCROLL"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"image-container",children:[a.map((function(e){var a=e.links.html,n=e.id,s=e.alt_description,o=e.alt_description,c=e.urls.regular;return Object(p.jsx)("a",{href:a,children:Object(p.jsx)("img",{onLoad:t.imageLoaded,alt:s,src:c,title:o})},n)})),n?Object(p.jsx)("div",{className:"loader-container",children:Object(p.jsx)("img",{src:f,alt:"Loading",className:"loader"})}):null]})]})}}]),a}(s.a.Component),L=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),o(t),c(t)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),L()}},[[20,1,2]]]);
//# sourceMappingURL=main.55fbd27b.chunk.js.map