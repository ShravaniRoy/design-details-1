(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/EDR":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},"23aj":function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),o=a("ZOn8"),i=a("vOnD"),l=a("BZ/I"),s=a("6BQ9"),c=a.n(s),u=function(t,e){var a=c()(t.substring(1,3),16),n=c()(t.substring(3,5),16),r=c()(t.substring(5,7),16),o=function(t){return c()(t*(100+e)/100,10)};a=o(a),n=(n=o(n))<255?n:255,r=(r=o(r))<255?r:255;var i=function(t){return 1===t.toString(16).length?"0".concat(t.toString(16)):t.toString(16)},l=i(a=a<255?a:255),s=i(n),u=i(r);return"#".concat(l).concat(s).concat(u)},d=function(t,e){var a=c()(t.slice(1,3),16),n=c()(t.slice(3,5),16),r=c()(t.slice(5,7),16);return e>=0?"rgba(".concat(a,", ").concat(n,", ").concat(r,", ").concat(e,")"):"rgb(".concat(a,", ").concat(n,", ").concat(r,")")},p=i.default.div.withConfig({displayName:"styles__Container",componentId:"xj5jqq-0"})(["background:",";border-radius:12px;padding:24px;display:grid;grid-column:",";@media(max-width:768px){grid-column:span 1;}"],function(t){return t.tint?d(t.tint,.08):l.a.ui.borderLight},function(t){return t.col}),m=i.default.h3.withConfig({displayName:"styles__Title",componentId:"xj5jqq-1"})(["font-size:20px;font-weight:800;color:",";margin:0;margin-bottom:8px;display:flex;align-items:center;svg{margin-right:8px;fill:currentColor;}"],function(t){return t.tint?u(t.tint,-20):l.a.text.primary}),g=i.default.p.withConfig({displayName:"styles__Description",componentId:"xj5jqq-2"})(["font-size:16px;font-weight:500;max-width:768px;color:",";margin:0;margin-bottom:16px;line-height:1.4;"],function(t){return t.tint?u(t.tint,-30):l.a.text.secondary}),f=r.a.createElement,h=function(t){return f(p,t)};h.Title=m,h.Description=g;var b=h,x=i.default.div.withConfig({displayName:"style__Grid",componentId:"sc-1hk2m7x-0"})(["display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-gap:16px;align-items:center;width:100%;margin-top:8px;"]),y=i.default.div.withConfig({displayName:"style__Option",componentId:"sc-1hk2m7x-1"})(["display:grid;grid-template-columns:40px 1fr 40px;grid-template-rows:auto;grid-gap:4px;padding:8px;border-radius:8px;margin:0 -8px;width:calc(100% + 16px);&:hover{background:rgba(0,0,0,0.04);}&:active{background:",";transform:translateY(1px);}"],l.a.ui.border),w=i.default.img.withConfig({displayName:"style__Avatar",componentId:"sc-1hk2m7x-2"})(["width:32px;height:32px;border-radius:10px;background-color:",";"],l.a.ui.default),v=i.default.p.withConfig({displayName:"style__Label",componentId:"sc-1hk2m7x-3"})(["font-size:16px;font-weight:600;color:",";align-items:center;display:flex;"],l.a.text.secondary),k=(i.default.span.withConfig({displayName:"style__Arrow",componentId:"sc-1hk2m7x-4"})([""]),"https://geo.itunes.apple.com/ca/podcast/feed/id947191070"),_="https://overcast.fm/itunes947191070",C="http://pca.st/itunes/947191070",j="http://simplecast.fm/podcasts/1034/rss",U="https://play.google.com/music/m/Iyvjpq3k44ux2azsmvlxe3cc5by?t=Design_Details",I="https://castro.fm/itunes/947191070",O="https://www.breaker.audio/design-details",E=(l.a.brand.primary,l.a.brand.primary,r.a.createElement),N=function(){return E(x,null,k&&E("a",{href:k,target:"_blank",rel:"noopener noreferrer","data-cy":"subscription-apple-podcasts"},E(y,null,E(w,{src:"/static/img/subscription-icons/podcasts.png",alt:"Apple Podcasts"}),E(v,null,"Apple Podcasts"))),_&&E("a",{href:_,target:"_blank",rel:"noopener noreferrer","data-cy":"subscription-overcast"},E(y,null,E(w,{src:"/static/img/subscription-icons/overcast.png",alt:"Overcast"}),E(v,null,"Overcast"))),C&&E("a",{href:C,target:"_blank",rel:"noopener noreferrer","data-cy":"subscription-pocketcasts"},E(y,null,E(w,{src:"/static/img/subscription-icons/pocketcasts.png",alt:"Pocketcasts"}),E(v,null,"PocketCasts"))),U&&E("a",{href:U,target:"_blank",rel:"noopener noreferrer","data-cy":"subscription-google-podcasts"},E(y,null,E(w,{src:"/static/img/subscription-icons/google-podcasts.png",alt:"Google Podcasts"}),E(v,null,"Google Podcasts"))),I&&E("a",{href:I,target:"_blank",rel:"noopener noreferrer","data-cy":"subscription-castro"},E(y,null,E(w,{src:"/static/img/subscription-icons/castro.png",alt:"Castro"}),E(v,null,"Castro"))),O&&E("a",{href:O,target:"_blank",rel:"noopener noreferrer","data-cy":"subscription-breaker"},E(y,null,E(w,{src:"/static/img/subscription-icons/breaker.png",alt:"Breakrer"}),E(v,null,"Breaker"))),j&&E("a",{href:j,target:"_blank",rel:"noopener noreferrer","data-cy":"subscription-rss"},E(y,null,E(w,{src:"/static/img/subscription-icons/rss.png",alt:"RSS Feed"}),E(v,null,"RSS Feed"))))},P=i.default.div.withConfig({displayName:"styles__Grid",componentId:"sc-1nkemwz-0"})(["display:grid;grid-template-columns:1fr;grid-template-rows:auto;width:100%;"]),S=i.default.a.withConfig({displayName:"styles__Option",componentId:"sc-1nkemwz-1"})(["padding:12px;color:",";font-weight:600;width:100%;display:flex;border-radius:8px;align-items:center;svg{fill:",";margin-right:12px;min-width:6px;min-height:9px;}&:hover{background:",";}&:last-of-type{border-bottom:0;margin-bottom:0;}@media(max-width:512px){padding:12px 0;align-items:flex-start;svg{margin-top:8px;}&:hover{background:transparent;}}"],u(l.a.brand.primary,-30),l.a.brand.primary,d(l.a.brand.primary,.2)),D=a("CpVP"),T=r.a.createElement,B=[{url:"https://spec.fm/podcasts/design-details/220880",title:"271: Principles of Design"},{url:"https://spec.fm/podcasts/design-details/161416",title:"253: Follow The Troll Flow (feat. May-Li Khoe & Chikezie Ejiasi)"},{url:"https://spec.fm/podcasts/design-details/113490",title:"235: Incremental Correctness (feat. Guillermo Rauch)"},{url:"https://spec.fm/podcasts/design-details/306429",title:"309: Career Progression for Product Designers"},{url:"https://spec.fm/podcasts/design-details/298638",title:"297: Day-to-Day Design Struggles"},{url:"https://spec.fm/podcasts/design-details/292309",title:"292: Building Design Systems (feat. Linzi Berry)"},{url:"https://spec.fm/podcasts/design-details/308804",title:"314: Beauty, Vulnerability, and Doing Things That Matter (feat. Haraldur Thorleifsson)"}],z=function(){return T(P,null,B.map(function(t){return T(S,{key:t.title,target:"_blank",rel:"noopener noreferrer",href:t.url},T(D.a,null),t.title)}))},q=function(t){var e=t.condition,a=t.wrap,n=t.children;return e?a(n):n},F=0,A=function(){return 6===F?F=0:F++,["/static/img/patreon/random/1.png","/static/img/patreon/random/2.png","/static/img/patreon/random/3.png","/static/img/patreon/random/4.png","/static/img/patreon/random/5.png","/static/img/patreon/random/6.png","/static/img/patreon/random/7.png"][F]},M=[{name:"Sisu",imageUrl:"/static/img/patreon/golden/sisu.png",url:"https://sisu.ai/",tagline:"Sisu is looking for a thoughtful and data-savvy designer to help build the next generation of analytics software. You can find out more at sisu.ai."}],R=[{name:"Adam Carroll",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Alec Sukoski",twitterUsername:null,image:"/static/img/patreon/alec_sukoski.jpg",state:"active",dayOne:!1},{name:"Andrew Crandall",twitterUsername:null,image:"/static/img/patreon/andrew_crandall.jpeg",state:"active",dayOne:!0},{name:"Aurora Pleguezuelo",twitterUsername:null,image:"/static/img/patreon/aurora_pleguezuelo.jpe",state:"active",dayOne:!0},{name:"Bradford Ulrich",twitterUsername:null,image:A(),state:"active",dayOne:!1},{name:"Brandon Weiss",twitterUsername:null,image:"/static/img/patreon/brandon_weiss.jpeg",state:"active",dayOne:!0},{name:"Cameron Campbell",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Claudio Vallejo",twitterUsername:null,image:"/static/img/patreon/claudio_vallejo.jpeg",state:"active",dayOne:!0},{name:"Christian Ruiz",twitterUsername:null,image:"/static/img/patreon/christian_ruiz.jpg",state:"active",dayOne:!0},{name:"Derek Graham",twitterUsername:null,image:A(),state:"active",dayOne:!1},{name:"Doris Saturday",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Effy Zhang",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Essa Saulat",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Jeff Parsons",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"John Wood",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Joseph Brueggen",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Justin Allen",twitterUsername:null,image:"/static/img/patreon/justin_allen.jpeg",state:"active",dayOne:!1},{name:"Karl Koch",twitterUsername:"_kejk",image:"/static/img/patreon/karl_koch.jpeg",state:"active",dayOne:!0},{name:"Kris Puckett",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Kyle Mitchell",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"MannnnnnyX",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Manuel Solera",twitterUsername:null,image:"/static/img/patreon/manuel_solera.jpeg",state:"active",dayOne:!1},{name:"Max Stoiber",twitterUsername:null,image:A(),state:"active",dayOne:!0},{name:"Sam Bernhardt",twitterUsername:null,image:"/static/img/patreon/sam_bernhardt.jpeg",state:"active",dayOne:!1},{name:"Sam Mason",twitterUsername:null,image:A(),state:"active",dayOne:!0}],G=i.default.div.withConfig({displayName:"styles__Grid",componentId:"osb6ll-0"})(["display:grid;grid-gap:16px;grid-template-columns:repeat(4,1fr);grid-template-rows:auto;margin-top:24px;@media(max-width:768px){grid-template-columns:repeat(2,1fr);}@media(max-width:512px){grid-template-columns:1fr;}"]),K=i.default.a.withConfig({displayName:"styles__Microphone",componentId:"osb6ll-1"})(["display:flex;flex:1 0 33%;flex-direction:column;padding:24px;border-radius:8px;&:hover{background:",";}"],u("#FDE8E6",-4)),L=i.default.img.withConfig({displayName:"styles__MicAvatar",componentId:"osb6ll-2"})(["width:60px;height:60px;"]),X=i.default.p.withConfig({displayName:"styles__MicName",componentId:"osb6ll-3"})(["font-size:18px;font-weight:600;color:",";margin:0;margin-top:12px;"],u(l.a.social.patreon,-50)),W=i.default.p.withConfig({displayName:"styles__MicTagline",componentId:"osb6ll-4"})(["font-size:16px;font-weight:500;color:",";margin:0;margin-bottom:16px;"],u(l.a.social.patreon,-40)),J=i.default.div.withConfig({displayName:"styles__Supporter",componentId:"osb6ll-5"})(["display:flex;align-items:center;padding:8px 8px 8px 0;border-radius:8px;a{display:flex;width:100%;}"]),V=i.default.div.withConfig({displayName:"styles__AvatarContainer",componentId:"osb6ll-6"})(["display:flex;position:relative;align-items:center;justify-content:center;svg{fill:#901EEA;align-self:flex-end;justify-self:flex-end;position:relative;top:2px;right:14px;background:#FDE8E6;border-radius:30px;border:2px solid #FDE8E6;}"]),H=i.default.div.withConfig({displayName:"styles__Avatar",componentId:"osb6ll-7"})(["width:44px;height:44px;border-radius:50%;min-width:44px;min-height:44px;background:url('","');background-size:cover;background-position:50% 50%;"],function(t){return t.src}),Y=i.default.div.withConfig({displayName:"styles__Meta",componentId:"osb6ll-8"})(["display:flex;flex-direction:column;"]),Z=i.default.p.withConfig({displayName:"styles__Name",componentId:"osb6ll-9"})(["font-size:16px;font-weight:600;color:",";"],u(l.a.social.patreon,-50)),Q=i.default.p.withConfig({displayName:"styles__Username",componentId:"osb6ll-10"})(["font-size:16px;font-weight:500;color:",";"],u(l.a.social.patreon,-40)),$=r.a.createElement,tt=function(t){var e=t.state,a=R.filter(function(t){return t.state===e});return a&&0!==a.length?$(r.a.Fragment,null,$(G,null,M.map(function(t){return $(K,{href:t.url,target:"_blank",rel:"noopener noreferrer",key:t.name},$(L,{src:t.imageUrl}),$(X,null,t.name),$(W,null,t.tagline))})),$(G,null,a.map(function(t){return $(J,{key:t.name},$(q,{condition:!!t.twitterUsername,wrap:function(e){return $("a",{href:"https://twitter.com/".concat(t.twitterUsername),target:"_blank",rel:"noopener norefferer"},e)}},$(V,null,$(H,{alt:"".concat(t.name,"'s profile photo"),src:t.image}),t.dayOne?$(D.l,null):$("div",{style:{width:"20px"}})),$(Y,null,$(Z,null,t.name),t.twitterUsername&&$(Q,null,"@",t.twitterUsername))))}))):null},et=Object(i.css)(["-webkit-appearance:none;display:flex;flex:none;align-self:center;align-items:center;justify-content:center;border-radius:6px;font-size:",";font-weight:600;white-space:nowrap;word-break:keep-all;transition:all 0.2s ease-in-out;cursor:pointer;line-height:1;position:relative;text-align:center;padding:",";opacity:",";box-shadow:",";&:disabled{cursor:not-allowed;}&:hover{transition:all 0.2s ease-in-out;box-shadow:",";}&:focus{outline:none;}svg{margin-right:8px;}"],function(t){return function(t){switch(t){case"small":return"14px";case"default":return"16px";case"large":return"18px";default:return"16px"}}(t.size)},function(t){return function(t){switch(t){case"small":return"8px 12px";case"default":return"12px 16px";case"large":return"16px 2px";default:return"12px 16px"}}(t.size)},function(t){return t.disabled?"0.64":"1"},function(t){return t.disabled?"none":"0 1px 2px rgba(0,0,0,0.04)"},function(t){return t.disabled?"none":"".concat(l.a.shadows.button)}),at=(i.default.button.withConfig({displayName:"style__Button",componentId:"sc-1saqtx2-0"})([""," border:1px solid ",";color:",";background-color:",";background-image:",";&:hover{color:",";}&:active{border:1px solid ",";background-image:",";}&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}"],et,l.a.ui.border,l.a.text.secondary,l.a.ui.default,function(t){return"linear-gradient(to bottom, ".concat(l.a.ui.default,", ").concat(l.a.bg.wash,")")},l.a.text.primary,l.a.ui.border,function(t){return"linear-gradient(to top, ".concat(l.a.ui.default,", ").concat(l.a.bg.wash,")")},function(t){return l.a.ui.default},l.a.ui.border),i.default.button.withConfig({displayName:"style__PrimaryButton",componentId:"sc-1saqtx2-1"})([""," border:1px solid ",";color:",";background-color:",";background-image:",";&:hover{color:",";background-image:",";box-shadow:",";}&:active{border:1px solid ",";background-image:",";}&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}"],et,l.a.brand.default,l.a.ui.default,l.a.brand.alt,function(t){return"linear-gradient(to bottom, ".concat(l.a.brand.alt,", ").concat(l.a.brand.default,")")},l.a.ui.default,function(t){return"linear-gradient(to bottom, ".concat(u(l.a.brand.alt,16),", ").concat(u(l.a.brand.default,16),")")},function(t){return t.disabled?"none":l.a.shadows.button},l.a.brand.default,function(t){return"linear-gradient(to top, ".concat(l.a.brand.alt,", ").concat(l.a.brand.default,")")},function(t){return l.a.ui.default},function(t){return d(l.a.brand.alt,.16)})),nt=(i.default.button.withConfig({displayName:"style__GhostButton",componentId:"sc-1saqtx2-2"})([""," border:none;color:",";box-shadow:none;background-color:transparent;background-image:none;&:hover{background:",";color:",";box-shadow:none;}&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}"],et,l.a.text.secondary,function(t){return u(l.a.bg.wash,-3)},l.a.text.primary,l.a.ui.default,function(t){return d(l.a.text.tertiary,.08)}),i.default.button.withConfig({displayName:"style__OutlineButton",componentId:"sc-1saqtx2-3"})([""," border:1px solid ",";color:",";background-color:transparent;background-image:none;&:hover{color:",";border:1px solid ",";box-shadow:none;}&:active{border:1px solid ",";}&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}"],et,l.a.ui.border,l.a.text.secondary,l.a.text.primary,l.a.ui.border,l.a.text.placeholder,function(t){return l.a.ui.default},l.a.ui.border),i.default.div.withConfig({displayName:"style__ButtonRow",componentId:"sc-1saqtx2-4"})(["display:flex;align-items:center;@media (max-width:968px){flex-wrap:nowrap;button{margin-top:8px;}}"]),i.default.div.withConfig({displayName:"style__ButtonSegmentRow",componentId:"sc-1saqtx2-5"})(["display:flex;align-items:center;justify-content:center;position:relative;button{z-index:1;}button:active,button:focus{z-index:2;}button:first-of-type:not(:last-of-type){border-top-right-radius:0;border-bottom-right-radius:0;}button:last-of-type:not(:first-of-type){border-top-left-radius:0;border-bottom-left-radius:0;}button:not(:last-of-type):not(:first-of-type){border-radius:0;position:relative;margin:0 -1px;}","{&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}}"],at,l.a.ui.default,function(t){return d(l.a.brand.alt,.16)}),i.default.button.withConfig({displayName:"style__FacebookButton",componentId:"sc-1saqtx2-6"})([""," border:1px solid ",";color:",";background-color:",";background-image:",";&:hover{color:",";background-image:",";box-shadow:",";}&:active{border:1px solid ",";background-image:",";}&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}"],et,l.a.social.facebook,l.a.ui.default,l.a.social.facebook,function(t){return"linear-gradient(to bottom, ".concat(l.a.social.facebook,", ").concat(l.a.social.facebook,")")},l.a.ui.default,function(t){return"linear-gradient(to bottom, ".concat(u(l.a.social.facebook,16),", ").concat(u(l.a.social.facebook,16),")")},function(t){return t.disabled?"none":l.a.shadows.button},l.a.social.facebook,function(t){return"linear-gradient(to top, ".concat(l.a.social.facebook,", ").concat(l.a.social.facebook,")")},function(t){return l.a.ui.default},function(t){return d(l.a.social.facebook,.16)}),i.default.button.withConfig({displayName:"style__TwitterButton",componentId:"sc-1saqtx2-7"})([""," border:1px solid ",";color:",";background-color:",";background-image:",";&:hover{color:",";background-image:",";box-shadow:",";}&:active{border:1px solid ",";background-image:",";}&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}svg{fill:#FFF;}"],et,l.a.social.twitter,l.a.ui.default,l.a.social.twitter,function(t){return"linear-gradient(to bottom, ".concat(l.a.social.twitter,", ").concat(l.a.social.twitter,")")},l.a.ui.default,function(t){return"linear-gradient(to bottom, ".concat(u(l.a.social.twitter,4),", ").concat(u(l.a.social.twitter,4),")")},function(t){return t.disabled?"none":l.a.shadows.button},l.a.social.twitter,function(t){return"linear-gradient(to top, ".concat(l.a.social.twitter,", ").concat(l.a.social.twitter,")")},function(t){return l.a.ui.default},function(t){return d(l.a.social.twitter,.16)})),rt=i.default.button.withConfig({displayName:"style__PatreonButton",componentId:"sc-1saqtx2-8"})([""," border:1px solid ",";color:",";background-color:",";background-image:",";&:hover{color:",";background-image:",";box-shadow:",";}&:active{border:1px solid ",";background-image:",";}&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}"],et,l.a.social.patreon,l.a.ui.default,l.a.social.patreon,function(t){return"linear-gradient(to bottom, ".concat(l.a.social.patreon,", ").concat(l.a.social.patreon,")")},l.a.ui.default,function(t){return"linear-gradient(to bottom, ".concat(u(l.a.social.patreon,4),", ").concat(u(l.a.social.patreon,4),")")},function(t){return t.disabled?"none":l.a.shadows.button},l.a.social.patreon,function(t){return"linear-gradient(to top, ".concat(l.a.social.patreon,", ").concat(l.a.social.patreon,")")},function(t){return l.a.ui.default},function(t){return d(l.a.social.patreon,.16)}),ot=i.default.button.withConfig({displayName:"style__GitHubButton",componentId:"sc-1saqtx2-9"})([""," border:1px solid ",";color:",";background-color:",";background-image:",";&:hover{color:",";background-image:",";box-shadow:",";}&:active{border:1px solid ",";background-image:",";}&:focus{box-shadow:0 0 0 1px ",",0 0 0 3px ",";}svg{fill:#fff;}"],et,l.a.social.github,l.a.ui.default,l.a.social.github,function(t){return"linear-gradient(to bottom, ".concat(l.a.social.github,", ").concat(l.a.social.github,")")},l.a.ui.default,function(t){return"linear-gradient(to bottom, ".concat(u(l.a.social.github,4),", ").concat(u(l.a.social.github,4),")")},function(t){return t.disabled?"none":l.a.shadows.button},l.a.social.github,function(t){return"linear-gradient(to top, ".concat(l.a.social.github,", ").concat(l.a.social.github,")")},function(t){return l.a.ui.default},function(t){return d(l.a.social.github,.16)});r.a.createElement;r.a.createElement;r.a.createElement;r.a.createElement;r.a.createElement;var it=r.a.createElement;function lt(t){var e=t.children;return it(nt,t,it(D.m,null),e)}var st=r.a.createElement;function ct(t){var e=t.children;return st("a",{href:"https://patreon.com/designdetails",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block"}},st(rt,t,st(D.g,null),e))}var ut=r.a.createElement;function dt(t){var e=t.children;return ut("a",{href:"https://github.com/specfm/design-details/issues/new",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block"}},ut(ot,t,ut(D.c,null),e))}var pt=[{name:"Brian Lovin",role:"Co-host",twitterUsername:"brian_lovin",profilePhotoUrl:"/static/img/team/brian_lovin.jpg",coverPhotoUrl:"/static/img/team/brian_lovin_cover.jpeg"},{name:"Marshall Bock",role:"Co-host",twitterUsername:"marshallbock",profilePhotoUrl:"/static/img/team/marshallbock.png",coverPhotoUrl:"/static/img/team/marshallbock_cover.jpeg"},{name:"Sarah Marie",role:"Producer",twitterUsername:"sarahberus",profilePhotoUrl:"/static/img/team/sarahberus.jpeg",coverPhotoUrl:"/static/img/team/sarahberus_cover.jpeg"},{name:"Drew Luper",role:"Editor",twitterUsername:"luperdev",profilePhotoUrl:"/static/img/team/luperdev.jpg",coverPhotoUrl:"/static/img/team/luperdev_cover.jpeg"},{name:"Shravani Thirunagari",role:"Developer",twitterUsername:"iamshravani",profilePhotoUrl:"/static/img/team/luperdev.jpg",coverPhotoUrl:"/static/img/team/luperdev_cover.jpeg"}],mt=i.default.div.withConfig({displayName:"styles__Grid",componentId:"y33sj-0"})(["display:grid;grid-gap:24px;grid-template-columns:repeat(4,1fr);@media(max-width:968px){grid-template-columns:repeat(3,1fr);}@media(max-width:768px){grid-template-columns:repeat(2,1fr);}@media(max-width:512px){grid-template-columns:1fr;}"]),gt=i.default.div.withConfig({displayName:"styles__Person",componentId:"y33sj-1"})(["border-radius:8px;background:",";text-align:center;padding:24px;box-shadow:0 1px 2px rgba(0,0,0,0.04);margin-top:8px;a,button{width:100%;}"],d(l.a.ui.default,.5)),ft=i.default.img.withConfig({displayName:"styles__Avatar",componentId:"y33sj-2"})(["width:60px;height:60px;border-radius:60px;margin:0 auto;"]),ht=i.default.h4.withConfig({displayName:"styles__Name",componentId:"y33sj-3"})(["font-size:18px;font-weight:600;color:",";margin:0;margin-top:12px;"],l.a.text.primary),bt=i.default.h4.withConfig({displayName:"styles__Role",componentId:"y33sj-4"})(["font-size:16px;font-weight:500;color:",";margin:0;margin-bottom:16px;"],l.a.text.secondary),xt=r.a.createElement,yt=function(){return xt(mt,null,pt.map(function(t){return xt(gt,{key:t.twitterUsername},xt(ft,{alt:"".concat(t.name,"'s avatar"),src:t.profilePhotoUrl}),xt(ht,null,t.name),xt(bt,null,t.role),xt("a",{href:"https://twitter.com/".concat(t.twitterUsername),target:"_blank",rel:"noopener norefferer"},xt(lt,null,"@",t.twitterUsername)))}))},wt=a("p0XB"),vt=a.n(wt);var kt=a("XXOK"),_t=a.n(kt);function Ct(t,e){return function(t){if(vt()(t))return t}(t)||function(t,e){var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=_t()(t);!(n=(i=l.next()).done)&&(a.push(i.value),!e||a.length!==e);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var jt=a("ln6h"),Ut=a.n(jt),It=a("eVuF"),Ot=a.n(It);function Et(t,e,a,n,r,o,i){try{var l=t[o](i),s=l.value}catch(c){return void a(c)}l.done?e(s):Ot.a.resolve(s).then(n,r)}var Nt=a("0iUn"),Pt=a("sLSF"),St=a("MI3g"),Dt=a("a7VT"),Tt=a("AT/M"),Bt=a("Tit0"),zt=a("hfKm"),qt=a.n(zt);function Ft(t,e,a){return e in t?qt()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var At=a("Jo+v"),Mt=a.n(At),Rt=a("4mXO"),Gt=a.n(Rt),Kt=a("pLtp"),Lt=a.n(Kt);function Xt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Lt()(a);"function"===typeof Gt.a&&(n=n.concat(Gt()(a).filter(function(t){return Mt()(a,t).enumerable}))),n.forEach(function(e){Ft(t,e,a[e])})}return t}var Wt=Object(i.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),Jt=i.default.div.withConfig({displayName:"Donut",componentId:"sc-1q9b07k-0"})(["animation:",";border:4px solid ",";border-left-color:",";border-radius:50%;height:30px;width:30px;"],function(){return Object(i.css)([""," 0.8s linear infinite"],Wt)},d(l.a.brand.primary,.2),l.a.brand.primary),Vt=r.a.createElement,Ht=function(t){var e=t.style;return Vt("div",{style:Xt({display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},e)},Vt(Jt,null))},Yt=r.a.createElement,Zt=function(t){function e(){var t,a;Object(Nt.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=Object(St.a)(this,(t=Object(Dt.a)(e)).call.apply(t,[this].concat(r))),Ft(Object(Tt.a)(a),"state",{episode:null,loading:!0}),a}return Object(Bt.a)(e,t),Object(Pt.a)(e,[{key:"componentDidMount",value:function(){var t,e=(t=Ut.a.mark(function t(){var e=this;return Ut.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spec.fm/podcasts/1034/episodes.json").then(function(t){return t.json()}).then(function(t){var a=t.find(function(t){return!!t.published});e.setState({loading:!1,episode:a})}).catch(function(){return e.setState({loading:!1})});case 2:case"end":return t.stop()}},t)}),function(){var e=this,a=arguments;return new Ot.a(function(n,r){var o=t.apply(e,a);function i(t){Et(o,n,r,i,l,"next",t)}function l(t){Et(o,n,r,i,l,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.episode;if(t.loading)return Yt(b,{tint:l.a.brand.primary,col:"1 / span 6"},Yt(b.Title,{tint:l.a.brand.primary},Yt(D.h,null),"Latest Episode"),Yt(Ht,{style:{padding:"85px 0"}}));if(!e)return null;var a=Ct(e.sharing_url.split("s/"),2)[1];return a?Yt(b,{tint:l.a.brand.primary,col:"1 / span 6"},Yt(b.Title,{tint:l.a.brand.primary},Yt(D.h,null),"Latest Episode"),Yt("iframe",{frameBorder:"0",height:"200px",scrolling:"no",seamless:!0,src:"https://embed.simplecast.com/".concat(a,"?color=f5f5f5"),width:"100%"})):null}}]),e}(r.a.Component),Qt=r.a.createElement;e.default=function(){return Qt(o.a,null,Qt(Zt,null),Qt(b,{col:"1 / span 2"},Qt(b.Title,null,Qt(D.i,null),"Subscribe"),Qt(N,null)),Qt(b,{tint:l.a.brand.primary,col:"3 / span 4"},Qt(b.Title,{tint:l.a.brand.primary},Qt(D.k,null),"Where to begin?"),Qt(b.Description,{tint:l.a.brand.primary},"In the last five years we've recorded more than 300 episodes. Here are a few of our favorites that will help make your start a little easier!"),Qt(z,null)),Qt(b,{tint:l.a.social.patreon,col:"1 / span 6"},Qt(b.Title,{tint:l.a.social.patreon},Qt(D.d,null),"Listener supported"),Qt(b.Description,{tint:l.a.social.patreon},"This show is possible because of the generosity of our listeners. If you've found our podcast useful or entertaining, please consider supporting us directly by becoming a patron."),Qt(ct,null,"Support us on Patreon"),Qt(tt,{state:"active"}),Qt(tt,{state:"former"})),Qt(b,{col:"1 / span 3"},Qt(b.Title,null,Qt(D.j,null),"Have a question?"),Qt(b.Description,null,"We'd love to help. Head over to our repo and create an issue, and we'll reply back when we discuss it on the show. DM us if you'd like to ask a question anonymously."),Qt(dt,null,"Ask us a question")),Qt(b,{tint:l.a.social.twitter,col:"4 / span 3"},Qt(b.Title,{tint:l.a.social.twitter},Qt(D.n,null),"Follow along"),Qt(b.Description,{tint:l.a.social.twitter},"We'll be tweeting new episodes, polls, questions, and show updates. Follow us and say hi!"),Qt("a",{style:{display:"flex",alignItems:"flex-end"},href:"https://twitter.com/designdetailsfm",target:"_blank",rel:"noopener noreferrer"},Qt(lt,null,"@designdetailsfm"))),Qt(b,{col:"1 / span 6"},Qt(b.Title,null,Qt(D.e,null),"Our team"),Qt(b.Description,null,"It takes a four-person village to pull this show together. These are the people in that village. Except, we're distributed around the US and mostly just text each other. If you want to see what we're up to, follow us on Twitter."),Qt(yt,null)))}},"4mXO":function(t,e,a){t.exports=a("7TPF")},"5pKv":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(t,e,a){t.exports=a("uekQ")},"7TPF":function(t,e,a){a("AUvm"),t.exports=a("WEpk").Object.getOwnPropertySymbols},XWtR:function(t,e,a){var n=a("5T2Y").parseInt,r=a("oc46").trim,o=a("5pKv"),i=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var a=r(String(t),3);return n(a,e>>>0||(i.test(a)?16:10))}:n},dEVD:function(t,e,a){var n=a("Y7ZC"),r=a("XWtR");n(n.G+n.F*(parseInt!=r),{parseInt:r})},oc46:function(t,e,a){var n=a("Y7ZC"),r=a("Jes0"),o=a("KUxP"),i=a("5pKv"),l="["+i+"]",s=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),u=function(t,e,a){var r={},l=o(function(){return!!i[t]()||"\u200b\x85"!="\u200b\x85"[t]()}),s=r[t]=l?e(d):i[t];a&&(r[a]=s),n(n.P+n.F*l,"String",r)},d=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},uekQ:function(t,e,a){a("dEVD"),t.exports=a("WEpk").parseInt}},[["/EDR",1,0]]]);