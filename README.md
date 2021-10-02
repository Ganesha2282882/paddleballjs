# What is `paddleballjs`
`paddleballjs` is a lightweight clone of React. I built it because I will never use React because I'm put off by the fact that it's made by Facebook.
## Name origin
It's from an [NPM expansion](https://github.com/npm/npm-expansions/blob/HEAD/expansions.txt). The full expansion is `November's Paddleball Marathon`.
## Usage
Just use `create-paddleball-app` to scaffold, and then edit index.jsx. To add pages, copy the `buble` line in `Makefile` and change the filename. Then add a page with this:
```html
<!DOCTYPE html>
<html>
<body>
    <script src="paddleball.js"></script>
    <script src="<YOUR JSX FILE>.js" defer></script>
    <div id="root"></div>
    </body>
</html>
```
After that, add a JSX file with this:
```jsx
var main = <div>
    <h1>I'm pasted.</h1>
</div>
PbDOM.render(main, document.getElementById("root"));
```
