import { useBusinesses } from "./BusinessProvider.js"
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
    const businessArray = useBusinesses()
    newYorkContentTarget.innerHTML = "<h1>New York Businesses</h1>"

    const newYorkBusinessArray = businessArray.filter(businessObject => {
        if (businessObject.addressStateCode === "NY") {
            return true
        }
        return false
    })

    newYorkBusinessArray.forEach(
        (businessObject) => {
            newYorkContentTarget.innerHTML += Business(businessObject)
        }
    );
}


const manufacturingContentTarget = document.querySelector(".businessList--manufacturing")
export const ManufacturingBusinessList = () => {
    const businessArray = useBusinesses()
    manufacturingContentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

    const manufacturingBusinessArray = businessArray.filter(businessObject => {
        if (businessObject.companyIndustry === "Manufacturing") {
            return true
        }
        return false
    })

    manufacturingBusinessArray.forEach(
        (businessObject) => {
            manufacturingContentTarget.innerHTML += Business(businessObject)
        }
    );
}