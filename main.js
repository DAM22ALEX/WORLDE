const palabra = 'BALON';
let palabra_letras = palabra

function to_array(word) {
    let palabra_array = [5];
    for (var i = 0; i < word.lenght(); i++) {
        palabra_array[i]=word.charAt(i);
    }
    return palabra_array;
}
console.log(to_array(palabra));
document.write('Hola')