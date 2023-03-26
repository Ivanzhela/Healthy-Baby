## The “Healthy Baby” Project

**Healthy Baby** is my defense project for **ReactJS** course at [SoftUni](https://softuni.bg/ "SoftUni") (April 2023).

## :pencil2: Overview

**Healthy Baby** is a website for recipes. Recipes can be created, read, edited and deleted. Comments may be added to recipes, too. Also, users can save recipes and rate them. 
* All guests and users have access to see all recipes and their details.
* All users and guests can search recipes by name, ingredients or by match in preparation.
* All users and guests can see users' profiles and their recipes.
* All users and guests can sort recipes.
* All users can comment on recipes as many times as they want.
* All users except the creator can save and rate a recipe but only once.
* All authorized users can see their saved recipes.

## :performing_arts: User Types

**Guest**
* Read all recipes on the site and their details.
* Read all users' profiles and their own recipes.

**User** - logged-in user, who is not a creator
* Read all recipes on the site and their details.
* Read all users' profiles and their own recipes.
* Save, rate and comment on recipes.
* Can become a creator.

**Creator** - logged-in user, who has become a creator through the “Become a Creator” functionality and has a “creator name”
* Read all recipes on the site and their details.
* Read all users' profiles and their own recipes.
* Read recipes they saved.
* Save and rate recipes. (only recipes they didn`t created)
* Comment on recipes.
* Edit and delete recipes. (only recipes they created)

## :hammer: Built With **MERN**
**Client
* React JS
**Server
* Node.js
* Express.js
* MongoDB - Mongoose
