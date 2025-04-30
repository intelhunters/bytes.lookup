const snusbaseAuth = 'sb5029dec66mht55m78fx8bsw6tm8a';
const snusbaseAPI = 'https://api.snusbase.com/';

const sendRequest = async (url, body = null) => {
  const options = {
    method: body ? 'POST' : 'GET',
    headers: {
      'Auth': snusbaseAuth,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  };
  const response = await fetch(snusbaseAPI + url, options);
  return await response.json();
};

// Example: Search Snusbase
sendRequest('data/search', {
  terms: ['example@gmail.com'],
  types: ['email'],
}).then(response => console.log(response));

// Example: Get Database Statistics
sendRequest('data/stats').then(response => console.log(response));

// Example: IP WHOIS Lookup
sendRequest('tools/ip-whois', {
  terms: ['12.34.56.78'],
}).then(response => console.log(response));

// Example: Hash Lookup
sendRequest('tools/hash-lookup', {
  terms: ['482c811da5d5b4bc6d497ffa98491e38'],
  types: ['hash'],
}).then(response => console.log(response));