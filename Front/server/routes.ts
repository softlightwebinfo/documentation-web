const routes = require('next-routes')

const route = routes();
// Name   Page      Pattern
module.exports = route
    .add({name: 'index', pattern: '/', page: 'index'})
    .add("blog", "/blog/:id/:slug")
    .add("tag", "/tag/:tag", "index")
    .add("list-tag", "/list/:tag", "list")
    .add("new", "/new")
    .add("list", "/list");
