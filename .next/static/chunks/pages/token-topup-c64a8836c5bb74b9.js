(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{6011:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/token-topup",function(){return s(4281)}])},8567:function(e,t,s){"use strict";s.d(t,{L:function(){return f}});var n=s(5893),i=s(3606),r=s(9417),l=s(7814),c=s(5675),o=s.n(c),a=s(1664),d=s.n(a),h=s(7294),x=s(9307),u=s(8773);let f=e=>{let{children:t,availableTokens:s,posts:c,postId:a,postCreated:f}=e,{user:m}=(0,i.aF)(),{setPostsFromSSR:p,posts:w,getPosts:j,noMorePosts:N}=(0,h.useContext)(x.Z);return(0,h.useEffect)(()=>{if(p(c),a){let e=c.find(e=>e._id===a);e||j({getNewerPosts:!0,lastPostDate:f})}},[c,p,a,f,j]),(0,n.jsxs)("div",{className:"grid grid-cols-[300px_1fr] h-screen max-h-screen",children:[(0,n.jsxs)("div",{className:"flex flex-col text-white overflow-hidden",children:[(0,n.jsxs)("div",{className:"bg-slate-800 px-2",children:[(0,n.jsx)(u.T,{}),(0,n.jsx)(d(),{href:"/post/new",className:"btn",children:"블로그 작성"}),(0,n.jsxs)(d(),{href:"/token-topup",className:"block mt-2 text-center",children:[(0,n.jsx)(l.G,{icon:r.owJ,className:"text-yellow-500"}),(0,n.jsxs)("span",{className:"pl-1",children:[s," 캐시 "]})]})]}),(0,n.jsxs)("div",{className:"px-4 flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800",children:[w.map(e=>(0,n.jsx)(d(),{href:"/post/".concat(e._id),className:"py-1 border border-white/0 block text-ellipsis overflow-hidden whitespace-nowrap my-1 px-2 bg-white/10 cursor-pointer rounded-sm ".concat(a===e._id?"bg-white/20 border-white":""),children:e.topic},e._id)),!N&&(0,n.jsx)("div",{onClick:()=>{j({lastPostDate:w[w.length-1].created})},className:"hover:underline text-sm text-slate-400 text-center cursor-pointer mt-4",children:"Load more posts"})]}),(0,n.jsx)("div",{className:"bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 h-20 px-2",children:m?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"min-w-[50px]",children:(0,n.jsx)(o(),{src:m.picture,alt:m.name,height:50,width:50,className:"min-w-[50px] rounded-full"})}),(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("div",{className:"font-bold",children:m.email}),(0,n.jsx)(d(),{className:"text-sm",href:"/api/auth/logout",children:"Logout"})]})]}):(0,n.jsx)(d(),{href:"/api/auth/login",children:"Login"})})]}),t]})}},8773:function(e,t,s){"use strict";s.d(t,{T:function(){return l}});var n=s(5893),i=s(9417),r=s(7814);let l=()=>(0,n.jsxs)("div",{className:"text-2xl text-center py-4 font-heading font-bold",children:["블로그 자동화",(0,n.jsx)(r.G,{icon:i.M_6,className:"ml-1 text-2xl text-slate-400"})]})},4281:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return r},default:function(){return l}});var n=s(5893),i=s(8567),r=!0;function l(){let e=async()=>{let e=await fetch("/api/addTokens",{method:"POST"}),t=await e.json();console.log("RESULT: ",t),window.location.href=t.session.url};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"캐시 충전 페이지"}),(0,n.jsx)("button",{className:"btn",onClick:e,children:"캐시 충전"})]})}l.getLayout=function(e,t){return(0,n.jsx)(i.L,{...t,children:e})}}},function(e){e.O(0,[976,927,774,888,179],function(){return e(e.s=6011)}),_N_E=e.O()}]);