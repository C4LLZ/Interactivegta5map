var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoom: 1 // Set the initial zoom level
});

var categories = {
    "Container Guy": {
        color: "blue",
        locations: [
            {"id":1728131469823,"lat":"845.906250","lng":"518.000000","name":"1","img":"https://i.ibb.co/9qhspXV/image.png"},
            {"id":1728131526398,"lat":"239.953125","lng":"421.484375","name":"2","img":"https://i.ibb.co/YXy1GvP/image.png"},
            {"id":1728131565702,"lat":"341.156250","lng":"276.843750","name":"3","img":"https://i.ibb.co/6m3wkzy/image.png"},
            {"id":1728131602255,"lat":"438.890625","lng":"682.687500","name":"4","img":"https://i.ibb.co/svBtkT4/image.png"},
            {"id":1728131754653,"lat":"358.656250","lng":"428.281250","name":"5","img":"https://i.ibb.co/QjjsKbW/image.png"},
            {"id":1728131875773,"lat":"297.687500","lng":"466.687500","name":"6","img":"https://i.ibb.co/PczXYpT/image.png"},
            {"id":1728132350441,"lat":"263.875000","lng":"569.687500","name":"7","img":"https://i.ibb.co/r2ywBwp/image.png"},
            {"id":1728132612973,"lat":"74.062500","lng":"479.937500","name":"8","img":"https://i.ibb.co/bFDc9kb/image.png"},
            {"id":1728132713084,"lat":"548.843750","lng":"473.343750","name":"9","img":"https://i.ibb.co/Jz2RFD2/image.png"},
            {"id":1728149865235,"lat":"571.218750","lng":"647.000000","name":"Container Guy","img":"https://i.ibb.co/ChRhDvH/image.png"},
        ]
    },
    "Money Cleaning": {
        color: "Green",
        locations: [
            {"id":1735002891185,"lat":"188.750000","lng":"532.687500","name":"CARGO","img":"https://i.ibb.co/stKp09q/image.png"},
            {"id":1728149655732,"lat":"682.687500","lng":"765.562500","name":"Stripper Run","img":"https://i.ibb.co/h21Wcrh/image.png"},
        ]
    },
    "Chop": {
        color: "Gray",
        locations: [
            {"id":1728133055654,"lat":"545.625000","lng":"373.312500","name":"Chop Guy","img":"https://i.ibb.co/NnBHCMQ/b5934b71f0830398a50e17b1a147668f.png"},
            {"id":1728133119599,"lat":"370.875000","lng":"296.125000","name":"Chop Sell","img":"https://i.ibb.co/MRTV4P1/906c66619241488049d32f3c70800de1.png"}
        ]
    },
    "Digital Den": {
        color: "Purple",
        locations: [
            {"id":1728136841502,"lat":"350.281250","lng":"417.906250","name":"Digital Den","img":"https://i.ibb.co/N78SgHH/image.png"},
            {"id":1728140150922,"lat":"287.843750","lng":"548.968750","name":"Digital Den","img":"https://i.ibb.co/M5MJTLv/image.png"},
            {"id":1728140212133,"lat":"299.765625","lng":"548.203125","name":"Digital Den","img":"https://i.ibb.co/09rwtK9/image.png"},
            {"id":1728140358599,"lat":"299.843750","lng":"348.093750","name":"Digital Den","img":"https://i.ibb.co/R7GQDfL/image.png"},
            {"id":1728140629493,"lat":"254.500000","lng":"489.375000","name":"Digital Den","img":"https://i.ibb.co/mccB2Lx/image.png"}
        ]
    },
    "Trap Houses": {
        color: "Black",
        locations: [
            {"id":1728139682314,"lat":"164.656250","lng":"475.187500","name":"Trap House","img":"https://i.ibb.co/PMw9JFd/image.png"},
            {"id":1728139825785,"lat":"182.906250","lng":"559.687500","name":"Trap house","img":"https://i.ibb.co/svG67x3/image.png"},
            {"id":1728144794117,"lat":"823.812500","lng":"434.562500","name":"Trap House","img":"https://i.ibb.co/vVrxVR8/image.png"},
            {"id":1728147837777,"lat":"639.281250","lng":"611.093750","name":"Sandy Traphouse","img":"https://i.ibb.co/vzjywMZ/image.png"},
            {"id":1730374264181,"lat":"192.250000","lng":"469.968750","name":"Traphouse","img":"https://i.ibb.co/zrLz27Q/4ef99f0c5f8a1584256cf052a7cd0df4.png"}
        ]
    },
    "Misc": {
        color: "#f0b4ec",
        locations: [
            {"id":1728139997572,"lat":"324.812500","lng":"592.375000","name":"Grandmas","img":"https://i.ibb.co/rQ0TWyC/image.png"},
            {"id":1728142671618,"lat":"79.281250","lng":"507.062500","name":"House Sell Guy","img":"https://i.ibb.co/Pxt596z/image.png"},
            {"id":1728149158602,"lat":"821.500000","lng":"230.000000","name":"Oil Rig","img":"https://i.ibb.co/RhJWBV8/image.png"},
            {"id":1728151081924,"lat":"249.031250","lng":"515.375000","name":"Big Pawn","img":"https://i.ibb.co/hmH4r5J/image.png"},
            {"id":1728151149593,"lat":"248.015625","lng":"515.375000","name":"Crypto Heist HDD","img":"https://i.ibb.co/c67Chkq/image.png"},
            {"id":1728151300347,"lat":"192.593750","lng":"419.898438","name":"Small Pawn","img":"https://i.ibb.co/McG2wgw/image.png"}
        ]
    },
    "Tradeables": {
        color: "#e0daba",
        locations: [
            {"id":1728148874962,"lat":"756.023438","lng":"411.070313","name":"Hatchet Dude","img":"https://i.ibb.co/cX92ZV1/image.png"},
            {"id":1728149302309,"lat":"669.250000","lng":"281.000000","name":"Pool Cue Guy","img":"https://i.ibb.co/3r2ThBP/image.png"}
        ]
    },
    "Jailbreak": {
        color:"#ebe834",
        locations: [
            {"id":1728151634909,"lat":"444.812500","lng":"656.187500","name":"Jailbreak Thermite","img":"https://i.ibb.co/6yMLyLx/image.png"},
            {"id":1728151788362,"lat":"463.250000","lng":"643.500000","name":"Jailbreak Thermite","img":"https://i.ibb.co/xLT7T1W/image.png"},
            {"id":1728151856468,"lat":"481.500000","lng":"630.750000","name":"Jailbreak Thermite","img":"https://i.ibb.co/F8DWBB8/image.png"},
            {"id":1728151937165,"lat":"507.000000","lng":"627.750000","name":"Jailbreak Thermite","img":"https://i.ibb.co/3fQDnk1/image.png"},
            {"id":1728152062514,"lat":"734.062500","lng":"665.968750","name":"Jailbreak Thermite","img":"https://i.ibb.co/ZzbP092/image.png"}
        ]
    },
    "Meth Labs": {
        color: "Cyan",
        locations: [
            {"id":1728147262215,"lat":"593.250000","lng":"648.750000","name":"Meth Lab","img":"https://i.ibb.co/JQt4Fj2/image.png"},
            {"id":1728147375815,"lat":"574.375000","lng":"501.281250","name":"Meth Lab","img":"https://i.ibb.co/tP65zqJ/image.png"},
            {"id":1728147460567,"lat":"580.843750","lng":"477.843750","name":"Meth Lab","img":"https://i.ibb.co/Z1Lf3GP/image.png"},
            {"id":1728147589485,"lat":"597.718750","lng":"483.281250","name":"Meth Lab","img":" https://i.ibb.co/JBp9JH1/image.png"},
            {"id":1728147693872,"lat":"629.671875","lng":"588.671875","name":"Meth Lab","img":"https://i.ibb.co/cQTqhgF/image.png"},
            {"id":1728147938869,"lat":"651.718750","lng":"655.562500","name":"Meth Lab","img":"https://i.ibb.co/tL30X9T/image.png"},
            {"id":1728148050556,"lat":"725.656250","lng":"660.468750","name":"Meth Lab","img":"https://i.ibb.co/fNVtbyj/image.png"},
            {"id":1728148124344,"lat":"719.343750","lng":"646.390625","name":"Meth Lab","img":"https://i.ibb.co/866YmVn/image.png"},
            {"id":1728148255693,"lat":"835.812500","lng":"581.281250","name":"Meth Lab","img":"https://i.ibb.co/XCCQHLb/image.png"},
            {"id":1728148560433,"lat":"852.750000","lng":"442.312500","name":"Meth Lab","img":"https://i.ibb.co/Mh7nBB7/image.png"}
        ]
    },
    "Acetone": {
        color: "Orange",
        locations: [
            {"id":1728133364403,"lat":"190.390625","lng":"584.515625","name":"Acetone","img":"https://i.ibb.co/dBxrcxL/image.png"},
            {"id":1728133466405,"lat":"186.250000","lng":"587.546875","name":"Acetone","img":"https://i.ibb.co/tMtvYRZ/image.png"},
            {"id":1728133484415,"lat":"187.562500","lng":"587.875000","name":"Acetone","img":"https://i.ibb.co/b3Rm255/image.png"},
            {"id":1728133609064,"lat":"106.046875","lng":"462.187500","name":"Acetone","img":"https://i.ibb.co/SvTGgKw/image.png"},
            {"id":1728133631190,"lat":"105.890625","lng":"462.171875","name":"Acetone","img":"https://i.ibb.co/Fhb8WP7/image.png"},
            {"id":1728133660342,"lat":"106.917969","lng":"460.089844","name":"Acetone","img":"https://i.ibb.co/r23FnJH/image.png"},
            {"id":1728134038163,"lat":"557.500000","lng":"485.343750","name":"Acetone","img":"https://i.ibb.co/ZMLS6MJ/image.png"},
            {"id":1728134075335,"lat":"557.968750","lng":"485.187500","name":"Acetone","img":"ttps://i.ibb.co/9nc9t1B/image.png"},
            {"id":1728134119523,"lat":"556.437500","lng":"479.750000","name":"Acetone","img":"https://i.ibb.co/zRw75CM/image.png"},
            {"id":1728154331986,"lat":"131.476563","lng":"869.593750","name":"Acetone","img":"https://i.ibb.co/WGbJNWF/image.png"},
            {"id":1728154375624,"lat":"132.078125","lng":"869.156250","name":"Acetone","img":"https://i.ibb.co/VHmb9vL/image.png"},
            {"id":1728154411524,"lat":"136.906250","lng":"866.843750","name":"Acetone","img":"https://i.ibb.co/Z87m2N0/image.png"},
            {"id":1728154824353,"lat":"218.359375","lng":"896.265625","name":"Acetone","img":"https://i.ibb.co/zHk6HLy/image.png"},
            {"id":1728154854878,"lat":"218.875000","lng":"895.890625","name":"Acetone","img":"https://i.ibb.co/HNJfJHx/image.png"}
        ]
    },
    "Coke Stuff": {
        color:"#cccbc8",
        locations: [
            {"id":1728154153969,"lat":"142.500000","lng":"905.218750","name":"Coke Lab","img":"https://i.ibb.co/tqr8vPq/image.png"},
            {"id":1728154645804,"lat":"216.828125","lng":"898.578125","name":"Fuel","img":"https://i.ibb.co/7yyJZgQ/image.png"},
            {"id":1728154699904,"lat":"215.578125","lng":"898.796875","name":"Fuel","img":"https://i.ibb.co/vPd45q3/image.png"},
            {"id":1728154920498,"lat":"214.140625","lng":"897.453125","name":"Fuel","img":"https://i.ibb.co/cwt7m6J/image.png"},
            {"id":1728155436015,"lat":"76.312500","lng":"932.125000","name":"Leaves Field","img":"https://i.ibb.co/ZX5WWRp/image.png"}
        ]
    },
    "Opium Stuff": {
        color:"#574b27",
        locations: [
            {"id":1728154472558,"lat":"136.656250","lng":"885.250000","name":"Opium Bench","img":"https://i.ibb.co/d0BYRBx/image.png"}
        ]
    },
    
};


var bounds = [[0, 0], [1000, 1000]];
L.imageOverlay('Gta5MapCayo.png', bounds).addTo(map);
map.fitBounds(bounds);

loadCategories();

function loadCategories() {
    var locationsListContainer = document.getElementById('locations-list');
    locationsListContainer.innerHTML = '<h1 class="locations-title">Crime Categories</h1>';

    for (var category in categories) {
        let categoryData = categories[category];
        let categoryColor = categoryData.color;

        // Create a div for the category name and color
        var categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';

        // Create a color indicator (a small circle or square)
        var colorIndicator = document.createElement('div');
        colorIndicator.className = 'color-indicator';
        colorIndicator.style.backgroundColor = categoryColor; // Set background color based on category

        // Create the category name text
        var categoryName = document.createElement('span');
        categoryName.textContent = category;

        // Append color indicator and category name to the container
        categoryContainer.appendChild(colorIndicator);
        categoryContainer.appendChild(categoryName);

        // Create accordion button for each category
        var accordionButton = document.createElement('button');
        accordionButton.className = 'accordion';
        accordionButton.appendChild(categoryContainer);
        locationsListContainer.appendChild(accordionButton);

        // Create a panel to contain the locations
        var panel = document.createElement('div');
        panel.className = 'panel';

        categoryData.locations.forEach(function(location) {
            // Create a custom divIcon with an SVG pin for the marker
            var icon = L.divIcon({
                className: 'custom-div-icon',
                html: getPinSVG(categoryColor), // Use the SVG function to inject the correct color
                iconSize: [32, 32],
                popupAnchor: [0, -10]
            });

            // Create a marker with the custom icon
            var marker = L.marker([location.lat, location.lng], { icon: icon, title: location.name }).addTo(map);

            // Create popup content with name and image
            var popupContent = `
                <h1>${location.name}</h1>
                <img src="${location.img}" alt="${location.name}" style="width: 100%; height: auto; cursor: pointer;" class="popup-image" />
                <p>Click the image to enlarge</p>
            `;
            marker.bindPopup(popupContent);

            // Add location to the panel
            var listItem = document.createElement('div');
            listItem.className = 'locations-item';
            listItem.textContent = location.name;
            listItem.onclick = function () {
                map.setView([location.lat, location.lng]);
                marker.openPopup();
            };
            panel.appendChild(listItem);

            // Add the event listener for opening the modal when popup opens
            marker.on('popupopen', function(e) {
                // Get the popup image inside the currently opened popup
                var popupImage = document.querySelector('.popup-image');
                if (popupImage) {
                    popupImage.addEventListener('click', function() {
                        openModal(this.src); // Open the modal with the image src
                    });
                }
            });
        });

        locationsListContainer.appendChild(panel);

        // Add click event to the accordion button to toggle the panel visibility
        accordionButton.addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}



// Function to open the modal and show the clicked image
function openModal(imageSrc) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImg.src = imageSrc;

    // Close the modal when the user clicks on the close button or outside the image
    var closeBtn = document.getElementsByClassName("modal-close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if the user clicks anywhere outside the image
    modal.onclick = function() {
        modal.style.display = "none";
    }
}

map.on('dblclick', function(e) {
    createMarkerWithPopup(e.latlng);
});

var isCreatingMarker = false;
var cameraIcon = L.divIcon({
    html: '<i class="fas fa-map-pin"></i>',
    iconSize: [25, 25],
    className: 'leaflet-div-icon'
});

function createMarkerWithPopup(latlng) {
    console.log("Creating marker at latlng: ", latlng);

    var marker = L.marker(latlng, { draggable: true }).addTo(map);

    if (marker) {
        console.log("Marker created and added to map.");
    } else {
        console.error("Failed to create marker.");
    }

    // Create a form in the popup to input the Name and Picture URL
    var popupContent = `
        <div>
            <label for="marker-name">Name:</label><br>
            <input id="marker-name" type="text" placeholder="Enter location name"/><br>
            <label for="marker-img">Image URL:</label><br>
            <input id="marker-img" type="text" placeholder="Enter image URL"/><br><br>
            <button id="copy-marker">Copy to Clipboard</button>
        </div>
    `;

    // Bind the popup to the marker
    marker.bindPopup(popupContent);
    
    // Explicitly open the popup
    setTimeout(function() {
        marker.openPopup();
        console.log("Attempting to open popup.");
    }, 50); // Slight delay to allow the marker to render properly

    // Check if popupopen event gets triggered
    marker.on('popupopen', function() {
        console.log("Popup opened, attaching event listener to the button.");

        // Delay for DOM rendering
        setTimeout(function() {
            var copyButton = document.getElementById('copy-marker');
            
            if (copyButton) {
                console.log("Copy button found, attaching click event.");

                copyButton.addEventListener('click', function() {
                    var name = document.getElementById('marker-name').value;
                    var imgUrl = document.getElementById('marker-img').value;

                    var markerData = {
                        id: Date.now(),
                        lat: latlng.lat.toFixed(6),
                        lng: latlng.lng.toFixed(6),
                        name: name,
                        img: imgUrl
                    };

                    var formattedData = JSON.stringify(markerData);
                    copyToClipboard(formattedData);

                    marker.bindPopup(`<p>Marker copied to clipboard!</p>`).openPopup();

                    setTimeout(() => {
                        map.removeLayer(marker);
                    }, 1500);
                });
            } else {
                console.error("Copy button not found.");
            }
        }, 10);
    });

    marker.on('popupclose', function() {
        console.log("Popup closed, removing marker.");
        map.removeLayer(marker);
    });
}

// Function to copy text to clipboard using modern clipboard API
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Copied to clipboard successfully!');
    }).catch(function(err) {
        console.error('Failed to copy text to clipboard: ', err);
        alert('Copying to clipboard failed. Ensure you are using HTTPS or localhost.');
    });
}

function getPinSVG(color) {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px" fill="${color}" stroke="black" stroke-width="1.5">
            <path d="M12 2C8.69 2 6 4.69 6 8c0 4.27 5.25 11.54 5.42 11.75.3.36.85.36 1.15 0C12.75 19.54 18 12.27 18 8c0-3.31-2.69-6-6-6zm0 9.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 4.5 12 4.5 15.5 6.07 15.5 8 13.93 11.5 12 11.5z"/>
        </svg>
    `;
}




map.setZoom(1);
