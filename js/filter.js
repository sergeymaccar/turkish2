//CURENCY



//TICKETS

var all;

all = document.getElementById('all');

var ticketsAll;

ticketsAll = document.getElementsByClassName('all');

$('#all').click(function() {
    if ($(this).is(':checked')) {
        $('.all').show(100);
    } else {
        $('.all').hide(100);
    }
});

var all;

all = document.getElementById('all');

var ticketsAll;

ticketsAll = document.getElementsByClassName('all');

if (all.checked == true) {
    $('.all').show(100);
} else {
    $('.all').hide(100);
}


var noTransp;

noTransp = document.getElementById('0');

var ticketNone;

ticketNone = document.getElementsByClassName('none');

$('#0').click(function () {
    if ($(this).is(':checked')) {
        $('.none').show(100);
    } else {
        $('.none').hide(100);
    }
});

var oneTransp;

oneTransp = document.getElementById('1');

var ticketOne = document.getElementsByClassName('one');

$('#1').click(function () {
    if ($(this).is(':checked')) {
        $('.one').show(100);
    } else {
        $('.one').hide(100);
    }
});

var twoTransp;

twoTransp = document.getElementById('2');

var ticketOne = document.getElementsByClassName('two');

$('#2').click(function () {
    if ($(this).is(':checked')) {
        $('.two').show(100);
    } else {
        $('.two').hide(100);
    }
});

var threeTransp;

threeTransp = document.getElementById('3');

var ticketOne = document.getElementsByClassName('three');

$('#3').click(function () {
    if ($(this).is(':checked')) {
        $('.three').show(100);
    } else {
        $('.three').hide(100);
    }
});

var all;

all = document.getElementById('all');

var ckeckStops;

ckeckStops = document.getElementsByClassName('transplants-filter');

$('#all').click(function () {
    if ($(this).is(':checked')) {
        $('.transplants-filter input:checkbox').prop('checked', true);
    } else {
        $('.transplants-filter input:checkbox').prop('checked', false);
    }
});

var all;

all = document.getElementById('all');

var ckeckStops;

ckeckStops = document.getElementsByClassName('transplants-filter');

if (all.checked == true) {
        $('.transplants-filter input:checkbox').prop('checked', true);
    } else {
        $('.transplants-filter input:checkbox').prop('checked', false);
    }



function activateCheckbox() {
    var checkboxes = document.querySelectorAll('.filters-container');
    Array.prototype.forEach.call(checkboxes, function (item) {
        var count = item.getElementsByClassName('ckeckStops').length;
        var currentCount = 0;

        item.addEventListener('change', function (evt) {
            if (evt.target.classList.contains('all-main')) {
                if (evt.target.checked) {
                    setAllCheckboxes(item, true);
                    currentCount = count;
                } else {
                    setAllCheckboxes(item, false);
                    currentCount = 0;
                }
            } else {
                evt.target.checked ? ++currentCount : --currentCount;

                console.log(currentCount)
                if (currentCount == count) {
                    setAllCheckboxes(item, true);
                } else if (currentCount == count - 1) {
                    if (!evt.target.checked) {
                        item.getElementsByClassName('all-main')[0].checked = false;
                    }
                }
            }
        }, false);
    });

    function setAllCheckboxes(where, value) {
        var checkboxes = where.querySelectorAll('input[type="checkbox"]');
        Array.prototype.forEach.call(checkboxes, function (item) {
            item.checked = value ? true : false;
        });
    }
}

activateCheckbox();



