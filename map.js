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
        "id": 1600008222438,
        "lat": 558.125,
        "lng": 485.3125,
        "name": "Loose Notes Guy",
        "img": "https://media.discordapp.net/attachments/1142875804158660758/1174026418137604176/image.png",
        "notes": ""
      },
      {
        "id": 1600008222436,
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
      },
      {
        "id": 1692554348584,
        "lat": 242.3359375,
        "lng": 519.921875,
        "name": "Xanax",
        "img": "https://cdn.discordapp.com/attachments/1060866410697465888/1142880343989440583/8ff858eda5d27e501a6d8a18bfbde8c4.png",
        "notes": "Under the ramp in the tunnel. Same price as before"
      },
      {
        "id": 1692555949072,
        "lat": 354.9375,
        "lng": 478.25,
        "name": "House Sell Guy",
        "img": "https://media.discordapp.net/attachments/1107323570725601373/1142887052128555078/image.png?width=720&height=379",
        "notes": "You sell big items from houses here"
      },
      {
        "id": 1692557356830,
        "lat": 156.40625,
        "lng": 362.25,
        "name": "ATM Hacking Tool",
        "img": "https://media.discordapp.net/attachments/953383097091649616/1142893046653001788/image.png?width=1281&height=671",
        "notes": "50x Loose Notes"
      },
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
        "img": "",
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
