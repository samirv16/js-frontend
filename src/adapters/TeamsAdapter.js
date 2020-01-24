// adapters talk to the back end api

class TeamsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/teams'
    }

    getTeams() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}