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

## 10. Creating an article by fixing issues and updating hero styles
In 10-styles.css, inside the /* Section HERO section<br>
After the .section-hero, add a new hero-homepage class selector (you will need to add that class later in your html files)<br>
Move all declarations inside section-hero inside the new hero-homepage class selector<br>
Inside section-hero class selector
- Property: position, Value: relative
- Property: margin-top, Value: -8.5rem
Below, target .section-body inside section-hero class
- Property: padding, Value: 10rem 4rem
Below, target .section-category inside section-hero class
- Property: color, Value: point to the variable color-white
- Property: text-transform, Value: uppercase
```
 /* Section HERO
      ============================= */
  
  .section-hero {
    position: relative;
    margin-top: -8.5rem;
  }
  
  .hero-homepage {
    background-image: url('../images/hero-homepage.jpg');
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
  
  .section-hero .section-body {
    padding: 10rem 4rem;
  }

  .section-hero .section-category {
    color: var(--color-white);
    text-transform: uppercase;
  }
```
<br>

## 11. Update the new hero banner
In 11-article.html in the Hero section
- Add the hero-article class on the header which is in main
- Add this background-image (pic-article-02.jpg) as an inline style still on the header
- Inside the section with section-inner class
  - Add a span with the class section-category and the text Digital Life
  - Below, add an h1 with the class section-title and the following text Ut alios omittam, hunc appello, quem ille unum secutus est

At the end of 11-styles.css, create a new comment section<br>
Target the hero-article class
- Property: background-size, Value: 150rem 100rem
- Property: background-position, Value: 50% 0

Target the before pseudo element of hero-article class
- Property: content, Value: empty
- Property: background, Value: rgba(0, 0, 0, 0.8)
- Property: position, Value: absolute
- Property: top, Value: 0
- Property: right, Value: 0
- Property: left, Value: 0
- Property: bottom, Value: 0
- Property: z-index, Value: 0

Target the section-inner class inside the hero-article class
- Property: text-align, Value: center
- Property: align-items, Value: center
- Property: min-height, Value: 40vh

Target the section-body class inside the hero-article class
- Property: position, Value: relative
- Property: padding, Value: 7rem 0 0
- Property: z-index, Value: 2
```
<!– Main –>
    <main>
      <!– Hero section –>
      <header class="section-hero hero-article" data-section-theme="dark" style="background-image: url('pic-article-02.jpg')">
        
        <div class="container">
          <div class="section-body">
            <section class="section-inner">
                <span class="section-category">Digital Life</span>
                <h1 class="section-title">Ut alios omittam, hunc appello, quem ille unum secutus est</h1>
            </section>
          </div>
        </div>
      </header>
    </main>

  /*** ARTICLE PAGE ***/
/* Section HERO (article)
      ============================= */
.hero-article {
    background-size: 150rem 100rem;
    background-position: 50% 0;
}

.hero-article ::before {
    content: '';
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
}

.hero-article .section-inner {
    text-align: center;
    align-items: center;
    min-height: 40vh;
}

.hero-article .section-body {
    position: relative;
    padding: 7rem 0 0;
    z-index: 2;
}

```
<br>

## 11. Update the new hero banner
In your 12-article.html file, in the Hero section
- After the header, create a div and set its class to main-article (this div will be siblings with the Hero section header)
- Create a div inside the main-article div and set the class to container
- Create a div with the class post inside the container div
- Inside the post div:
 - Create a new article with the class post-content
 - Below the post-content article, add the comment <!-- Aside section -->
 - Sibling to the post-content article and after the comment, create an aside with the class post-aside
 - Inside post-aside aside, create 2 divs:
  - The first with the class post-meta
  - The second with the class post-share

In your 12-styles.css:
- Target the main-article class
 - Property: padding, Value: 5rem 0
 - Add the below separator comment
- Target the post class
 - Property: display, Value: flex
- Target the post-content class
 - Property: width, Value: 100%
- Target the post-aside class
 - Property: order, Value: -1
 - Property: min-width, Value: 20%
```
<div class="main-article">
        <div class="container">
            <div class="post">
                <article class="post-content">
                    <!-- Aside section -->
                    <aside class="post-aside">
                        <div class="post-meta">

                        </div>
                        <div class="post-share">

                        </div>
                    </aside>
                </article>
            </div>
        </div>
      </div>


.main-article {
    padding: 5rem 0;
}
/* Post
    ============================= */
.post {
    display: flex;
}

.post-content {
    width: 100%;
}

.post-aside {
    order: -1;
    min-width: 20%;
}
```
<br>
