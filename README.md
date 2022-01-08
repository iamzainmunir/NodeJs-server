**** Server Setup ****
To install type "npm install"
Create .env file in root folder and paste these environemnt variables.

** Environemnt Variables **
ENVIRONMENT=development
PORT=3000
PG_USER=otumyurz
PG_PASS=nfNkTl-IlOnIyz5RhMT8gjxQWzAnLz4N
PG_HOST=abul.db.elephantsql.com
PG_PORT=5432
PG_DATABASE=otumyurz

To sun server on development type "npm run dev"
To sun server on production type "npm run prod"

**** TypeScript ****
I'm using typescript because we can define types in our code which allow IDE to acknowledge errors in compile time.

**** Project Structure ****
For clean and more understandable project structure all modules with their controllers and routes are kept in separate folder "modules"
And all routes are included in "module.routes.ts"
In "controller" we handle our API calls.
In "model" we define our database schema.
In "services" we define functions which are responsible to perform CRUD operations on our database.

**** TODO ****
We can use swagger documentation to describe structure of our API's so any frontend developer who is integrating API's can check and test API's directly in swagger docs without using "Postman" or any other tool.
We can use eslint to format our project and remove any unused variables, functions, imports etc.
Instead of returning errors in catch block (As showed in user.login_controller.ts file) we can use "next(error)" than define middleware to handle all errors or we have create separate file (Eg: lib/common/errorHandler) to handle our errors.

**** Dependencies Versions ****
dotenv: "^10.0.0"  (latest). 
express: "^4.17.2" (latest).
pg: "^8.7.1" (latest).
ts-node-dev": "^1.1.8" (latest),  This is only used for development purpose.
typescript": "^4.5.4" (latest).