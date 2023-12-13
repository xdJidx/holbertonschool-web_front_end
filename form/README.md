# Forms

Harry, let's take Hogwartss online !<br>
Can you build our Admission Form in HTLM ?<br>

## 0. basic comment structure
In your 01-article.html file
- Sibling to the div class="post", create a new section with the class post-comments
- Inside the section create an header
 - In the header create a heading level 2 with class section-title and text: Leave a comment
 - under the level 2 heading create a paragraph with text: All fields are required.
- Create a form siblings to the header
 - Action: #
 - Method: post
```
<section class="post-comments">
  <header>
      <h2 class="section-title">Leave a comment</h2>
      <p>All fields are required.</p>
  </header>
  <form action="#" method="post"></form>
</section>
```
In your 01-styles.css file<br>
After the Tag list styles, create a new comment
- Target post-comments class
 - Property: width, Value: 80%
 - Property: margin, Value: 10rem 0 0 auto
 - Property: padding-left, Value: 7rem
- Target the section-title class inside the post-comments class
 - Property: font-variant, Value: small-caps
- Add a new comment section
- Target all form
 - Property: display, Value: flex
 - Property: flex-direction, Value: column
 - Property: padding, Value: 1rem 0
 - Property: margin, Value: 0
```
/*** FORM ***/
/* Comment section
    ============================= */
.post-comments {
    width: 80%;
    margin: 10rem 0 0 auto;
    padding-left: 7rem;
}

.post-comments .section-title {
    font-variant: small-caps;
}

/* Basic form
    ============================= */
form {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin: 0;
}
```
<br>

## 1. more comment basic structure
From 01-article.html, create 02-article.html
- In the form in the comment section
 - Create a first fieldset with a legend that has the text Your personal information and the class visually-hidden
  - In the fieldset create a first div with the classes form-group and col-1-2
  - Sibling to the first div, create a second div with the classes form-group and col-1-2
  - Sibling to the 2 divs create a third div with the classes form-group and col-2-3
 - Sibling to the first fieldset, create a second fieldset with a legend that has the text Your comment and the class visually-hidden
  - In the second fieldset create a first div with the classes form-group and col-2-3
  - Sibling to the first div create a second div with the classes form-group and col-2-3
  - Sibling to the 2 divs create a third div with the class form-group
```
<form action="#" method="post">
    <fieldset>
        <legend class="visually-hidden">Your personal information</legend>
        <div class="form-group col-1-2"></div>
        <div class="form-group col-1-2"></div>
        <div class="form-group col-2-3"></div>
    </fieldset>
    <fieldset>
        <legend class="visually-hidden">Your comment</legend>
        <div class="form-group col-2-3"></div>
        <div class="form-group col-2-3"></div>
        <div class="form-group"></div>
    </fieldset>
</form>
```
From 01-styles.css, create 02-styles.css
- Target all fieldset and set the following rules
 - flex display
 - direction of flex is column
 - justify the content at flex-start
 - no border
 - 0 0 2rem padding
Final rendering (same as previously because legend tags are hidden by default)<br>
```
fieldset {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 2rem;
}
```
<br>
