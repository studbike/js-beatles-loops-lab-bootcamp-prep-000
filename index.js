function theBeatlesPlay(musicians, instruments){

  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }return arr
}


function johnLennonFacts(arr){
var j = 0
while (j<arr.length){
  arr[j] = arr[j] + "!!!"
  j += 1
}
}
