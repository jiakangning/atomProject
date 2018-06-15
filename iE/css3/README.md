css3 在 ie6-9 和 ie10 及 chrome和safai主流浏览器
ie兼容性写法：behavior:url(ie-css3.htc);
支持：text-shadow,box-shadow,border-radius


css盒模型

css3 chrome++： box-sizing==content-box   <!-- /*外盒尺寸计算（元素空间尺寸）*/ -->
                                          Element空间高度 = content height + padding + border + margin
                                          Element 空间宽度 = content width + padding + border + margin
                                          <!-- /*内盒尺寸计算（元素大小）*/ -->
                                          Element Height = content height + padding + border --Height为内容高度
                                          Element Width = content width + padding + border   --Width为内容宽度
                box-sizing == border-box
                                          <!-- /*外盒尺寸计算（元素空间尺寸）*/ -->
                                          Element空间高度 = content Height + margin (Height包含了元素内容宽度，边框宽度，内距宽度)
                                          Element空间宽度 = content Width + margin (Width包含了元素内容宽度、边框宽度、内距宽度)
                                          <!-- /*内盒尺寸计算（元素大小）*/ -->
                                          Element Height = content Height(Height包含了元素内容宽度，边框宽度，内距宽度)
                                          Element Width = content Width(Width包含了元素内容宽度、边框宽度、内距宽度)

  Webkit内核需要加上-webkit-，Presto内核-o-,IE8-ms-，所以box-sizing兼容浏览器时需要加上各自的前缀

css3 ie : box-sizing(ie 6+7+8) 无效
【ie6-7-8】
<!-- /*外盒尺寸计算（元素空间尺寸）*/ -->
Element空间高度 = content Height + margin (Height包含了元素内容宽度，边框宽度，内距宽度)
Element空间宽度 = content Width + margin (Width包含了元素内容宽度、边框宽度、内距宽度)
<!-- /*内盒尺寸计算（元素大小）*/ -->
Element Height = content Height(Height包含了元素内容宽度，边框宽度，内距宽度)
Element Width = content Width(Width包含了元素内容宽度、边框宽度、内距宽度)

cssHack
<!-- #left {
    *width:180px;
  }
  #right {
    *width: 680px;
  } -->
