class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.title = postJSON.title
        this.body = postJSON.body
    }

    renderLi(){
        return `<li>${this.title} </br> ${this.body}</li>`
    }
}


// contenteditable="true" this is pretty cool 