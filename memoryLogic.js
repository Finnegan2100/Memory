(function(){
	ratio = 0.37695;


    var chosenCardCount = 0;
    var chosenCards = [];
    var matchValue1 = false,
        matchValue2 = false,
        matchValue3 = false,
        matchValue4 = false,
        matchValue5 = false,
        matchValue6 = false,
        drinkMatchFound= false,
        glassMatchFound = false,
        pourMatchFound = false;
    var matchesFound = 0;
    var lastMatch;
    
	
    cardBack1= new createjs.Bitmap(loader.getResult("ILL_memory_back_water"));
    cardBack1.scaleX = cardBack1.scaleY = ratio;
    cardBack1.x=15;
    cardBack1.y=85;
    stage.addChild(cardBack1);
	
	
	cardBack2 = new createjs.Bitmap(loader.getResult("ILL_memory_back_water"));
    cardBack2.scaleX = cardBack2.scaleY = ratio;
    cardBack2.x = 197;
    cardBack2.y=85;
    stage.addChild(cardBack2);
	
	cardBack3 = new createjs.Bitmap(loader.getResult("ILL_memory_back_water"));
    cardBack3.scaleX =cardBack3.scaleY = ratio;
    cardBack3.x= 380;
    cardBack3.y= 85;
    stage.addChild(cardBack3);
	
	
	cardBack4= new createjs.Bitmap(loader.getResult("ILL_memory_back_water"));
    cardBack4.scaleX = cardBack4.scaleY = ratio;
    cardBack4.x=15;
    cardBack4.y=295;
    stage.addChild(cardBack4);
	
	cardBack5 = new createjs.Bitmap(loader.getResult("ILL_memory_back_water"));
    cardBack5.scaleX =cardBack5.scaleY = ratio;
    cardBack5.x= 197;
    cardBack5.y= 295;
    stage.addChild(cardBack5);
	
	
	cardBack6= new createjs.Bitmap(loader.getResult("ILL_memory_back_water"));
    cardBack6.scaleX = cardBack6.scaleY = ratio;
    cardBack6.x=380;
    cardBack6.y=295;
    stage.addChild(cardBack6);
    
    
    
    //CARD FRONTS
    
    
    ILL_drink_water2= new createjs.Bitmap(loader.getResult("ILL_memory_drink_water"));
    ILL_drink_water2.scaleX = ILL_drink_water2.scaleY = ratio;
    ILL_drink_water2.x=15;
    ILL_drink_water2.y=85;
	
	
	ILL_pour_water2 = new createjs.Bitmap(loader.getResult("ILL_memory_glass_of_water"));
    ILL_pour_water2.scaleX = ILL_pour_water2.scaleY = ratio;
    ILL_pour_water2.x = 197;
    ILL_pour_water2.y=85;
	
	ILL_glass_of_water2 = new createjs.Bitmap(loader.getResult("ILL_memory_drink_water"));
    ILL_glass_of_water2.scaleX =ILL_glass_of_water2.scaleY = ratio;
    ILL_glass_of_water2.x= 380;
    ILL_glass_of_water2.y= 85;

	ILL_bottle_of_water2= new createjs.Bitmap(loader.getResult("ILL_memory_pour_water"));
    ILL_bottle_of_water2.scaleX = ILL_bottle_of_water2.scaleY = ratio;
    ILL_bottle_of_water2.x=15;
    ILL_bottle_of_water2.y=295;
	
	ILL_glass_of_water2b = new createjs.Bitmap(loader.getResult("ILL_memory_pour_water"));
    ILL_glass_of_water2b.scaleX =ILL_glass_of_water2b.scaleY = ratio;
    ILL_glass_of_water2b.x= 197;
    ILL_glass_of_water2b.y= 295;

	ILL_bottle_of_water2b= new createjs.Bitmap(loader.getResult("ILL_memory_glass_of_water"));
    ILL_bottle_of_water2b.scaleX = ILL_bottle_of_water2b.scaleY = ratio;
    ILL_bottle_of_water2b.x=380;
    ILL_bottle_of_water2b.y=295;

    ILL_icon_audio2b = new createjs.Bitmap(loader.getResult("ILL_icon_audio"));
    ILL_icon_audio2b.scaleX = ILL_icon_audio2b.scaleY = ratio;
    ILL_icon_audio2b.x=520;
    ILL_icon_audio2b.y=10;
    stage.addChild(ILL_icon_audio2b);
	
    stage.update();
    ILL_icon_audio2b.addEventListener("click", m1click);
    cardBack1.addEventListener("click", m2click);
    cardBack2.addEventListener("click", m3click);
    cardBack3.addEventListener("click", m4click);
    cardBack4.addEventListener("click", m5click);
    cardBack5.addEventListener("click", m6click);
    cardBack6.addEventListener("click", m7click);


    function m1click(){
        console.log("hit the button!");
        createjs.Sound.stop();
        createjs.Sound.play('Find_The_Matching_Pictures');
    }
    
    
    function m2click(){
        
        
        
        if(chosenCardCount < 2) {
            
            createjs.Sound.stop();
            createjs.Sound.play('cardFlipDONOTUSEINFINAL');
            stage.removeChild(cardBack1);
            stage.addChild(ILL_drink_water2);
            stage.update(); 
            matchValue1 = true;
            chosenCardCount++;
            chosenCards.push(ILL_drink_water2);
            if(chosenCardCount === 2) {
                window.setTimeout(evaluateMatch,200);
            }
        }
    }
     function m3click(){
         
         createjs.Sound.stop();
         createjs.Sound.play('cardFlipDONOTUSEINFINAL');
         
         if(chosenCardCount < 2) {
            stage.removeChild(cardBack2);
            stage.addChild(ILL_pour_water2);
            stage.update();
            matchValue2 = true; 
            chosenCardCount++; 
            chosenCards.push(ILL_pour_water2);
            if(chosenCardCount === 2) {
                window.setTimeout(evaluateMatch,200);
            } 
         }
    }
     function m4click(){

         
         if(chosenCardCount < 2) {
             
            createjs.Sound.stop();
            createjs.Sound.play('cardFlipDONOTUSEINFINAL'); 
            stage.removeChild(cardBack3);
            stage.addChild(ILL_glass_of_water2);
            stage.update();
            matchValue3 = true; 
            chosenCardCount++;
            chosenCards.push(ILL_glass_of_water2);
            if(chosenCardCount === 2) {
                window.setTimeout(evaluateMatch,200);
            } 
         }
    }
     function m5click(){
         
         
         if(chosenCardCount < 2) {
             
            createjs.Sound.stop();
            createjs.Sound.play('cardFlipDONOTUSEINFINAL'); 
            stage.removeChild(cardBack4);
            stage.addChild(ILL_bottle_of_water2);
            stage.update();
            matchValue4 = true;  
            chosenCardCount++; 
            chosenCards.push(ILL_bottle_of_water2);
            if(chosenCardCount === 2) {
                window.setTimeout(evaluateMatch,200);
            } 
         }
    }
     function m6click(){
         
          
         if(chosenCardCount < 2) {
             
            createjs.Sound.stop();
            createjs.Sound.play('cardFlipDONOTUSEINFINAL'); 
            stage.removeChild(cardBack5);
            stage.addChild(ILL_glass_of_water2b);
            stage.update();
            matchValue5 = true;  
            chosenCardCount++;
            chosenCards.push(ILL_glass_of_water2);
            if(chosenCardCount === 2) {
                window.setTimeout(evaluateMatch,200);
            } 
         }
    }
     function m7click(){

         
         if(chosenCardCount < 2) {
            createjs.Sound.stop();
            createjs.Sound.play('cardFlipDONOTUSEINFINAL'); 
            stage.removeChild(cardBack6);
            stage.addChild(ILL_bottle_of_water2b);
            stage.update();
            matchValue6 = true;  
            chosenCardCount++;
            chosenCards.push(ILL_bottle_of_water2b);
            if(chosenCardCount === 2) {
                window.setTimeout(evaluateMatch,200);
            } 
         }
    }
    
    function evaluateMatch() {
 
        
      
        
     switch(matchesFound) {    
     
        case 0:   //1ST ROUND
             
            if(matchValue1 && matchValue3) {    //DRINK FOUND
            
                chosenCardCount = 0;
                matchesFound++;
                matchValue2 = false;
                matchValue4 = false;
                matchValue5 = false;
                matchValue6 = false;
                drinkMatchFound = true;
                stage.update();
                createjs.Sound.stop();
                createjs.Sound.play('AUD_FX_Correct_Answer');
                window.setTimeout(playDrinkAudio,1000, currentPage);
            
            }
        
            else if(matchValue2 && matchValue6) { // GLASS FOUND
   
                chosenCardCount = 0;
                matchesFound++;    
                matchValue1 = false;
                matchValue4 = false;
                matchValue5 = false;
                matchValue3 = false;
                glassMatchFound = true;
                stage.update();
                createjs.Sound.stop();
                createjs.Sound.play('AUD_FX_Correct_Answer');
                window.setTimeout(playGlassAudio,1000, currentPage);

            }

            else if(matchValue4 && matchValue5) {  //POUR FOUND

                chosenCardCount = 0;
                matchesFound++;    
                matchValue2 = false;
                matchValue1 = false;
                matchValue3 = false;
                matchValue6 = false;
                pourMatchFound = true;
                stage.update();
                createjs.Sound.stop();
                createjs.Sound.play('AUD_FX_Correct_Answer');
                window.setTimeout(playPourAudio,1000, currentPage);

            }
         
            if (matchesFound === 0) {  // NOTHING FOUND. RESET ALL CARDS
                
                stage.addChild(cardBack1);
                stage.removeChild(ILL_drink_water2);
                stage.addChild(cardBack2);
                stage.removeChild(ILL_pour_water2);
                stage.addChild(cardBack3);
                stage.removeChild(ILL_glass_of_water2);
                stage.addChild(cardBack4);
                stage.removeChild(ILL_bottle_of_water2);
                stage.addChild(cardBack5);
                stage.removeChild(ILL_glass_of_water2b);
                stage.addChild(cardBack6);
                stage.removeChild(ILL_bottle_of_water2b);
                chosenCardCount = 0;
                stage.update();
                matchValue1 = false;
                matchValue2 = false;
                matchValue3 = false;
                matchValue4 = false;
                matchValue5 = false;
                matchValue6 = false;
                createjs.Sound.stop();
                createjs.Sound.play('AUD_FX_Wrong_Answer');
            }    
       
         
    break;
    
       
        case 1:   // 2ND ROUND
             
            if(drinkMatchFound) {  //STARTING ROUND 2 WITH DRINK FOUND
                
                if(matchValue2 && matchValue6) { 

                    chosenCardCount = 0;
                    matchesFound++;    
                    matchValue1 = false;
                    matchValue4 = false;
                    matchValue5 = false;
                    matchValue3 = false;  
                    glassMatchFound = true;
                    stage.update();
                    createjs.Sound.stop();
                    createjs.Sound.play('AUD_FX_Correct_Answer');
                    window.setTimeout(playGlassAudio,1000, currentPage);
                    lastMatch = "pour";

                }

                if(matchValue4 && matchValue5) { 

                    chosenCardCount = 0;
                    matchesFound++;    
                    matchValue2 = false;
                    matchValue1 = false;
                    matchValue3 = false;
                    matchValue6 = false;
                    pourMatchFound = true;
                    stage.update();
                    createjs.Sound.stop();
                    createjs.Sound.play('AUD_FX_Correct_Answer');
                    window.setTimeout(playPourAudio,1000, currentPage);
                    lastMatch = "glass";

                }
            }
             
            if(pourMatchFound) {   //STARTING ROUND 2 WITH POUR FOUND
                
                if(matchValue1 && matchValue3) { 

                    chosenCardCount = 0;
                    matchesFound++;
                    matchValue2 = false;
                    matchValue4 = false;
                    matchValue5 = false;
                    matchValue6 = false; 
                    drinkMatchFound = true;
                    stage.update();
                    createjs.Sound.stop();
                    createjs.Sound.play('AUD_FX_Correct_Answer');
                    window.setTimeout(playDrinkAudio,1000, currentPage);
                    lastMatch = "glass";
            
                }
        
                if(matchValue2 && matchValue6) { 

                    chosenCardCount = 0;
                    matchesFound++;    
                    matchValue1 = false;
                    matchValue4 = false;
                    matchValue5 = false;
                    matchValue3 = false;  
                    glassMatchFound = true;
                    stage.update();
                    createjs.Sound.stop();
                    createjs.Sound.play('AUD_FX_Correct_Answer');
                    window.setTimeout(playGlassAudio,1000, currentPage);
                    lastMatch = "drink";
                }       
            }
            
             if(glassMatchFound) {   // STARTING ROUND 2 WITH GLASS FOUND
                

                if(matchValue1 && matchValue3) { 

                    chosenCardCount = 0;
                    matchesFound++;
                    matchValue2 = false;
                    matchValue4 = false;
                    matchValue5 = false;
                    matchValue6 = false; 
                    drinkMatchFound = true;
                    stage.update();
                    createjs.Sound.stop();
                    createjs.Sound.play('AUD_FX_Correct_Answer');
                    window.setTimeout(playDrinkAudio,1000, currentPage);
                    lastMatch = "pour";

                }

                if(matchValue4 && matchValue5) { 

                    chosenCardCount = 0;
                    matchesFound++;    
                    matchValue2 = false;
                    matchValue1 = false;
                    matchValue3 = false;
                    matchValue6 = false;
                    pourMatchFound = true;
                    stage.update();
                    createjs.Sound.stop();
                    createjs.Sound.play('AUD_FX_Correct_Answer');
                    window.setTimeout(playPourAudio,1000, currentPage);
                    lastMatch = "drink";

                }
             }
             
            if (matchesFound === 1) { //IF NOTHING NEW FOUND
                
                if (drinkMatchFound) {
                   
                     stage.addChild(cardBack2);
                     stage.removeChild(ILL_pour_water2);
                     stage.addChild(cardBack4);
                     stage.removeChild(ILL_bottle_of_water2);
                     stage.addChild(cardBack5);
                     stage.removeChild(ILL_glass_of_water2b);
                     stage.addChild(cardBack6);
                     stage.removeChild(ILL_bottle_of_water2b);
                     chosenCardCount = 0;
                     stage.update();
                     matchValue2 = false;
                     matchValue4 = false;
                     matchValue5 = false;
                     matchValue6 = false;
                     createjs.Sound.stop();
                     createjs.Sound.play('AUD_FX_Wrong_Answer');
                }
                
                if (glassMatchFound) {
                   
                     stage.addChild(cardBack1);
                     stage.removeChild(ILL_drink_water2);
                     stage.addChild(cardBack3);
                     stage.removeChild(ILL_glass_of_water2);  
                     stage.addChild(cardBack4);
                     stage.removeChild(ILL_bottle_of_water2);
                     stage.addChild(cardBack5);
                     stage.removeChild(ILL_glass_of_water2b);
                     chosenCardCount = 0;
                     stage.update();
                     matchValue1 = false;
                     matchValue3 = false;  
                     matchValue4 = false;
                     matchValue5 = false;
                     createjs.Sound.stop();
                     createjs.Sound.play('AUD_FX_Wrong_Answer');
                }
                
                 if (pourMatchFound) {
                   
                     stage.addChild(cardBack1);
                     stage.removeChild(ILL_drink_water2);
                     stage.addChild(cardBack2);
                     stage.removeChild(ILL_pour_water2);
                     stage.addChild(cardBack3);
                     stage.removeChild(ILL_glass_of_water2);
                     stage.addChild(cardBack6);
                     stage.removeChild(ILL_bottle_of_water2b);
                     chosenCardCount = 0;
                     stage.update();
                     matchValue1 = false;
                     matchValue2 = false;  
                     matchValue3 = false;
                     matchValue6 = false; 
                     createjs.Sound.stop();
                     createjs.Sound.play('AUD_FX_Wrong_Answer');
                }
                
            } 
            break; 
             
            case 2:   // 3RD ROUND 
                        
                      if(lastMatch === "drink") {
                          
                          createjs.Sound.stop();
                          createjs.Sound.play('AUD_FX_Correct_Answer');
                          window.setTimeout(playDrinkAudio,1000, currentPage);
                      }
             
                      if(lastMatch === "pour") {
                          
                          createjs.Sound.stop();
                          createjs.Sound.play('AUD_FX_Correct_Answer');
                          window.setTimeout(playPourAudio,1000, currentPage);
                      }
                    
                      if(lastMatch === "glass") {
                          
                          createjs.Sound.stop();
                          createjs.Sound.play('AUD_FX_Correct_Answer');
                          window.setTimeout(playGlassAudio,1000, currentPage);
                      }    
                      
             break;

        }
     
    }
    
    function playDrinkAudio(page) {
        if (currentPage === page){
            createjs.Sound.stop();
            createjs.Sound.play('Drink_Water');
        }
    }
    
    function playGlassAudio(page) {
        if (currentPage === page){
            createjs.Sound.stop();
            createjs.Sound.play('A_Glass_Of_Water');
        }
    }
    
    function playPourAudio(page) {
        if (currentPage === page){
            createjs.Sound.stop();
            createjs.Sound.play('Pour_Water');
        }
    }

})();