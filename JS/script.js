
// SAMPLE LEADERBOARD DATA

const teams = [
    {
        name: "Africa Warriors",
        total: 8500000,
        average: 8500
    },
    {
        name: "Global Striders",
        total: 5200000,
        average: 13000
    },
    {
        name: "Night Runners",
        total: 3100000,
        average: 15500
    },
    {
        name: "World Walkers",
        total: 2800000,
        average: 7000
    }
];


// DISPLAY LEADERBOARD

function displayLeaderboard(mode) {

    const rankingList = document.getElementById("rankingList");

    // Sort teams based on selected ranking
    const sortedTeams = [...teams].sort((a, b) => {
        return b[mode] - a[mode];
    });

    rankingList.innerHTML = "";

    sortedTeams.forEach((team, index) => {

        const score = team[mode].toLocaleString();

        const row = document.createElement("div");

        row.className = "ranking-row";

        row.innerHTML = `
            <div>
                <span class="ranking-position">
                    #${index + 1}
                </span>
                ${team.name}
            </div>

            <span class="ranking-score">
                ${score}
            </span>
        `;

        rankingList.appendChild(row);

    });
}


// LEADERBOARD TAB BUTTONS

const tabButtons = document.querySelectorAll(
    ".ranking-tabs button"
);

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        tabButtons.forEach(tab => {
            tab.classList.remove("active");
        });

        // Activate selected button
        button.classList.add("active");

        // Display selected ranking
        displayLeaderboard(button.dataset.mode);

    });

});


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// LOAD INITIAL LEADERBOARD

displayLeaderboard("total");
