// fetch requests
class PostsAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000'
    }
    getPosts(){
        return fetch(`${this.baseUrl}/api/num1/posts`).then(res => res.json())
    }

    createPost(title, content){
        const post = {
            title: title,
            content: content
        
        }
        
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
    }

    // updatePost( data, id){
    //     debugger
    //     const post = {
    //         title: title,
    //         content: content
    //     }
        
    //     return fetch(`${this.baseUrl}/${id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type' : 'application/json' 
    //     },
    //         body: JSON.stringify(post)
    //     })
    //     .then(res => res.json())
    // }


}