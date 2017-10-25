// Fonction display qui renvoie les informations des variables du form html
function display(){
  //Recuperer les valeurs des inputs du form
  var nom =document.getElementById('nom').value;
  var prenom =document.getElementById('prenom').value;
  var ville=document.getElementById('ville').value;
  if(nom && prenom && ville && isNaN(nom)==true && isNaN(prenom) && isNaN(ville)){
    // On affiche les valeurs du input saisie par utilisateur
    alert('Nom : ' + nom + '\nPrénom : ' + prenom + '\nVille : ' + ville);
  }else {
    alert('Error');
  }
}
