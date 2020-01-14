class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.initbindEventListeners()
        this.fetchAndLoadPosts()
    }

    initbindEventListeners

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
        const postsContainer = document.getElementById('posts-container')
        postsContainer.innerHTML = this.posts.map(post => `<li>${post.title, post.body}</li>`).join('')
        
    }
}