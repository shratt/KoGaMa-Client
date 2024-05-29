(async function () { 
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.get('gameID')) {
        let rawGameData = await fetch(`https://www.kogama.com/game/category/popular/?page=1&count=24`).then(r=>r.text())
        window.gameData = JSON.parse(rawGameData).data;

        let gamesHolder = document.createElement("div");
        gamesHolder.style.overflowY = "auto";
        gamesHolder.style.display = "flex";

        gameData.forEach(game => {
            let holder = document.createElement("div");
            holder.style.padding = "10px 10px 10px 10px";
            holder.addEventListener("click", function () {
                location.href = '?gameID=' + game.id;
            })

            let nameElem = document.createElement("p");
            nameElem.innerText = game.name;
            holder.appendChild(nameElem);

            let imgElem = document.createElement("img");
            imgElem.src = game.image_medium;
            holder.appendChild(imgElem);

            gamesHolder.appendChild(holder);
        });

        document.body.appendChild(gamesHolder);
    }
})()