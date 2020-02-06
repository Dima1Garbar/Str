var str = "fqwierityuiop", long = 0, symbol = 'i';
function func(user_symbol){
    for (i = 0; i <= str.length; i++){
        if (user_symbol === str[i]){
            long += 1;
        }
    }
}
func(symbol);
console.log(long);
