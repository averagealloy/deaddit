class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.inItBindEventListeners()
        this.fetchAndLoadPosts()
    }

    inItBindEventListeners(){
        this.postsContainer = document.getElementById('posts-container')
        this.newPostTitle = document.getElementById('title')
        this.newPostBody = document.getElementById('body')
        this.postForm = document.getElementById('new-post-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
    }

    createPost(e){
        e.preventDefault()
        const postTitleValue = this.newPostTitle.value
        const postBodyValue = this.newPostBody.value

        this.adapter.createPost(postTitleValue, postBodyValue).then(post => {
            this.posts.push(new Post(post))
            this.newPostTitle.value = ''
            this.newPostBody.value = ''
            // need on of these for title aswell
            this.render()
        })
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