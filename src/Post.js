// custom class

class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.title = postJSON.title
        this.content = postJSON.content
        // this.comment = postJSON.comment
    }
    renderPostList(){
        // added a comment btn to 
        // return `</br>
        //     <div>
        //         <li data-id=${this.id}>
        //             <p class="post-title>${this.title} 
        //               ${this.content} </p>
        //             <br /> 
        //         </li> 
        //         <button data-id=${this.id} id="commentBtn">Make a comment here </button>
        //     </div>    
        //         ` 

        return `
            <div class="text-center">
                <div>
                    <h4 class="post-title"> ${this.title} </h4>
                    <p class="post-content"> ${this.content} </p>
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