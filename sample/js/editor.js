// Constructor:
App.EditorModule = function(app) {
    this.app = app;
    this.name = "EditorModule";
};

// Methods:
App.EditorModule.prototype = {
    init: function () {
        // Your code here
        
        if(this.app.debugMode)
            console.log(this.name + " has been initialized");
    }
}