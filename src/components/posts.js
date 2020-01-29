class Posts {
    constructor() {
        this.posts = []
        // this.comments = []
        this.adapter = new PostsAdapter()
        this.initbindEventListeners()
        this.fetchAndLoadPosts()
    }

    initbindEventListeners() {
        this.postsContainer = document.getElementById("posts-container")
        this.newPostItem1 = document.getElementById('new-post-item1')
        this.newPostItem2 = document.getElementById('new-post-item2')
        this.postForm = document.getElementById('new-post-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
    }

    createPost(e) {
        e.preventDefault()
        const value = this.newPostItem1.value
        const value1 = this.newPostItem2.value

        this.adapter.createPost(value, value1).then(post => {
            this.posts.push(new Post(post))
            this.newPostItem1.value = ""
            this.newPostItem2.value = ""
            this.render()
        })
    }

    fetchAndLoadPosts() {
        this.adapter
        .getPosts()
        .then(posts => {
            posts.forEach(post => this.posts.push(new Post(post))) //iterating through teams and pushed them into this.teams, now i have access to the teams in all the dif methods
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')

        this.commentButton = document.querySelectorAll("#commentBtn")
        this.commentButton.forEach((button) => {
            button.addEventListener('click', this.setComments.bind(this, button), {once: true})
            button.addEventListener('click', this.createCommentForm.bind(this, button), {once: true})
        })
    }
    
    setComments(ele) {
        const post =  this.posts.find((post) => {
            // debugger
            return post.id === parseInt(ele.dataset.id)
        })     
        this.displayComments(post)
   }

   displayComments(post) {  
    const commentButton = document.querySelector(".cmt-btn")
    const li = document.createElement("li")  
    li.innerHTML = ""
    post.comments.forEach((comment) => {
        const content = document.createElement("p")
        content.classList = `comment ${comment.id}`
        content.textContent = `comment: ${comment.content}`
        li.appendChild(content) 
      })
      
    commentButton.appendChild(li)
   }



    createCommentForm(ele) {
        const form = document.createElement("form")
        const textBox = document.createElement("input")
        const submit = document.createElement("button")
        
        submit.textContent = "Submit"
        submit.classList.add("btn", "btn-primary", "comment-submit")

        textBox.name = "commentContent"
        textBox.setAttribute("type", "text")
        textBox.placeholder = `Enter a comment:`
        textBox.classList.add("form-control", "comment-input")

        form.setAttribute("data-id", ele.dataset.id)
        
        form.append(textBox, submit)
        ele.parentElement.appendChild(form) 
        form.addEventListener('submit', (e) => {
        e.preventDefault()
            
        this.postComment(e)
       })
   }
   
   postComment(e) {
       console.log(e.target)
        const content =  e.target.elements.commentContent.value
        const postId = e.target.dataset.id
        const post = this.posts.find((post) =>  post.id === parseInt(postId))
        if(content.trim().length > 0) {
            this.adapter.createComment(content, postId)
            .then( comment => {
                post.comments.push(new Comment(comment))
                    this.render()
                })
                .catch(err => {
                    alert(err.status)

                })
        } else {
            alert("Post not long enough!")
        }
    }
}