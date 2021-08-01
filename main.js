var canvas = new fabric.Canvas('myCanvas');
 var x = document.getElementById("myAudio");

 fabric_image = "";

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
    fabric_image = Img;
        fabric_image.scaleToWidth(700);
        fabric_image.scaleToHeight(510);
        fabric_image.set({
            top:0, left:0
        });
        canvas.set(fabric_image);
    });
	
}

function playSound(){
	x.play();
    console.log("played");
}
