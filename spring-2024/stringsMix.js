//* Write a function that produces a string in which each lowercase letters of s1
//* or s2 appears as many times as its maximum if this maximum is strictly greater
//* than 1; these letters will be prefixed by the number of the string where they appear
//* with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:

function lowercaseClusters(str) {
    const clusterObj = {};
    const clusterArr = [];
    for (const char of str.replace(/[A-Z\s]/g, '')) {
        char in clusterObj
            ? (clusterObj[char] += char)
            : (clusterObj[char] = char);
    }
    Object.keys(clusterObj).map((key) => {
        if (clusterObj[key].length >= 2) {
            clusterArr.push(clusterObj[key]);
        }
    });

    return clusterArr;
}

function intersectClusterArrs(arr1, arr2) {
    const combined = {};
    for (const item of arr1) {
        combined[item[0]] = ['1', item.length];
    }
    for (const item of arr2) {
        if (item[0] in combined) {
            if (item.length < combined[item[0]][1]) {
                continue;
            } else if (item.length > combined[item[0]][1]) {
                combined[item[0]] = ['2', item.length];
            } else {
                combined[item[0]] = ['=', item.length];
            }
        } else {
            combined[item[0]] = ['2', item.length];
        }
    }
    const arr = [];
    for (const [key, value] of Object.entries(combined)) {
        arr.push([value[1], value[0], key]);
    }
    return arr.sort(function (a, b) {
        if (
            a[0] === b[0] &&
            (a[1] === '=' || b[1] === '=') &&
            !(a[1] === '=' && b[1] === '=')
        ) {
            return b[1].localeCompare(a[1]);
        } else if (a[0] === b[0] && a[1] === b[1]) {
            return a[2].localeCompare(b[2]);
        } else if (a[0] === b[0]) {
            return a[1].localeCompare(b[1]);
        } else {
            return b[0] - a[0];
        }
    });
}

function clusterArrToString(arr) {
    const stringsArr = arr.map((a) => {
        str = '';
        str.concat(a[1]).concat(':').concat(a[2].repeat(a[0]));
        return a[1].concat(':').concat(a[2].repeat(a[0]));
    });
    return stringsArr.join('/');
}

function mix(s1, s2) {
    const combinedClusters = intersectClusterArrs(
        lowercaseClusters(s1),
        lowercaseClusters(s2)
    );
    return clusterArrToString(combinedClusters);
}

console.log(mix('looping is fun but dangerous', 'less dangerous than coding'));
console.log('1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg');
