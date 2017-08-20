// const io = require('socket.io')();
//
// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
// });
//
// const port = 8000;
// io.listen(port);
// console.log('listening on port ', port);
// const cryptoSocket = require('crypto-socket');
// cryptoSocket.start('bitfinex', 'BTCUSD');
// cryptoSocket.start('bitfinex', 'ETHUSD');
// cryptoSocket.start('bitfinex', 'ETCBTC');
// cryptoSocket.start('bitfinex', 'XMRBTC');
// cryptoSocket.start('bitfinex', 'ZECBTC');
// cryptoSocket.start('bitfinex', 'BCHUSD');
// cryptoSocket.start('bitfinex', 'LTCUSD');
// console.log(cryptoSocket.Exchanges.bitfinex);
const WebSocket = require('ws');

const wss = new WebSocket('wss://api.bitfinex.com/ws/');
wss.onmessage = msg => console.log(msg.data);
wss.onopen = () => {
  // API keys setup here (See "Authenticated Channels")
};
