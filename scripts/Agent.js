export const Agent = (agentObject) => {
    return `
        <section class="agent">
            <h2 class="agent__fullName">${agentObject.fullname}</h2>
            <div class="agent__company">
                ${agentObject.company} 
            </div>
            <div class="agent__phoneNumber">${agentObject.phoneNumber}</div>
        </section>
    `
}