(this.webpackJsonpjianshu=this.webpackJsonpjianshu||[]).push([[6],{45:function(e,t,a){e.exports={header:"style_header__1GLhg",btn:"style_btn__UZbxR",write:"style_write__1j85m",sign_up:"style_sign_up___bp27",log_in:"style_log_in__202FQ",headerFont:"style_headerFont__8sBOE",logo:"style_logo__2i-wX",nav:"style_nav__2M1B8",home:"style_home__1pAgg",download:"style_download__2c_MM",search:"style_search__1pRnE",fangdajing:"style_fangdajing__1CAAR",search_info:"style_search_info__2sDDg",search_header:"style_search_header__3nB3D",search_content:"style_search_content__16VT-"}},46:function(e,t,a){"use strict";var n=a(15),c=a(16),s=a(18),o=a(17),i=a(0),r=a.n(i),l=a(45),u=a.n(l),_=a(19),m=a(48),h=a.n(m),g=a(20),d=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).changeSearchInfo=function(){var e=c.state,t=e.page;t<=e.totalPage&&t++,c.setState({page:t})},c.state={focus:!1,mouseIn:!1,list:["\u5b66\u4e601","\u5b66\u4e602","\u5b66\u4e603","\u5b66\u4e604","\u5b66\u4e605","\u5b66\u4e606","\u8bfb\u4e667","\u8bfb\u4e668","\u8bfb\u4e669","\u8bfb\u4e6610","\u8bfb\u4e6611","\u8bfb\u4e6612"],page:1,totalPage:2},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:u.a.header},r.a.createElement(g.b,{to:"/",className:u.a.logo}),r.a.createElement(g.b,{to:"/write",className:"".concat(u.a.write," ").concat(u.a.btn)},r.a.createElement("span",{className:"iconfont iconyumaobi"}),"\u5199\u6587\u7ae0"),r.a.createElement("a",{href:"/sign_up",className:"".concat(u.a.sign_up," ").concat(u.a.btn)},"\u6ce8\u518c"),r.a.createElement("div",{className:"".concat(u.a.log_in," ").concat(u.a.btn)},this.props.isLogin?r.a.createElement("div",{onClick:this.props.loginOut},"\u9000\u51fa"):r.a.createElement(g.b,{to:"/sign_in"},"\u767b\u5f55")),r.a.createElement("div",{className:"".concat(u.a.btn," ").concat(u.a.headerFont)},r.a.createElement("span",{className:"iconfont iconAa"})),r.a.createElement("div",{className:u.a.nav},r.a.createElement("div",null,r.a.createElement("span",{className:u.a.home},"\u9996\u9875")),r.a.createElement("div",{className:u.a.download},"\u4e0b\u8f7dApp"),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("input",{type:"text",name:"",id:"",className:u.a.search,placeholder:"\u641c\u7d22",onFocus:function(){e.setState({focus:!0})},onBlur:function(){e.setState({focus:!1})}}),r.a.createElement("span",{className:"iconfont iconfangdajing ".concat(u.a.fangdajing)}),this.showSearchContent(this.state.focus,this.state.mouseIn))))}},{key:"showSearchContent",value:function(e,t){var a=this,n=this.state.page,c=6*(n-1),s=6*n;return e||t?r.a.createElement("div",{className:u.a.search_info,onMouseEnter:function(){a.setState({mouseIn:!0})},onMouseLeave:function(){a.setState({mouseIn:!1})}},r.a.createElement("div",{className:u.a.search_header},r.a.createElement("span",{className:u.a.hot_search},"\u70ed\u95e8\u641c\u7d22"),r.a.createElement("span",{onClick:this.changeSearchInfo,style:{cursor:"pointer"}},"\u6362\u4e00\u6279")),r.a.createElement("div",{className:u.a.search_content},this.state.list.slice(c,s).map((function(e){return r.a.createElement("a",{href:"/",key:e},e)})))):r.a.createElement("div",null)}}]),a}(i.Component);t.a=Object(_.b)((function(e){return{value:e.getIn(["headerReducer","value"]),isLogin:e.getIn(["loginReducer","isLogin"])}}),(function(e){return{demo:function(){e((function(e){h.a.get("/api/demo.json").then((function(e){}))}))},loginOut:function(){e({type:"login_out",value:!1})}}}))(d)},85:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(16),s=a(18),o=a(17),i=a(0),r=a.n(i),l=a(19),u=a(1),_=a(46),m=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={},c}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isLogin?r.a.createElement("div",null,r.a.createElement(_.a,null),"write"):r.a.createElement(u.a,{to:"/sign_in"})}}]),a}(i.Component);t.default=Object(l.b)((function(e){return{isLogin:e.getIn(["loginReducer","isLogin"])}}),null)(m)}}]);
//# sourceMappingURL=6.c9e1f845.chunk.js.map