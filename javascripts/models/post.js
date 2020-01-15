class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.title = postJSON.title
        this.body = postJSON.body
    }

    renderLi(){
        return `<li>${this.title}, ${this.body}</li>`
    }
}