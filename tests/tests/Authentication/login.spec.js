const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3005/login');
  });
test.describe('Login validation', () => {

    test('valid the login functionality with invalid credentials ', async ({ page }) => { 
        const usernameInput = await page.getByPlaceholder('undefined');
        await usernameInput.type('Nikunj');
        await expect(await page.getByPlaceholder('undefined')).toBeVisible();
       
        const inputPassword = await page.locator('#password');
        await inputPassword.type('Password@123')
       
        const button = await page.getByRole('button', { name: 'Submit' }).click()
        await expect(await page.getByRole('button', { name: 'Submit' })).toBeVisible();

        await page.getByTestId('Error!password must be a string')
    

       await page.getByText('Error!email must be an email')
       expect(await page.getByText('email must be an email').textContent()).toContain("email must be an email");
       await expect(await page.getByText('email must be an email')).toBeVisible();
    

          
    });

    test('valid the login functionality with valid credentials ', async ({ page }) => { 
        const usernameInput = await page.getByPlaceholder('undefined');
        await usernameInput.type('chandra@webpoint.io');
        await expect(await page.getByPlaceholder('undefined')).toBeVisible();
         
        const inputPassword = await page.locator('#password');
        await inputPassword.type('Password@123')
       
        const button = await page.getByRole('button', { name: 'Submit' }).click()
        await expect(await page.getByRole('button', { name: 'Submit' })).toBeVisible();

        expect(await page.getByText('Success!Login Successfully !').textContent()).toContain("Success!Login Successfully !");

    


    

          
    });
})



