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
