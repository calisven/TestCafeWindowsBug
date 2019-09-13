import { } from 'testcafe';

fixture('Hello')
.page('https://google.com')

test('World!', async (t: TestController) => {
    await t.expect(true);
})
