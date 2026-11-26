
// =====================================
// WALKTHEWORLD - TEAM MANAGEMENT
// =====================================


// 1. SAMPLE TEAMS

const sampleTeams = [
    {
        id: 1,
        name: "Africa Warriors",
        description: "Bringing African walkers together.",
        visibility: "public",
        members: 125
    },

    {
        id: 2,
        name: "Global Striders",
        description: "A worldwide community of runners.",
        visibility: "public",
        members: 80
    },

    {
        id: 3,
        name: "Night Runners",
        description: "For those who love evening runs.",
        visibility: "private",
        members: 45
    }
];


// 2. LOAD SAVED TEAMS

let teams = JSON.parse(
    localStorage.getItem("walkTeams")
) || sampleTeams;


// 3. LOAD JOINED TEAMS

let joinedTeams = JSON.parse(
    localStorage.getItem("joinedTeams")
) || [];


// 4. SAVE TEAMS

function saveTeams() {

    localStorage.setItem(
        "walkTeams",
        JSON.stringify(teams)
    );

}


// 5. SAVE MEMBERSHIPS

function saveMemberships() {

    localStorage.setItem(
        "joinedTeams",
        JSON.stringify(joinedTeams)
    );

}


// 6. DISPLAY TEAMS

function displayTeams(searchText = "") {

    const teamList = document.getElementById("teamList");

    const teamCount = document.getElementById("teamCount");

    const emptyMessage = document.getElementById("emptyMessage");

    // Clear previous team cards
    teamList.innerHTML = "";

    // Filter teams using their names
    const filteredTeams = teams.filter(team => {

        return team.name.toLowerCase().includes(
            searchText.toLowerCase()
        );

    });

    // Update team count
    teamCount.textContent = `${filteredTeams.length} teams`;

    // Display message if no teams exist
    emptyMessage.hidden = filteredTeams.length !== 0;


    // Create a card for every team
    filteredTeams.forEach(team => {

        const hasJoined = joinedTeams.includes(team.id);

        const card = document.createElement("div");

        card.className = "team-card";

        const visibilityLabel =
            team.visibility === "public" ? "Public" : "Private";

        card.innerHTML = `
            <span class="team-visibility ${team.visibility}">
                ${visibilityLabel}
            </span>

            <h3>${team.name}</h3>

            <p>${team.description}</p>

            <div class="team-meta">
                <span>${team.members} members</span>
                <span>Walk + Run</span>
            </div>

            <button
                class="btn join-team"
                data-team-id="${team.id}"
                ${hasJoined || team.visibility === "private" ? "disabled" : ""}
            >
                ${
                    hasJoined
                    ? "Joined"
                    : team.visibility === "private"
                    ? "Invitation required"
                    : "Join team"
                }
            </button>
        `;

        teamList.appendChild(card);

    });

}


// 7. CREATE TEAM FORM

const createTeamBtn = document.getElementById("createTeamBtn");

const createTeamForm = document.getElementById("createTeamForm");

const cancelCreate = document.getElementById("cancelCreate");


createTeamBtn.addEventListener("click", () => {

    createTeamForm.hidden = false;

});


cancelCreate.addEventListener("click", () => {

    createTeamForm.reset();

    createTeamForm.hidden = true;

});


// 8. SUBMIT NEW TEAM

createTeamForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("teamName").value.trim();

    const description = document.getElementById("teamDescription").value.trim();

    const visibility = document.getElementById("teamVisibility").value;


    // Prevent empty team names
    if (!name) {

        alert("Please enter a team name.");

        return;

    }


    // Create a new team object
    const newTeam = {

        id: Date.now(),

        name: name,

        description: description || "A new WalkTheWorld community.",

        visibility: visibility,

        members: 1

    };


    // Add the new team
    teams.unshift(newTeam);


    // The creator automatically joins
    joinedTeams.push(newTeam.id);


    // Save information
    saveTeams();

    saveMemberships();


    // Refresh team display
    displayTeams(
        document.getElementById("searchTeams").value
    );


    // Reset and close form
    createTeamForm.reset();

    createTeamForm.hidden = true;


    alert("Your team has been created!");

});


// 9. JOIN A PUBLIC TEAM

document.getElementById("teamList").addEventListener("click", event => {

    const button = event.target.closest(".join-team");

    if (!button) return;

    const teamId = Number(button.dataset.teamId);

    const selectedTeam = teams.find(team => team.id === teamId);


    // Check whether team exists
    if (!selectedTeam) return;


    // Only public teams can be joined directly
    if (selectedTeam.visibility !== "public") {

        alert("This team requires an invitation.");

        return;

    }


    // Prevent joining twice
    if (joinedTeams.includes(teamId)) return;


    joinedTeams.push(teamId);

    selectedTeam.members++;


    // Save updated information
    saveTeams();

    saveMemberships();


    // Refresh the page content
    displayTeams(
        document.getElementById("searchTeams").value
    );

});


// 10. SEARCH TEAMS

const searchTeams = document.getElementById("searchTeams");

searchTeams.addEventListener("input", () => {

    displayTeams(searchTeams.value);

});


// 11. INITIAL DISPLAY

displayTeams();
