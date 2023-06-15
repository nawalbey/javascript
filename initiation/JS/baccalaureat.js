var moyenne = prompt("quelle et votre moyenne ?");
while (isNaN(moyenne)){
    moyenne = prompt("quelle et votre moyenne ?");
}
if (moyenne <= 9) {
    document.write("Résultat : recalé");
}else if (moyenne >= 10 && moyenne < 12){
    document.write("Résultat : reçu");
}else if (moyenne >= 12){
    document.write("Résultat : reçu avec mention");
}