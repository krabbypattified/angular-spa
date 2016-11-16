# Gabe's Angular-SPA Boilerplate

## Instructions:

1. Run `npm install`. Then run `gulp`.

1. Make your pages inside app/pages/[your-page]. Add 3 files:
    --yourStyles.styl
    --yourController.js
    --yourView.html

2. For each page in app.route.js:
```javascript
.when('/', {
  templateUrl: 'app/pages/[your-page]/view.html',
  controller: '[YourCtrl]'
})
```

3. Edit ctrl.js & view.html as if it were a regular Angular app!

4. To modify default root view (i.e. nav/footer), edit root-view files
   (To customize nav/footer via pages views, do something like `$scope.nav.color = blue;` to access parent scope)

5. For a sandbox, just edit the 'app/sandbox' files. Modify app.route.js to your liking.
