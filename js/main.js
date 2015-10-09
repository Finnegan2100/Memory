
(function () {


    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        gameObjects = [],
        gameImages = [];
    
    var bgImage = new Image();
        bgImage.src = "images/sfondo.jpg";
        gameImages.push(bgImage);
    
    var backImage = new Image();
        backImage.src = "images/retro.jpg";
        pushMultipleVersions(backImage,12);
    
    var artistImage = new Image();
        artistImage.src = "images/artista.jpg";
        gameImages.push(artistImage);
    
    var cookImage = new Image();
        cookImage.src = "images/cuoco.jpg";
        gameImages.push(cookImage);
    
    var teacherImage = new Image();
        teacherImage.src = "images/insegnante.jpg";
        gameImages.push(teacherImage);
    
     var copImage = new Image();
        copImage.src = "images/poliziotto.jpg";
        gameImages.push(copImage);
    
    var scientistImage = new Image();
        scientistImage.src = "images/scienziata.jpg";
        gameImages.push(scientistImage);
    
    var firemanImage = new Image();
        firemanImage.src = "images/pompiere.jpg";
        gameImages.push(firemanImage);
    
    var sfondo = Object.create(spriteObject);
        sfondo.x =  0;
        sfondo.y = 0;
        sfondo.width = window.innerWidth;
        sfondo.height = window.innerHeight;
        gameObjects.push(sfondo);
        
    
    //RETRO TOPS
    
    var retroTop1 = Object.create(cardObjectTop);
        retroTop1.x = 15;
        gameObjects.push(retroTop1);
    
    var retroTop2 = Object.create(cardObjectTop);
        retroTop2.x = 225;
        gameObjects.push(retroTop2);
    
    var retroTop3 = Object.create(cardObjectTop);
        retroTop3.x = 435;
        gameObjects.push(retroTop3);
    
     var retroTop4 = Object.create(cardObjectTop);
        retroTop4.x = 645;
        gameObjects.push(retroTop4);
    
    var retroTop5 = Object.create(cardObjectTop);
        retroTop5.x = 855;
        gameObjects.push(retroTop5);
    
    var retroTop6 = Object.create(cardObjectTop);
        retroTop6.x = 1065;
        gameObjects.push(retroTop6);
    
    //RETRO BOTTOMS
    
    var retroBottom1 = Object.create(cardObjectBottom);
        retroBottom1.x = 15;
        gameObjects.push(retroBottom1);
    
    var retroBottom2 = Object.create(cardObjectBottom);
        retroBottom2.x = 225;
        gameObjects.push(retroBottom2);
    
    var retroBottom3 = Object.create(cardObjectBottom);
        retroBottom3.x = 435;
        gameObjects.push(retroBottom3);
    
     var retroBottom4 = Object.create(cardObjectBottom);
        retroBottom4.x = 645;
        gameObjects.push(retroBottom4);
    
    var retroBottom5 = Object.create(cardObjectBottom);
        retroBottom5.x = 855;
        gameObjects.push(retroBottom5);
    
    var retroBottom6 = Object.create(cardObjectBottom);
        retroBottom6.x = 1065;
        gameObjects.push(retroBottom6);
    


     
    function setCanvasDimensions(w,h) {
     
        canvas.width = w;
        canvas.height = h;
    }
    
    function pushMultipleVersions( name, times) {
         
        for (var i = 0; i < times; i++) {
            gameImages.push(name); 
        } 
    }
    
    function renderImages(elems,imgs) {
     
        for (var i = 0; i < gameObjects.length; i++) {
            
            context.drawImage(imgs[i],elems[i].x,elems[i].y,elems[i].width,elems[i].height);
        }
    }
    
    function main(milliseconds) {
        
        context.clearRect(0,0,canvas.width,canvas.height);
        setTimeout(main,milliseconds);
        renderImages(gameObjects, gameImages); 
    }
    
   
    
    function initializeGame() {
        
        setCanvasDimensions(window.innerWidth,window.innerHeight);
        main(33);     
    }
    
    initializeGame();

})();
