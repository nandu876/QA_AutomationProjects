// @ts-check
const { test, expect } = require('@playwright/test');

// Define common variables
const apiUrl = 'https://v3h2dw9k-8040.inc1.devtunnels.ms/api';
const authToken = 'a584efb462f4199e922b116705799ae2a684663c';

// Set up common headers
let headers;

// Configure common setup before each test
test.beforeEach(async () => {
    headers = {
        'Authorization': `token ${authToken}`,
        'Content-Type': 'application/json'
    };
});



// Test for GET request

test('GET request to an API chart/ endpoint', async ({ request }) => {
    const response = await request.get(`${apiUrl}/chart/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /chart is ok");
    } else {
        console.log("GET /chart is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});
test('GET request to an API total_user/ endpoint', async ({ request }) => {
    const response = await request.get(`${apiUrl}/total_user/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET total_user/ is ok");
    } else {
        console.log("GET total_user/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API feed_testimonal_create', async ({ request }) => {
    const response = await request.get(`${apiUrl}/feed_testimonal_create/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /feed_testimonal_create/ is ok");
    } else {
        console.log("GET /feed_testimonal_create/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});
test('GET request to an API feed_testimonal_update_delete', async ({ request }) => {
    const response = await request.get(`${apiUrl}/feed_testimonal_update_delete/13c0f012-f/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /feed_testimonal_update_delete/13c0f012-f/ is ok");
    } else {
        console.log("GET /feed_testimonal_update_delete/13c0f012-f/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});
test('GET request to an API feed_traning_create/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/feed_traning_create/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /feed_traning_create/ is ok");
    } else {
        console.log("GET /feed_traning_create/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API feed_traning_updateDelteRetrieve', async ({ request }) => {
    const response = await request.get(`${apiUrl}/feed_traning_update/c68bf2ce-a/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /feed_traning_update/c68bf2ce-a/ is ok");
    } else {
        console.log("GET /feed_traning_update/c68bf2ce-a/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API article_createAndGet', async ({ request }) => {
    const response = await request.get(`${apiUrl}/article_create/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /article_create/ is ok");
    } else {
        console.log("GET /article_create/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API article_update_delete_retrieve', async ({ request }) => {
    const response = await request.get(`${apiUrl}/article_update_delete/707cf729-f/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET article_update_delete/707cf729-f/ is ok");
    } else {
        console.log("GET article_update_delete/707cf729-f/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API get-query/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/get-query/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /get-query/ is ok");
    } else {
        console.log("GET /get-query/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API update-pending-requests', async ({ request }) => {
    const response = await request.get(`${apiUrl}/update-pending-requests/1/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /update-pending-requests/1/ is ok");
    } else {
        console.log("GET /update-pending-requests/1/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API category-create/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/category-create/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /category-create/ is ok");
    } else {
        console.log("GET /category-create/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API category-delete-update-retrieve', async ({ request }) => {
    const response = await request.get(`${apiUrl}/category-delete/6/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /category-delete/6/ is ok");
    } else {
        console.log("GET /category-delete/6/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API workshops-days-dashboard/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/workshops-days-dashboard/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /workshops-days-dashboard/ is ok");
    } else {
        console.log("GET /workshops-days-dashboard/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API workshops/days/videos/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/workshops-days-videos/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /workshops-days-videos/ is ok");
    } else {
        console.log("GET /workshops-days-videos/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API workshops/days get and create', async ({ request }) => {
    const response = await request.get(`${apiUrl}/workshops-days/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /workshops-days/ is ok");
    } else {
        console.log("GET /workshops-days/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API workshops delete get and update by id', async ({ request }) => {
    const response = await request.get(`${apiUrl}/workshops/23200e97-d/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /workshops/23200e97-d/ is ok");
    } else {
        console.log("GET /workshops/23200e97-d/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});


test('GET request to an API athlete-plan-dashboard', async ({ request }) => {
    const response = await request.get(`${apiUrl}/athlete-plan-dashboard/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /athlete-plan-dashboard/ is ok");
    } else {
        console.log("GET /athlete-plan-dashboard/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API plan-day-videos', async ({ request }) => {
    const response = await request.get(`${apiUrl}/plan-day-video/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /plan-day-video/ is ok");
    } else {
        console.log("GET /plan-day-video/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API plandays', async ({ request }) => {
    const response = await request.get(`${apiUrl}/plandays/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /plandays/ is ok");
    } else {
        console.log("GET /plandays/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});


test('GET request to an API athlete-plans', async ({ request }) => {
    const response = await request.get(`${apiUrl}/athlete-plans/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /athlete-plans/ is ok");
    } else {
        console.log("GET /athlete-plans/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API trainer-plans', async ({ request }) => {
    const response = await request.get(`${apiUrl}/trainer-plans/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /trainer-plans/ is ok");
    } else {
        console.log("GET /trainer-plans/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API trainer-plan-dashboard', async ({ request }) => {
    const response = await request.get(`${apiUrl}/trainer-plan-dashboard/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /trainer-plan-dashboard/ is ok");
    } else {
        console.log("GET /trainer-plan-dashboard/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API workshopsCreateAndGet', async ({ request }) => {
    const response = await request.get(`${apiUrl}/workshops/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /workshops is ok");
    } else {
        console.log("GET /workshops is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});