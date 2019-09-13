
## Reproduce TestCafe Windows Custom Test Runner Issue

# Prereqs

1. Chrome or Firefox must be installed
2. You must be using a Windows 7 or 10 box (though it will likely be reproducible on other versions as well)

# Steps to Reproduce

1. ```yarn install``` or ```npm install```
2. ```yarn run test```or ```npm run test```

The following error will appear:

$ ```ts-node runner.ts
Error while executing Test Cafe

{ Error: Was unable to open the browser "chrome:" due to error.

Error: spawn UNKNOWN
    at ChildProcess.spawn (internal/child_process.js:366:11)
    at spawn (child_process.js:551:9)
    at C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\testcafe\lib\utils\temp-directory\cleanup-process\index.js:149:58
    at Generator.next (<anonymous>:null:null)
    at step (C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\babel-runtime\helpers\asyncToGenerator.js:17:30)
    at C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\babel-runtime\helpers\asyncToGenerator.js:35:14
    at new Promise (<anonymous>:null:null)
    at new F (C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\core-js\library\modules\_export.js:36:28)
    at C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\babel-runtime\helpers\asyncToGenerator.js:14:12
    at initPromise.initPromise.then (C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\testcafe\lib\utils\temp-directory\cleanup-process\index.js:179:29)
    at Array.invokeCallback (C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\pinkie\index.js:60:12)
    at Immediate.asyncFlush (C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\pinkie\index.js:17:19)
    at runCallback (timers.js:706:11)
    at tryOnImmediate (timers.js:676:5)
    at processImmediate (timers.js:658:5)
    at process.topLevelDomainCallback (domain.js:126:23)

    at C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\testcafe\lib\browser\connection\index.js:120:37
    at Generator.throw (<anonymous>:null:null)
    at step (C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\babel-runtime\helpers\asyncToGenerator.js:17:30)
    at C:\src\PTWS\GitHubIssues\TestCafeBrowserIssue\node_modules\babel-runtime\helpers\asyncToGenerator.js:30:13

    ```