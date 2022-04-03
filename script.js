var date = new Date()

var date_n_f = new Date(2022, 6, 11)
var date_n_l = new Date(2022, 7, 19)

//if (date >= date_n_f && date <= date_n_l)
    
function north() {
    document.getElementById("north").style.backgroundColor = "white";
    document.getElementById("mid").style.backgroundColor = "transparent";
    document.getElementById("south").style.backgroundColor = "transparent";
    if (date >= date_n_f && date <= date_n_l) {
        document.getElementById("date").innerHTML = "<img src='./ja.png'>"
        document.body.style.backgroundColor = "82ffa0"
        
    } else {
        document.getElementById("date").innerHTML = "<img src='./nee.png'>"
        document.body.style.backgroundColor = "ff5a5a"
    }
}

var date_m_f = new Date(2022, 6, 18)
var date_m_l = new Date(2022, 7, 26)

function mid() {    
    document.getElementById("north").style.backgroundColor = "transparent";
    document.getElementById("mid").style.backgroundColor = "white";
    document.getElementById("south").style.backgroundColor = "transparent";
    if (date >= date_m_f && date <= date_m_l) {
        document.getElementById("date").innerHTML = "<img src='./ja.png'>"
        document.body.style.backgroundColor = "82ffa0"
    } else {
        document.getElementById("date").innerHTML = "<img src='./nee.png'>"
        document.body.style.backgroundColor = "ff5a5a"
    }
}

var date_s_f = new Date(2022, 6, 25)
var date_s_l = new Date(2022, 8, 2)

function south() {
    document.getElementById("north").style.backgroundColor = "transparent";
    document.getElementById("mid").style.backgroundColor = "transparent";
    document.getElementById("south").style.backgroundColor = "white";
    if (date >= date_s_f && date <= date_s_l) {
        document.getElementById("date").innerHTML = "<img src='./ja.png'>"
        document.body.style.backgroundColor = "82ffa0"
    } else {
        document.getElementById("date").innerHTML = "<img src='./nee.png'>"
        document.body.style.backgroundColor = "ff5a5a"
    }
}