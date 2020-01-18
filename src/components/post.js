// class Post {
//     constructor(postJSON){
//         this.id = postJSON.id
//         this.title = postJSON.title
//         this.body = postJSON.body
//     }

//     renderLi(){
//         return` <h2 class="header-title" data-id=${this.id}>${this.title}</h2> 
//         </br>
//         <p class="post-body" data-id=${this.id}> ${this.body}</p>`
//     }
// }


// // contenteditable="true" this is pretty cool 

 class Post {
        constructor(postJSON){
            this.id = postJSON.id
            this.title = postJSON.title
            this.content = postJSON.content
        }
        renderPostList(){
            return `</br><li data-id=${this.id}>${this.title} : ${this.content}</li>`
        }
    }