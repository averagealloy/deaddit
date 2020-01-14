class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.initbindEventListeners()
        this.fetchAndLoadPosts()
    }

    initbindEventListeners(){
        this.postsContainer = document.getElementById('posts-container')
    }

    fetchAndLoadPosts() {
        this.adapter
        .getPosts()
        .then(posts => {
            posts.forEach(post => this.posts.push(new Post(post)))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        //const postsContainer = document.getElementById('posts-container')
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
        
    }
}