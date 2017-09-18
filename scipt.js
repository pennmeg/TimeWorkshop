window.onload = function(e){
    console.log("== window ready! ==");
    setTimeout(onTimerElapsed, 3000);
}

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function onTimerElapsed() {
  console.log("==onTimerElapsed==");
    modal.style.display = "block";
};

$('span').click( function(){
  console.log("--click span--");
    modal.style.display = "none";
})
