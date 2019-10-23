/* events
版本: N/A
2019/10/23
*/

/* Timed Events */
  // embedded in main.js

/* Click Events */


/* Value Events */
function gotData1(data){ // value online (void)
  console.log('value highest');
  var dt = data.val();
  highest = dt;
}

function errData1(err){ // value (void)
  console.log("Error!");
  console.log(err);
}
