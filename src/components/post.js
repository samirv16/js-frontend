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
        // return `<li class="container"> <h4>What I Want:</h4> ${this.item1} <h4>What I'm Offering:</h4> ${this.item2} </br>
        // <button class="create cmt-btn" data-id=${this.id} id="commentBtn">Comment: </button></li>` 
        return `
            <div class="text-center">
                    <div class="container mb-1" data-id="${this.id}">
                        <div class="card-body">
                        <h4>What I Want:</h4> ${this.item1}
                        </div>
                        <div class="card-text">
                        <h4>What I'm Offering:</h4> ${this.item2}
                        </div>
                        <div class="interactive-comments post-${this.id}"> 
                        <button class="create cmt-btn" data-id=${this.id} id="commentBtn">Comment: </button>
                        </div>
                    </div>
            </div>
            `
    }
}