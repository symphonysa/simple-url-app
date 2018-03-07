var appUrl = 'https://localhost:8080';
var appId = 'hello';
var appName = 'Simple URL Sample';
var serviceName = appId + ':controller';
var controllerService = SYMPHONY.services.register(serviceName);
var moduleUrl = 'https://symphony.com';

SYMPHONY.remote.hello().then(function(data) {
    SYMPHONY.application.register(appId, ['modules', 'applications-nav', 'ui'], [serviceName]).then(function(response){
        var navService = SYMPHONY.services.subscribe('applications-nav');
        var modulesService = SYMPHONY.services.subscribe('modules');

        // LEFT NAV: Add an entry to the left navigation for our application
        var navSettings = {
            title: appName,
            icon: appUrl + '/nav-icon.png'
        };
        navService.add(`${appId}-nav`, navSettings, serviceName);

        // Implement some methods on our local service. These will be invoked by user actions.
        controllerService.implement({
            // LEFT NAV & MODULE: When the left navigation item is clicked on, invoke Symphony's module service to show our application in the grid
            select: function(id) {
                if (id == `${appId}-nav`) {
                    // Focus the left navigation item when clicked
                    navService.focus(`${appId}-nav`);
                }
                modulesService.show(appId, {title: appName}, serviceName, moduleUrl, {
                    // Specify canFloat in the module options so that the module can be pinned
                    'canFloat': true,
                });
                // Focus the module after it is shown
                modulesService.focus(appId);
            },
        });
    })
});