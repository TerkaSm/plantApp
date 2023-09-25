const plants = document.querySelectorAll(".plant");

document.addEventListener("DOMContentLoaded", function () {
    const growButton = document.getElementById("growButton");
    const waterButton = document.getElementById("waterButton");

    const growthRate = 10; // Rychlost růstu rostliny (v procentech za kliknutí)
    
    growButton.addEventListener("click", () => {
        plants.forEach((plant) => {
            const progressBar = plant.querySelector(".progress-bar");
            let currentWidth = parseInt(progressBar.style.width) || 0;
            currentWidth += growthRate;
            if (currentWidth > 100) {
                currentWidth = 100;
            }
            progressBar.style.width = currentWidth + "%";
        });
    });

    waterButton.addEventListener("click", () => {
        plants.forEach((plant) => {
            // Přidat animaci pro zalévání zde (CSS keyframes)
            plant.classList.add("watering");
        });
    });
});

// sledování růstu

// Definice úrovní růstu pro každou rostlinu
const plantGrowth = {
    plant1: 0,
    plant2: 0,
    // Přidejte další rostliny a jejich úrovně růstu zde
};

// Funkce pro aktualizaci úrovně růstu a zobrazení informací
function updateGrowth(plantId) {
    const progressBar = document.querySelector(`#${plantId} .progress-bar`);
    const currentWidth = parseInt(progressBar.style.width) || 0;
    plantGrowth[plantId] = currentWidth;
    alert(`Rostlina ${plantId}: ${currentWidth}% růstu.`);
}

// Event listener pro tlačítko pěstování
growButton.addEventListener("click", () => {
    plants.forEach((plant) => {
        // Přidejte animaci pro růst rostliny zde (CSS keyframes)
        const plantId = plant.id;
        updateGrowth(plantId);
    });
});

// Event listener pro tlačítko zalévání
waterButton.addEventListener("click", () => {
    plants.forEach((plant) => {
        // Přidejte animaci pro zalévání rostliny zde (CSS keyframes)
        plant.classList.add("watering");
        setTimeout(() => {
            plant.classList.remove("watering");
        }, 500); // Po 500 ms odeberte třídu "watering" pro zastavení animace
    });
});

