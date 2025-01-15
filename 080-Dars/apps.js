const ios = (call) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', call)
        request.send();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject("Xato")
            }
        })
    })

}
ios('./Jsons/golibjon.json')
    .then((data)=>{
        console.log(data);
        return ios('./Jsons/diyorjon.json')
    })
    .then((data)=>{
        console.log(data);
        return ios('./Jsons/jasurjon.json')
        
    })
    .then((data)=>{
        console.log(data);
        
    })
    .catch((error)=>{
        console.log(error);
        
    })