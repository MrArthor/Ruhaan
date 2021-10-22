//Navbar
function NavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav fixed-top") {
        x.className += " responsive";
    } else {
        x.className = "topnav fixed-top";
    }
}

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

//Panel
$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});

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

    contactForm.init({
        effect: 'fadeToggle',
        speed: 200
    });
})();

//Join form
(function() {
    $('html').addClass('js');

    var contactForm = {
        container: $('.join'),
        config: {
            effect: 'slideToggle',
            speed: 200
        },

        init: function(config) {
            $.extend(this.config, config);

            $('#c-btn1').on('click', this.show);
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
            var $this = $('.join');

            if ($this.find('span.close').length) return;

            $('<span class=close>-</span>')
                .prependTo(this)
                .on('click', function() {
                    $this[contactForm.config.effect](contactForm.config.speed);
                })
        }
    };

    contactForm.init({
        effect: 'fadeToggle',
        speed: 200
    });
})();


$(document).ready(function() {
    $("button").click(function() {

        $("#div2").addClass("important");
    });
});

$("#im").first().click(function() {
    $(this).fadeTo("slow", 0.33);
});

//valid input
$(document).ready(function() {
    $("form").submit(function(event) {
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#name").val();
        if (regex.test(currentValue) == false) {
            $("#result").html('<p class="error">Not valid! Please Add Valid Name</p>').show().fadeOut(2000);
            // Preventing form submission
        }
        if (regex.test(currentValue) == true) {
            $("#result").html('<p>Your Response Have Been Added We Will Contact You Soon.</p>').show().fadeOut(2000);
        }
        var regex1 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;;
        var current = $("#email").val();
        if (regex1.test(current) == false) {
            $("#result").html('<p class="error">Not valid! Please Add Valid Email</p>').show().fadeOut(2000);
            // Preventing form submission
        }
        if (regex1.test(current) == true) {
            $("#result").html('<p>Your Response Have Been Added We Will Contact You Soon.</p>').show().fadeOut(2000);
        }
        var regex2 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;;
        var current1 = $("#phone").val();
        if (regex2.test(current1) == false) {
            $("#result").html('<p class="error">Not valid! Please Add Valid Number</p>').show().fadeOut(2000);
            // Preventing form submission
        }
        if (regex2.test(current1) == true) {
            $("#result").html('<p>Your Response Have Been Added We Will Contact You Soon.</p>').show().fadeOut(2000);
        }
        event.preventDefault();
    });

});

//join
$(document).ready(function() {
    $("#join").submit(function(event) {
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#name1").val();
        if (regex.test(currentValue) == false) {
            $("#result").html('<p class="error">Not valid! Please Add Valid Name</p>').show().fadeOut(2000);
            // Preventing form submission
        }
        if (regex.test(currentValue) == true) {
            $("#result").html('<p>Your Response Have Been Added We Will Contact You Soon.</p>').show().fadeOut(2000);
        }
        var regex1 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;;
        var current = $("#email1").val();
        if (regex1.test(current) == false) {
            $("#result").html('<p class="error">Not valid! Please Add Valid Email</p>').show().fadeOut(2000);
            // Preventing form submission
        }
        if (regex1.test(current) == true) {
            $("#result").html('<p>Your Response Have Been Added We Will Contact You Soon.</p>').show().fadeOut(2000);
        }
        var regex2 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;;
        var current1 = $("#phone1").val();
        if (regex2.test(current1) == false) {
            $("#result").html('<p class="error">Not valid! Please Add Valid Number</p>').show().fadeOut(2000);
            // Preventing form submission
        }
        if (regex2.test(current1) == true) {
            $("#result").html('<p>Your Response Have Been Added We Will Contact You Soon.</p>').show().fadeOut(2000);
        }
        event.preventDefault();
    });

});