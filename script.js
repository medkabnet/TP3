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
var enlig = document.getElementById('enlig');
var bouti = document.getElementById('bouti');
var message = document.getElementById("message");
var categori = document.getElementsByClassName('categori');
var cat = "";
var listProduit = [];
var count = 1;
// for( let i = 0 ; i < categori.length  ; i++)
for ( let radio of categori){
// for (const key in categori) {
//     const radio = categori[key];
    try{
        // alert(radio)
        radio.addEventListener("change",e=>{
            let dateRow = document.getElementById("dateRow")
            if(e.target.value == "Nouriture"){
                dateRow.classList.remove("hide")
            }
            else{
                dateRow.classList.add("hide")
            }
        })
    }
    catch(err){
        console.log(err)
    }

}

submit.addEventListener('click', ()=>{
    // isNaN == is Not a Number
    // si isNaN = false : valuer Numerqiue
    // si isNaN = true : valuer Non Numerqiue


    if(isNaN(valeurProduit.value) || valeurProduit.value == ""){
        //alert("Valeur produit est incorrect.");
        messageValidation("Valeur Produit est incorrect.",false);
        return ;
    }

    // Valeur du radio boutton séléctionner
    // let varCat 
    // for (const key in categori) {
    //     const radio = categori[key];
    //     if(radio.checked ){
    //         varCat = radio.value;
    //     }
    // }
    var produit = {
        idProduit : idProduit.value,
        nomProduit : nomProduit.value,
        desProduit : desProduit.value,
        prixProduit : prixProduit.value,
        stockProduit : stockProduit.value,
        valeurProduit : valeurProduit.value,
        fournisseurProduit : fournisseurProduit.value,
        dateExp : dateExp.value,
        enlig : enlig.checked,
        bouti : bouti.checked,
        categori : cat
    }
    listProduit.push(produit);
    messageValidation("Produit bien ajouter");
    idProduit.value = ++count;
    // idProduit.value = listProduit.length + 1;
    // console.log(listProduit);
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
        messageValidation(error , false);
    }    
})
// var v = stockProduit.value
// stockProduit.value = v;
stockProduit.addEventListener("keyup",(e)=>{
    console.log(e);
    // e.target ==  stockProduit
    valeurProduit.value = multiplication(prixProduit.value,e.target.value);
})

function messageValidation(messageAfficher,valid = true){
    message.innerHTML = messageAfficher;
    if(valid){
        message.classList.add("valid");
        message.classList.remove("error");
    }
    else{
        message.classList.remove("valid");
        message.classList.add("error");
    }
}


