// object
const trips ={
    //hot array
    hot:[
        {
            location: "New Orleans",
            cost: "$",
            adventures: "yes",
            thinker: "creative"
        },
         {
            location: "Las Vegas",
            cost: "$",
            adventures: "yes",
            thinker: "logical"
        },
         {
            location: "Key West",
            cost: "$",
            adventures: "no",
            thinker: "creative"
        },
         {
            location: "NASA",
            cost: "$",
            adventures: "no",
            thinker: "logical"
        },
         {
            location: "The Sun",
            cost: "$$",
            adventures: "yes",
            thinker: "creative"
        },
         {
            location: "Galápagos Islands",
            cost: "$$",
            adventures: "yes",
            thinker: "logical"
        },
        {
            location: "Melbourne AU",
            cost: "$$",
            adventures: "no",
            thinker: "creative"
        },
        {
            location: "Silicon Valley",
            cost: "$$",
            adventures: "no",
            thinker: "logical"
        }
    ],//end of hot array
    //cold array
    cold: [
        {
            location: "Yellowknife CA",
            cost: "$",
            adventures: "yes",
            thinker: "creative"
        },
        {
            location: "Jasper Ab CA",
            cost: "$",
            adventures: "yes",
            thinker: "logical"
        },
        {
            location: "winnipeg",
            cost: "$",
            adventures: "no",
            thinker: "creative"
        },
        {
            location: "Sweden",
            cost: "$",
            adventures: "no",
            thinker: "logical"
        },
        {
            location: "Mars",
            cost: "$$",
            adventures: "yes",
            thinker: "creative"
        },
        {
            location: "Iceland",
            cost: "$$",
            adventures: "yes",
            thinker: "logical"
        },
        {
            location: "Montreal CA",
            cost: "$$",
            adventures: "no",
            thinker: "creative"
        },
        {
            location: "Starwars death star",
            cost: "$$",
            adventures: "no",
            thinker: "logical"
        }
    ]//end of cold array
}//end of object


// doc ready
$(function (){
    //prevent the defult on submit
    //on the event of submit on the form
    $(`form`).on(`submit`, function(event){
        //call the event and prevent the default
        event.preventDefault();
    })

    //take users input and save them
    //creating a varibal to hold the user input creating a jQuary selecter to target the answer  and lission for when its checked and hold the val
    let userTemp = $(`input[name=q-1]:checked`).val();
    let userCost = $(`input[name=q-2]:checked`).val();
    let userAdventures = $(`input[name=q-3]:checked`).val();
    let userThinker = $(`input[name=q-4]:checked`).val();
    

    //narrow options between hot or cold arrays inside the trips object
    let temp = trips[userTemp];

    //empty array to hold first filterd options from qustion one
    let aOne = []//this holds costChoice

    // for loop to go though the temp array and push the usercost to the aOne array
    for(let i = 0; i < temp.length; i = i + 1){
        let costChoice = temp[i];

        if(costChoice.cost === userCost){
            aOne.push(costChoice);
        }
    }


    let aTwo = []//this holds adventuresChoice
    for (let i = 0; i < temp.length; i = i + 1) {
        let adventuresChoice = aOne[i];

        if (adventuresChoice.adventures === userAdventures) {
            aTwo.push(adventuresChoice);
        }
    }

    let aThree = []//this holds thinkerChoice
    for (let i = 0; i < temp.length; i = i + 1) {
        let thinkerChoice = aTwo[i];

        if (thinkerChoice.thinker === userThinker) {
            aThree.push(thinkerChoice);
        }
    }

    $(`.results`).html(`<h2 class="yourTrip">${aThree.title}</h2>`);

})

