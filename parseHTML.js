// This program will count the number of href's for a list of websites
// specified on the command line.
//
// Example:
// node parseHTML.js https://wikipedia.com https://perry-brandiezs.com
// https://wikipedia.com 318
// https://perry-brandiezs.com 6


const request = require('request');

process.argv.slice(2).forEach(function (val, index, array) {
    // console.log(index + ': ' + val);

    request(val, function (error, response, body) {
        // console.error('error:', error);
        // console.log('statusCode:', response && response.statusCode);
        // console.log('body:', body);
        if (error) {
            console.error('error:', error);
        } else if (response && (response.statusCode !== 200)) {
                console.log('statusCode:', response && response.statusCode);
        } else {
            // Search for href globally
            let hrefcount = body.match(/href/g).length;
            console.log('%s %i', val, hrefcount);
        }
    })
});