var counter = 0;
var highest = 0;
var ol1; // leaderboard (ol)
var Leaderboard = []; // leaderboard (int array)

function setup() {
    $('body').on('contextmenu', 'canvas', function(e){ return false; });
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
    createP('Mouse down, left arrow pressed, right arrow pressed, space bar pressed');

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAjiu4jxyJ2o7s6Dk_257Eu_FpIULm1710",
    authDomain: "hypertaprun.firebaseapp.com",
    databaseURL: "https://hypertaprun.firebaseio.com",
    projectId: "hypertaprun",
    storageBucket: "hypertaprun.appspot.com",
    messagingSenderId: "814954839791",
    appId: "1:814954839791:web:54f6195e33709ecd5d251a",
    measurementId: "G-LN7CJWK533"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  database = firebase.database();

  /* set ref.on */
  var ref1 = database.ref('highest');
  var ref2 = database.ref('leaderboard');

  ref1.on('value', gotData1, errData1);
  ref2.on('value', gotData2, errData2);

  createP('Leaderboard');

  ol1 = createElement('ol');
  ol1.parent(document.body);


}
function draw(){

}
function keyPressed(e) {
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
    e.preventDefault();
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
                display = Math.round(0.05 * counter * 100) / 100;
                $("#button").html("CLICK! (" + display + " secs)");
                if (average < 10 && counter > 3*20) {
                    alert("stop clicking now.");
                    clearInterval(interval);
                    stop = 0;
                    endscore = score;
                    score = 0;
                    $("#results").html("You clicked " + endscore + " times, in " + display + " seconds.<br>Start clicking again to retry and get a better score!<br>The highest record is " + highest + " clicks.");
                    $("#button").html("CLICK! (0.5 secs)");
                    counter = 0;
                    if(endscore > highest){
                      highest = endscore;
                      alert("congratulations! You broke the world record! The highest record is now " + highest + " clicks.");
                      var ref = database.ref('highest');
                      var data = endscore;
                      ref.set(data);
                    }
                    UpdateLeaderboard();
                }
            }, 50);
        }
    }

function UpdateLeaderboard(){ // Update leaderboard and upload it
  var i;
  for(i=1; i<=10; i++){
    if(endscore > Leaderboard[i]){
      break;
    }
  }
  var j;
  for(j=10; j>i; j--){
    Leaderboard[j] = Leaderboard[j-1];
  }
  Leaderboard[i] = endscore;

  // upload
  var ref = database.ref('leaderboard')
  var clientDate = new Date();
  var data = {Date: String(clientDate)}

  for(i=1; i<=10; i++){
    data['l' + i] = Leaderboard[i];
  }

  ref.set(data);
}
