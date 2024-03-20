//* Write a function that when given a URL as a string, 
//* parses out just the domain name and returns it as a string. For example:
//~ url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//~ url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//~ url = "https://www.cnet.com"                -> domain name = cnet"

//* pseudocode
//` remove scheme (if present)
//` remove subdomain (if present)
//` separate domain from top level domain and paths

function removeScheme(url) {
    if (url.includes('://')) {
        const startIndex = url.indexOf(':') + 3;
        url = url.slice(startIndex);
    }
    return url;
}

function domainName(url) {
    if (url.includes('://')) {
        const startIndex = url.indexOf(':') + 3;
        url = url.slice(startIndex);
    }
    if (url.includes('www.')) {
        const startIndex = url.indexOf('.') + 1;
        url = url.slice(startIndex);
    }
    const endIndex = -1* (url.length - url.indexOf('.'));
    console.log(endIndex);
    return url.slice(0, endIndex);
}

test1 = 'https://konmari.com'
test2 = 'https://www.konmari.com'
test3 = 'https://konmari.co.jp'
test4 = 'http://www.konmari.co.jp'
test5 = 'www.konmari.com'

console.log(domainName(test1));
console.log(domainName(test2));
console.log(domainName(test3));
console.log(domainName(test4));
console.log(domainName(test5));