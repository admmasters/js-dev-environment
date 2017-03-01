// This file isn't transpiled - so we are using CommonJS

// Register babel to transpile before our tests are run.
require("babel-register")();

// Disable webpack features that Mocha doesn't understand
require.extensions[".css"] = function() {};
