# Examen

## Question 1. Which of the following are interfaces of web applications?

* Web & application server interface
* Application & DB interface
* Both
* None

## Question 2. Which of the following status codes denotes a server error?

* 100
* 200
* 300
* 400
* 500

## Question 3. Predict the output of the following code:

```js
Person = new Education ();
Person.name="Michael";
Person.surname="Hicks";
var Person;
Person.residence="Bangalore";
Person.age=23;
Object.freeze(Person);
console.log(delete Person.name);
for (var item in Person) {
         console.log(item);
}

Definition of Education:
function Education () {
this.education = "B.Tech";
}
```



> False 
education
name
surname
residence
age

> false
education
name
surname
residence
age

> True
education
surname
residence
age

> true
education
surname
residence
age

> true
education
name
surname
residence
age

> false
education
surname
residence
age

> Compile time error

## Question 4.

```
1.- Create a new component with Polymer
2.- Use Polymer's DOM templating to create a shadow DOM tree for your element.
3.- Declare some properties with default values, different types and try to observe change in
one of them.
4.- Use databinding. Bind the value of a custom input element (iron-input) to the element's
owner property.
5.- Your element must fire events to notify changes and must be configured by properties.
6.- (Optional) Use <dom-repeat> for template repeating.
7.- (Optional) Use CSS custom properties inside your element using the var function
```

## Question 5. 
> Create an image preview tool that can be used to preview images, with the following preferred
methods:
Drag and Drop: The image is dragged from the computer and dropped on the previewer.
Image Link: The image link is provided.

## Question 6. 

> The task is to write a tool-tip for any HTML element on a given page, that is, it should be
possible to invoke the tool-tip on any element. The preferred position for viewing the tip must
be at the top of the HTML element, but if there isn't enough space to view the tip, then it can
be viewed on the bottom, left, or right of the HTML element, whichever is the best choice for
viewing.

> The tool-tip should consist of three elements:
Title: This is the title or name of the HTML element for which the tip is being displayed.
Content: This contains the description to be displayed in the tool-tip.
Okay button: The tip for the corresponding HTML element will dissolve after user clicks the
Okay button.

> The API to be used is given below:

```js
$('#HTML element').showToolTip ( {
Title: 'This is the title'
Content: 'This is the content'
onApprove: function() {
// To be called after Okay button is clicked.
}
} );
```

## Question 7. 

```
Consider a string consisting of the characters < and > only. We consider the string to be
balanced if each < always appears before (i.e., to the left of) a corresponding > character
(they do not need to be adjacent). Moreover, each < and > act as a unique pair of symbols
and neither symbol can be considered as part of any other pair of symbols.

To balance a string, we can replace any > character with <> . Given an expression and a
maximum number of replacements, can you turn an unbalanced string into a balanced one?

For example, the strings <<>> , <> , and <><> are all balanced, but the strings >> ,
<<> , and ><>< are unbalanced . The string >> can be balanced in two moves by
replacing each > with a <> to make <><> .

Function Description
Complete the function balancedOrNot in the editor below. The function must return an array
of integers where element[i] contains a 1 if expressions[i] is balanced or a 0 if it is not.

balancedOrNot has the following parameter(s):
expressions[expressions[0],...expressions[n-1]]: an array of strings to check
maxReplacements[maxReplacements[0],...maxReplacements[n-1]]: an array of
integers representing the maximum number of replacements available for each
expressions[i]
Constraints
1 ≤ n ≤ 10
1 ≤ length of expressions[i] <= 105
0 ≤ maxReplacements[i] <= 105
```

## Question 8. Consider the following html code:

```js
<p class="test">First Sentence.</p>
<p class="test">Another Sentence.</p>
```

> We want to display both sentences in same line. Which css code we must use?

```js
<style> .test{ display: inline; }
</style>

<style> #test{ display: inline; }
</style>

<style> .test{ float: inline; }
</style>

<style> .test{ float: right; }
</style>
```


