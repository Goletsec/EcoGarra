// ========================================
// ECOGARRA - LÓGICA DEL JUEGO
// ========================================

// DIBUJOS SVG: NO SE UTILIZAN IMÁGENES EXTERNAS

const drawings = {
    bottle: `<svg viewBox="0 0 100 100" aria-label="Botella PET">
        <g class="sketch-line">
            <path fill="#bce8f7" d="M39 12h22v12q0 7 8 13l5 9v38q-24 9-48 0V46l5-9q8-6 8-13z"/>
            <path d="M39 12h22M39 19h22M27 47q23 7 46 0M29 77q21 7 42 0"/>
            <path fill="#e5f9ff" d="M36 53q14 5 28 0v20q-14 5-28 0z"/>
        </g>
    </svg>`,

    banana: `<svg viewBox="0 0 100 100" aria-label="Plátano">
        <g class="sketch-line">
            <path fill="#ffdc54" d="M19 25q8 35 34 44 19 7 32-12-5 30-31 32Q19 80 12 42l-2-17z"/>
            <path fill="#ffe98a" d="M19 25q9 32 35 41 18 7 31-9"/>
            <path d="M19 25l-9-8 1 15m7-7 7-8 1 11"/>
        </g>
    </svg>`,

    apple: `<svg viewBox="0 0 100 100" aria-label="Manzana">
        <g class="sketch-line">
            <path fill="#ef6b63" d="M49 29Q30 12 17 31 2 51 22 77q13 17 27 8 15 9 28-8 20-26 4-46Q67 13 49 29z"/>
            <path fill="#79bd68" d="M51 24q13-18 26-8-7 15-26 12z"/>
            <path d="M49 29l2-13"/>
        </g>
    </svg>`,

    orange: `<svg viewBox="0 0 100 100" aria-label="Naranja">
        <g class="sketch-line">
            <circle fill="#ffab3d" cx="49" cy="53" r="32"/>
            <path fill="#79bd68" d="M49 20q10-17 24-9-7 14-24 13z"/>
            <path d="M49 21l2 8M29 40q-9 17 0 29"/>
        </g>
    </svg>`,

    strawberry: `<svg viewBox="0 0 100 100" aria-label="Fresa">
        <g class="sketch-line">
            <path fill="#ed5965" d="M18 35q15-21 31-7 17-14 32 7-4 29-32 50Q22 64 18 35z"/>
            <path fill="#78bb68" d="M49 29Q29 7 21 22l20 15-3-17 12 12 14-16q12-1 12 9z"/>
            <path d="M33 43l3 3m11 6 3 3m12-12 3 3m-21 16 3 3"/>
        </g>
    </svg>`,

    carrot: `<svg viewBox="0 0 100 100" aria-label="Zanahoria">
        <g class="sketch-line">
            <path fill="#ff9d42" d="M26 30q23-17 48 0L47 86Q40 92 39 81z"/>
            <path fill="#78bb68" d="M44 30Q22 12 28 5q15 2 20 22Q43 5 56 7q8 10-7 25Q61 13 75 18q0 12-26 18z"/>
            <path d="M34 42l15 4m-10 10 9 3m-5 9 5 2"/>
        </g>
    </svg>`,

    lettuce: `<svg viewBox="0 0 100 100" aria-label="Lechuga">
        <g class="sketch-line">
            <path fill="#9ad875" d="M48 80Q14 86 14 56 1 36 27 29 29 6 49 19 66 3 77 28 99 35 84 55 87 78 62 81z"/>
            <path fill="#c4e99a" d="M48 78Q31 55 27 30m21 49 2-60m1 60 26-49M48 79l-26-23m27 23 32-24"/>
        </g>
    </svg>`,

    cucumber: `<svg viewBox="0 0 100 100" aria-label="Pepino">
        <g class="sketch-line">
            <path fill="#4a9d5c" d="M19 65Q10 48 25 34l34-22q17-7 24 7t-7 25L41 76Q26 85 19 65z"/>
            <path fill="#8bce70" d="M25 60l39-33m-28 42 35-31"/>
            <path d="M30 38l4 2m12-10 4 2m10-9 4 2m-28 39 3 2m15-10 3 2"/>
        </g>
    </svg>`,

    taco: `<svg viewBox="0 0 100 100" aria-label="Taco">
        <g class="sketch-line">
            <path fill="#efc66d" d="M13 57Q50-4 87 57L78 76H22z"/>
            <path fill="#64b95d" d="M20 53l8-10 8 7 9-13 8 13 9-8 8 10 7-4 6 10H14z"/>
            <path fill="#e96b55" d="M24 57l9-8 7 8 8-10 8 10 9-7 8 8-5 13H29z"/>
            <path d="M23 69l55 0m-47-9 5 2m20-1 5 2"/>
        </g>
    </svg>`,

    pizza: `<svg viewBox="0 0 100 100" aria-label="Pizza">
        <g class="sketch-line">
            <path fill="#f5c45d" d="M12 24Q51 4 88 24L59 83Q52 94 44 82z"/>
            <path fill="#eddf9a" d="M17 27Q52 10 83 27l-7 10Q51 24 23 37z"/>
            <circle fill="#e95c50" cx="43" cy="43" r="6"/>
            <circle fill="#e95c50" cx="64" cy="39" r="6"/>
            <circle fill="#e95c50" cx="52" cy="61" r="6"/>
        </g>
    </svg>`,

    pizzaBox: `<svg viewBox="0 0 100 100" aria-label="Caja de pizza">
        <g class="sketch-line">
            <path fill="#e3b77d" d="M9 35L50 12 91 35 50 58z"/>
            <path fill="#c99456" d="M9 35v34l41 20V58z"/>
            <path fill="#d9a76b" d="M91 35v34L50 89V58z"/>
            <path d="M18 38l32 18 32-18M24 29l27-14 26 14"/>
        </g>
    </svg>`,

    carton: `<svg viewBox="0 0 100 100" aria-label="Cartón">
        <g class="sketch-line">
            <path fill="#d9a66c" d="M15 30l35-18 36 18-36 20z"/>
            <path fill="#bc8548" d="M15 30v43l35 16V50z"/>
            <path fill="#e9c18c" d="M86 30v43L50 89V50z"/>
            <path d="M25 35l25 14 25-14M50 50v39"/>
        </g>
    </svg>`,

    can: `<svg viewBox="0 0 100 100" aria-label="Lata metálica">
        <g class="sketch-line">
            <path fill="#d7e0e6" d="M26 24q24-10 48 0v53q-24 11-48 0z"/>
            <path fill="#f4f7f8" d="M26 24q24 10 48 0v8q-24 10-48 0z"/>
            <path d="M26 76q24 10 48 0M39 43l11 9 12-9M50 52v15"/>
        </g>
    </svg>`,

    paper: `<svg viewBox="0 0 100 100" aria-label="Papel">
        <g class="sketch-line">
            <path fill="#fffef6" d="M22 12h40l18 18v58H22z"/>
            <path fill="#e8f0e6" d="M62 12v18h18"/>
            <path d="M32 43h37M32 53h37M32 63h30M32 73h35"/>
        </g>
    </svg>`,

    glass: `<svg viewBox="0 0 100 100" aria-label="Botella de vidrio">
        <g class="sketch-line">
            <path fill="#9cdbc1" d="M39 12h22v13q0 7 9 14l5 8v36q-25 8-50 0V47l5-8q9-6 9-14z"/>
            <path fill="#d7f5e9" d="M35 49q15 5 30 0v22q-15 5-30 0z"/>
            <path d="M39 12h22M27 47q23 7 46 0"/>
        </g>
    </svg>`,

    cup: `<svg viewBox="0 0 100 100" aria-label="Vaso con bebida">
        <g class="sketch-line">
            <path fill="#fff8df" d="M24 20h52L68 84H32z"/>
            <path fill="#f2bb51" d="M29 39h42L66 80H34z"/>
            <path d="M24 20h52M32 84h36"/>
            <path fill="#f9e7ad" d="M44 20l-2-9h17l-2 9"/>
        </g>
    </svg>`,

    drink: `<svg viewBox="0 0 100 100" aria-label="Líquido">
        <g class="sketch-line">
            <path fill="#f5bf4f" d="M18 53q13-12 25 0t24 0 17 0l-7 26H27z"/>
            <path fill="#ffe5a0" d="M23 54q13-10 23 0t21 0 12 0"/>
            <path d="M34 40q-7-7 0-15m17 15q-7-7 0-15"/>
        </g>
    </svg>`,

    leaf: `<svg viewBox="0 0 100 100" aria-label="Hoja seca">
        <g class="sketch-line">
            <path fill="#c69a53" d="M15 80Q12 24 83 13 86 73 32 86z"/>
            <path d="M18 82Q45 48 80 17M42 57l-3-20m20-3 16 0M29 71l-2-17"/>
        </g>
    </svg>`
};


// ========================================
// RESIDUOS DEL JUEGO
// ========================================

const wastePool = [
    {
        name: "Botella de plástico PET",
        description: "Botella vacía y limpia.",
        category: "pet",
        art: "bottle",
        level: 1,
        hint: "Las botellas PET se separan para su reciclaje. Revisa las indicaciones locales."
    },
    {
        name: "Cáscara de plátano",
        description: "Resto de fruta.",
        category: "organico",
        art: "banana",
        level: 1,
        hint: "Las cáscaras de frutas son residuos orgánicos."
    },
    {
        name: "Manzana",
        description: "Fruta para aprovechar o compostar.",
        category: "organico",
        art: "apple",
        level: 1,
        hint: "Los restos de frutas pueden aprovecharse en composta."
    },
    {
        name: "Naranja",
        description: "Fruta cítrica.",
        category: "organico",
        art: "orange",
        level: 1,
        hint: "Las cáscaras y los restos de frutas son orgánicos."
    },
    {
        name: "Fresa",
        description: "Fruta que puede dejar restos orgánicos.",
        category: "organico",
        art: "strawberry",
        level: 1,
        hint: "Los restos de frutas son orgánicos."
    },
    {
        name: "Zanahoria",
        description: "Verdura fresca.",
        category: "organico",
        art: "carrot",
        level: 1,
        hint: "Los restos de verduras pueden aprovecharse en composta."
    },
    {
        name: "Lechuga",
        description: "Verdura fresca.",
        category: "organico",
        art: "lettuce",
        level: 1,
        hint: "Los restos vegetales son orgánicos."
    },
    {
        name: "Pepino",
        description: "Verdura fresca.",
        category: "organico",
        art: "cucumber",
        level: 1,
        hint: "Los restos de verduras son orgánicos."
    },
    {
        name: "Lata metálica",
        description: "Envase vacío.",
        category: "inorganico",
        art: "can",
        level: 1,
        hint: "Las latas metálicas pueden reciclarse si están vacías y limpias."
    },
    {
        name: "Papel limpio",
        description: "Papel sin grasa ni restos de comida.",
        category: "inorganico",
        art: "paper",
        level: 1,
        hint: "El papel limpio y seco suele poder reciclarse."
    },
    {
        name: "Taco sobrante",
        description: "Resto de comida sin envoltura.",
        category: "organico",
        art: "taco",
        level: 2,
        hint: "Los restos de comida son orgánicos. Separa cualquier envoltura."
    },
    {
        name: "Botella de vidrio",
        description: "Envase vacío de vidrio.",
        category: "inorganico",
        art: "glass",
        level: 2,
        hint: "El vidrio se separa para su reciclaje según las reglas locales."
    },
    {
        name: "Hoja seca",
        description: "Hoja caída de una planta.",
        category: "organico",
        art: "leaf",
        level: 2,
        hint: "Las hojas pueden aprovecharse en composta."
    },
    {
        name: "Caja de cartón limpia",
        description: "Cartón seco y sin restos de comida.",
        category: "inorganico",
        art: "carton",
        level: 2,
        hint: "El cartón limpio y seco puede reciclarse."
    },
    {
        name: "Caja de pizza con pizza",
        description: "Debes separar la pizza del cartón.",
        category: "compuesto",
        art: "pizzaBox",
        level: 3,
        hint: "Separa la comida del cartón.",
        parts: [
            {
                name: "Pizza sobrante",
                art: "pizza",
                category: "organico",
                hint: "Los restos de pizza son orgánicos."
            },
            {
                name: "Caja de pizza",
                art: "carton",
                category: "inorganico",
                hint: "El cartón limpio puede reciclarse. El cartón muy grasoso puede no ser aceptado."
            }
        ]
    },
    {
        name: "Taco con envoltura",
        description: "Separa la comida de su envoltura.",
        category: "compuesto",
        art: "taco",
        level: 3,
        hint: "Separa cada material antes de clasificar.",
        parts: [
            {
                name: "Taco",
                art: "taco",
                category: "organico",
                hint: "Los restos de comida son orgánicos."
            },
            {
                name: "Papel limpio",
                art: "paper",
                category: "inorganico",
                hint: "El papel limpio y seco puede reciclarse."
            }
        ]
    },
    {
        name: "Vaso con bebida",
        description: "El vaso contiene líquido. Debes vaciarlo primero.",
        category: "compuesto",
        art: "cup",
        level: 3,
        hint: "Separa el líquido del envase.",
        parts: [
            {
                name: "Bebida restante",
                art: "drink",
                category: "liquido",
                hint: "Vacía el líquido en un lugar adecuado, no en los contenedores de reciclaje."
            },
            {
                name: "Vaso vacío",
                art: "cup",
                category: "inorganico",
                hint: "Clasifica el vaso según su material. Algunos vasos tienen recubrimientos y no se reciclan como papel común."
            }
        ]
    },
    {
        name: "Botella PET con líquido",
        description: "Debes vaciarla antes de reciclarla.",
        category: "compuesto",
        art: "bottle",
        level: 3,
        hint: "Separa el líquido de la botella.",
        parts: [
            {
                name: "Líquido restante",
                art: "drink",
                category: "liquido",
                hint: "Vacía el líquido en un lugar adecuado."
            },
            {
                name: "Botella PET vacía",
                art: "bottle",
                category: "pet",
                hint: "Una vez vacía, la botella PET puede prepararse para su reciclaje."
            }
        ]
    }
];


// ========================================
// ESTADO DEL JUEGO
// ========================================

const state = {
    score: 0,
    streak: 0,
    level: 1,
    round: 1,
    lives: 3,
    playing: true,
    current: null,
    previousName: "",
    activeParts: [],
    selectedPart: null,
    clawX: 50,
    clawY: 18,
    carrying: null,
    lastLesson: "Observa los materiales y separa los residuos antes de clasificarlos."
};


// ========================================
// ELEMENTOS HTML
// ========================================

const $ = id => document.getElementById(id);

const binsEl = $("bins");
const separationArea = $("separation-area");
const separationItems = $("separation-items");
const liquidZone = $("liquid-zone");
const clawStage = $("claw-stage");
const clawEl = $("claw");
const pickupWaste = $("pickup-waste");
const carriedWaste = $("carried-waste");


// ========================================
// ACTUALIZAR ESTADÍSTICAS
// ========================================

function updateScreen() {
    $("score").textContent = state.score;
    $("streak").textContent = state.streak;

    $("lives").textContent =
        "❤️".repeat(state.lives) +
        "♡".repeat(3 - state.lives);

    $("level").textContent = state.level;
    $("round").textContent = state.round;
    $("round-label").textContent = `RONDA ${state.round}/5`;

    $("progress").style.width =
        `${((state.round - 1) / 5) * 100}%`;
}


// ========================================
// MENSAJES
// ========================================

function setMessage(text, type = "") {
    $("message").textContent = text;
    $("message").className = `message ${type}`.trim();
}


// ========================================
// ELEGIR OBJETO SIN REPETIR EL ANTERIOR
// ========================================

function chooseWaste() {
    let available = wastePool.filter(item => item.level <= state.level);

    if (state.level === 3) {
        available = wastePool.filter(item => item.level >= 2);
    }

    let choices = available.filter(
        item => item.name !== state.previousName
    );

    if (choices.length === 0) {
        choices = available;
    }

    return choices[Math.floor(Math.random() * choices.length)];
}


// ========================================
// CARGAR RESIDUO
// ========================================

function loadWaste() {
    state.current = chooseWaste();
    state.previousName = state.current.name;
    state.activeParts = [];
    state.selectedPart = null;
    state.clawX = 50;
    state.clawY = 18;
    state.carrying = null;

    $("waste-art").innerHTML = drawings[state.current.art];
    $("waste-name").textContent = state.current.name;
    $("waste-description").textContent = state.current.description;

    $("prompt-title").textContent =
        state.level === 3
            ? "¡Reto ecológico avanzado!"
            : state.level === 2
                ? "¡Observa los detalles!"
                : "¿Dónde va este residuo?";

    $("instruction").textContent = state.current.parts
        ? "Separa las piezas y coloca cada una en su lugar."
        : "Elige el contenedor que corresponde a este residuo.";

    $("challenge-tag").classList.toggle("hidden", state.level < 2);

    $("challenge-tag").textContent =
        state.level === 3 ? "⚡ RETO AVANZADO" : "✎ NIVEL INTERMEDIO";

    separationArea.classList.toggle("hidden", !state.current.parts);

    separationItems.innerHTML = "";

    liquidZone.classList.toggle(
        "hidden",
        !state.current.parts ||
        !state.current.parts.some(part => part.category === "liquido")
    );

    if (state.current.parts) {
        state.activeParts = state.current.parts.map((part, index) => ({
            ...part,
            id: index,
            done: false
        }));

        renderSeparationParts();

        setMessage(
            "¡Este objeto tiene varios componentes! Sepáralos y clasifica cada uno."
        );
    } else {
        setMessage("Selecciona una categoría.");
    }

    $("game-hint").textContent = state.current.hint ||
        "Consejo: fíjate en el material antes de elegir.";

    binsEl.querySelectorAll(".bin").forEach(bin => {
        bin.classList.remove("drag-over");
    });

    updateClaw();
    updatePickupDisplay();
    updateScreen();
}


// ========================================
// MOSTRAR LAS PIEZAS PARA SEPARAR
// ========================================

function renderSeparationParts() {
    separationItems.innerHTML = "";

    state.activeParts.forEach(part => {
        if (part.done) return;

        const card = document.createElement("div");
        card.className = "separation-item";
        card.innerHTML = `
            ${drawings[part.art]}
            <strong>${part.name}</strong>
            <small>La garra la recogerá</small>
        `;
        separationItems.appendChild(card);
    });

    updatePickupDisplay();
}

// ========================================
// COLOCAR UNA PIEZA EN SU DESTINO
// ========================================

function placePart(id, destination) {
    if (!state.playing) return;

    const part = state.activeParts.find(item => item.id === id);

    if (!part || part.done) return;

    if (part.category === destination) {
        part.done = true;
        state.selectedPart = null;

        state.score += 100;
        state.streak++;

        if (state.streak >= 3) {
            state.score += 50;
        }

        state.lastLesson = part.hint;

        setMessage(`¡Correcto! ${part.hint}`, "correct");

        updateScreen();
        renderSeparationParts();

        const remaining = state.activeParts.some(item => !item.done);

        if (!remaining) {
            setMessage(
                "¡Excelente! Separaste y clasificaste todas las piezas.",
                "correct"
            );

            setTimeout(() => {
                if (state.playing) nextRound();
            }, 900);
        }
    } else {
        state.lives = Math.max(0, state.lives - 1);
        state.score = Math.max(0, state.score - 25);
        state.streak = 0;
        state.lastLesson = part.hint;

        setMessage(`❌ Esa pieza no va ahí. ${part.hint}`, "incorrect");

        updateScreen();

        if (state.lives <= 0) {
            setTimeout(() => endGame(false), 800);
        }
    }
}


// ========================================
// PREPARAR ARRASTRE A LOS CONTENEDORES
// ========================================

function setupDropTargets() {
    // Los contenedores ahora reciben residuos únicamente mediante la garra.
}


// ========================================
// CONTROL DE LA GARRA CON EL TECLADO
// ========================================

function updateClaw() {
    clawEl.style.setProperty("--claw-x", `${state.clawX}%`);
    clawEl.style.setProperty("--claw-y", `${state.clawY}%`);
    clawEl.classList.toggle("is-carrying", Boolean(state.carrying));
    $("claw-status").textContent = state.carrying
        ? "Transportando residuo"
        : state.clawY > 35 ? "Garra abajo" : "Garra lista";
}

function updatePickupDisplay() {
    if (!state.current) return;

    let art = drawings[state.current.art];
    let label = state.current.name;

    if (state.current.parts) {
        const nextPart = state.activeParts.find(part => !part.done);
        if (nextPart) {
            art = drawings[nextPart.art];
            label = nextPart.name;
        }
    }

    pickupWaste.innerHTML = art || "";
    pickupWaste.dataset.label = label;
    pickupWaste.classList.toggle("is-hidden", Boolean(state.carrying));
}

function getDropTargetAt(x) {
    const targets = [...binsEl.querySelectorAll(".bin, .liquid-zone")];
    const stageRect = clawStage.getBoundingClientRect();

    return targets.find(target => {
        if (target.classList.contains("hidden")) return false;
        const rect = target.getBoundingClientRect();
        const center = ((rect.left + rect.right) / 2 - stageRect.left) / stageRect.width * 100;
        const halfWidth = rect.width / stageRect.width * 50;
        return Math.abs(x - center) <= halfWidth;
    });
}

function clawAction() {
    if (!state.playing) return;

    if (!state.carrying) {
        if (state.clawY < 28 || Math.abs(state.clawX - 50) > 20) {
            setMessage("Acércate al residuo: centra la garra y bájala con la flecha ↓.");
            return;
        }

        if (state.current.parts) {
            const part = state.activeParts.find(item => !item.done);
            if (!part) return;
            state.carrying = { type: "part", id: part.id, art: part.art, name: part.name };
        } else {
            state.carrying = { type: "waste", art: state.current.art, name: state.current.name };
        }

        carriedWaste.innerHTML = drawings[state.carrying.art];
        pickupWaste.classList.add("is-hidden");
        setMessage(`¡Recogiste ${state.carrying.name}! Llévalo al contenedor correcto.`);
        updateClaw();
        return;
    }

    if (state.clawY < 45) {
        setMessage("Baja la garra hasta el contenedor con la flecha ↓ y presiona espacio para soltar.");
        return;
    }

    const target = getDropTargetAt(state.clawX);
    if (!target) {
        setMessage("Coloca la garra justo encima de uno de los contenedores antes de soltar.");
        return;
    }

    const category = target.dataset.category;
    const carried = state.carrying;
    state.carrying = null;
    carriedWaste.innerHTML = "";

    if (carried.type === "part") {
        const part = state.activeParts.find(item => item.id === carried.id);
        const correct = part && part.category === category;
        placePart(carried.id, category);
        if (!correct) updatePickupDisplay();
    } else {
        const correct = state.current.category === category;
        answer(category);
        if (!correct) updatePickupDisplay();
    }

    updateClaw();
}

document.addEventListener("keydown", event => {
    const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " ", "Spacebar"];
    if (!keys.includes(event.key) || !state.playing) return;
    if (event.target.closest("button, input, textarea, select")) return;
    event.preventDefault();

    const step = event.shiftKey ? 10 : 5;
    if (event.key === "ArrowLeft") state.clawX = Math.max(5, state.clawX - step);
    if (event.key === "ArrowRight") state.clawX = Math.min(95, state.clawX + step);
    if (event.key === "ArrowUp") state.clawY = Math.max(12, state.clawY - step);
    if (event.key === "ArrowDown") state.clawY = Math.min(68, state.clawY + step);
    if (event.key === " " || event.key === "Spacebar") clawAction();

    updateClaw();
});

clawStage.addEventListener("click", () => clawStage.focus());

// ========================================
// CONTROLES TÁCTILES PARA CELULARES Y TABLETAS
// ========================================

let touchMoveTimer = null;
let touchMoveDirection = null;

function moveClaw(direction, step = 5) {
    if (!state.playing) return;

    if (direction === "left") state.clawX = Math.max(5, state.clawX - step);
    if (direction === "right") state.clawX = Math.min(95, state.clawX + step);
    if (direction === "up") state.clawY = Math.max(12, state.clawY - step);
    if (direction === "down") state.clawY = Math.min(68, state.clawY + step);

    updateClaw();
}

function stopTouchMove() {
    if (touchMoveTimer) clearInterval(touchMoveTimer);
    touchMoveTimer = null;
    touchMoveDirection = null;
}

document.querySelectorAll("[data-claw-control]").forEach(control => {
    const direction = control.dataset.clawControl;

    control.addEventListener("pointerdown", event => {
        event.preventDefault();
        control.setPointerCapture?.(event.pointerId);

        if (direction === "action") {
            clawAction();
            return;
        }

        stopTouchMove();
        touchMoveDirection = direction;
        moveClaw(direction, 5);
        touchMoveTimer = setInterval(() => {
            if (touchMoveDirection) moveClaw(touchMoveDirection, 3);
        }, 140);
    });

    ["pointerup", "pointercancel", "lostpointercapture"].forEach(eventName => {
        control.addEventListener(eventName, stopTouchMove);
    });
});

document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopTouchMove();
});

// ========================================
// CLASIFICAR RESIDUOS NORMALES
// ========================================

function answer(category) {
    if (!state.playing) return;

    // Los residuos compuestos requieren separar sus piezas.
    if (state.current.parts) {
        setMessage(
            "✂️ ¡Primero separa las piezas! Después coloca cada una en su lugar."
        );
        return;
    }

    if (category === state.current.category) {
        state.score += 100;
        state.streak++;

        if (state.streak >= 3) {
            state.score += 50;
        }

        state.lastLesson = state.current.hint;

        setMessage(`¡Correcto! +100 puntos. ${state.current.hint}`, "correct");

        updateScreen();

        setTimeout(() => {
            if (state.playing) nextRound();
        }, 750);

    } else {
        state.lives = Math.max(0, state.lives - 1);
        state.score = Math.max(0, state.score - 25);
        state.streak = 0;
        state.lastLesson = state.current.hint;

        setMessage(
            `❌ No es el lugar correcto. ${state.current.hint}`,
            "incorrect"
        );

        $("game-hint").textContent = state.current.hint;

        updateScreen();

        if (state.lives <= 0) {
            setTimeout(() => endGame(false), 800);
        }
    }
}


// ========================================
// SIGUIENTE RONDA Y NIVEL
// ========================================

function nextRound() {
    state.round++;

    if (state.round > 5) {
        if (state.level >= 3) {
            endGame(true);
            return;
        }

        state.level++;
        state.round = 1;

        setMessage(
            `🎉 ¡Subiste al nivel ${state.level}! Ahora hay retos más difíciles.`,
            "correct"
        );
    }

    updateScreen();
    loadWaste();
}


// ========================================
// TERMINAR EL JUEGO
// ========================================

function endGame(won) {
    state.playing = false;

    $("game-over").classList.remove("hidden");
    $("final-score").textContent = state.score;
    $("final-stamp").textContent = won ? "🏆" : "🌱";

    $("end-title").textContent = won
        ? "¡Misión ecológica completada!"
        : "¡Reto terminado!";

    $("end-message").textContent = won
        ? "¡Completaste los tres niveles! Aprendiste a separar y clasificar residuos."
        : "Cada error es una oportunidad para aprender. ¡Inténtalo de nuevo!";

    $("learning-message").textContent = state.lastLesson;

    $("restart-button").focus();
}


// ========================================
// REINICIAR EL JUEGO
// ========================================

function restartGame() {
    Object.assign(state, {
        score: 0,
        streak: 0,
        level: 1,
        round: 1,
        lives: 3,
        playing: true,
        current: null,
        previousName: "",
        activeParts: [],
        selectedPart: null,
        clawX: 50,
        clawY: 18,
        carrying: null,
        lastLesson: "Observa los materiales y separa los residuos antes de clasificarlos."
    });

    $("game-over").classList.add("hidden");

    loadWaste();
}


// ========================================
// INICIAR EVENTOS
// ========================================

setupDropTargets();

$("restart-button").addEventListener("click", restartGame);

loadWaste();