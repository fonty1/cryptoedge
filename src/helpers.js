// Helper functions

function addCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function heatmapChangeCalc(changeValue) {
  var colorGreenOrRed = '#000';
  if (changeValue > 0 ) {
    // Green RGB numbers
    colorGreenOrRed = '63, 148, 24';
  } else {
    // Red RGB numbers
    colorGreenOrRed = '183, 31, 31';
  }

  var opacity = 0;
  if (changeValue < 5) {
      opacity =  0.2;
    }   else if (changeValue >= 5 && changeValue < 10) {
        opacity =  0.3;
      } else if (changeValue >= 10 && changeValue < 15) {
        opacity =  0.4;
      } else if (changeValue >= 15 && changeValue < 20) {
        opacity =  0.5;
      } else if (changeValue >= 20 && changeValue < 25) {
        opacity =  0.6;
      } else if (changeValue >= 25 && changeValue < 30) {
        opacity =  0.7;
      } else if (changeValue >= 30 && changeValue < 35) {
        opacity =  0.8;
      } else if (changeValue >= 35 && changeValue < 40) {
        opacity =  0.9;
      } else if (changeValue >= 40) {
        opacity =  1;
      } else {
        opacity = 0
      }

  var colorWithOpacity = 'rgba('+ colorGreenOrRed + ',' + opacity + ')';

  var styleObject = {
    borderBottom: '3px solid ' + colorWithOpacity,
    color: 'rgb(' + colorGreenOrRed + ')'
  }

  return styleObject
}

export { addCommas, heatmapChangeCalc };
