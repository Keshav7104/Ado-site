var i=0;
var j=0;
var txt= 'a game in which people try to find a hidden prize by following special signs or clues which have been left in different places but it is much more than that,this hunt for treasure or in other words to be elgible to become pirate is fueled by greed,dedication,problem-solving,teamworkand much more so are you to ready to give this test to be a Adovedi "Pirate".';
var txt2 ='in this clash between pirates to get treasure,ofcouse not gold,and more than that to get some fun, some knowledge,some memories you have to wonder through our lush green campus by solving all clues one by one to ultimately acquire the treasure but what a minute what is the treasure,so no one knows it yet untill they found it.';
var speed=30;
function typing() {
    var ele2 =document.getElementById("type");
    ele2.classList.add("bcl");
    if((i+j)<(txt.length+txt2.length)){
        if(i<txt.length){
            document.getElementById("type").innerHTML+=txt.charAt(i);
            i++;
            setTimeout(typing,speed);
        }
        else{
            document.getElementById("type").innerHTML+=txt2.charAt(j);
            j++;
            setTimeout(typing,speed);
        }
    }
 
}

function diss(){
    var ele = document.getElementById("dis");
    ele.classList.add("dis");
    var ele3 =document.getElementById("scroll");
    ele3.classList.remove("dis");
    ele3.classList.add("scroll");
}

function appear(){
// console.log('scrolling');
var ele4 =document.getElementById("mouse");
ele4.classList.remove("dis");
var ele5 =document.getElementById("mouse2");
ele5.classList.remove("dis");
var ele6 =document.getElementById("mouse3");
ele6.classList.remove("dis");
}