
import '/src/pages/login/login.css'
import { getNode, tiger, getStorage, setStorage, memo } from '/src/lib/'
import PocketBase from 'pocketbase'
import gsap from 'gsap';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

const loginButton = getNode('.login');

async function handleLogin(e){
  e.preventDefault();

  try{
    const id = getNode('#idField').value;
    const pw = getNode('#pwField').value;
  
    const userData = await pb
    .collection('users')
    .authWithPassword(id,pw)

    const {model,token} = await getStorage('pocketbase_auth');

    setStorage('auth',{
      isAuth: !!model,
      user:model,
      token:token
    })
    
    alert('로그인 완료! 메인페이지로 이동합니다.')
    window.location.href = '/index.html'
  }

  catch{
    alert('인증된 사용자가 아닙니다.');
  }
}



loginButton.addEventListener('click',handleLogin)

















