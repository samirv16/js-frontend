class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.initbindEventListeners()
        this.fetchAndLoadPosts()
    }

    initbindEventListeners() {
        this.postsContainer = document.getElementById("posts-container")
        this.postForm = document.getElementById('new-post-form')
        this.postForm.addEventListener('submit', this.createPost)
    }

    createPost(e) {
        e.preventDefault()
        console.log('post is being created')
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
    }
}