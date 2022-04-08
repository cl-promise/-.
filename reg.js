var longestCommonPrefix = function(strs) {
    const leni = strs.length
    let tem = 200
    const lenj = strs.map((str) => {
        if (str.length < tem) {
            tem = str.length
            return tem
        }
    })
    let str = ''
    // console.log(tem)
    if (leni == 0 || tem == 0) {
        return str
    } else {
        for(let i = 0; i < tem; i++) {
            for(let j = 0; j < leni -1; j++) {
                console.log(strs[j+1])
    
                if (strs[j][i] != strs[j+1][i]) {
                    console.log(i)
                    if (i <= 0){
                        return str = ''
                    } else {
                        return str = strs[0].substr(0, i)
                    }
                }
            }
        }
    }
};

const strs = ['']
console.log(longestCommonPrefix(strs))
