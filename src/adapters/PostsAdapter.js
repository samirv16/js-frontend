// adapters talk to the back end api...sole purpose is to connect api to front en
// whenever the adapter is instantiated, it will set a base url then gives us the ability to call
// getTeams which makes a fetch request
class PostsAdapter {
    constructor() {
        this.baseUrl = 
        'http://localhost:3000'
    }

    getPosts() {
        return fetch(`${this.baseUrl}/posts`).then(res => res.json()
        )
    }

    createPost(value, value1) {
        const post = {
            item1: value,
            item2: value1,
        }
        return fetch(`${this.baseUrl}/posts`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(post),
        }).then(res => res.json())
    }

    createComment(content, postId){
        const comment = {
            body: content,
            post_id: postId
        }
        
        return fetch(`${this.baseUrl}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => {
            // catch(looking for a status that is out side the range of 200(199-299))/ or use res.ok
            //  throw show a string that says "hey something wrong please fix it" + res 
            if (!res.ok){
                throw res
            }
            return res.json()
        })
    }
}


