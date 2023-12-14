function machineMove() {
    let moves = ["rock", "paper", "scissors"];

    let randomInt = Math.floor(Math.random()*3);

    let randomMove = moves[randomInt];

    return randomMove;
}

let timesYouWon = 0;
let timesPcWon = 0;

function compare(btn) {
    let theMachineSMove = machineMove()

    let result = '';

    switch (`${btn}-${theMachineSMove}`) {
        case 'rock-scissors':
        case 'paper-rock':
        case 'scissors-paper':
            result = 'You Won';
            timesYouWon += 1;
            break;
        case 'scissors-rock':
        case 'rock-paper':
        case 'paper-scissors':
            result = 'You Lost';
            timesPcWon += 1;
            break;
        default:
            result = 'Tie';
            break;
    }

    // check if image already exsists then deleted
    let myImg = document.getElementById('my-img')
    let myResult = document.getElementById('myRes')
    if (myImg) {
        myImg.remove()
    }

    // check if result already exsists 
    if (myResult) {
        myResult.remove()
    }

    // show the PC's choice with the correspondant image
    let parentElement = document.getElementById('left')
    let firstChild = document.getElementById('h3')
    let img = document.createElement('img')
    img.src = `https://www.rpsgame.org/assets/img/${theMachineSMove}.svg`
    img.id = "my-img"
    parentElement.insertBefore(img, firstChild)

    // show the result at the bottom of the page
    let resElement = document.getElementById('parentRes')
    let element = document.createElement('h1')
    element.id = "myRes"
    element.innerHTML = `${result}`
    resElement.appendChild(element)


    // show the stars
    if (result === "You Won") {
        let myStars = document.getElementById('myFonts')
        let star = document.createElement('i')
        star.className = 'fa-regular fa-star'
        myStars.appendChild(star)
    } else if (result === "You Lost") {
        let pcStars = document.getElementById('pcFonts')
        let star = document.createElement('i')
        star.className = 'fa-regular fa-star'
        pcStars.appendChild(star)
    }

    // if one wins remove content and show who won
    if (timesYouWon === 3 || timesPcWon === 3) {
        
        setTimeout(() => {
            document.querySelector('.content').style.display = 'none'
            document.querySelector('#parentRes').style.display = 'none'

            let finalRes = document.createElement('h1')
            if (timesYouWon === 3) {
                finalRes.innerHTML = "You Won The Round"
            } else {
                finalRes.innerHTML = "Pc Won The Round"
            }
            document.querySelector('#finalRes').appendChild(finalRes)
        }, 200)
    }
}

