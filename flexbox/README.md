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

## 4. Playing around with the spacing between flex service items
Using the files from the previous task for this task:<br>

In 4-styles.css file, within the Grid section<br>

- In .col-1-3 selector
  - Replace the current width with calc((100% / 3) - 2rem)
- In .col-1-2 selector
  - Replace the current width with calc((100% / 2) - 2rem)
- In [class*='col-']
  - Remove the padding declaration
  - Set Property: margin to 1rem
- In ul.row declaration
  - Replace the current margin with -1rem
```
  /* Grid
      ============================= */
  
  ul.row {
    margin: -1rem;
    padding: 0;
    list-style: none;
  }

  [class*='col-'] {
    margin: 1rem;
  }
  
  .col-1-3 {
    width: calc((100% / 3) - 2rem)
  }
  
  .col-1-2 {
    width: calc((100% / 2) - 2rem)
  }

  .row {
    display: flex;
  }
  ```
  <br>

## 5. Flexify the header
In your 5-index.html file, inside the Header section
- Wrap the div with class header-logo and the nav with class navbar-menu with a div that has header-container as a class

In your 5-styles.css file,
- Inside the /* Header section
- Add a selector for the header-container class
  - Property: display, Value: flex
  - Property: justify-content, Value: space-between
- Remove header-logo and header-logo a rules
- Remove the navbar-menu rule
- In the variables section
  - Remove
   - header-logo-position
   - header-logo-link-display
   - header-logo-link-position
   - header-logo-link-top
   - header-logo-link-left
```
  /* Header
      ============================= */
  
  .header {
    padding: var(--header-padding);
         position: relative;
         z-index: 3;
         background: transparent;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
  }
```
<br>

## 6. Flexify the navbar
in 6-styles.css, inside the /* Navbarsection
- In the nav class selector
  - Property: display, Value: flex
- Inside the .nav .nav-item selector, remove the display declaration
- Target .nav-item + .nav-item inside nav class
  - Move the margin declaration from .nav .nav-item inside the new selector.
- In the variables section
  - Change the value of the variable nav-item-margin to be 0 0 0 2rem
```
.nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    margin: var(--nav-item-margin);
  }
  
  .nav .nav-item {
    font-family: var(--nav-item-font-family);
    font-weight: var(--nav-item-font-weight);
    font-size: var(--nav-item-font-size);
    letter-spacing: var(--nav-item-letter-spacing);
  }
  
```
<br>

## 7. Align center logo and navbar
n 7-styles.css, inside the /* Header section, in the header-container class selector, set the property align-items to center.
```
  /* Header
      ============================= */
  
  .header {
    padding: var(--header-padding);
         position: relative;
         z-index: 3;
         background: transparent;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
```
<br>

## 8. Simplify the hero banner
In 8-styles.cssInside the /* Section HERO section
- In the selector targeting section-inner class in section-hero class, remove the padding and replace with
 - Property: display, Value: flex
 - Property: flex-direction, Value: column
 - Property: align-items, Value: flex-start
 - Property: justify-content, Value: center
 - Property: min-height, Value: 50vh
 ```
  /* Section HERO
      ============================= */
  
  .section-hero {
    background-position: 75% 0;
    background-repeat: no-repeat;
    background-size: 90rem auto;
    background-color: #010101;
  }
  
  .section-hero .section-title {
    margin-bottom: 5rem;
  }
  
  .section-hero .section-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 50vh;
  }
  
 ```
 <br>

## 9. Better alignment about us
In 9-styles.css, after the /* Section SERVICES section, create a /* Section ABOUT US section. Inside that new section, target all classes that begin with col- inside section-about-us class
- Property: align-self, Value: center
```
  /* Section ABOUT US ============================= */
    .section-about-us [class^="col-"] {
        align-self: center;
    }
```