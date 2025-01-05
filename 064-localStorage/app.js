// // Code: localStorage qo'shish
// localStorage.setItem('Ism','Jasurjon');
// localStorage.setItem('Yosh','17');
// localStorage.setItem('familya','Toshtemirov');
// localStorage.setItem('ism','Jasurjon');
// localStorage.setItem('yosh','17');
// // Olish uchun 
// let familya=localStorage.getItem('familya');

// document.write(familya);

// document.write(localStorage.length);
// // localStorage ni tozalash
// localStorage.clear();
// document.write(localStorage.length);
// // localStorage dan o'chirish
// localStorage.removeItem('ism');
// document.write(localStorage.length);

// Oddiy to-do ro'yxat yaratish

localStorage.setItem('Ism','Jasurjon')
localStorage.setItem('familya','Toshtemirov')
let menhaqimda =JSON.parse(localStorage.getItem('menhaqimda')) ? JSON.parse(localStorage.getItem('menhaqimda')) : [];

if (menhaqimda.length > 0){
    menhaqimda.forEach((name)=>{
        console.log(name);
    })
}
else{
    console.log(`yo'q narsa`);
    
}