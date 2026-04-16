// Quiz page JavaScript
const smoothiePersonalities = {
    banana: {
        name: "Banana Smoothie",
        description: "Du er rolig, pålitelig og komfortabel.",
        personality: "Grunnleggende, stabil og nærende",
        bestFor: "Frokost, energi, klassiske smaker",
        traits: ["Stabil", "Pålitelig", "Komfortabel"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOtpH5MTL0-BcynupEfd3L1PHyEgqTpyEJw&s"
    },
    berrymix: {
        name: "Berry Mix Smoothie",
        description: "Du elsker variasjon og eventyr! Som en bærblanding er du fargerik og morsom.",
        personality: "Eventyrlysten, variert og ekspressiv",
        bestFor: "Antioksidanter, mange vitaminer, eksperimentering",
        traits: ["Eventyrlysten", "Kreativ", "Sosial"],
        image: "https://ardo.com/sites/default/files/styles/teaser_square_xs/public/2024-04/fruit_berry_mix_0.jpg?h=b85135ca&itok=Q_V9C8Sx"
    },
    blueberry: {
        name: "Blueberry Smoothie",
        description: "Du er smart, tankefull og fokusert. Blåbær er pakket med vitenskap og god helse.",
        personality: "Intellektuell, fokusert og helsebevisst",
        bestFor: "Brain boost, antioksidanter, fokus",
        traits: ["Smart", "Fokusert", "Helsebevisst"],
        image: "https://buybc.gov.bc.ca/app/uploads/sites/386/2024/03/Blueberries_53184788.png"
    },
    mango: {
        name: "Mango Smoothie",
        description: "Du er energisk, levende og bringer solskinn overalt du går. Tropical og spennende!",
        personality: "Energisk, optimistisk og påvirkningskraftig",
        bestFor: "Energiboost, fruktig, sommervibber",
        traits: ["Energisk", "Optimistisk", "Påvirkningskraftig"],
        image: "https://gomarked.no/wp-content/uploads/mango-green-red-Pasta-olivenolje-kjeks-oliven-netthandel-halal-kjott-blomster-dagligvarer-dadler-frukt-gronnsaker-delikatesse-sultanmarked-e1700094979650.png"
    },
    strawberry: {
        name: "Strawberry Smoothie",
        description: "Du er vennlig, morsom og alles favoritt! Søt, lys og bringer glede til enhver gruppe.",
        personality: "Vennlig, sosialt orientert og innbydende",
        bestFor: "Vennskap, søt, vitaminer",
        traits: ["Vennlig", "Sosial", "Inspirerende"],
        image: "https://cdn11.bigcommerce.com/s-kc25pb94dz/images/stencil/1280w/products/255/721/Strawberries__57434.1657116605.jpg"
    },
    greenpower: {
        name: "Green Power Smoothie",
        description: "Du er dedikert, ambisiøs og fokusert på helse. Grønne smoothier representerer transformasjon.",
        personality: "Målrettet, ambisiøs og helsefokusert",
        bestFor: "Detox, vekttap, grønne blader",
        traits: ["Ambisiøs", "Dedikert", "Transformativ"],
        image: "https://images.unsplash.com/photo-1553530666-ba953a5ad9f9?w=400&h=300&fit=crop"
    },
    tropical: {
        name: "Tropical Paradise Smoothie",
        description: "Du drømmer om eventyr og søker nye erfaringer. Tropiske smoothier tar deg til nye steder!",
        personality: "Drømmeren, kreativ og eventyrlysten",
        bestFor: "Lyst, eksotisk, inspirasjon",
        traits: ["Drømmebakende", "Kreativ", "Åpen for nytt"],
        image: "https://images.unsplash.com/photo-1548882329-e4d52f85d27d?w=400&h=300&fit=crop"
    },
    protein: {
        name: "Protein Power Smoothie",
        description: "Du er sterk, bestemt og vet hva du vil oppnå. Proteinsmootherier er dine trainer for suksess!",
        personality: "Sterk, bestemt og resultatfokusert",
        bestFor: "Muskelbygging, treningsgjenoppretting, styrke",
        traits: ["Sterk", "Bestemt", "Resultatfokusert"],
        image: "https://images.unsplash.com/photo-1535143052386-fa2788e8b18e?w=400&h=300&fit=crop"
    },
    acai: {
        name: "Açai Bowl Smoothie",
        description: "Du er trendbevisst, stilfull og elsker detaljer. Vakker, næringsrik og Instagram-verdig!",
        personality: "Stilfull, trendsetter og god smak",
        bestFor: "Antioksidanter, wellness, designet verkt",
        traits: ["Stilfull", "Trendsetter", "Kreativ"],
        image: "https://images.unsplash.com/photo-1590080876570-d77b5f2fb5d3?w=400&h=300&fit=crop"
    }
};

const quizQuestions = [
    {
        question: "Hvilket ord beskriver deg best?",
        options: [
            { value: "banana", text: "🧘 Chill og avslappet" },
            { value: "berrymix", text: "🎢 Eventyrlysten" },
            { value: "blueberry", text: "🧠 Intelligent og fokusert" },
            { value: "mango", text: "⚡ Energisk" },
            { value: "strawberry", text: "❤️ Vennlig og sosial" }
        ]
    },
    {
        question: "Hva er dine ideelle helgeaktiviteter?",
        options: [
            { value: "banana", text: "Slappe av hjemme" },
            { value: "berrymix", text: "Prøve noe nytt" },
            { value: "blueberry", text: "Lese eller lære" },
            { value: "mango", text: "Utendørs eventyr" },
            { value: "strawberry", text: "Henge med venner" }
        ]
    },
    {
        question: "Hvilken farge resonerer med deg?",
        options: [
            { value: "banana", text: "🟡 Gul" },
            { value: "berrymix", text: "🟣 Lilla" },
            { value: "blueberry", text: "🔵 Blå" },
            { value: "mango", text: "🟠 Oransje" },
            { value: "strawberry", text: "🔴 Rød" }
        ]
    },
    {
        question: "Hvilken smak elsker du mest?",
        options: [
            { value: "banana", text: "Kremete og søt" },
            { value: "berrymix", text: "Surlig og blandet" },
            { value: "blueberry", text: "jordaktig og sur" },
            { value: "mango", text: "Tropisk og saftig" },
            { value: "strawberry", text: "Frisk og søt" }
        ]
    },
    {
        question: "Hva er ditt helsemål?",
        options: [
            { value: "protein", text: "💪 Bygge muskler" },
            { value: "greenpower", text: "🌱 Detox og ren" },
            { value: "tropical", text: "🌴 Energi og lyst" },
            { value: "acai", text: "✨ Wellness og glow" },
            { value: "blueberry", text: "🧠 Mental klarhet" }
        ]
    },
    {
        question: "Hva er din stil?",
        options: [
            { value: "greenpower", text: "Minimalist og edel" },
            { value: "acai", text: "Trendy og stilfull" },
            { value: "tropical", text: "Bohemian og fritt" },
            { value: "protein", text: "Sporty og funksjonell" },
            { value: "berrymix", text: "Fargerik og lekfull" }
        ]
    }
];

let answers = [];

function renderQuestion(index) {
    const q = quizQuestions[index];
    const quizBox = document.getElementById('quiz-box');

    // Question container
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.textContent = q.question;

    // Options
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'quiz-options';
    q.options.forEach(opt => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${index}`;
        input.value = opt.value;
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt.text));
        optionsDiv.appendChild(label);
    });

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'quiz-next';
    nextBtn.textContent = index < quizQuestions.length - 1 ? 'Neste' : 'Se min smoothie! 🍓';
    nextBtn.onclick = function() {
        const selected = optionsDiv.querySelector('input:checked');
        if (!selected) {
            nextBtn.textContent = "Velg et alternativ!";
            setTimeout(() => {
                nextBtn.textContent = index < quizQuestions.length - 1 ? 'Neste' : 'Se min smoothie! 🍓';
            }, 1200);
            return;
        }
        answers[index] = selected.value;
        nextBtn.disabled = true;
        // Show next question or result
        if (index < quizQuestions.length - 1) {
            renderQuestion(index + 1);
            setTimeout(() => {
                quizBox.lastElementChild.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            showResult();
            setTimeout(() => {
                document.getElementById('quiz-result').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    // Append to quiz box
    quizBox.appendChild(questionDiv);
    quizBox.appendChild(optionsDiv);
    quizBox.appendChild(nextBtn);
}

function showResult() {
    // Tally answers
    const counts = {};
    answers.forEach(val => {
        counts[val] = (counts[val] || 0) + 1;
    });
    // Find max
    let max = 0, smoothie = "banana";
    for (const key in counts) {
        if (counts[key] > max) {
            max = counts[key];
            smoothie = key;
        }
    }
    const resultDiv = document.createElement('div');
    resultDiv.id = 'quiz-result';
    resultDiv.className = 'quiz-result';
    const s = smoothiePersonalities[smoothie];
    resultDiv.innerHTML = `
        <strong>Du er en ${s.name}! 🎉</strong>
        <div class="smoothie-personality">"${s.description}"</div>
        <img src="${s.image}" alt="${s.name}" class="quiz-image">
        <div class="personality-details">
            <strong>Din personlighet:</strong> ${s.personality}<br><br>
            <strong>Best for:</strong> ${s.bestFor}
        </div>
        <div class="traits-list">
            ${s.traits.map(trait => `<span class="trait-badge">${trait}</span>`).join('')}
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
            <a href="index.html" style="color: #d97a5a;">Få din personlighetsbasert smoothie-plan!</a>
        </p>
    `;
    document.getElementById('quiz-box').appendChild(resultDiv);

    // Store result in sessionStorage for use on main page
    sessionStorage.setItem('smoothiePersonality', smoothie);
}

// Initial render: show first question on page load
document.addEventListener('DOMContentLoaded', function() {
    renderQuestion(0);
});