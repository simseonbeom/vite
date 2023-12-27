

import '/src/styles/style.css'
import gsap from "gsap";
import { getStorage, insertLast } from '/src/lib/'


const tl = gsap.timeline();

tl.from('.visual',{ opacity:0, y:30, })
  .from('h2 > span',{ opacity:0, x:-30, stagger:0.2 })




const {isAuth,user} = await getStorage('auth');

if(isAuth){
  const template = /* html */`
    <div class="userName">${user.name}님 반갑습니다 😘</div>
    <button class="logout" type="button">로그아웃</button>
  `
  insertLast('.container',template)
}





















