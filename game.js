class MemoryGame {
    constructor(){
        this._lives = 10;
    }

    get lives() {
        return this._lives;
    }

    shuffle(){
        var iconArr = [
            `<i class="far fa-angry"></i>`,
            `<i class="far fa-angry"></i>`,
            `<i class="fas fa-battery-empty"></i>`,
            `<i class="fas fa-battery-empty"></i>`,
            `<i class="fas fa-atom"></i>`,
            `<i class="fas fa-atom"></i>`,
            `<i class="far fa-bell"></i>`,
            `<i class="far fa-bell"></i>`,
            `<i class="fas fa-bacon"></i>`,
            `<i class="fas fa-bacon"></i>`,
            `<i class="fab fa-battle-net"></i>`,
            `<i class="fab fa-battle-net"></i>`,
            `<i class="fas fa-car"></i>`,
            `<i class="fas fa-car"></i>`,
            `<i class="fas fa-cannabis"></i>`,
            `<i class="fas fa-cannabis"></i>`,
            `<i class="fas fa-child"></i>`,
            `<i class="fas fa-child"></i>`
        ];
        var iconArrLength = iconArr.length;
        var gameTilesString = '';
        for (var i = 0; i < iconArrLength; i++) {
            var icon = iconArr.splice(Math.floor(Math.random()*iconArr.length), 1)
            gameTilesString = gameTilesString + `
            <div class="gametile">
                ${icon}    
            </div>
            `
        }
    
        var gameBoardContainer = document.querySelector("#gameboard");
        gameBoardContainer.innerHTML = gameTilesString;
    }
}