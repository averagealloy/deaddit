class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.title = postJSON.title
        this.body = postJSON.body
    }

    renderLi(){
        return `<li contenteditable="true">${this.title}, ${this.body}</li>`
    }
}