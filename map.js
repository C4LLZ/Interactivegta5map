var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoom: 1 // Set the initial zoom level
});

var categories = {
    "Meth Chemicals": {
        color: "red",
        locations: [
            { "id": 1708531470118, "lat": 627.96875, "lng": 465.921875, "name": "Glycol 1", "img": "https://i.ibb.co/gtzLq6Z/6c2c344477b0d0e67f3b70796a9f2374.png" },
            { "id": 1708531506637, "lat": 627.4921875, "lng": 465.625, "name": "Glycol 2", "img": "path/to/glycol2.jpg" },
            { "id": 1708531524416, "lat": 627.234375, "lng": 466.296875, "name": "Glycol 3", "img": "path/to/glycol3.jpg" },
            { "id": 1708531561051, "lat": 623.3125, "lng": 464.765625, "name": "Sodium 1", "img": "path/to/sodium1.jpg" },
            { "id": 1708531580864, "lat": 622.8046875, "lng": 464.4765625, "name": "Sodium 2", "img": "path/to/sodium2.jpg" },
            { "id": 1708531646823, "lat": 622.2890625, "lng": 463.7890625, "name": "Sodium 3", "img": "path/to/sodium3.jpg" },
            { "id": 1708531679554, "lat": 621.328125, "lng": 462.859375, "name": "Toluene 1", "img": "path/to/toluene1.jpg" },
            { "id": 1708531710643, "lat": 620.203125, "lng": 459.640625, "name": "Toluene 2", "img": "path/to/toluene2.jpg" },
            { "id": 1708531727940, "lat": 620.984375, "lng": 460.5625, "name": "Toluene 3", "img": "path/to/toluene3.jpg" },
            {"id":1728135982026,"lat":"725.640625","lng":"654.718750","name":"Toluene/Sodium 2x","img":"https://i.ibb.co/ZNrsR2S/4be9ad4b3178001736b0e1efc75a8f2c.png"},
            {"id":1728136060708,"lat":"725.566406","lng":"655.667969","name":"Toluene/Sodium","img":"https://i.ibb.co/h7RFR0C/26a3d629eccc17f92a12b6868c36b394.png"},
            {"id":1728136112305,"lat":"726.437500","lng":"654.890625","name":"Glycol","img":"https://i.ibb.co/9q2cNvT/image.png"},
            {"id":1728136161776,"lat":"725.652344","lng":"655.527344","name":"Glycol","img":"https://i.ibb.co/KFFxS6h/8190fce6418312bbcebe5727d63b5f3a.png"},
            {"id":1728136202435,"lat":"725.847656","lng":"656.507813","name":"Glycol","img":"https://i.ibb.co/mFgtxMK/40220ad36a48369f7c27c364fa615aab.png"}
        ]
    },
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
            {"id":1728132713084,"lat":"548.843750","lng":"473.343750","name":"9","img":"https://i.ibb.co/Jz2RFD2/image.png"}
        ]
    },
    "Money Cleaning": {
        color: "Green",
        locations: [
            {"id":1728132927577,"lat":"265.937500","lng":"516.000000","name":"Cargo","img":"https://i.ibb.co/f4qZjkn/image.png"}
        ]
    },
    "Chop": {
        color: "Gray",
        locations: [
            {"id":1728133055654,"lat":"545.625000","lng":"373.312500","name":"Chop Guy","img":"https://i.ibb.co/NnBHCMQ/b5934b71f0830398a50e17b1a147668f.png"},
            {"id":1728133119599,"lat":"370.875000","lng":"296.125000","name":"Chop Sell","img":"https://i.ibb.co/MRTV4P1/906c66619241488049d32f3c70800de1.png"}
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
            {"id":1728134119523,"lat":"556.437500","lng":"479.750000","name":"Acetone","img":"https://i.ibb.co/zRw75CM/image.png"}
        ]
    },
    "Digital Den": {
        color: "Purple",
        locations: [
            {"id":1728136841502,"lat":"350.281250","lng":"417.906250","name":"Digital Den","img":"https://i.ibb.co/N78SgHH/image.png"},
            {"id":1728140150922,"lat":"287.843750","lng":"548.968750","name":"Digital Den","img":"https://i.ibb.co/M5MJTLv/image.png"},
            {"id":1728140212133,"lat":"299.765625","lng":"548.203125","name":"Digital Den","img":"https://i.ibb.co/09rwtK9/image.png"},
            {"id":1728140358599,"lat":"299.843750","lng":"348.093750","name":"Digital Den","img":"https://i.ibb.co/R7GQDfL/image.png"}
        ]
    },
    "Trap Houses": {
        color: "Black",
        locations: [
            {"id":1728139682314,"lat":"164.656250","lng":"475.187500","name":"Trap House","img":"https://i.ibb.co/PMw9JFd/image.png"},
            {"id":1728139825785,"lat":"182.906250","lng":"559.687500","name":"Trap house","img":"https://i.ibb.co/svG67x3/image.png"}
        ]
    },
    "Misc": {
        color: "pink",
        locations: [
            {"id":1728139997572,"lat":"324.812500","lng":"592.375000","name":"Grandmas","img":"https://i.ibb.co/rQ0TWyC/image.png"}
        ]
    }
};


var bounds = [[0, 0], [1000, 1000]];
L.imageOverlay('gta5map.png', bounds).addTo(map);
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
