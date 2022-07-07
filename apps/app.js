class Creature {
    constructor(name) {
        this.name = name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
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
    myEgg.setAttribute('src', "/img/demon_cat.webp")
    myPet.appendChild(myEgg)
    document.querySelector('#center-piece').appendChild(myPet)
    document.querySelector('#starter').parentNode.removeChild(document.querySelector('#starter'))

    pet = new Creature(name)
}

goButton.addEventListener("click", () => createPet(starterForm.value))