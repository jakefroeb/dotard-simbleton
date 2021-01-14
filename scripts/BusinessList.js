import { getManufacturingBusinesses, getNewYorkBusinesses, getPurchasingAgents, useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const agentSearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            const foundAgent = getPurchasingAgents().find(purchasingAgent => purchasingAgent.fullname.includes(keyPressEvent.target.value))// implement .find() method here

            agentSearchResultArticle.innerHTML = `
            <h2 class="agent__fullName">${foundAgent.fullname}</h2>
            <div class="agent__company">
                ${foundAgent.company} 
            </div>
            <div class="agent__phoneNumber">${foundAgent.phoneNumber}</div>
            `;
        }
    });



const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}


const newYorkContentTarget = document.querySelector(".businessList--newYork")
export const NewYorkBusinessList = () => {
    const newYorkBusinessArray = getNewYorkBusinesses()
    newYorkContentTarget.innerHTML = "<h1>New York Businesses</h1>"
    newYorkBusinessArray.forEach(
        (businessObject) => {
            newYorkContentTarget.innerHTML += Business(businessObject)
        }
    );
}


const manufacturingContentTarget = document.querySelector(".businessList--manufacturing")
export const ManufacturingBusinessList = () => {
    const manufacturingBusinessArray = getManufacturingBusinesses()
    manufacturingContentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"
    manufacturingBusinessArray.forEach(
        (businessObject) => {
            manufacturingContentTarget.innerHTML += Business(businessObject)
        }
    );
}

