import {Agent} from "./Agent.js"
import {getPurchasingAgents} from "./BusinessProvider.js"

const agentContentTarget = document.querySelector(".agents")

export const AgentList = () => {
    const agentArray = getPurchasingAgents()
    agentContentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    agentArray.forEach(
        (agentObject) => {
            agentContentTarget.innerHTML += Agent(agentObject)
        }
    );
}