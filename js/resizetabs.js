// use these variables to change the width of the buttons when the window is resized
var main = document.getElementById('main-btn');
var maintxt = document.getElementById('main-txt');
var abt  = document.getElementById('abt-btn');
var abttxt = document.getElementById('abt-txt');
var feat = document.getElementById('featured-btn');
var feattxt = document.getElementById('feat-txt');
var srvr = document.getElementById('servers-btn');
var srvrtxt = document.getElementById('srvr-txt');

// contniually detect if browser width is less than 600 px, change the minWidth of main, abt, feat, and srvr buttons to 20px, else 75px
window.addEventListener('resize', function() {
    if (window.innerWidth < 600) {
        main.style.minWidth = '24px';
        maintxt.style.display = 'none';

        abt.style.minWidth = '20px';
        abttxt.style.display = 'none';
        abt.style.left = '108px'

        feat.style.minWidth = '20px';
        feattxt.style.display = 'none';
        feat.style.left = '136px';

        srvr.style.minWidth = '20px';
        srvrtxt.style.display = 'none';
        srvr.style.left = '164px';
    } else {
        main.style.minWidth = '75px';
        maintxt.style.display = 'block';

        abt.style.minWidth = '75px';
        abttxt.style.display = 'block';
        abt.style.left = '160px';

        feat.style.minWidth = '75px';
        feattxt.style.display = 'block';
        feat.style.left = '240px';

        srvr.style.minWidth = '75px';
        srvrtxt.style.display = 'block';
        srvr.style.left = '320px';
    }
});

window.onload = function() {
	if (window.innerWidth < 600) {
        main.style.minWidth = '24px';
        maintxt.style.display = 'none';

        abt.style.minWidth = '20px';
        abttxt.style.display = 'none';
        abt.style.left = '108px'

        feat.style.minWidth = '20px';
        feattxt.style.display = 'none';
        feat.style.left = '136px';

        srvr.style.minWidth = '20px';
        srvrtxt.style.display = 'none';
        srvr.style.left = '164px';
    } else {
        main.style.minWidth = '75px';
        maintxt.style.display = 'block';

        abt.style.minWidth = '75px';
        abttxt.style.display = 'block';
        abt.style.left = '160px';

        feat.style.minWidth = '75px';
        feattxt.style.display = 'block';
        feat.style.left = '240px';

        srvr.style.minWidth = '75px';
        srvrtxt.style.display = 'block';
        srvr.style.left = '320px';
    }
}