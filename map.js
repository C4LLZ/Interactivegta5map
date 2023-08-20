var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoom: 1 // Set the initial zoom level
});

var setLocations = [
    {
        "id": 1692550759787,
        "lat": 323.28125,
        "lng": 592.53125,
        "name": "Grandmas",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1139412075576299530/image.png?width=720&height=380",
        "notes": "MAKE SURE TO HAVE 1x LOOSE NOTE"
      },
      {
        "id": 1692550793505,
        "lat": 247.53125,
        "lng": 516.1875,
        "name": "Big Pawn",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1132786426002538666/image.png?width=458&height=749",
        "notes": "At least 20x Big Pawn Items on you!"
      },
      {
        "id": 1692550833547,
        "lat": 729.4375,
        "lng": 652.3125,
        "name": "ChopShop",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1130697073730269206/image.png?width=720&height=462",
        "notes": "You get the list via text!\n(Need a blowtorch to chop)"
      },
      {
        "id": 1692550880333,
        "lat": 729.75,
        "lng": 749.5,
        "name": "Thermite",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1126244800102928424/image.png",
        "notes": "Plastic:30\nRubber :25\nScrap Metal :15\nIron Oxide :20\nGunpowder :5\nRadio : 1\nBattery : 8\nLaminated Plas:10\nMicrowave: 1\nNewsPaper: 1"
      },
      {
        "id": 1692550949979,
        "lat": 124.6875,
        "lng": 516.9375,
        "name": "Getaway Car",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1126223696101654558/FiveM_b2802_GTAProcess_kR2w2McJgc.png?width=720&height=394",
        "notes": "It's down below in a tunnel"
      },
      {
        "id": 1692550984240,
        "lat": 192.40625,
        "lng": 418.40625,
        "name": "Small Pawn",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1125943205721018378/MedalEncoder_Dc7Wz3t9n2.png?width=720&height=362",
        "notes": "Under the freeway in a train cart"
      },
      {
        "id": 1692551080588,
        "lat": 147.71875,
        "lng": 447.359375,
        "name": "Cargo",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1125496646873141319/image.png?width=720&height=391",
        "notes": ""
      },
      {
        "id": 1692551266615,
        "lat": 156.125,
        "lng": 516.125,
        "name": "Barrel Scrapping",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1125350621973839924/image.png?width=720&height=613",
        "notes": ""
      },
      {
        "id": 1692551354261,
        "lat": 293.25,
        "lng": 281.375,
        "name": "Loose Notes Guy",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1125182389623193600/image.png?width=720&height=405",
        "notes": ""
      },
      {
        "id": 1692551382020,
        "lat": 662.375,
        "lng": 520.5,
        "name": "Vicodine ",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1125181484114915358/image.png?width=720&height=574",
        "notes": ""
      },
      {
        "id": 1692551564178,
        "lat": 669.6875,
        "lng": 283.65625,
        "name": "Pool Cues",
        "img": "https://media.discordapp.net/attachments/1125136413394993242/1125181178421465218/image.png?width=720&height=405",
        "notes": ""
      }
  ];

var isSetLocationsDisplayed = false;
var markersMap = {}; // Mapping between IDs and marker objects
var isCreatingMarker = false;
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('gta5map.png', bounds).addTo(map);

var cameraIcon = L.divIcon({
    html: '<i class="fas fa-camera"></i>',
    iconSize: [25, 25],
    className: 'leaflet-div-icon'
});


map.fitBounds(bounds);
loadLocations();

var createMarkerControl = L.control({position: 'topleft'});
createMarkerControl.onAdd = function (map) {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    var link = L.DomUtil.create('a', 'leaflet-bar-part', container);
    var icon = L.DomUtil.create('i', 'fas fa-map-pin', link);

    link.href = '#';
    link.title = 'Create Marker';

    link.onclick = function(e) {
        isCreatingMarker = !isCreatingMarker;
        icon.className = isCreatingMarker ? 'fas fa-map-pin active' : 'fas fa-map-pin';
        L.DomEvent.stopPropagation(e);
        return false;
    };

    return container;
};
createMarkerControl.addTo(map);

var createMarkerControl = L.control({position: 'topleft'});
createMarkerControl.onAdd = function (map) {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    var link = L.DomUtil.create('a', 'leaflet-bar-part', container);
    var icon = L.DomUtil.create('i', 'fas fa-cog', link);

    link.href = '#';
    link.title = 'Settings';

    link.onclick = function(e) {
        showOptionsWindow(); // Show the options window when cogwheel button is clicked
        L.DomEvent.stopPropagation(e);
    };

    return container;
};
createMarkerControl.addTo(map);

document.getElementById('export-button').addEventListener('click', function() {
    var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');
    var exportData = JSON.stringify(savedLocations, null, 2);

    var blob = new Blob([exportData], { type: 'application/json' });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'locations.json';
    a.click();

    URL.revokeObjectURL(url);
});

document.getElementById('import-button').addEventListener('click', function() {
    var fileInput = document.getElementById('import-file');
    if (fileInput.files.length === 0) {
        alert('Please select a file to import.');
        return;
    }

    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        try {
            var importedData = JSON.parse(event.target.result);
            var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');

            // Determine whether to replace or add imported locations
            var replaceExisting = confirm("Do you want to replace existing locations with imported ones?");
            
            if (replaceExisting) {
                savedLocations = importedData; // Replace with imported data
            } else {
                savedLocations = savedLocations.concat(importedData); // Add imported data
            }

            localStorage.setItem('locations', JSON.stringify(savedLocations));
            loadLocations();
            alert('Locations imported successfully.');
        } catch (error) {
            alert('Error importing locations. Please make sure the file contains valid JSON data.');
        }
    };

    reader.readAsText(file);
});

// Show the options window
function showOptionsWindow() {
    var optionsContainer = document.getElementById('options-container');
    optionsContainer.classList.remove('hidden');
}

// Hide the options window
function hideOptionsWindow() {
    var optionsContainer = document.getElementById('options-container');
    optionsContainer.classList.add('hidden');
}

// Close options button
document.getElementById('close-options-button').addEventListener('click', function() {
    hideOptionsWindow();
});

function createPopupContent(marker) {
    var container = L.DomUtil.create('div', 'popup-container'),
        nameInput = L.DomUtil.create('input', 'popup-input', container),
        imgInput = L.DomUtil.create('input', 'popup-input', container),
        notesInput = L.DomUtil.create('textarea', 'popup-input', container),
        imgPreview = L.DomUtil.create('img', 'popup-img', container),
        deleteButton = L.DomUtil.create('button', 'popup-button red', container),
        saveButton = L.DomUtil.create('button', 'popup-button green', container);

    // Check if the marker is a set location
    if (marker.isSetLocation) {
        // For set locations, display the name and image from the setLocations data
        var setLocationData = setLocations.find(function(location) {
            return location.name === marker.options.title;
        });
        nameInput.value = setLocationData.name || '';
        imgInput.value = setLocationData.img || '';
        notesInput.value = setLocationData.notes || '';

        if (setLocationData.img) {
            imgPreview.src = setLocationData.img;
        }
    } else {
        // For user-created locations, use the marker's data
        nameInput.value = marker.name || '';
        imgInput.value = marker.img || '';
        notesInput.value = marker.notes || '';

        if (marker.img) {
            imgPreview.src = marker.img;
        }
    }

    imgPreview.onclick = function() {
        openImagePreview(marker.img);
    };

    // Create a button container to align the buttons side by side
    var buttonContainer = L.DomUtil.create('div', 'popup-button-container', container);
    buttonContainer.style.display = 'flex'; // Set display to flex to align buttons horizontally

    // Delete Button
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        map.removeLayer(marker);
        deleteLocation(marker.getLatLng());
    };
    buttonContainer.appendChild(deleteButton); // Append the delete button to the button container

    // Save Button
    saveButton.innerHTML = 'Save';
    saveButton.onclick = function() {
        marker.name = nameInput.value;
        marker.img = imgInput.value;
        marker.notes = notesInput.value;
        imgPreview.src = imgInput.value;
        marker.setPopupContent(container);
        marker.options.title = nameInput.value;
        marker.unbindTooltip().bindTooltip(nameInput.value).openTooltip();
        saveLocation(marker.getLatLng(), marker.name, marker.img, marker.notes, marker.id);
        updateLocationsList();
    };
    buttonContainer.appendChild(saveButton); // Append the save button to the button container

    return container;
}



function openImagePreview(src) {
    var previewContainer = document.createElement('div');
    previewContainer.style.position = 'fixed';
    previewContainer.style.left = '0';
    previewContainer.style.top = '0';
    previewContainer.style.width = '100%';
    previewContainer.style.height = '100%';
    previewContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
    previewContainer.style.display = 'flex';
    previewContainer.style.justifyContent = 'center';
    previewContainer.style.alignItems = 'center';
    previewContainer.style.zIndex = '1000';

    var previewImage = document.createElement('img');
    previewImage.src = src;
    previewImage.style.maxWidth = '80%';
    previewImage.style.maxHeight = '80%';
    previewContainer.appendChild(previewImage);

    previewContainer.onclick = function() {
        document.body.removeChild(previewContainer);
    };

    document.body.appendChild(previewContainer);
}

function saveLocation(latlng, name, img, notes, id) {
    var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');
    var existingLocation = savedLocations.find(location => location.id === id);

    if (existingLocation) {
        existingLocation.name = name;
        existingLocation.img = img;
        existingLocation.notes = notes;

        // Update the markersMap entry with the updated marker
        if (markersMap[id]) {
            markersMap[id].name = name;
            markersMap[id].img = img;
            markersMap[id].notes = notes;
        }
    } else {
        savedLocations.push({
            id: id,
            lat: latlng.lat,
            lng: latlng.lng,
            name: name,
            img: img,
            notes: notes
        });

        // Create a new marker and add it to markersMap
        var marker = L.marker([latlng.lat, latlng.lng], { title: name, icon: cameraIcon }).addTo(map);
        marker.id = id;
        marker.name = name;
        marker.img = img;
        marker.notes = notes;
        marker.bindPopup(createPopupContent(marker));
        markersMap[id] = marker; // Add the marker to markersMap
    }

    localStorage.setItem('locations', JSON.stringify(savedLocations));
}



function loadLocations() {
    var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');
    savedLocations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng], { title: location.name, icon: cameraIcon }).addTo(map);
        marker.id = location.id;
        marker.name = location.name;
        marker.img = location.img;
        marker.notes = location.notes;
        marker.bindPopup(createPopupContent(marker));

        markersMap[location.id] = marker; // Add the marker to the markersMap
    });

    updateLocationsList();
}


  
function updateLocationsList() {
    var locationsListContainer = document.getElementById('locations-list');
    var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');

    // Clear previous locations, but keep the title
    locationsListContainer.innerHTML = '<h1 class="locations-title">Location List</h1>';

    savedLocations.forEach(function(location) {
        var listItem = document.createElement('div');
        listItem.className = 'location-item';
        listItem.textContent = location.name;
        listItem.onclick = function() {
            map.setView([location.lat, location.lng]);
            markersMap[location.id].openPopup(); // Open the popup for the clicked location
        };
        locationsListContainer.appendChild(listItem);
    });
}


  
function deleteLocation(latlng) {
    var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');
    savedLocations = savedLocations.filter(function(location) {
        return location.lat !== latlng.lat || location.lng !== latlng.lng;
    });
    localStorage.setItem('locations', JSON.stringify(savedLocations));
    updateLocationsList();
}

function onMapClick(e) {
    if (isCreatingMarker) {
        if (map.dragging) {
            map.dragging.disable(); // Disable dragging to prevent accidental clicks
        }

        var id = Date.now(); // or use another method to generate a unique ID
        var marker = L.marker(e.latlng, { icon: cameraIcon }).addTo(map);
        marker.id = id; // Assign the ID to the marker
        marker.bindPopup(createPopupContent(marker)).openPopup();

        // Add a one-time click listener to the map to cancel marker creation
        map.once('click', function (cancelEvent) {
            map.dragging.enable(); // Re-enable dragging
            map.removeLayer(marker); // Remove the newly created marker
        });
    } else {
        map.closePopup();
    }
}

function toggleSetLocations() {
    var locationsListContainer = document.getElementById('locations-list');
    
    if (isSetLocationsDisplayed) {
      // Remove set location markers from the map
      setLocations.forEach(function(location) {
        if (markersMap[location.name]) {
          map.removeLayer(markersMap[location.name]);
        }
      });
      locationsListContainer.innerHTML = ''; // Clear the list
      isSetLocationsDisplayed = false;
      updateLocationsList();
    } else {
      // Add set location markers to the map and list
      locationsListContainer.innerHTML = ''; // Clear the list
      locationsListContainer.innerHTML = '<h1 class="locations-title">Crime Locations</h1>';
      setLocations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng], { title: location.name }).addTo(map);
        marker.isSetLocation = true;
  
        // Create a popup for the set location
        var popupContent = createPopupContent(marker);
        marker.bindPopup(popupContent);
  
        markersMap[location.name] = marker;
  
        // Add the marker to the map
        marker.addTo(map);
  
        // Add the set location to the locations list
        var listItem = document.createElement('div');
        listItem.className = 'location-item';
        listItem.textContent = location.name;
        listItem.onclick = function() {
            map.setView([location.lat, location.lng]);
            marker.openPopup();
        };
        locationsListContainer.appendChild(listItem);
      });
      isSetLocationsDisplayed = true;
    }
  }

  document.getElementById('toggle-set-locations-button').addEventListener('click', function() {
    toggleSetLocations();
  });

map.on('click', onMapClick);
map.fitBounds(bounds);
map.setZoom(1); // Set the zoom level after fitting to bounds
