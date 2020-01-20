Hello you have made it to my application

index > app > posts > post 

before we get into it here is a link to the other side of this coin 
: https://github.com/averagealloy/deaddit_api


    Adapters
        PostsAdapter
             - in the postsdapter file is where the AJAX calls live. also this is where the base URL 
               is set saying "make your requests here" 
               Here in the front end is where it communicates with with the server.
               it makes request and gets returned reponses. Here is also where the promises are 
               answered.   

    components 

        app.js
            - in the app.js file its setting this.post to a new post 

        post.js
            - in this file its creating a post and saying a post has and id, title and content.
            then its its saying render every post like this( this being the posts id followed by the posts title a ':' and then the posts content)

        posts.js
            - this is where the meat and potatoes of the   application lives plus instruction of what   to do when somthing happens. here it sets this.post to an empty array so that new posts can go in there. then it strings up the adapter so that a users new post can live in the data base with thoes AJAX calls.
            then it calls 2 functions that we will go into in a minute 1. this.initbindingsAndEventListeners() 
            and 
            2. this.fetchAndLoadPosts()

                -this.initbindingsAndEventListeners()
                    this function does two things it gets the elements from the dom and then adds event listeners to specfic actions like 'submit' 'dblclick' and 'blur'
                
                -this.fetchAndLoadPosts()
                    this function goes to the adapter and retrives the posts with AJAX and then responds with a JSON response

            
                - the rest of this file has methods for    
                creating, updating, editing and          
                rendering the post in the dom element    
                that I want to be in.

    index.js  
        -this file instances a new instance of app


    styles
        stlyes.css
            - this file has the css to try to make my      
              project look better and add that             
              .edditable attribute 


    index.html
        -this file sets some ground rules for the application page like what language it going to be in and what characterset im using. after that I set up a container and in that container I have a form that a user can put in a title and a peice of content. after a user does that they can submit there post. the next container that I have is for the post that have already been created. that container is just where they live.
        the final bit to this controller is the script tags I had struggled with this fpr a little bit and had to play musical script tag for a little bit to get it down.




