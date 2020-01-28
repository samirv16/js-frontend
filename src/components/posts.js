class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadPosts()
    }

    fetchAndLoadPosts() {
        this.adapter
        .getPosts()
        .then(posts => {
            posts.forEach(post => this.posts.push(post)) //iterating through teams and pushed them into this.teams, now i have access to the teams in all the dif methods
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const postsContainer = document.getElementById("posts-container")
        postsContainer.innerHTML = 'my posts here'
    }
}