function concatStrings(stra, strb){
    return stra + strb;
}
console.log(concatStrings('abc', 'def'));
// using jest syntax
expect(concatStrings('abc', 'def')).toBe('abcdef');