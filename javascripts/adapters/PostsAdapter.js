class PostAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/num1/notes'
    }
    getPosts(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}