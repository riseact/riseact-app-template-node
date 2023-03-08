# riseact-app-template-node

This is a template for a Node.js application using [Express](https://expressjs.com/) and [RiseactSDK](https://github.com/riseact/riseact-node-sdk).

## Getting started

### Install Riseact CLI & login to Riseact

To create a new application using this template, you need to install the [Riseact CLI](https://github.com/riseact/cli).

```bash
pip install riseact-cli
```

After installing the CLI, login using your Riseact account.

```bash
riseact auth login
```

### Create your new application

```bash
# Clone the repository
git clone --recurse-submodules https://github.com/riseact/riseact-app-template-node.git

# Install dependencies
npm install

# Start the application
npm run dev
# or riseact app dev
```

The application will automatically reload when you make changes to the source code.

## Configuration

The application is configured using environment variables. The variables are initialized by Riseact CLI. The following environment variables are available:

| Name            | Description                               | Default |
| --------------- | ----------------------------------------- | ------- |
| `CLIENT_ID`     | The client ID of the application          |         |
| `CLIENT_SECRET` | The client secret of the application      |         |

## License

MIT