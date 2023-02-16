function toggle() {
    var x = document.getElementById("draggable");
    var featuredbtn = document.getElementById("featured-btn");

    if (x.style.display === "block") {
        x.style.display = "none";
        featuredbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    } else {
        x.style.display = "block";
        featuredbtn.style.boxShadow = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
    }
}

function toggle1() {
    var y = document.getElementById("start");
    var startbtn = document.getElementById("start-btn");

    if (y.style.display === "block") {
        y.style.display = "none";
        startbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    } else {
        y.style.display = "block";
        startbtn.style.boxShadow = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
    }
}

function toggle2() {
    var z = document.getElementById("draggable1");
    var abtbtn = document.getElementById("abt-btn");

    if (z.style.display === "block") {
        z.style.display = "none";
        abtbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";

    } else {
        z.style.display = "block";
        abtbtn.style.boxShadow = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
    }
}

/*function toggle3() {
    var a = document.getElementById("draggable2");
    var serversbtn = document.getElementById("servers-btn");

    if (a.style.display === "block") {
        a.style.display = "none";
        serversbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    } else {
        a.style.display = "block";
        serversbtn.style.boxShadow = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
    }
}*/

function closeAll() {
    var x = document.getElementById("draggable");
    var y = document.getElementById("start");
    var z = document.getElementById("draggable1");
    var a = document.getElementById("draggable2");
    var abtbtn = document.getElementById("abt-btn");
    var startbtn = document.getElementById("start-btn");
    //var serversbtn = document.getElementById("servers-btn");
    var featuredbtn = document.getElementById("featured-btn");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    abtbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    startbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    //serversbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    featuredbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
}