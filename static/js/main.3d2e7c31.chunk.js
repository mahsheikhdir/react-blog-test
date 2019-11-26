(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{47:function(e,t,a){e.exports=a(63)},52:function(e,t,a){},53:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(23),u=a.n(i),r=(a(52),a(7)),l=a(17),o=a(18),c=a(21),m=a(19),p=a(22),d=(a(53),a(54),a(71)),h=a(66),b=a(67),v=a(13),f=a(65),g=a(73);var E=function(e){var t,a,i=e.postId,u=Object(s.useState)([]),l=Object(r.a)(u,2),o=l[0],c=l[1];return Object(s.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/comments?postId="+i).then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),n.a.createElement(g.a,{variant:"flush"},n.a.createElement(g.a.Item,null,n.a.createElement("h4",{style:{fondWeight:"bold"}},"Comments")),(t=0===o.length,a=o.map((function(e){return n.a.createElement(g.a.Item,{key:e.id},n.a.createElement("p",{style:{fontWeight:"bold"}},e.email),e.body)})),t?n.a.createElement(f.a,{animation:"border",role:"status",style:{margin:20}},n.a.createElement("span",{className:"sr-only"},"Loading...")):a))},y=function(e){var t=e.post,a=e.users,i=e.imgLink,u=Object(s.useState)("name"),l=Object(r.a)(u,2),o=l[0],c=l[1];return Object(s.useEffect)((function(){var e=a.find((function(e){return e.id===t.userId}));void 0!==e&&c(e.name)}),[a]),n.a.createElement(d.a,{className:"posts"},n.a.createElement(d.a.Header,null,n.a.createElement(d.a.Title,null,t.title)),n.a.createElement(d.a.Body,null,n.a.createElement(h.a,{src:i,className:"postImg"}),n.a.createElement(d.a.Title,null,"By ",n.a.createElement(v.b,{to:"/user/"+t.userId},o)),n.a.createElement(d.a.Text,null,t.body),n.a.createElement(b.a,{variant:"primary"},"Read more")),n.a.createElement(E,{postId:t.id}))},j=a(68),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={users:[],posts:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://jsonplaceholder.typicode.com/posts?userId="+this.props.match.params.id;Promise.all([fetch("https://jsonplaceholder.typicode.com/users"),fetch(t)]).then((function(e){var t=Object(r.a)(e,2),a=t[0],s=t[1];return Promise.all([a.json(),s.json()])})).then((function(t){var a=Object(r.a)(t,2),s=a[0],n=a[1];e.setState({users:s,posts:n})})).catch(console.log)}},{key:"createBox",value:function(e,t){return void 0===t?"Loading..":n.a.createElement(g.a,{horizontal:!0,style:{paddingTop:10}},n.a.createElement(g.a.Item,{style:{width:150}},e),n.a.createElement(g.a.Item,null,t))}},{key:"render",value:function(){var e=this,t=this.state.users[this.props.match.params.id-1];return n.a.createElement(j.a,{style:{paddingTop:10}},n.a.createElement(d.a,null,n.a.createElement(d.a.Header,null,n.a.createElement(d.a.Title,null,t&&t.name)),n.a.createElement(d.a.Body,null,this.createBox("Username",t&&t.username),this.createBox("Phone",t&&t.phone),this.createBox("City",t&&void 0!==t.address?t.address.city:"Loading..."),this.createBox("Company",t&&void 0!==t.company?t.company.name:"Loading..."),this.createBox("Website",t&&t.website),n.a.createElement(d.a.Body,null,n.a.createElement("blockquote",{className:"blockquote mb-0"},n.a.createElement("p",null," ",t&&void 0!==t.company?t.company.catchPhrase:"Loading.."," "),n.a.createElement("footer",{className:"blockquote-footer"},t&&t.name," from"," ",n.a.createElement("cite",null,t&&void 0!==t.company?t.company.name:"Loading..")))))),n.a.createElement("h3",{style:{marginTop:10}},"Posts by ",t&&t.name," "),this.state.posts.map((function(t){return n.a.createElement(y,{key:t.id,post:t,users:e.state.users,imgLink:"https://source.unsplash.com/random"})})))}}]),t}(s.Component),k=a(70),O=a(72),P=a(69),L=a(12),I=function(){var e={textDecoration:"none",color:"white"};return n.a.createElement(k.a,{bg:"dark",variant:"dark"},n.a.createElement(k.a.Brand,null,n.a.createElement(v.b,{to:"/home",style:e},"React Blog")),n.a.createElement(O.a,{className:"mr-auto"},n.a.createElement(O.a.Link,null,n.a.createElement(v.b,{to:"/home",style:e},"Home")),n.a.createElement(O.a.Link,null,n.a.createElement(v.b,{to:"/posts",style:e},"All Posts")),n.a.createElement(O.a.Link,null,n.a.createElement(v.b,{to:"/about",style:e},"About"))))},B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],users:[],imgLinks:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("https://jsonplaceholder.typicode.com/posts"),fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://picsum.photos/v2/list?page=2&limit=100")]).then((function(e){var t=Object(r.a)(e,3),a=t[0],s=t[1],n=t[2];return Promise.all([a.json(),s.json(),n.json()])})).then((function(t){var a=Object(r.a)(t,3),s=a[0],n=a[1],i=a[2];e.setState({posts:s,users:n,imgLinks:i})})).catch(console.log)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(v.a,null,n.a.createElement(I,null),n.a.createElement(h.a,{className:"mainImg",src:"https://source.unsplash.com/random"}),n.a.createElement(L.c,null,n.a.createElement(L.a,{path:"/home",component:C}),n.a.createElement(L.a,{path:"/posts",component:D}),n.a.createElement(L.a,{path:"/about",component:x}),n.a.createElement(L.a,{path:"/user/:id",component:q}))))}}]),t}(s.Component),C=function(){return n.a.createElement(j.a,null,n.a.createElement(P.a,{style:{marginTop:10}},n.a.createElement(d.a.Title,null,"Home Page"),n.a.createElement(d.a.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae laoreet nunc, maximus dapibus arcu. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu enim porta, sagittis mauris vel, ullamcorper risus. Vestibulum vestibulum pharetra pharetra. Curabitur magna leo, auctor nec lectus eget, iaculis tempor urna. Praesent ac dictum eros. Morbi volutpat, nisl sed aliquam cursus, lorem ligula congue risus, vitae imperdiet eros sapien vel felis. Cras sagittis maximus ante in tempus. Pellentesque in tellus ac augue iaculis venenatis interdum in sapien.",n.a.createElement("br",null),n.a.createElement("br",null),"Morbi vehicula id justo nec sagittis. Cras fringilla magna et eros ultricies, vel molestie arcu blandit. Duis laoreet pulvinar odio, blandit placerat augue euismod eu. Duis sapien ex, gravida eu erat id, congue varius velit. Sed vel cursus est. Ut vitae arcu at felis mattis facilisis. Donec venenatis vestibulum sem, id faucibus neque mollis non. Cras mauris purus, facilisis sed pellentesque non, fermentum vel erat. Vestibulum ac nisi in eros efficitur ultricies et eu turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elementum nisl a est luctus, at mattis arcu gravida.",n.a.createElement("br",null),n.a.createElement("br",null),"Aenean est purus, semper ac risus vitae, aliquam consequat erat. Nunc finibus sodales lacus vitae tincidunt. Praesent luctus sodales mauris a ornare. Nullam et ullamcorper elit. Phasellus bibendum at orci nec malesuada. Suspendisse metus mauris, fermentum sit amet magna condimentum, consequat rutrum nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras erat arcu, egestas ac nisi vitae, volutpat laoreet tortor. Etiam in ipsum sed lacus condimentum ornare quis non augue. Etiam eget ante sodales, malesuada urna vitae, finibus erat. Donec nec metus sed ipsum finibus faucibus. Proin magna ipsum, consequat a mauris vel, pharetra ultricies enim. Nam interdum tempus ipsum eget facilisis. Duis commodo, justo nec eleifend pharetra, lacus lacus varius eros, ac volutpat ligula sapien id massa. In dui felis, laoreet eget quam et, imperdiet elementum urna.")))},x=function(){return n.a.createElement(j.a,null,n.a.createElement(P.a,{style:{marginTop:10}},n.a.createElement(d.a.Title,null,"About"),n.a.createElement(d.a.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae laoreet nunc, maximus dapibus arcu. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu enim porta, sagittis mauris vel, ullamcorper risus. Vestibulum vestibulum pharetra pharetra. Curabitur magna leo, auctor nec lectus eget, iaculis tempor urna. Praesent ac dictum eros. Morbi volutpat, nisl sed aliquam cursus, lorem ligula congue risus, vitae imperdiet eros sapien vel felis. Cras sagittis maximus ante in tempus. Pellentesque in tellus ac augue iaculis venenatis interdum in sapien.",n.a.createElement("br",null),n.a.createElement("br",null),"Morbi vehicula id justo nec sagittis. Cras fringilla magna et eros ultricies, vel molestie arcu blandit. Duis laoreet pulvinar odio, blandit placerat augue euismod eu. Duis sapien ex, gravida eu erat id, congue varius velit. Sed vel cursus est. Ut vitae arcu at felis mattis facilisis. Donec venenatis vestibulum sem, id faucibus neque mollis non. Cras mauris purus, facilisis sed pellentesque non, fermentum vel erat. Vestibulum ac nisi in eros efficitur ultricies et eu turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elementum nisl a est luctus, at mattis arcu gravida.",n.a.createElement("br",null),n.a.createElement("br",null),"Aenean est purus, semper ac risus vitae, aliquam consequat erat. Nunc finibus sodales lacus vitae tincidunt. Praesent luctus sodales mauris a ornare. Nullam et ullamcorper elit. Phasellus bibendum at orci nec malesuada. Suspendisse metus mauris, fermentum sit amet magna condimentum, consequat rutrum nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras erat arcu, egestas ac nisi vitae, volutpat laoreet tortor. Etiam in ipsum sed lacus condimentum ornare quis non augue. Etiam eget ante sodales, malesuada urna vitae, finibus erat. Donec nec metus sed ipsum finibus faucibus. Proin magna ipsum, consequat a mauris vel, pharetra ultricies enim. Nam interdum tempus ipsum eget facilisis. Duis commodo, justo nec eleifend pharetra, lacus lacus varius eros, ac volutpat ligula sapien id massa. In dui felis, laoreet eget quam et, imperdiet elementum urna.")))},D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],users:[],imgLinks:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("https://jsonplaceholder.typicode.com/posts"),fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://picsum.photos/v2/list?page=2&limit=100")]).then((function(e){var t=Object(r.a)(e,3),a=t[0],s=t[1],n=t[2];return Promise.all([a.json(),s.json(),n.json()])})).then((function(t){var a=Object(r.a)(t,3),s=a[0],n=a[1],i=a[2];e.setState({posts:s,users:n,imgLinks:i})})).catch(console.log)}},{key:"render",value:function(){var e=this;return n.a.createElement(j.a,null,n.a.createElement("h1",{className:"title"},"All Posts"),this.state.posts.map((function(t){return n.a.createElement(y,{key:t.id,post:t,users:e.state.users,imgLink:e.state.imgLinks[t.id-1].download_url})})))}}]),t}(s.Component),N=B;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.3d2e7c31.chunk.js.map