/* Task 3:
Create a short program that will simulate a fight between two fighters. Each fighter must be created using the Fighter constructor function. When creating a new fighter using this function, you need to pass to it (all properties, except for the name, must contain a number of points; max number of points that can be distributed is 30):
 
● name
● strength 
● agility 
● vitality

Each of these parameters will affect the hp, damage and defense of the fighter. These parameters should not be object properties, can't be directly modified in the object by assigning new values and should not even be readable. Instead, each fighter should have these methods:
  
● getName - returns the name of the fighter
● getHp - returns hp of the fighter
● takeDamage - deals damage to the fighter who called this method (the amount of damage
should be passed as an argument to this method)
● dealDamage - deals damage to the rival (rival should be passed as an argument to this
method)
The base damage of a fighter is 10. Each point of strength increases damage by 5, agility decreases damage by 3.
The base defense of a fighter is 10. Each point of agility increases defence by 5, strength increases defence by 3, vitality increases defence by 1.
The base hp of a fighter is 50. Each point of vitality increases hp by 10, strength increases hp by 5, agility increases hp by 3.
Create a fight function that takes two fighters as arguments. In this function, they must take turns inflicting damage to each other until the hp level of one of them reaches 0 (or lower). After each attack, a message should be displayed, which will indicate the amount of hp and the name of the fighter who received damage. When one of the fighters has been defeated, a message should appear indicating the name of the winner. */



console.log("Welcome Fighters!");

function Fighter(playerName, strength, agility, vitality) {
    this.playerName = playerName;
    this.strength = strength;
    this.agility = agility;
    this.vitality = vitality;
    this.health = 50 + (vitality * 10) + (strength * 5) + (agility * 3);
}

function fight() {

    getName = function (fighter) {
        console.log(`Your name is ${fighter.playerName}`);
    }

    getHp = function (fighter) {
        console.log(`Your HP is ${fighter.health}`);
    }

    takeDamage = function (player) {
        console.log(`Player received damage!`)

        let remainingHP = player.health - (10 + (player.strength * 5) - (player.agility - 3));

        console.log(`${player.playerName}'s HP is now reduced to ${remainingHP}.`)

        player.health = remainingHP;
    }

    dealDamage = function (target) {
        console.log(`Player damaged his rival!`)

        let remainingHP = target.health - (10 + (target.strength * 5) - (target.agility - 3));

        console.log(`${target.playerName}'s HP is now reduced to ${remainingHP}.`)

        target.health = remainingHP;
    }


    let p1Name = prompt('Player1 Input your Name');
    let p1Strength = prompt('Player1 Input Stretgth');
    let p1Agility = prompt('Player1 Input Agility');
    let p1Vitality = prompt('Player1 Input Vitality');
    let player1 = new Fighter(p1Name, p1Strength, p1Agility, p1Vitality);
    console.log(player1)

    let p2Name = prompt('Player1 Input your Name');
    let p2Strength = prompt('Player2 Input Stretgth');
    let p2Agility = prompt('Player2 Input Agility');
    let p2Vitality = prompt('Player2 Input Vitality');
    let player2 = new Fighter(p2Name, p2Strength, p2Agility, p2Vitality);
    console.log(player2)



    while (player1.health >= 0 && player2.health >= 0) {
        if (player1.health < 0 || player2.health < 0) {
            break
        }
        else {
            const input1 = prompt(`Fighter1: ${p1Name} wants to...`);
            if (input1.toLowerCase() === 'takedamage') {
                takeDamage(player1);
            }
            else if (input1.toLowerCase() === 'dealdamage') {
                dealDamage(player2);
            }
            else if (input1.toLocaleLowerCase() === 'getname') {
                getName(player1);
            }
            else if (input1.toLocaleLowerCase() === 'gethp') {
                getHp(player1);
            }
            else {
                alert("type takeDamage or dealDamage ONLY")
            }
        }


        if (player1.health < 0 || player2.health < 0) {
            break
        }
        else {
            const input2 = prompt(`Fighter1: ${p2Name} wants to...`);
            if (input2.toLowerCase() === 'takedamage') {
                takeDamage(player2);
            }
            else if (input2.toLowerCase() === 'dealdamage') {
                dealDamage(player1);
            }
            else if (input2.toLocaleLowerCase() === 'getname') {
                getName(player2);
            }
            else if (input2.toLocaleLowerCase() === 'gethp') {
                getHp(player2);
            }
            else {
                alert("type takeDamage or dealDamage ONLY")
            }
        }
    }



    if (player1.health <= 0) {
        console.log(`${player1.playerName} defeated.`);
        console.log(`${player2.playerName} wins!`)
    }
    else if (player2.health <= 0) {
        console.log(`${player2.playerName} defeated.`);
        console.log(`${player1.playerName} wins!`)
    }
}

