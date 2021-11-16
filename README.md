### This repo is created to reproduce a problem with conditional rendering inside `_document`

Run `yarn watch` and go to `http://localhost:3000/?error=true` to see the problem
### Key points
1. A custom server should handle a specific path with `app.render()`
2. The `_document` component should render a different component based on the `query` passed to `app.render()`
