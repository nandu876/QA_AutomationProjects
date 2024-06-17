const { test, expect, request } = require('@playwright/test');
const fs = require('fs');
const FormData = require('form-data');

 const apiUrl = 'https://v3h2dw9k-8040.inc1.devtunnels.ms/api';
let authToken = 'a584efb462f4199e922b116705799ae2a684663c';

test('should upload an image with additional fields and token', async ({ request }) => {
    // Authorization token
    const token = authToken;

    // Image file path and name
    const imagePath = 'C:/Users/Thejeswar/Downloads/';
    const imageName = 'george-pagan-iii-iDJoeqe5Lug-unsplash.jpg';
    const filePath = `${imagePath}${imageName}`;

    // Prepare form data
    const form = new FormData();
    form.append('feed_video_name', 'Weight tes api testing');
    form.append('select_category',4);
    form.append('upload_video', fs.createReadStream(filePath), {
        filename: imageName,
        contentType: 'image/jpeg'
    });

    // Debug form data by writing it to a file
    const debugStream = fs.createWriteStream('form-data.txt');
    form.pipe(debugStream);
    
    // Wait for the form data to be fully written to the file
    await new Promise((resolve) => form.on('end', resolve));

    // Log the form data to the console for verification
   
    // Send POST request
    const response = await request.post(`${apiUrl}/feed_traning_create/`, {
        headers: {
            'Authorization': `token ${token}`,
            ...form.getHeaders()
        },
        body: form
    });
    const responseBody = await response.json();
    console.log(responseBody)
    console.log('Response body:', responseBody);

    // Check the response status
    expect(response.status()).toBe(200);

    // Check the response body
    // const responseBody = await response.json();
    // console.log(responseBody);

    // Additional assertions based on your API's response
    expect(responseBody).toHaveProperty('success', true);
});

// const { test, expect } = require('@playwright/test');
// const fs = require('fs');
// const path = require('path');


// // Define common variables
// const apiUrl = 'https://v3h2dw9k-8040.inc1.devtunnels.ms/api';
// let authToken = 'a584efb462f4199e922b116705799ae2a684663c';


// test('POST image and other fields with Playwright', async ({ request }) => {
//     const imagePath = path.resolve(__dirname, 'your_image.jpg'); // Replace with your image path
//     const imageData = fs.readFileSync(imagePath);
  
//     const response = await request.post('/api/feed_testimonal_create/', {
//       multipart: {
//         testimonal_video_name: 'Weight tes api testing',
//         select_category: 5,
//         poster: {
//           name: 'poster.jpg', // Adjust filename if needed
//           contentType: 'image/jpg', // Set content type based on image format
//           buffer: imageData,
//         },
//         testimonal_video: {
//           name: 'testimonal_video.jpg', // Adjust filename if needed (replace with actual video extension)
//           contentType: 'video/mp4', // Set content type based on video format (adjust if different)
//           buffer: imageData, // Replace with actual video data if possible
//         },
//       },
//     });
  
//     // Assert response status code and other details
//     expect(response.ok()).toBeTruthy();
//     // Add more assertions based on your API response structure
//   });
//  // File paths
//  const posterPath = "C:/Users/Thejeswar/Downloads/george-pagan-iii-iDJoeqe5Lug-unsplash.jpg";
//  const videoPath = "C:/Users/Thejeswar/Downloads/1596861-uhd_3840_2160_30fps (1).mp4";
// Set up common headers
// let headers;


// Configure common setup before each test
// test.beforeEach(async () => {
//     headers = {
//         'Authorization': `token ${authToken}`,
//         'Content-Type': 'application/json',
        
        
//     };
// });

//Test for POST request



// test('POST request to an API login endpoint', async ({ request }) => {
//     const postData = {
//         "username": "sayim",
//         "password": "sayim"
//     };

//     const response = await request.post(`${apiUrl}/admin-login/`, {
//         headers : {
//             'Authorization': `token ${authToken}`,
//             'Content-Type': 'application/json',
            
            
//         },
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

// test('POST request with form data including file upload', async ({ request }) => {

//     const file = path.resolve("C:/Users/Thejeswar/Downloads/", "aaron-brogden-uPrxxLSkovY-unsplash.jpg");
//     // const file1 = path.resolve("C:/Users/Thejeswar/Download","1596861-uhd_3840_2160_30fps (1).mp4")
//     const image = fs.readFileSync(file);
//     // const video = fs.readFileSync(file1);
//     // "C:\Users\Thejeswar\Downloads\aaron-brogden-uPrxxLSkovY-unsplash.jpg"

   
//     // const posterPath = "C:/Users/Thejeswar/Downloads/george-pagan-iii-iDJoeqe5Lug-unsplash.jpg";
//     // const videoPath = "C:/Users/Thejeswar/Downloads/1596861-uhd_3840_2160_30fps (1).mp4";
//     // Create the form data
//     const formData = {
//         'testimonal_video_name': 'Weight tes api testing',
//         "select_category":5,
//         'poster': image,
//         'testimonal_video':image
//     };

//     // Make the POST request with form data
//     const response = await request.post(`${apiUrl}/feed_testimonal_create/`, {
//         headers : {
//             'Authorization': `token ${authToken}`,
//             'Content-Type': 'multipart/form-data'
            
 
//         },
//         multipart: {
//             image: {
//               name: 'aaron-brogden-uPrxxLSkovY-unsplash.jpg', // Adjust filename if needed
//               // @ts-ignore
//               contentType: 'image/jpg', // Set content type based on image format
//               // @ts-ignore
//             //   buffer: imageData,
//             },
//             // Add other fields if your API requires them
//             // @ts-ignore
//             data: formData
//           },
//     });

//     // Check for successful response (status code 200)
//     expect(response.status()).toBe(201);

//     let statusCode = response.status();
//     if (statusCode === 201) {
//         console.log("POST /feed_testimonal_create/ is ok");
//     } else {
//         console.log("POST /feed_testimonal_create/ is not ok");
//     }

//     // Check for the content type to be 'application/json'
//     expect(response.headers()['content-type']).toContain('application/json');

//     // Parse the JSON response
//     const data = await response.json();
//     console.log(data);
// });