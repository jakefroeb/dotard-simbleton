import { getManufacturingBusinesses, getNewYorkBusinesses, useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

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