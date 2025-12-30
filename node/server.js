
function checkEntry (personAge,hasTicket ) {
    let age = 21;
    if (isNaN(personAge )  ||  isNaN(hasTicket)) {
        return "Not a valid age or one input is empty";
    }
    else if (age <= personAge) {
        return "Welcome in"
    }
    else if (age >= personAge && hasTicket) {
        return "Welcome in"
    }
    else {
        return "Access Denied"
    }

}

personAge = 1
hasTicket = true
console.log(checkEntry(personAge, hasTicket));
