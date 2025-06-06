function mushPopup() {
            document.getElementById("popup").classList.add("show");
            document.getElementById("overlay").classList.add("show");
        }      

        function shellPopup() {
            document.getElementById("shells-popup").classList.add("show");
            document.getElementById("overlay").classList.add("show");
        }

        function trashPopup() {
            document.getElementById("trash-popup").classList.add("show");
            document.getElementById("overlay").classList.add("show");
        }

        // Close popup functions
        function closePopup() {
            document.getElementById("popup").classList.remove("show");
            document.getElementById("overlay").classList.remove("show");
            document.getElementById("output").innerHTML = "Output will appear here";
        }

        function closeShellsPopup() {
            document.getElementById("shells-popup").classList.remove("show");
            document.getElementById("overlay").classList.remove("show");
            document.getElementById("output1").innerHTML = "Output will appear here";
            document.getElementById("output2").innerHTML = "Output will appear here";
        }

        function closeTrashPopup() {
            document.getElementById("trash-popup").classList.remove("show");
            document.getElementById("overlay").classList.remove("show");
            document.getElementById("output3").innerHTML = "Output will appear here";
            document.getElementById("output4").innerHTML = "Output will appear here";
        }

        // Calculation functions
        function aeroCalcu() {
            const aero = parseFloat(document.getElementById("aero").value);
            const aeroRatio = parseFloat(document.getElementById("aRatio").value);
            
            if (isNaN(aero) || isNaN(aeroRatio)) {
                document.getElementById("output1").innerHTML = "Please enter valid numbers";
            } else {
                const aeroG = (aero * 3) / aeroRatio;
                document.getElementById("output1").innerHTML = `Total: ${aeroG.toFixed(2)}`;
            }
        }

        function calcu() {
            const mush = parseFloat(document.getElementById("mush").value);
            const purple = parseFloat(document.getElementById("purple").value);
            const red = parseFloat(document.getElementById("red").value);
            const yellow = parseFloat(document.getElementById("yellow").value);
            const ratio = parseFloat(document.getElementById("ratio").value);
            
            if (isNaN(mush) || isNaN(purple) || isNaN(red) || isNaN(yellow) || isNaN(ratio)) {
                document.getElementById("output").innerHTML = "Please enter valid numbers";
            } else {
                const mushTotal = mush + purple + red + yellow;
                const total = (mushTotal * 5) / ratio;
                document.getElementById("output").innerHTML = `Total: ${total.toFixed(2)}`;
            }
        }
       
        function sandscalCalcu() {
            const sands = parseFloat(document.getElementById("sands").value);
            const scals = parseFloat(document.getElementById("scals").value);
            const sandscalRatio = parseFloat(document.getElementById("sRatio").value);
            
            if (isNaN(sands) || isNaN(scals) || isNaN(sandscalRatio)) {
                document.getElementById("output2").innerHTML = "Please enter valid numbers";
            } else {
                const ssTotal = sands + scals;
                const sandscalG = (ssTotal * 5) / sandscalRatio;
                document.getElementById("output2").innerHTML = `Total: ${sandscalG.toFixed(2)}`;
            }
        }

        function bottleCalcu() {
            const bottle = parseFloat(document.getElementById("bottle").value);
            const bottleRatio = parseFloat(document.getElementById("bRatio").value);
            
            if (isNaN(bottle) || isNaN(bottleRatio)) {
                document.getElementById("output3").innerHTML = "Please enter valid numbers";
            } else {
                const bottleG = (bottle * 4) / bottleRatio;
                document.getElementById("output3").innerHTML = `Total: ${bottleG.toFixed(2)}`;
            }
        }

        function paperCalcu() {
            const paper = parseFloat(document.getElementById("paper").value);
            const newspaper = parseFloat(document.getElementById("newspaper").value);
            const paperRatio = parseFloat(document.getElementById("pRatio").value);
            
            if (isNaN(paper) || isNaN(newspaper) || isNaN(paperRatio)) {
                document.getElementById("output4").innerHTML = "Please enter valid numbers";
            } else {
                const paperTotal = paper + newspaper;
                const paperG = (paperTotal * 4) / paperRatio;
                document.getElementById("output4").innerHTML = `Total: ${paperG.toFixed(2)}`;
            }
        }

        // Close popups when clicking on overlay
        document.getElementById("overlay").addEventListener("click", function() {
            closePopup();
            closeShellsPopup();
            closeTrashPopup();
        });