// Main page JavaScript
const allSmoothies = {
    energy: {
        name: "Energy Boost Plan",
        description: "Perfect for when you need a power boost!",
        smoothies: [
            { name: "Mango & Banana Power Smoothie", allergens: [] },
            { name: "Berry Mix Antioxidant Blend", allergens: [] },
            { name: "Pineapple & Spinach Refresher", allergens: [] },
            { name: "Strawberry Oatmeal Breakfast", allergens: ["gluten"] },
            { name: "Blueberry Protein Shake", allergens: ["dairy"] },
            { name: "Tropical Detox Smoothie", allergens: [] },
            { name: "Apple & Kiwi Green Smoothie", allergens: [] }
        ]
    },
    weight: {
        name: "Weight Loss Plan",
        description: "Designed to support your weight loss goals!",
        smoothies: [
            { name: "Green Detox Smoothie", allergens: [] },
            { name: "Berry Protein Slim Shake", allergens: ["dairy"] },
            { name: "Citrus & Carrot Cleanser", allergens: ["citrus"] },
            { name: "Spinach & Pineapple Slim Blend", allergens: [] },
            { name: "Strawberry & Chia Fiber Smoothie", allergens: [] },
            { name: "Watermelon Hydration Mix", allergens: [] },
            { name: "Peach & Ginger Metabolism Booster", allergens: [] }
        ]
    },
    allergy: {
        name: "Allergy Friendly Plan",
        description: "Safe and delicious for those with dietary restrictions!",
        smoothies: [
            { name: "Banana & Pear Smoothie", allergens: [] },
            { name: "Mango & Coconut Water Blend", allergens: [] },
            { name: "Blueberry & Rice Milk Shake", allergens: [] },
            { name: "Pineapple & Spinach Green Blend", allergens: [] },
            { name: "Strawberry & Oat Milk", allergens: ["gluten"] },
            { name: "Apple & Kiwi Green Mix", allergens: [] },
            { name: "Melon & Mint Cooler", allergens: [] }
        ]
    },
    healthy: {
        name: "Healthy Living Plan",
        description: "Balanced nutrition for everyday wellness!",
        smoothies: [
            { name: "Spinach & Avocado Green Smoothie", allergens: [] },
            { name: "Berry & Flaxseed Antioxidant Blend", allergens: [] },
            { name: "Carrot & Orange Immunity Booster", allergens: ["citrus"] },
            { name: "Banana & Oatmeal Breakfast Smoothie", allergens: ["gluten"] },
            { name: "Pineapple & Kale Detox", allergens: [] },
            { name: "Strawberry & Almond Milk", allergens: ["nuts"] },
            { name: "Mango & Chia Seed Power Mix", allergens: [] }
        ]
    },
    surprise: {
        name: "Surprise Mix Plan",
        description: "Adventure awaits! Let's explore new flavors!",
        smoothies: [
            { name: "Watermelon & Mint Cooler", allergens: [] },
            { name: "Apple Pie Smoothie", allergens: ["gluten", "dairy"] },
            { name: "Tropical Coconut Blend", allergens: [] },
            { name: "Blueberry & Lemon Zest", allergens: ["citrus"] },
            { name: "Peach & Basil Refresher", allergens: [] },
            { name: "Kiwi & Spinach Green Power", allergens: [] },
            { name: "Raspberry & Banana Dream", allergens: [] }
        ]
    }
};

const personalityPlans = {
    banana: "energy",
    berrymix: "surprise",
    blueberry: "healthy",
    mango: "energy",
    strawberry: "surprise",
    greenpower: "weight",
    tropical: "surprise",
    protein: "healthy",
    acai: "healthy"
};

function getAllergenBadges(allergens) {
    if (!allergens || allergens.length === 0) {
        return '<span class="allergen-badge">✓ Safe</span>';
    }
    return allergens.map(a => `<span class="allergen-badge">${a}</span>`).join('');
}

function displayPlanWithFilter(planKey) {
    const plan = allSmoothies[planKey];
    const allergenContainer = document.getElementById('allergenSection');
    allergenContainer.classList.add('active');

    const allSmoothiesList = document.getElementById('allSmoothiesList');
    allSmoothiesList.innerHTML = `<div style="margin-bottom: 16px;"><strong>Available smoothies this week:</strong></div>`;

    plan.smoothies.forEach(smoothie => {
        const allergenBadges = getAllergenBadges(smoothie.allergens);
        const item = document.createElement('div');
        item.className = 'smoothie-item';
        item.innerHTML = `
            <div class="smoothie-info">
                <div class="smoothie-name">${smoothie.name}</div>
                <div class="allergen-labels">${allergenBadges}</div>
            </div>
        `;
        allSmoothiesList.appendChild(item);
    });

    // Add filter event listeners
    document.querySelectorAll('.allergen-checkboxes input').forEach(checkbox => {
        checkbox.removeEventListener('change', filterSmoothies);
        checkbox.addEventListener('change', filterSmoothies);
    });

    function filterSmoothies() {
        const selectedAllergens = Array.from(document.querySelectorAll('.allergen-checkboxes input:checked')).map(cb => cb.value);
        const smoothieItems = document.querySelectorAll('.smoothie-item');

        smoothieItems.forEach((item, index) => {
            const smoothie = plan.smoothies[index];
            const hasSelectedAllergen = selectedAllergens.some(allergen => smoothie.allergens.includes(allergen));

            if (hasSelectedAllergen) {
                item.classList.add('hidden');
            } else {
                item.classList.remove('hidden');
            }
        });
    }
}

function showPersonalityAlert() {
    const personality = sessionStorage.getItem('smoothiePersonality');
    if (personality) {
        const planKey = personalityPlans[personality];
        const alert = document.getElementById('personalityAlert');
        alert.classList.add('active');
        alert.innerHTML = `
            <strong>🎯 Based on your personality quiz result:</strong> You're a <strong>${personality.charAt(0).toUpperCase() + personality.slice(1)}</strong>!
            We recommend the <strong>${allSmoothies[planKey].name}</strong> for you!
            <a href="newpage.html" style="margin-left: 12px; color: #d97a5a; font-weight: bold;">Re-take Quiz</a>
        `;
        document.querySelector(`button[data-plan="${planKey}"]`).click();
        sessionStorage.removeItem('smoothiePersonality');
    }
}


document.querySelectorAll('.option-btn').forEach(btn => {
    btn.onclick = function() {
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const planKey = btn.getAttribute('data-plan');
        displayPlanWithFilter(planKey);
    };
});

document.addEventListener('DOMContentLoaded', function() {
    showPersonalityAlert();
});