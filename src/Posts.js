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
        //this.postsContainer.addEventListener('dblclick', this.editPost.bind(this))
        //this.postsContainer.addEventListener('blur', this.updatePost.bind(this), true)
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
    // editPost(e){
    //     this.togglePost(e)
        
    //    }
       
    //    togglePost(e) {
    //        const li = e.target
    //        li.contentEditable = true
    //        li.focus()
    //        li.classList.add('editable')
    //        this.updatePost(e)
    //    }

    //    updatePost(e) {
        // idk what they were trying to do, convert text to input fields, update on a change/ offFocus event.
    //     const dataHTML = e.target
    //     dataHTML.contentEditable = false 
    //     dataHTML.classList.remove('editable')
    //     const updatedData = dataHTML.innerHTML
    //     const id = dataHTML.dataset.id
    //     console.log("BANANAS")


    //     //this.adapter.updatePost(updatedData, id)   
    //    }

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
            button.addEventListener('click', this.setComments.bind(this, button), {once: true})
            button.addEventListener('click', this.createCommentForm.bind(this, button), {once: true})
        })
       //  this.commentButton.addEventListener('click', this.createComment)
       
    //    const postList = document.querySelectorAll(".post")
    //    postList.forEach((post) => {
    //        post.addEventListener('dblclick', this.editPost.bind(this))
    //        //post.addEventListener('change', this.updatePost.bind(this))
    //    })
    }
   //  post end

   // comments begin 



   setComments(ele) {
    const post =  this.posts.find((post) => {
        return post.id === parseInt(ele.dataset.id)
    })     
    this.displayComments(post)
   }

   displayComments(post) {
    // const postEle = document.querySelector(".post")
    const postEle = document.querySelector(`.post-${post.id}`)
    const div = document.createElement("div") // creating a div so that the comments can live in 
    // for each comment 
    div.innerHTML = ""
    post.comments.forEach((comment) => {
        const content = document.createElement("p")
        content.classList = `comment ${comment.id}`
        content.textContent = `comment: ${comment.content}`
        div.appendChild(content) 
      })
      //div.innerHTML = ""
      postEle.appendChild(div)
   }



    createCommentForm(ele) {
        const form = document.createElement("form")
        const textBox = document.createElement("input")
        const submit = document.createElement("button")
        
        submit.textContent = "Submit"
        textBox.name = "commentContent"
        textBox.setAttribute("type", "text")
        form.setAttribute("data-id", ele.dataset.id)
        
        form.append(textBox, submit)
        ele.parentElement.appendChild(form) 
       form.addEventListener('submit', (e) => {
        e.preventDefault()
        //form.remove()
        this.postComment(e)
       })
   }

   postComment(e) {
    const content =  e.target.elements.commentContent.value
    const postId = e.target.dataset.id
    const post = this.posts.find((post) =>  post.id === parseInt(postId))
    this.adapter.createComment(content, postId).then( comment => {
        post.comments.push(new Comment(comment))
         this.render()
     })
   }
   
}



