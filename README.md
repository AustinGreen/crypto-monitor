# crypto-monitor

## Running your service worker on your localhost

1. `yarn build`

2. `serve -s build` (`serve` is superior to the create-react-app recommended `push-server` in production

3. Ensure your service worker is running locally by visiting `chrome://serviceworker-internals/`

***

### Stopping your service worker

1. Open `chrome://serviceworker-internals/`

2. Click the `unregister` button beneath your project' service worker details

2a. If your service worker instance persists (this tends to happen with Firefox, and Safari), open your command line, and run `killall -9 node` to kill all node processes running on your localhost
