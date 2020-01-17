class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.title = postJSON.title
        this.body = postJSON.body
    }

    renderLi(){
        return `<h2 class="title" data-id=${this.id}>${this.title}</h2> 
        </br>
        <p class="body" data-id=${this.id}> ${this.body}</p>`
    }
}


// contenteditable="true" this is pretty cool 