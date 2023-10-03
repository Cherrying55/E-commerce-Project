# Starr

Fully functional clothing store application with a shopping bag, a wishing list and account information. <br>
Inspirations: Shein, Sacai, Undercover, Yohji Yamamoto, Aliexpress, Antix

<img src="https://i.imgur.com/LjbFnEp.png" />

<hr>
Back-end: https://github.com/GustavoFLacerda/starr-backend

<hr>

<h1> Instructions </h1>

<ul>
  <li>Install all dependencies using npm install</li>
  <li>Run npm run start in the bash</li>
</ul>

<hr>

<h1> Docker Instructions </h1>

<ul>
  <li>docker pull node:alpine</li>
  <li>docker pull nginx:alpine</li>
  <li>docker pull cherrying/starrfront OR docker build -t cherrying/starfront .</li>
  <li>docker run -dit -p 8080:80 --name starrfront starrfront</li>
  <li>Access localhost:8080</li>
</ul>

<hr>

<h1>Technologies used</h1>
<ul>
  <li>ReactJS</li>
  <li>Styled Components</li>
  <li>Create React App</li>
  <li>React Helmet</li>
  <li>React Router</li>
  <li>Redux.js</li>
  <li>Docker</li>
</ul>

<hr>

<br>
<h1>Features</h1>
<h3>Accounts</h3>
<ul>
  <li>User account system with access tokenization on every relevant page</li>
  <li>Passwords can be changed and retired ones are stored</li>
  <li>Multiple billing addresses can be created, updated and deleted</li>
</ul>
<br>
<h3>Credit Cards</h3>
<ul>
  <li>Credit card system with access tokenization on every relevant page</li>
  <li>Credit cards can be added, acessed, updated and deleted</li>
</ul>
<br>
<h3>Orders</h3>
<ul>
  <li>Orders and their status can be found in the user profile page</li>
</ul>
<br>
<h3>Wishlist and Cart</h3>
<ul>
  <li>Cart and wishlist systems with necessary authentication on every route</li>
  <li>Items can be added and removed from the shopping cart and wishlist</li>
</ul>
<br>
<h3>Products</h3>
<ul>
  <li>Products have distinct categories</li>
  <li>Each product has its own page with colors, sizes and the desired quantity</li>
</ul>
<br>
<h3>Onpage SEO</h3>
<ul>
  <li>Relevant meta tags</li>
  <li>Semantical HTML</li>
  <li>Each page has its own meta tags through React Helmet</li>
  <li>Sitemap and Robots.txt</li>
</ul>
<br>
<h3>Security</h3>
<ul>
  <li>Content security policy to prevent XSS is implemented in the main document head tag</li>
  <li>This website follows OWASP main guidelines</li>
</ul>
<br>
<h2>Coming soon</h2>
<ul>
  <li>Color and size selection in the product page</li>
  <li>Service worker for cached content</li>
  <li>NextJS sitemap implementation</li>
</ul>


