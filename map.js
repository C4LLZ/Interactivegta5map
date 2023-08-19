var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoom: 1 // Set the initial zoom level
});


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
            localStorage.setItem('locations', JSON.stringify(importedData));
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
    deleteButton = L.DomUtil.create('button', 'popup-button red', container), // Added 'red' class
    saveButton = L.DomUtil.create('button', 'popup-button green', container); // Added 'green' class

    nameInput.type = 'text';
    nameInput.placeholder = 'Location Name';
    nameInput.value = marker.name || '';

    imgInput.type = 'text';
    imgInput.placeholder = 'Image URL';
    imgInput.value = marker.img || '';

    notesInput.rows = '3';
    notesInput.placeholder = 'Notes';
    notesInput.value = marker.notes || '';

    if (marker.img) {
        imgPreview.src = marker.img;
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
    } else {
        savedLocations.push({
            id: id,
            lat: latlng.lat,
            lng: latlng.lng,
            name: name,
            img: img,
            notes: notes
        });
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

map.on('click', onMapClick);
map.fitBounds(bounds);
map.setZoom(1); // Set the zoom level after fitting to bounds
