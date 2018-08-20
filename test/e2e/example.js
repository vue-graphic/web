
var casper = require('casper').create({
    "pageSettings": {
    localToRemoteUrlAccessEnabled: true,
      javascriptEnabled: true,
      XSSAuditingEnabled: true,
      webSecurityEnabled: false,
      "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1588.0 Safari/537.36"
    }
  });

// casper.test.begin('assertExists() tests', 1, function(test) {
  casper.start('https://vue-graphic.github.io/web/#/fibonacci')
  .then(function() {
      casper.wait(1000)
  })
  .then(function() {
      var fs = require('fs');
      fs.write('myfile.html', this.getPageContent(), 'w');


      casper.capture('screenshots/amazon-search-1.png');
    //   test.assertExists('#canvas-container');
  })
//   .run(function() {
//       test.done();
//   });
// });

casper.run();