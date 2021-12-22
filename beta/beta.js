
context = document.getElementById('letsPaint').getContext("2d");

var curColor = "#ff00cc";
var clickColor = new Array();

var brushThickness = 50;
var clickThickness = new Array();
var imageUrl = "https://svgshare.com/i/M1z.svg";
var outlineImage = new Image();

$('.brushIcon').css('color', curColor);

$("#colourPicker").change(function () {
    curColor = $(this).val();
    $('.brushIcon').css('color', curColor);
});
$("#eraser").click(function () {
    curColor = "#ffffff";
});
$("#thickness").change(function () {
    brushThickness = $(this).val();
});






var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

outlineImage.src = imageUrl;
redraw();



$('#imageSelector img').click(function () {
    imageUrl = $(this).attr('src');
    outlineImage.src = imageUrl;
    redraw();
});

$('#clear').click(function () {
    if (confirm("Are you sure you want to delete your drawing?") == true) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        clickX = [];
        clickY = [];
        clickDrag = [];
        clickColor = [];
        clickThickness = [];
        context.drawImage(outlineImage, 0, 0, context.canvas.width, context.canvas.height);
    } else {
        return false;
    }
});

$('#download').click(function () {
    var link = document.getElementById("downlaod")
    link.href = document.getElementById('letsPaint').toDataURL();
    link.download = 'test.png';

});


function addClick(x, y, dragging) {
    outlineImage.src = imageUrl;
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickColor.push(curColor);
    clickThickness.push(brushThickness);

}

$('#letsPaint').bind("touchstart", function (e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});



// For Touch 
var canvas = document.getElementById("letsPaint");

// Set up touch events for mobile, etc
canvas.addEventListener("touchstart", function (e) {
    mousePos = getTouchPos(canvas, e);
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
    var mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
    };
}


$('#letsPaint').mousedown(function (e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});

$('#letsPaint').mousemove(function (e) {
    if (paint) {
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
    }
});

$('#letsPaint').mouseup(function (e) {
    paint = false;
});

// $('#letsPaint').mouseleave(function(e){
//   paint = false;
// });






function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas


    // context.strokeStyle = paintColour;
    context.lineJoin = "round";
    // context.lineWidth = brushThickness;

    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickThickness[i];
        context.stroke();
    }
    context.drawImage(outlineImage, 0, 0, context.canvas.width, context.canvas.height);
}