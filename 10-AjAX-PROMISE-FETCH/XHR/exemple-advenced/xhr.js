let get = function (url, success, error) {
    let xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.responseText);
            } else {
                error(xhr)
            }
        }
    }
    xhr.open('GET', url, true)
    xhr.send();
}


let getPost = function (success, error) {
    get('https://jsonplaceholder.typicode.com/users', function (response) {
        let users = JSON.parse(response);

        get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id, function (response) {
            let posts = JSON.parse(response)
            success(posts);
        }, function (e) {
            error('Error Ajax: ', e)
        });

    }, function (e) {
        error('Error Ajax: ', e)
    });
}

getPost(function (post) {
    console.log('Le premier article', post[0])
}, function(error){
    console.error(error)
})
