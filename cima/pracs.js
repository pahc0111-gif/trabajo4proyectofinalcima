const pantalla= document.getElementById('pantalla');
function agregar(valor){
    if (pantalla.value==='0' || pantalla.value==='error') {
        pantalla.value=valor;
    } else {
        pantalla.value += valor;
    }
} 
function borraruno(){
    if (pantalla.value.length=== 1|| pantalla.value=== 'error'){pantalla.value= '0';
    } else {
        pantalla.value= pantalla.value.slice(0,-1);
    
    }
}
function calcular(){
    try {
        pantalla.value= eval(pantalla.value);
    } catch (error){
        pantalla.value = 'error';
    }
}
function limpiar(){
    pantalla.value= 0;

}
