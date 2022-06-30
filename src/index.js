const dict = {
    '(': ')',
    '[': ']',
    '{': '}',
    '|': '|'
}
module.exports = function check(str, bracketsConfig) {
    let dict = {}
    let stack = []
    bracketsConfig.forEach((item,index)=> {

        dict[item[0].toString()] = item[1]
    })

    let open = bracketsConfig.reduce((acc,cur)=> acc.concat(cur[0]),[])
    let close = bracketsConfig.reduce((acc,cur)=> acc.concat(cur[1]),[])
    for (let bracket of str){
        if (open.includes(bracket) && close.includes(bracket) ){
            if (!stack.includes(bracket)){
                stack.push(bracket)
            }
            else{
                stack.pop()
            }
        }
        else{


            if (open.includes(bracket)){

                stack.push(bracket)
            }
            else {
                pop_el = stack.pop()
                if (dict[pop_el] === bracket){
                    continue
                }
                else{
                    return false
                }
            }
        }


    }
    return stack.length === 0
}



