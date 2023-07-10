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
