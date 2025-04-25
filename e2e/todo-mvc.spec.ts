import { test } from './fixture';

test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");
});

test('todo', async ({ page, ai, aiQuery }) => {
    await ai("在输入框 input 输入 今天研究了playwright和mcp，按回车键");
    await ai("在输入框 input 输入 今天研究了midscene");
    await page.waitForTimeout(2000); // 等待 2 秒钟，确保输入框的值已经更新
});
