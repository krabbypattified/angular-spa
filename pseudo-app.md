<!--
TODO: get it working so that the basic view loads, and typing a url loads that page on top of it
      4. Edit ctrl.js & view.html as if it were a regular Angular app!
      5. If you want a sandbox, just edit the 'sandbox' folder's ctrl.js and view.html. Then navigate to url: /sandbox
      
NOTE: just do placeholder states with an h1. Simplified/demo angularfire CRUD comes next (simplify the database and export the complex one). Next, CSSify each view component. Next, complexify the database (sorta based on CSS elements). Next, hook up GETs. Finally, hook up rest of CRUD.

NOTE: 'pages' structure (no compiling required)
  news
  --template.html (call via app.route.js. TODO: After release, deny dashboard templates if !admin)
  --controller.js (manually place <script> link after app.js)

========
default
========

main template (index.html)
  head
  nav (dynamic color)
  ng-view
  footer

app.js
  onAuthStateChanged( localstorage = uid )
  '-then-> GET firebase database (if uid === admin, get whole database)
  init dynamic header/nav (w/ $scope.x = {} & userData etc.)

routes 404
  if competition/:id isn't in firebaseArray, return 404
  also just do a .otherwise 404

========
news
========

app.route.js
  if route = /news
    templateUrl: news.html
    controller: newsCtrl

news.html <script>
  hero
  how to compete
  featured user
  news article list

newsCtrl
  get firebase object featured user
  get firebase object news articles

  title/nav color (bubble object)
  featured user
  news articles

========
competitions
========

app.route.js
  if route = /competitions
    templateUrl: competitions.html
    controller: compCtrl

competitions.html <script>
  hero?: current competition enter/view/vote
  card grid of competitions

compCtrl
  get firebase object competitions (NO future comps, fireRules)

  title/nav color (bubble object)
  first comp controller enter/view/vote
  restOfComps controller: insert cards

========
view | singleCompetition
========

app.route.js
  if route = /competitions/:comp
    templateUrl: view-competition.html
    controller: compCtrl

view-competition.html <script>
  title of comp
  simple grid of photos (for now)
  enter competition UI

singleCompCtrl.js
  title/nav color (bubble object)

  get firebase object thisCompetition & this/photos

  if timeToView | timeToVote:
    photos controller list

========
vote
========

in singleCompCtrl.js:
  if timeToVote, add vote buttons.
  (if there's time, actually tie votes to the database. perhaps find a "likes" tutorial)

========
enter
========

in singleCompCtrl.js:
  if timeToEnter: (simply don't insert photoUrls into DOM. should be taken care of by timeToView switch)
    show enter UI
    hook up uploadYourPhoto to firebase (if there's time: firebase storage limit)

========
admin system
========

TODO: At publication, enforce w/ firebase rules & express auth router (/dashboard for now)

app.route.js (treat each as individual page)
  dash (/dashboard)
  competitions (/dashboard/competitions)
  news articles (/dashboard/news)
  featured user (/dashboard/featured-user)
  manage users (/dashboard/users)

dashboard/competitions.html <script>
  competitions list (sortable card grid?)

dashCompetitionsCtrl
  get firebase object competitions

  title/nav color (bubble object)
  insert competitions data
  competitions CRUD (on single page. confirm/cancel buttons onChange)
