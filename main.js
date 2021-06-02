var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;


var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == "38") {
        up();
        console.log("Up arrow is pressed");
    }
    if (keyPressed == "40") {
        down();
        console.log("down arrow is pressed");
    }
    if (keyPressed == "37") {
        left();
        console.log("Left arrow is pressed");

    }
    if (keyPressed == "39") {
        right();
        console.log("right arrow is pressed");
    }
    if (keyPressed == "70") {
        new_image("ironman_face.png");
        console.log("f key is pressed");
    }
    if (keyPressed == "66") {
        new_image("spiderman_body.png");
        console.log("b key is pressed");
    }
    if (keyPressed == "76") {
        new_image("hulk_legs.png");
        console.log("l key is pressed");
    }
    if (keyPressed == "82") {
        new_image("thor_right_hand.png");
        console.log("r key is pressed");
    }
    if (keyPressed == "72") {
        new_image("captain_america_left_hand.png");
        console.log("h key is pressed");
    }
    
}
function up() {
    if (player_y >= 30) {
        player_y = player_y - 30;
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 450) {
        player_y = player_y + 30;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 30) {
        player_x = player_x - 30;
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + 30;
        canvas.remove(player_object);
        player_update();
    }
}