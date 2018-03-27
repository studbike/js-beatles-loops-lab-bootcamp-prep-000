function theBeatlesPlay(musicians, instruments){

  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }return arr
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];
function johnLennonFacts(arr){
var i = 0
while (i<arr.length){
  arr[i] += "!!!"
  i += 1 
}
}
