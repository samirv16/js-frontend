class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.initbindEventListeners()
        this.fetchAndLoadPosts()
    }

    initbindEventListeners() {
        this.postsContainer = document.getElementById("posts-container")
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
        this.postsContainer.innerHTML = this.posts.map(post => `<li><h4>What I Want:</h4> ${post.item1} <h4>What I'm Offering:</h4> ${post.item2}</li>`).join('')
    }
}