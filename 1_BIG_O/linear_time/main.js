const { performance } = require('perf_hooks');

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin',
    'nemo', 'gill', 'bloat',
    'nigel', 'squirt', 'darla',
    'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
    let t0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now()
    console.log(`Call to find Nemo took ${t1 - t0} milliseconds`)
}


findNemo(large);
//Big O notation of O(n) --> Linear Time
//n is the input element size
//4 elements array - 4 loops
//5 elements array - 5 loops
//n elements array - n loops

