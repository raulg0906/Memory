$(document).ready(function(){

    var game = new MemoryGame;
    game.shuffle();


    $("#gameboard").on('click', '.gametile', function(){

        var content =$(this).children('i')
        var tileClassStr = content.attr('class')
        console.log(tileClassStr)
        if(content.hasClass("hidden")){
            content.removeClass("hidden")

        }
        // else if(){
        //     content.addClass("matched")
        // }
        
    })
    
})
