# Advanced CSS

## Tasks

1. Effortless transitions when scrolling
- When scrolling is triggered on the html element itself, we’d like the behavior of the scroll to be as fluid as possible.
```
html {
    scroll-behavior: smooth;
  }
```

2. Do you know your color values?
- Add foreground color to something
```
something {
    color: #FFFFFF;
}
```

- select all anchor element with "a"

- select element with class use "." before name.

3. Reuse and repeat. A programmer's life should be simple with variables
- Define root element with :root{}

- Define variable color in root
```
:root{
    --color-primary: #d73953;
    --text-color: var(--color-black)
   }
```

- Use this var in another element
```
  .section-tagline {
    color: var(--color-primary);
  }
```

4. Variables for storing certain font types
- Custom font-family propreties
```
:root {
--font-family-base: Helvetica Neue, Helvetica, Arial, sans-serif;
--font-family-title: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
```

5. Variables for the font size
- Custom font size.
```
:root {
    --font-size-xx-large: 4.8rem;
  }
```

6. Variables for the font-weight
- Custom font-weight
```
:root{
    --font-weight-regular: 400;
    --font-weight-bold: 700;
  }
```

7. Integrating Google Fonts into the CSS file
- Add Open Sans and Raleway in first choice
```
--font-family-base: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
--font-family-title: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
```

8. Defining line heights
- Create line height custom
```
:root{
    --line-height-base: 1.5;
    --line-height-big: 1.8;
}
```

9. Links are decorated by default, time to remove them
- Style the anchor elements so the text isn’t decorated with anything
```
a{
    text-decoration: none;
}
```

10. Centering the section titles
```
:root{
      --section-header-align: center;
}
```

11. Add more styles to the section tagline
- New section transform
```
:root{
    --section-tagline-transform: uppercase;
}
```

12. Adding more styling to the section title
```
.section-title{
    font-family: var(--font-size-large);
    font-size: var(--font-size-xx-large);
    font-weight: var(--font-weight-bold);
    margin: var(--section-title-margin);
    color: var(--section-title-color);
```

13. Pseudo Classes
```
a:link {
    text-decoration: none;
}
a:visited{
    font-style: italic;
}
a:hover{
    text-decoration: underline;
}
a:active{
    background-color: var(--color-light-grey);
}
```

14. Resetting the CSS stylesheet for browser consistency
link : https://intranet.hbtn.io/rltoken/SE65V_9HBDJxYAuoJfK2YQ

15. Add universal box-sizing
-  add a universal box sizing rule
```
*, *::before, *::after{
    box-sizing: border-box;
}
```

16. Styling the container
- Taget the container class
```
.container {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
}
```

17. Adding padding to sections
- Create properties for custom padding
```
:root{
    --section-padding: 5rem 0;
    --section-header-padding: 0 0 3rem;
    --section-body-padding: 0 0 3rem;
    --section-footer-padding: 3rem 0 0;
    --section-footer-align: center;
    --footer-padding: 5rem 0 1rem;
}
```

18. Customizing the navbar
- Creat custom navbar
```
:root{
   --nav-item-font-family: var(--font-family-title);
    --nav-item-font-weight: var(--font-weight-bold);
    --nav-item-font-size: var(--font-size-medium);
    --nav-item-letter-spacing: 0.04rem;
    --nav-item-display: inline-block;
    --nav-item-margin: 0 0 3rem 0;
    --nav-item-link-hover: var(--color-primary)
}
```

19.  Grid styling and custom variables
- Custom grid and vairables
```
ul.row {
    margin: 0;
    padding: 0;
    list-style: none;
}
.col-1-3{
    width: 33.33%;
    float: left;
    padding: 0.5rem;
}
.footer ul{
    text-align: right;
}
```

20. Clear the context of the grid
- Write a CSS rule that creates a new row after each instance of the class row
```
.row::after {
    content: "";
    display: table;
    clear: both;
  }
```

21. Simplify the col- selector
- Select all classes that start with col-
```
[class^="col-"] {
    float: left;
    padding: 0.5rem;
}
```

22. Add a dark theme to sections
- Style the data-section-theme=“dark” 
```
[data-section-theme="dark"] {
    --text-color: var(--color-white);
    --section-title-color: var(--color-white);
    background-color: var(--color-black);
}
```

23. Fix issues for dark theme
- Set footer-adress, social link and svg children in social link
```
.footer-address{
    color: var(--text-color);
}
.social-link{
    display: block;
}
.social-link > svg{
    fill: var(--text-color);
}
```

24. Add background and hover state to services
```
.card-service .card-title{
    margin: 0;
}
.card-service a{
    display: block;
    padding: 2rem;
    background-color: var(--color-light-grey);
}
.card-service a:hover{
    color: var(--color-white);
    background-color: var(--color-primary);
    text-decoration: none;
}
```

