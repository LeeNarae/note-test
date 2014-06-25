
$('#fullscreen').on('click', function(event){
   
   var i = document.documentElement;
 
// go full-screen
if (i.requestFullscreen) {
    i.requestFullscreen();
} else if (i.webkitRequestFullscreen) {
    i.webkitRequestFullscreen();
} else if (i.mozRequestFullScreen) {
    i.mozRequestFullScreen();
} else if (i.msRequestFullscreen) {
    i.msRequestFullscreen();
}
   
});


$('#newnote').on('click', function(event){
setHtmlCode("");
autoSave();
});
