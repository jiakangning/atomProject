console.time('sum');
Array.prototype.sum = function (){
  var sumResult = 0;
  for(var i = 0;i < this.length;i++){
    sumResult += parseInt(this[i]);
  }
  return sumResult;
}
console.timeEnd('sum');
