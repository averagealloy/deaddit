class PostsAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/num1/posts'
    }
    getPosts(){
        return fetch(this.baseUrl).then(res => res.json())
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

    updatePost( title, content, id){
        
        const post = {
            title: title,
            content: content
        }
        
        return fetch(`${this.baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json' 
        },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
    }


}