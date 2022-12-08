// CREATE RANDOM CAPITAL CHARACTOR
function makecapital(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
// CREATE RANDOM LOWER CHARACTOR
function makelower(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
// CREATE RANDOM NUMBER CHARACTOR
function makenumber(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// console.log(makeid);

let d = new Date();
// console.log(d.toUTCString());

let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();
let dayofweek = d.getDay();
let hour = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();



// Submit Custom

// const lc1 = document.getElementById(“option1”).selectedIndex;
// console.log(lc1);
// // let e = document.getElementById(“option1”);
// // let giaTri = e.options[e.selectedIndex].text;

// const btn = document.querySelector('#btn');
//         const sb = document.querySelector('#framework')
//         btn.onclick = (event) => {
    //             event.preventDefault();
    //             // show the selected index
    //             alert(sb.selectedIndex);
    //         };
    

    
    //GET INFORMATION FROM CUSTOM OPTIONS (SUBMIT) AND NUMBER OF LOOPS
    document.getElementById("btn1").onclick = function(e) {
        e.preventDefault();
        getCustomValue();
    };
    
    let numberofcodes = document.getElementById("numberofcodes").value;
    function getCustomValue() {
        numberofcodes = document.getElementById("numberofcodes").value;
        let customInput = document.getElementById("customoptions").value;
        console.log(customInput);
        // console.log(numberofcodes);
    }
    
    // GET INFORMATION FROM TAG SELECT (GENERATE)
    document.getElementById("btn2").onclick = function(e) {
        e.preventDefault();
        // console.log(numberofcodes);
        for (var i = 0; i < numberofcodes; i++) {
            // console.log(getSelectValue());
            // document.write(getSelectValue());

            const p = document.createElement('p');
            p.innerHTML = getSelectValue();
            console.log(p);
            document.body.appendChild(p);
        }
    };

    function getSelectValue() {
            //get value in tag select
            let e = document.getElementById("lc1"); //LC1
            
            let giaTri1 = e.options[0].value; //random capital character
            giaTri1 = makecapital(1);
            // console.log(giaTri1);
            
            let giaTri2 = e.options[1].value // day
            giaTri2 = day;
            // console.log(giaTri2);

            let giaTri3 = e.options[2].value // month
            giaTri3 = month;
            // console.log(giaTri3)
            
            let giaTri4 = e.options[3].value; // year
            giaTri4 = year;
            // console.log(giaTri4);
            // giaTri4 = j;
            // giaTri4 = giaTri4.toString(16);

            let giaTri5 = e.options[4].value; // hour
            giaTri5 =  hour;
            // console.log(giaTri5);
            
            let giaTri6 = e.options[5].value; // minute
            giaTri6 = minutes;
            // console.log(giaTri6);
            
            let giaTri7 = e.options[6].value; // seconds
            giaTri7 = seconds;
            // console.log(giaTri7);
            
            let giaTri8 = e.options[7].value; // Hex Number
            giaTri8 = Math.floor(Math.random() * 1000) + 1;
            giaTri8 = giaTri8.toString(16);
            console.log(giaTri8);
            
            let giaTri9 = e.options[8].value; // Custom option
            let customInput = document.getElementById("customoptions").value;
            giaTri9 = customInput;
            // console.log(giaTri9);
            
            let giaTri10 = e.options[9].value; // none
            giaTri10 = '';
            // console.log(giaTri10);
            
            let giaTri11 = e.options[10].value; // random lower character
            giaTri11 = makelower(1);
            // console.log(giaTri11);
            
            let giaTri12 = e.options[11].value // random number
            giaTri12 = makenumber(1);
            // console.log(giaTri12);
            // get value when choose the option
            var selectedValue1 = document.getElementById("lc1").value;
            if (selectedValue1 == 1) {
                selectedValue1 = giaTri1;
            }
            if (selectedValue1 == 2) {
                selectedValue1 = giaTri5;
            }
            if (selectedValue1 == 3) {
                selectedValue1 = giaTri6;
            }
            if (selectedValue1 == 4) {
                selectedValue1 = giaTri7;
            }
            if (selectedValue1 == 5) {
                selectedValue1 = giaTri8;
            }
            if (selectedValue1 == 6) {
                selectedValue1 = giaTri9;
            }
            if (selectedValue1 == 7) {
                selectedValue1 = giaTri10;
            }
            if (selectedValue1 == 8) {
                selectedValue1 = giaTri4;
            }
            if (selectedValue1 == 9) {
                selectedValue1 = giaTri11;
            }
            if (selectedValue1 == 10) {
                selectedValue1 = giaTri12;
            }
            if (selectedValue1 == 11) {
                selectedValue1 = giaTri2;
            }
            if (selectedValue1 == 12) {
                selectedValue1 = giaTri3;
            }
            // console.log(selectedValue1);
            


            // LC2
            let e1 = document.getElementById("lc2"); 
            let giaTri1lc2 = e1.options[0].value // random lower case character
            giaTri1lc2 = makelower(1);
            // console.log(giaTri1lc2);
            let giaTri2lc2 = e1.options[1].value; //random capital character
            giaTri2lc2 = makecapital(1);
            let giaTri3lc2 = e1.options[2].value // random number
            giaTri3lc2 = makenumber(1);
            let giaTri4lc2 = e1.options[3].value; // Numerical Order (Hex Value)
            giaTri4lc2 = Math.floor(Math.random() * 1000) + 1;
            // giaTri4 = j;
            giaTri4lc2 = giaTri4.toString(16);
            let giaTri5lc2 = e1.options[4].value; //day
            giaTri5lc2 =  day;
            let giaTri6lc2 = e1.options[5].value; //month
            giaTri6lc2 = month;
            let giaTri7lc2 = e1.options[6].value; // year
            giaTri7lc2 = year;
            let giaTri8lc2 = e1.options[7].value; // hour
            giaTri8lc2 = hour;
            let giaTri9lc2 = e1.options[8].value; // minutes
            giaTri9lc2 = minutes;
            let giaTri10lc2 = e1.options[9].value; // second
            giaTri10lc2 = seconds;
            let giaTri11lc2 = e1.options[10].value; // Custom option
            // let customInput = document.getElementById("customoptions").value
            giaTri11lc2 = customInput;
            let giaTri12lc2 = e1.options[11].value // none
            giaTri12lc2 = '';
            
            var selectedValue2 = document.getElementById("lc2").value;
            if (selectedValue2 == 1) {
                selectedValue2 = giaTri2lc2;
            }
            if (selectedValue2 == 2) {
                selectedValue2 = giaTri5lc2;
            }
            if (selectedValue2 == 3) {
                selectedValue2 = giaTri6lc2;
            }
            if (selectedValue2 == 4) {
                selectedValue2 = giaTri7lc2;
            }
            if (selectedValue2 == 5) {
                selectedValue2 = giaTri8lc2;
            }
            if (selectedValue2 == 6) {
                selectedValue2 = giaTri9lc2;
            }
            if (selectedValue2 == 7) {
                selectedValue2 = giaTri10lc2;
            }
            if (selectedValue2 == 8) {
                selectedValue2 = giaTri4lc2;
            }
            if (selectedValue2 == 9) {
                selectedValue2 = giaTri11lc2;
            }
            if (selectedValue2 == 10) {
                selectedValue2 = giaTri12lc2;
            }
            if (selectedValue2 == 11) {
                selectedValue2 = giaTri1lc2;
            }
            if (selectedValue2 == 12) {
                selectedValue2 = giaTri3lc2;
            }
            console.log(selectedValue2);
            

            // LC3
            let e2 = document.getElementById("lc3"); 
            let giaTri1lc3 = e2.options[0].value // random number
            giaTri1lc3 = makenumber(1);
            let giaTri2lc3 = e2.options[1].value; //random capital character
            giaTri2lc3 = makecapital(1);
            let giaTri3lc3 = e2.options[0].value // random lower case character
            giaTri3lc3 = makelower(1);
            let giaTri4lc3 = e2.options[3].value; // Numerical Order (Hex Value)
            giaTri4lc3 = Math.floor(Math.random() * 1000) + 1;
            // giaTri4 = j;
            giaTri4lc3 = giaTri4.toString(16);
            let giaTri5lc3 = e2.options[4].value; //day
            giaTri5lc3 =  day;
            let giaTri6lc3 = e2.options[5].value; //month
            giaTri6lc3 = month;
            let giaTri7lc3 = e2.options[6].value; // year
            giaTri7lc3 = year;
            let giaTri8lc3 = e2.options[7].value; // hour
            giaTri8lc3 = hour;
            let giaTri9lc3 = e2.options[8].value; // minutes
            giaTri9lc3 = minutes;
            let giaTri10lc3 = e2.options[9].value; // second
            giaTri10lc3 = seconds;
            let giaTri11lc3 = e2.options[10].value; // Custom option
            // let customInput = document.getElementById("customoptions").value
            giaTri11lc3 = customInput;
            let giaTri12lc3 = e1.options[11].value // none
            giaTri12lc3 = '';
            var selectedValue3 = document.getElementById("lc3").value;
            if (selectedValue3 == 1) {
                selectedValue3 = giaTri2lc3;
            }
            if (selectedValue3 == 2) {
                selectedValue3 = giaTri5lc3;
            }
            if (selectedValue3 == 3) {
                selectedValue3 = giaTri6lc3;
            }
            if (selectedValue3 == 4) {
                selectedValue3 = giaTri7lc3;
            }
            if (selectedValue3 == 5) {
                selectedValue3 = giaTri8lc3;
            }
            if (selectedValue3 == 6) {
                selectedValue3 = giaTri9lc3;
            }
            if (selectedValue3 == 7) {
                selectedValue3 = giaTri10lc3;
            }
            if (selectedValue3 == 8) {
                selectedValue3 = giaTri4lc3;
            }
            if (selectedValue3 == 9) {
                selectedValue3 = giaTri11lc3;
            }
            if (selectedValue3 == 10) {
                selectedValue3 = giaTri12lc3;
            }
            if (selectedValue3 == 11) {
                selectedValue3 = giaTri3lc3;
            }
            if (selectedValue3 == 12) {
                selectedValue3 = giaTri1lc3;
            }
            // console.log(selectedValue3);
            
            var selectedValue4 = document.getElementById("lc4").value;
            if (selectedValue4 == 1) {
                selectedValue4 = giaTri1;
            }
            if (selectedValue4 == 2) {
                selectedValue4 = giaTri2;
            }
            if (selectedValue4 == 3) {
                selectedValue4 = giaTri3;
            }
            if (selectedValue4 == 4) {
                selectedValue4 = giaTri4;
            }
            if (selectedValue4 == 5) {
                selectedValue4 = giaTri5;
            }
            if (selectedValue4 == 6) {
                selectedValue4 = giaTri6;
            }
            if (selectedValue4 == 7) {
                selectedValue4 = giaTri7;
            }
            if (selectedValue4 == 8) {
                selectedValue4 = giaTri8
            }
            if (selectedValue4 == 9) {
                selectedValue4 = giaTri9;
            }
            if (selectedValue4 == 10) {
                selectedValue4 = giaTri10;
            }
            if (selectedValue4 == 11) {
                selectedValue4 = giaTri11;
            }
            if (selectedValue4 == 12) {
                selectedValue4 = giaTri12;
            }
            // console.log(typeof selectedValue4);
            
            var selectedValue5 = document.getElementById("lc5").value;
            if (selectedValue5 == 1) {
                selectedValue5 = giaTri1;
            }
            if (selectedValue5 == 2) {
                selectedValue5 = giaTri2;
            }
            if (selectedValue5 == 3) {
                selectedValue5 = giaTri3;
            }
            if (selectedValue5 == 4) {
                selectedValue5 = giaTri4;
            }
            if (selectedValue5 == 5) {
                selectedValue5 = giaTri5;
            }
            if (selectedValue5 == 6) {
                selectedValue5 = giaTri6;
            }
            if (selectedValue5 == 7) {
                selectedValue5 = giaTri7;
            }
            if (selectedValue5 == 8) {
                selectedValue5 = giaTri8;
            }
            if (selectedValue5 == 9) {
                selectedValue5 = giaTri9;
            }
            if (selectedValue5 == 10) {
                selectedValue5 = giaTri10;
            }
            if (selectedValue5 == 11) {
                selectedValue5 = giaTri11;
            }
            if (selectedValue5 == 12) {
                selectedValue5 = giaTri12;
            }
            // console.log(selectedValue5);
            
            var selectedValue6 = document.getElementById("lc6").value;
            if (selectedValue6 == 1) {
                selectedValue6 = giaTri1;
            }
            if (selectedValue6 == 2) {
                selectedValue6 = giaTri2;
            }
            if (selectedValue6 == 3) {
                selectedValue6 = giaTri3;
            }
            if (selectedValue6 == 4) {
                selectedValue6 = giaTri4;
            }
            if (selectedValue6 == 5) {
                selectedValue6 = giaTri5;
            }
            if (selectedValue6 == 6) {
                selectedValue6 = giaTri6;
            }
            if (selectedValue6 == 7) {
                selectedValue6 = giaTri7;
            }
            if (selectedValue6 == 8) {
                selectedValue6 = giaTri8;
            }
            if (selectedValue6 == 9) {
                selectedValue6 = giaTri9;
            }
            if (selectedValue6 == 10) {
                selectedValue6 = giaTri10;
            }
            if (selectedValue6 == 11) {
                selectedValue6 = giaTri11;
            }
            if (selectedValue6 == 12) {
                selectedValue6 = giaTri12;
            }
            // console.log(selectedValue6);
            
            var selectedValue7 = document.getElementById("lc7").value;
            if (selectedValue7 == 1) {
                selectedValue7 = giaTri1;
            }
            if (selectedValue7 == 2) {
                selectedValue7 = giaTri2;
            }
            if (selectedValue7 == 3) {
                selectedValue7 = giaTri3;
            }
            if (selectedValue7 == 4) {
                selectedValue7 = giaTri4;
            }
            if (selectedValue7 == 5) {
                selectedValue7 = giaTri5;
            }
            if (selectedValue7 == 6) {
                selectedValue7 = giaTri6;
            }
            if (selectedValue7 == 7) {
                selectedValue7 = giaTri7;
            }
            if (selectedValue7 == 8) {
                selectedValue7 = giaTri8;
            }
            if (selectedValue7 == 9) {
                selectedValue7 = giaTri9;
            }
            if (selectedValue7 == 10) {
                selectedValue7 = giaTri10;
            }
            if (selectedValue7 == 11) {
                selectedValue7 = giaTri11;
            }
            if (selectedValue7 == 12) {
                selectedValue7 = giaTri12;
            }
            // console.log(selectedValue7);
            
            var selectedValue8 = document.getElementById("lc8").value;
            if (selectedValue8 == 1) {
                selectedValue8 = giaTri1;
            }
            if (selectedValue8 == 2) {
                selectedValue8 = giaTri2;
            }
            if (selectedValue8 == 3) {
                selectedValue8 = giaTri3;
            }
            if (selectedValue8 == 4) {
                selectedValue8 = giaTri4;
            }
            if (selectedValue8 == 5) {
                selectedValue8 = giaTri5;
            }
            if (selectedValue8 == 6) {
                selectedValue8 = giaTri6;
            }
            if (selectedValue8 == 7) {
                selectedValue8 = giaTri7;
            }
            if (selectedValue8 == 8) {
                selectedValue8 = giaTri8;
            }
            if (selectedValue8 == 9) {
                selectedValue8 = giaTri9;
            }
            if (selectedValue8 == 10) {
                selectedValue8 = giaTri10;
            }
            if (selectedValue8 == 11) {
                selectedValue8 = giaTri11;
            }
            if (selectedValue8 == 12) {
                selectedValue8 = giaTri12;
            }
            // console.log(selectedValue8);
            
            var selectedValue9 = document.getElementById("lc9").value;
            if (selectedValue9 == 1) {
                selectedValue9 = giaTri1;
            }
            if (selectedValue9 == 2) {
                selectedValue9 = giaTri2;
            }
            if (selectedValue9 == 3) {
                selectedValue9 = giaTri3;
            }
            if (selectedValue9 == 4) {
                selectedValue9 = giaTri4;
            }
            if (selectedValue9 == 5) {
                selectedValue9 = giaTri5;
            }
            if (selectedValue9 == 6) {
                selectedValue9 = giaTri6;
            }
            if (selectedValue9 == 7) {
                selectedValue9 = giaTri7;
            }
            if (selectedValue9 == 8) {
                selectedValue9 = giaTri8;
            }
            if (selectedValue9 == 9) {
                selectedValue9 = giaTri9;
            }
            if (selectedValue9 == 10) {
                selectedValue9 = giaTri10;
            }
            if (selectedValue9 == 11) {
                selectedValue9 = giaTri11;
            }
            if (selectedValue9 == 12) {
                selectedValue9 = giaTri12;
            }
            // console.log(selectedValue9);
            
            var selectedValue10 = document.getElementById("lc10").value;
            if (selectedValue10 == 1) {
                selectedValue10 = giaTri1;
            }
            if (selectedValue10 == 2) {
                selectedValue10 = giaTri2;
            }
            if (selectedValue10 == 3) {
                selectedValue10 = giaTri3;
            }
            if (selectedValue10 == 4) {
                selectedValue10 = giaTri4;
            }
            if (selectedValue10 == 5) {
                selectedValue10 = giaTri5;
            }
            if (selectedValue10 == 6) {
                selectedValue10 = giaTri6;
            }
            if (selectedValue10 == 7) {
                selectedValue10 = giaTri7;
            }
            if (selectedValue10 == 8) {
                selectedValue10 = giaTri8;
            }
            if (selectedValue10 == 9) {
                selectedValue10 = giaTri9;
            }
            if (selectedValue10 == 10) {
                selectedValue10 = giaTri10;
            }
            if (selectedValue10 == 11) {
                selectedValue10 = giaTri11;
            }
            if (selectedValue10 == 12) {
                selectedValue10 = giaTri12;
            }
            // console.log(selectedValue10);

            var selectedValue11 = document.getElementById("lc11").value;
            if (selectedValue11 == 1) {
                selectedValue11 = giaTri1;
            }
            if (selectedValue11 == 2) {
                selectedValue11 = giaTri2;
            }
            if (selectedValue11 == 3) {
                selectedValue11 = giaTri3;
            }
            if (selectedValue11 == 4) {
                selectedValue11 = giaTri4;
            }
            if (selectedValue11 == 5) {
                selectedValue11 = giaTri5;
            }
            if (selectedValue11 == 6) {
                selectedValue11 = giaTri6;
            }
            if (selectedValue11 == 7) {
                selectedValue11 = giaTri7;
            }
            if (selectedValue11 == 8) {
                selectedValue11 = giaTri8;
            }
            if (selectedValue11 == 9) {
                selectedValue11 = giaTri9;
            }
            if (selectedValue11 == 10) {
                selectedValue11 = giaTri10;
            }
            if (selectedValue11 == 11) {
                selectedValue11 = giaTri11;
            }
            if (selectedValue11 == 12) {
                selectedValue11 = giaTri12;
            }
            // console.log(selectedValue11);

            var selectedValue12 = document.getElementById("lc12").value;
            if (selectedValue12 == 1) {
                selectedValue12 = giaTri1;
            }
            if (selectedValue12 == 2) {
                selectedValue12 = giaTri2;
            }
            if (selectedValue12 == 3) {
                selectedValue12 = giaTri3;
            }
            if (selectedValue12 == 4) {
                selectedValue12 = giaTri4;
            }
            if (selectedValue12 == 5) {
                selectedValue12 = giaTri5;
            }
            if (selectedValue12 == 6) {
                selectedValue12 = giaTri6;
            }
            if (selectedValue12 == 7) {
                selectedValue12 = giaTri7;
            }
            if (selectedValue12 == 8) {
                selectedValue12 = giaTri8;
            }
            if (selectedValue12 == 9) {
                selectedValue12 = giaTri9;
            }
            if (selectedValue12 == 10) {
                selectedValue12 = giaTri10;
            }
            if (selectedValue12 == 11) {
                selectedValue12 = giaTri11;
            }
            if (selectedValue12 == 12) {
                selectedValue12 = giaTri12;
            }
            // console.log(selectedValue12);
        
        var idCode =  `${selectedValue1}${selectedValue2}${selectedValue3}${selectedValue4}${selectedValue5}${selectedValue6}${selectedValue7}${selectedValue8}${selectedValue9}${selectedValue10}${selectedValue11}${selectedValue12}`;
        // console.log(idCode);
        return idCode;
        // document.write(idCode);

    }

// COPY CODE
function copyCode(htmlElement) {
    if (!htmlElement) {
        return; 
    }

    let elementText = p.innerText;
    
    let inputElement = document.createElement('input');
    inputElement.setAttribute

}

// CREATE FILE TXT FOR ID 

// const generateBtn = document.querySelector(".generateBtn");

// generateBtn.addEventListener("click", generateRandomNum);

// function generateRandomNum () {
//     const ranNum = document.querySelector(".random")
//     console.log(ranNum)
// }

// FIX GETSELECTED VALUE!!!
// exchange the label on HTML script 
// ex: random lower character -> day; random number -> month; 