const containerPosts = document.querySelector('#posts')


document.addEventListener('DOMContentLoaded', () => {
    updatePosts();

})
function updatePosts() {
    fetch('http://localhost:3030/api/all').then(res => {
        return res.json()
    }).then(json => {
        let postElements = '';

        json.map(post => {
            let postElement = `
                <div class="col-sm-5 col-md-4 mt-3 ">
                 <div id="${post.id}" class=" card" style="height:200px">
                    <div class="card-header">
                        <h4 class="card-title">${post.title}</h4>
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                 </div>
                </div>`
            postElements += postElement

        })
        containerPosts.innerHTML = postElements
    })

}

function newPosts() {
    let title = document.querySelector('#title').value
    let description = document.querySelector('#desc').value

    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }
    fetch('http://localhost:3030/api/new', options).then(res => {
        updatePosts()
    })

    clearInputs()

}

function clearInputs() {
    let title = document.querySelector('#title').value = ''
    let description = document.querySelector('#desc').value = ''
}


