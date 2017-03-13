$(document).foundation()
$('#validate').on('input propertychange paste keypress',function() {
    var x = document.getElementById("validate").value;
    var y = false;

    for (i = 0; i < database.length; i++) {
        if (x.includes(database[i])) {
            $(".result").text("this is a genuine email");
            $(".result").css("color","lightgreen");
            y = true;
        }        
    }

    if (y == false){
        $(".result").text("this may not be a genuine email");
        $(".result").css("color","red");
    }

    if (x == null || x ==""){
        $(".result").text("Paste your suspected scam email here");
        $(".result").css("color","white");
    }
});