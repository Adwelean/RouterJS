// Constructor:
var App = function(debugMode)
{
  this.debugMode = debugMode;

  // Init modules
  this.routerModule = new Router();
  this.mainModule = new App.MainModule(this);
  this.editorModule = new App.EditorModule(this);
};

// Methods:
App.prototype = {
  init: function()
  {
    // Initialize the router, the route param is defined in php files
    this.routerModule.init(route);
    // Register main module for all routes
    this.routerModule.defaultRegisteredModule([this.mainModule]);
    // Register these routes to the router
    this.routerModule.register("home");
    this.routerModule.register("presentation");
    // Add the editor module in addition to the main module already registred
    this.routerModule.register("articles", [this.editorModule]); 
    // Load modules for the current route
    this.routerModule.apply();

    window.app = this;
  },
  get MainModule()
  {
    return this.mainModule;
  },
  get EditorModule()
  {
    return this.editorModule;
  }
};