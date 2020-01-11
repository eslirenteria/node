const dns = require('dns'); // name -- address

// dns.lockup('pluralsight.com', (err, address) => {
//   console.log(address);
// });

// dns.resolve4('pluralsight.com', (err, address) => {
//   console.log(address);
// });

dns.resolve('pluralsight.com', 'MX', (err, address) => {
  console.log(address);
})

// dns.reverse('35.161.75.277', (err, hostname) => {
//   console.log(hostname);
// })