Server-Side Rendering in react ?
Normally, when you use React, your app runs in the browser. The browser downloads the JavaScript code, runs it, and then shows the content on the screen. This is called Client-Side Rendering (CSR).
With Server-Side Rendering (SSR), the server does the work of creating the HTML for your app before sending it to the browser. So, when the browser gets the page, it already has the content ready to display.

Why is SSR useful?
Faster Initial Load: The browser doesn’t have to wait for JavaScript to load and run. It gets the HTML directly, so the page shows up faster.
Better for SEO: Search engines can read the HTML content more easily because it’s already there (instead of waiting for JavaScript to run).
Good for Slow Devices: If a user’s device is slow, SSR helps because the server does the heavy lifting.

How does SSR work?
Step 1: When a user requests a page, the server runs the React app and creates the HTML for that page.
Step 2: The server sends this HTML to the browser.
Step 3: The browser shows the HTML immediately (fast load).
Step 4: The browser then downloads the JavaScript and “hydrates” the page (makes it interactive).

