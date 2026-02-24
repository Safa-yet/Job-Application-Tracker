## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

The Main difference between them is getElementById returns single Element, getElementByClassName returns HtmlCollection A querySelector, querySelectorAll returns Nodelist . With getElementById we can select one unique element and with getElementByClassName we can select multiple element with the class Name.It return live update of element. On the other hand querySelector can select the first any kind of selected element and querySelectorAll can select all element .It a dynamic way , we can not returns automaicalluy.

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM . First of all we need to get the element , then we need to create an div or any tag  by document.createElement ("div") and make insert innerHtml into this div , and lastly by using apeend() or appendChild() insert this div into the element


### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a method in JavaScript where a target element come upword to its parent like a bubble . It works in the  bubbling phase of a event flow and allows parent to get their child.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a dynamic technique in JavaScript  .By Using this technique we don't need to get set addEventListener to many more item , only using event Delegation we can handle all the item from only one addEventLister.Its useing event bubbling to get child elemnt from a addEventListener .It's very Usefulll for developer ,it makes work faster and it also save developer time , we can work lots of work from one function

### 5. What is the difference between preventDefault() and stopPropagation() methods?

The preventDefault() method is used to stop the default browser behavior .The stopPropagation() method is used to stop the  event from bubbling up to parent elements