import { test as base } from '@playwright/test';
import type { PlayWrightAiFixtureType } from '@midscene/web/playwright';
import { PlaywrightAiFixture } from '@midscene/web/playwright';

// FYI: https://midscenejs.com/integrate-with-playwright.html
export const test = base.extend<PlayWrightAiFixtureType>(PlaywrightAiFixture({
    waitForNetworkIdleTimeout: 2000, // optional, the timeout for waiting for network idle between each action, default is 2000ms
    waitForNavigationTimeout: 5000, // optional, the timeout for waiting for navigation finished, default is 5000ms
  }));