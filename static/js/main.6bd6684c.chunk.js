(this.webpackJsonpmovies_project=this.webpackJsonpmovies_project||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(7),r=c.n(s),i=(c(13),c(0));function l(){return Object(i.jsx)("nav",{className:"blue-grey lighten-2",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"Movie search service"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function o(){return Object(i.jsx)("footer",{className:"page-footer blue-grey lighten-2",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var j=c(2),d=c(3),h=c(5),b=c(4),p=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(j.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",type:""},e.filterHandler=function(t){e.setState({type:t.target.dataset.type})},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{className:"validate",type:"search",placeholder:"\ud83d\udd0d",name:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})}}),Object(i.jsx)("button",{className:"btn btn-search blue-grey lighten-2",onClick:function(){return e.props.cb(e.state.search,e.state.type)},children:"Search"}),Object(i.jsxs)("div",{className:"filter",children:[Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"radio-filter",onChange:this.filterHandler,"data-type":"",name:"group1",type:"radio",checked:""===this.state.type}),Object(i.jsx)("span",{children:"All"})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"radio-filter",onChange:this.filterHandler,"data-type":"movie",name:"group1",type:"radio",checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"Movies only"})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"radio-filter",onChange:this.filterHandler,"data-type":"series",name:"group1",type:"radio",checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"Series only"})]})})]})]})}}]),c}(n.a.Component),u=c(8);function m(e){var t=e.Poster,c=e.Title,a=e.Year,n=e.imdbID,s=e.Type;return Object(i.jsx)("div",{id:n,className:"row",children:Object(i.jsx)("div",{className:"col s12",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"card-image",children:[Object(i.jsx)("img",{src:"N/A"!==t?t:"https://via.placeholder.com/300x400?text=".concat(c)}),Object(i.jsx)("span",{className:"card-title",children:c||null})]}),Object(i.jsx)("div",{className:"card-content",children:Object(i.jsxs)("p",{children:[a," ",Object(i.jsx)("span",{className:"right",children:s})]})})]})})})}function v(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(i.jsx)(m,Object(u.a)({},e),e.imdbID)})):Object(i.jsx)("h3",{children:"Sorry, movies didn't find :("})})}function O(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var x="c2f54cee",f=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(j.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.searchMovies=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.setState({loading:!0});var a="https://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t,"&type=").concat(c);fetch(a).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this,t="https://www.omdbapi.com/?apikey=".concat(x,"&s=fate");fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.loading;return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(p,{cb:this.searchMovies}),c?Object(i.jsx)(O,{}):Object(i.jsx)(v,{movies:t})]})}}]),c}(n.a.Component);var g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(f,{}),Object(i.jsx)(o,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6bd6684c.chunk.js.map