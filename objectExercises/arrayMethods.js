//array.sort()
//array.reduce()
//.map()
//sorting last names alphabetically exercise 7 confusing

//.some(), .every(), .find(), [...spreads]
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823424 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Rame is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
]

// is at least one person 19?
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});

// is everyone 19
const isEveryAdult = people.every(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});

//find()
//filter, but returns just one that you are looking for
// const comment = comments.find(comment => {
//     if (comment.id == 823424) {
//         return true;
//     }
// })

const comment = comments.find(comment => {
    return comment.id == 823424;
})

console.log(comment)

//findIndex()
const index = comments.findIndex(comment => comment.id === 823424);
console.log(index);

//splice() delete
comments.splice(index,1);
//another way:
const newComments = [
    ...comments.slice(0,index),
    ...comments.slice(index+1)
]

//^ SPREADING