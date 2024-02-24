# TO-DO List

## Start development
To star development first of all install all needed dependencies. To do it open the terminal and run the command ```npm install``` 

To start the dev-server please run next command ```npm run start```

---
## How to start use API server if needed
Before you can run the server please install Docker and Docker Compose. To do it read the [documentation](https://docs.docker.com/compose/install/).

After the Docker and Docker Compose have been installed run the command inside the terminal window (console):
```docker compose up```

Next step you have to create the server inside postgres. For this situation you should do next steps:

- Open your this link: localhost:5050 inside your browser.
- Type login: admim@admin.com
- Type password: pgadmin4
- Click right button on Servers (Top left corner)
- Click Register->Server
- In the General tab type any name that you want
- In the Connection tab we should edit next fields:
  - Host name: ```db```
  - Maintenance database: ```postgres```
  - Username: ```postgres```
  - Password: ```postgres```
- Click ```Save``` button

Now go to the terminal and push ```CTRL+C``` to stop server.

Run the command inside the terminal window (console) again:
```docker compose up```

Now you can open [localhost:3000/api](http://localhost:3000/api) inside your browser.

This is the API documentation and sandbox.
Register the user using: **POST /api/auth/register** and you can use all api endpoints to check how they work, using credentials which you have entered.

And also you can use this API to develop your client...

**To fully shutdown the server press ```CTRL+C``` inside terminal and run:**

```docker compose down```
