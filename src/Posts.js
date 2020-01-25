// generate html, event listeners
class Posts{
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPosts()
    }

    initBindingsAndEventListeners() {
        this.postsContainer = document.getElementById('posts-container')
        this.postForm = document.getElementById('new-post')
        this.postTitle = document.getElementById('new-post-title')
        this.postContent = document.getElementById('new-post-content')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
        //  this.commentContainer = document.getElementById('comments-container')
       //  this.postsContainer.addEventListener('dblclick', this.editPost.bind(this))
       //  this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)
       //  this is my new event listner for commentbtn 
       //   this.commentContainer.addEventListener('commentBtn', this.displayCommentForm.bind(this))
       // this.commentButton = document.getElementById('commentBtn')
   
    }
   // post begin 



    createPost(e) {
        e.preventDefault()
        const title = this.postTitle.value
        const content = this.postContent.value
      

        this.adapter.createPost(title, content).then( post =>{
            this.posts.push(new Post ( post ))
            this.postTitle.value = ''
            this.postContent.value = ''
            this.render()
        })
    }
    editPost(e){
        this.togglePost(e)
        
       }
       
       togglePost(e) {
           const li = e.target
           li.contentEditable = true
           li.focus()
           li.classList.add('editable')
           debugger
       }

       updatePost(e) {
        const li = e.target
        li.contentEditable = false 
        li.classList.remove('editable')
        const value = li.innerHTML
        const id = li.dataset.id
        let [title, content] = value.split(':')
        console.log("BANANAS") 
        this.adapter.updatePost(title, content, id)   
       }

    fetchAndLoadPosts(){
        this.adapter
        .getPosts()
        .then( posts => {
            posts.forEach( post => this.posts.push(new Post(post)))
        })
        .then( () => {
            this.render()
        })
    }

    render(){
        this.postsContainer.innerHTML = this.posts.map(post => {
           return post.renderPostList()}).join('')
       //  debugger
        this.commentButton = document.querySelectorAll("#commentBtn")
        this.commentButton.forEach((button) => {
           button.addEventListener('click', this.createCommentForm)
        })
       //  this.commentButton.addEventListener('click', this.createComment)
       
       const postList = document.querySelectorAll("li")
       postList.forEach((post) => {
           post.addEventListener('dblclick', this.editPost.bind(this))
       })
    }
   //  post end

   // comments begin 

    createCommentForm() {
       const form = document.createElement("form")
       const textBox = document.createElement("input")
       const submit = document.createElement("input")
       submit.setAttribute("type","submit")
       
       form.append(textBox, submit)


       this.parentElement.appendChild(form) 
 
   }
     
   

   
}

