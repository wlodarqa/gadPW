import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ request }) => {
    // Send authentication request. Replace with your own.
    await request.post('http://localhost:3000/api/login', {
        form: {
            'user': 'Moses.Armstrong@Feest.ca',
            'password': 'test1'
        }
    });
    await request.storageState({ path: authFile });
});