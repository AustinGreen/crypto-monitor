# crypto-monitor

## Running your service worker on your localhost

1. Open `src/registerServiceWorker.js`

2. Remove `process.env.NODE_ENV === production &&`

3. `yarn build`

4. `serve -s build` (`serve` is superior to the create-react-app recommended `push-server` in production

5. Ensure your service worker is running locally by visiting `chrome://serviceworker-internals/`

***

### Stopping your service worker

1. Open `chrome://serviceworker-internals/`

2. Click the `unregister` button beneath your project' service worker details

2a. If your service worker instance persists (this tends to happen with Firefox, and Safari), open your command line, and run `killall -9 node` to kill all node processes running on your localhost

***

The ultimate test of your front-end ability. After this you can move on to the Node course. Think of this like your front-end final exam.

Build an app using:

- Create React App (Abstracts Webpack, Babel)
- Yarn
- React
- Redux
- React Router
- Styled Components
- Compose
- Lodash
- Axios
- Other utility packages
- Local storage for cross-session storage
- Websocket or other realtime API requests?
- React Dnd
- Animations, smooth transitions, client-side caching

Focus on:

- Project organization/testing
- Utilize HOC for reusability and modular
- Follow the smart/dumb component architecture
- Retrieving data with best API practices
- Prioritize performance
- Deployment
- Design, responsiveness

Cryptocurrency Monitor:

- Input holdings of top 6 cryptocurrencies
- Fetch prices in real time
- Update portfolio accordingly
- Utilize D3 or other library for data visualization and analytics
