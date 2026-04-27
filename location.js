async function fetchLiveLocation(targetInputId) {
    const targetInput = document.getElementById(targetInputId);
    if (!targetInput) return;

    if (!navigator.geolocation) {
        targetInput.value = "Geolocation not supported";
        return;
    }

    targetInput.value = "Locating...";

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            
            const suburb = data.address.suburb || data.address.neighbourhood || data.address.village || "";
            const city = data.address.city || data.address.town || "";
            const road = data.address.road || "";
            const pincode = data.address.postcode || "";
            const district = data.address.city_district || city;
            const state = data.address.state || "";

            // Precise Area String
            const areaDisplay = suburb || city || state || "Home";

            if (targetInputId === 'landing-loc-input') {
                targetInput.value = road ? `${road}, ${areaDisplay}` : areaDisplay;
            } else if (targetInputId === 'current-loc-display') {
                const mainLocBtn = document.getElementById('current-loc-display');
                if (mainLocBtn) mainLocBtn.innerText = areaDisplay;
            } else {
                // Auth Modal Fields
                if (document.getElementById('reg-pincode')) document.getElementById('reg-pincode').value = pincode;
                if (document.getElementById('reg-area')) document.getElementById('reg-area').value = suburb;
                if (document.getElementById('reg-street')) document.getElementById('reg-street').value = road;
                if (document.getElementById('reg-district')) document.getElementById('reg-district').value = district;
                if (document.getElementById('reg-state')) document.getElementById('reg-state').value = state;
                targetInput.innerHTML = '<i class="fas fa-check"></i> Location Filled';
            }
            
        } catch (error) {
            console.error("Location error:", error);
            const display = document.getElementById('current-loc-display');
            if (display) display.innerText = "Home";
            if (targetInputId === 'landing-loc-input') targetInput.value = "Location Error"; 
        }
    }, (err) => {
        console.warn("Location denied:", err);
        if (targetInputId === 'landing-loc-input') targetInput.value = "Access Denied";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const mainLocBtn = document.getElementById('location-btn');
    if (mainLocBtn) {
        mainLocBtn.addEventListener('click', () => {
            const display = document.getElementById('current-loc-display');
            if (display) {
                display.innerText = "Locating...";
                fetchLiveLocation('current-loc-display');
            }
        });
    }

    const landingLocBtn = document.getElementById('landing-loc-input');
    if (landingLocBtn) {
        landingLocBtn.addEventListener('click', () => fetchLiveLocation('landing-loc-input'));
    }

    const authLocBtn = document.getElementById('fetch-loc-auth');
    if (authLocBtn) {
        authLocBtn.addEventListener('click', () => fetchLiveLocation('fetch-loc-auth'));
    }

    const hubAddrLocBtn = document.getElementById('fetch-live-address');
    if (hubAddrLocBtn) {
        hubAddrLocBtn.addEventListener('click', async () => {
            const initialText = hubAddrLocBtn.innerHTML;
            hubAddrLocBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Locating...';
            
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();
                    document.getElementById('addr-full').value = data.display_name;
                    hubAddrLocBtn.innerHTML = '<i class="fas fa-check"></i> Address Fetched';
                    setTimeout(() => hubAddrLocBtn.innerHTML = initialText, 3000);
                } catch (e) {
                    hubAddrLocBtn.innerHTML = 'Error fetching address';
                }
            }, () => {
                hubAddrLocBtn.innerHTML = 'GPS Denied';
            });
        });
    }
});

