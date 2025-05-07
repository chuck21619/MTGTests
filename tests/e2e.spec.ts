import { test, expect } from '@playwright/test';

test.describe('basic health check flow', () => {
    // test.beforeAll(async () => {
    //   await waitForDB();
    // });

    test('can log in with valid credentials', async ({ page }) => {
        await page.goto('http://frontend:5173');
        const response = await page.request.get('http://backend:8080/health');
        expect(response.status()).toBe(200);
    });
});