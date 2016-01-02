var App = function(debugMode)
{
  this.debugMode = debugMode;

  // Init modules
  this.routerModule = new Router();
  this.mainModule = new App.MainModule(this);
  this.editorModule = new App.EditorModule(this);
};

App.prototype = {
  init: function()
  {
    // route is defined in php file
    this.routerModule.init(route);
    this.routerModule.defaultRegisteredModule([this.mainModule]);
    this.routerModule.register("home");
    this.routerModule.register("presentation");
    this.routerModule.register("articles", [this.editorModule]);
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