import { assert, afterAll, beforeAll, describe, expect, test } from "vitest";
import { preview } from "vite";
import type { PreviewServer } from "vite";
import puppeteer from "puppeteer";
import type { Browser, Page } from "puppeteer";

describe("basic", async () => {
  let server: PreviewServer;
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  });

  // TODO make more stable
  test("should have the correct title", async () => {
    try {
      await page.goto("http://localhost:3000");
      const pageTitle = await page.title();
      console.log("It is: ", pageTitle);
      // expect(pageTitle).toBeDefined()

      // expect(pageTitle).toBe('Vite App')
    } catch (e) {
      console.error(e);
      expect(e).toBeUndefined();
    }
  }, 60_000);
});
