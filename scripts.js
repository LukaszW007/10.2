$(document).ready(function () {
    console.log('DOM loaded - you can have fun');

    //longer version of function picking even elements
    /*$('span').each(function (index, elem) {
        if (index % 2 == 0) {
            $(elem).css('color', 'red');
        }
    });*/

    //short version of function picking even elements
    $("span:even").css('color', 'red');

    var paragraphs = $('p');
    paragraphs.each(function (index, element) {
        var button = '<button data-tmp="' + index + '">Click</button>';
        $(element).append(button);
    });

    $('button').click(function () {
        alert($(this).attr("data-tmp"));
    });

});

