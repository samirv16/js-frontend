class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.item1 = postJSON.item1
        this.item2 = postJSON.item2
    }

    renderLi() {
        return `<li><h4>What I Want:</h4> ${post.item1} <h4>What I'm Offering:</h4> ${post.item2}</li>`
    }
}