// 057-Lesson

// /keyboard 
let inserrt = document.getElementById('insert');

window.document.addEventListener('keydown', (e) => {
    inserrt.innerHTML=`
   <div class="key">
     ${e.key == ' ' ? 'Space' : e.key}
      <small>event.key</small>
   </div>
   <div class="key">
     ${e.keyCode}
      <small>event.keyCode</small>
   </div>
   <div class="key">
     ${e.code}
      <small>event.key</small>
   </div>
`
})