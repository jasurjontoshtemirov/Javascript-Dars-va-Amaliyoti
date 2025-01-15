const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
let a = 0;


  function bilmadm() {
      let add = setInterval(() => {
          a++
          heading.textContent = a
      }, 1000)
      btn2.addEventListener('click',()=>{
        setTimeout(()=>{
            clearInterval(add)
        })
    })
  }




btn.addEventListener('click',bilmadm)
