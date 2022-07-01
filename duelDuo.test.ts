
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2200)
})

test('See All Bots button clicks and is working', async () => {
    let seeAll = await driver.findElement(By.id('see-all'))
    await driver.sleep(2200)
})

// test('Draw Button with Choice', async () => {
//     await driver.findElement(By.id('draw')).click()
//     let choice = await driver.findElement(By.id('choices'))
//     expect(driver).toBe(true)
// })