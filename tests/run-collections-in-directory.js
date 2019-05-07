var fs = require('fs'),
    async = require('async'), // https://npmjs.org/package/async
    newman = require('newman');

fs.readdir('./tests', function (err, files) {
    if (err) { console.log("erroe", err); }

    // we filter all files with JSON file extension
    
    files = files.filter(function (file) {
        return (file.substr(-5) === '.json');
    });
    console.log("files....", files)

    // now we iterate on each file name and call newman.run using each file name - running on git hook
    async.eachSeries(files, function (file, next) {
        newman.run({
            collection: require(`${__dirname}/${file}`),
	    reporters: 'cli',
	    environment: './tests/env.json',
	    iterationData: './tests/testdata.csv'
        }, function (err, summary) {
            // finally, when the collection executes, print the status
            console.info(`${file}: ${err ? err : 'ok'}!`);
            next(err, summary);
        });
    }, function (err, results) {
       // process the errors/results here
       console.log("error", err)
    });
});
