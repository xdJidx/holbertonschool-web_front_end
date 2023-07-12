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