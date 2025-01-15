function ios(api, callback) {
    const request = new XMLHttpRequest();

    request.open('GET', api);
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                callback(undefined, data);
            } else {
                callback('Error', undefined);
            }
        }
    });
}

ios('todos/ap.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);

    }
    ios('todos/api.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);

        }
        ios('todos/apps.json', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);

            }
        })

    })




});