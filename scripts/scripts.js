
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

//show and hide qustions on change / click
$('.question-1 input').on('change', function () {
   if ($(this).is(':checked')){ 
       $('.question-1').hide();
       $('.question-2').show();
   }
});

$('.question-2 input').on('change', function () {
    if ($(this).is(':checked')) {
        $('.question-2').hide();
        $('.question-3').show();
    }
});

$('.question-3 input').on('change', function () {
    if ($(this).is(':checked')) {
        $('.question-3').hide();
        $('.question-4').show();
    }
});

$('.question-4 input').on('change', function () {
    if ($(this).is(':checked')) {
        $('.question-4').hide();
        $('.submit').show();
    }
});


$('.submit').on('click', function () {
        $('.submit').hide();
});








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
        let qOne = myApp.trips[userTemp];
        console.log("qOne",qOne)//TBD
       
         //check qOne array if it === userCost push to qTwo
        let qTwo = qOne.filter((item) => {
           return item.cost === userCost;
        });
        console.log("qTwo", qTwo)//TBD

        //check qTwo array if it === userAdventure push to qThree
        let qThree = qTwo.filter((item) => {
            return item.adventures === userAdventures;
        });
        console.log("qThree", qThree)//TBD

        //check qThree array if it === userThinker push to qFour
        let qFour = qThree.filter((item) => {
            return item.thinker === userThinker;
        });
        console.log("qFour", qFour)//TBD

        //send FNL array to print
        myApp.print(qFour);
    })
};

//on load of page run init function
$(function(){
    myApp.init();
})

//print FNL result
myApp.print = function (object){
    console.log("fnl", object)
    $(`.results`).html(`<h2 class="your-trip">${object[0].location}</h2>`);
}