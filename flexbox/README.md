# Flexbox

For trainning your flexbox, help Froggy here:<br>
https://flexboxfroggy.com/#fr<br>

## 0. Add display flex
Use the starter HTML and CSS files<br>
In the /* Grid section within your CSS<br>

- Add a selector for the row class
- Property: display, Value: flex
=> Now, all children from the row class are flex items

- Entirely remove the row::after declaration
- Remove the float: left inside [class*='col-']
=> All elements should appear same than before using the float<br>

## 1. Add new classes on sections
You can use more 1 name in class="".
This task is for this.

<br>

## 2. Reverse order Latest news cards
Before  4. CARD , add a new comment: /* Section Latest news ============================= */

Under that comment section, target the row class inside section-latest-news class

Property: flex-direction, Value: row-reverse
The Latest news should appear in a reverse order.
```
  /* Section Latest news ============================= */
  .section-latest-news .row {
    flex-direction: row-reverse;
  }
```
<br>

## 3. Simplify services list
In the Services section of 3-index.html, remove the second ul and put the 3 lielements under the first ul<br>

All the li are on the first ul now.<br>

Now, in your CSS file, before  4. CARD , add a new comment: /* Section SERVICES ============================= */<br>

Under that comment section, add a new selector targeting the row class inside the section-services class

- Property: flex-wrap, Value: wrap
```
  /* Section SERVICES ============================= */
    .section-services .row {
        flex-wrap: wrap;
    }
```
<br>
