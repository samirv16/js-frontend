// adapters talk to the back end api...sole purpose is to connect api to front en
// whenever the adapter is instantiated, it will set a base url then gives us the ability to call
// getTeams which makes a fetch request
class PostsAdapter {
    constructor() {
        this.baseUrl = 
        'http://localhost:3000/posts'
    }

    getPosts() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}


