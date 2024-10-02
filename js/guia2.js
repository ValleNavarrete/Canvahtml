window.onload = function(){
    let canvas = document.getElementById("canvas");
      if(canvas && canvas.getContext){
      let ctx = canvas.getContext("2d");
         if(ctx){
 
         //ancho de linea
         ctx.lineWidth = 15;
         ctx.strokeStyle = "yellow"; // borde amarrillo
         
         //trazado
         ctx.beginPath(); //inicio la linea
         ctx.lineCap= "round"; // punto de la linea
         ctx.moveTo(50,50); // inicio del punto
         ctx.lineTo(350,50); // final del punto
         ctx.stroke();

         //segunda linea
         ctx. strokeStyle = "orange";
         ctx.lineCap = "square";
         ctx.beginPath();
         ctx.moveTo(25, 100);
         ctx.lineTo(350,100);
         ctx.stroke();

          //tercera linea
          ctx. strokeStyle = "blue";
          ctx.lineCap = "butt";
          ctx.beginPath();
          ctx.moveTo(50, 150);
          ctx.lineTo(350,150);
          ctx.stroke();

 
         }   
      }else{
         alert("su navegador soporta canvas");
    }
 }
 