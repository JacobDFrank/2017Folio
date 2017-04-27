//answers for the end of each tree
var starters = [
    "Choose a notebook form factor", "Standard", "Ring"
];

var end = {
    "StandardSmooth (Standard)Good (Smooth & Standard)A5": {
        "text": "Apica CD A5"
    },
    "StandardSmooth (Standard)Good (Smooth & Standard)B5": {
        "text": "Apica CD B5"
    },
    "StandardSmooth (Standard)Good (Smooth & Standard)A4": {
        "text": "Apica CD A4"
    },

    "StandardSmooth (Standard)Moderate (Smooth & Standard)A5": {
        "text": "Life Noble A5"
    },
    "StandardSmooth (Standard)Moderate (Smooth & Standard)A4": {
        "text": "Life Noble A4"
    },


    "StandardSuper Smooth (Standard)Good (Super & Standard)Staplebound": {
        "text": "Clairefontaine Collection 1951 Staplebound"
    },
    "StandardSuper Smooth (Standard)Good (Super & Standard)Clothbound": {
        "text": "Clairefontaine Collection 1951 Clothbound"
    },
    "StandardSuper Smooth (Standard)Moderate (Super & Standard)A5": {
        "text": "Kokuyo Campus High Grade MIO A5"
    },
    "StandardSuper Smooth (Standard)Moderate (Super & Standard)B5": {
        "text": "Kokuyo Campus High Grade MIO B5"
    },


    "StandardSlight Tooth (Standard)Good (Slight & Standard)A5": {
        "text": "Tsunami Fools A5"
    },
    "StandardSlight Tooth (Standard)Good (Slight & Standard)B5": {
        "text": "Tsunami Fools B5"
    },
    "StandardSlight Tooth (Standard)Poor (Slight & Standard)A5": {
        "text": "Midori MD A5"
    },
    "StandardSlight Tooth (Standard)Poor (Slight & Standard)Pocket": {
        "text": "Midori MD Pocket"
    },


    "RingSmooth (Ring)Good (Smooth & Ring)A5": {
        "text": "Maruman Mnemosyne A5"
    },
    "RingSmooth (Ring)Good (Smooth & Ring)A4": {
        "text": "Maruman Mnemosyne A4"
    },
    "RingSmooth (Ring)Good (Smooth & Ring)B5": {
        "text": "Maruman Eco Spiral B5"
    },
    "RingSmooth (Ring)Moderate (Smooth & Ring)A4": {
        "text": "Maruman Sept Couleur A4"
    },
    "RingSmooth (Ring)Moderate (Smooth & Ring)A5": {
        "text": "Maruman Sept Couleur A5"
    },
    "RingSmooth (Ring)Moderate (Smooth & Ring)B7": {
        "text": "Maruman Sept Couleur B7"
    },


    "RingSuper Smooth (Ring)Good (Super & Ring)A5": {
        "text": "Kokuyo Campus Smart Ring A5"
    },
    "RingSuper Smooth (Ring)Good (Super & Ring)B5": {
        "text": "Kokuyo Campus Smart Ring B5"
    },
    "RingSuper Smooth (Ring)Moderate (Super & Ring)A5": {
        "text": "Kokuyo Campus Twin Ring A5"
    },
    "RingSuper Smooth (Ring)Moderate (Super & Ring)B5": {
        "text": "Kokuyo Campus Twin Ring B5"
    },



    "RingSlight Tooth (Ring)Good (Slight & Ring)Blank": {
        "text": "Apica Blank Cover A5"
    },
    "RingSlight Tooth (Ring)Good (Slight & Ring)Graph": {
        "text": "Apica Graph Cover A5"
    },
    "RingSlight Tooth (Ring)Good (Slight & Ring)Lined": {
        "text": "Apica Lined Cover A5"
    },
    "RingSlight Tooth (Ring)Good (Slight & Ring)B5": {
        "text": "Apica Wizard B5"
    },
    "RingSlight Tooth (Ring)Good (Slight & Ring)CD15": {
        "text": "Apica Wizard CD15"
    },

};

function go(dom) {
    modernBrowser();
    checkStorage();

    var optionNode = document.createElement("div"); // Create a <li> node
    optionNode.className = "options";
    document.getElementById("content").appendChild(optionNode);

    var selectMenuNode = document.createElement("div"); // Create a <li> node
    selectMenuNode.id = "selectMenu";
    document.getElementById("content").appendChild(selectMenuNode);





    if (dom == 'init') {
        var hold = data[dom];
    } else {
        var hold = data[dom.value];
        //removes old choices
        while (dom != dom.parentNode.lastChild) {
            dom.parentNode.removeChild(dom.parentNode.lastChild);
        }
    }

    //dom is a reference to the select that was last selected

    if (hold != undefined) {

        //build my select
        //var selEle is now holding <select id="mySelect"></select>
        var selEle = document.createElement('select');
        selEle.setAttribute('style', 'display: block;position:relative;left:0px;');
        //var selEle is now holding <select></select>

        //first, put on any attributes...
        selEle.setAttribute('id', hold[0]);

        //makes onchange work for IE7
        //selEle.setAttribute('onchange','go(this)');
        if (usingIE) {
            selEle.setAttribute('onchange', function() {
                go(this);
            }); //IE 7
        } else {
            selEle.setAttribute('onchange', 'go(this)');
        }


        for (i = 0; i < hold.length; i++) {
            //build an option
            var option = document.createElement('option');

            //give it attributes
            option.setAttribute('value', hold[i]);

            //put text inside of option
            option.appendChild(document.createTextNode(hold[i]));

            //put the option inside of the select
            selEle.appendChild(option);
        }


        // appending a select to a page
        selEle.className = 'selectmenu';
        var select = document.getElementById('results').appendChild(selEle);
        document.getElementById('selectMenu').appendChild(select);
        //which select to tell to move?
        //last one
        var x = document.getElementsByTagName('select').length;
        slide(document.getElementsByTagName('select')[x - 1]);
        //slide(hold[0]);
        // select.setAttribute('id', 'selectmenu');


    } else {
        //get all of the selects values
        var allSel = document.getElementsByTagName('select');
        //for loop
        var last = '';

        for (var i = 0; i < allSel.length; i++) {
            last += allSel[i].value;
            console.log(last);
        }
        //returns
        var details = end[last]["text"];
        // var details;
        // console.log(details);
        // if (details == 'empty') {
        // details = end[last]["text"]
        // console.log("doesn't work");
        // }


        // if local a browser supports local storage
        if (usingIE) {
            SetCookie('details', details); // sets cookies if local storage is not supported by a browser
            console.log("set cookie");
        } else {
            localStorage.setItem('details', details); //puts details to local storage
            console.log("local");
            var detailsHTML = document.getElementById('detailsContent');
            detailsHTML.removeChild(detailsHTML.firstChild);
            detailsHTML.appendChild(document.createTextNode(details));
        }

        if (detailsHTML !== null) {
            var detailsHTML = document.getElementById('detailsContent');
            detailsHTML.removeChild(detailsHTML.firstChild);
            detailsHTML.appendChild(document.createTextNode(details));
        } else {
            var detailsHTML = document.getElementById('detailsContent');
        }


        var value = document.getElementsByTagName('select');
        var results = ' ';
        for (i = 0; i < value.length; i++) {
            results = results + ' ' + value[i].value;
        }

        document.getElementById('results2').style.display = "flex";

        document.getElementById('results3').style.display = "flex";

        document.getElementById('styleChoices').style.display = "flex";

        document.getElementById('resultsChoices').style.display = "flex";

        document.getElementById('formTitleContainer').style.display = "flex";

        var results2 = document.getElementById('results2').appendChild(document.createTextNode(results));
        document.getElementById('choices').appendChild(results2);

        document.getElementById("form2").style.display = "flex";
    }

}

//checks a local storage
function checkStorage() {
    var detailsHTML = document.getElementById('detailsContent');
    if (usingIE) {
        //turn on resultsChoices
        var details = GetCookie('details');
        if (details == null) {
            console.log("Is IE, not using local storage");
        } else {
            detailsHTML.appendChild(document.createTextNode(details));
            if (detailsHTML.childNodes.length > 1) {
                detailsHTML.removeChild(detailsHTML.childNodes[0]);
            }
            console.log("Is IE, using local storage");
            var detailsHTML = document.getElementById('detailsContent');
        }
    } else {
        var details = localStorage.getItem('details', details);
        if (details == null) {
            console.log("Not IE, not local storage");
        } else {
            detailsHTML.appendChild(document.createTextNode(details));
            if (detailsHTML.childNodes.length > 1) {
                detailsHTML.removeChild(detailsHTML.childNodes[0]);
            }
            console.log("Not IE, using local storage");
            var detailsHTML = document.getElementById('detailsContent');
        }
    }

}

//redirects to a modern browser
function modernBrowser() {
    if (!document.getElementById) {
        alert('You have an outdated browser, please update to google chrome');
        window.location = "https://www.google.com/chrome/";
    } else {
        return;
    }
}


function clearReset() {
    document.getElementById("errorName").style.display = "none";
    document.getElementById("errorEmail").style.display = "none";

}
// slider function - DHTML
function slide(dom) {
    //var dom=document.getElementById(id);
    if (parseInt(dom.style.left) < 20) {
        dom.style.left = parseInt(dom.style.left) + 8 + 'px';
        //this calls the function slide(id) in 20 milliseconds
        setTimeout(function() {
            slide(dom);
        }, 20);
    }
}
//function that validates form2
function ValidateForm() {
    var name = document.form2.name;
    var email = document.form2.email;
    var comment = document.form2.comments;
    var valueForm = true;

    if (name.value == "") {
        document.getElementById("errorName").style.display = "flex";
        name.focus();
        valueForm = false;
    } else {
        document.getElementById("errorName").style.display = "none";
    }

    if (email.value == "") {
        document.getElementById("errorEmail").style.display = "";
        email.focus();
        valueForm = false;
    } else {
        document.getElementById("errorEmail").style.display = "none";
    }

    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById("errorEmail").style.display = "";
        email.focus();
        valueForm = false;
    } else {
        document.getElementById("errorEmail").style.display = "none";
    }


    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById("errorEmail").style.display = "";
        email.focus();
        valueForm = false;
    } else {
        document.getElementById("errorEmail").style.display = "none";
    }
    return valueForm;
}
