(()=>{var e={};e.id=21,e.ids=[21],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6565:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>s.a,__next_app__:()=>x,originalPathname:()=>c,pages:()=>l,routeModule:()=>u,tree:()=>p}),a(3101),a(6882),a(5866);var r=a(3191),i=a(8716),n=a(7922),s=a.n(n),o=a(5231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);a.d(t,d);let p=["",{children:["shop",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,3101)),"/workspaces/petscream-website/app/shop/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,6882)),"/workspaces/petscream-website/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],l=["/workspaces/petscream-website/app/shop/page.tsx"],c="/shop/page",x={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/shop/page",pathname:"/shop",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},4858:(e,t,a)=>{Promise.resolve().then(a.bind(a,7480))},9844:(e,t,a)=>{"use strict";a.d(t,{R:()=>r});let r=[{id:"heart-pop",name:"Heart Pop",subtitle:"Blueberry & Banana",image:"/images/heart-pop.png",price:12,href:"/shop/heart-pop",ctaLabel:"Add to cart",description:"A heart-shaped frozen pop crafted with a creamy goat dairy blend, real fruit, and a touch of peanut butter. Three wholesome ingredients — endless tail wags.",ingredients:["Goat Dairy Blend","Blueberry & Banana","Peanut Butter"],weightG:75,weightOz:2.6,count:"1 piece"},{id:"paw-pop",name:"Paw Pop",subtitle:"Blueberry & Banana",image:"/images/paw-pop.png",price:12,href:"/shop/paw-pop",ctaLabel:"Add to cart",description:"A paw-shaped frozen pop made with a rich goat dairy blend, fresh fruit, and creamy peanut butter. Simple ingredients, serious happiness.",ingredients:["Goat Dairy Blend","Blueberry & Banana","Peanut Butter"],weightG:75,weightOz:2.6,count:"1 piece"},{id:"everyday-pop",name:"Everyday Pop",subtitle:"Blueberry & Banana",image:"/images/mini-pop.png",price:6,href:"/shop/everyday-pop",ctaLabel:"Add to cart",description:"The everyday treat your dog deserves. A light, refreshing frozen pop made with goat dairy blend, real fruit, and peanut butter — perfect for any occasion.",ingredients:["Goat Dairy Blend","Blueberry & Banana","Peanut Butter"],weightG:35,weightOz:1.2,count:"1 piece"},{id:"mini-mix",name:"Mini Bone & Paw Mix",subtitle:"Blueberry & Banana",image:"/images/pawbone-bites.png",price:6,href:"/shop/mini-mix",ctaLabel:"Add to cart",description:"Bite-sized bone and paw shaped treats packed with goat dairy blend, real fruit, and peanut butter. Great for training, sharing, or just spoiling.",ingredients:["Goat Dairy Blend","Blueberry & Banana","Peanut Butter"],weightG:50,weightOz:1.8,count:"Assorted mix"}]},7480:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var r=a(326),i=a(6226),n=a(434),s=a(7577),o=a(4494),d=a(9844);function p(){let{addItem:e}=(0,o.j)(),[t,a]=(0,s.useState)(()=>Object.fromEntries(d.R.map(e=>[e.id,1]))),[p,l]=(0,s.useState)(null),c=(e,t)=>{a(a=>({...a,[e]:Math.max(1,a[e]+t)}))},x=r=>{let i=t[r.id];for(let t=0;t<i;t++)e({id:r.id,name:r.name,subtitle:r.subtitle,image:r.image,price:r.price});l(r.id),setTimeout(()=>{l(null),a(e=>({...e,[r.id]:1}))},1500)};return(0,r.jsxs)("main",{className:"shop-main",children:[(0,r.jsxs)("div",{className:"shop-header",children:[r.jsx("p",{className:"shop-label",children:"Shop all treats"}),r.jsx("h1",{className:"shop-title",children:"Frozen treats for happy tails \uD83D\uDC3E"})]}),r.jsx("div",{className:"product-grid",children:d.R.map(e=>{let a=t[e.id],s=p===e.id;return(0,r.jsxs)("article",{className:"product-card",children:[r.jsx(n.default,{href:e.href,className:"card-image-link",children:r.jsx("div",{className:"card-image",children:r.jsx(i.default,{src:e.image,alt:`${e.subtitle} ${e.name}`,fill:!0,style:{objectFit:"cover",objectPosition:"top center"},sizes:"(max-width: 768px) 50vw, 25vw",priority:"heart-pop"===e.id})})}),(0,r.jsxs)("div",{className:"card-body",children:[r.jsx("p",{className:"card-subtitle",children:e.subtitle}),(0,r.jsxs)("div",{className:"card-row",children:[r.jsx(n.default,{href:e.href,className:"card-name-link",children:r.jsx("h2",{className:"card-name",children:e.name})}),(0,r.jsxs)("span",{className:"card-price",children:["$",e.price]})]}),(0,r.jsxs)("p",{className:"card-weight",children:[e.weightG,"g \xb7 ",e.weightOz,"oz"]}),(0,r.jsxs)("div",{className:"qty-selector",children:[r.jsx("button",{className:"qty-btn",onClick:()=>c(e.id,-1),disabled:a<=1,style:{opacity:a<=1?.4:1},children:"−"}),r.jsx("span",{className:"qty-num",children:a}),r.jsx("button",{className:"qty-btn",onClick:()=>c(e.id,1),children:"+"})]}),r.jsx("button",{className:`add-btn ${s?"added":""}`,onClick:()=>x(e),disabled:s,children:s?`Added${a>1?` \xd7${a}`:""} ✓`:`Add to cart${a>1?` \xd7${a}`:""}`}),r.jsx(n.default,{href:e.href,className:"learn-link",children:"Details →"})]})]},e.id)})}),r.jsx("style",{children:`
        .shop-main {
          min-height: 100dvh;
          background: #FFF6E9;
          color: #2B1B12;
          font-family: ui-rounded, system-ui, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .shop-header {
          text-align: center;
          padding: 24px 24px 12px;
          flex-shrink: 0;
        }
        .shop-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: #2FB7B5;
          margin: 0 0 6px;
        }
        .shop-title {
          font-size: clamp(20px, 2.5vw, 30px);
          font-weight: 800;
          color: #2B1B12;
          margin: 0;
        }

        /* 4'l\xfc grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding: 12px 24px 40px;
          flex: 1;
        }

        /* Kartlar arka planla kaynaşıyor */
        .product-card {
          background: white;
          border-radius: 24px;
          border: none;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(43,27,18,0.09);
          display: flex;
          flex-direction: column;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(43,27,18,0.14);
        }

        .card-image-link {
          display: block;
          text-decoration: none;
        }

        .card-image {
          background: #F9F3EA;
          position: relative;
          aspect-ratio: 3 / 4;
          flex-shrink: 0;
          overflow: hidden;
        }
        .card-image img {
          transition: transform 0.3s ease;
        }
        .card-image:hover img {
          transform: scale(1.04);
        }

        .card-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          background: #F4A63A;
          color: white;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .card-body {
          padding: 12px 14px 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 5px;
        }

        .card-subtitle {
          font-size: 9px;
          font-weight: 700;
          color: #2FB7B5;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .card-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
        }

        .card-name-link { text-decoration: none; }

        .card-name {
          font-size: clamp(13px, 1.1vw, 17px);
          font-weight: 800;
          color: #2B1B12;
          margin: 0;
        }

        .card-price {
          font-size: 13px;
          font-weight: 800;
          color: #2B1B12;
          background: #FFF6E9;
          border-radius: 999px;
          padding: 2px 10px;
          border: 1px solid #ecdccb;
          flex-shrink: 0;
        }

        .card-weight {
          font-size: 11px;
          color: #a08070;
          margin: 0;
          font-weight: 500;
        }

        .qty-selector {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFF6E9;
          border: 1.5px solid #ecdccb;
          border-radius: 999px;
          padding: 3px 6px;
          margin-top: 2px;
        }

        .qty-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: none;
          background: #2FB7B5;
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }
        .qty-btn:disabled { background: #e0d5cc; cursor: default; }

        .qty-num {
          font-size: 15px;
          font-weight: 800;
          color: #2B1B12;
          min-width: 24px;
          text-align: center;
        }

        .add-btn {
          width: 100%;
          background: #2FB7B5;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 9px 0;
          font-size: clamp(11px, 0.9vw, 13px);
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
          margin-top: 2px;
        }
        .add-btn.added { background: #22a09e; cursor: default; }

        .learn-link {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          color: #8a6a5a;
          text-decoration: none;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 8px 14px 28px;
          }
          .card-name { font-size: 15px; }
          .qty-btn { width: 28px; height: 28px; }
          .add-btn { font-size: 13px; padding: 10px 0; }
        }
      `})]})}},3101:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(8570).createProxy)(String.raw`/workspaces/petscream-website/app/shop/page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[948,363,264],()=>a(6565));module.exports=r})();