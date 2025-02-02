// Initialize the map with the canvas renderer for better performance
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoom: 1,
    preferCanvas: true
});

// Set map bounds and add the base image overlay
var bounds = [[0, 0], [1000, 1000]];
L.imageOverlay('Gta5MapCayo.png', bounds).addTo(map);
map.fitBounds(bounds);

// Global variable to hold the categories data
var categories = {};

// Fetch the categories data from the external JSON file
fetch('categories.json')
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(function(data) {
        categories = data;
        
        // Precompute icons for each category to avoid regenerating the same SVG repeatedly
        var categoryIcons = {};
        for (var category in categories) {
            let color = categories[category].color;
            categoryIcons[category] = L.divIcon({
                className: 'custom-div-icon',
                html: getPinSVG(color),
                iconSize: [32, 32],
                popupAnchor: [0, -10]
            });
        }
        
        // Show the loading indicator while prefetching images
        var loadingIndicator = document.getElementById('loading-indicator');
        if (!loadingIndicator) {
            console.error("No loading indicator element found. Please add an element with id 'loading-indicator' in your HTML.");
            return;
        }
        // Force a reflow to ensure the indicator is rendered before prefetch starts.
        loadingIndicator.style.display = 'block';
        updateLoadingIndicator(0, getTotalImageCount(categories));
        
        // Prefetch (preload) all images from the JSON data
        prefetchImages(categories).then(function() {
            // Once all images are preloaded, hide the loading indicator and load the markers/sidebar
            loadingIndicator.style.display = 'none';
            loadCategories(categoryIcons);
        });
    })
    .catch(function(error) {
        console.error('Error loading JSON file:', error);
    });

/**
 * Returns the total number of images (locations) in the data.
 */
function getTotalImageCount(categoriesData) {
    let count = 0;
    for (let category in categoriesData) {
        count += categoriesData[category].locations.length;
    }
    return count;
}

/**
 * Updates the loading indicator's inner HTML with progress info.
 */
function updateLoadingIndicator(loaded, total) {
    const loadingIndicator = document.getElementById("loading-indicator");
    loadingIndicator.innerHTML = `
        <div style="margin-top:20vh; text-align: center; color: #fff;">
            <i class="fas fa-spinner fa-spin"></i>
            <p style="margin-top:10px; font-size: 20px;">
                ${loaded} out of ${total} images loaded
            </p>
        </div>
    `;
}



/**
 * Prefetches all images from the categories data.
 * Returns a Promise that resolves once every image has finished loading (or errored out).
 */
function prefetchImages(categoriesData) {
    return new Promise(function(resolve, reject) {
        let totalImages = getTotalImageCount(categoriesData);
        let loadedCount = 0;
        
        if (totalImages === 0) {
            resolve();
            return;
        }
        
        for (let category in categoriesData) {
            categoriesData[category].locations.forEach(function(location) {
                var img = new Image();
                // Count image as "done" whether it loads successfully or errors out
                img.onload = img.onerror = function() {
                    loadedCount++;
                    updateLoadingIndicator(loadedCount, totalImages);
                    if (loadedCount === totalImages) {
                        resolve();
                    }
                };
                // Initiate the image load (this also caches the image)
                img.src = location.img;
            });
        }
    });
}

// Build the sidebar and add markers for each category
function loadCategories(categoryIcons) {
    var locationsListContainer = document.getElementById('locations-list');
    locationsListContainer.innerHTML = '<h1 class="locations-title">Crime Categories</h1>';
    
    // Use a DocumentFragment to batch DOM updates
    var fragment = document.createDocumentFragment();
    
    for (var category in categories) {
        let categoryData = categories[category];
        let categoryColor = categoryData.color;
        
        // Create the header for this category with a color indicator and name
        var categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';
        
        var colorIndicator = document.createElement('div');
        colorIndicator.className = 'color-indicator';
        colorIndicator.style.backgroundColor = categoryColor;
        
        var categoryName = document.createElement('span');
        categoryName.textContent = category;
        
        categoryContainer.appendChild(colorIndicator);
        categoryContainer.appendChild(categoryName);
        
        // Create the accordion button for the category
        var accordionButton = document.createElement('button');
        accordionButton.className = 'accordion';
        accordionButton.appendChild(categoryContainer);
        fragment.appendChild(accordionButton);
        
        // Create a panel for the locations in this category
        var panel = document.createElement('div');
        panel.className = 'panel';
        
        categoryData.locations.forEach(function(location) {
            // Use the precomputed icon for this category
            var icon = categoryIcons[category];
            // Create and add a marker for this location
            var marker = L.marker([location.lat, location.lng], { icon: icon, title: location.name }).addTo(map);
            
            // Build the popup content (the image loads quickly from cache)
            var popupContent = `
                <h1>${location.name}</h1>
                <img src="${location.img}" alt="${location.name}" style="width: 100%; height: auto; cursor: pointer;" class="popup-image" />
                <p>Click the image to enlarge</p>
            `;
            marker.bindPopup(popupContent);
            
            // Create a list item (card) for the sidebar
            var listItem = document.createElement('div');
            listItem.className = 'locations-item';
            listItem.textContent = location.name;
            listItem.onclick = function () {
                map.setView([location.lat, location.lng]);
                marker.openPopup();
            };
            panel.appendChild(listItem);
            
            // Attach event to open the modal when the popup image is clicked
            marker.on('popupopen', function(e) {
                var popupImage = document.querySelector('.popup-image');
                if (popupImage) {
                    popupImage.addEventListener('click', function() {
                        openModal(this.src);
                    });
                }
            });
        });
        
        fragment.appendChild(panel);
        
        // Toggle the panel when the accordion header is clicked
        accordionButton.addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
    }
    
    locationsListContainer.appendChild(fragment);
}

// Function to open a modal displaying the clicked image
function openModal(imageSrc) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImg.src = imageSrc;

    var closeBtn = document.getElementsByClassName("modal-close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    modal.onclick = function() {
        modal.style.display = "none";
    };
}

// Create a new marker via double-click on the map
map.on('dblclick', function(e) {
    createMarkerWithPopup(e.latlng);
});

function createMarkerWithPopup(latlng) {
    console.log("Creating marker at latlng: ", latlng);
    var marker = L.marker(latlng, { draggable: true }).addTo(map);

    var popupContent = `
        <div>
            <label for="marker-name">Name:</label><br>
            <input id="marker-name" type="text" placeholder="Enter location name"/><br>
            <label for="marker-img">Image URL:</label><br>
            <input id="marker-img" type="text" placeholder="Enter image URL"/><br><br>
            <button id="copy-marker">Copy to Clipboard</button>
        </div>
    `;
    marker.bindPopup(popupContent);
    
    // Open the popup with a slight delay to ensure rendering
    setTimeout(function() {
        marker.openPopup();
    }, 50);
    
    marker.on('popupopen', function() {
        setTimeout(function() {
            var copyButton = document.getElementById('copy-marker');
            if (copyButton) {
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
        map.removeLayer(marker);
    });
}

// Copy text to the clipboard using the Clipboard API
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Copied to clipboard successfully!');
    }).catch(function(err) {
        console.error('Failed to copy text to clipboard: ', err);
        alert('Copying to clipboard failed. Ensure you are using HTTPS or localhost.');
    });
}

// Utility function to generate an SVG pin icon with the given color
function getPinSVG(color) {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px" fill="${color}" stroke="black" stroke-width="1.5">
            <path d="M12 2C8.69 2 6 4.69 6 8c0 4.27 5.25 11.54 5.42 11.75.3.36.85.36 1.15 0C12.75 19.54 18 12.27 18 8c0-3.31-2.69-6-6-6zm0 9.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 4.5 12 4.5 15.5 6.07 15.5 8 13.93 11.5 12 11.5z"/>
        </svg>
    `;
}

// Set the initial zoom level (if needed)
map.setZoom(1);
