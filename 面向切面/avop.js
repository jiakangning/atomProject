function test(){
  alert(1)
  return 'me test';
}
Function.prototype.before = function (fn){
  var __self = this;
  fn();
  return __self.apply(this.arguments);
};
Function.prototype.after = function (fn){
  var __self = this;
  __self.apply(this.arguments);
  fn();
};

test.before(function (){
  alert(1);
})
test.after(function (){
  alert(3);
})
