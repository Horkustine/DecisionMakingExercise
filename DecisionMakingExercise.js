let randomNum = Math.floor(Math.random() *5 )+1;
if(randomNum>=4){
    console.log("Greater than or equal to 4");
}
else if(randomNum>=2){
    console.log("Equal to 2 or 3");
}
else{
    console.log("Equal to 1");
}

if(randomNum!=3 && randomNum!=5){
    console.log("NOT equal to 3 or 5");
}
if(randomNum == 2 || randomNum == 4){
    console.log("Equal to 2 or 4");
}
