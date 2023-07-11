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

11. styleguide
- Create section with all header
```
<main>
    <section>
        <header>
            <h2>Headings</h2>
        </header>
        <h1>Heading level 1</h1>
        <h2>Heading level 2</h2>
        <h3>Heading level 3</h3>
        <h4>Heading level 4</h4>
        <h5>Heading level 5</h5>
        <h6>Heading level 6</h6>
    </section>
</main>
```

12. Paragraphs
- Add paragraphs with <p></p>
```
<main>
    <section>
        <h2>Contact</h2>
        <p>We like to know new people</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Id Sextilius factum negabat. Quo tandem modo?
          At eum nihili facit; Quae contraria sunt his, malane?</p>
    </section>
</main>
```

13. styleguide paragraphs
- Use header and paragraphs with style
```
<section>
    <header>
        <h2>Paragraph</h2>
    </header>
    <h2>Heading with a subtitle</h2>
    <p>This is my subtitle</p>
    <p>Nunc lacinia ante nunc ac lobortis.
     Interdum adipiscing gravida odio porttitor
     sem non mi integer non faucibus ornare mi ut
     ante amet placerat aliquet. Volutpat eu sed 
     ante lacinia sapien lorem accumsan varius montes 
     viverra nibh in adipiscing blandit tempus accumsan.</p>
</section>
```

14. Span
- Add span before nav
```
<body>
    <header>
        <span>Techium</span>
        <nav></nav>
    </header>
</body>
```

15. Div
- Add div for Wrap the contents
```
<body>
    <div>
        <footer>Footer</footer>
    </div>
</body>
```

16. Structure your sections
- Add div in div 
```
<section>
    <div>
        <header>
            <h2>Services</h2>
            <p>We work with you</p>
        </header>
        <div>
            <h3>Design & Concept</h3>
            <h3>Digital Strategy</h3>
            <h3>Content Strategy</h3>
            <h3>UX Design</h3>
            <h3>Web Development</h3>
            <h3>Social Media</h3>
        </div>
    </div>
</section>
```

17. Comments
- Add comments to help scanning code. Use :
```
<!-- Services section -->
```

18. link your logo
- Wrap the span with a link <a></a> in the root with "/"
```
 <div>
    <a href="/"><span>Techium</span></a>
</div>
```

20. Add links
- Create an anchor
```
<a href="#services">Services</a>
```

21. Add social media links
- Creat link Facebook, Twitter, Instagram
```
<a href="https://www.facebook.com/HolbertonSchool/">Facebook</a>
<a href="https://twitter.com/holbertonschool">Twitter</a>
<a href="https://www.instagram.com/holbertonschool/">Inst</a>
```

22. "Button" links
- Creat link button on text :
```
<a href="contact.html">Get in touch</a>
```

23. Services, Works, Latest news links
- Add link in h3 header.
```
<h3><a href="#">Design & Concept</a></h3>
```

24. List the links
- Add unorded list.
```
<ul>
    <li><a href="https://www.facebook.com/HolbertonSchool/">Facebook</a></li>        <li><a href="https://twitter.com/holbertonschool">Twitter</a></li>
    <li><a href="https://www.instagram.com/holbertonschool/">Instagram</a></li>
</ul>
```

25. Secondary navigation menu
- Create new div in div
```
<div>
    <div>
        <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
        </ul>
    </div>
</div>
```

26. Examples of lists for the styleguide
- Creat unordered list
```
<div>
    <ul>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul>
</div>
```

- Creat ordered list
```
<div>
    <ol>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ol>
</div>
```

- Creat definition list
```
<div>
    <dl>
        <dt>title</dt>
        <dd>defiinition</dd>
        <dt>title</dt>
        <dd>defiinition</dd>
    </dl>
</div>
```

27. Separate content
- Add horizontal rules
```
<hr>
<p>
    © 2020 Techium, made with ♥ by students at Holberton School.
</p>
```

28. Horizontal rule example
- Add Horizontal rule in div
```
<div>
    <hr>
</div>
```

29. Client quotes
- Create bloquenote and cite author.
```
<article>
    <blockquote>
        <p>
            I love your system. Definitely worth the investment. I'd be lost without Techium company.
        </p>
        <cite>Sven H.</cite>
    </blockquote>
</article>
```

30. Examples of quotes
- Create an inline quote
```
<div>
    <h3>Inline quote</h3>
    <q>Stay hungry. Stay foolish.</q>
</div>
```

- Create a multiline quote
```
<div>
    <h3>Blockquote</h3>
    <blockquote>
        <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
        <cite>Kanye West, Musician</cite>
    </blockquote>
</div>
```

31. Address and latest news authors
- Add an address.
```
<address>234 Washington Street (line-break) Urbana, Illinois</address>
```

- Add an name in small.
```
<small>By Frances J.</small>
```

32. Typography section - using the correct tags
- highlighted tag
```
<mark>highlighted</mark>
```