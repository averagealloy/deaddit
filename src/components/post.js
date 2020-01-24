 class Post {
        constructor(postJSON){
            this.id = postJSON.id
            this.title = postJSON.title
            this.content = postJSON.content
            // this.comment = postJSON.comment
        }
        renderPostList(){
            // added a comment btn to 
            return `</br>
                <li 
                    data-id=${this.id}>
                    ${this.title} : ${this.content} 
                    <br /> 
                    <button data-id=${this.id} id="commentBtn">Comment</button>
                </li> ` 
            
        }

    
        // renderCommentList(){
        //     return `<li data-id=${this.id}>${this.comment}</li>`
        // }
    }