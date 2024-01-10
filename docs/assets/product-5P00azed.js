import{a as c,t as n,g as i}from"./delay-qO0Dxm4Y.js";import{s as p,g as l}from"./storage--8WsE0oY.js";import{s as u}from"./setDocumentTitle-_OwlDZqT.js";function d(s,a){typeof s=="string"&&(s=c(s)),s.insertAdjacentHTML("beforeend",a)}function g(s){return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function f(s,a="photo"){return`https://jfam.pockethost.io/api/files/${s.collectionId}/${s.id}/${s[a]}`}const h={isAuth:!1,user:null,token:""};u("2.9cm / 상품 목록");localStorage.getItem("auth")||p("auth",h);async function $(){const a=(await n.get("https://jfam.pockethost.io/api/collections/products/records")).data.items,{isAuth:e}=await l("auth");a.forEach(t=>{const o=t.price*(t.discount*.01),r=`
      <li class="product-item">
      <a href="${e?`/src/pages/detail/index.html#${t.id}`:"/src/pages/login/"}">
          <figure>
            <img src="${f(t)}" alt="" />
          </figure>
          <span class="brand">${t.brand}</span>
          <span class="desc">${t.description}</span>
          <span class="price">${t.price}</span>
          <div>
            <span class="discount">${t.discount}%</span>
            <span class="real-price">${g(t.price-o)}원</span>
          </div>
        </a>
      </li>
    `;d(".container > ul",r)}),i.from(".product-item",{y:30,opacity:0,stagger:.1})}$();
