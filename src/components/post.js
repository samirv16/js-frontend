class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.item1 = postJSON.item1
        this.item2 = postJSON.item2
        this.comments = postJSON.comments.map((comment) => {
            return new Comment(comment)
        })
    }

    renderLi() {
        return `<li><h4>What I Want:</h4> ${this.item1} <h4>What I'm Offering:</h4> ${this.item2} </br>
        <button class="create cmt-btn" data-id=${this.id} id="commentBtn">Comment: </button></li>`
        
    }
}