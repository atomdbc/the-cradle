
function checkEntry (personAge,hasTicket ) {
    if (isNaN(personAge )  ||  isNaN(hasTicket)) {
        return "Not a valid age or one input is empty";
    }
    else if (21 <= personAge) {
        return "Welcome in"
    }
    else if (21 >= personAge && hasTicket) {
        return "Welcome in"
    }
    else {
        return "Access Denied"
    }

}

personAge = 1
hasTicket = true
console.log(checkEntry(personAge, hasTicket));
