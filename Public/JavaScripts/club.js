function NavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav fixed-top") {
        x.className += " responsive";
    } else {
        x.className = "topnav fixed-top";
    }
}

$(document).ready(function() {
    $("button").click(function() {
        var div = $("");
        div.animate({
            height: '100px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '300px',
            opacity: '0.8'
        }, "slow");
        div.animate({
            height: '100px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '100px',
            opacity: '0.8'
        }, "slow");
    });
});

function brakechain() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf0c1;";
    setTimeout(function() {
        a.innerHTML = "&#xf127;";
    }, 1000);
}
brakechain();
setInterval(brakechain, 2000);


$(function() {
    $(document).tooltip();
});

$(function() {
    $("#myTooltip").tooltip();
});