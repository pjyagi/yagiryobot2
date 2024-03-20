$(function () {
    $('.AllPost').click(function (e) {
        $('.AllPostArea').addClass("active");
        $('#AllPost-mark').addClass("selected-mark");
        $('#AllPost-mark').addClass("selected-color");
        $('#AllPost-mark').removeClass("unselected-color");
        
        $('.InfoPostArea').removeClass("active");
        $('#InfoPost-mark').removeClass("selected-mark");
        $('#InfoPost-mark').removeClass("selected-color");
        $('#InfoPost-mark').addClass("unselected-color");

        $('.YagiPostArea').removeClass("active");
        $('#YagiPost-mark').removeClass("selected-mark");
        $('#YagiPost-mark').removeClass("selected-color");
        $('#YagiPost-mark').addClass("unselected-color");

        $('.YahhoPostArea').removeClass("active");
        $('#YahhoPost-mark').removeClass("selected-mark");
        $('#YahhoPost-mark').removeClass("selected-color");
        $('#YahhoPost-mark').addClass("unselected-color");

    });
    $('.InfoPost').click(function (e) {
        $('.AllPostArea').removeClass("active");
        $('#AllPost-mark').removeClass("selected-mark");
        $('#AllPost-mark').removeClass("selected-color");
        $('#AllPost-mark').addClass("unselected-color");

        $('.InfoPostArea').addClass("active");
        $('#InfoPost-mark').addClass("selected-mark");
        $('#InfoPost-mark').addClass("selected-color");
        $('#InfoPost-mark').removeClass("unselected-color");

        $('.YagiPostArea').removeClass("active");
        $('#YagiPost-mark').removeClass("selected-mark");
        $('#YagiPost-mark').removeClass("selected-color");
        $('#YagiPost-mark').addClass("unselected-color");

        $('.YahhoPostArea').removeClass("active");
        $('#YahhoPost-mark').removeClass("selected-mark");
        $('#YahhoPost-mark').removeClass("selected-color");
        $('#YahhoPost-mark').addClass("unselected-color");

    });
    $('.YagiPost').click(function (e) {
        $('.AllPostArea').removeClass("active");
        $('#AllPost-mark').removeClass("selected-mark");
        $('#AllPost-mark').removeClass("selected-color");
        $('#AllPost-mark').addClass("unselected-color");

        $('.InfoPostArea').removeClass("active");
        $('#InfoPost-mark').removeClass("selected-mark");
        $('#InfoPost-mark').removeClass("selected-color");
        $('#InfoPost-mark').addClass("unselected-color");

        $('.YagiPostArea').addClass("active");
        $('#YagiPost-mark').addClass("selected-mark");
        $('#YagiPost-mark').addClass("selected-color");
        $('#YagiPost-mark').removeClass("unselected-color");

        $('.YahhoPostArea').removeClass("active");
        $('#YahhoPost-mark').removeClass("selected-mark");
        $('#YahhoPost-mark').removeClass("selected-color");
        $('#YahhoPost-mark').addClass("unselected-color");

    });
    $('.YahhoPost').click(function (e) {
        $('.AllPostArea').removeClass("active");
        $('#AllPost-mark').removeClass("selected-mark");
        $('#AllPost-mark').removeClass("selected-color");
        $('#AllPost-mark').addClass("unselected-color");

        $('.InfoPostArea').removeClass("active");
        $('#InfoPost-mark').removeClass("selected-mark");
        $('#InfoPost-mark').removeClass("selected-color");
        $('#InfoPost-mark').addClass("unselected-color");

        $('.YagiPostArea').removeClass("active");
        $('#YagiPost-mark').removeClass("selected-mark");
        $('#YagiPost-mark').removeClass("selected-color");
        $('#YagiPost-mark').addClass("unselected-color");

        $('.YahhoPostArea').addClass("active");
        $('.YahhoPostArea').addClass("active");
        $('#YahhoPost-mark').addClass("selected-mark");
        $('#YahhoPost-mark').addClass("selected-color");
        $('#YahhoPost-mark').removeClass("unselected-color");

    });
})