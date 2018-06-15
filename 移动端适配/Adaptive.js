window.onload = function (){
  var url_pc = 'Pc.css',
      url_pad = 'ipad.css',
      url_phone = 'phone.css',
      w = window.innerWidth,
      h = document.body.clientHeight,
      link = document.createElement('link');
  link.setAttribute('rel','stylesheet');
  if (w <= 768) {
    alert('手机屏幕！');
    link.setAttribute('href',url_phone);
    document.body.appendChild(link);
  }
  else{
    alert('电脑！');
    link.setAttribute('href',url_pc);
    document.body.appendChild(link);
  }
}
