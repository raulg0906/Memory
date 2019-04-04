class MemoryGame {
    constructor(){
        this._lives = 10;
    }

    get lives() {
        return this._lives;
    }

    shuffle(){
        var iconArr = [
            `<i class="hidden far fa-angry"></i>`,
            `<i class="hidden far fa-angry"></i>`,
            `<i class="hidden fas fa-battery-empty"></i>`,
            `<i class="hidden fas fa-battery-empty"></i>`,
            `<i class="hidden fas fa-atom"></i>`,
            `<i class="hidden fas fa-atom"></i>`,
            `<i class="hidden far fa-bell"></i>`,
            `<i class="hidden far fa-bell"></i>`,
            `<i class="hidden fas fa-bacon"></i>`,
            `<i class="hidden fas fa-bacon"></i>`,
            `<i class="hidden fab fa-battle-net"></i>`,
            `<i class="hidden fab fa-battle-net"></i>`,
            `<i class="hidden fas fa-car"></i>`,
            `<i class="hidden fas fa-car"></i>`,
            `<i class="hidden fas fa-cannabis"></i>`,
            `<i class="hidden fas fa-cannabis"></i>`,
            `<i class="hidden fas fa-child"></i>`,
            `<i class="hidden fas fa-child"></i>`
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