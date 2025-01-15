 const myTodos = (cb) => {
     const request = new XMLHttpRequest();

     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
     request.send()

     request.addEventListener('readystatechange', () => {
        
         if (request.readyState === 4 && request.status === 200) {
            const add=JSON.parse(request.responseText)
             cb(undefined, add)
         }
         else if (request.readyState===4){
            cb('Malumot kelmadi',undefined)

         }
     })
 }

 myTodos((err,data)=>{
   if(err){
    console.log(err);
    
   }
   else{
    console.log(data);
    
   }
 })


