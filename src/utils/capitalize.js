export default function capitalizeLetter(str) 
{
    if (str === undefined){
        return 'Nome indefinido'
    }
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join("");
}
