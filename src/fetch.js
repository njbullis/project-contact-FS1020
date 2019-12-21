'use strict';

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'user',
        cache: 'no cache',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no referrer',
        body: JSON.stringify(data)
    });
        return await response.json();
}
        body: JSON.stringify(data)
        console.log(req.body);
        response.json({
            status: 'success'
        });
    
