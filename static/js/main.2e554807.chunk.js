(this.webpackJsonpytbevideos=this.webpackJsonpytbevideos||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},52:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),s=n.n(i),a=n(20),r=n.n(a),o=n(10),l=n.n(o),d=n(21),j=n(3),u=n(4),m=n(6),b=n(5),h=(n(32),n(33),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"search-bar",children:Object(c.jsx)("form",{action:"",onSubmit:this.onFormSubmit,children:Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("input",{type:"text",name:"name",value:this.state.term,onChange:this.onInputChange,required:!0,autoComplete:"off"}),Object(c.jsx)("label",{htmlFor:"",className:"label-name",children:Object(c.jsx)("span",{className:"content-name",children:"Video Search"})})]})})})}}]),n}(s.a.Component)),p=n(22),v=n.n(p).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyDULMDACmx0TkHqvfBUEm18tc16-1J0U6Y"}}),O=(n(52),n(25)),f=n(23),x=n.n(f),S=function(e){var t=e.video,n=e.onVideoSelect;return Object(c.jsx)("div",{onClick:function(){return n(t)},className:"video-item",children:Object(c.jsxs)(x.a,{top:!0,cascade:!0,children:[Object(c.jsx)("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),Object(c.jsxs)("div",{className:"video-item-info",children:[Object(c.jsx)("h6",{children:t.snippet.title}),Object(c.jsxs)("p",{className:"video-item-title",children:[" ",t.snippet.channelTitle," "]}),Object(c.jsxs)("p",{className:"video-item-pub",children:[" ",Object(O.a)(t.snippet.publishedAt)," "]})]})]})})},y=function(e){var t=e.videos,n=e.onVideoSelect,i=t.map((function(e){return Object(c.jsx)(S,{onVideoSelect:n,video:e},e.id.videoId)}));return Object(c.jsx)("div",{children:i})},N=(n(56),n(24)),w=n.n(N),g=function(e){var t=e.video;if(!t)return Object(c.jsx)("div",{children:"Loading..."});var n="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(c.jsx)("div",{className:"video-detail",children:Object(c.jsxs)(w.a,{top:!0,children:[Object(c.jsx)("div",{className:"embed",children:Object(c.jsx)("iframe",{title:"VideoPlayer",src:n})}),Object(c.jsxs)("div",{className:"video-detail-info",children:[Object(c.jsxs)("h4",{children:[" ",t.snippet.title," "]}),Object(c.jsxs)("p",{className:"channel-title",children:[t.snippet.channelTitle," ",Object(c.jsx)("i",{className:"fas fa-check-circle"})]}),Object(c.jsxs)("p",{className:"channel-description",children:[" ",t.snippet.description," "]})]})]})})},k=(n(57),function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("p",{children:"Developer: Mayra Rincones"}),Object(c.jsxs)("p",{children:["You can find me on ",Object(c.jsx)("a",{href:"https://www.linkedin.com/in/mayrarincones/",children:"LinkedIn"})," and ",Object(c.jsx)("a",{href:"https://github.com/MsalgadoJ",children:"Github"})]})]})}),V=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(d.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/search",{params:{q:n}});case 2:c=t.sent,e.setState({videos:c.data.items,selectedVideo:c.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.onTermSubmit("React JS")}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{onFormSubmit:this.onTermSubmit}),Object(c.jsxs)("div",{className:"content-wrapper",children:[Object(c.jsx)("div",{className:"content-left",children:Object(c.jsx)(g,{video:this.state.selectedVideo})}),Object(c.jsx)("div",{className:"content-right",children:Object(c.jsx)(y,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]}),Object(c.jsx)(k,{})]})}}]),n}(s.a.Component);r.a.render(Object(c.jsx)(V,{}),document.querySelector("#root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2e554807.chunk.js.map