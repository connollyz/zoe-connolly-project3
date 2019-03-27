
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
            //google images
            image:"assets/new-orleans.jpg",
            alt:"A red streetcar in New Orleans driving down a colourful, busy street lined with palm trees.",
            location: "New Orleans",
            //wiki discriptions
            description: "Your next trip is to New Orleans. New Orleans is a Louisiana city on the Mississippi River, near the Gulf of Mexico. Nicknamed the 'Big Easy,' it's known for its round-the-clock nightlife, vibrant live-music scene and spicy, singular cuisine",
            cost: "$",
            adventures: "yes",
            thinker: "creative"
        },
         {
            //google images
            image: "assets/las-vegas.jpg",
             alt: "City view of Los Vagus at night bright lights and busy streets.",
            location: "Las Vegas",
            //wiki discriptions
             description: "Your next trip is to Las Vegas, officially the City of Las Vegas and often known simply as Vegas, is the 28th-most populated city in the United States, the most populated city in the state of Nevada, and the county seat of Clark County.",
            cost: "$",
            adventures: "yes",
            thinker: "logical"
        },
         {
            //google images
            image: "assets/key-west.jpg",
            alt: "Beautiful beach, light blue water and lots of palm trees.",
            location: "Key West",
            //wiki discription
             description: "Your next trip is to Key West. Key West, a U.S. island city, is part of the Florida Keys archipelago. It's also Florida's southernmost point, lying roughly 90 miles north of Cuba., a U.S. island city, is part of the Florida Keys archipelago. It's also Florida's southernmost point, lying roughly 90 miles north of Cuba.",
            cost: "$",
            adventures: "no",
            thinker: "creative"
        },
         {  
            //google images
            image: "assets/nasa.jpg",
            alt: "Space ship taking off to space",
            location: "NASA",
            description: "Your next trip is to NASA to learn about space.",
            cost: "$",
            adventures: "no",
            thinker: "logical"
        },
         {
            //google images
            image: "assets/sun.jpg",
            alt: "the sun a hot ball of plasma.",
            location: "The Sun",
            //wiki discription
            description: "Your next trip is to the Sun the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma.",
            cost: "$$",
            adventures: "yes",
            thinker: "creative"
        },
         {
            //google images
            image: "assets/galápagos-islands.JPG",
            alt: "Beautiful beach with rock formations along the shour and a seal playing in the water.",
            location: "Galápagos Islands",
            //wiki discription
            description: "Your next trip is to the Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing",
            cost: "$$",
            adventures: "yes",
            thinker: "logical"
        },
        {
            //google images
            image: "assets/melbourne.jpg",
            alt: "City scape of Melborne Australia.",
            location: "Melbourne AU",
            //wiki discription
            description: "Your next trip is to Melbourne. Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. ",
            cost: "$$",
            adventures: "no",
            thinker: "creative"
        },
        {   
            //google images
            image: "assets/silicon-valley.png",
            alt: "Birds eye view of Silicon Valley title opening.",
            location: "Silicon Valley",
            //wiki discription
            description: "Your next trip is to Silicon Valley. Silicon Valley is a region in the southern Bay Area of Northern California that serves as a global center for high technology, innovation and social media",
            cost: "$$",
            adventures: "no",
            thinker: "logical"
        }
    ],//end of hot array
    //cold array
    cold: [
        {
            //google images
            image: "assets/yellowKnif.jpg",
            alt: "winter land scape photo of the colourful northron lights above the city of yellowknife",
            location: "Yellowknife CA",
            //wiki discription
            description: "Your next trip is to YellowKnife. Yellowknife is the capital city of Canada’s Northwest Territories. It lies on the north shore of Great Slave Lake, with possible views of the northern lights in fall and winter.",
            cost: "$",
            adventures: "yes",
            thinker: "creative"
        },
        {
            //google images
            image: "assets/jasper.jpg",
            alt: "Spirit island jasper ab. Beautiful blue lake with mountains in the background.",
            location: "Jasper Ab CA",
            //wiki discription
            description: "Your next trip is to Jasper AB. Jasper, an alpine town in Canada’s Alberta province, is the commercial centre of Jasper National Park.Amid the snow- capped Canadian Rockies, the park has glacier - fed lakes, forests and rivers.",
            cost: "$",
            adventures: "yes",
            thinker: "logical"
        },
        {
            //google images
            image: "assets/winnipeg.jpg",
            alt: "Winter weather, person walking down a snow coverd street.",
            location: "Winnipeg",
            //wiki discription
            description: "Your next trip is to Winnipeg. Winnipeg is the capital of the Canadian province of Manitoba. Its heart is The Forks, a historic site at the intersection of the Red and Assiniboine rivers, with warehouses converted to shops and restaurants, plus ample green space dedicated to festivals, concerts and exhibits.",
            cost: "$",
            adventures: "no",
            thinker: "creative"
        },
        {
            //google images
            image: "assets/sweden.jpg",
            alt: "Beautiful mountain landscape with hiker admiring the view.",
            location: "Sweden",
            //wiki discription
            description: "Your next trip is to Sweden. Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains. Its principal cities, eastern capital Stockholm and southwestern Gothenburg and Malmö, are all coastal. Stockholm is built on 14 islands.",
            cost: "$",
            adventures: "no",
            thinker: "logical"
        },
        {

            //google images
            image: "assets/mars.jpg",
            alt: "surface of mars viewed from space ship",
            location: "Mars",
            //wiki discription
            description: "Your next trip is to Mars. Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury.",
            cost: "$$",
            adventures: "yes",
            thinker: "creative"
        },
        {   
            //google images
            image: "assets/iceland.jpg",
            alt: "Waterfalls runing down the side of a rock formation in to a river, with bright green grass.",
            location: "Iceland",
            //wiki discription
            description: "Your next trip is to Iceland. Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks.",
            cost: "$$",
            adventures: "yes",
            thinker: "logical"
        },
        {
            //google images
            image: "assets/montreal.jpg",
            alt: "Old city streets of Montreal, lined with shops.",
            location: "Montreal CA",
            //wiki discription
            description: "Your next trip is to Montréal. Montréal is the largest city in Canada's Québec province. It’s set on an island in the Saint Lawrence River and named after Mt. Royal, the triple-peaked hill at its heart.",
            cost: "$$",
            adventures: "no",
            thinker: "creative"
        },
        {
            //google images
            image: "assets/death-star.jpeg",
            alt: "Starwars Death Start traveling though space.",
            location: "Starwars Death Star ",
            //wiki discription
            description: "Your next trip is to the Death Star. The Death Star a moon-sized space station with the ability to destroy an entire planet",
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

// back button only works on this button
//maybe work with checkbox? 
$('.question-2 input').on('change', function () {
    if ($('.q-2').is(':checked')) {
        $('.question-2').hide();
        $('.question-3').show();
    } else{
        $('.question-2').hide();
        $('.question-1').show();
        // trying to clear checked box when reset
        $('.question-1 input').attr('checked', false);  
    }
});

$('.question-3 input').on('change', function () {
    if ($(this).is(':checked')) {
        $('.question-3').hide();
        $('.question-4').show();
    } else {
        $('.question-3').hide();
        $('.question-2').show();
    }
});

$('.question-4 input').on('change', function () {
    if ($(this).is(':checked')) {
        $('.question-4').hide();
        $('.submit').show();
    } else {
        $('.question-4').hide();
        $('.question-3').show();
    }
});


$('.submit').on('change', function () {
        if($(this).is(':checked')){
            $('.submit').hide();
        }else{
            $('.submit').hide();
            $('.question-4').show();
        }
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
      
       
         //check qOne array if it === userCost push to qTwo
        let qTwo = qOne.filter((item) => {
           return item.cost === userCost;
        });
       

        //check qTwo array if it === userAdventure push to qThree
        let qThree = qTwo.filter((item) => {
            return item.adventures === userAdventures;
        });
      

        //check qThree array if it === userThinker push to qFour
        let qFour = qThree.filter((item) => {
            return item.thinker === userThinker;
        });
 

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
    $(`.results`).html(
        `
        <h2 class="your-trip">${object[0].location}</h2>
        <div><img src="${object[0].image}" alt="${object[0].alt}"></div>
        <p>${object[0].description}</p>
        <a href="index.html">start again?</a>`
    );
}