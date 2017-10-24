// Fonction check qui renvoie les informations des variables du form html
function display(){
  //Recuperer les valeurs des inputs du form
  var nom =document.getElementById('nom').value;
  var prenom =document.getElementById('prenom').value;
  var ville=document.getElementById('ville').value;
  // On affiche les valeurs du input saisie par utilisateur
  alert('Nom : ' + nom + '\nPrénom : ' + prenom + '\nVille : ' + ville);
}
