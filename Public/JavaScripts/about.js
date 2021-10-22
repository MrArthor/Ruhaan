function NavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav fixed-top") {
        x.className += " responsive";
    } else {
        x.className = "topnav fixed-top";
    }
}

/* COUNTER */
const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(target / speed);
        console.log(increment);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
});

$(document).ready(function() {
    $(".start").click(function() {
        $(".chaining").animate({ width: "100%" }).animate({ fontSize: "46px" }).animate({ borderWidth: 30 });
    });

});

$(function() {
    $("#myTooltip").tooltip();
});