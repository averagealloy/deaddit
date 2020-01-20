 class Post {
        constructor(postJSON){
            this.id = postJSON.id
            this.title = postJSON.title
            this.content = postJSON.content
            // this.comment = postJSON.comment
        }
        renderPostList(){
            return `</br><li data-id=${this.id}>${this.title} : ${this.content}</li>`
        }
    }