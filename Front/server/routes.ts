// @ts-ignore
const routes = require('next-routes')

const route = routes();
// Name   Page      Pattern
module.exports = route
    .add({name: 'index', pattern: '/', page: 'index'})
    .add("blog", "/blog/:id/:slug")
    .add("snippet", "/snippet/:id/:slug")
    .add("tag", "/tag/:tag", "index")
    .add("snippet-tag", "/snippet-tag/:tag", "snippets")
    .add("list-tag", "/list/:tag", "list")
    .add("new", "/new")
    .add("new-snippet", "/new-snippet")
    .add("dashboard", "/dashboard")
    .add("dashboard-list", "/dashboard/list")
    .add("dashboard-edit", "/dashboard/edit/:id")
    .add("dashboard-edit-snippet", "/dashboard/snippet/edit/:id")
    .add("dashboard-snippets", "/dashboard/snippets")
    .add("list", "/list")
    .add("snippets", "/snippets", "snippets");
