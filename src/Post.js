// custom class

class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.title = postJSON.title
        this.content = postJSON.content
        this.comment = postJSON.comments.map((comment) => {
            return new Comment(comment)
        })
    }
    renderPostList(){
        return `
            <div class="text-center">
                <div class="post">
                    <h4 class="post-title" data-id=${this.id}> ${this.title} </h4>
                    <p class="post-content" data-id=${this.id}> ${this.content} </p>
                    <br /> 
                </div>
                <button class="btn btn-primary comment-create" data-id=${this.id} id="commentBtn">Make a comment here </button>
            </div>
        `
        
    }


    // renderCommentList(){
    //     return `<li data-id=${this.id}>${this.comment}</li>`
    // }
}