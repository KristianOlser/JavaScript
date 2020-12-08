function eratosthenovo_sito(){
  var delka = document.getElementById("cislo").value;
  let start, end;     
  var cisla = [];
  start = new Date().getTime();
  
  for(i = 2;i <= delka; i++){
    cisla[i-2] = i;
  }
  
  for(i = 0;i<= cisla.length; i++){
    for(j = 0;j<= cisla.length; j++){
      console.log("i: "+ i +" j: "+j + " cisla: " + cisla);
      if(cisla[j] / cisla[i] == 1){
       continue;
      }
      if(cisla[j] % cisla[i] == 0){
        cisla.splice(j,1);
        }
      }
    }	
  
    document.getElementById("prvocisla").innerHTML = "Prvočísla: " + cisla;
    end = new Date().getTime();
    document.getElementById("doba").innerHTML = "Doba trvání: " + (end-start)+"ms";
  }
