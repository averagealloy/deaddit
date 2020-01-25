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
        
        return fetch(`${this.baseUrl}/api/num1/posts`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
    }


    createComment(content, postId){
        const comment = {
            the_comment: content,
            post_id: postId
        }
        
        return fetch(`${this.baseUrl}/api/num1/comments`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
    }
}