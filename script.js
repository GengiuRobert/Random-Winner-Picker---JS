const enrollButton = document.getElementById("enroll");
const winningPercentage = document.getElementById("winningPercentage");
const inputContestant = document.getElementById("person-data");
const totalParticipants = document.getElementById("totalParticipants");
const minimumParticipants = document.getElementById("minimumParticipants");
const winnerButton = document.getElementById("pickWinner");
const winnerIs = document.getElementById("winnerName");
const participantsDiv = document.getElementById("participantsDiv");
let contestantIndex = 1;
let contestants = [];

function randomNumberGenerator(maxValue) {
    return Math.floor(Math.random() * maxValue + 1);
}

function Contestant(name) {
    this.name = name;
    this.index = contestantIndex;
    contestantIndex++;
}

enrollButton.addEventListener("click", () => {
    if (inputContestant.value === "") {
        window.alert("Input MUST be completed to enroll a person!");
    }
    else {
        let contestantName = inputContestant.value;
        let constestant = new Contestant(contestantName);
        contestants.push(constestant);

        let participantRep = document.createElement("p");
        participantRep.textContent = constestant.index + " -> " + constestant.name;
        participantRep.classList.add("contestant");
        participantsDiv.appendChild(participantRep);

        totalParticipants.textContent = "Total participants: " + contestants.length;
        if (contestants.length >= 3) {
            minimumParticipants.textContent = "Participant quota fulfilled";
            let winning = (1 / contestants.length);
            winning = (parseFloat(winning) * 100).toFixed(2);
            winningPercentage.textContent = "Winning rate:" + winning + "%";

            winnerButton.addEventListener("click", () => {
                let winnerId = randomNumberGenerator(contestants.length);
                let winnerName = "";
                for (const winner of contestants) {
                    if (winner.index === winnerId) {
                        winnerName = winner.name;
                        break;
                    }
                }
                winnerIs.textContent = "Winner is: " + winnerName + " with id=" + winnerId;
            });
        }
    }
});