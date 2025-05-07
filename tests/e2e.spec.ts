import { test, expect } from '@playwright/test';
import { insertTestUser } from '../helpers/insertTestUser';

test.describe('basic health check flow', () => {
  test.beforeAll(async () => {
    await insertTestUser();
  });

  test('can log in with valid credentials', async ({ page }) => {
    // page.on('request', request => {
    //   console.log('➡️ Request:', request.method(), request.url());
    //   request.postData() && console.log('Body:', request.postData());
    // });
    // page.on('requestfailed', (request) => {
    //   console.log('Request failed:', request.url(), request.failure());
    // });
    // page.on('console', (msg) => {
    //   console.log('PAGE LOG:', msg.text());
    // });
    await page.goto('http://frontend:5173');
    // const response = await page.request.get('http://backend:8080/health');
    // expect(response.status()).toBe(200);
    // await page.screenshot({ path: 'screenshots/loginPage.png' });
    // console.log("-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    // console.log(await page.content());
    // console.log("-=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'secret');
    await page.click('button[type="submit"]');

    await page.waitForURL('**/dashboard');
    await expect(page).toHaveURL(/dashboard/);
  });
});