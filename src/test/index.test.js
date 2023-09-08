import pt from "puppeteer";

describe("Form Login", () => {
  let page;
  beforeAll(async () => {
    const browser = await pt.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("http://localhost:5173/login");
  });

  it("should error message fname", async () => {
    const btn = await page.$("#btn-login");
    await btn.click();

    const messageError = await page.evaluate(async () => {
      const spanFname = document.getElementById("msg-error-fname");
      return spanFname?.innerHTML;
    });

    expect(messageError).toBe("First name is not empty");
  });

  afterAll(async () => {});
});
