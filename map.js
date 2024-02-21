var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoom: 1 // Set the initial zoom level
});

var setLocations = [
      {
        "id": 1708531470118,
        "lat": 627.96875,
        "lng": 465.921875,
        "name": "Glycol 1",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209882575620022353/image.png?ex=65e889f4&is=65d614f4&hm=7b29cd5beda1c1d8857dabb6dd7efd8e948da216bd414413c5a346938dc52c10&=&format=webp&quality=lossless&width=765&height=662",
        "notes": ""
      },
      {
        "id": 1708531506637,
        "lat": 627.4921875,
        "lng": 465.625,
        "name": "Glycol 2",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209881122431967352/image.png?ex=65e8889a&is=65d6139a&hm=abe252b41a5ce9ca4f1ac643f67fc3705948bb9cc40557a0351d6f981ce318c5&=&format=webp&quality=lossless&width=323&height=382",
        "notes": ""
      },
      {
        "id": 1708531524416,
        "lat": 627.234375,
        "lng": 466.296875,
        "name": "Glycol 3",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209890985539276901/image.png?ex=65e891c9&is=65d61cc9&hm=76bc1617946bfb43b84ff17c4fec50c8a83048a468c49c39483fcdfeb2c0d7d0&=&format=webp&quality=lossless&width=611&height=547",
        "notes": ""
      },
      {
        "id": 1708531561051,
        "lat": 623.3125,
        "lng": 464.765625,
        "name": "Sodium 1",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209886469338955878/image.png?ex=65e88d94&is=65d61894&hm=16d72ba0a2c880b28dc794c1d57c79b3c07a71ee233ea81123f6d8b640bcd0b8&=&format=webp&quality=lossless&width=827&height=635",
        "notes": ""
      },
      {
        "id": 1708531580864,
        "lat": 622.8046875,
        "lng": 464.4765625,
        "name": "Sodium 2",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209888765611352195/image.png?ex=65e88fb8&is=65d61ab8&hm=3c3a7295fec1cb74bae50e7d46d75858f4d3b1259a3333b755352f83a1a2bc07&=&format=webp&quality=lossless&width=670&height=477",
        "notes": ""
      },
      {
        "id": 1708531646823,
        "lat": 622.2890625,
        "lng": 463.7890625,
        "name": "Sodium 3",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209881833291120770/image.png?ex=65e88943&is=65d61443&hm=7a829e5188af436dcf549a4730a3625cb9313fac02466bdb0812ab58de6daf13&=&format=webp&quality=lossless&width=756&height=587",
        "notes": ""
      },
      {
        "id": 1708531679554,
        "lat": 621.328125,
        "lng": 462.859375,
        "name": "Toluene 1",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209892029320929310/image.png?ex=65e892c2&is=65d61dc2&hm=cca53397618eb696922c3fa9f566b726a2644d512bb0b6ec60a4b9a75ed4994e&=&format=webp&quality=lossless&width=538&height=524",
        "notes": ""
      },
      {
        "id": 1708531710643,
        "lat": 620.203125,
        "lng": 459.640625,
        "name": "Toluene 2",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209881516306337852/image.png?ex=65e888f7&is=65d613f7&hm=ceda57d5fab9a0ef58e9706809e28d7520322655f33e2a02db3cc2715d9f791c&=&format=webp&quality=lossless&width=359&height=386",
        "notes": ""
      },
      {
        "id": 1708531727940,
        "lat": 620.984375,
        "lng": 460.5625,
        "name": "Toluene 3",
        "img": "https://media.discordapp.net/attachments/872877063168733225/1209898084402995280/image.png?ex=65e89866&is=65d62366&hm=edbe1f50e901819c1533ad0017c7feaf3827201e22e5d72fb09ff71f98bc02eb&=&format=webp&quality=lossless&width=339&height=314",
        "notes": ""
      },
      {
        "id": 1708532295684,
        "lat": 700.546875,
        "lng": 615.234375,
        "name": "Random Bench",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209795618025766983/image.png?ex=65e838f8&is=65d5c3f8&hm=19de2962d2943447c7ff0d6ec1461ae17696cdba6ae4c1bfd69c7d930659585e&=&format=webp&quality=lossless&width=482&height=314",
        "notes": ""
      },
      {
        "id": 1708532335782,
        "lat": 148.859375,
        "lng": 528.765625,
        "name": "Boot Legging",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1209784466097176576/image.png?ex=65e82e95&is=65d5b995&hm=bd7ef24606f93812481e0aba47d17356cc7da14c47f691b1d5fae73f84896375&=&format=webp&quality=lossless&width=411&height=314",
        "notes": ""
      },
      {
        "id": 1708532370467,
        "lat": 341.484375,
        "lng": 274.46875,
        "name": "Cargo Heist",
        "img": "",
        "notes": "Inside of the maze!"
      },
      {
        "id": 1708532410444,
        "lat": 254.8125,
        "lng": 489.40625,
        "name": "Digital Den",
        "img": "",
        "notes": "On The Roof! "
      },
      {
        "id": 1708532438305,
        "lat": 153.875,
        "lng": 371.28125,
        "name": "Cargo",
        "img": "https://images-ext-2.discordapp.net/external/h08ZNtDx1UDAdWRYmMixmzblx9WrMawq1vDWWDasJ78/https/i.imgur.com/qgiEUO4.png?format=webp&quality=lossless&width=359&height=202",
        "notes": "Cleans Money"
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
        imgPreview = L.DomUtil.create('img', 'popup-img', container),
        notesContainer = L.DomUtil.create('div', 'popup-notes', container);

    // Check if the marker is a set location
    if (marker.isSetLocation) {
        var setLocationData = setLocations.find(function(location) {
            return location.name === marker.options.title;
        });

        // Display the name, image, and notes from the setLocations data
        var nameHeader = L.DomUtil.create('h1', 'popup-header', container);
        nameHeader.textContent = setLocationData.name || '';

        if (setLocationData.img) {
            imgPreview.src = setLocationData.img;
        }

        if (setLocationData.notes) {
            notesContainer.textContent = setLocationData.notes || '';
        }

        container.appendChild(imgPreview);
        container.appendChild(nameHeader);
        container.appendChild(notesContainer);
    } else {
        var nameInput = L.DomUtil.create('input', 'popup-input', container),
            imgInput = L.DomUtil.create('input', 'popup-input', container),
            notesInput = L.DomUtil.create('textarea', 'popup-input', container),
            deleteButton = L.DomUtil.create('button', 'popup-button red', container),
            saveButton = L.DomUtil.create('button', 'popup-button green', container);

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

        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function() {
            map.removeLayer(marker);
            deleteLocation(marker.getLatLng());
        };

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

        container.appendChild(nameInput);
        container.appendChild(imgInput);
        container.appendChild(notesInput);
        container.appendChild(imgPreview);
        container.appendChild(deleteButton);
        container.appendChild(saveButton);
    }

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
