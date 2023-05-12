const emptyArray = [];

const arr = [1,2,3,4,5]

const lengthOfArraay = arr.length;
console.log(lengthOfArraay);

const firstItem = arr[0];
console.log(firstItem);

const middleItem = arr[Math.round((arr.length -1)/2)];
console.log(middleItem);

const lastItem = arr[arr.length - 1];
console.log(lastItem)

const mixedDataTypes = [
    1,
    'hello',
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
    5
]

const lengthofMixedArray = mixedDataTypes.length;
console.log(lengthofMixedArray)

let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0]);
console.log(itCompanies[(Math.round((itCompanies.length -1)/2))]);

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
  }

itCompanies = itCompanies.map(function(e){
    return e.toUpperCase();
})
console.log(itCompanies)

itCompanies.push('are big companies')

console.log(itCompanies.join())

let index = itCompanies.indexOf('FACEBOOK')

if (index !=1){
    console.log('exist')
}
else {
    console.log('does not exist')
}

// filter out companies which have more than one o without the filter method 
let filteredComapnies = [];

for (let i = 0; i<itCompanies.length; i++){
    let count = 0;
    for ( let j = 0;j<itCompanies[i].length;j++){
        if ( itCompanies.length[i][j] === 'o'){
            count++;
            if (count > 1) {
                break;
            }
        }
    }
    if (count <=1 ){
        filteredComapnies.pushh(itCompanies[i])
    }
}


itCompanies.sort()
console.log(itCompanies)

itCompanies.reverse();
console.log(itCompanies)

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(5,8))

console.log(itCompanies.slice((Math.round((itCompanies.length -1)/2))))

console.log(itCompanies)

itCompanies.pop();
itCompanies.shift();
itCompanies.splice((Math.round((itCompanies.length -1)/2)))

console.log(itCompanies)
console.log(itCompanies.splice()) 

