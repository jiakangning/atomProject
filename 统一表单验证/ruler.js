/*
验证都是不可或缺的一环，比如注册、登录以及上传资料等等，
但是每个人写代码的风格不一，如果没有一致而优雅的风格，没有方便的配置，
代码很容易变得混乱，所以本文将用较统一的方式来实现验证。
*/
// 综上，表单验证的过程应该是简单，方便复用，并且易于配置的，
// 因为UI设计师的设计风格往往不是单一的，所以我们还希望它是灵活的，
// 能适应一些不太一样的场景，下面将详细介绍一种方式来实现。

var rulers = {
  //是否为空
  isEmpty:function (value){
    return value =='';
  },
  // 最小长度
  minLength:function (value,length){
    return value.length>=length;
  },
 // 最大长度
 maxLength:function (value,length){
   return value.length
 },
 // 长度
 length:function (value,min,max){
   return value.length>=min&&value.length
 }
// 是否是手机号码
isMobile:function (value){
  return /(^1[3|5|7|8|9][0-9]$)/.test(value);
}
// 其他
}
/*
2，良好的调用方式
如何实现良好的调用方式是很重要的，将直接影响到我们代码的风格
，还有是否方便复用，这一点可以借鉴npm中的package.json，需要什么，就配置什么，
想象每条规则都是一个模块，我们要做的就是把模块配置进来。
*/

/*
3，验证的逻辑过程
通过上面的配置，便可以在函数中取得验证数据，接下来与规则库相匹配，并返回错误信息，
这样就能实现整个验证过程。
假设接收到的验证数据是data
*/
var list = data,
    lengs=data.length,
    // 用一个数组接收错误信息
    arr=[],
    //定义一个返回对象
    result=,
    // 标记错误
    isError=false;
    for(var i=0;i<lengs;i++){
      var l = list[i],
          val=l.value;
          // 验证为空
          if(l.isEmpty&&rulers.isEmpty(val)){
            arr[i] =l.isEmpty;
            isError = true;
            break;
          }
          // 验证最小长度
          if(l.minLength){
            var index = l.minLength.lastIndexOf('&'),
                msg=l.minLength.substring(0,index),
                len=l.minLength.substring(index+1);
                if(!rules.minLength(val,len)){
                  arr[i]=msg;
                  isError=true;
                  break;
                }
          }
          //验证最大长度
          if(l.maxLength){
            var index = l.maxLength.lastIndexOf('&'),
            msg = l.maxLength.substring(0,index),
            len = l.maxLength.substring(index+1);
            if(!rules.maxLength(val,len)){
              arr[i] = msg;
              isError = true;
              break;
            }
          }
          //验证手机号
          if(l.isMobile){
            if(!rules.isMobile(val)){
              arr[i] = l.isMobile;
              isError = true;
              break;
            }
          }
          // 其他
    }
    //返回
    if(error)
    result.l = arr.filter(function(v){
      return v;
    })
    //如果验证失败，check设置为false,并且返回一条错误信息
    return result;
