# riseact-app-template-node

This is a template for a Node.js application using [Express](https://expressjs.com/) and [RiseactSDK](https://github.com/riseact/riseact-node-sdk).

## Getting started

### Requirements

- Node.js
- Npm or Yarn
- A Riseact partner account
- A Riseact organization connected to your partner account
- A Ngrok account

### Quick start

Download and install the latest release of Riseact CLI from the [release page](https://github.com/riseact/riseact-cli/releases/latest)

Login to your Riseact account

```bash
riseact auth login
```

Clone the template and install the required dependencies with the command

```bash
riseact app init
```

If you don't have a Ngrock token, create one [here](https://dashboard.ngrok.com/get-started/your-authtoken) and copy it to your clipboard.
After that, start your application with the command

```bash
cd your-app-name
riseact app dev
```

Paste the Ngrock token when asked.  
**Known issue:** under certain circumstances, after the first time you run the `riseact app dev` command, the application will not start. If this happens, run the command again.  

After the Ngrock tunnel is established, Riseact CLI will search for the app configuration in your `.env` file and start the application. Since it is a new application, the `.env` file will be empty.  
Riseact CLI will ask you to create a new app or select an existing one. Create a new app. This process will generate automatically a new private application in your Riseact Partner account. Choose the public name of your app and press enter.
Select the organization where you want to test the app and press enter.  
After that, the app will start the development server.  
Login in Riseact with the previous selected organization, go to the `Applications` menu, click on `Private application` and install the app you just created.

### Project structure and concepts

The project in a monorepo orchestrated by Yarn Workspaces. The project includes the following packages:
- `client` - The frontend of the application. It use React and @riseact/elements to create the UI.
- `server` - The backend of the application. It use Express, Prisma and @riseact/sdk.
- `common` - Shared code between the frontend and the backend, like types and constants.
- `prisma` - The database schema definition and the Prisma client.

The project uses TypeScript for type checking and ESlint and Prettier for code formatting. The configuration files are located in the root of the project.


## Configuration

The variables are initialized by Riseact CLI. The following environment variables are available:

| Name              | Description                          | Default     |
| ----------------- | ------------------------------------ | ----------- |
| `CLIENT_ID`       | The client ID of the application     | *generated* |
| `CLIENT_SECRET`   | The client secret of the application | *generated* |
| `RISEACT_APP_URL` | The public URL of the application    | *generated* |


## Webhooks

Currently Riseact SDK do not support the automatic registration of webhooks in Riseact. To register a webhook, you need to define it manually in the Riseact Partner panel.  
To serve a webhook endpoint for an event in your application, add the following code to your `index.ts` file in the server package:

```ts
  // Register a webhook to listen to the SupporterCreated events
  app.use(
    riseact.network.registerWebhook(WebhookEventTopic.SupporterCreated, (data) => {
      console.log('Webhook received', data);
    }),
  );
```

The name of the endpoint is deterministic and it's based on the events you are listening to. You can find the URL of the endpoint in the console output when you start the application.

```
[SRV] Registered webhook for SUPPORTER_CREATED at /webhooks/fxhoraaaaaaaaaaa
```

Copy the URL and add it to your app configuration in the Riseact Partner panel in the **Webhooks** section.


## Simulate the production environment locally

Skip this section if you want to deploy your application directly.  
Build your frontend. If you are using the riseact-app-template-node repo, use the command `npm run build:fe`.

In addition, you need to change the static path for the frontend. The default path is intended for working with Docker deployment method. Edit this line on your `index.ts` file:

```typescript
// Original line
app.use(serveStatic(`${process.cwd()}/static`));

// Change the path to 
app.use(serveStatic(`${process.cwd()}/src/frontend/dist)`));
// or wherever your frontend build is located.
```

## Make it real

To deploy your application, you need to host it in server or a cloud provider. This template is prepared to be deployed with Docker, but you can deploy it manually if you prefer.

You need to set up a domain for your application. This domain must be defined in the **Allowed redirection URL(s)** field in Riseact Partner panel followed by `/auth/callback` path to get the authentication working.
You need also to set up the environment variables `CLIENT_ID`, `CLIENT_SECRET` and `RISEACT_APP_URL` in your server, where `RISEACT_APP_URL` is the URL of your application.


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
