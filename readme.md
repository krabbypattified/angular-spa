# Gabe's Angular-SPA Boilerplate

## Instructions:
1. Make your pages inside app/pages. (with ctrl.js & view.html)
2. Import your ctrl.js's into index.kit
3. For each page in app.route.js:
```javascript
.when('/', {
  templateUrl: 'app/pages/news/view.html',
  controller: 'newsCtrl'
})
```
4. Edit ctrl.js & view.html as if it were a regular Angular app!
5. If you want a sandbox, just edit the 'sandbox' folder's ctrl.js and view.html. Then navigate to url: /sandbox
