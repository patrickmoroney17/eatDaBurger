# eatDaBurger


With this assignment, I've created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). The directory structure follows the MVC design pattern, and uses Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.


# directory structure

├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       └── css
│           └── burger_style.css
│
├── server.js
│
└── views
    ├── index.handlebars
    ├── layouts
    │    └── main.handlebars
    └── partials
        └── burgers
            └── burger-block.handlebars


# Basic Instructions

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.

