import { test, expect } from "@playwright/test";
const fakerData = require('./faker.json');
const { faker } = require('@faker-js/faker');

let plan = fakerData.plans


const url = "http://localhost:5173";


let
dashboardpage,userpage,Queriespage,Athleteplanspage,trainerpalnspage
test.beforeEach("should login", async ({ page }) => {
  await page.goto(`${url}/login`);
  await page.locator("//input[@placeholder='User name']").fill("sayim");
  await page.locator("//input[@placeholder='Password']").fill("sayim");
  await page.getByText("login").click();
});

test("should test athlete plans page", async ({ page }) => {
 
    plan = fakerData
    console.log(plan.planName); 
    Athleteplanspage =
      "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper']//div//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root'][normalize-space()='Athlete Plans']";
  
   await page.waitForSelector(Athleteplanspage)
    await page.locator(Athleteplanspage).click();
    await page.waitForSelector(".MuiTableRow-root");
    await page.getByText("Add Plan").click()
    let test = await page.url()
    console.log(test);
    expect(test).toContain(`${url}/add-plan`);
    await page.waitForSelector("//button[normalize-space()='Create']")
    await page.getByPlaceholder('Name Should not exceed 25').fill(plan.planName)
    console.log(plan.planDescription)
    await page.getByPlaceholder("Description Should not exceed 250 words").fill(plan.planDescription)
    console.log(plan.planBenefits);
    await page.waitForSelector("//div[@class='MuiBox-root css-roe1zb']//div[3]//div[1]//div[1]")
    await page.getByPlaceholder("Enter the Benifits for following Plan").fill(plan.planBenefits)
    await page.waitForSelector("//div[4]//div[1]//div[1]")
    console.log(plan.planCost)
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Plan Cost must be between Less Then 99999").fill(plan.planCost)
    // Generate a random number less than 30
    const randomNumber = Math.floor(Math.random() * 30);
    console.log(`Random number: ${randomNumber}`);
    await page.getByPlaceholder('Total Days must be between 1 and 30').fill(randomNumber.toString())
    await page.waitForTimeout(3000)

  // Ensure the label or button that triggers the file input is visible
  await page.waitForSelector('text="Upload Image"', { state: 'visible' });

  // Click the label or button to reveal the file input if necessary
  await page.click('text="Upload Image"');

  // Locate the file input element using the associated label
  const fileInput = await page.locator("#imageUpload");
  if (!fileInput) {
    console.error('File input element not found');
    await browser.close();
    return;
  }

  // Path to your image file
  const filePath = 'C:\\automationTesting\\sportsAndscience\\tests\\images\\aaron-brogden-uPrxxLSkovY-unsplash.jpg';

  // Upload the file
  await fileInput.setInputFiles(filePath);
  await page.waitForSelector("//img[@alt='Plan Preview']")
 
  await page.getByText("Create").click()
  await page.getByText("ok").click()
  await page.waitForTimeout(2000);


await page.waitForSelector('text="Day 1"')
await page.click('text="Day 1"')

//add task
// Wait for the container that holds the buttons to be visible
await page.waitForSelector('.MuiBox-root.css-1mv3tne', { state: 'visible' });

// Get all buttons with text starting with "Day"
const buttons = await page.$$(`.MuiButtonBase-root:has-text("Day")`);

// Log the number of buttons found
console.log(`Found ${buttons.length} Day buttons`);

// Iterate over each button and click it
for (const button of buttons) {
  const buttonText = await button.innerText();
  console.log(`Clicking ${buttonText}`);
  await button.click();
  await page.waitForTimeout(2000);
   // Generate a random number less than 10
   const randomNumber = Math.floor(Math.random() * 10);
   console.log(`Random number: ${randomNumber}`);
await page.getByPlaceholder("00").fill(randomNumber.toString())
console.log(randomNumber)
await page.waitForTimeout(2000);

await page.getByText("Apply").click();


await page.waitForSelector('.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-mhc70k-MuiGrid-root', { state: 'visible' });

  // Get all task elements
  const taskContainers = await page.$$('.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation3.css-1ngliiu-MuiPaper-root');

  // Log the number of tasks found
  console.log(`Found ${taskContainers.length} tasks`);

 // Iterate over each task container and interact with the elements inside it
 for (const taskContainer of taskContainers) {
  // Generate random task data
  const taskName = faker.lorem.words(3); // Random task name
  const taskDate = faker.date.future().toISOString().split('T')[0]; // Random future date in YYYY-MM-DD format
  const taskDescription = faker.lorem.sentences(2); // Random task description
  await page.waitForTimeout(2000);

  // Fill task name input
  const taskNameInput = await taskContainer.$('input[type="text"]');
  if (taskNameInput) {
    await taskNameInput.fill(taskName);
    console.log(`Filled task name: ${taskName}`);
  }
  await page.waitForTimeout(2000);

  // Fill task date input
  const taskDateInput = await taskContainer.$('input[type="date"]');
  if (taskDateInput) {
    await taskDateInput.fill(taskDate);
    console.log(`Filled task date: ${taskDate}`);
  }
  await page.waitForTimeout(2000);

  // Fill task description textarea
  const taskDescriptionTextarea = await taskContainer.$('textarea');
  if (taskDescriptionTextarea) {
    await taskDescriptionTextarea.fill(taskDescription);
    console.log(`Filled task description: ${taskDescription}`);
  }

  // Optionally wait for some result or page update after each action
  await page.waitForTimeout(2000); // Adjust the timeout as needed
}
}


    
  })