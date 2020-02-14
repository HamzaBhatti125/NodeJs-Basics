const url = require('url');

const myUrl = new URL('http://mywebsite.com:3000/hello.html?id=100&status=active');

//Serialized url
console.log(myUrl.href);

//Host (root name)
console.log(myUrl.host);

//Host Name (dont have portName)
console.log(myUrl.hostname)

//Get params object
myUrl.searchParams.append("abc","123")
console.log(myUrl.searchParams)
myUrl.searchParams.forEach((name, value) => {
    console.log(`${name}: ${value}`)
})
