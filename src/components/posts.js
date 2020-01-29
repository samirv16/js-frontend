class Posts {
    constructor() {
        this.posts = []
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
        this.postsContainer.addEventListener('dblclick', this.handlePostClick.bind(this))
    }

    handlePostClick(e) {
        const li =  e.target
        li.contentEditable = true
    }

    createPost(e) {
        e.preventDefault()
        const value = this.newPostItem1.value
        const value1 = this.newPostItem2.value

        this.adapter.createPost(value, value1).then(post => {
            this.posts.push(new Post(post))
            // this.newPostBody.value = ""
            // this.newPostBody.value1 = ""
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
    }
}