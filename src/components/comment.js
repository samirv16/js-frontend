class Comment {
    constructor(commentJSON){
        this.id = commentJSON.id
        this.content = commentJSON.body
        this.postId = commentJSON.post_id
    }

}