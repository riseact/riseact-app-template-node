# riseact-app-template-node

This is a template for a Node.js application using [Express](https://expressjs.com/) and [RiseactSDK](https://github.com/riseact/riseact-node-sdk).

## Getting started

```bash
# Clone the repository
git clone --recurse-submodules https://github.com/riseact/riseact-app-template-node.git

# Install dependencies
npm install

# Start the application
npm dev
```

After starting the application, you can access the application at [http://localhost:3000](http://localhost:3000). The application will automatically reload when you make changes to the source code.

## Configuration

The application is configured using environment variables. The following environment variables are available:

| Name            | Description                               | Default |
| --------------- | ----------------------------------------- | ------- |
| `CLIENT_ID`     | The client ID of the application          |         |
| `CLIENT_SECRET` | The client secret of the application      |         |


## License

MIT