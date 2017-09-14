window.onload = function(e){
    console.log("== window ready! ==");
    setTimeout(onTimerElapsed, 3000);
}

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function onTimerElapsed() {
        modal.style.display = "block";
};

$('span').click( function(){
  modal.style.display = "none";
})
