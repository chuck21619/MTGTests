import { test, expect } from '@playwright/test';

test('basic health check flow', async ({ page }) => {
  await page.goto('http://frontend:5173');
  //await expect(page).toHaveTitle(/Your App Title/i); // Update as needed

  // simulate user interaction
//   await page.click('text=Check Health');
//   await expect(page.locator('#status')).toHaveText('Healthy'); // Example element

  // Or test data fetched from backend
  const response = await page.request.get('http://backend:8080/health');
  expect(response.status()).toBe(200);
});
