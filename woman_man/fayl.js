let sets = document.querySelectorAll('input');
let img = document.querySelector('img');

sets.forEach((item)=>{
item.addEventListener("change",()=>{
  let i = item.dataset.val;
  if(i=='erkak'){
    img.src = '/woman_man/rasim/rasim2.png';
  }else{
    img.src = '/woman_man/rasim/rasm.png';
  }

})
})