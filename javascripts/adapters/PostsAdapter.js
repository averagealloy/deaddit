class PostsAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/num1/posts'
    }
    getPosts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}