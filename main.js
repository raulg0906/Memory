$(document).ready(function(){

    var game = new MemoryGame;
    game.displayLife();
    game.shuffle();

    var selection1;
    var selection2;

    $("#gameboard").on('click', '.gametile', function(){

        var content =$(this).children('i')

        if (!(selection1)) {

            selection1 = content;
            if (selection1.hasClass("selected") || selection1.hasClass("matched")) {
                selection1 = false;
            }
            else {
                cardCheck(selection1);
            }

        } else {

            selection2 = content;
            if (selection2.hasClass("selected") || selection2.hasClass("matched")) {
                selection2 = false;
            }
            else {
                cardCheck(selection2);
            }

        }

        if (selection1 && selection2) {
            game.checkMatch(selection1, selection2);
            selection1 = false;
            selection2 = false;
        }
        
    })

    function cardCheck(card) {

        if (card.hasClass("hidden")) {
            card.removeClass("hidden");
            card.addClass("selected");
        }
    }
    
})
