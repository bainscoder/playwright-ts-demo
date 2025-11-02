import { test, expect } from '@playwright/test';

test('Verify the title of the page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Welcome to Cool events!')).toBeVisible();
});

test(`Verify the element with 'GetbyRole'`, async ({ page }) => {
    await page.goto('/')
    const Title = await page.getByRole('heading',{name: 'Our Services'})
    await expect(Title).toBeVisible()

});

test(`Verify the list of Services`, async ({ page }) => {
    await page.goto('/')
    const Services = await page.getByRole('listitem').all()
    for (const service of Services) {
        const serviceName = await service.textContent()
        console.log(serviceName)
        await expect(serviceName).toBeTruthy()
    }
})