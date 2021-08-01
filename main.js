var score=0;
console.log(score);
document.getElementById("scoreboard").innerHTML=score;
canvas=document.getElementById("player");
ctx=canvas.getContext("2d");
roverheight=50;
roverwidth=100;
roverx=10;
rovery=10;
coinheight=30;
coinwidth=30;
coin_x=300;
coin_y=300;
alienheight=50;
alienwidth=20;
alienx=800;
alieny=800;
alien2height=50;
alien2width=20;
alien2x=0;
alien2y=40;
OIPheigth=10;
OIPwidth=25;
OIPx=roverx;
OIPy=rovery;
coin_image="coin.gif";
roverImage="rover.png";
canvasimage="mars.jpg";
alienimage="alien.jpg";
alien2image="alien2.jpg";
laserimage="OIP.jpg"
function add(){
    backroundimage=new Image();
    backroundimage.onload=uploadbackround;
    backroundimage.src=canvasimage;

    roverimage=new Image();
    roverimage.onload=uploadrover;
    roverimage.src=roverImage;

    coinimage=new Image();
    coinimage.onload=uploadcoin;
    coinimage.src=coin_image;

    alienImage=new Image();
    alienImage.onload=uploadalien;
    alienImage.src=alienimage;

    alien2Image=new Image();
    alien2Image.onload=uploadalien2;
    alien2Image.src=alien2image;

    laser_image=new Image();
    laser_image.onload=uploadlaser;
    laser_image.src=laserimage;
}
function uploadbackround() {
    ctx.drawImage(backroundimage,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(roverimage,roverx,rovery,roverwidth,roverheight);
}
function uploadcoin(){
    ctx.drawImage(coinimage,coin_x,coin_y,coinwidth,coinheight);
}
function uploadalien(){
    ctx.drawImage(alienImage,alienx,alieny,alienwidth,alienheight);
}
function uploadalien2(){
    ctx.drawImage(alien2Image,alien2x,alien2y,alien2width,alien2height);
}
function uploadlaser(){
    ctx.drawImage(laserimage,OIPx,OIPy,OIPwidth,OIPheigth);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38"){
    up();
    console.log(up);
    if(roverx>=coin_x && roverx <= coin_x+30 && rovery>=coin_y && rovery<=coin_y+30){
        coin_x=Math.random()*700;
        coin_y=Math.random()*500;
        score=score+1;
        document.getElementById("scoreboard").innerHTML=score;
    }
    }
    if (keyPressed == "40"){
    down();
    console.log(down);
    if(roverx>=coin_x && roverx <= coin_x+30 && rovery>=coin_y && rovery<=coin_y+30){
        coin_x=Math.random()*700;
        coin_y=Math.random()*500;
        score=score+1;
        document.getElementById("scoreboard").innerHTML=score;
    }
}
    if (keyPressed == "39"){
    right();
    console.log(right);
    if(roverx>=coin_x && roverx <= coin_x+30 && rovery>=coin_y && rovery<=coin_y+30){
        coin_x=Math.random()*700;
        coin_y=Math.random()*500;
        score=score+1;
        document.getElementById("scoreboard").innerHTML=score;
    }
}
    if (keyPressed == "37"){
    left();
    console.log(left);
    if(roverx>=coin_x && roverx <= coin_x+30 && rovery>=coin_y && rovery<=coin_y+30){
        coin_x=Math.random()*700;
        coin_y=Math.random()*500;
        score=score+1;
        document.getElementById("scoreboard").innerHTML=score;
    }
}
    if (keyPressed == "20" && keyPressed == "32" && keyPressedv == "040"){

    }
}
function up(){
    if(rovery >=0){
        rovery = rovery-10;
        uploadbackround();
        uploadrover();
        uploadcoin();
    }
}
    function down(){
        if(rovery <=600){
            rovery = rovery+10;
            uploadbackround();
            uploadrover();
            uploadcoin();
        }
    }
    function left(){
        if(roverx >=0){
            roverx = roverx-10;
            uploadbackround();
            uploadrover();
            uploadcoin();
        }
    }
    function right(){
        if(roverx <=800){
            roverx = roverx+10;
            uploadbackround();
            uploadrover();
            uploadcoin();
        }
    }