class Teams {
    constructor() {
        this.teams = []
        this.adapter = new TeamsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadTeams()
    }

    fetchAndLoadTeams() {
        this.adapter
        .getTeams()
        .then(teams => {
            teams.forEach(team => this.teams.push(team)) //iterating through teams and pushed them into this.teams, now i have access to the teams in all the dif methods
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