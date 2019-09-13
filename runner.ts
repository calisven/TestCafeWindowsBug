
const createTestCafe = require('testcafe');

let testcafe;

(async () => {

    try {

        const tc = await createTestCafe('localhost', 1337, 1338);
        
        testcafe = tc;

        const runner = tc.createRunner();
        runner
            .src('.\\tests')
            .browsers(['chrome'])
            .concurrency(1);
  
        const failedCount = await runner
            .run();

        console.log('Total failed: ' + failedCount);
        testcafe.close();
    }
    catch (error) {
        console.error('Error while executing Test Cafe\n');
        console.error(error);
        if (testcafe) {
            testcafe.close();
        }
    }
})();
