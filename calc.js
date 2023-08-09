const off = document.querySelector('.off');
const on = document.querySelector('.on');
const C = document.querySelector('.C');
const div = document.querySelector('.div');
const nine = document.querySelector('.nine');
const eight = document.querySelector('.eight');
const seven = document.querySelector('.seven');
const six = document.querySelector('.six');
const five = document.querySelector('.five');
const four = document.querySelector('.four');
const three = document.querySelector('.three');
const two = document.querySelector('.two');
const one = document.querySelector('.one');
const zero = document.querySelector('.zero');
const power = document.querySelector('.power');
const root = document.querySelector('.root');
const mul = document.querySelector('.mul');
const minus = document.querySelector('.minus');
const add = document.querySelector('.add');
const equal = document.querySelector('.equal');
const cancel = document.querySelector('.cancel');
const undo = document.querySelector('.undo');
var q = "";
one.addEventListener('click', function () {
    q += "1";
    screen = screen * 10 + 1;
    document.getElementById('demo').innerHTML = q;
});
two.addEventListener('click', function () {

    q += "2";
    screen = screen * 10 + 2;
    document.getElementById('demo').innerHTML = q;
});
add.addEventListener('click', function () {
    q += "+";
    document.getElementById('demo').innerHTML = q;


});

equal.addEventListener('click', function () {

    document.getElementById('demo').innerHTML = eval(q);
});
three.addEventListener('click', function () {
    q += "3";
    screen = screen * 10 + 3;
    document.getElementById('demo').innerHTML = q;

});
four.addEventListener('click', function () {
    q += "4";
    screen = screen * 10 + 4;
    document.getElementById('demo').innerHTML = q;
});
five.addEventListener('click', function () {
    q += "5";
    screen = screen * 10 + 5;
    document.getElementById('demo').innerHTML = q;
});
six.addEventListener('click', function () {
    q += "6";
    screen = screen * 10 + 6;
    document.getElementById('demo').innerHTML = q;
});
seven.addEventListener('click', function () {
    q += "7";
    screen = screen * 10 + 7;
    document.getElementById('demo').innerHTML = q;
});
eight.addEventListener('click', function () {
    q += "8";
    screen = screen * 10 + 8;
    document.getElementById('demo').innerHTML = q;
});
nine.addEventListener('click', function () {
    q += "9";
    screen = screen * 10 + 9;
    document.getElementById('demo').innerHTML = q;
});
zero.addEventListener('click', function () {
    q += "0";
    screen = screen * 10 + 0;
    document.getElementById('demo').innerHTML = q;

});
minus.addEventListener('click', function () {
    q += '-'
    document.getElementById('demo').innerHTML = q;


});
mul.addEventListener('click', function () {
    q += '*'
    document.getElementById('demo').innerHTML = q;


});
div.addEventListener('click', function () {
    q += '/'
    document.getElementById('demo').innerHTML = q;
});
undo.addEventListener('click', function () {
    q = q.substring(0, q.length - 1);
    document.getElementById('demo').innerHTML = q;
});
cancel.addEventListener('click', function () {
    q = "";
    document.getElementById('demo').innerHTML = q;
});
