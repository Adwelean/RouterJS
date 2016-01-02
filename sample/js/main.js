/**
 * Created by Quentin JOSEPH on 02/01/2016.
 */
// Constructor:
App.MainModule = function(app) {
    this.app = app;
    this.name = "MainModule";
};

// Methods:
App.MainModule.prototype = {
    init: function () {
    	// Your code here
    	
        if(this.app.debugMode)
            console.log(this.name + " has been initialized");
    }
}