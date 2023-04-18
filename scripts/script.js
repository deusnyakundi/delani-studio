$(document).ready(function () {
    $("#designLogo").click(function (e) { 
        e.preventDefault();
        $("#inlineDesign").hide();
        $(".toggleDesignLogo").show();
        
    });

    $("#devLogo").click(function (e) { 
        e.preventDefault();
        $("#inlineDev").hide();
        $(".toggleDevLogo").show();
        
    });


    $("#productLogo").click(function (e) { 
        e.preventDefault();
        $("#inlineProduct").hide();
        $(".toggleProductLogo").show();
        
    });

    $(".toggleDesignLogo").click(function (e) { 
        e.preventDefault();
        $(".toggleDesignLogo").hide();
        $("#inlineDesign").show();
        
    });

    $(".toggleDevLogo").click(function (e) { 
        e.preventDefault();
        $(".toggleDevLogo").hide();
        $("#inlineDev").show();
        
    });

    $(".toggleProductLogo").click(function (e) { 
        e.preventDefault();
        $(".toggleProductLogo").hide();
        $("#inlineProduct").show();
        
    });
});


$(document).ready(function () {
    $(".img-fluid").hover(function () {
           $("#overlay").show();
            
        }, function () {
            $("#overlay").hide();
        }
    );
    
});

$(document).ready(function () {
    $("#dataForm").submit(function (e) { 
        e.preventDefault();

        var name = $("#nameInput").val();
        var email = $("#emailInput").val();
        var message = $("#messageInput").val();

        if ($("#nameInput").val() && $("#emailInput").val()){
            alert (name + ", we have received your message. Thank you for reaching out to us.");
        }

        else{
            alert("Please enter your name and email")
        }
        
    });
});