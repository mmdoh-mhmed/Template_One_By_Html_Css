
document.getElementById("links").onclick = function () {
    if(document.getElementById("ul").style.display == "block"){
        document.getElementById("ul").style.display = "none"
    }
    else if(document.getElementById("ul").style.display == ""){
        document.getElementById("ul").style.display = "block"
    }else if(document.getElementById("ul").style.display == "none"){
        document.getElementById("ul").style.display ="block"
    }
}



document.getElementById("top").onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

window.onscroll = function () {
    if(window.scrollY > 500){
        document.getElementById("top").style.display = "flex"
    }
    else{
        document.getElementById("top").style.display = "none"
    }
}


let i = document.querySelectorAll(".footer i")

i.forEach(function(e){
    e.onclick = function(){
        window.location.href = `https://www.${this.id}.com/`
    }
})
document.getElementById("colorName").onblur = function () {
    // console.log(55)
    document.styleSheets[2].rules[1].style.color = document.getElementById("colorName").value
}


