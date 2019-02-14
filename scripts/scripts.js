
//myApp holds the whole quiz
const myApp = {};

//myApp.init holds the whole funtions for quiz
myApp.init = function(){
    myApp.handleSubmit();
}

// object
myApp.trips ={
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
}



myApp.handleSubmit = function() {
    //prevent the defult on submit
    $(`form`).on(`submit`, function (event) {
        event.preventDefault();
        //take users input and save them in a varrible
        userTemp = $(`input[name=q-1]:checked`).val();
        userCost = $(`input[name=q-2]:checked`).val();
        userAdventures = $(`input[name=q-3]:checked`).val();
        userThinker = $(`input[name=q-4]:checked`).val();

        //narrow options between hot or cold arrays inside the trips object
        let temp = myApp.trips[userTemp];
        console.log(temp)


        //empty array to hold first filterd options
        // for loop to go though the temp array and filter and push the usercost options to the aOne array
        const one = temp.filter((item) => {
            return item.cost === userCost;
        });
        console.log("one", one)
        const two = one.filter((item) => {
            return item.adventures === userAdventures;
        });
        console.log("two", two)
        const three = two.filter((item) => {
            return item.thinker === userThinker;
        });
        console.log("three",three)
        //send FNL array to print
        myApp.print(three);
    })

    // let aOne = []//this holds costChoice
    // for (let i = 0; i < temp.length; i = i + 1) {
    //     let costChoice = temp[i];

    //     if (costChoice.cost === userCost) {
    //         aOne.push(costChoice);
    //     }
    // }

    // let aTwo = []//this holds adventuresChoice
    // for (let i = 0; i < temp.length; i = i + 1) {
    //     let adventuresChoice = aOne[i];

    //     if (adventuresChoice.adventures === userAdventures) {
    //         aTwo.push(adventuresChoice);
    //     }
    // }

    // let aThree = []//this holds thinkerChoice
    // for (let i = 0; i < temp.length; i = i + 1) {
    //     let thinkerChoice = aTwo[i];

    //     if (thinkerChoice.thinker === userThinker) {
    //         aThree.push(thinkerChoice);
    //     }
    // }


  
}

//on load of page run init function
$(function(){
    myApp.init();
})

//print FNL result
myApp.print = function(object){
    $(`.results`).html(`<h2 class="your-trip">${object.location}</h2>`);
}