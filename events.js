/* events
版本: N/A
2019/10/23
*/

/* Timed Events */
  // embedded in main.js

/* Click Events */


/* Value Events */
function gotData1(data){ // value highest (void)
  console.log('value highest');
  var dt = data.val();
  highest = dt;
}

function errData1(err){ // value (void)
  console.log("Error!");
  console.log(err);
}

function gotData2(data){ // value leaderboard (void)
  console.log('value leaderboard');
  var listings = selectAll('.fuck');
  for(var i=0; i<listings.length; i++){
    listings[i].remove();
  }

  var dt = data.val();

  if(dt==null){
    return;
  }

  for(var i=1; i<=10; i++){
    Leaderboard[i] = dt['l' + i];
  }

  for(var i=1; i<=10; i++){
    var li = createElement('li', Leaderboard[i] + ' clicks');
    li.class('fuck');
    li.parent(ol1);
  }
}

function errData2(err){ // value (void)
  console.log("Error!");
  console.log(err);
}
