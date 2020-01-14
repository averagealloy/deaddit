class Post {
    constructor(postJSON){
        this.id = postJSON.id
        this.title = postJSON.title
        this.body = noteJSON.body
    }

    renderLi(){
        return `<li>${this.title}</li>`
    }
}