/**
 * Created by Quentin JOSEPH on 01/01/2016.
 */
Router = function(app) {
    this.app = app;
    this.currentRoute = "";
    this.defaultModules = [];
    this.registeredRoutes = [];
};

Router.prototype =
{
    init: function (route) {
        this.currentRoute = route;
    },
    defaultRegisteredModule: function (modules) {
        this.defaultModules = modules;
    },
    register: function(route, modules) {
        if(modules !== undefined && modules.length > 0) {
            if (this.defaultModules.length > 0)
                modules = this.defaultModules.concat(modules);
        }
        else
            modules = this.defaultModules;

        if(modules !== undefined && modules.length > 0)
            this.registeredRoutes.push({name: route, modules: modules});
        else
            throw "This route does not have any modules !"
    },
    apply: function () {
        if(this.registeredRoutes.length > 0) {
            this.registeredRoutes.forEach(function (route) {
                if (route.name == this.currentRoute) {
                    // init each modules registred for the current route
                    route.modules.forEach(function (module) {
                        module.init();
                    });
                }
            }.bind(this));
        }
    }
};