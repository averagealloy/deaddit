class PostsAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/num1/posts'
    }
    getPosts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createPost(postTitleValue, postBodyValue){
        const post = {
            title: postTitleValue,
            body: postBodyValue
        
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({post})
        }).then(res => res.json())
    }

    updatePost(postTitleValue, postBodyValue, id){
        const post = {
            title: postTitleValue,
            body: postBodyValue
        }
        return fetch(`${this.baseUrl}/id`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({post})
        }).then(res => res.json())
    }

    // add a delete function here for your third fetch call 
}