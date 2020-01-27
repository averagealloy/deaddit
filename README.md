Hello you have made it to my application

index > app > posts > post 

before we get into it here is a link to the other side of this coin 
: https://github.com/averagealloy/deaddit_api

    *** Alright this is the third version of the program  ******
    1.not great 
    2. a little better 
    3. (and most recent) better archhitecturally and fixed the file structure it was a bit nonsensical prior.
    
        (hard to find things and even harder to explain) In the most recent version I had also caught the bug for styling using boot strap.

    src 
        bootstrap.js 
            The bootstrap file allows the program to know what version of bootsrap I am using and alot of the starting code to use it properly. 
                
        Comment.js
            The comment file lets the program know that I want the id, post id, and the comment to equal the JSON object of thoes specfic attributes. 

        jQuery.js 
             The jQuery file just lets the program know what version of jQuerry that I am using and alot of the starting code to use it properly. 

        Post.js 
            The post file contains what we had see similarly to the comment file. Letting us know what we want the title, content, comments and Id to be in JSON objects. This file also contains a function called renderPostList. This function displays the post the way I want it to be with all of it proper buttons and the posts themselves. 

        Posts.js 
                This is the real meat and potato's of the application. I am going to break this down function by function.
            class Post. 
                This is where all of the other functions live to effectively communicate with what is on the front end to the backend.

            initBindingsAndEventListeners.
                Here is where I am getting the elements of what is going on the frontend. So for instance I wanted to get the specfic instance of what is going on where the post live(post container). Plus 1 eventListner to listen for when the submit buttion is clicked when creating a new post. 

            createPost.
                Create post passes in the param of e or the event in this case it creates a post. Then it sets 2 varibles with the constant key work for title and content.
                It gets the instance of value for title and constant. Then ther is an if statment saying removing the fluff or the White space for title and content is there length greater than zero( basiclly making sure that there is something in those 2 fields) if both thoes conditions are met then create a post using the adapter and with the 2 values of that post then resolve the promise saying push the post into the posts array I had set up top. After that render the post. If the conditions are not met then show an alert of "Post not long enough!".
            
            fetchAndLoadPosts.
                In here we go to the adapter and running get post which goes to the rails api and retrives all post. This resolves with the then keyword which has an arrow function which takes every post and puts it into the post array. After that another promsie is resolved an a anonymous function is called using the render.

            render.
                Inside of render we set the instance of whatever is inside of the post container and maping over it inside of the post arrow function we are returning post with the render post list function on it. After that we want all of the comments buttons and getting them using querySelectorAll. After I have all of the comment buttons we are saying for each one of thoes comment buttons add 2 event listeners one to set the comments and another to create a comment. In both cases we want that specfic button that the user had clicked on so we bind this. Then we only want to set the comments and the form tp create that comment once so thats why once is true for both.

            setcomments. 
                Set comments takes in a paramiter of the
                element. Then it sets post using const. Post is set equal to this.post.find pasing in post to an arrow function. Inside that arrow function its checking if the post.id matches the element's id. The element id was a string so parseint was needed. After that the function display comments is called to show the posts comments.

            displayComments. 
                In this file I am using another Queryselector to get the post with the ID that I need and setting it to a varible of postEle using const.
                Then creating a div element assigning it to div. With dive I want the comments inside the quotes. After that I am saying for each posts comment create a paragraph tag for that comment. After
                that I adding the comment id to the comment and interpolationg the content in a string. After that we are taking the post element and appending it to the div that we had created prior.

            creatCommentForm.
                In here Im setting three varibles with const form, textBox and submit.
                Then I am just adding the word submit to the button itself. After that I am adding namespaces to the class list.
                Then I am setting a name and an attribute to the textbox. Then place holeder text so a user know what to do when they see that form. I am doing the same thing that I had done with submit with the textbox. After that Im setting the data id to the element id. Then I am appending textbox and submit to the form aswell as the the elements parent element. There is an eventListner for the submit (when a user submits a comment)  it just prevents the default refresh then posts the comment on the refresh.

            postComment.
                In this function it sets 3 varibles using const(content, postID, post). Content gets what the user puts in that text box. ID gets the id of that post and post just makes sure that the ID's of both parties( postId and post.id) match up using the strict comparsion operator. After that I am checking if there is anything in the textbox itself. If there is I am pushing the post comments in to the post array then calling render. If not then there is an alert saying "Post not long enough!"

        requests.js
            This file sets up functions to posts information to and get information from the server(rails api). This is only like this for now I do plan on building out more functionallity going forward.
                -has a class and sets the base url to 'http://localhost:3000'

                -getPosts
                    Makes a fetch call to the api making a promise then resolving a promise with a function returning a JSON object. 

                -createPost
                    Create post takes in two parameters title and content then it creates an object called posts which contains both of thoes two parameters. Then it makes a fetch call to the base url plus where I want it (/api/num1/posts). After that its just saying hey when you make this call I expect this to get and return. Then the promise is resolved and returns a JSON object. 

                -createComment
                    Again passing in 2 aruments content and postID a comment object is created. the_comment is content 
                    and the postid is post id.
                    After that it returns a fetch call with the specified url (/api/num1/comments`) its shows the method that we want to use so in this case and just like the last one it is Post. The header lets the server know what to expect and what its going to receive. Then the promise is resolved and  returns the JSON object. 

        app.css & bootstrap.css
                Im am using css and bootstrap to make my project look a little better. My prior projects didnt look this good and I had checked out some videos online about styling. 

        index.html 
            This file gives instruction and format the the web page itself. Also with the script tag it gives access to other files in my project.

        index.js
            This file just instantiates a new instance of the application.
