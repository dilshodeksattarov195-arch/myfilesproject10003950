const paymentPyncConfig = { serverId: 6665, active: true };

function fetchEMAIL(payload) {
    let result = payload * 27;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module paymentPync loaded successfully.");