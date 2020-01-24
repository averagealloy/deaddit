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
        //  this.commentContainer = document.getElementById('comments-container')
         this.postForm.addEventListener('submit', this.createPost.bind(this))
         this.postsContainer.addEventListener('dblclick', this.editPost.bind(this))
         this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)
        //  this is my new event listner for commentbtn 
        //   this.commentContainer.addEventListener('commentBtn', this.displayCommentForm.bind(this))
        //   this.attachevent('onclick', )
        // this.commentButton = document.getElementById('commentBtn')
        // this.commentButton.addEventListener('onclick', this.createComment.bind(this))
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
         this.postsContainer.innerHTML = this.posts.map(post => post.renderPostList()).join('')
         this.commentButton = document.querySelectorAll("#commentBtn")
         this.commentButton.forEach((button) => {
            button.addEventListener('click', this.createComment)
         })
        //  this.commentButton.addEventListener('click', this.createComment)
         console.log(this.commentButton)
     }
    //  post end

    // comments begin 

    // createComment(){
    //     return `
    //     <input type="text" id="new-comment">
    //     <input type="submit"></input>
    //     `
    //     }
    
    //   displayCommentForm(){
    //     // const comment = document.getElementById(this.commentContainer)
    //     // const = createComment()
    //     const comment = document.getElementById('comments-container')
    //     comment.innerHTML += this.createComment()
    //   }

    createComment() {
        const form = document.createElement("form")
        const textBox = document.createElement("input")
        const submit = document.createElement("input")


        form.append(textBox, submit)


        this.parentElement.appendChild(form) 
        console.log(form)
        // grab correct post here 

        // append form to that post once clicked

    }

    
 }