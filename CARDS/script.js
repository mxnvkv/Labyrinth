// var colors = [
//     "#FF101F",
//     "#393E41",
//     "#3F88C5",
//     "#44BBA4",
//     "#F6F7EB",
//     "#0B1D51",
//     "#F75C03",
//     "#F1C40F",
//     "#D90368",
//     "#00CC66"
// ];
//
// var colors20 = [];
//
// function getRandomColor() {
//     var num = Math.floor( Math.random() * colors.length );
//     var color = colors[num];
//     colors.splice(num, 1);
//
//     return color;
// }
//
// var area = document.querySelector(".area");
// var divs = [];
//
// for ( var i = 0; i < 10; i++ ) {
//     var div1 = document.createElement("div");
//     var div2 = document.createElement("div");
//
//     var color = getRandomColor();
//
//     div1.className = "card";
//     div2.className = "card";
//
//     div1.style.background = color;
//     div2.style.background = color;
//
//     divs.push(div1, div2);
// }
//
// divs.sort(function(a, b){
//     return Math.random() - 0.5;
// });
//
// for ( var i = 0; i < 20; i++ ) {
//     area.appendChild(divs[i]);
//     colors20.push(divs[i].style.backgroundColor);
// }
//
// // adding grey for everyone
//
// for ( var i = 0; i < divs.length; i++ ) {
//     divs[i].style.backgroundColor = "grey";
// }
//
// // animating cards
//
// var checkToEnter = true;
//
// area.addEventListener("click", (e) => {
//     if ( e.target.tagname = "DIV" && e.target.className !== "area" && e.target.style.backgroundColor !== "black"
//         && checkToEnter) {
//
//         if ( e.target.style.backgroundColor !== "grey" ) {
//             e.target.style.backgroundColor = "grey";
//         } else {
//             var ind = divs.indexOf(e.target);
//             e.target.style.backgroundColor = colors20[ind];
//         }
//
//         var counter = 0;
//         var openCards = [];
//
//         for ( var i = 0; i < divs.length; i++ ) {
//             if ( divs[i].style.backgroundColor !== "grey" ) {
//                 counter++;
//                 openCards.push(divs[i]);
//             }
//             if ( counter === 2 ) {
//
//                 if ( openCards[0].style.backgroundColor === openCards[1].style.backgroundColor ) {
//                     setTimeout(function() {
//                         openCards[0].style.backgroundColor = "black";
//                         openCards[1].style.backgroundColor = "black";
//                     }, 1000);
//                 } else {
//                     checkToEnter = false;
//                     setTimeout(function() {
//                         for ( var i = 0; i < divs.length; i++ ) {
//                             if ( divs[i].style.backgroundColor !== "grey" ) {
//                                 divs[i].style.backgroundColor = "grey";
//                             }
//                         }
//
//                         checkToEnter = true;
//                     }, 1000);
//                 }
//             }
//         }
//     }
// });

var colors = [
    "#FF101F",
    "#393E41",
    "#3F88C5",
    "#44BBA4",
    "#F6F7EB",
    "#0B1D51",
    "#F75C03",
    "#F1C40F",
    "#D90368",
    "#00CC66"
];

var cardsColors = [];
var areaDiv = document.querySelector(".area");
var cardDiv = [];
var access = true;

cardsColors = cardsColors.concat(colors, colors);

cardsColors.sort(function() {
    return .5 - Math.random();
});

for ( var i = 0; i < cardsColors.length; i++ ) {
    cardsColors[i] = [cardsColors[i], "grey"];
}

for ( var i = 0; i < cardsColors.length; i++ ) {
    var div = document.createElement("div");

    div.className = "card";
    div.style.backgroundColor = cardsColors[i][1];
    cardDiv.push(div);

    areaDiv.appendChild(div);
}

areaDiv.addEventListener("click", (e) => {
    if (
        e.target.className === "card" &&
        e.target.style.backgroundColor !== "black" &&
        access
    ) {
        var ind = cardDiv.indexOf(e.target);
        e.target.style.backgroundColor = cardsColors[ind][0];
    }

    var counter = 0;
    var openedCards = []

    for ( var i = 0; i < cardDiv.length; i++ ) {
        if ( cardDiv[i].style.backgroundColor !== "grey" && cardDiv[i].style.backgroundColor !== "black") {
            counter++;
            openedCards.push(cardDiv[i]);
        }
    }

    if ( counter == 2 ) {
        if ( openedCards[0].style.backgroundColor === openedCards[1].style.backgroundColor ) {
            // set black and "delete"
            access = false;

            setTimeout(function() {
                openedCards[0].style.backgroundColor = "black";
                openedCards[1].style.backgroundColor = "black";

                access = true;
            }, 1000);
        } else {
            // set grey
            access = false;

            setTimeout(function() {
                openedCards[0].style.backgroundColor = "grey";
                openedCards[1].style.backgroundColor = "grey";

                access = true;
            }, 1000);
        }
    }


});
