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