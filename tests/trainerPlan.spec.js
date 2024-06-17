import { test, expect } from "@playwright/test";

const { faker } = require("@faker-js/faker");

const url = "http://localhost:5173";

let dashboardpage, userpage, Queriespage, Athleteplanspage, trainerpalnspage;
test.beforeEach("should login", async ({ page }) => {
  await page.goto(`${url}/login`);
  await page.locator("//input[@placeholder='User name']").fill("sayim");
  await page.locator("//input[@placeholder='Password']").fill("sayim");
  await page.getByText("login").click();
});

test("should test trainer plan page", async ({ page }) => {
  // Generate random task data
  const planName = faker.lorem.words(3); // Random task name
  const planDescription = faker.lorem.sentences(3);
  const planBenefits = faker.lorem.sentences(2);
  const taskDate = faker.date.future().toISOString().split("T")[0]; // Random future date in YYYY-MM-DD format
  const totaldays = Math.floor(Math.random() * 10); // Generate a random number less than 30

  const plancost = Math.floor(Math.random() * 99999);
  
  const planValidity = Math.floor(Math.random() * 30);

  trainerpalnspage =
    "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper']//div//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root'][normalize-space()='Trainer Plans']";
  await page.locator(trainerpalnspage).click();

  await page.getByText("Add Plan").click();
  let test = await page.url();
  console.log(test);
  expect(test).toContain(`${url}/add-traning-plans`);
  await page.waitForSelector("//button[normalize-space()='Create']");

  await page.getByPlaceholder("Name Should not exceed 25").fill(planName);
  console.log(planName);
  await page
    .getByPlaceholder("Description Should not exceed 250 words")
    .fill(planDescription);
  console.log(planDescription);
  await page.waitForSelector(
    "//div[@class='MuiBox-root css-roe1zb']//div[3]//div[1]//div[1]"
  );
  await page
    .getByPlaceholder("Enter the Benifits for following Plan")
    .fill(planBenefits);
  await page.waitForSelector("//div[4]//div[1]//div[1]");
  console.log(planBenefits);
  
  await page
    .getByPlaceholder("Plan Cost must be between Less Then 99999")
    .fill(plancost.toString());

  await page
    .getByPlaceholder("Total Days must be between 1 and 30")
    .fill(totaldays.toString());


  // Ensure the label or button that triggers the file input is visible
  await page.waitForSelector('text="Upload Image"', { state: "visible" });

  // Click the label or button to reveal the file input if necessary
  await page.click('text="Upload Image"');

  // Locate the file input element using the associated label
  const fileInput = await page.getByText("Upload Image");
  if (!fileInput) {
    console.error("File input element not found");
    await browser.close();
    return;
  }

  // Path to your image file
  const filePath =
    "C:\\automationTesting\\sportsAndscience\\tests\\images\\aaron-brogden-uPrxxLSkovY-unsplash.jpg";

    await page.waitForTimeout(2000)

  // Upload the file
  await fileInput.setInputFiles(filePath);
  await page.waitForSelector("//img[@alt='Plan Preview']");
  await page.waitForSelector("//button[normalize-space()='Create']")
  await page.getByText("Create").click();
  await page.waitForSelector(trainerpalnspage)
  await page.locator(trainerpalnspage).click();
//   let searchInput = "//input[@id=':r1:']"
  await page.getByLabel('Search Plans').fill(planName)


  // Verify the table contents
  const rcvplanName = await page.textContent('.MuiTableCell-root.css-10g31un-MuiTableCell-root');
  try {
    // Wait for the table element to appear
    await page.waitForSelector('.MuiTable-root');

    // Get the total days cell element and extract its inner text
    const totalDaysElement = await page.$('.MuiTableCell-root.css-1ex1afd-MuiTableCell-root:nth-of-type(3)');
    const totalDays = await totalDaysElement.innerText();}catch{
  const cell = await page.getByRole('cell', { name: '2' });
  const rcvtotalDays = await cell.innerText();
  expect(rcvtotalDays).toBe(totaldays);
    }

    try {
        // Wait for the table element to appear
        await page.waitForSelector('.MuiTable-root');
    
        // Get the total days cell element and extract its inner text
        const totalDaysElement = await page.$('.MuiTableCell-root.css-1ex1afd-MuiTableCell-root:nth-of-type(3)');
        const totalDays = await totalDaysElement.innerText();}catch{
      const cell = await page.getByRole('cell', { name: '2' });
      const rcvtotalDays = await cell.innerText();
      expect(rcvtotalDays).toBe(totaldays);
        }
  const rcvplanCost = await page.textContent('.MuiTableCell-root.css-1ex1afd-MuiTableCell-root:nth-of-type(4)');
  
  expect(rcvplanName).toBe(planName);
  
  expect(rcvplanCost).toBe(plancost);
  
});
