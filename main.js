canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

rover_width = 100;
rover_height = 90;
NASA_Mars_Imgs = ["NASA_img_1", "NASA_img_2", "NASA_img_3", "NASA_img_4"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

rover_image = "rover.png";

background_image = NASA_Mars_Imgs [random_number];
console.log("background_image" = "+ background_image");
rover_x = 10;
rover_y = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRoverImg;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRoverImg()
{
    ctx.drawImage(rover_imgTag, 0, 0, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38');
    {
        up();
        console.log("up");
    }

    if (keyPressed == '40');
    {
        down();
        console.log("down");
    }

    if (keyPressed == '37');
    {
        left();
        console.log("left");
    }

    if (keyPressed == '39');
    {
        right();
        console.log("right");
    }
}

function up()
{
	if (rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadRoverImg();
	}
}

function down()
{
    if (rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRoverImg();
    } 
}

function left()
{
    if (rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRoverImg();
    } 
}

function right()
{
    if (rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRoverImg();
    } 
}