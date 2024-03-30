/* Open popup */
        function mushPopup() {
            var popup = document.getElementById("popup");
            popup.classList.add("show");
        }      

        function shellPopup() {
            var popup = document.getElementById("shells-popup");
            popup.classList.add("show");
        }

        function trashPopup() {
            var popup = document.getElementById("trash-popup");
            popup.classList.add("show");
        }

        /* Close popup and reseting the user inputs and outputs*/

        function closePopup() {
            var popup = document.getElementById("popup");
            popup.classList.remove("show");

            const amount = parseFloat(document.getElementById("mush").value = "");
            const purple = parseFloat(document.getElementById("purple").value= "");
            const red = parseFloat(document.getElementById("red").value= "");
            const yellow = parseFloat(document.getElementById("yellow").value= "");
            const ratio = parseFloat(document.getElementById("ratio").value = "");
            document.getElementById("output").innerHTML = "Output will appear here.";
        }

        function closeShellsPopup() {
            var popup = document.getElementById("shells-popup");
            popup.classList.remove("show");

            const aero = parseFloat(document.getElementById("aero").value = "");
            const aRatio = parseFloat(document.getElementById("aRatio").value= "");
            const sands = parseFloat(document.getElementById("sands").value= "");
            const scals = parseFloat(document.getElementById("scals").value= "");
            const sRatio = parseFloat(document.getElementById("sRatio").value = "");
            document.getElementById("output1").innerHTML = "Output will appear here.";
            document.getElementById("output2").innerHTML = "Output will appear here.";
        }

        function closeTrashPopup() {
            var popup = document.getElementById("trash-popup");
            popup.classList.remove("show");

            const aero = parseFloat(document.getElementById("bottle").value = "");
            const aRatio = parseFloat(document.getElementById("bRatio").value= "");
            const sands = parseFloat(document.getElementById("paper").value= "");
            const scals = parseFloat(document.getElementById("newspaper").value= "");
            const sRatio = parseFloat(document.getElementById("pRatio").value = "");
            document.getElementById("output3").innerHTML = "Output will appear here.";
            document.getElementById("output4").innerHTML = "Output will appear here.";
        }

/* Ratio Calculator */
        function aeroCalcu() {
            if (isNaN(aero)|| isNaN(aRatio)) {
                document.getElementById("output1").innerHTML = "Please enter valid values";
            } else {
            const aero = parseFloat(document.getElementById("aero").value);
            const aeroRatio = parseFloat(document.getElementById("aRatio").value);
            const aeroG = (aero * 3) / aeroRatio;

            document.getElementById("output1").innerHTML = "Total: " + aeroG;
            }
        }

        function calcu() {
            const mush = parseFloat(document.getElementById("mush").value);
            const purple = parseFloat(document.getElementById("purple").value);
            const red = parseFloat(document.getElementById("red").value);
            const yellow = parseFloat(document.getElementById("yellow").value);
            const ratio = parseFloat(document.getElementById("ratio").value);
            
        
            if (isNaN(mush) || isNaN(purple) || isNaN(red) || isNaN(yellow) || isNaN(ratio)) {
                document.getElementById("output").innerHTML = "Please enter valid values.";
            } else {
                const mushTotal = mush + purple + red + yellow;
                const total = (mushTotal * 5) / ratio;
                document.getElementById("output").innerHTML = "Total: " + total;
            }
        }
       
        function sandscalCalcu() {

            const sands = parseFloat(document.getElementById("sands").value);
            const scals = parseFloat(document.getElementById("scals").value);
            const sandscalRatio = parseFloat(document.getElementById("sRatio").value);
            const ssTotal = sands + scals;
            const sandscalG = (ssTotal * 5) / sandscalRatio;


            if (isNaN(sands) ||isNaN(scals)||isNaN(sRatio)) {
                document.getElementById("output2").innerHTML = "Please enter valid values";
            } else {      
            document.getElementById("output2").innerHTML = "Total: " + sandscalG;
            }
        }

        function bottleCalcu() {
            const bottle = parseFloat(document.getElementById("bottle").value);
            const bottleRatio = parseFloat(document.getElementById("bRatio").value);
            

            if (isNaN(bottle)|| isNaN(bottleRatio)) {
                document.getElementById("output3").innerHTML = "Please enter valid values";
            } else {

                const bottleG = (bottle * 4) / bottleRatio;
            document.getElementById("output3").innerHTML = "Total: " + bottleG;
            }
        }

        
        function paperCalcu() {
            const paper = parseFloat(document.getElementById("paper").value);
            const newspaper = parseFloat(document.getElementById("newspaper").value);
            const paperRatio = parseFloat(document.getElementById("pRatio").value);
            

            if (isNaN(paper)|| isNaN(paper)|| isNaN(paperRatio)) {
                document.getElementById("output4").innerHTML = "Please enter valid values";
            } else {

                const paperTotal = paper + newspaper;
                const paperG = (paperTotal * 4) / paperRatio;
            document.getElementById("output4").innerHTML = "Total: " + paperG;
            }
        }


    
        

       