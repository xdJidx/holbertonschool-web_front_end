# Developer tools
This is a Holberton school project for full stack specialisation's students.

## 0. Responsive device
Go to https://dev-tools.hbtn.info/<br>

Take a screenshot of the website using the device toolbar Choose iPhone X and show the size in your screenshot (selected device or size in pixel of the rendering)<br>

For this :
- Open the developer tools: Right-click on the web page, select 'Inspect'.
- Click on the icon resembling a phone/tablet in the developer tools toolbar to activate the device view mode.
- At the top left of the developer tools, you'll see a dropdown with devices listed (like 'Responsive', 'iPhone X', etc.). Choose 'iPhone X'.
- Take a screenshot.
<br>

## 1. Change the background color
Go to https://dev-tools.hbtn.info/<br>

Change the background-color of the body to use #4233bd Take a screenshot of the PORTFOLIO section<br>

For this :
- Open the developer tools: Right-click on the web page, select 'Inspect'.
- In "Styles" search background-color and take this code in : #4233bd
- Take a screenshot.
<br>

## 2. Force element state
Go to https://dev-tools.hbtn.info/<br>

Force the hover state of the “cake” block in the section Portfolio Take a screenshot of it<br>

For this :
- Open the developer tools: Right-click on the web page, select 'Inspect'.
- In "Styles", click on ':hov' and select ':hover'.
- Take a screenshot.
<br>

## 3. Copy all the styles of the button
Go to https://dev-tools.hbtn.info/

Select the Download me! and copy all the CSS styling that is applied on this button.

Your answer file must contain all CSS styling one per line like this example:
```
$ head -2 3-button_styles
border-radius: 1px;
color: #FF00FF;
$
```
For this :
- Open the developer tools: Right-click on the button, select 'Inspect'.
- In "Element", click right on the name of the class button and go on "Copier" -> "Copier les styles".
- "Ctrl + v" on your reponse's file.
<br>

## 4. Change button styles
Go to https://dev-tools.hbtn.info/<br>

- All primary buttons (btn-primary) should have the #0080ee color as a background color
- All outlined buttons light (btn-outline-light) should have #0020aa for the text color
- Screenshot all buttons that changed and merge it to one image


For this :
- Open the developer tools: Right-click on the site web, select 'Inspect'.
- "Ctrl  + F" to open search by name, and write btn-primary.
- In "Style" section change the background color by #0080ee
- Do the same for other buttons.
- Take a screenshot.
<br>

## 5. Remove part of the website
Go to https://dev-tools.hbtn.info/<br>

Remove the div of the “cake” box in the section Portfolio<br>

For this :
- Open the developer tools: Right-click on the site web, select 'Inspect'.
- Click right on the element you want delete
- Click on "suprrimer l'élement"
- Take a screenshot
<br>

## 6. Where is it coming from?
Go to https://dev-tools.hbtn.info/<br>

- On the right panel, click on the Computed tab
- Then, select the h2 with the text ABOUT
- Search for margin-bottom
- Which file is coming from that declaration?

That declaration come to : freelancer.css
<br>


## 7. How many listeners
Go to https://dev-tools.hbtn.info/<br>

How many times click events are referenced in JavaScript files?<br>

For this :
- Open the developer tools: Right-click on the site web, select 'Inspect'.
- On "Sources", open js file and search "click"
- You can see all the correspondance with this word.

I can see on the files : 2 + 2 + 3 = 7 time
<br>

## 8. What is the HSL code
Go to https://dev-tools.hbtn.info/<br>

Select the primary button “Send”<br>

What is the equivalent value of the hexadecimal background-color, in HSL?<br>

(format of your answer should be: hsl(<VALUES>);, example: hsl(241, 23%, 24%); following by a new line)<br>

For this : 
- Open the developer tools: Right-click on the button "Send", select 'Inspect'.
- Search background color and click on color pannel.
- You can change the number type on this and select hsl format.
<br>

## 9. The max-width of the container
Go to https://dev-tools.hbtn.info/<br>

What is the max-width for the first .container in the section “About”? (your browser width must be between 1250px and 1440px and with a zoom at 100%)<br>

For this :
- Open the developer tools: Right-click on the container, select 'Inspect'.
- You can see in Style the max-widht
<br>

## 10. Moving around
Go to https://dev-tools.hbtn.info/<br>

Switch the section “About” and “Portfolio”<br>

For this :<br>
After inspecting the page, click and hold the left mouse button, then drag the 'About' section above the 'Portfolio' section
<br>

## 11. Coverage
Go to https://dev-tools.hbtn.info/<br>

How many bytes that freelancer.css covers?<br>

For this :
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In the Network tab, reload the page and navigate to the file.
- Hover over the size to see the resource size.
<br>

## 12. Emulate the print version of the webpage
Go to https://dev-tools.hbtn.info/<br>

Take a screenshot of the homepage, only emulation the CSS print version of the website.<br>

For this :
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In windows, use Ctrl + Shift + P and search "Rendu"
- Change in "Emuler le type de support CSS" in "Imprimer"
- Take a screenshot
<br>

## 13. Using the console
Go to https://dev-tools.hbtn.info/<br>

Select the Avatar image in the header and type $0 in the console. Enter.<br>

What does it return?<br>

It return : <img class="masthead-avatar mb-5" src="img/avataaars.svg" alt="avatar">
<br>

## 14. Write code in the console
Go to https://dev-tools.hbtn.info/<br>

Write in the console console.log(document.title), what is returned?<br>

He returned the doc title ... <br>

## 15. Holberton web framework
Go to https://dev-tools.hbtn.info/<br>

Which front-end framework could we guess this page is using?<br>

It's Bootstrap, you can see the name in comentary on Top of CSS page<br>

## 16. Homepage weight
Go to https://dev-tools.hbtn.info/<br>

What is the total weight of the page (with all the elements)?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In "Ressource", refresh web page and see on the bottom the ressource the page need.
<br>

## 17. Number of requests
Go to https://dev-tools.hbtn.info/<br>

What is the number of requests done when accessing this page?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In "Ressource", refresh web page and see on the bottom the request.
<br>

## 18. Number of CSS files
Go to https://dev-tools.hbtn.info/<br>

How many CSS resources are loaded on this page?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In "Ressource", refresh web page and select in filtrer "CSS"
- See on the bottom the number.
<br>

## 19. Number of images
Go to https://dev-tools.hbtn.info/<br>

How many image resources are loaded on this page?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In "Ressource", refresh web page and select in filtrer "Image"
- See on the bottom the number.
<br>

## 20. Favicon image type
Go to https://dev-tools.hbtn.info/<br>

What is the type value of the favicon image?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In "Ressource", refresh web page and search the file favicon in list.
- You can see the type in column type.
<br>

## 21. Font library
Go to https://dev-tools.hbtn.info/<br>

Holberton School website uses a font library for their icons, which one is it?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In "Styles", search font-family
<br>

## 22. XHR calls
Go to https://dev-tools.hbtn.info/<br>

What is the name of the resource that generates 1 XHR calls?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- In "Ressource", refresh web page and search the file with xhr type.
- You can see the name of the ressource.
<br>

## 23. Audits panel
Go to https://dev-tools.hbtn.info/<br>

What is the notation for Performance (for desktop mode and no throttling - also called Lighthouse)?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- Open Lighthouse module and start test for webpage.
- Take screenshot.
<br>

## 24. Static assets
Go to https://dev-tools.hbtn.info/<br>

How many static assets need a better cache policy?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- Open Lighthouse module and start test for webpage.
- In "Diagnostic", you can see : Diffusez des éléments statiques grâce à des règles de cache efficaces.
- Take a screenshot.
<br>

## 25. Accessibility
Go to https://dev-tools.hbtn.info/<br>

When you run an accessibility audit, what is the contrast issue?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- Open Lighthouse module and start test for webpage.
- In "Contaste", you can see : les couleurs d'arrière plan et de premier plan ne sont pas suffisamment contrastées.
<br>

## 26. No alt
Go to https://dev-tools.hbtn.info/<br>

Which classes are on the images that have no alt attribute?<br>

For this : 
- Open the developer tools: Right-click on the webpage, select 'Inspect'.
- Open Lighthouse module and start test for webpage.
- In "BONNES PRATIQUES RELATIVES AU CONTENU", you have this category : Des éléments d'image n'ont pas d'attribut alt.
<br>

## 27. Best practices
Go to https://dev-tools.hbtn.info/<br>

Which attribute is missing on all the links with the target _blank?<br>

When target="_blank" is used, it instructs the browser to open the link in a new window or tab. However, this practice can sometimes pose security issues, especially concerning the Same Origin Policy. To mitigate these security risks, it is recommended to add the <strong>rel="noopener"</strong> or <strong>rel="noreferrer"</strong> attribute for target="_blank" links to reduce potential risks associated with "window.opener" type attacks.
<br>
