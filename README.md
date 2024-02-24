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
- You should see something like this: 
![Знімок екрана 2024-02-24 о 16.25.40.png](..%2F..%2F..%2F..%2Fvar%2Ffolders%2F55%2Fsrv7t0pd4hbf_zx0n__v3pt00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_4wvjTW%2F%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-02-24%20%D0%BE%2016.25.40.png)
- Click right button on Servers (Top left corner)
- Click Register->Server
- You should see next screen:
![Знімок екрана 2024-02-24 о 16.28.30.png](..%2F..%2F..%2F..%2Fvar%2Ffolders%2F55%2Fsrv7t0pd4hbf_zx0n__v3pt00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_0x3rrx%2F%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-02-24%20%D0%BE%2016.28.30.png)
- In the General tab type any name that you want
- In the Connection tab
![Знімок екрана 2024-02-24 о 16.31.39.png](..%2F..%2F..%2F..%2Fvar%2Ffolders%2F55%2Fsrv7t0pd4hbf_zx0n__v3pt00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_Jrj0tg%2F%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-02-24%20%D0%BE%2016.31.39.png)
we should edit next fields:
  - Host name: ```db```
  - Maintenance database: ```postgres```
  - Username: ```postgres```
  - Password: ```postgres```
- Click ```Save``` button

Now go to the terminal and push ```CTRL+C``` to stop server.

Run the command inside the terminal window (console) again:
```docker compose up```

Now you can open [localhost:3000/api](http://localhost:3000/api) inside your browser and should see next screen: 
![Знімок екрана 2024-02-24 о 16.39.17.png](..%2F..%2F..%2F..%2Fvar%2Ffolders%2F55%2Fsrv7t0pd4hbf_zx0n__v3pt00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_u68nuk%2F%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-02-24%20%D0%BE%2016.39.17.png)

This is the API documentation and sandbox.
Register the user using: **POST /api/auth/register** and you can use all api endpoints to check how they work, using credentials which you have entered.

And also you can use this API to develop your client...

**To fully shutdown the server press ```CTRL+C``` inside terminal and run:**

```docker compose down```
