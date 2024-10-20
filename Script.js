window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    section2.classList.toggle("sticky",window.scrollY>0);
}

)