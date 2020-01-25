class Teams {
    constructor() {
        this.teams = []
        this.adapter = new TeamsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadTeams()
    }

    fetchAndLoadTeams() {
        this.adapter.getTeams().then(teams => {
            return console.log(teams)
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const teamsContainer = document.getElementById("teams-container")
        teamsContainer.innerHTML = 'my teams here'
    }
}