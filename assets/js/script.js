


//===============ITEM CONTROLLER==================
const ItemCtrl = (function(){

    attackerStats = {
        health: 100,
        randForce: function(){
            return Math.floor(Math.random()*100);
        }
    }
    
    defenderStats = {
        health: 100,
        randForce: function(){
            return Math.floor(Math.random()*100);
        }
    }
    
    //Public Methods
    return {
        setAttackerStats: (attacker)=>{
            //console.log(attackerStats.randForce());
        },
        setDefenderStats:(defender)=>{
            let force = `${defenderStats.randForce()}%`;
            console.log(force);
            if(defender === 'goodSide'){
                
            }
                   
        }
    }

})();



//================UI CONTROLLER==================
const UICtrl = (function(){
    
    
    
    const UISelectors = {
        
        darkSideCharacters: '#darkSideCharacters',
        goodSideCharacters: '#goodSideCharacters',
        pickFighterHeading: '#pickFighterHeading',
        fightingStage: '.fightingStage',
        
        //card
        attackerCard: '.attackerCard',
        defenderCard: '.defenderCard',
        
        //Images
        starWarsChars: '.starWarsChars'
        
    }
    
    //Public Methods
    return {
        setAttackerPosition: (attackerParent, attackerChild)=>{
            let attacker = attackerParent.removeChild(attackerChild);
                attacker.classList = 'col-md-12 d-flex flex-column align-items-center';
            let attackerCard = document.querySelector(UISelectors.attackerCard);
            attacker.childNodes[3].classList = 'container';

            attackerCard.appendChild(attacker);
        },
        setDefenderPosition: (defenderParent)=>{
            let defender = defenderParent.parentElement;
                defender.classList = 'col-md-12 d-flex flex-column align-items-center';
            let defenderCard = document.querySelector(UISelectors.defenderCard);
               defender.childNodes[3].classList = 'container';
            defenderCard.appendChild(defender);
        },
        attackHeading(){
            let html = `<h1 class="display-4" id="pickFighterHeading">Attack!</h1>`;
            
            let attackHeading = document.createElement('div');
            attackHeading.classList = 'card-header bg-dark text-center';
            attackHeading.innerHTML = html;
            
            let attackStage = document.querySelector(UISelectors.fightingStage);
                attackStage.insertBefore(attackHeading, attackStage.childNodes[0]);
            
            document.querySelector(UISelectors.fightingStage).style.display = 'block';
            
        },
        
        getSelectors: () => {
            return UISelectors;
        }
    }

})();




//==============APP CONTROLLER=================
const AppCtrl = (function(ItemCtrl, UICtrl){
    //Get UI selectors
    const UISelectors = UICtrl.getSelectors();
    
    let charactersArr = Array.from(document.querySelectorAll(UISelectors.starWarsChars));
    
    const loadEventListeners = ()=>{
        /*----------------INPUT Events-----------------*/
        
        /*----------------CLICK Events-----------------*/
        
        
        charactersArr.forEach((char, index, arr)=>{
            char.addEventListener('click', attackerPosition);
        });
        
        /*----------------CHANGE Events-----------------*/
        
    }
    
    const attackerPosition = function(e){
        let attackerParent = e.path[1].parentElement,
            attackerChild = e.path[1],
            randNum = Math.floor(Math.random()*3);
        
        if(attackerChild.classList.contains('darkSide')){
            
            let goodSide = charactersArr.filter((darkChar, index, arr)=> {
                if(darkChar.parentElement.classList.contains('goodSide') === true){
                    return arr[index];
                }
            });
            
            UICtrl.setDefenderPosition(goodSide[randNum]);
            
            UICtrl.setAttackerPosition(attackerParent, attackerChild);
            
            document.querySelector(UISelectors.darkSideCharacters).classList = 'row d-flex justify-content-around';
            document.querySelector(UISelectors.goodSideCharacters).classList = 'row d-flex justify-content-around';
            document.querySelector(UISelectors.pickFighterHeading).style.display = 'none';
            
            UICtrl.attackHeading();
            
            ItemCtrl.setAttackerStats(attackerChild);
            
            ItemCtrl.setDefenderStats('goodSide');
            
            charactersArr.forEach((char, index, arr)=>{
                char.removeEventListener('click', attackerPosition);
            });
            
        }else if(attackerChild.classList.contains('goodSide')){
            
            let darkSide = charactersArr.filter((goodChar, index, arr)=> {
                if(goodChar.parentElement.classList.contains('darkSide') === true){
                    return arr[index];
                }
            });
            
            UICtrl.setDefenderPosition(darkSide[randNum]);
            
            UICtrl.setAttackerPosition(attackerParent, attackerChild);
            
            document.querySelector(UISelectors.darkSideCharacters).classList = 'row d-flex justify-content-around';
            document.querySelector(UISelectors.goodSideCharacters).classList = 'row d-flex justify-content-around';
            
            document.querySelector(UISelectors.pickFighterHeading).style.display = 'none';
            
            UICtrl.attackHeading();
            
            ItemCtrl.setAttackerStats(attackerChild);
            
            charactersArr.forEach((char, index, arr)=>{
                char.removeEventListener('click', attackerPosition);
            });
        }
        
    }
    
    
    //Public Methods
    return {
        init: () => {
           loadEventListeners(); 
        }
    }

})(ItemCtrl, UICtrl);

AppCtrl.init();