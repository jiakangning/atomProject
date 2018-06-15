【ELEMENT】
除了 Document 类型之外，Element 类型就要算是 Web 编程中最常用的类型了。Element 类型用于表现 XML 或 HTML 元素，提供了对元素标签名、子节点及特性的访问。Element 节点具有以下特征：

nodeType 的值为1；
nodeName 的值为元素的标签名；
nodeValue 的值为 null；
parentNode 可能是 Document 或 Element；
其子节点可能是 Element、Text、Comment、ProcessingInstruction、CDATASection 或 EntityReference。

【HTML 元素】
所有 HTML 元素都由 HTMLElement 类型表示，不是直接通过这个类型，也是通过它的子类型来表示。HTMLElement 类型直接继承自 Element 并添加了一些属性。添加的这些属性分别对应于每个 HTML 元素中都存在的下列标准特性。

id，元素在文档中的唯一标识符。
title，有关元素的附加说明信息，一般通过工具提示条显示出来。
lang，元素内容的语言代码，很少使用。
dir，语言的方向，值为 "ltr"（left-to-right，从左至右）或 "rtl"（right-to-left，从右至左），也很少使用。
className，与元素的 class 特性对应，即为元素指定的 CSS 类。没有将这个属性命名为 class，是因为 class 是 JavaScript 的保留字。
上述这些属性都可以用来取得或修改相应的特性值。以下面的HTML元素为例：

【Text类型】
文本节点由 Text 类型表示，包含的是可以照字面解释的纯文本内容。纯文本中可以包含转义后的 HTML 字符，但不能包含 HTML 代码。Text 节点具有以下特征：

nodeType 的值为3；
nodeName 的值为 "#text"；
nodeValue 的值为节点所包含的文本；
parentNode 是一个 Element；
不支持（没有）子节点。
可以通过 nodeValue 属性或 data 属性访问 Text 节点中包含的文本，这两个属性中包含的值相同。对 nodeValue的修改也会通过 data 反映出来，反之亦然。使用下列方法可以操作节点中的文本。

appendData(*text*)：将 *text* 添加到节点的末尾。
deleteData(*offset*, *count*)：从 *offset* 指定的位置开始删除 *count* 个字符。
insertData(*offset, text*)：在 *offset* 指定的位置插入 *text*。
replaceData(*offset, count, text*)：用 *text* 替换从 *offset* 指定的位置开始到 *offset*+*count* 为止处的文本。
splitText(*offset*)：从 *offset* 指定的位置将当前文本节点分成两个文本节点。
substringData(*offset, count*)：提取从 *offset* 指定的位置开始到 *offset+count* 为止处的字符串。
除了这些方法之外，文本节点还有一个 length 属性，保存着节点中字符的数目。而且，nodeValue.length 和 data.length 中也保存着同样的值。
