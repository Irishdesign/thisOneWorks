### Run up compose (DB+API+UI)

docker-compose up --build

### rebuild image

#### backend

-   `cd api`
-   `docker build -t mongo-app .`

##### request issue

https://stackoverflow.com/questions/41955103/cant-get-post-data-using-nodejs-expressjs-and-postman

#### frontend

-   `cd ui`
-   `docker build -t react:app .`

-   `docker run -p 3000:3000 react:app`
    only when Dockerfile:

```
FROM node:8
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]

```

### login

-   with SQL
    https://www.w3jar.com/node-js-login-and-registration-system-with-express-js-and-mysql/

### Auth tutoril AMAZING!!

https://bezkoder.com/node-js-mongodb-auth-jwt/

After initializing Mongoose, we don’t need to write CRUD functions because Mongoose supports all of them:

-   create a new User: object.save()
-   find a User by id: User.findById(id)
-   find User by email: User.findOne({ email: … })
-   find User by username: User.findOne({ username: … })
-   find all Roles which name in given roles array: Role.find({ name: { $in: roles } })
