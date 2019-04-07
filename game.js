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
        this._matches = 0;
    }

    get lives() {
        return this._lives;
    }

    successfulMatch() {
        this._matches++;
    }

    loseLife() {
        this._lives--;
        if (this._lives > 0) {
            this.displayLife(-1);
        }
        else {
            this.gameOver();
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

    /* gameOver() {
        if (confirm("You lose!  Try again?")) {
            location.reload();
        }
    }

    gameWin() {
        if (confirm("You won!  Play again?")) {
            location.reload();
        }
    } */

    gameOver() {
        var loseContainer = document.querySelector("#root");
        loseContainer.innerHTML = `
            <div id='youlose'>
                <h2>YOU LOSE</h2>
                <div id="tryagain">
                    <a>TRY AGAIN</a>
                </div>
            </div>
        `

        $("#tryagain").on("click", function(){
            location.reload();
        })
    }

    gameWin() {
        var winContainer = document.querySelector("#root");
        winContainer.innerHTML = `
            <div id='youwin'>
                <h2>YOU WIN</h2>
                <div id="playagain">
                    <a href="index.html">PLAY AGAIN</a>
                </div>
            </div>
        `

        $("#playagain").on("click", function(){
            location.reload();
        })

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
            this.successfulMatch();
            selection1.removeClass("selected");
            selection1.addClass("matched");
            selection2.removeClass("selected");
            selection2.addClass("matched");
            var audio = new Audio("./assets/correct.wav")
            audio.play()
        }
        else {
            this.loseLife();
            selection1.removeClass("selected");
            selection2.removeClass("selected");
            setTimeout(() => {   
                selection1.addClass("hidden");
                selection2.addClass("hidden");
            }, 500);
            var audio = new Audio("./assets/Wrong-answer-sound-effect.mp3")
            audio.play()

        }

        this.checkWin();

    }

    checkWin() {
        if (this._matches === 9) {
            this.gameWin();
        }
    }

}