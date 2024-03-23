//* Write a function that produces a string in which each lowercase letters of s1
//* or s2 appears as many times as its maximum if this maximum is strictly greater 
 //* than 1; these letters will be prefixed by the number of the string where they appear 
 //* with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:

//~ pseudocode
//` o) iterate through each string and record how often each lowercase appears
//` o) sort each word's letter list based on frequency 
//` 0) add all letter clusters to a string, taking into account which string
//`     they come from

// sort by .length 
// use two queues simultaneously when adding to final string 

function lowercaseClusters(str) {
    const clusterObject = {};
    const clusterArray = [];
    for (const char of str.replace(/[A-Z\s]/g, '')) {
        char in clusterObject ? (clusterObject[char] += char) : (clusterObject[char] = char);
    }

    Object.keys(clusterObject).map((key) => {
        if (clusterObject[key].length >= 2) {
            clusterArray.push(clusterObject[key]);
        }
    });

    return clusterArray.sort((str1, str2) => {
        if (str1.length === str2.length) {
            return str2.localeCompare(str1);
        } else {
            return str1.length - str2.length;
        }
    });
}

function mix(s1, s2) {
    let finalStrArr = []
    const str1 = lowercaseClusters(s1);
    const str2= lowercaseClusters(s2);
    console.log(str1);
    console.log(str2);
    while (str1.length && str2.length) {
        let Regex1 = new RegExp(`${str1[str1.length-1]}`, 'g')
        let Regex2 = new RegExp(`${str2[str2.length-1]}`, 'g')
        if (finalStrArr.join('').match(Regex1)) {
            str1.pop();
        }
        else if (finalStrArr.join('').match(Regex2)) {
            str2.pop();
        }
        else if (str1[str1.length-1].length > str2[str2.length-1].length) {
            finalStrArr.push(`1:${str1.pop()}`);
        }
        else if (str1[str1.length-1].length < str2[str2.length-1].length) {
            finalStrArr.push(`2:${str2.pop()}`);
        }
        else {
            console.log(str1[str1.length-1]);
            console.log(str2[str2.length-1]);
            if (str1[str1.length-1] !== str2[str2.length-1]) {
                if (str1[str1.length-1].localeCompare(str2[str2.length-1]) < 0) {
                    finalStrArr.push(`1:${str1.pop()}`)
                }
                else {
                    finalStrArr.push(`2:${str2.pop()}`)
                }
            }
            else {
                finalStrArr.push(`=:${str1.pop()}`);
                str2.pop();
            }
        }
    }
    while (str1.length) {
        finalStrArr.push(`1:${str1.pop()}`)
    }
    while (str2.length) {
        finalStrArr.push(`2:${str2.pop()}`)
    }
    console.log(finalStrArr);
    return finalStrArr.join('/')
 }

 console.log(mix("you are like a rat mm", "if my tweets seem untethered"));

 //! Temporary pause; refactor necessary 
 //! At the moment, it's impossible for me to put =: cluster
 //! AFTER 1: or 2: clusters.
 //! Will need to refactor for this somehow.