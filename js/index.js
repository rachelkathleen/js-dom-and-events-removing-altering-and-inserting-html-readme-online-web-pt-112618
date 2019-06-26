//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
Create DOM Elements Programmatically
document.createElement()
Creating an element in JavaScript couldn't be easier. Simply call document.createElement(tagName), where tagName is the string representation of any valid HTML tag (e.g., 'p', 'div', 'span', etc.).

Open this lesson's index.html file in your browser and open up the browser's console. In the console, enter

let element = document.createElement('div');
Type element. (or whatever you named your new element). It's an existing DOM element, but it doesn't yet appear in the DOM.

We can set properties on it:

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
Feel free to set as many properties as you'd like — this is a good chance to look around and explore different properties of DOM elements!

But notice that no matter what properties we add, the element doesn't show up on the page. What gives?

Append Elements into the DOM
To get an element to appear in the DOM, we have to append it to an existing DOM node. To go back to our tree metaphor, we have to glue our new leaf onto a branch that's already there. We can start as high up on the tree as document.body, or we can find a more specific element using any of the techniques we've learned for traversing the DOM.

appendChild()
Let's append element to body to start:

document.body.appendChild(element);
If you've been following along, you should see "Hello, DOM!" on the page now (and it should have a light gray background).

We can continue to update element, since we have a reference to it:

element.style.textAlign = 'center';
And now our element's text is centered.

We can append elements to that element:

let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
Hm, that looks a bit ugly. Let's fix it

ul.style.textAlign = 'left';
That's better.

Remove Elements from the DOM
Now let's remove one of those lis.

removeChild()
ul.removeChild(ul.querySelector('li:nth-child(2)'));
Boom. Second element is gone.

What if we want to remove the whole unordered list (ul)?

element.remove()
We can just call remove() on the element itself:

ul.remove();
