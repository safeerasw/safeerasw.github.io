var n = 0

function F1() {
    var a = '';
    n = document.getElementById('n').value;
    for (var i = 1; i <= n; i++) {
        a = a + '<div id class = "c1">' + i + '</div>';
    }
    document.getElementById('main').innerHTML = a;

}