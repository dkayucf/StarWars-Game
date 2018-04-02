


//===============ITEM CONTROLLER==================
const ItemCtrl = (function(){

    attackerStats = {
        startHealth: 100,
        currentHealth: 0,
        randForce: function(){
            return Math.floor(Math.random()*100);
        },
        currentForce: 0
    }
    
    defenderStats = {
        startHealth: 100,
        currentHealth: 0,
        randForce: function(){
            return Math.floor(Math.random()*100);
        },
        currentForce: 0
    }
    
    //Public Methods
    return {
        setAttackerStats: (attacker)=>{
            attacker = attacker.firstElementChild.id;
            attackerStats.currentForce = attackerStats.randForce();
            attackerStats.currentHealth = attackerStats.startHealth;
            let attackerHealth = `${attackerStats.currentHealth}%`,
                attackerForce = `${attackerStats.currentForce}%`;
         
                document.querySelector(`#health${attacker}`).style.width = attackerHealth,
                document.querySelector(`#force${attacker}`).style.width =  attackerForce;
            
        },
        setDefenderStats:(defender)=>{

            defenderStats.currentForce = defenderStats.randForce();
            defenderStats.currentHealth = defenderStats.startHealth;
            let defenderHealth = `${defenderStats.currentHealth}%`,
            defenderForce = `${defenderStats.currentForce}%`;
            
                document.querySelector(`#health${defender.id}`).style.width = defenderHealth;
                document.querySelector(`#force${defender.id}`).style.width =  defenderForce;
        },
        attack:()=>{
            let attackerHealth = attackerStats.currentHealth,
                attackerForce = attackerStats.currentForce,
                defenderHealth = defenderStats.currentHealth,
                defenderForce = defenderStats.currentForce,
                attackerId = document.querySelector('.attackerClass').firstElementChild.id,
                defenderId = document.querySelector('.defenderClass').firstElementChild.id,
                damage;
                

                if(attackerForce > defenderForce){
                damage = attackerForce - defenderForce;
                defenderHealth = defenderHealth - damage;
                defenderStats.currentHealth = defenderHealth;
                defenderStats.currentForce = defenderStats.randForce();
                attackerStats.currentForce = attackerStats.randForce();
                
                document.querySelector(`#health${defenderId}`).style.width = `${defenderStats.currentHealth}%`;
                document.querySelector(`#force${defenderId}`).style.width =  `${defenderStats.currentForce}%`;
                document.querySelector(`#force${attackerId}`).style.width =  `${attackerStats.currentForce}%`;
                
                    
                if(defenderHealth <= 0 && attackerHealth > 0){

                    document.querySelector(`#health${defenderId}`).style.width = `0%`;
                    let defenderChild = document.querySelector('.defenderClass'),
                        defenderParent = defenderChild.parentElement;
                    defenderParent.removeChild(defenderChild);
                    let remainingChars;
                    switch(defenderId){
                            
                        case 'yoda':
                                
                                remainingChars = Array.from(document.querySelectorAll('.goodSide'));
                                remainingChars.forEach((char, index, arr)=>{
                                   let parentElem = char.parentElement;
                                    if(arr[0]){
                                        let moveChar = parentElem.remove(arr[0]);
                                    let destination = document.querySelector('.defenderCard');
                                    destination.appendChild(remainingChars[0]);
                                    }
                                });
                                remainingChars[0].classList = 'col-md-12 d-flex flex-column align-items-center defenderClass';
                                remainingChars[0].lastElementChild.classList = 'container d-block';
                                defender = remainingChars[0].firstElementChild;
                                defenderId = defender.id;
                                document.querySelector(`#${defenderId}Sound`).play();
                                ItemCtrl.setDefenderStats(defender);
                                break;
                            case 'luke':
                            
                                remainingChars = Array.from(document.querySelectorAll('.goodSide'));
                                remainingChars.forEach((char, index, arr)=>{
                                   let parentElem = char.parentElement;
                                    if(arr[0]){
                                        let moveChar = parentElem.remove(arr[0]);
                                    let destination = document.querySelector('.defenderCard');
                                    destination.appendChild(remainingChars[0]);
                                    }
                                });
                                remainingChars[0].classList = 'col-md-12 d-flex flex-column align-items-center defenderClass';
                                remainingChars[0].lastElementChild.classList = 'container d-block';
                                defender = remainingChars[0].firstElementChild;
                                defenderId = defender.id;
                                document.querySelector(`#${defenderId}Sound`).play();
                                ItemCtrl.setDefenderStats(defender);
                                break;
                            case 'obiWan':
                            
                                remainingChars = Array.from(document.querySelectorAll('.goodSide'));
                                remainingChars.forEach((char, index, arr)=>{
                                   let parentElem = char.parentElement;
                                    if(arr[0]){
                                        let moveChar = parentElem.remove(arr[0]);
                                    let destination = document.querySelector('.defenderCard');
                                    destination.appendChild(remainingChars[0]);
                                    }
                                });
                                remainingChars[0].classList = 'col-md-12 d-flex flex-column align-items-center defenderClass';
                                remainingChars[0].lastElementChild.classList = 'container d-block';
                                defender = remainingChars[0].firstElementChild;
                                defenderId = defender.id;
                                document.querySelector(`#${defenderId}Sound`).play();
                                ItemCtrl.setDefenderStats(defender);
                                break;
                            case 'maul':
                            
                                remainingChars = Array.from(document.querySelectorAll('.darkSide'));
                                remainingChars.forEach((char, index, arr)=>{
                                   let parentElem = char.parentElement;
                                    if(arr[0]){
                                        let moveChar = parentElem.remove(arr[0]);
                                    let destination = document.querySelector('.defenderCard');
                                    destination.appendChild(remainingChars[0]);
                                    }
                                });
                                remainingChars[0].classList = 'col-md-12 d-flex flex-column align-items-center defenderClass';
                                remainingChars[0].lastElementChild.classList = 'container d-block';
                                defender = remainingChars[0].firstElementChild;
                                defenderId = defender.id;
                                document.querySelector(`#${defenderId}Sound`).play();
                                ItemCtrl.setDefenderStats(defender);
                                break;
                            case 'palpatine':
                            
                                remainingChars = Array.from(document.querySelectorAll('.darkSide'));
                                remainingChars.forEach((char, index, arr)=>{
                                   let parentElem = char.parentElement;
                                    if(arr[0]){
                                        let moveChar = parentElem.remove(arr[0]);
                                    let destination = document.querySelector('.defenderCard');
                                    destination.appendChild(remainingChars[0]);
                                    }
                                });
                                remainingChars[0].classList = 'col-md-12 d-flex flex-column align-items-center defenderClass';
                                remainingChars[0].lastElementChild.classList = 'container d-block';
                                defender = remainingChars[0].firstElementChild;
                                defenderId = defender.id;
                                document.querySelector(`#${defenderId}Sound`).play();
                                ItemCtrl.setDefenderStats(defender);
                                break;
                            case 'vader':
                            
                                remainingChars = Array.from(document.querySelectorAll('.darkSide'));
                                remainingChars.forEach((char, index, arr)=>{
                                   let parentElem = char.parentElement;
                                    if(arr[0]){
                                        let moveChar = parentElem.remove(arr[0]);
                                    let destination = document.querySelector('.defenderCard');
                                    destination.appendChild(remainingChars[0]);
                                    }
                                });
                                remainingChars[0].classList = 'col-md-12 d-flex flex-column align-items-center defenderClass';
                                remainingChars[0].lastElementChild.classList = 'container d-block';
                                defender = remainingChars[0].firstElementChild;
                                defenderId = defender.id;
                                document.querySelector(`#${defenderId}Sound`).play();
                                ItemCtrl.setDefenderStats(defender);
                                break;
                    }
                    
                }else if(attackerHealth <= 0 && defenderHealth > 0){

                    document.querySelector(`#health${attackerId}`).style.width = `0%`;
                    
                    let fightingStage = document.querySelector('#fightingStage'),
                        darkSideWins = ` <div class="container>
                                            <div class='row'>
                                                <div class='col-md-12'>
                                                    <h1 class='display-1 text-center'>The Dark Side Wins!</h1>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                           
                                        `,
                        forceWins = ` <div class="container>
                                            <div class='row'>
                                                <div class='col-md-12'>
                                                    <h1 class='display-1 text-center'>The Force Wins!</h1>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                           
                                        `;
                        
                    switch(attackerId){
                            case 'yoda':
                                setTimeout(()=>{
                                    document.querySelector('#fighterStageHeading').style.display = 'none';
                                    fightingStage.innerHTML = darkSideWins;
                                }, 300);
                                break;
                            case 'luke':
                                setTimeout(()=>{
                                    document.querySelector('#fighterStageHeading').style.display = 'none';
                                    fightingStage.innerHTML = darkSideWins;
                                }, 300);
                                break;
                            case 'obiWan':
                                setTimeout(()=>{
                                    document.querySelector('#fighterStageHeading').style.display = 'none';
                                    fightingStage.innerHTML = darkSideWins;
                                }, 300);
                                break;
                            case 'maul':
                                setTimeout(()=>{
                                    document.querySelector('#fighterStageHeading').style.display = 'none';
                                    fightingStage.innerHTML = forceWins;
                                }, 300);
                                break;
                            case 'palpatine':
                                setTimeout(()=>{
                                    document.querySelector('#fighterStageHeading').style.display = 'none';
                                    fightingStage.innerHTML = forceWins;
                                }, 300);
                                break;
                            case 'vader':
                                setTimeout(()=>{
                                    document.querySelector('#fighterStageHeading').style.display = 'none';
                                    fightingStage.innerHTML = forceWins;
                                }, 300);
                                break;
                    }
                }  

                    
            }else if(attackerForce < defenderForce){
                damage = defenderForce - attackerForce;
                attackerHealth = attackerHealth - damage;
                attackerStats.currentHealth = attackerHealth;
                defenderStats.currentForce = defenderStats.randForce();
                attackerStats.currentForce = attackerStats.randForce();
                
                document.querySelector(`#health${attackerId}`).style.width = `${attackerStats.currentHealth}%`;
                document.querySelector(`#force${attackerId}`).style.width =  `${attackerStats.currentForce}%`;
                document.querySelector(`#force${defenderId}`).style.width =  `${defenderStats.currentForce}%`;
  
                
               
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
        attack: '.attack',
        attackerCard: '.attackerCard',
        defenderCard: '.defenderCard',
        starWarsChars: '.starWarsChars',
        soundTrack: '#soundTrack'
        
    }
    
    //Public Methods
    return {
        setAttackerPosition: (attackerParent, attackerChild)=>{
            let attacker = attackerParent.removeChild(attackerChild);
            
                attacker.classList = 'col-md-12 d-flex flex-column align-items-center attackerClass';
            let attackerCard = document.querySelector(UISelectors.attackerCard);
            attacker.childNodes[3].classList = 'container';

            attackerCard.appendChild(attacker);
            setTimeout(()=>{
                let attackerID = attackerChild.firstElementChild.id,
                attackerSound = document.querySelector(`#${attackerID}Sound`);
                switch(attackerID) {
                    case 'vader':
                        attackerSound.play();
                        break;
                    case 'palpatine':
                        attackerSound.play();
                        break;
                    case 'maul':
                        attackerSound.play();
                        break;    
                    case 'yoda':
                        attackerSound.play();
                        break;
                    case 'luke':
                        attackerSound.play();
                        break;
                    case 'obiWan':
                        attackerSound.play();
                        break;
                    case 'maul':
                        break;
                }    
            }, 200)
            
        },
        setDefenderPosition: (defenderParent)=>{
            let defender = defenderParent.parentElement;
                defender.classList = 'col-md-12 d-flex flex-column align-items-center defenderClass';
            let defenderCard = document.querySelector(UISelectors.defenderCard);
               defender.childNodes[3].classList = 'container';
            defenderCard.appendChild(defender);
            
         
            let defenderID = defender.firstElementChild.id,
                defenderSound = document.querySelector(`#${defenderID}Sound`);
            switch(defenderID) {
                case 'vader':
                    setTimeout(()=>{
                     defenderSound.play();    
                    }, 3500);
                    break;
                case 'palpatine':
                    setTimeout(()=>{
                     defenderSound.play();    
                    }, 3500);
                    break;
                case 'maul':
                    setTimeout(()=>{
                     defenderSound.play();    
                    }, 3500);
                    break;    
                case 'yoda':
                    setTimeout(()=>{
                     defenderSound.play();    
                    }, 3500);
                    break;
                case 'luke':
                    setTimeout(()=>{
                     defenderSound.play();    
                    }, 3500);
                    break;
                case 'obiWan':
                    setTimeout(()=>{
                     defenderSound.play();    
                    }, 3500);
                    break;
                case 'maul':
                    break;
            }
        },
        
        getSelectors: () => {
            return UISelectors;
        }
    }

})();




//==============APP CONTROLLER=================
const AppCtrl = (function(ItemCtrl, UICtrl, $){
    //Get UI selectors
    const UISelectors = UICtrl.getSelectors();
    
    let charactersArr = Array.from(document.querySelectorAll(UISelectors.starWarsChars));
    
    const loadEventListeners = ()=>{
        
        /*----------------CLICK Events-----------------*/
        charactersArr.forEach((char, index, arr)=>{
            char.addEventListener('click', attackerPosition);
        });
        
        document.querySelector(UISelectors.attack).addEventListener('click', attack);
        
        
    }
    
    const attackerPosition = function(e){
        
        let attackerParent = e.path[1].parentElement,
            attackerChild = e.path[1],
            randNum = Math.floor(Math.random()*3),
            soundTrack = document.querySelector(UISelectors.soundTrack).volume = 0.05;
        
        if(attackerChild.classList.contains('darkSide')){
            
            let goodSide = charactersArr.filter((darkChar, index, arr)=> {
                if(darkChar.parentElement.classList.contains('goodSide') === true){
                    return arr[index];
                }
            });
            
            charactersArr.forEach((char, index, arr)=>{
                char.removeEventListener('click', attackerPosition);
            });
            
            UICtrl.setDefenderPosition(goodSide[randNum]);
            
            UICtrl.setAttackerPosition(attackerParent, attackerChild);
            
            document.querySelector(UISelectors.darkSideCharacters).classList = 'row d-flex justify-content-around';
            document.querySelector(UISelectors.goodSideCharacters).classList = 'row d-flex justify-content-around';
            document.querySelector(UISelectors.pickFighterHeading).style.display = 'none';
            
            ItemCtrl.setAttackerStats(attackerChild);
            
            ItemCtrl.setDefenderStats(goodSide[randNum]);
            
            $('#fightingStageModal').modal('show')
        }else if(attackerChild.classList.contains('goodSide')){
            
            let darkSide = charactersArr.filter((goodChar, index, arr)=> {
                if(goodChar.parentElement.classList.contains('darkSide') === true){
                    return arr[index];
                }
            });
            
            UICtrl.setDefenderPosition(darkSide[randNum]);
            
            charactersArr.forEach((char, index, arr)=>{
                char.removeEventListener('click', attackerPosition);
            });
            
            UICtrl.setAttackerPosition(attackerParent, attackerChild);
            
            document.querySelector(UISelectors.darkSideCharacters).classList = 'row d-flex justify-content-around';
            document.querySelector(UISelectors.goodSideCharacters).classList = 'row d-flex justify-content-around';
            
            document.querySelector(UISelectors.pickFighterHeading).style.display = 'none';
            
            ItemCtrl.setAttackerStats(attackerChild);
            
            ItemCtrl.setDefenderStats(darkSide[randNum]); 
            
            $('#fightingStageModal').modal('show')
        }
        
    }
    
    const attack = function(){
        let saberSound = document.querySelector('#saberSound');
        saberSound.volume = .4;
        saberSound.play();
        setTimeout(()=>{
            ItemCtrl.attack();    
        }, 3700);
        
        
    }
    
    
    //Public Methods
    return {
        init: () => {
           loadEventListeners();
            
            setTimeout(()=>{
                document.querySelector('.card.mx-auto.gameCard').style.transition = 'all 15s';            
                document.querySelector('.card.mx-auto.gameCard').style.transform = 'translateY(-15%) scale(.70)';
                document.querySelector('.card.mx-auto.gameCard').style.transitionTimingFunction = 'linear';
                let soundTrack = document.querySelector(UISelectors.soundTrack);
                soundTrack.volume = 0.3;
                soundTrack.play();
                soundTrack.autoplay = true;

            }, 300);
            

        }
    }

})(ItemCtrl, UICtrl, $);

AppCtrl.init();