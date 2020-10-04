function shorten() {
debugger;
let url = document.getElementById("uRLToTest").value
let output = document.getElementById("uRLOutput")
let token = map(url)

output.innerText = makelURL(token)
}
function createToken() {
let charMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let token = "";

for (let i = 0; i < 6; i++){
token += charMap[Math.floor(Math.random() * 62)];
  }
  return token;
}

const urlMap = new Map()

function map(url) {
let token = createToken()

if(localStorage.getItem(token)){
  if(url != localStorage.getItem(token)){
  map()
  }
} else {
localStorage.setItem(token,url)
return token;
  }
}

function makelURL(token){
let lURL = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + token;
return lURL;
}

function extractToken(lURL){
let extractedToken = window.location.search
extractedToken = extractedToken.slice(1)
let open = localStorage.getItem(extractedToken)
window.open(open)
}