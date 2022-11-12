# Configure your local setup

[React Docs](https://reactjs.org/docs/cdn-links.html)

1. Create index.html, index.css and index.js
2. Link the css file to your html
3. Link the cdn files to your html

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

```
4. Link the babel udn script

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
5. Link yout js file with babel (type="text/babel")
```html
<script src="./index.js" type="text/babel"></script>
```
