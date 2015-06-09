# underscore-template-loader

A webpack loader for underscore templates. It converts html files that are underscore templates into the template function. The underscore is required into the scope of the template with `require("underscore")`.

Configure a webpack alias for easier use, e.g.

```
...
module: {
  alias: {
    "tpl": "underscore-template-loader"
  }
}

```
var template = require("tpl!./templates/coin.html");

template({
  name: "doge"
});

```