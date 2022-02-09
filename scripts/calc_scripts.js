function calc()
       {

        //document.getElementById('MontFin').value = ((MI * (1+(Mrg/100))) * (1 + TC));
        //a.style.display = "block";
        
        
         
         var MI = document.getElementById('MontIni').value; 

         var Mrg = parseFloat(document.getElementById('Marge').value); 
        
         var TP = 0.05

         var TF = 0.09975

         var TC = TP + TF
         
         var a = document.getElementById('result_div');
         
         


         if (MI == "") {
             alert('Vous devez entrer une valeur dans le champ "Montant Initial" !')
         }else{
             if (Mrg == 0) {
                document.getElementById('MontFin').value = MI * (1 + TC);
                a.style.display = "block";
             }else{
                 document.getElementById('MontFin').value = (((MI * (1+(Mrg/100))) * (1 + TC)));
                 a.style.display = "block";
             }
                
         }
    }
        
                
       
       
                

          

          


          
         
          

       





       
       
 


              
       

          

