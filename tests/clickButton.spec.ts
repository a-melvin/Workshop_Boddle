import { test,expect} from '@playwright/test';


test("workshop clicking on buttons",async ({page})=>{

    await page.goto("https://demoqa.com/buttons")

    //await page.locator("#doubleClickBtn").scrollIntoViewIfNeeded()
    await page.locator("#doubleClickBtn").dblclick()

    await expect(await page.locator("p#doubleClickMessage")).toHaveText("You have done a double click")
})

test("workshop clicking on buttons1",async ({page})=>{

    await page.goto("https://demoqa.com/buttons")

    //await page.locator("#rightClickBtn").scrollIntoViewIfNeeded()
    await page.locator("#rightClickBtn").click({ button: 'right' })

    await expect(await page.locator("p#rightClickMessage")).toHaveText("You have done a right click")
})

test("workshop clicking on buttons2",async ({page})=>{

    await page.setViewportSize({ width: 2560, height: 1080 });
    await page.goto("https://demoqa.com/buttons")

    //await page.locator("#RD5Sk").scrollIntoViewIfNeeded()
    await page.locator("#xfPgF").click()

    await expect(await page.locator("p#dynamicClickMessage")).toHaveText("You have done a dynamic click")
})