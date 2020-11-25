$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'opacity': opacity
                });
            },
            duration: 600
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({
                    'opacity': opacity
                });
            },
            duration: 600
        });
    });

    $(".submit").click(function () {
        return false;
    })

});

let result = document.querySelector(".result");

document.getElementsByName('plan').forEach(el => {
    el.addEventListener('change', function (el){
        console.log(el.target.value)
        result.append('<h1> '+el.target.value + '</h1>')
    })
});

document.getElementsByName('period').forEach(el => {
    el.addEventListener('change', function (el){
        console.log(el.target.value)
        result.append('<h1> ' +el.target.value + '</h1>')
    })
});

document.getElementsByName('gender').forEach(el => {
    el.addEventListener('change', function (el){
        console.log(el.target.value)
        result.append('<h1> ' +el.target.value + '</h1>')
    })
});


// document.getElementsByClassName('form-control').forEach(el => {
//     el.addEventListener('change', function (el){
//         console.log(el.target.value)
//         result.append('<h1> ' + + '</h1>')
//     })
// });


// var x = document.getElementById("payForn").elements

// console.log(x)

// const plan = document.querySelector("#open_cafe");
// document.getElementsByName("plan").addEventListener("click", displayNone);

// console.log(plan);
