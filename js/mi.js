var nombre=["Anna","Anita","Ana","Annushka"];
var pass=["1234","2345","3456","4567"];
var n=0;
var entrada=0;
   
function validar(f){

    if(entrada>=3){
            
    f.nombre.style.backgroundColor="red";
    f.pass.style.backgroundColor="red";
    f.nombre.setAttribute("readonly","true");
    f.pass.setAttribute("readonly","true");
    document.getElementById("login").innerHTML="Ya tienes 3 posibilidades, no puedes mas";
    return false;

    }else{
    
    while(n<nombre.length){

        if((f.nombre.value==nombre[n])&&(f.pass.value==pass[n])){
            document.getElementById("login").innerHTML="DATOS CORRECTOS"; 
            return true;
        }
        
        n++;
        
    }
       document.getElementById("login").innerHTML="DATOS INCORRECTOS";
        f.nombre.style.backgroundColor="pink";
        f.pass.style.backgroundColor="pink";   
        entrada++;  
    
        return false;
        
    }
}
