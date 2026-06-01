(()=>{var e={};e.id=516,e.ids=[516],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7492:(e,a,i)=>{"use strict";i.r(a),i.d(a,{GlobalError:()=>s.a,__next_app__:()=>x,originalPathname:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>l}),i(4151),i(6882),i(5866);var t=i(3191),r=i(8716),n=i(7922),s=i.n(n),d=i(5231),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);i.d(a,o);let l=["",{children:["shop",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,4151)),"/workspaces/petscream-website/app/shop/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,6882)),"/workspaces/petscream-website/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}],p=["/workspaces/petscream-website/app/shop/[id]/page.tsx"],c="/shop/[id]/page",x={require:i,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/shop/[id]/page",pathname:"/shop/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},2530:(e,a,i)=>{Promise.resolve().then(i.bind(i,3547))},9844:(e,a,i)=>{"use strict";i.d(a,{R:()=>t});let t=[{id:"heart-pop",name:"Heart Pop",subtitle:"Blueberry & Banana",image:"/images/heart-pop.png",price:12,href:"/shop/heart-pop",ctaLabel:"Add to cart",description:"A heart-shaped frozen pop crafted with a creamy goat dairy blend, real fruit, and a touch of peanut butter. Three wholesome ingredients — endless tail wags.",ingredients:["Goat Dairy Blend","Blueberry & Banana","Peanut Butter"],weightG:75,weightOz:2.6,count:"1 piece"},{id:"paw-pop",name:"Paw Pop",subtitle:"Blueberry & Banana",image:"/images/paw-pop.png",price:12,href:"/shop/paw-pop",ctaLabel:"Add to cart",description:"A paw-shaped frozen pop made with a rich goat dairy blend, fresh fruit, and creamy peanut butter. Simple ingredients, serious happiness.",ingredients:["Goat Dairy Blend","Blueberry & Banana","Peanut Butter"],weightG:75,weightOz:2.6,count:"1 piece"},{id:"everyday-pop",name:"Everyday Pop",subtitle:"Blueberry & Banana",image:"/images/mini-pop.png",price:6,href:"/shop/everyday-pop",ctaLabel:"Add to cart",description:"The everyday treat your dog deserves. A light, refreshing frozen pop made with goat dairy blend, real fruit, and peanut butter — perfect for any occasion.",ingredients:["Goat Dairy Blend","Blueberry & Banana","Peanut Butter"],weightG:35,weightOz:1.2,count:"1 piece"},{id:"mini-mix",name:"Mini Bone & Paw Mix",subtitle:"Blueberry & Banana",image:"/images/pawbone-bites.png",price:6,href:"/shop/mini-mix",ctaLabel:"Add to cart",description:"Bite-sized bone and paw shaped treats packed with goat dairy blend, real fruit, and peanut butter. Great for training, sharing, or just spoiling.",ingredients:["Goat Dairy Blend","Blueberry & Banana","Peanut Butter"],weightG:50,weightOz:1.8,count:"Assorted mix"}]},3547:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>p});var t=i(326),r=i(6226),n=i(434),s=i(7389),d=i(7577),o=i(4494),l=i(9844);function p({params:e}){let a=l.R.find(a=>a.id===e.id);a||(0,s.notFound)();let{addItem:i}=(0,o.j)(),[p,c]=(0,d.useState)(1),[x,u]=(0,d.useState)(!1);return(0,t.jsxs)("main",{className:"detail-main",children:[t.jsx("div",{className:"back-wrap",children:t.jsx(n.default,{href:"/shop",className:"back-btn",children:"← All treats"})}),(0,t.jsxs)("div",{className:"detail-grid",children:[(0,t.jsxs)("div",{className:"detail-image-wrap",children:[a.badge&&t.jsx("span",{className:"detail-badge",children:a.badge}),t.jsx(r.default,{src:a.image,alt:a.name,fill:!0,style:{objectFit:"cover",objectPosition:"top center"},sizes:"(max-width: 768px) 100vw, 50vw",priority:!0})]}),(0,t.jsxs)("div",{className:"detail-info",children:[t.jsx("p",{className:"detail-subtitle",children:a.subtitle}),t.jsx("h1",{className:"detail-name",children:a.name}),(0,t.jsxs)("div",{className:"detail-meta",children:[(0,t.jsxs)("span",{className:"detail-price",children:["$",a.price]}),(0,t.jsxs)("span",{className:"detail-weight",children:[a.weightG,"g \xb7 ",a.weightOz,"oz"]}),a.count&&t.jsx("span",{className:"detail-count",children:a.count})]}),t.jsx("p",{className:"detail-desc",children:a.description}),(0,t.jsxs)("div",{className:"detail-ingredients",children:[t.jsx("p",{className:"section-label",children:"Ingredients"}),(0,t.jsxs)("div",{className:"ingredient-pills",children:[a.ingredients.map(e=>{let a=e.toLowerCase().includes("goat")?"\uD83E\uDD5B":e.toLowerCase().includes("blueberry")||e.toLowerCase().includes("banana")||e.toLowerCase().includes("fruit")?"\uD83E\uDED0":e.toLowerCase().includes("peanut")?"\uD83E\uDD5C":"\uD83C\uDF3F";return(0,t.jsxs)("span",{className:"ingredient-pill",children:[a," ",e]},e)}),t.jsx("span",{className:"ingredient-pill",children:"\uD83D\uDC3E Safe for Dogs"})]})]}),(0,t.jsxs)("div",{className:"detail-actions",children:[(0,t.jsxs)("div",{className:"qty-selector",children:[t.jsx("button",{className:"qty-btn",onClick:()=>c(e=>Math.max(1,e-1)),disabled:p<=1,style:{opacity:p<=1?.4:1},children:"−"}),t.jsx("span",{className:"qty-num",children:p}),t.jsx("button",{className:"qty-btn",onClick:()=>c(e=>e+1),children:"+"})]}),t.jsx("button",{className:`add-btn ${x?"added":""}`,onClick:()=>{for(let e=0;e<p;e++)i({id:a.id,name:a.name,subtitle:a.subtitle,image:a.image,price:a.price});u(!0),setTimeout(()=>{u(!1),c(1)},1800)},disabled:x,children:x?`Added${p>1?` \xd7${p}`:""} ✓`:`Add to cart${p>1?` \xd7${p}`:""}`})]}),(0,t.jsxs)("div",{className:"detail-badges",children:[(0,t.jsxs)("div",{className:"info-card",children:["❄️ ",(0,t.jsxs)("span",{children:["Frozen Fresh",t.jsx("br",{}),t.jsx("small",{children:"Made daily"})]})]}),(0,t.jsxs)("div",{className:"info-card",children:["\uD83D\uDC3E ",(0,t.jsxs)("span",{children:["Dog Approved",t.jsx("br",{}),t.jsx("small",{children:"Tail-wagged"})]})]}),(0,t.jsxs)("div",{className:"info-card",children:["\uD83C\uDF3F ",(0,t.jsxs)("span",{children:["100% Natural",t.jsx("br",{}),t.jsx("small",{children:"No additives"})]})]})]})]})]}),t.jsx("style",{children:`
        .detail-main {
          min-height: 100dvh;
          background: #FFF6E9;
          color: #2B1B12;
          font-family: ui-rounded, system-ui, sans-serif;
          padding: 0 0 60px;
        }

        .back-wrap {
          padding: 20px 32px 0;
        }

        .back-btn {
          font-size: 13px;
          font-weight: 600;
          color: #8a6a5a;
          text-decoration: none;
        }
        .back-btn:hover { color: #2B1B12; }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 32px;
          align-items: start;
        }

        .detail-image-wrap {
          position: relative;
          aspect-ratio: 3 / 4;
          background: #F9F3EA;
          border-radius: 32px;
          overflow: hidden;
        }

        .detail-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          background: #F4A63A;
          color: white;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 14px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .detail-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 8px;
        }

        .detail-subtitle {
          font-size: 11px;
          font-weight: 700;
          color: #2FB7B5;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0;
        }

        .detail-name {
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 900;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.05;
        }

        .detail-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .detail-price {
          font-size: 28px;
          font-weight: 900;
          color: #2B1B12;
        }

        .detail-weight {
          background: white;
          border: 1.5px solid #ecdccb;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #6b4c3b;
        }

        .detail-count {
          background: #E8F7F7;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #1a6b6a;
        }

        .detail-desc {
          font-size: 15px;
          color: #5a3e32;
          line-height: 1.7;
          margin: 0;
        }

        .section-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #b09a8a;
          margin: 0 0 8px;
        }

        .ingredient-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ingredient-pill {
          background: white;
          border: 1.5px solid #ecdccb;
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #2B1B12;
        }

        .detail-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 4px;
        }

        .qty-selector {
          display: flex;
          align-items: center;
          gap: 4px;
          background: white;
          border: 1.5px solid #ecdccb;
          border-radius: 999px;
          padding: 4px 8px;
          flex-shrink: 0;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: #2FB7B5;
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }
        .qty-btn:disabled { background: #e0d5cc; cursor: default; }

        .qty-num {
          font-size: 16px;
          font-weight: 800;
          min-width: 28px;
          text-align: center;
        }

        .add-btn {
          flex: 1;
          background: #2FB7B5;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 14px 0;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .add-btn.added { background: #22a09e; cursor: default; }

        .detail-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 4px;
        }

        .info-card {
          flex: 1;
          min-width: 90px;
          background: white;
          border: 1px solid #ecdccb;
          border-radius: 16px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 20px;
        }

        .info-card span {
          font-size: 12px;
          font-weight: 700;
          color: #2B1B12;
          line-height: 1.4;
        }

        .info-card small {
          font-weight: 500;
          color: #8a6a5a;
          display: block;
        }

        @media (max-width: 768px) {
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 16px 20px;
          }
          .back-wrap { padding: 16px 20px 0; }
          .detail-name { font-size: 32px; }
          .detail-actions { flex-direction: column; }
          .add-btn { width: 100%; }
          .qty-selector { justify-content: center; }
        }
      `})]})}},4151:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>t});let t=(0,i(8570).createProxy)(String.raw`/workspaces/petscream-website/app/shop/[id]/page.tsx#default`)}};var a=require("../../../webpack-runtime.js");a.C(e);var i=e=>a(a.s=e),t=a.X(0,[948,363,264],()=>i(7492));module.exports=t})();