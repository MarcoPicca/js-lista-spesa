// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente con un ciclo while.



let listaPagina = document.getElementById('list');

let listaSpesa = ['Tonno, ', 'uova, ', 'latte, ', 'pistacchi, ', 'pane, ', 'pomodori.'];

let i = 0;

// for (let i=0; i < listaSpesa.length; i++){
    
//         listaPagina.innerHTML += listaSpesa[i];
// }


while (i < listaSpesa.length){

    
    listaPagina.innerHTML += listaSpesa[i];
    i++;

}


