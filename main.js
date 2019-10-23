var counter = 0;

function setup() {
    score = 0;
    stop = 0;
    $("#test").html("Score: " + score + "<br>Average: 0<br>Start whenever you're ready.");
    $("counting").html("test");
average = 0;
        $("#test").html("Score: " + score + "<br>Average: " + average + " cps.<br>Hypertap as long as you can!");
    $("#button").mousedown(function () {
        score = score + 1;
        average = score / 0.5;
        startTimer();
    });
    createP('Mouse down, left arrow pressed, right arrow pressed, space bar pressed')
}
function draw(){

}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    score = score + 1;
    findAverage();
    startTimer();
  } else if (keyCode === RIGHT_ARROW) {
    score = score + 1;
    findAverage();
    startTimer();
  } else if (keyCode == 32){
    score = score + 1;
    findAverage();
    startTimer();
  }
}
function mouseClicked(){
  score = score + 1;
  findAverage();
  startTimer();
}
function findAverage(){
  average = score / (0.05*counter);
}
    function startTimer() {
        if (stop === 0) {
            stop = stop + 1;

            var interval = setInterval(function () {
                counter++;
                display = Math.round(0.05 * counter, -2);
                $("#button").html("CLICK! (" + display + " secs)");
                if (average < 10) {
                    alert("stop clicking now.");
                    clearInterval(interval);
                    stop = 0;
                    endscore = score;
                    score = 0;
                    $("#results").html("You clicked " + endscore + " times, in " + display + " seconds.<br>Start clicking again to retry and get a better score!");
                    $("#button").html("CLICK! (0.5 secs)");
                }
            }, 50);
        }
    }
