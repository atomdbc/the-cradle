

function entryStatus(personAge: number, hasTicket: boolean) : string{
    if (personAge >= 21) {
        return "Welcome in";
    }
    else if (personAge <21 && hasTicket){
        return "Welcome in";
    }
    return "Access Denied";

}

console.log(entryStatus(33, false));
