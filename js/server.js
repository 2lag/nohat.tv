function showCSS() {
    var css = document.getElementById("css");
    var cssbtn = document.getElementById("css-btn");
    var tf2 = document.getElementById("tf2");
    var tf2btn = document.getElementById("tf2-btn");
    var csgo = document.getElementById("csgo");
    var csgobtn = document.getElementById("csgo-btn");

    css.style.display = "block";
    cssbtn.style.boxShadow = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
    tf2.style.display = "none";
    tf2btn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    csgo.style.display = "none";
    csgobtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
}

function showTF2() {
    var css = document.getElementById("css");
    var cssbtn = document.getElementById("css-btn");
    var tf2 = document.getElementById("tf2");
    var tf2btn = document.getElementById("tf2-btn");
    var csgo = document.getElementById("csgo");
    var csgobtn = document.getElementById("csgo-btn");

    css.style.display = "none";
    cssbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    tf2.style.display = "block";
    tf2btn.style.boxShadow = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
    csgo.style.display = "none";
    csgobtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
}

function showCSGO() {
    var css = document.getElementById("css");
    var cssbtn = document.getElementById("css-btn");
    var tf2 = document.getElementById("tf2");
    var tf2btn = document.getElementById("tf2-btn");
    var csgo = document.getElementById("csgo");
    var csgobtn = document.getElementById("csgo-btn");
    css.style.display = "none";
    cssbtn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    tf2.style.display = "none";
    tf2btn.style.boxShadow = "inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px grey,inset 2px 2px #dfdfdf";
    csgo.style.display = "block";
    csgobtn.style.boxShadow = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";
}