class MemoryGame {
    constructor(){
        this._lives = 10;
        this._lifeBarArr = [
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`,
            `<i class="fas fa-heart"></i>`
        ];
    }

    get lives() {
        return this._lives;
    }

    loseLife() {
        this._lives--;
        if (this._lives > 0) {
            this.displayLife(-1);
        }
        else {
            gameOver();
        }
    }

    displayLife(lostLife) {
        if (lostLife) {
            this._lifeBarArr.pop();
        }
        var lifeBarContainer = document.querySelector("#hearts");
        var lifeBarStr = this._lifeBarArr.join("");
        lifeBarContainer.innerHTML = lifeBarStr;
    }

    shuffle() {
        var iconArr = [
            `<i class="far fa-angry hidden"><span>a</span></i>`,
            `<i class="far fa-angry hidden"><span>a</span></i>`,
            `<i class="fas fa-battery-empty hidden"><span>b</span></i>`,
            `<i class="fas fa-battery-empty hidden"><span>b</span></i>`,
            `<i class="fas fa-atom hidden"><span>c</span></i>`,
            `<i class="fas fa-atom hidden"><span>c</span></i>`,
            `<i class="far fa-bell hidden"><span>d</span></i>`,
            `<i class="far fa-bell hidden"><span>d</span></i>`,
            `<i class="fas fa-bacon hidden"><span>e</span></i>`,
            `<i class="fas fa-bacon hidden"><span>e</span></i>`,
            `<i class="fab fa-battle-net hidden"><span>f</span></i>`,
            `<i class="fab fa-battle-net hidden"><span>f</span></i>`,
            `<i class="fas fa-car hidden"><span>g</span></i>`,
            `<i class="fas fa-car hidden"><span>g</span></i>`,
            `<i class="fas fa-cannabis hidden"><span>h</span></i>`,
            `<i class="fas fa-cannabis hidden"><span>h</span></i>`,
            `<i class="fas fa-child hidden"><span>i</span></i>`,
            `<i class="fas fa-child hidden"><span>i</span></i>`
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

    checkMatch(selection1, selection2) {

        if (selection1[0].innerHTML === selection2[0].innerHTML) {
            selection1.removeClass("selected");
            selection1.addClass("matched");
            selection2.removeClass("selected");
            selection2.addClass("matched");
        }
        else {
            this.loseLife();
            selection1.removeClass("selected");
            selection2.removeClass("selected");
            setTimeout(() => {   
                selection1.addClass("hidden");
                selection2.addClass("hidden");
            }, 500);
        }

        

    }

}