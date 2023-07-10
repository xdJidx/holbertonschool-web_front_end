# Advanced HTML

## Tasks

0. Create your first webpage
- Define code type :
```
<!DOCTYPE html>
    <!-- Always in first line -->
```
- open and close a html tag
```
<html>
 
</html>
```
- Add the language tag and add the direction tag
```
<html lang="en" dir="ltr">
```

When you open your page on browser the page is blank

1. Structure your webpage
- Add in html tags head and body tags
```
<html>

<head>
</head>

<body>
</body>

</html>
```

2. The head - meta charset, viewport, title, description, favicons
### Meta charset
- Add meta on head and charset attribute value utf-8
```
<head>
    <meta charset="UTF-8">
</head>
```
### Viewpor
- Add a meta tag inside the head
```
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
</head>
```
### Title
- Add the title tag just after the meta viewport with value: Homepage - Techium
```
<head>
    <meta>
    <title>Homepage - Techium</title>
</head>
```
### Description
- Add a meta tag inside the head section
```
<head>
    <meta name="description" content="Techium is a digital agency">
</head>
```
### Favicons
- Add 2 pictures link in head
```
<head>
    <link rel="icon" type="image/x-icon" href="./favicon.ico">
    <link rel="icon" type="image/png" href="./favicon.png">
</head>
```

3. Simple header, main, footer
### Header
- Creat header in body tag
```
<body>
    <header>Header</header>
</body>
```
- Creat main after the header
```
<body>
    <main>Main content</main>
</body>
```
- Creat footer tag after the main
```
<body>
    <footer>Footer</footer>
</body>
```

4. Aside
- Add aside in main tags
```
<main>
    Main content
    <aside>Aside</aside>
</main>
```

5. Section
- Add section in your main tags
```
<main>
    <section>Hero section</section>
    <section>Services section</section>
    <section>Works section</section>
    <section>About section</section>
    <section>Latest news section</section>
    <section>Testimonials section</section>
    <section>Contact section</section>
</main>
```

6. Work, News, Testimonial articles
## Work articles
- Add 3 article tags in inside the section Works section
```
<section>
    Works section
    <article>Work 1</article>
    <article>Work 2</article>
    <article>Work 3</article>
</section>
```
Same for author section

7. Navigation
- Create the nav tag inside the header tag
```
<body>
    <header>
        <nav></nav>
    </header>
</body>
```

8. Level 1 headings
- Create lvl 1 heading inside main before sections
```
<main>
    <h1>Homepage</h1>
</main>
```

9. Level 2 headings
- Add h2 in your section title
```
<section>
        <h2>Contact</h2>
</section>
```

10. Level 3 headings
- Add h3 in section
```
<section>
    <h2>About Us</h2>
    <h3>Who are we</h3>
    <h3>Our culture</h3>
    <h3>How we work</h3>
</section>
```
