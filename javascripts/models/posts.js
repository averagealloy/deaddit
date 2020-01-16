class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.inItBindEventListeners()
        this.fetchAndLoadPosts()
    }

    inItBindEventListeners(){
        this.postsContainer = document.getElementById('posts-container')
        this.newPostTitle = document.getElementById('titleEntry')
        this.newPostBody = document.getElementById('bodyEntry')
        this.postForm = document.getElementById('new-post-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
        this.postsContainer.addEventListener('dblclick', this.handlePostClick.bind(this))
        // this.body.addEventListener('dblclick', this.updatePost.bind(this), true)
    }

    createPost(e){
        e.preventDefault()
        const postTitleValue = this.newPostTitle.value
         const postBodyValue = this.newPostBody.value
        // console.log(postTitleValue)
        // console.log(postBodyValue)
        this.adapter.createPost(postTitleValue, postBodyValue).then(post => {
            this.posts.push(new Post(post))
            this.newPostTitle.value = ''
            this.newPostBody.value = ''
            
            this.render()
        })
    }

    handlePostClick(e){
        const li = e.target
        li.contentEditable = true
        li.classList.add('editable')
    }

    updatePost(e) {
        const li = e.target
        li.contentEditable = false
        li.ClassList.remove('editable')
        conxole.log(innerHTML)
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