# INJS05-Assignment2
NodeJS assignment 2 @Hacktiv8

### Install Package

```
npm install
```
### Run App

```
npm run app
```
### How to use
1. Use [POSTMAN](https://www.postman.com/) and use POST method to localhost:3000/login with username and password from [here](./data/users.json)
2. Copy ```token``` from response
3. Use GET method to localhost:3000/teachers and set Headers Authentication with Bearer ```token```
