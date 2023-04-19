## The “Healthy Baby” Project

**Healthy Baby** is my defense project for **ReactJS** course at [SoftUni](https://softuni.bg/ "SoftUni") (April 2023).

## Start the app

**Deployment**
* [Healthy Baby](https://healthy-baby-recipes.web.app/)

**Local**
* client - npm start
* server - npm start

## :pencil2: Overview

**Healthy Baby** is a website for recipes. Recipes can be created, read, edited and deleted. Comments may be added to recipes, too. Also, users can save, unsave recipes and rate them. They can choose whether they want to have a video or just an image when creating a recipe.

* All guests and users have access to see all recipes and their details.
* All users and guests can search recipes by name, ingredients or by match in preparation.
* All users and guests can filter recipes by age, meal time or ingredients.
* All users and guests can see users' profiles and their recipes.
* All users and guests can sort recipes.
* All users can create recipes.
* All users can edit their profiles.
* All users can comment on recipes as many times as they want.
* All users except the creator can save and unsave a recipe.
* All users except the creator can rate a recipe but only once.
* All creators will have notifications of activity on their recipes.
* All creators can see their saved recipes.

## :performing_arts: User Types

**Guest**
* Read all recipes on the site and their details.
* Read all users' profiles and their own recipes.

**User** - logged-in user, who is not a creator
* Can become a creator.
* Read all recipes on the site and their details.
* Read all users' profiles and their own recipes.
* Save, unsave, rate and comment on recipes.
* Еdit or delete their comments.
* Edit their profile.

**Creator** - logged-in user, who has become a creator
* Read their notifications.
* Read all recipes on the site and their details.
* Read all users' profiles and their own recipes.
* Read recipes they saved.
* Save, unsave and rate recipes. (only recipes they didn`t created)
* Comment on recipes.
* Еdit or delete their comments.
* Edit their profile.
* Delete comments of other users. (only on recipes they created)
* Edit and delete recipes. (only recipes they created)

## :hammer: Built With **MERN**

**Client**
* React JS

**Server**
* Node.js
* Express.js
* MongoDB - Mongoose
