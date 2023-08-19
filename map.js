var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});
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




function createPopupContent(marker) {
    var container = L.DomUtil.create('div', 'popup-container'),
    nameInput = L.DomUtil.create('input', 'popup-input', container),
    imgInput = L.DomUtil.create('input', 'popup-input', container),
    notesInput = L.DomUtil.create('textarea', 'popup-input', container),
    imgPreview = L.DomUtil.create('img', 'popup-img', container),
    deleteButton = L.DomUtil.create('button', 'popup-button', container);

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

    nameInput.onchange = imgInput.onchange = notesInput.onchange = function() {
        marker.name = nameInput.value;
        marker.img = imgInput.value;
        marker.notes = notesInput.value;
        imgPreview.src = imgInput.value;
        marker.setPopupContent(container);
        marker.options.title = nameInput.value;
        marker.unbindTooltip().bindTooltip(nameInput.value).openTooltip();
        saveLocation(marker.getLatLng(), marker.name, marker.img, marker.notes);
    };

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

function saveLocation(latlng, name, img, notes) {
    var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');
    savedLocations.push({
        lat: latlng.lat,
        lng: latlng.lng,
        name: name,
        img: img,
        notes: notes
    });
    localStorage.setItem('locations', JSON.stringify(savedLocations));
}

function loadLocations() {
    var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');
    savedLocations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng], { title: location.name }).addTo(map);
        marker.name = location.name;
        marker.img = location.img;
        marker.notes = location.notes;
        marker.bindPopup(createPopupContent(marker));
    });
}


function deleteLocation(latlng) {
    var savedLocations = JSON.parse(localStorage.getItem('locations') || '[]');
    savedLocations = savedLocations.filter(function(location) {
        return location.lat !== latlng.lat || location.lng !== latlng.lng;
    });
    localStorage.setItem('locations', JSON.stringify(savedLocations));
}

function onMapClick(e) {
    if (isCreatingMarker) {
        var marker = L.marker(e.latlng, {icon: cameraIcon}).addTo(map);
        marker.bindPopup(createPopupContent(marker)).openPopup();
    } else {
        map.closePopup();
    }
}

map.on('click', onMapClick);
