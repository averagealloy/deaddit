 class Post {
        constructor(postJSON){
            this.id = postJSON.id
            this.title = postJSON.title
            this.content = postJSON.content
            // this.comment = postJSON.comment
        }
        renderPostList(){
            // added a comment btn to 
            return `</br><li data-id=${this.id}>${this.title} : ${this.content} </li><ul> <button btnId="commentBtn">Comment</button></ul>` 
            
        }
    }