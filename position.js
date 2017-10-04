var lettersArr = (process.argv[2].split(""));
var obj = {};

function countPosition() {
  lettersArr.forEach(function(e, i) {
    if (!(e in obj)) {
      obj[e] = i;
    }
    else {
      obj[e] += ", " + i;
    }
  })
}

countPosition();
console.log(obj);