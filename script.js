var idProduit = document.getElementById('idProduit');
var nomProduit = document.getElementById('nomProduit');
var desProduit = document.getElementById('desProduit');
var prixProduit = document.getElementById('prixProduit');
var stockProduit = document.getElementById('stockProduit');
var valeurProduit = document.getElementById('valeurProduit');
var fournisseurProduit = document.getElementById('fournisseurProduit');
var dateExp = document.getElementById('dateExp');
var pwd = document.getElementById('pwd');
var submit = document.getElementById('submit');

submit.addEventListener('click', ()=>{
    // isNaN == is Not a Number
    // si isNaN = false : valuer Numerqiue
    // si isNaN = true : valuer Non Numerqiue
    if(isNaN(valeurProduit.value)){
        alert("Valeur produit est incorrect.");
        return ;
    }
    var produit = {
        idProduit : idProduit.value,
        nomProduit : nomProduit.value,
        desProduit : desProduit.value,
        prixProduit : prixProduit.value,
        stockProduit : stockProduit.value,
        valeurProduit : valeurProduit.value,
        fournisseurProduit : fournisseurProduit.value
    }
    console.log(produit);
})

function multiplication(v1,v2){
    // var resulta = v1 * v2;
    // return resulta;
    return v1 * v2;
}

prixProduit.addEventListener("keyup",()=>{
    try {
        if(isNaN(prixProduit.value)){
            throw "Valeur prix est incorrect.";
        }
        valeurProduit.value = multiplication(prixProduit.value,stockProduit.value);
    } catch (error) {
        alert(error);
    }    
})
// var v = stockProduit.value
// stockProduit.value = v;
stockProduit.addEventListener("keyup",(e)=>{
    console.log(e);
    // e.target ==  stockProduit
    valeurProduit.value = multiplication(prixProduit.value,e.target.value);
})


