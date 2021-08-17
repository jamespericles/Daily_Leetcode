/**
 * Prompt: 
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * 
 * Given a roman numeral, convert it to an integer.
 */

/**
 * @param {string} s
 * @return {number}
 */

 const symbol = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

function romanToInt(s: string): number {    
    let maxNumb = 0;
    let total = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (symbol.get(s[i]) < maxNumb) {
            total -= symbol.get(s[i]);
            continue;
        }
        
        maxNumb = symbol.get(s[i]);
        total += symbol.get(s[i]);
    }
    
    return total;
};