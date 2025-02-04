// Initialize the map with the canvas renderer for better performance
var map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoom: 1,
    preferCanvas: true,
  });
  
  // Set map bounds and add the base image overlay
  var bounds = [
    [0, 0],
    [1000, 1000],
  ];
  L.imageOverlay("Gta5MapCayo.png", bounds).addTo(map);
  map.fitBounds(bounds);
  
  // Global variables
  var categories = {};
  var dataSource = "categories.json"; // default (will be set via modal)
  var markersGroup = L.layerGroup().addTo(map);
  var currentHighlightedMarker = null; // used for marker highlighting
  
  /**
   * Highlights the given marker (and unhighlights any previous marker)
   */
  function highlightMarker(marker) {
    if (currentHighlightedMarker && currentHighlightedMarker !== marker) {
      var prevEl = currentHighlightedMarker.getElement();
      if (prevEl) {
        prevEl.classList.remove("highlighted");
      }
    }
    currentHighlightedMarker = marker;
    var el = marker.getElement();
    if (el) {
      el.classList.add("highlighted");
    }
  }
  
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
   */
  function prefetchImages(categoriesData) {
    return new Promise(function (resolve, reject) {
      let totalImages = getTotalImageCount(categoriesData);
      let loadedCount = 0;
      if (totalImages === 0) {
        resolve();
        return;
      }
      for (let category in categoriesData) {
        categoriesData[category].locations.forEach(function (location) {
          var img = new Image();
          img.onload = img.onerror = function () {
            loadedCount++;
            updateLoadingIndicator(loadedCount, totalImages);
            if (loadedCount === totalImages) {
              resolve();
            }
          };
          img.src = location.img;
        });
      }
    });
  }
  
  /**
   * Loads data from the given JSON file, prefetches images, and builds the sidebar and markers.
   */
  function loadData(fileName) {
    // Clear existing markers
    markersGroup.clearLayers();
  
    // Clear sidebar content
    var locationsListContainer = document.getElementById("locations-list");
    locationsListContainer.innerHTML =
      '<h1 class="locations-title">Crime Categories</h1>';
  
    // Fetch the JSON file
    fetch(fileName)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        categories = data;
  
        // Precompute icons for each category
        var categoryIcons = {};
        for (var category in categories) {
          let color = categories[category].color;
          categoryIcons[category] = L.divIcon({
            className: "custom-div-icon",
            html: getPinSVG(color),
            iconSize: [32, 32],
            popupAnchor: [0, -10],
          });
        }
  
        // Show the loading indicator while prefetching images
        var loadingIndicator = document.getElementById("loading-indicator");
        loadingIndicator.style.display = "block";
        updateLoadingIndicator(0, getTotalImageCount(categories));
  
        // Prefetch images then load the markers and sidebar
        prefetchImages(categories).then(function () {
          loadingIndicator.style.display = "none";
          loadCategories(categoryIcons);
        });
      })
      .catch(function (error) {
        console.error("Error loading JSON file:", error);
      });
  }
  
  /**
   * Builds the sidebar and adds markers for each category.
   */
  function loadCategories(categoryIcons) {
    var locationsListContainer = document.getElementById("locations-list");
    var fragment = document.createDocumentFragment();
  
    for (var category in categories) {
      let categoryData = categories[category];
      let categoryColor = categoryData.color;
  
      // Create the category header (accordion)
      var categoryContainer = document.createElement("div");
      categoryContainer.className = "category-container";
  
      var colorIndicator = document.createElement("div");
      colorIndicator.className = "color-indicator";
      colorIndicator.style.backgroundColor = categoryColor;
  
      var categoryName = document.createElement("span");
      categoryName.textContent = category;
  
      categoryContainer.appendChild(colorIndicator);
      categoryContainer.appendChild(categoryName);
  
      var accordionButton = document.createElement("button");
      accordionButton.className = "accordion";
      accordionButton.appendChild(categoryContainer);
      fragment.appendChild(accordionButton);
  
      // Create a panel for this category's locations
      var panel = document.createElement("div");
      panel.className = "panel";
  
      categoryData.locations.forEach(function (location) {
        // Use the precomputed icon for this category
        var icon = categoryIcons[category];
        // Create and add a marker to the markersGroup
        var marker = L.marker(
          [parseFloat(location.lat), parseFloat(location.lng)],
          { icon: icon, title: location.name }
        ).addTo(markersGroup);
  
        // Save a reference to the marker for later use
        location.marker = marker;
  
        // Highlight the marker when clicked and show the side popup
        marker.on("click", function () {
          highlightMarker(this);
          showSidePopup(location);
        });
  
        // Create a sidebar list item
        var listItem = document.createElement("div");
        listItem.className = "locations-item";
        listItem.textContent = location.name;
        listItem.onclick = function () {
          map.setView(
            [parseFloat(location.lat), parseFloat(location.lng)],
            map.getZoom(),
            { animate: true }
          );
          setTimeout(function () {
            // Pan the map if needed...
            map.panBy([0, -100], { animate: true });
            highlightMarker(location.marker);
            showSidePopup(location);
          }, 300);
        };
  
        panel.appendChild(listItem);
      });
  
      fragment.appendChild(accordionButton);
      fragment.appendChild(panel);
  
      // Toggle the accordion panel
      accordionButton.addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.style.display =
          panel.style.display === "block" ? "none" : "block";
      });
    }
  
    locationsListContainer.appendChild(fragment);
  }
  
  /**
   * Displays a side popup (fixed to the right) with location details.
   */
  function showSidePopup(location) {
    var content = `<h1>${location.name}</h1>
                   <img src="${location.img}" alt="${location.name}" style="width:100%; height:auto; margin-bottom:10px;" />`;
    // If this is a bench marker with recipes, show the recipes with dropdowns
    if (location.bench === true && location.recipes && typeof location.recipes === "object") {
      content += "<h3>Recipes:</h3>";
      for (var recipeName in location.recipes) {
        content += `<button class="accordion recipe-accordion">${recipeName}</button>`;
        content += `<div class="panel recipe-panel">`;
        var ingredients = location.recipes[recipeName];
        for (var ingredient in ingredients) {
          content += `<p>${ingredients[ingredient]} ${ingredient}</p>`;
        }
        content += `</div>`;
      }
    }
    
    // Set the content and show the side popup
    document.getElementById("side-popup-content").innerHTML = content;
    document.getElementById("side-popup").style.display = "block";
  
    // Attach event listeners to the recipe accordions
    var recipeAccordions = document.querySelectorAll("#side-popup-content .recipe-accordion");
    recipeAccordions.forEach(function(btn) {
      btn.addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });
  
    // Attach a click event to the image so it opens the modal for an enlarged view
    var sideImg = document.querySelector("#side-popup-content img");
    if (sideImg) {
      sideImg.style.cursor = "pointer";
      sideImg.addEventListener("click", function () {
        openModal(this.src);
      });
    }
  }
  
  /**
   * Opens the image modal for an enlarged view.
   */
  function openModal(imageSrc) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");
  
    modal.style.display = "block";
    modalImg.src = imageSrc;
  
    var closeBtn = document.getElementsByClassName("modal-close")[0];
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  
    modal.onclick = function () {
      modal.style.display = "none";
    };
  }
  
  // Create a new marker via double-click on the map
  map.on("dblclick", function (e) {
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
  
    setTimeout(function () {
      marker.openPopup();
    }, 50);
  
    marker.on("popupopen", function () {
      setTimeout(function () {
        var copyButton = document.getElementById("copy-marker");
        if (copyButton) {
          copyButton.addEventListener("click", function () {
            var name = document.getElementById("marker-name").value;
            var imgUrl = document.getElementById("marker-img").value;
            var markerData = {
              id: Date.now(),
              lat: latlng.lat.toFixed(6),
              lng: latlng.lng.toFixed(6),
              name: name,
              img: imgUrl,
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
  
    marker.on("popupclose", function () {
      map.removeLayer(marker);
    });
  }
  
  /**
   * Copies the given text to the clipboard.
   */
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        console.log("Copied to clipboard successfully!");
      })
      .catch(function (err) {
        console.error("Failed to copy text to clipboard: ", err);
        alert("Copying to clipboard failed. Ensure you are using HTTPS or localhost.");
      });
  }
  
  /**
   * Utility function to generate an SVG pin icon with the given color.
   */
  function getPinSVG(color) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px" fill="${color}" stroke="black" stroke-width="1.5">
        <path d="M12 2C8.69 2 6 4.69 6 8c0 4.27 5.25 11.54 5.42 11.75.3.36.85.36 1.15 0C12.75 19.54 18 12.27 18 8c0-3.31-2.69-6-6-6zm0 9.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 4.5 12 4.5 15.5 6.07 15.5 8 13.93 11.5 12 11.5z"/>
      </svg>
    `;
  }
  
  // Hook up the PRODIGY button to switch JSON data (an extra option)
  document.getElementById("prodigyButton").addEventListener("click", function () {
    document.getElementById("dataSourceModal").style.display = "block";
  });
  
  // Close the bench modal when its close button is clicked
  document.getElementById("benchModalClose").onclick = function () {
    document.getElementById("benchModal").style.display = "none";
  };
  
  // Close the side popup when its close button is clicked
  document.getElementById("side-popup-close").addEventListener("click", function () {
    document.getElementById("side-popup").style.display = "none";
  });
  
  // Close the bench modal when clicking outside the modal content
  window.onclick = function (event) {
    var benchModal = document.getElementById("benchModal");
    if (event.target === benchModal) {
      benchModal.style.display = "none";
    }
  };
  
  // **Data Source Selection Modal Events**
  document.getElementById("echoRPButton").addEventListener("click", function () {
    dataSource = "categories.json";
    document.getElementById("dataSourceModal").style.display = "none";
    loadData(dataSource);
  });
  document.getElementById("prodigySelectButton").addEventListener("click", function () {
    dataSource = "prodigy.json";
    document.getElementById("dataSourceModal").style.display = "none";
    loadData(dataSource);
  });
  
  // Set the initial zoom level (if needed)
  map.setZoom(1);
  