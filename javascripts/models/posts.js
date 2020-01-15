class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.inItBindEventListeners()
        this.fetchAndLoadPosts()
    }

    inItBindEventListeners(){
        this.postsContainer = document.getElementById('posts-container')
        this.newPostBody = getElementById('new-post-form')
        this.postForm = document.getElementById('new-post-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
    }

    createPost(e){
        e.preventDefault()
        const postValue = this.newPostBody.value

        this.adapter.createPost(postValue).then(post => {
            this.posts.push(new Post(post))
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