import { expect } from "chai";

const CONNECTION_DEBUG = process.env.CONNECTION_DEBUG
describe("Move Test", () => {
    it("should go to google", () => {
        if (CONNECTION_DEBUG) {

            browser.execute("sauce:throttleNetwork", {
                "condition": "offline"
            });
        }

        browser.url("https://www.realtor.com/realestateandhomes-search/San-Francisco_CA");
        const errorElement = $(".//*[@id='main-message']/h1|//*[text()='This site canât be reached']|//*[text()='Canât Connect to the Proxy Server']|//*[text()='The proxy server is refusing connections']")

        const errorExists = errorElement.isExisting();
        console.log(`Result is: ${errorExists}`)
        if (errorExists) {        
            expect("").to.be.equal("Error exists in page")
        }        
    
    })

})