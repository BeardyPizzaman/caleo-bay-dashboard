const modules = [
  {
    id: "m1",
    title: "Portfolio Map",
    duration: "20 min",
    focus: "Identify each Chancellor community's license class, bed profile, and operating model before setting staffing or budget assumptions.",
    outcomes: [
      "Separate RCFE, ALF, and RCF operational implications.",
      "Pinpoint where memory care unit counts differ from total beds.",
      "Use site data to drive realistic occupancy targets."
    ],
    exercise: [
      "Build one matrix with license type, licensed beds, memory care units, and payer channels for all four locations.",
      "Flag which communities can align to shared policies versus site-specific SOPs."
    ],
    checkpoint: {
      prompt: "Which Chancellor Oregon site is listed as a Residential Care Facility (RCF)?",
      options: ["Maple Valley Memory Care", "Fircrest Senior Living", "Cherrywood Memory Care"],
      answer: 1,
      rationale: "Fircrest is listed in Oregon records as an RCF; Maple Valley and Cherrywood are ALFs."
    }
  },
  {
    id: "m2",
    title: "Staffing Architecture",
    duration: "30 min",
    focus: "Build role coverage for dementia operations across direct care, clinical oversight, and business office execution.",
    outcomes: [
      "Define administrator and nurse leadership responsibilities by site type.",
      "Set shift-level caregiver and med-tech coverage assumptions.",
      "Separate billable clinical work from occupancy-critical non-billable work."
    ],
    exercise: [
      "Create a 24/7 shift grid for each community (day/evening/night).",
      "Draft role minimums for admissions, med pass, behavior support, and family communication."
    ],
    checkpoint: {
      prompt: "What is the biggest staffing risk if one template is copied to all four communities without adjustment?",
      options: [
        "Payroll will always be too low.",
        "State-specific requirements and facility class differences can be missed.",
        "Activities schedules cannot be standardized."
      ],
      answer: 1,
      rationale: "Facility class and state rule differences can create compliance and care-delivery gaps if staffing templates are copied blindly."
    }
  },
  {
    id: "m3",
    title: "Regulatory Execution",
    duration: "35 min",
    focus: "Apply California RCFE and Oregon memory-care rules to day-to-day operations, training, and disclosure workflows.",
    outcomes: [
      "Build separate compliance checklists for Sacramento and Oregon sites.",
      "Track memory-care training, disclosure, and policy update cycles.",
      "Tie survey readiness to routine audit tasks."
    ],
    exercise: [
      "Write a monthly compliance calendar for training renewals, incident review, and policy attestations.",
      "Create one pre-survey walkthrough checklist for each state."
    ],
    checkpoint: {
      prompt: "For Sacramento RCFE operations, which statement is operationally correct?",
      options: [
        "The same Oregon memory-care training rule controls Sacramento workflows.",
        "California RCFE dementia-care disclosure and staffing standards must be followed for Sacramento.",
        "Only federal memory-care rules apply."
      ],
      answer: 1,
      rationale: "Sacramento must follow California RCFE and dementia-care requirements, not Oregon rules."
    }
  },
  {
    id: "m4",
    title: "Revenue Architecture",
    duration: "25 min",
    focus: "Model revenue by occupancy, private-pay assumptions, and Medicaid pathways tied to each community.",
    outcomes: [
      "Map private-pay and Medicaid participation by location.",
      "Understand ALW-style service coverage limits in California.",
      "Build location-level forecast assumptions instead of one blended model."
    ],
    exercise: [
      "Use the payment simulator to run base, upside, and downside scenarios for each community.",
      "Set a payer-mix guardrail range for each Oregon location."
    ],
    checkpoint: {
      prompt: "Which statement is most accurate for this course's Sacramento assumptions?",
      options: [
        "Medicaid always pays room and board directly in RCFE settings.",
        "ALW pathways cover all resident costs uniformly.",
        "Service coverage may be available through approved pathways; room and board treatment differs and must be validated by program terms."
      ],
      answer: 2,
      rationale: "California ALW pathway details are program-specific and do not simply equal full room-and-board payment."
    }
  },
  {
    id: "m5",
    title: "Resident Journey Operations",
    duration: "30 min",
    focus: "Standardize intake, reassessment, behavior escalation, and family communication for dementia progression.",
    outcomes: [
      "Set clear admission and reassessment triggers.",
      "Define when care-plan updates or transfer evaluation is required.",
      "Create predictable family update workflows."
    ],
    exercise: [
      "Draft an intake rubric with cognitive, ADL, and safety criteria.",
      "Create an escalation pathway for behavior changes, falls, and med-related changes."
    ],
    checkpoint: {
      prompt: "What should trigger immediate multidisciplinary review?",
      options: [
        "Any move-in inquiry call.",
        "A pattern of acute behavior change and safety events.",
        "A scheduled activity calendar update."
      ],
      answer: 1,
      rationale: "Patterned behavior or safety deterioration warrants immediate multidisciplinary review and plan adjustment."
    }
  },
  {
    id: "m6",
    title: "90-Day Operator Sprint",
    duration: "35 min",
    focus: "Convert course decisions into a 90-day operating plan with KPIs, owners, and review cadence.",
    outcomes: [
      "Assign accountable owners for occupancy, staffing stability, and compliance tasks.",
      "Define weekly and monthly KPI review rhythm.",
      "Build contingency triggers for census, staffing, and quality variance."
    ],
    exercise: [
      "Draft a 13-week plan with milestones for each community.",
      "Set threshold actions for census decline, overtime spikes, and incident trend growth."
    ],
    checkpoint: {
      prompt: "Which KPI bundle best reflects memory-care operator control in this context?",
      options: [
        "Website traffic, social impressions, and ad frequency.",
        "Occupancy, move-ins/move-outs, staffing stability, incident trend, and survey readiness tasks.",
        "Only monthly gross revenue."
      ],
      answer: 1,
      rationale: "A balanced KPI set is required; revenue alone does not control quality or compliance risk."
    }
  }
];

const locations = [
  {
    id: "revere-sacramento",
    name: "Revere Court of Sacramento",
    city: "Sacramento, CA",
    state: "California",
    classType: "RCFE",
    license: "342700005",
    licensedBeds: 72,
    memoryUnits: 72,
    paymentChannels: [
      "Private pay",
      "Long-term care insurance",
      "Potential Medi-Cal ALW service pathway if provider enrollment/eligibility criteria are met"
    ],
    opsFocus: "Focus on California RCFE dementia disclosure, staffing documentation, family communication consistency, and state-specific survey readiness."
  },
  {
    id: "maple-valley",
    name: "Maple Valley Memory Care",
    city: "McMinnville, OR",
    state: "Oregon",
    classType: "ALF",
    license: "50A107",
    licensedBeds: 60,
    memoryUnits: 60,
    paymentChannels: [
      "Private pay",
      "Medicaid participation shown in public record"
    ],
    opsFocus: "Maintain Oregon memory-care training compliance and payer mix controls while protecting full memory-unit occupancy."
  },
  {
    id: "fircrest",
    name: "Fircrest Senior Living",
    city: "McMinnville, OR",
    state: "Oregon",
    classType: "RCF",
    license: "50R171",
    licensedBeds: 52,
    memoryUnits: 20,
    paymentChannels: [
      "Private pay",
      "Medicaid participation shown in public record"
    ],
    opsFocus: "Balance mixed resident profile operations and preserve capacity planning differences between total beds and memory-specific units."
  },
  {
    id: "cherrywood",
    name: "Cherrywood Memory Care",
    city: "McMinnville, OR",
    state: "Oregon",
    classType: "ALF",
    license: "50A339",
    licensedBeds: 78,
    memoryUnits: 58,
    paymentChannels: [
      "Private pay",
      "Medicaid participation shown in public record"
    ],
    opsFocus: "Run a high-capacity ALF memory operation with close tracking of staffing stability, medication workflow consistency, and occupancy conversion."
  }
];

const finalQuiz = [
  {
    prompt: "Which Chancellor community is listed as an Oregon Residential Care Facility (RCF)?",
    options: ["Maple Valley Memory Care", "Fircrest Senior Living", "Cherrywood Memory Care"],
    answer: 1
  },
  {
    prompt: "What is the publicly listed California RCFE license number for Revere Court of Sacramento?",
    options: ["342700005", "50A339", "342705000"],
    answer: 0
  },
  {
    prompt: "What is the strongest reason to run separate compliance checklists for Sacramento and Oregon sites?",
    options: [
      "The building ages are different.",
      "State rules and facility classes impose different operating requirements.",
      "Resident preferences are always identical."
    ],
    answer: 1
  },
  {
    prompt: "Which Oregon communities in this course show both private pay and Medicaid in public records?",
    options: ["Only Maple Valley", "Maple Valley, Fircrest, and Cherrywood", "Only Fircrest and Cherrywood"],
    answer: 1
  },
  {
    prompt: "In the payment simulator, what changes first when occupancy increases with fixed rates?",
    options: ["Number of occupied beds", "Community license type", "State law"],
    answer: 0
  },
  {
    prompt: "What is the key caution for California ALW assumptions in this course?",
    options: [
      "ALW assumptions can be applied without provider enrollment checks.",
      "ALW pathways require program-specific validation and do not automatically equal full room-and-board payment.",
      "ALW replaces private-pay revenue in all scenarios."
    ],
    answer: 1
  },
  {
    prompt: "Which KPI bundle best supports day-to-day memory-care operations?",
    options: [
      "Occupancy, staffing stability, incident trends, and survey task completion",
      "Only total monthly revenue",
      "Only marketing lead volume"
    ],
    answer: 0
  },
  {
    prompt: "Why does Fircrest need different planning logic than a 100% memory-unit site?",
    options: [
      "It has a mixed bed profile and only part of capacity is memory care.",
      "It is located in California.",
      "It has no Medicaid pathway."
    ],
    answer: 0
  }
];

const storageKeys = {
  completed: "chancellor_course_completed_v1",
  notes: "chancellor_course_notes_v1"
};

const state = {
  activeModuleId: modules[0].id,
  completed: new Set(),
  notes: {},
  activeLocationId: locations[0].id
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const number = new Intl.NumberFormat("en-US");

const moduleListEl = document.getElementById("module-list");
const moduleDetailEl = document.getElementById("module-detail");
const progressFillEl = document.getElementById("progress-fill");
const progressLabelEl = document.getElementById("progress-label");
const locationControlsEl = document.getElementById("location-controls");
const locationDetailEl = document.getElementById("location-detail");
const paymentLocationEl = document.getElementById("payment-location");
const occupancyEl = document.getElementById("occupancy");
const occupancyValueEl = document.getElementById("occupancy-value");
const medicaidMixEl = document.getElementById("medicaid-mix");
const medicaidValueEl = document.getElementById("medicaid-value");
const privateRateEl = document.getElementById("private-rate");
const medicaidRateEl = document.getElementById("medicaid-rate");
const paymentOutputEl = document.getElementById("payment-output");
const quizFormEl = document.getElementById("quiz-form");
const quizResultEl = document.getElementById("quiz-result");

init();

function init() {
  hydrateState();
  renderCourseArea();
  renderLocationLab();
  setupPaymentSimulator();
  renderQuiz();
  bindGlobalActions();
  setupRevealAnimations();
}

function hydrateState() {
  try {
    const completed = JSON.parse(localStorage.getItem(storageKeys.completed) || "[]");
    state.completed = new Set(completed.filter((id) => modules.some((module) => module.id === id)));
  } catch {
    state.completed = new Set();
  }

  try {
    const savedNotes = JSON.parse(localStorage.getItem(storageKeys.notes) || "{}");
    if (savedNotes && typeof savedNotes === "object") {
      state.notes = savedNotes;
    }
  } catch {
    state.notes = {};
  }
}

function bindGlobalActions() {
  document.getElementById("start-course").addEventListener("click", () => {
    state.activeModuleId = modules[0].id;
    renderCourseArea();
    document.getElementById("course").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("reset-progress").addEventListener("click", () => {
    state.completed = new Set();
    localStorage.removeItem(storageKeys.completed);
    renderCourseArea();
    quizResultEl.textContent = "Progress reset.";
  });

  moduleListEl.addEventListener("click", (event) => {
    const toggleButton = event.target.closest(".complete-toggle");
    if (toggleButton) {
      const moduleId = toggleButton.dataset.moduleId;
      if (state.completed.has(moduleId)) {
        state.completed.delete(moduleId);
      } else {
        state.completed.add(moduleId);
      }
      persistCompleted();
      renderCourseArea();
      return;
    }

    const openButton = event.target.closest(".module-open");
    if (openButton) {
      state.activeModuleId = openButton.dataset.moduleId;
      renderCourseArea();
    }
  });

  locationControlsEl.addEventListener("click", (event) => {
    const tab = event.target.closest(".location-tab");
    if (!tab) {
      return;
    }

    state.activeLocationId = tab.dataset.locationId;
    renderLocationLab();

    paymentLocationEl.value = state.activeLocationId;
    updatePaymentProjection();
  });

  document.getElementById("grade-quiz").addEventListener("click", gradeQuiz);
}

function renderCourseArea() {
  renderModuleList();
  renderActiveModule();
  renderProgress();
}

function renderModuleList() {
  moduleListEl.innerHTML = modules
    .map((module, index) => {
      const active = module.id === state.activeModuleId;
      const done = state.completed.has(module.id);
      return `
        <li class="module-card ${active ? "active" : ""}" style="animation-delay: ${index * 80}ms;">
          <button class="module-open" data-module-id="${module.id}">
            <span class="module-number">Module ${index + 1} • ${module.duration}</span>
            <h3 class="module-title">${module.title}</h3>
            <p>${module.focus}</p>
          </button>
          <button class="complete-toggle ${done ? "done" : ""}" data-module-id="${module.id}">
            ${done ? "Completed" : "Mark complete"}
          </button>
        </li>
      `;
    })
    .join("");
}

function renderActiveModule() {
  const module = modules.find((entry) => entry.id === state.activeModuleId) || modules[0];
  const noteValue = state.notes[module.id] || "";

  moduleDetailEl.innerHTML = `
    <h3>${module.title}</h3>
    <p class="module-focus">${module.focus}</p>

    <div class="detail-grid">
      <section class="detail-block">
        <h4>Learning Outcomes</h4>
        <ul>
          ${module.outcomes.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-block">
        <h4>Hands-On Exercise</h4>
        <ul>
          ${module.exercise.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    </div>

    <form class="check-form" id="module-check-form">
      <p><strong>Checkpoint:</strong> ${module.checkpoint.prompt}</p>
      ${module.checkpoint.options
        .map(
          (option, index) => `
            <label>
              <input type="radio" name="module-answer" value="${index}" /> ${option}
            </label>
          `
        )
        .join("")}
      <button class="btn ghost" type="submit">Check Answer</button>
      <p id="module-feedback" class="feedback"></p>
    </form>

    <div class="note-area">
      <label for="module-note">Module Notes (saved locally in your browser)</label>
      <textarea id="module-note" placeholder="Write your operating notes, assumptions, or action items here.">${escapeHTML(noteValue)}</textarea>
    </div>
  `;

  const checkForm = document.getElementById("module-check-form");
  const feedbackEl = document.getElementById("module-feedback");
  checkForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = checkForm.querySelector('input[name="module-answer"]:checked');

    if (!selected) {
      feedbackEl.textContent = "Select an answer first.";
      feedbackEl.className = "feedback warn";
      return;
    }

    const isCorrect = Number(selected.value) === module.checkpoint.answer;
    feedbackEl.textContent = isCorrect
      ? `Correct. ${module.checkpoint.rationale}`
      : `Not yet. ${module.checkpoint.rationale}`;
    feedbackEl.className = isCorrect ? "feedback good" : "feedback warn";
  });

  const noteEl = document.getElementById("module-note");
  noteEl.addEventListener("input", () => {
    state.notes[module.id] = noteEl.value;
    localStorage.setItem(storageKeys.notes, JSON.stringify(state.notes));
  });
}

function renderProgress() {
  const total = modules.length;
  const done = state.completed.size;
  const percentage = Math.round((done / total) * 100);

  progressFillEl.style.width = `${percentage}%`;
  progressLabelEl.textContent = `${done} of ${total} modules complete (${percentage}%)`;
}

function persistCompleted() {
  localStorage.setItem(storageKeys.completed, JSON.stringify(Array.from(state.completed)));
}

function renderLocationLab() {
  locationControlsEl.innerHTML = locations
    .map(
      (location) => `
      <button
        class="location-tab ${location.id === state.activeLocationId ? "active" : ""}"
        type="button"
        data-location-id="${location.id}"
      >
        ${location.name}
      </button>
    `
    )
    .join("");

  const activeLocation = locations.find((location) => location.id === state.activeLocationId) || locations[0];

  locationDetailEl.innerHTML = `
    <h3>${activeLocation.name}</h3>
    <p>${activeLocation.city} • ${activeLocation.state}</p>
    <div class="location-meta">
      <article>
        <span>Facility Class</span>
        <p>${activeLocation.classType}</p>
      </article>
      <article>
        <span>License/Facility ID</span>
        <p>${activeLocation.license}</p>
      </article>
      <article>
        <span>Licensed Beds</span>
        <p>${number.format(activeLocation.licensedBeds)}</p>
      </article>
      <article>
        <span>Memory Care Units</span>
        <p>${number.format(activeLocation.memoryUnits)}</p>
      </article>
    </div>
    <div class="ops-focus">
      <p><strong>Payment Channels:</strong> ${activeLocation.paymentChannels.join("; ")}.</p>
      <p><strong>Operational Focus:</strong> ${activeLocation.opsFocus}</p>
    </div>
  `;
}

function setupPaymentSimulator() {
  paymentLocationEl.innerHTML = locations
    .map((location) => `<option value="${location.id}">${location.name}</option>`)
    .join("");

  paymentLocationEl.value = state.activeLocationId;

  [paymentLocationEl, occupancyEl, medicaidMixEl, privateRateEl, medicaidRateEl].forEach((element) => {
    element.addEventListener("input", updatePaymentProjection);
  });

  updatePaymentProjection();
}

function updatePaymentProjection() {
  const location = locations.find((entry) => entry.id === paymentLocationEl.value) || locations[0];

  occupancyValueEl.textContent = `${occupancyEl.value}%`;
  medicaidValueEl.textContent = `${medicaidMixEl.value}%`;

  const occupancy = Number(occupancyEl.value) / 100;
  const medicaidMix = Number(medicaidMixEl.value) / 100;
  const privateRate = Number(privateRateEl.value) || 0;
  const medicaidRate = Number(medicaidRateEl.value) || 0;

  const occupiedBeds = Math.round(location.licensedBeds * occupancy);
  const medicaidResidents = Math.round(occupiedBeds * medicaidMix);
  const privateResidents = Math.max(occupiedBeds - medicaidResidents, 0);

  const monthlyRevenue = privateResidents * privateRate + medicaidResidents * medicaidRate;
  const annualRevenue = monthlyRevenue * 12;

  let stateNote = "";
  if (location.state === "California") {
    stateNote = "California note: verify ALW enrollment and covered-service boundaries before treating Medicaid mix assumptions as executable contracts.";
  } else {
    stateNote = "Oregon note: validate contract terms, benefit design, and managed care details at the community level before budgeting final rates.";
  }

  paymentOutputEl.innerHTML = `
    <h3>${location.name} Projection</h3>
    <div class="payment-grid">
      <article>
        <span>Occupied Beds</span>
        <p>${number.format(occupiedBeds)}</p>
      </article>
      <article>
        <span>Private-Pay Residents</span>
        <p>${number.format(privateResidents)}</p>
      </article>
      <article>
        <span>Medicaid Residents</span>
        <p>${number.format(medicaidResidents)}</p>
      </article>
      <article>
        <span>Monthly Gross Revenue</span>
        <p>${currency.format(monthlyRevenue)}</p>
      </article>
      <article>
        <span>Annualized Gross Revenue</span>
        <p>${currency.format(annualRevenue)}</p>
      </article>
    </div>
    <p class="fine-print">${stateNote}</p>
  `;
}

function renderQuiz() {
  quizFormEl.innerHTML = finalQuiz
    .map(
      (question, questionIndex) => `
      <fieldset class="quiz-question">
        <p>${questionIndex + 1}. ${question.prompt}</p>
        ${question.options
          .map(
            (option, optionIndex) => `
            <label>
              <input type="radio" name="quiz-${questionIndex}" value="${optionIndex}" /> ${option}
            </label>
          `
          )
          .join("")}
      </fieldset>
    `
    )
    .join("");
}

function gradeQuiz() {
  let correct = 0;
  let unanswered = 0;

  finalQuiz.forEach((question, index) => {
    const selected = quizFormEl.querySelector(`input[name="quiz-${index}"]:checked`);
    if (!selected) {
      unanswered += 1;
      return;
    }

    if (Number(selected.value) === question.answer) {
      correct += 1;
    }
  });

  const total = finalQuiz.length;
  const score = Math.round((correct / total) * 100);

  if (unanswered > 0) {
    quizResultEl.textContent = `Complete all questions to score. ${unanswered} question(s) still unanswered.`;
    quizResultEl.style.color = "var(--warn)";
    return;
  }

  quizResultEl.textContent = `Score: ${correct}/${total} (${score}%). ${
    score >= 80 ? "Pass" : "Review modules 2-4 and retry"
  }.`;
  quizResultEl.style.color = score >= 80 ? "var(--good)" : "var(--warn)";
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 70}ms`;
    observer.observe(item);
  });
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
