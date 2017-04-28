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

var start = true;



function go(dom) {
    modernBrowser();

    var endInfo = document.createElement("div");
    endInfo.id = "endInfo";
    document.getElementById("content").appendChild(endInfo);

    var details = document.createElement("div");
    details.id = "details";
    document.getElementById("endInfo").appendChild(details);

    var detailsContent = document.createElement("div");
    detailsContent.id = "detailsContent";
    document.getElementById("details").appendChild(detailsContent);

    var resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    document.getElementById("content").appendChild(resultsDiv);

    if (start) {
        var selStarters = document.createElement('select');
        selStarters.id = "selectMenu"
        selStarters.className = "q1";
        selStarters.setAttribute('onchange', 'go(this)');
        document.getElementById("content").appendChild(selStarters);
        var firstSelect = document.getElementById("selectMenu");
        console.log(starters.length);
        for (var i = 0; i < starters.length; i++) {
            var opt = starters[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            firstSelect.appendChild(el);
        }
        document.getElementById("content").appendChild(selStarters);



    }
    start = false;

    checkStorage();

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
        selEle.className = 'selectMenu';
        var select = document.getElementById('results').appendChild(selEle);
        document.getElementById('content').appendChild(select);
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



        var results2 = document.createElement("div");
        results2.id = "results2";
        results2.setAttribute('name', 'results2');
        document.getElementById("content").appendChild(results2);

        var results3 = document.createElement("div");
        results3.id = "results3";
        results3.setAttribute('name', 'results3');
        document.getElementById("content").appendChild(results3);

        var choices = document.createElement("div");
        choices.id = "choices";
        document.getElementById("endInfo").appendChild(choices);

        var styleChoices = document.createElement("div");
        styleChoices.id = "styleChoices";
        var styleChoicesText = document.createTextNode("these are your choices");
        document.getElementById("choices").appendChild(styleChoices);
        document.getElementById('styleChoices').appendChild(styleChoicesText);



        var resultsChoices = document.createElement("div");
        resultsChoices.id = "resultsChoices";
        var resultsChoicesText = document.createTextNode("these are your results");
        document.getElementById("details").appendChild(resultsChoices);
        document.getElementById('resultsChoices').appendChild(resultsChoicesText);



        var formTitleContainer = document.createElement("div");
        formTitleContainer.id = "formTitleContainer";
        document.getElementById("endInfo").appendChild(formTitleContainer);

        var contactH3 = document.createElement("H3");
        var contactText = document.createTextNode("Contact Us:");
        contactH3.appendChild(contactText);
        document.getElementById("formTitleContainer").appendChild(contactH3);

        var results2 = document.getElementById('results2').appendChild(document.createTextNode(results));
        document.getElementById('choices').appendChild(results2);


        var form2 = document.createElement("div");
        form2.id = "form2";
        document.getElementById("endInfo").appendChild(form2);

        var form2Form = document.createElement("form");
        form2Form.id = "form2Form";
        form2Form.setAttribute('method', 'post');
        form2Form.setAttribute('action', 'mailto:jdf2114@rit.edu');
        form2Form.setAttribute('name', 'form2');
        form2Form.setAttribute('onsubmit', 'return ValidateForm()');
        document.getElementById("form2").appendChild(form2Form);

        var form2Label = document.createElement("label");
        form2Label.id = "form2Label";
        var form2LabelText = document.createTextNode("Name:");
        form2Label.appendChild(form2LabelText);
        var form2Input = document.createElement("input");
        form2Input.setAttribute("type", "text");
        form2Input.setAttribute("size", "30");
        form2Input.setAttribute("name", "name");
        form2Label.appendChild(form2Input);
        document.getElementById("form2Form").appendChild(form2Label);

        var form2Email = document.createElement("label");
        form2Email.id = "form2Email";
        var form2EmailText = document.createTextNode("Email:");
        form2Email.appendChild(form2EmailText);
        var form2EmailInput = document.createElement("input");
        form2EmailInput.setAttribute("type", "text");
        form2EmailInput.setAttribute("size", "30");
        form2EmailInput.setAttribute("name", "email");
        form2Email.appendChild(form2EmailInput);
        document.getElementById("form2Form").appendChild(form2Email);

        var submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("value", "Send");
        document.getElementById("form2Form").appendChild(submitButton);

        var resetButton = document.createElement("input");
        submitButton.setAttribute("type", "reset");
        submitButton.setAttribute("value", "Reset");
        submitButton.setAttribute("name", "reset");
        submitButton.setAttribute("onclick", "clearReset()");
        document.getElementById("form2Form").appendChild(resetButton);
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
    var form2FormNode = document.getElementById("form2Form");
    var errorNameNode = document.getElementById("errorName");
    var errorEmailNode = document.getElementById("errorEmail");
    form2FormNode.removeChild(errorNameNode);
    form2FormNode.removeChild(errorEmailNode);

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
        var errorName = document.createElement("div");
        errorName.id = "errorName";
        var errorNameText = document.createTextNode("Not a valid name.");
        errorName.appendChild(errorNameText);
        document.getElementById("form2Form").appendChild(errorName);
        name.focus();
        valueForm = false;
    } else {
        var form2FormNode = document.getElementById("form2Form");
        var errorNameNode = document.getElementById("errorName");
        form2FormNode.removeChild(errorNameNode);
    }

    if (email.value == "") {
        var errorEmail = document.createElement("div");
        errorEmail.id = "errorEmail";
        var errorEmailText = document.createTextNode("Not a valid email address.");
        errorName.appendChild(errorEmailText);
        document.getElementById("form2Form").appendChild(errorEmail);
        email.focus();
        valueForm = false;
    } else {
        var form2FormNode = document.getElementById("form2Form");
        var errorEmailNode = document.getElementById("errorEmail");
        form2FormNode.removeChild(errorEmail);
    }

    if (email.value.indexOf("@", 0) < 0) {
        var errorEmail = document.createElement("div");
        errorEmail.id = "errorEmail";
        var errorEmailText = document.createTextNode("Not a valid email address.");
        errorName.appendChild(errorEmailText);
        document.getElementById("form2Form").appendChild(errorEmail);
        email.focus();
        valueForm = false;
    } else {
        var form2FormNode = document.getElementById("form2Form");
        var errorEmailNode = document.getElementById("errorEmail");
        form2FormNode.removeChild(errorEmail);
    }


    if (email.value.indexOf(".", 0) < 0) {
        var errorEmail = document.createElement("div");
        errorEmail.id = "errorEmail";
        var errorEmailText = document.createTextNode("Not a valid email address.");
        errorName.appendChild(errorEmailText);
        document.getElementById("form2Form").appendChild(errorEmail);
        email.focus();
        valueForm = false;
    } else {
        var form2FormNode = document.getElementById("form2Form");
        var errorEmailNode = document.getElementById("errorEmail");
        form2FormNode.removeChild(errorEmail);
    }
    return valueForm;
}
