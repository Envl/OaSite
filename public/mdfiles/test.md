# Live demo

Changes are automatically rendered as you type.

## Table of Contents

- Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
- Renders actual, "native" React DOM elements
- Allows you to escape or skip HTML (try toggling the checkboxes above)
- If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!

## HTML block below

>This blockquote will change based on the HTML settings above.

## How about some code?

```js
var React = require('react')
var Markdown = require('react-markdown')

React.render(
  <Markdown source='# Your markdown here' />,
  document.getElementById('content'),
)
```

<iframe width="1447" height="523" src="https://www.youtube.com/embed/ay87rjPXSaI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Pretty neat, eh?

## Tables?

| Featre     | Support |
| ---------- | ------- |
| tables ✔ |
| alignment  | ✔     |
| wewt       | ✔     |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---

A component by [Espen Hovlandsdal](https://espen.codes/)
