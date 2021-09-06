const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {

    const a = 4;
    const t = 10;
    const b = 12;
    const s = 7;
    let suma = 0
    var i = -1; 
    var j = -1;

    let distanciaManzanas = [2, 3, -4];
    let distanciaNaranjas = [3, -2, -4];

    distanciaManzanas.forEach( numero  => { 
        i++;
        console.log(a + distanciaManzanas[i])

    })


    distanciaNaranjas.forEach( numero  => { 
        j++;
        
        console.log(b + distanciaNaranjas[j])
    })
    let intervaloCasa = distanciaManzanas.filter( value => {
       return value ==  s <= distanciaManzanas <= t
    } )
    console.log('valor: ' + intervaloCasa.length);
    console.log(intervaloCasa);
    
    res.json({
        msj: ''
    })
})

module.exports = router;