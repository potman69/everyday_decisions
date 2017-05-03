var summerWinterCloths = [];

var resultCloths = [];


 

// SUMMER//
document.getElementById('summer1').addEventListener('click', function(event){    
    document.getElementById('summer1').style.display = 'none';
    document.getElementById('summer2').style.display = 'block';
    if (event.target.textContent === 'Summer'){        
        summerWinterCloths.push(event.target.textContent); 
    }else if (event.target.textContent === 'Winter'){        
        summerWinterCloths.push(event.target.textContent);
    }
    
document.getElementById('summer2').addEventListener('click', function(event){
    document.getElementById('summer2').style.display = 'none';
    document.getElementById('summer3').style.display = 'block';
    if (event.target.textContent === 'Plain'){
        resultCloths.push(event.target.textContent);
       
    }else if (event.target.textContent === 'Printed'){
        resultCloths.push(event.target.textContent);
    }
    
document.getElementById('summer3').addEventListener('click', function(event){
    document.getElementById('summer3').style.display = 'none';

    if (event.target.textContent === 'Red'){
        resultCloths.push(event.target.textContent);
       
    }else if (event.target.textContent === 'Blue'){
        resultCloths.push(event.target.textContent);
    }else if (event.target.textContent === 'Green'){
        resultCloths.push(event.target.textContent);
    } 
    
    document.getElementById('display').innerHTML =   "You have chosen from our " + summerWinterCloths[0] + " wardrobe." + "You look great in your " + resultCloths[0] +" " + resultCloths[1] + " T-Shirt.";
    
   
    
    if (summerWinterCloths[0] === "Summer"){ 
        document.getElementById('summer4').style.display = 'block';
    }
    else if (summerWinterCloths[0] === "Winter"){
             document.getElementById('winter1').style.display = 'block';
             
             }
    
    
});    
});     
});







