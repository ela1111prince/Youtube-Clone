var menuicon=document.querySelector(".menuicon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");


menuicon.onclick=function(){
    sidebar.classList.toggle("smallsidebar");
    container.classList.toggle("largecontainer")
}






var vid=document.getElementsByClassName(".vidmax");
var list=document.getElementsByClassName(".thumbnail")
    

list.onclick=function(){
    var getsrc=list.getAttribute("src");
    
    
    if(getsrc==="image/thumbnail1.png"){
       vid.setAttribute("src","image/video.mp4");
    }
}

