$(document).ready(function(){
    $(document).on('keyup',function(e) {
        var key = e.which;
        if (key == 65) {
         // if the user pressed 'a':
            $("a").removeClass("active");
        }
    });

    $(document).on('keydown',function(e) {
        var key = e.which;
        if (key == 65) {
         // if the user pressed 'a':
            $("a").addClass("active");
        }
    });
});