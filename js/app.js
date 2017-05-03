$('#validate').on('input propertychange paste keypress',function() {
    var x = document.getElementById("validate").value.toLowerCase();
    var y = false;

    for (i = 0; i < database.length; i++) {
        if (x.includes(database[i])) {
            $(".result").text("THIS IS A GENUINE EMAIL");
            $(".result").css("color","lightgreen");
            y = true;
        }
    }

    if (y == false){
        $(".result").text("THIS MAY NOT BE A GENUINE EMAIL");
        $(".result").css("color","red");
    }

    if (x == null || x ==""){
        $(".result").text("PASTE YOUR SUSPECTED SCAM EMAIL ADDRESS IN THE BOX ABOVE TO SEE IF IT IS REAL OR FAKE.");
        $(".result").css("color","black");
    }
});
