    $(document).ready(function() {
        var shown = false;

        $(document).on('click', '#email', function() {
            if (shown) {
                $(this).html("Show my email");
                shown = false;
            } else {
                var myemail = "gaddiat@ucmail.uc.edu"; // Default email value
                
                // Validate the email data
                if (typeof myemail !== "undefined" && myemail !== null && myemail.trim() !== "") {
                    myemail = "<a href='mailto:" + myemail + "'>" + myemail + "</a>";
                } else {
                    myemail = "Email data is not available";
                }

                $(this).html(myemail);
                shown = true;
            }
        });
    });


$(document).ready(function() {
    $("#colorElement").click(function() {
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        $(this).css("background-color", randomColor);
    });
});
