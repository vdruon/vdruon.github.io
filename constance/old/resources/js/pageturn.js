function changeColumns(changeValue,arrowLink) {
  if (changeValue > 0) changeValue = 0;
// we have defined "changeValue" as "1" for "Previous", and "-1" for "Next"
// but if the user clicks on the "Previous" button when on the first "page", nothing should move
  if ((/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) || (/MSIE (\d+\.\d+);/.test(navigator.userAgent))){
// test for Opera and IE;
       addedValue = changeValue*(780 - 2);
// this is because of the fact that the multi-column JS subtracts 1px for column width
  }
  else {
       addedValue = changeValue*780;
// for a two-column layout, we want the columns to move two by two
// therefore, we need to move by 2*330px (two columns)
// but also by 2*60px (twice the column gap,
// between the 1st and 2nd, and between the 2nd and 3rd column)
  }
  newValue = addedValue;
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
    document.getElementById("columnified").style.marginLeft = newValue + 'px';
// this moves the "columnified" div, a multiple of 780px at a time
// therefore if the user clicks on "next" once, "margin-left = -780px"
// now, we want to update the changeValue to reflect the change:
    if (arrowLink == 'next') {
      totalChanges = changeValue - 1;
      document.getElementById('anext').onclick = function () { changeColumns(totalChanges,'next'); }
      secondChanges = totalChanges + 2;
      document.getElementById('aprevious').onclick = function () { changeColumns(secondChanges,'previous'); }
      if (secondChanges < 1) { document.getElementById('previous').style.visibility = "visible"; }
      else { document.getElementById('previous').style.visibility = "hidden"; }
// here, we're hiding the "Previous" button if on the first "page"
    }
    if (arrowLink == 'previous') {
      totalChanges = changeValue + 1;
      document.getElementById('aprevious').onclick = function () { changeColumns(totalChanges,'previous'); }
      secondChanges = totalChanges - 2;
      document.getElementById('anext').onclick = function () { changeColumns(secondChanges,'next'); }
      if (totalChanges < 1) { document.getElementById('previous').style.visibility = "visible"; }
      else { document.getElementById('previous').style.visibility = "hidden"; }
    }
  }
  else {
// for non-IE browsers (IE does this animation in a sluggish way)
    if (newValue + 7800 > 0) {
// I make the assumption that no page of mine will be more than 20 columns long,
// so no need to add animation beyond that point
      fade('columniser', 100, 50, 500);
// this fades the "columniser" div to 50% opacity
// when the user sets the animation in motion
// note: this "columniser" div does not appear
// in IE browsers, to avoid non-useful DIVs there
    }
    setTimeout(function(){animateSlide(newValue,1,20,arrowLink)}, 250);
    if (arrowLink == 'next') {
      totalChanges = changeValue - 1;
      document.getElementById('anext').onclick = function () { changeColumns(totalChanges,'next'); }
      secondChanges = totalChanges + 2;
      document.getElementById('aprevious').onclick = function () { changeColumns(secondChanges,'previous'); }
      if (secondChanges < 1) { document.getElementById('previous').style.visibility = "visible"; }
      else { document.getElementById('previous').style.visibility = "hidden"; }
    }
    if (arrowLink == 'previous') {
      totalChanges = changeValue + 1;
      document.getElementById('aprevious').onclick = function () { changeColumns(totalChanges,'previous'); }
      secondChanges = totalChanges - 2;
      document.getElementById('anext').onclick = function () { changeColumns(secondChanges,'next'); }
      if (totalChanges < 1) { document.getElementById('previous').style.visibility = "visible"; }
      else { document.getElementById('previous').style.visibility = "hidden"; }
    }
  }
}

function animateSlide(newValue, iteration, stepLength, arrowLink)
{
  if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
// the animation in Opera wasn't optimal either, so I made it go faster
    if (iteration < 13)
    {
      if (arrowLink == 'next') {
        slidingMargin = newValue + 60 * (13 - iteration);
      }
      if (arrowLink == 'previous') {
        slidingMargin = newValue - 60 * (13 - iteration);
      }
      document.getElementById("columniser").style.marginLeft = slidingMargin + 'px';
      iteration++;
      setTimeout(function(){animateSlide(newValue,iteration,stepLength,arrowLink)}, 3);
    }
    else {
      document.getElementById("columniser").style.marginLeft = newValue + 'px';
      if (newValue + 7800 > 0) {
        fade('columniser', 50, 100, 500);
// just as we reduced opacity to 50% at the beginning of the animation,
// so we must put it back to 100% after the animation
      }
    }
  }
  else {
    if (iteration < 26)
    {
      if (arrowLink == 'next') {
        slidingMargin = newValue + 30 * (26 - iteration);
      }
      if (arrowLink == 'previous') {
        slidingMargin = newValue - 30 * (26 - iteration);
      }
      document.getElementById("columniser").style.marginLeft = slidingMargin + 'px';
      iteration++;
      setTimeout(function(){animateSlide(newValue,iteration,stepLength,arrowLink)}, 3);
    }
    else {
      document.getElementById("columniser").style.marginLeft = newValue + 'px';
      if (newValue + 7800 > 0) {
        fade('columniser', 50, 100, 500);
      }
    }
  }
}

function setOpacity(eID, opacityLevel) {
    var eStyle = document.getElementById(eID).style;
    eStyle.opacity = opacityLevel / 100;
    eStyle.filter = 'alpha(opacity='+opacityLevel+')';
}
function fade(eID, startOpacity, stopOpacity, duration) {
    var speed = Math.round(duration / 100);
    var timer = 0;
    if (startOpacity < stopOpacity){ // fade in
        for (var i=startOpacity; i<=stopOpacity; i++) {
            setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
            timer++;
        } return;
    }
    for (var i=startOpacity; i>=stopOpacity; i--) { // fade out
        setTimeout("setOpacity('"+eID+"',"+i+")", timer * speed);
        timer++;
    }
}