/* SEARCH BUTTON */




/* $(document).ready(function() {
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function() {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function() {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function() {
        $("#myCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function() {
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function() {
        $("#myCarousel").carousel("next");
    });
}); */



/* PROGRESS CIRCLE*/
var bar = new ProgressBar.Circle(containerCircle, {
    color: '#255d83',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#255d83',
        width: 1
    },
    to: {
        color: '#255d83',
        width: 4
    },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.7); // Number from 0.0 to 1.0

/* PHOTO GALLERY */
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%"; // IE10
        elements[i].style.flex = "100%";
    }
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%"; // IE10
        elements[i].style.flex = "50%";
    }
}

// Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%"; // IE10
        elements[i].style.flex = "25%";
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
        // console.log(increment);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
});

/* PROGRESS BAR BELOW NAVBAR */
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
/* 
function NavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav fixed-top") {
        x.className += " responsive";
    } else {
        x.className = "topnav fixed-top";
    }
} */