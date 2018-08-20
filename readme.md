## Install Dependencies

```shell
npm install
```

## Start MongoDB

```shell
mongod
```

## Run Application

```shell
npm start
```

## Deploy to heroku
add Procfile

```shell
heroku create
heroku config:set MONGO_URI=mongodb://<dbuser>:<dbpassword>@ds125862.mlab.com:25862/playlist-api
heroku config:set secret=Ducky01
heroku config:set NPM_CONFIG_PRODUCTION=false
git push heroku master
```
