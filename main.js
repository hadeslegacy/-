song = "";
roblox = 0;
roboy = 0;
lox = 0;
lure = 0;


function preload() {
    song = loadSound("music.mp3")
    dumb = loadSound("1.mp3")
    dum = loadSound("2.mp3")
    dub = loadSound("3.mp3")
    dmb = loadSound("4.mp3")
    umb = loadSound("5.mp3")
    du = loadSound("6.mp3")
    dumbo = loadSound("7.mp3")
}

function setup() {
   /* canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide();*/

    posenet = ml5.poseNet(video, minecraft)
    posenet.on('pose', LOLAOALOALAO)
}



function LOLAOALOALAO(results) {
    if (results.length > 0) {
        console.log(results)

        roblox = results[0].pose.rightWrist.x
        roboy = results[0].pose.rightWrist.y
        lox = results[0].pose.leftWrist.x
        lure = results[0].pose.leftWrist.y
        console.log(roblox, roboy, lox, lure + " these are right x and y and left x and y")
    }
}

function draw() {
    /*image(video, 0, 0, 600, 500)*/
}

function play() {
    song.play();
    song.volume(0.9);
    song.rate(2);
}

function change() {
    verilol = Math.random()
    console.log(verilol)
    if (verilol >= 0 && verilol <= 0.2) {
        dumb.play()
        dum.stop()
        dmb.stop()
        umb.stop()
        du.stop()
        dumbo.stop()
        song.stop()
    }
    else if (verilol >= 0.2 && verilol <= 0.4) {
        dum.play()
        dumb.stop()
        dmb.stop()
        umb.stop()
        du.stop()
        dumbo.stop()
        song.stop()
    }
    else if (verilol >= 0.4 && verilol <= 0.6) {
        dmb.play()
        dum.stop()
        dumb.stop()
        umb.stop()
        du.stop()
        dumbo.stop()
        song.stop()
    }
    else if (verilol >= 0.6 && verilol <= 0.9) {
        umb.play()
        dum.stop()
        dumb.stop()
        dmb.stop()
        du.stop()
        dumbo.stop()
        song.stop()
    }
    else if (verilol >= 0.9 && verilol <= 0.95) {
        du.play()
        dum.stop()
        dumb.stop()
        dmb.stop()
        umb.stop()
        dumbo.stop()
        song.stop()
    }
    else if (verilol >= 0.95 && verilol <= 1) {
        dumbo.play()
        dum.stop()
        dumb.stop()
        dmb.stop()
        umb.stop()
        du.stop()
        song.stop()
    }
    else{
        song.play()
        dum.stop()
        dumb.stop()
        dmb.stop()
        umb.stop()
        du.stop()
        dumbo.stop()
    }
}