// resize window width and height when mousedown on resizable div
resizeElement(document.getElementById("resizable1"), document.getElementById("draggable"));
resizeElement(document.getElementById("resizable2"), document.getElementById("draggable1"));
resizeElement(document.getElementById("resizable3"), document.getElementById("draggable2"));

function resizeElement(resizeDiv, window) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    resizeDiv.onmousedown = resizeMouseDown;
    function resizeMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementResize;
    }
    function elementResize(e) {
        e = e || window.event;
        e.preventDefault();
        // set window's bottom right corner to mouse cursor's position
        window.style.width = (e.clientX - window.offsetLeft) + "px";
        window.style.height = (e.clientY - window.offsetTop) + "px";

        // if current window has featurevid, resize featurevid
        if (window.id == "draggable") {
            document.getElementById("featurevid").style.height = "clamp(0px, "+ (e.clientY - window.offsetTop - 37) + "px, 100vh)";
            //if window is too small, hide featurevid
            if (e.clientY - window.offsetTop < 100 || e.clientX - window.offsetLeft < 151) {
                document.getElementById("featurevid").style.display = "none";
            } else {
                document.getElementById("featurevid").style.display = "block";
            }
        }

        // if current window has memberlist, resize memberlist
        if (window.id == "draggable1") {
            document.getElementById("memberlist").style.height = "clamp(0px, "+ (e.clientY - window.offsetTop - 62) + "px, 100vh)";
            //if window is too small, hide memberlist
            if (e.clientY - window.offsetTop < 90 || e.clientX - window.offsetLeft < 90) {
                document.getElementById("memberlist").style.display = "none";
            } else {
                document.getElementById("memberlist").style.display = "block";
            }
        }

        if (window.id == "draggable2") {
            if(e.clientY - window.offsetTop < 180 || e.clientX - window.offsetLeft < 114) {
                document.getElementById("servers-main").style.display = "none";
            } else {
                document.getElementById("servers-main").style.display = "block";
            }
        }
    }
    function closeResizeElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}