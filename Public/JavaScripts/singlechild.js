//Navbar
function NavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav fixed-top") {
        x.className += " responsive";
    } else {
        x.className = "topnav fixed-top";
    }
}

// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Education', 8],
        ['Food', 8],
        ['Clothes', 4],
        ['Toys', 2],
        ['Sleep', 2]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'width': 550, 'height': 350 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

//Connect form
(function() {
    $('html').addClass('js');

    var contactForm = {
        container: $('#contact'),
        config: {
            effect: 'slideToggle',
            speed: 200
        },

        init: function(config) {
            $.extend(this.config, config);

            $('#c-btn').on('click', this.show);
        },

        show: function() {
            var cf = contactForm,
                container = cf.container,
                config = cf.config;


            if (container.is(':hidden')) {
                cf.close.call(container);
                container[config.effect]
                    (config.speed);
            }
        },

        close: function() {
            var $this = $('#contact');

            if ($this.find('span.close').length) return;

            $('<span class=close>-</span>')
                .prependTo(this)
                .on('click', function() {
                    $this[contactForm.config.effect](contactForm.config.speed);
                })
        }
    };

    //contact form    
    contactForm.init({
        effect: 'fadeToggle',
        speed: 200
    });
})();

//valid input
$(document).ready(function() {
    $("form").submit(function(event) {
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#name").val();
        if (regex.test(currentValue) == false) {
            $("#result").html('<p class="error">Not valid! Please Add Valid Name</p>').show().fadeOut(1000);
            // Preventing form submission
        }
        if (regex.test(currentValue) == true) {
            $("#result").html('<p>Your Response Have Been Added We Will Contact You Soon.</p>').show().fadeOut(2000);
        }

        event.preventDefault();
    });

});

//Image toggle
$(document).ready(function() {
    $("#bt").click(function() {
        $("#im2").animate({
            width: 'toggle'
        });
    });
});