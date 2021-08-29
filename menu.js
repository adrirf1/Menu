'use strict'
var optPlatillo = "";
var optBebida = "";
var cantPlatillo = 0;
var cantBebida = 0;
var totalComida = 0;
var totalBebida = 0;
var hamburgesa = 0;
var hotdog = 0;
var papas = 0;
var Tot_hamburgesa = 0;
var Tot_hotdog = 0;
var Tot_papas = 0;
var agua = 0;
var soda = 0;
var cerveza = 0;
var Tot_agua = 0;
var Tot_soda = 0;
var Tot_cerveza = 0;

do{
    optPlatillo = prompt("Menu de Platillos\n Seleccione la opción de su agrado: \n1. Hamburguesa de res ($40) \n2. Hotdog ($30)\n3.Papas fritas ($25 orden) \n Presione 4 para confirmar sus productos y entrar al menu de bebidas");
    if(optPlatillo ==4){
        break
    }
    cantPlatillo = prompt("Cuantas ordenes de este platillo requiere");
    cantPlatillo = parseInt(cantPlatillo);
    
switch (optPlatillo) {
    case "1":
        //Hamburguesa 40
        totalComida += 40*cantPlatillo;
        hamburgesa += cantPlatillo;
        Tot_hamburgesa += cantPlatillo*40
        break;
    case "2":
        //Hotdog 30
        totalComida += 30*cantPlatillo;
        hotdog += cantPlatillo;
        Tot_hotdog += cantPlatillo*30
        break;
    case "3":
        //Papas fritas 25
        totalComida += 25*cantPlatillo;
        papas += cantPlatillo;
        Tot_papas += cantPlatillo*25
        break;  
}
} while(optPlatillo!=4)

do{
    optBebida = prompt("Menu de bebidas\n Seleccione la opción de su agrado: \n1. Agua Natural ($20) \n2. Soda ($30)\n3. Cerveza ($45) \n Presione 4 para salir del menu de bebidas y generar su total");
    if(optBebida ==4){
        break
    }
    cantBebida = prompt("Cuantas ordenes de este bebida requiere");
    cantBebida = parseInt(cantBebida); 
    switch (optBebida) {
        case "1":
            //Agua 20
            totalBebida += 20*cantBebida;
            agua += cantBebida;
            Tot_agua += cantBebida*20
            break;
        case "2":
            //Soda 30
            totalBebida += 30*cantBebida;
            soda += cantBebida;
            Tot_soda += cantBebida*30
            break;
        case "3":
            //Cerveza 45
            totalBebida += 45*cantBebida;
            cerveza += cantBebida;
            Tot_cerveza += cantBebida*45
            break;  
}
}while(optBebida!=4)

var TOTAL = totalComida+totalBebida

document.writeln("<h1>---TICKET---</h1>")
document.writeln("<h3>-PRODUCTO-----CANTIDAD-----TOTAL</h3>")
document.write("<h3>-Hamburgesa: ---------",hamburgesa,"----------------",Tot_hamburgesa,"</h3>")
document.write("<h3>-HotDogs: --------------",hotdog,"-----------------",Tot_hotdog,"</h3>")
document.write("<h3>-Papas: -----------------",papas,"-----------------",Tot_papas,"</h3>")
document.write("<h3>-Agua: ------------------",agua,"-----------------",Tot_agua,"</h3>")
document.write("<h3>-Soda: ------------------",soda,"-----------------",Tot_soda,"</h3>")
document.write("<h3>-Cerveza: ---------------",cerveza,"----------------",Tot_cerveza,"</h3>")
document.write("<h3>Total---------------------------------------",TOTAL,"</h3>")
