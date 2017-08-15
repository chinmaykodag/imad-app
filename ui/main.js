console.log('Loaded!');
//Move the image
var img=document.getElementById('eesha');
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marinLeft=marginLeft+'px';
}
img.onclick=function (){
    var interval=setInteral(moveRight,100);
};