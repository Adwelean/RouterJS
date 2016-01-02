// Constructor:
App.MainModule = function(app) {
    this.app = app;
    this.name = "MainModule";
};

// Methods:
App.MainModule.prototype = {
    init: function() {
    	// Your code here
    	this.hackConsole();

        if(this.app.debugMode)
            console.log(this.name + " has been initialized");
    },
    hackConsole: function() {
    	var nativeLog = console.log.bind(console);

    	console.log = function(msg)
    	{
    		nativeLog(msg);

    		var p = document.createElement('p');
    		p.innerText = msg;

    		var consoleElement = document.getElementById("console-js");
    		consoleElement.appendChild(p);
    	}
    }
}