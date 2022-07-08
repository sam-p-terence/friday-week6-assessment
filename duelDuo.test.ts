
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
    let seeAll = await driver.findElement(By.id('see-all')).click()
    await driver.sleep(2200)
})

test('See if Draw button works', async () => {
    let seeAll = await driver.findElement(By.id('draw')).click()
    await driver.sleep(2200)
})

test('"Add to Duo" button displays the player duo section', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    const playerDuoSection = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoSection.isDisplayed()
    expect(displayed).toBe(true)
})

test('"Add to Duo" button displays the player duo section', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    const playerDuoSection = await driver.findElement(By.id('player-duo'))
    const selectedRobotName = await driver.findElement(By.xpath('//div[@id="player-duo"]/div/h3')).getText()
    await driver.findElement(By.xpath('//button[text()="Remove from Duo"]')).click()
    const returnedRobot = await driver.findElement(By.xpath('//div[@id="choices"]/div/h3[contains(text(), ' + selectedRobotName + ')]'))
    await driver.sleep(2000)
    const displayed = await returnedRobot.isDisplayed()
    expect(displayed).toBe(true)
}),



test('Draw Button with Choice', async () => {
    await driver.findElement(By.id('draw')).click()
    let choice = await driver.findElement(By.id('choices'))
    expect(driver).toBe(true)
})