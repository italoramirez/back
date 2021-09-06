const express = require('express');
const router = express.Router();

// const Anagram = require('../models/Anagrama');

router.post('/', (req, res) => {

    const angr = [req.body];
    
    // const anagrama = compararAnagrama(angr); 
    
    angr.map( a =>{
        const var2 = a.cadena.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().split("").sort().join("");
        const var1 = a.cadena2.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().split("").sort().join(""); 
        console.log('var1',var1);
        console.log('var2',var2);
        try {
            if (var1 === var2) {
                console.log('Es anagrama');
                res.json({ 
                    msj: 'Es anagrama' 
                })
            } else {
                console.log('No es anagrama');
                res.json({ 
                    msj: 'No es anagrama'    
                })
            }
        } catch (error) {
            console.log(error)
        }
    } );
})

//  function compararAnagrama (body) {
//     let compar = new Anagram({
//         cadena: body.cadena,
//         cadena2: body.cadedna2
//     })
// }

module.exports = router;