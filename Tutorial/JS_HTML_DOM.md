** Basic Knowledge from W3school**
use id to get HTML element
```js
var x = document.getElementById("intro")
```
### Dom on HTML
```js
- change stream to HTML
document.write(Date())
- change content in HTML
document.getElementById(id).innerHTML = new HTML
- change attribute in HTML
document.getElementById(id).attribute = new value
```
### Dom on CSS
```js
- change the style of element
document.getElementById(id).style.property = new style
```
### Dom on event
```js
- use Dom to distribute even
document.getElementById(id).onclik=function(){}
```
### Delete element
```js
- create new element
var para=document.createElement("p");
var node=document.createTextNode("content");
para.appendChild(node);
//insert into div1
var element=document.getElementById("div1");
element.appendChild(para);
- delete element
// to delete the element, need to get its parent first
var parent=document.getElementById("div1");
var child=document.getElementById("p1");
parent.removeChild(child);
```