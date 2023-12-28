

import '/src/pages/newPost/newPost.css'
import { setDocumentTitle, getNode, insertLast, clearContents } from '/src/lib/'
import pb from '/src/api/pocketbase'



setDocumentTitle('2.9cm / 상품 추가');



function newPost(){

  
  const add = getNode('.add');
  const imgField = getNode('#imgField');
  const cancel = getNode('.cancel');

  async function handleNewPost(){
    
    const formData = new FormData();

    formData.append('brand',getNode('#brand').value);
    formData.append('description',getNode('#description').value);
    formData.append('price',getNode('#price').value);
    formData.append('discount',getNode('#discount').value);
    formData.append('photo',imgField.files[0]);

    
    try{
      await pb.collection('products').create(formData);
      location.href = '/src/pages/product/'
    }
    catch{
      alert('상품 정보를 올바르게 입력해 주세요');
    }
    
  }

  function handleUpload(e){
    const {files} = e.target;

    const fileImages = Array.from(files).map((file)=>({
      image:URL.createObjectURL(file),
      label:file.name
    }))

    clearContents('.render')
    
    fileImages.forEach((item)=>{
      const img = ` 
        <img src="${item.image}" alt="${item.label}" />
      ` 
      insertLast('.render',img)
    })
 
  }

  add.addEventListener('click',handleNewPost);
  cancel.addEventListener('click',()=> history.back());
  imgField.addEventListener('change',handleUpload)
  
  

}



newPost()
































