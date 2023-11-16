# riseact-app-template-node

This is a template for a Node.js application using [Express](https://expressjs.com/) and [RiseactSDK](https://github.com/riseact/riseact-node-sdk).

## Getting started

### Quick start

Download and install the latest release of Riseact CLI from the [release page](https://github.com/riseact/riseact-cli/releases/latest)

Login to your Riseact account

```bash
riseact auth login
```

Create a new application and follow the instructions

```bash
riseact app init
```

If you don't have a Ngrock token, create one [here](https://dashboard.ngrok.com/get-started/your-authtoken) and copy it to your clipboard.
After that, start your application with the command

```bash
cd your-app-name
riseact app dev
```

And fill in the Ngrock token when prompted.


## Configuration

The variables are initialized by Riseact CLI. The following environment variables are available:

| Name              | Description                          | Default     |
| ----------------- | ------------------------------------ | ----------- |
| `CLIENT_ID`       | The client ID of the application     | *generated* |
| `CLIENT_SECRET`   | The client secret of the application | *generated* |
| `RISEACT_APP_URL` | The public URL of the application    | *generated* |


## Simulate the production environment locally

Build your frontend. If you are using the riseact-app-template-node repo, use the command `npm run build:fe`.

In addition, you need to change the static path for the frontend. The default path is intended for working with Docker deployment method. Edit this line on your `index.ts` file:

```typescript
// Original line
app.use(serveStatic(`${process.cwd()}/static`));

// Change the path to 
app.use(serveStatic(`${process.cwd()}/src/frontend/dist)`));
// or wherever your frontend build is located.
```

## Deployment with Docker

To deploy your application with Docker, you need to build the image and run it.

```bash
docker build -t your-organization/your-app-image .
```

Keep in mind that the image will not contain `CLIENT_ID` and `CLIENT_SECRET` environment variables. You need to pass them as arguments when running the container.<br>
Remember to add your app URL to the **Allowed redirection URL(s)** field in Riseact admin panel followed by `/auth/callback` path to get the authentication working.

### Run with Docker

```bash
docker run -p 3000:3000 -e CLIENT_ID=your-client-id -e CLIENT_SECRET=your-client-secret -e RISEACT_APP_URL=your-app-url your-organization/your-app-image
```

### Run with Docker Compose

```yml
version: '3.7'

services:
  my-awesome-app:
    image: your-organization/your-app-image
    ports:
      - 3000:3000
    environment:
      CLIENT_ID: your-client-id
      CLIENT_SECRET: your-client-secret
      RISEACT_APP_URL: your-app-url
```

## Manual deployment

To deploy your application manually, you need to install the dependencies 

```bash
npm install
```

Build frontend and backend

```bash
npm run build
```

Start the application in production mode

```bash
npm start
```

## License

MIT
