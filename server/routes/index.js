
var MainRoute = (function(){
var fs = require('fs');
var path = require('path');
return {
 Route  : function(app) {
  fs.readdirSync('./routes').forEach(function (file) {
    // Avoid to read this current file.
    if (file === path.basename(__filename)) { return; }

    // Load the route file.
    require('./' + file).Route(app);
  });
}
}
})();


module.exports = MainRoute;