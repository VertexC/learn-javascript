** Basic Knowledge from W3school**
###JQuery Syntax
$(selector).action()
- $ sign to define/access jQuery
- jQuery action() to performed on element

###Document Ready Event
All JQeury method should be put into a document ready event. To prevent any jQuery code from running before the document is finished loading.
```js
$(document).ready(function()){
    //jQuery method
}
```

###selecotr(same to CSS selector)
- this: current element
- "p": \<p\>element
- ".classname"
- "#id"
- "p:first": select first \<p\> element. persuode-code selector
- "[attr_name]"
- "p[attr\_name='_value]"

###jQuery Event Methods
mouse events: click, dbclick, mouseenter, mouseleave, mousedown(), mouseup(), hover
keyboard events: keypress, keydown, keyup
form events: submit, change, focus(on form), blur(of form)
document/window: load, resize, scroll, unload
```js
$('#p1').hover(function(){
    alert("enter");
},
function(){
    alert("leave");
});
//if want to add multiple event of signle element
$("p").on({
    mouseenter: function(){
        ...
    },
    mouseleave: function(){
        $(this).css("background-color", "yellow");
    }
})
```
###jQuery Effects
```js
/*speed: "slow", "fast", or milliseconds
  callback:function after hide/show method*/
$(selector).hide(speed,callback);
$(selector).show(speed,callback);
$(selector).taggle(speed,callback);

/*fade method in jQuery*/
$(selector).fadeIn(speed,callback);
$(selector).fadeOut(speed,callback);
$(selecotr).fadeToggle(speed,callback);
$(selector).fadeTo(speed,opacity,callback);

/*slideDown*/
$(selector).slideDown(speed,callback);
$(selector).slideUp(speed,callback);
$(selector).slideToggle(speed,callback);

/*Animate*/
$("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '+150px',//relative value
        width: '150px'
    });
    /*if there is multiple animate, it will be carried 
    one by one. so called queue functionality*/
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '-150px',//relative value
        width: '150px'
    });
    /*stop Animations
      stopAll:default as false. 
              clear all animation in queue if true
              clear animation active if false
      goToEnd:default as false.
              whether to complete the current animation immediately 
    */
    $(selector).stop(stopAll,goToEnd);
})
/*jQuery Method Chaining
  run multiple jQuery commands, one after other. on the same elements
*/




```


