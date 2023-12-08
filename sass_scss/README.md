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
