function grab(flag) {
    // Check to see if flag exist
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

!user || !greeting ? console.log('You blew it!') : console.log(`${greeting}${user}`);
