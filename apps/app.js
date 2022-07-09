class Creature {
    constructor(name) {
        this.name = name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.fitness = 1
        this.age = 1
        this.alive = 1
    }
    getAge() {
        return this.age
    }
    getName() {
        return this.name
    }
    getHunger() {
        return this.hunger
    }
    getSleepiness() {
        return this.sleepiness
    }
    getBoredom() {
        return this.boredom
    }
    // getFitness() {
    //     return this.fitness
    // }
    ageUp() {
        this.hunger += 1
        this.sleepiness += 1
        this.boredom += 1
        // this.fitness += 1
        if (this.age >= 4) {
            let petImage = document.querySelector('#petImage');
            petImage.style.height = "175%";
            petImage.style.width = "125%";
        }
        this.age += 1
        let eat2 = document.querySelector('#eat h2');
        eat2.innerHTML = pet.getHunger()
        let sleep2 = document.querySelector('#sleep h2');
        sleep2.innerHTML = pet.getSleepiness()
        let play2 = document.querySelector('#play h2');
        play2.innerHTML = pet.getBoredom()
        let exc2 = document.querySelector('#age h2');
        exc2.innerHTML = pet.getAge()
    }
    play() {
        if (this.boredom > 1) {
            this.boredom -= 1
        }
    }
    eat() {
        if (this.hunger > 1) {
            this.hunger -= 1
        }
    }
    sleep() {
        if (this.sleepiness > 1) {
            this.sleepiness -= 1
        }
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = "none";
        function lightsOn() {
            document.body.style.backgroundImage = "url('../img/wild_background.gif')";
        }
        window.setTimeout(lightsOn, 3000);
    }
    die() {
        clearInterval(runner);
        alert(`${this.name} has died`)
    }
}

starterForm = document.querySelector('#starter input')
goButton = document.querySelector('#starter #goButton')

let pet = {}

function createPet (name) {
    let myPet = document.createElement("div")
    myPet.setAttribute('id', name)
    myPet.setAttribute('class', "pet")
    let myEgg = document.createElement("img")
//     myEgg.setAttribute('src', "../img/demon_cat.webp")
//     myEgg.setAttribute('src', "https://raw.githubusercontent.com/harrisv25/mini-tamagotchi/main/img/demon_cat.webp")
    import image from "../img/demon_cat.webp";
    myEgg.setAttribute('src', image)
    myEgg.setAttribute('id', "petImage")
    myPet.appendChild(myEgg)
    document.querySelector('#center-piece').appendChild(myPet)
    document.querySelector('#starter').parentNode.removeChild(document.querySelector('#starter'))
    pet = new Creature(name)
    const bin = document.querySelectorAll('.bin');
    bin.forEach(element => {
        element.style.display = 'block';
    });
}

goButton.addEventListener("click", () => createPet(starterForm.value))


const eat1 = document.querySelector('#eat');
const hiddeneat = document.querySelector('#eat img');
eat1.addEventListener('mouseover', function handleMouseOver() {
    hiddeneat.style.display = 'block';
});
eat1.addEventListener('mouseout', function handleMouseOut() {
    hiddeneat.style.display = 'none';
});


const sleep1 = document.querySelector('#sleep');
const hiddensleep = document.querySelector('#sleep img');
sleep1.addEventListener('mouseover', function handleMouseOver() {
    hiddensleep.style.display = 'block';
});
sleep1.addEventListener('mouseout', function handleMouseOut() {
    hiddensleep.style.display = 'none';
});


const play1 = document.querySelector('#play');
const hiddenplay = document.querySelector('#play img');
play1.addEventListener('mouseover', function handleMouseOver() {
    hiddenplay.style.display = 'block';
});
play1.addEventListener('mouseout', function handleMouseOut() {
    hiddenplay.style.display = 'none';
});


// const exercise1 = document.querySelector('#exercise');
// const hiddenexercise = document.querySelector('#exercise img');
// exercise1.addEventListener('mouseover', function handleMouseOver() {
//     hiddenexercise.style.display = 'block';
// });
// exercise1.addEventListener('mouseout', function handleMouseOut() {
//     hiddenexercise.style.display = 'none';
// });

function eat () {
    pet.eat()
    let h2 = document.querySelector('#eat h2');
    h2.innerHTML = pet.getHunger()
}

function sleep () {
    pet.sleep()
    let h2 = document.querySelector('#sleep h2');
    h2.innerHTML = pet.getSleepiness()
}

function play () {
    pet.play()
    let h2 = document.querySelector('#play h2');
    h2.innerHTML = pet.getBoredom()
}

function exercise () {
    pet.exercise()
    let h2 = document.querySelector('#exercise h2');
    h2.innerHTML = pet.getFitness()
}

hiddeneat.addEventListener("click", () => eat())
hiddensleep.addEventListener("click", () => sleep())
hiddenplay.addEventListener("click", () => play())
// hiddenexercise.addEventListener("click", () => exercise())

function life () {
    if (pet.name !== undefined) {
        pet.ageUp()
        if (pet.hunger >= 10) {
            pet.die()
        }
        if (pet.sleepiness >= 10) {
            pet.die()
        }
        if (pet.boredom >= 10) {
            pet.die()
        }
        // if (pet.fitness >= 10) {
        //     pet.die()
        // }
    }
}

let runner = window.setInterval(life, 10000);
