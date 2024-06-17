import { test, expect } from "@playwright/test";



const url = "http://localhost:5173";


let
dashboardpage,userpage,Queriespage,Athleteplanspage,trainerpalnspage
test.beforeEach("should login", async ({ page }) => {
  await page.goto(`${url}/login`);
  await page.locator("//input[@placeholder='User name']").fill("sayim");
  await page.locator("//input[@placeholder='Password']").fill("sayim");
  await page.getByText("login").click();
});
test("should login,and verify dashboard content ", async function ({ page }) {
  //slide bar content
   dashboardpage =
    "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper']//div//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root'][normalize-space()='Dashboard']";
  userpage =
    "//body/div[@id='root']/div[@class='MuiBox-root css-k008qs']/nav[@aria-label='mailbox folders']/div[@class='MuiDrawer-root MuiDrawer-docked css-oietc-MuiDrawer-docked']/div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper']/div/ul[@class='MuiList-root MuiList-padding css-h4y409-MuiList-root']/li[2]/div[1]";
   Queriespage =
    "//body/div[@id='root']/div[@class='MuiBox-root css-k008qs']/nav[@aria-label='mailbox folders']/div[@class='MuiDrawer-root MuiDrawer-docked css-oietc-MuiDrawer-docked']/div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper']/div/ul[@class='MuiList-root MuiList-padding css-h4y409-MuiList-root']/li[6]/div[1]";

  Athleteplanspage =
    "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper']//div//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root'][normalize-space()='Athlete Plans']";

  trainerpalnspage =
    "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper']//div//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root'][normalize-space()='Trainer Plans']";

  //Dashboard cards values
  await page.waitForSelector(".MuiCardContent-root");
  const dashboardCardDetails = await page.$$eval(
    ".MuiCardContent-root",
    (elements) => {
      return elements.map((element) => {
        const title = element
          .querySelector(".css-1q07nhj-MuiTypography-root")
          .textContent.trim();
        const number = parseInt(
          element
            .querySelector(".css-dawgvx-MuiTypography-root")
            .textContent.trim()
        );

        return { title, number };
      });
    }
  );

  // Initialize variables to store numbers
  let totalUsers,
    totalAthletes,
    totalTrainers,
    totalQueries,
    totalAthletePlans,
    totalTrainerPlans;

  dashboardCardDetails.forEach((card) => {
    switch (card.title) {
      case "Users":
        totalUsers = card.number;
        break;
      case "Athlete":
        totalAthletes = card.number;
        break;
      case "Trainers":
        totalTrainers = card.number;
        break;
      case "Queries":
        totalQueries = card.number;
        break;
      case "Athlete Plans":
        totalAthletePlans = card.number;
        break;
      case "Trainer Plans":
        totalTrainerPlans = card.number;
        break;
      // Add more cases for other titles as needed
    }
  });

  // Print or use the variables as needed
  console.log("Total Users:", totalUsers);
  console.log("Total Athletes:", totalAthletes);
  console.log("Total Trainers:", totalTrainers);
  console.log("Total Queries:", totalQueries);
  console.log("Total Athlete Plans:", totalAthletePlans);
  console.log("Total Trainer Plans:", totalTrainerPlans);

  // go to users page
  await page.locator(userpage).click();
  await page.locator("//div[@role='combobox']").click();
  await page.locator("//li[normalize-space()='User']").click();

  // Get the number of Users
  const totaluserRows = await page.$$eval(
    ".MuiTableRow-root",
    (row) => row.length - 1
  ); //here -1 is the table header row

  // Print the number of users
  console.log(totaluserRows);
  //get Athletes
  await page.locator("//div[@role='combobox']").click();
  await page.locator("//li[normalize-space()='Athlete']").click();
  const athleteRows = await page.$$eval(
    ".MuiTableRow-root",
    (row) => row.length - 1
  );

  // Print the number ofAthletes
  console.log(athleteRows);

  //get trainer
  await page.locator("//div[@role='combobox']").click();
  await page.locator("//li[normalize-space()='Trainer']").click();
  const trainerRows = await page.$$eval(
    ".MuiTableRow-root",
    (row) => row.length - 1
  );

  // Print the number of trainer
  console.log(trainerRows);

  // go to Quaries page
  await page.locator(Queriespage).click();
  await page.waitForSelector(".MuiTableRow-root");

  const QuariesRows = await page.$$eval(
    ".MuiTableRow-root",
    (row) => row.length - 1
  );
  console.log(QuariesRows);
  console.log("i am in quaries");

  // go to athlete plans page
  await page.locator(Athleteplanspage).click();
  await page.waitForSelector(".MuiTableRow-root");

  const athletePlansRows = await page.$$eval(
    ".MuiTableRow-root",
    (row) => row.length - 1
  );
  console.log(athletePlansRows);
  console.log("i am in athlete plans");

  // go to trainer plans page
  await page.locator(trainerpalnspage).click();
  await page.waitForSelector(".MuiTableRow-root");

  const trainerPlansRows = await page.$$eval(
    ".MuiTableRow-root",
    (row) => row.length - 1
  );
  console.log(trainerPlansRows);
  console.log("i am in trainer plans");

  //verification of card inputs in dashboard
  await page.locator(dashboardpage).click();
  await page.waitForSelector(".MuiCardContent-root");

  expect(totalUsers).toEqual(totaluserRows);
  expect(totalAthletes).toEqual(athleteRows);
  expect(totalTrainers).toEqual(trainerRows);
  expect(totalQueries).toEqual(QuariesRows);
  expect(totalAthletePlans).toEqual(athletePlansRows);
  expect(totalTrainerPlans).toEqual(trainerPlansRows);
});


  