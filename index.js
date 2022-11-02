"use strict";

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
];

window.onload = function () {

    const footballTeams = document.getElementById("FootballTeams");

    for (let i = 0; i < teams.length; i++) {

        let option = document.createElement("option");
        option.text = teams[i].name;
        option.value = teams[i].code;

        footballTeams.appendChild(option);
        console.log(option[1]);
    }

    document.getElementById("selectBtn").onclick = function () {
        for (let i = 0; i < footballTeams.length; i++) {
            if (footballTeams.value == footballTeams[i].value) {
                document.getElementById("paraField").innerHTML = `text: ${footballTeams[i].text} value: %{}`;
            }
        }
    }
}