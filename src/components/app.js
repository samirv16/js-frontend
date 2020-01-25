//app which we are creating a new instance of in index.js
class App {
    constructor() {
        console.log('app loaded')
        this.teams = new Teams()
    }
}