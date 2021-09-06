const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {


    const number = 3;
    const matriz = [
        [1 ,2, 3], 
        [4, 5, 6],
        [9, 8, 9],
    ];

    const derecha  = sumaDiagonalDerecha(matriz, number);
    const izquierda = sumaDiagonalIzquierda(matriz, number);

    let diferenciaAbsoluta = izquierda - derecha;

    res.json({
        diferenciaAbsoluta
    })
})

function sumaDiagonalDerecha (matriz, number)  {
    let suma = 0;
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (i === j) {
                suma = suma + matriz[i][j];
            }
        }
    }
    msj = suma;
     return msj;
}

function sumaDiagonalIzquierda(matriz, number)  {
    let suma = 0;
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if ( i + j === number - 1 ) {
                suma = suma + matriz[i][j];
            }
        }
    }
    msj = suma;
    return msj;
}

module.exports = router;