Hello you have made it to my application

index > app > posts > post 

before we get into it here is a link to the other side of this coin 
: https://github.com/averagealloy/deaddit_api

    *** alright this is the third verson of the program 1.not great 2. a little better 
    3. (and most recent) better archhitecturally and fixed the file structure it was a bit nonsencical prior.
    (hard to find things and even harder to explain) in the most receant version I had also caught the bug for styling using boot strap.

    src 
        bootstrap.js 
            - the bootstrap file allows the program to know what version of bootsrap I am using and alot of the starting code to use it properly 
                
        Comment.js
            -the comment file lets the program know that we want the id, post id, and the comment to equal the JSON object of thoes specfic attributes 

        jQuery.js 
            - the jQuery file just lets the program know what version of jQuerry that we are using and alot of the starting code to use it properly 

        Post.js 
            the post file contains what we had see similarly to the comment file. letting us know what we want the title, content, comments and Id to be in JSON objects. this file also contains a function called renderPostList. this function displays the post the way I want it to be with all of it proper buttons and the post themselves 

        Posts.js this is the real meat and potato's of the application. I am going to break this down function by function.
            class Post. 
                this is where all of the other functions live to effectively communicate with what is on the front end to the backend

            initBindingsAndEventListeners.
                here is where I am getting the elements of what is going on the frontend. so for instance I wanted to get the specfic instance of what is going on where the post live(post container). plsu 1 eventListner to listen for when the submit buttion is clicked when creating a new post 

            createPost.
                creat post passes in the aqugment of e or the event in this case it creates a post. then it sets 2 varibles with the constant key work for title and content.
                it get the instance of value for title and constant. Then ther is an if statment saying removing the fluff or the White space for title and content is there length greater than zero( basiclly making sure that there is something in those 2 fields) if both thoes conditions are met then create a post using the adapter and with the 2 values of that post then resolve the promise saying push the post into the posts array I had set up top. after that render the post. If the conditions are not met then show an alert of "Post not long enough!"
            
            fetchAndLoadPosts.
                in here we go to the adapter and running get post which goes to the rails api and retrives all post. this resolves with the then keyword which has an arrow function which takes every post and puts it into the post array. after that another promsie is resolved and call back function is called using the render.

            render.
                

