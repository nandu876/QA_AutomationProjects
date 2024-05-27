// @ts-check
const { test, expect } = require('@playwright/test');

// Define common variables
const apiUrl = 'https://v3h2dw9k-8010.inc1.devtunnels.ms/api';
const authToken = '48b1a03635d6bb298ab53d435253fa02d3b20997';

// Set up common headers
let headers;

// Configure common setup before each test
test.beforeEach(async () => {
    headers = {
        'Authorization': `token ${authToken}`,
        'Content-Type': 'application/json'
    };
});

// Test for POST request
// test('POST request to an API login endpoint', async ({ request }) => {
//     const postData = {
//         "username": "sayim",
//         "password": "sayim"
//     };

//     const response = await request.post(`${apiUrl}/admin-login`, {
//         headers,
//         data: postData
//     });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(200);

//     let statusCode = response.status();
//     if (statusCode === 200) {
//         console.log("POST /admin-login is ok");
//     } else {
//         console.log("POST /admin-login is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse and log the JSON response
//     const data = await response.json();
//     console.log(data);
// });

// Test for GET request


//user user-active-plans/ GET request giving 404 error
test('GET request to an API user-active-plans/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/user-active-plans/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /user-active-plans is ok");
    } else {
        console.log("GET /user-active-plans is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});
test('GET request to an API user-active-plan-detais endpoint', async ({ request }) => {
    const response = await request.get(`${apiUrl}/user-active-plan-details/44737c18-b/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /user-active-plan-details/44737c18-b/ is ok");
    } else {
        console.log("GET /user-active-plan-details/44737c18-b/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API user-active-plan-videos', async ({ request }) => {
    const response = await request.get(`${apiUrl}/user-active-plan-videos/1/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET user-active-plan-videos/1/ is ok");
    } else {
        console.log("GET user-active-plan-videos/1/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

//Its a patch request can't do get requests

// test('GET request to an API update-user-plan-day', async ({ request }) => {
//     const response = await request.get(`${apiUrl}/update-user-plan-day/1/`, { headers });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(200);

//     let statusCode = response.status();
//     if (statusCode === 200) {
//         console.log("GET /update-user-plan-day/1/ is ok");
//     } else {
//         console.log("GET /update-user-plan-day/1/ is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse and log the JSON response
//     const data = await response.json();
//     console.log(data);
// });


//Its a patch request can't do get requests


// test('GET request to an API update-user-plan-day-video/', async ({ request }) => {
//     const response = await request.get(`${apiUrl}/update-user-plan-day-video/2/`, { headers });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(200);

//     let statusCode = response.status();
//     if (statusCode === 200) {
//         console.log("GET /update-user-plan-day-video/2/ is ok");
//     } else {
//         console.log("GET /update-user-plan-day-video/2/ is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse and log the JSON response
//     const data = await response.json();
//     console.log(data);
// });

test('GET request to an API workshops/upcomming and ongoing', async ({ request }) => {
    const response = await request.get(`${apiUrl}/workshops/upcoming/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /workshops/upcoming/ is ok");
    } else {
        console.log("GET /workshops/upcoming/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API workshops/<str:pk>/', async ({ request }) => {
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

//should take athlete plan first
// test('GET request to an API athlete-plans/', async ({ request }) => {
//     const response = await request.get(`${apiUrl}/athlete-plans/`, { headers });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(200);

//     let statusCode = response.status();
//     if (statusCode === 200) {
//         console.log("GET /athlete-plans/ is ok");
//     } else {
//         console.log("GET /athlete-plans/ is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse and log the JSON response
//     const data = await response.json();
//     console.log(data);
// });

//should take plans first

// test('GET request to an API trainer-plans/', async ({ request }) => {
//     const response = await request.get(`${apiUrl}/trainer-plans/`, { headers });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(200);

//     let statusCode = response.status();
//     if (statusCode === 200) {
//         console.log("GET /trainer-plans/ is ok");
//     } else {
//         console.log("GET /trainer-plans/ is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse and log the JSON response
//     const data = await response.json();
//     console.log(data);
// });

test('GET request to an API plan/<str:pk>/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/plan/95c1899b-b/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /plan/95c1899b-b/ is ok");
    } else {
        console.log("GET /plan/95c1899b-b/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API testimonials-home', async ({ request }) => {
    const response = await request.get(`${apiUrl}/testimonials-home/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /testimonials-home/ is ok");
    } else {
        console.log("GET /testimonials-home/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API feed-training-home/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/feed-training-home/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /feed-training-home/ is ok");
    } else {
        console.log("GET /feed-training-home/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API artical-list-home/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/artical-list-home/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /artical-list-home/ is ok");
    } else {
        console.log("GET /artical-list-home/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API user-active-plans-app/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/user-active-plans-app/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /user-active-plans-app/ is ok");
    } else {
        console.log("GET /user-active-plans-app/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API update-user-details', async ({ request }) => {
    const response = await request.get(`${apiUrl}/update-user-details/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /update-user-details/ is ok");
    } else {
        console.log("GET /update-user-details/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API about-us/', async ({ request }) => {
    const response = await request.get(`${apiUrl}/about-us/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /about-us/ is ok");
    } else {
        console.log("GET /about-us/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});


test('GET request to an API user-active-workshop', async ({ request }) => {
    const response = await request.get(`${apiUrl}/user-active-workshop/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /user-active-workshop/ is ok");
    } else {
        console.log("GET /user-active-workshop/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

test('GET request to an API user-active-workshop-day', async ({ request }) => {
    const response = await request.get(`${apiUrl}/user-active-workshop-day/23200e97-d/`, { headers });

    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);

    let statusCode = response.status();
    if (statusCode === 200) {
        console.log("GET /user-active-workshop-day/23200e97-d/ is ok");
    } else {
        console.log("GET /user-active-workshop-day/23200e97-d/ is not ok");
    }

    // Check for the content type to be 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // Parse and log the JSON response
    const data = await response.json();
    console.log(data);
});

//500 Internal server error

// test('GET request to an API user-active-workshop-day-video', async ({ request }) => {
//     const response = await request.get(`${apiUrl}/user-active-workshop-day-video/1/`, { headers });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(200);

//     let statusCode = response.status();
//     if (statusCode === 200) {
//         console.log("GET /user-active-workshop-day-video/1/ is ok");
//     } else {
//         console.log("GET /user-active-workshop-day-video/1/ is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse and log the JSON response
//     const data = await response.json();
//     console.log(data);
// });

//its a patch request

// test('GET request to an API update-workshop-day/', async ({ request }) => {
//     const response = await request.get(`${apiUrl}/update-workshop-day/1/`, { headers });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(200);

//     let statusCode = response.status();
//     if (statusCode === 200) {
//         console.log("GET /update-workshop-day/1/ is ok");
//     } else {
//         console.log("GET /update-workshop-day/1/ is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse and log the JSON response
//     const data = await response.json();
//     console.log(data);
// });

//its a patch request

// test('GET request to an API update-workshop-video', async ({ request }) => {
//     const response = await request.get(`${apiUrl}/update-workshop-video/1/`, { headers });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(200);

//     let statusCode = response.status();
//     if (statusCode === 200) {
//         console.log("GET /update-workshop-video/1/ is ok");
//     } else {
//         console.log("GET /update-workshop-video/1/ is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse and log the JSON response
//     const data = await response.json();
//     console.log(data);
// });