# Sass & Scss

## Introduction
Sass and SCSS are powerful tools for front-end developers, offering advanced features for writing CSS more efficiently, cleanly, and modularly. Choosing between Sass and SCSS often depends on personal preferences and the development team, but SCSS is often preferred due to its similarity to standard CSS.<br>

## Install Sass/Scss on Ubuntu 18.04 LTS
```
$ sudo apt-get install -y ruby2.5 ruby2.5-dev
$ sudo apt-get install ubuntu-dev-tools
$ gem install sass -v 3.7.4
$ sass --version
Ruby Sass 3.7.4
```

## 0. Always debugging!
Write a Sass file that prints Hello world in the debug output.<br>
```
/* 0. Always debugging! */
@debug "Hello world";

```
<br>

## 1. Color variable
Write a Sass file that assigns the text color #3D3D3D to the HTML tags body and p.<br>

You must use a Sass variable<br>

To declare a variable in Sass, use $ + name_variable.
```
/* 1. Color variable */

$text-color: #3D3D3D;

body {
    color: $text-color;
}

p {
    color: $text-color;
}
```
<br>

## 2. Colors
Write a Sass file that assigns:
- The text color #3D3D3D to the HTML tags body and p
- The background color #6D6D6D to the HTML tags body and h2
- You must use 2 Sass variables

Create a new variable and use it in good tags.
```
$text-color: #3D3D3D;
$background-color: #6D6D6D;

body {
    color: $text-color;
    background-color: $background-color;
}

p {
    color: $text-color;
}

h2 {
    background-color: $background-color;
}
```
<br>

## 3. Nested tag
Write a Sass file that assigns:
- No margin or padding in body tags
- Margin 10px to all of the p tags inside body tags
- You must use nested declarations

```
body {
    margin: 0px;
    padding: 0px;

    p {
        margin: 10px;
    }
}
```
<br>

## 4. Nested class
Write a Sass file that assigns:
- Text color #3D3D3D to elements inside body tags
- Text color #FF0000 to any elements of class .red inside body tags
- You must use nested declarations
```
body {
    color: #3D3D3D;
    .red {
        color: #FF0000;
    }
}

```
<br>

## 5. Nested child
Write a Sass file that assigns:

- Text color #3D3D3D to elements inside body tags
- Text color #FF0000 to any elements of class .red that are the first children of the body
- You must use nested declarations

To declare all element of class .red that are the first children of the body you must use : ">"
```
body {
    color: #3D3D3D;

    > .red {
        color: #FF0000;
    }
}

```
<br>

## 6. Nested hover
Write a Sass file that assigns:
- Text color #FF0000 to button tags
- When the user hovers over button tags, text color should change to #00FF00
- You must use nested declarations
```
button {
    color: #FF0000;

    &:hover {
        color: #00FF00;
    }
}

```
<br>

## 7. Nested and nested again
Write a Sass file that assigns:

- Font size 14px to all body tags
- Font size 16px to all h1 tags inside body tags
- Font size 12px to h1 tags of class .smaller inside body tags
- You must use nested declarations

Don't forget to add '&' before the tag class.
```
body {
    font-size: 14px;
    h1 {
        font-size: 16 px;
        &.smaller {
            font-size: 12px;
        }
    }
}

```
<br>

## 8. Margin mixin
Write a Sass file that assigns:

- Margin left and right at 10px to body tags
- Margin left and right at 15px to div tags
- You must use a mixin

Maxin is like a function, you declare with @mixin + name_of_function($var1, $var2).
```
@mixin marginLR($left, $right) {
    margin-left: $left;
    margin-right: $right;
}

body {
    @include marginLR(10px, 10px);
}

div {
    @include marginLR(15px, 15px);
}

```
<br>

## 9. Extended
Write a Sass file that assigns:

- Font size 12px to all tags of class .info
- Text color #00FF00 to all tags of class .success and extend style of the class .info
- Text color #FF0000 to all tags of class .warning and extend style of the class .info

To extend class and add all declaration in another, use @extend + name_of_tag.
```
.info {
  font-size: 12px;
}

.success {
  @extend .info;
  color: #00FF00;
}

.warning {
  @extend .info;
  color: #FF0000;
}
```
<br>
