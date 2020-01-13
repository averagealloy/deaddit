class Posts(){
    constructor(){
    this.posts = []
    this.adapter = new PostsAdapter()
    this.bindEventListeners()
    }
}