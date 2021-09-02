//1 Hello, Object
let user = {};
user.name = "John";
console.log(user)
user.surname = "Smith";
console.log(user)
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);


//2
function isEmpty(obj) {
    if (Object.keys(obj).length > 0) {
        return false;
    }
    else return true;
}

animals = {
    dog: "inu",
    cat: "neko",
}

//3
let sum = 0;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

for (let i = 0; i < Object.keys(salaries).length; i++) {
    sum += parseInt(Object.values(salaries)[i])
    console.log(sum)
}



//4 

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);