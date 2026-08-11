//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
//`runTests` with `switch` for test type messages. 
//create function for Launch Browser
function launchBrowser(browserName){
    if (browserName === 'chrome'){
        console.log("Launching chrome Browser...")
    } else {
        console.log("Launching " + browserName + "Browser...");
    }
}
//function to runTests with Switch
function runTests(testType){
    switch(testType){
        case 'Smoke':
            console.log("Running smoke tests")
    break;
        case 'Sanity':
            console.log("Running Sanity tests")
    break;
    
        case 'Regression':
            console.log("Running Regression tests")
    break;
        default:
            console.log("Running default Smoke tests");
            break;
       }
}
launchBrowser('chrome');
launchBrowser('Firefox');
runTests('Smoke');
runTests('Sanity');
runTests('Regression');
runTests('performance');