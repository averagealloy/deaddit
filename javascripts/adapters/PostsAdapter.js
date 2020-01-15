class PostsAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/num1/posts'
    }
    getPosts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createPost(postValue){
        const post = {
            body: postValue
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({post})
        }).then(res => res.json())
    }
}