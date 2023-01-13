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
var edit = document.getElementById("edit");
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
            cat = e.target.value
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
        categori : cat,
        dateExp : dateExp.value,
        enlig : enlig.checked,
        bouti : bouti.checked,
    }
    listProduit.push(produit);
    messageValidation("Produit bien ajouter");
    
    var tableau = document.getElementById("tableau");
    // var nouveauLigne  = document.createElement("tr");
    // tableau.appendChild(nouveauLigne);

    // for (const key in produit) {
    //     var td1 = document.createElement("td");
    //     td1.innerHTML = produit[key];
    //     nouveauLigne.appendChild(td1);
    // }

    ajouterLigne(produit);
    idProduit.value = ++count;
    
    // idProduit.value = listProduit.length + 1;
    // console.log(listProduit);
})

edit.addEventListener("click",e=>{
    for (let i = 0; i < listProduit.length; i++) {
        const prod = listProduit[i];
        if(prod.idProduit == idProduit.value){
            prod.nomProduit = nomProduit.value;
            prod.desProduit = desProduit.value;
            prod.prixProduit = prixProduit.value;
            prod.stockProduit = stockProduit.value
            prod.valeurProduit = valeurProduit.value
            prod.fournisseurProduit = fournisseurProduit.value
            prod.dateExp = dateExp.value
            prod.enlig = enlig.checked
            prod.bouti = bouti.checked
            prod.categori = cat
            document.getElementById('tableau').deleteRow(i+1)
            ajouterLigne(prod,i+1)
        }
    }
})

function ajouterLigne(produit,index=-1){
    var tr = tableau.insertRow(index);
    // insertRow() == document.createElement("tr") 
        // + tableau.appendChild(element);
    for (const key in produit) {
        var td1 = tr.insertCell();
    // insertCell() == document.createElement("td") 
        // + tr.appendChild(element);
        td1.innerHTML = produit[key];
    }
    // listProduit
    var tdSupp = tr.insertCell();
    var btnSup = document.createElement("button");
    btnSup.innerHTML ="Supprimer";
    btnSup.addEventListener("click",e=>{
        for (let i = 0; i < listProduit.length; i++) {
            const prod = listProduit[i];
            if( prod.idProduit == produit.idProduit){
                listProduit.splice(i,1);
                // insertRow()
                document.getElementById('tableau').deleteRow(i+1)
            }
        }
        console.log(listProduit);
    })
    tdSupp.appendChild(btnSup);

    var tdModi = tr.insertCell();
    var btnModi = document.createElement("button");
    btnModi.innerHTML ="Modifier";
    btnModi.addEventListener("click",e=>{
        for (let i = 0; i < listProduit.length; i++) {
            const prod = listProduit[i];
            if( prod.idProduit == produit.idProduit){
                // code
                idProduit.value = prod.idProduit
                nomProduit.value = prod.nomProduit
                desProduit.value = prod.desProduit
                prixProduit.value = prod.prixProduit
                stockProduit.value = prod.stockProduit
                valeurProduit.value = prod.valeurProduit
                fournisseurProduit.value = prod.fournisseurProduit
                dateExp.value = prod.dateExp
                enlig.checked = prod.enlig
                bouti.checked = prod.bouti
                for (const radio of categori) {
                    try {
                        if(radio.value == prod.categori){
                            radio.checked = true
                        }
                        if(prod.categori == "Nouriture"){
                            dateRow.classList.remove("hide");
                        }
                        else{
                            dateRow.classList.add("hide");
                        }
                    } catch (error) {
                        
                    }
                }
            }
        }
    })
    tdModi.appendChild(btnModi);
}

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


