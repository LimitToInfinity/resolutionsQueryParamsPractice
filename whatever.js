const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("id", id);

fetch(`http://localhost:3000/resolutions/${id}`)
    .then(response => response.json())
    .then(resolution => {
        // create
        const title = document.createElement("h2");
        // do sumfin/modify
        title.textContent = resolution.title;
        // append
        document.body.append(title);

        resolution.goals.map(goal => {
            const difficulty = document.createElement("p");
            difficulty.textContent = goal.difficulty;
            document.body.append(difficulty);
        })
    })