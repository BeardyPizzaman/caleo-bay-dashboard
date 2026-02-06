const modules = [
  {
    id: "m1",
    title: "Welcome & Overview",
    duration: "20 min",
    focus: "Get oriented to the memory care industry and how this course blends market fundamentals with Chancellor-specific execution in Sacramento and Oregon.",
    outcomes: [
      "Understand the full 10-module learning path and what each module produces.",
      "Define what success looks like for your role (owner, operator, executive director, regional leader).",
      "Set a practical learning cadence tied to business decisions you need to make now."
    ],
    exercise: [
      "Write your top 5 operating questions (staffing, compliance, reimbursement, growth, quality).",
      "Define one near-term deliverable: budget model, staffing plan, compliance calendar, or board update."
    ],
    sections: [
      {
        title: "Course Scope",
        body: "This program is built to teach both the industry and the Chancellor operating model. It covers market architecture, legal/regulatory differences, staffing and care design, payment systems, quality control, and forward-looking trends in dementia care."
      },
      {
        title: "What You Will Build",
        bullets: [
          "An operator-grade understanding of CA RCFE and OR memory-care operations.",
          "A location-aware staffing and revenue framework for Revere, Maple Valley, Fircrest, and Cherrywood.",
          "A compliance and quality control cadence that can be operationalized within 90 days."
        ]
      },
      {
        title: "Learning Sequence",
        table: {
          headers: ["Phase", "Modules", "Primary Output"],
          rows: [
            ["Foundations", "1-3", "Industry + CHC operating model orientation"],
            ["Execution", "4-8", "Regulatory, staffing, payment, and site-specific plans"],
            ["Control + Future", "9-10", "QA framework + trend-aware strategy" ]
          ]
        }
      }
    ],
    checkpoint: {
      prompt: "What is the primary purpose of this course design?",
      options: [
        "Only memorize regulations.",
        "Only learn Chancellor facility addresses.",
        "Combine industry understanding with practical operation of Chancellor communities."
      ],
      answer: 2,
      rationale: "The program is intentionally dual-track: industry mechanics plus Chancellor execution."
    }
  },
  {
    id: "m2",
    title: "Industry Overview",
    duration: "30 min",
    focus: "Understand where memory care sits in senior housing, why demand is rising, and how operator economics are structured.",
    outcomes: [
      "Differentiate assisted living, memory care, residential care, and nursing-level care within the continuum.",
      "Understand major demand drivers and why dementia care remains a growth segment.",
      "Connect occupancy, rate, labor, risk, and cap-rate movement to value creation."
    ],
    exercise: [
      "Draw your local care-continuum map from home-based care to higher-acuity placement.",
      "Build a one-page value tree linking census, pricing, labor efficiency, and NOI."
    ],
    sections: [
      {
        title: "Memory Care in the Continuum",
        body: "Memory care is not usually a standalone statutory license label; it is typically delivered under state residential care frameworks with dementia-specific requirements layered on top.",
        table: {
          headers: ["Level", "Typical Resident Need", "Operational Profile"],
          rows: [
            ["Independent Living", "Low assistance", "Hospitality-forward, minimal direct care"],
            ["Assisted Living", "ADL support", "Daily support + med management + social programming"],
            ["Memory Care", "Dementia-specific support", "Secured environment + trained staff + behavior-informed care"],
            ["Skilled Nursing", "High clinical acuity", "24/7 nursing + complex medical oversight"]
          ]
        }
      },
      {
        title: "Market and Operator Structure",
        bullets: [
          "Operators range from national chains to regional groups like CHC.",
          "Regional operators often win through local relationships and operating consistency.",
          "Memory care demand is influenced by aging demographics, family caregiver burden, and local workforce availability."
        ]
      },
      {
        title: "Economics and Risk",
        bullets: [
          "Labor is usually the largest controllable expense category.",
          "Occupancy velocity and move-out management drive short-cycle financial outcomes.",
          "As perceived risk rises, cap rates typically expand and property values compress (holding NOI constant)."
        ]
      }
    ],
    checkpoint: {
      prompt: "In senior housing valuation, what usually happens when cap rates expand and NOI is unchanged?",
      options: ["Value typically declines", "Value typically increases", "Value is unchanged"],
      answer: 0,
      rationale: "Higher cap rates imply lower valuation when NOI is constant."
    }
  },
  {
    id: "m3",
    title: "The CHC Model",
    duration: "35 min",
    focus: "Understand Chancellor's operating architecture, care philosophy, and community design assumptions.",
    outcomes: [
      "Map parent/management/community-level entity logic for risk separation and control.",
      "Understand how a cottage-style memory environment changes staffing and programming.",
      "Connect CHC service philosophy to measurable operating behaviors."
    ],
    exercise: [
      "Build your CHC governance map from parent entity to community operations.",
      "Document three operational implications of cottage-style memory care design."
    ],
    sections: [
      {
        title: "Operating Structure",
        body: "CHC is typically organized with a parent/management layer and community-level operating entities, a common pattern used to separate liability while centralizing standards, oversight, and support services."
      },
      {
        title: "Care Philosophy",
        bullets: [
          "Person-centered programming that respects resident identity and remaining abilities.",
          "Behavior-informed support focused on dignity, safety, and quality of life.",
          "Family communication as a core part of care delivery, not a side function."
        ]
      },
      {
        title: "Service Stack",
        table: {
          headers: ["Service Element", "Operational Requirement", "Value Impact"],
          rows: [
            ["Residential Memory Care", "24/7 trained staffing + secure environment", "Census stability + quality outcomes"],
            ["Respite / Transitional Support", "Short-stay workflows and intake flexibility", "Referral pipeline + revenue diversity"],
            ["Family Education / Support", "Consistent communication cadence", "Trust, retention, reputation"]
          ]
        }
      }
    ],
    checkpoint: {
      prompt: "Why do multi-entity operating structures matter in senior housing?",
      options: [
        "They are only used for marketing.",
        "They can separate legal risk while maintaining centralized operating control.",
        "They eliminate regulatory requirements."
      ],
      answer: 1,
      rationale: "The structure supports risk segmentation while preserving governance and standards."
    }
  },
  {
    id: "m4",
    title: "Licensing & Regulations",
    duration: "40 min",
    focus: "Compare California and Oregon memory-care regulatory frameworks and convert rules into operating controls.",
    outcomes: [
      "Distinguish CA RCFE requirements from OR RCF/ALF memory-care endorsement expectations.",
      "Translate training and staffing mandates into practical compliance workflows.",
      "Identify high-risk areas where cross-state policy copy/paste fails."
    ],
    exercise: [
      "Build a side-by-side compliance checklist for Sacramento and each Oregon site type.",
      "Create a monthly licensure and training tracking sheet with responsible owners."
    ],
    sections: [
      {
        title: "Regulatory Side-by-Side",
        table: {
          headers: ["Topic", "California (RCFE)", "Oregon (RCF/ALF + memory care requirements)"],
          rows: [
            ["Core Framework", "RCFE under California social services/licensing structure", "ODHS long-term care licensing with memory care rules/endorsement context"],
            ["Memory Care Positioning", "Dementia-care obligations tied to facility operations and representations", "Memory-care specific requirements layered on licensed residential settings"],
            ["Staffing Standard", "Adequate staffing standard", "Adequate staffing standard with acuity-driven expectations"],
            ["Survey Exposure", "Routine and complaint-driven inspection risk", "Routine survey and enforcement risk with public reporting visibility"]
          ]
        }
      },
      {
        title: "High-Risk Compliance Themes",
        bullets: [
          "Training documentation gaps (initial and ongoing dementia content).",
          "Behavior-related PRN documentation quality and follow-up.",
          "Elopement prevention controls and incident reporting timeliness.",
          "Policy mismatch between written procedures and actual floor practice."
        ]
      },
      {
        title: "Recent Rule Movement",
        body: "Both states have tightened expectations around dementia care structure, person-centered planning, and accountability. Operations should treat annual policy refreshes as mandatory rather than optional.",
        note: "Action: run quarterly policy-to-practice audits with corrective action tracking."
      }
    ],
    checkpoint: {
      prompt: "For Sacramento operations, which regulatory framing is correct?",
      options: [
        "Use Oregon memory-care rules as the primary framework.",
        "California RCFE dementia-related requirements control Sacramento workflows.",
        "Only federal rules apply in residential memory care."
      ],
      answer: 1,
      rationale: "Sacramento operations must be built around California RCFE rules and related dementia standards."
    }
  },
  {
    id: "m5",
    title: "Staffing & Roles",
    duration: "40 min",
    focus: "Build a complete memory-care staffing architecture from leadership through frontline and support roles.",
    outcomes: [
      "Define role accountability across executive leadership, clinical oversight, direct care, and support functions.",
      "Set clear qualification and training expectations by role family.",
      "Link staffing design to resident acuity, quality outcomes, and financial control."
    ],
    exercise: [
      "Create a role-by-role accountability matrix for one CA and one OR community.",
      "Build a 24/7 shift template with contingency staffing triggers."
    ],
    sections: [
      {
        title: "Role Architecture",
        table: {
          headers: ["Role", "Primary Accountability", "Operational Risk If Weak"],
          rows: [
            ["Administrator / Executive Director", "Licensure, operations, family trust, financial discipline", "Regulatory drift + census instability"],
            ["Nursing Leadership", "Clinical protocols, med systems, care plan quality", "Safety events + medication errors"],
            ["Memory Care Director", "Program quality, behavior support, family liaison", "Poor engagement + avoidable escalation"],
            ["Caregivers / Med Techs", "Daily ADL support and observation", "Resident deterioration missed or unmanaged"],
            ["Support Teams (dietary, housekeeping, maintenance)", "Environment reliability and resident experience", "Quality complaints + survey risk"]
          ]
        }
      },
      {
        title: "Credential and Training Discipline",
        bullets: [
          "Administrator and clinical licensing/training standards vary by state.",
          "Dementia-specific competencies must be validated, not assumed.",
          "Training completion logs should be audit-ready at all times."
        ]
      },
      {
        title: "Staffing Control Signals",
        bullets: [
          "Overtime spikes, callouts, and turnover clusters are leading risk indicators.",
          "Incident trend and staffing instability should be reviewed together weekly.",
          "Admissions pacing should align with staffing readiness to avoid quality dilution."
        ]
      }
    ],
    checkpoint: {
      prompt: "What is the biggest staffing risk of applying one identical template to all four Chancellor communities?",
      options: [
        "You will always overstaff payroll.",
        "State and facility-class differences can be missed, creating compliance and care gaps.",
        "Activities calendars cannot be standardized."
      ],
      answer: 1,
      rationale: "Staffing models must account for jurisdiction and community-class differences."
    }
  },
  {
    id: "m6",
    title: "Revenue & Payment",
    duration: "40 min",
    focus: "Learn how memory care communities get paid and how to model realistic payer-mix economics by location.",
    outcomes: [
      "Map revenue channels: private pay, Medicaid pathways, LTC insurance, and ancillary services.",
      "Understand why payer assumptions must be location-specific.",
      "Use reimbursement structure knowledge to avoid margin illusion."
    ],
    exercise: [
      "Run three payment-simulator scenarios per community (base/upside/downside).",
      "Create a payer assumption register with source/date/owner for each key input."
    ],
    sections: [
      {
        title: "Revenue Stack",
        bullets: [
          "Private pay is commonly the base channel in residential memory care.",
          "Medicaid participation is pathway-specific and state-specific.",
          "Long-term care insurance and respite offerings can meaningfully affect net mix."
        ]
      },
      {
        title: "California vs Oregon Payment Dynamics",
        table: {
          headers: ["Dimension", "California (Sacramento RCFE context)", "Oregon (CHC community context)"],
          rows: [
            ["Medicaid Access Pattern", "Program-pathway dependent with enrollment and eligibility constraints", "Program/rate structure differs and may be closer to operational economics depending on setting"],
            ["Forecasting Risk", "Assuming broad Medicaid conversion without verification", "Assuming uniform rates across communities and services"],
            ["Control Requirement", "Validate provider enrollment, benefit scope, and service coverage details", "Validate current schedule, contract language, and community-specific terms"]
          ]
        }
      },
      {
        title: "GUIDE and Broader Dementia Payment Evolution",
        body: "CMS dementia-care model activity (including GUIDE) matters because it can influence referral behavior, care coordination expectations, and the broader ecosystem around when families choose residential placement.",
        note: "Action: monitor federal and state payment-policy changes quarterly and refresh assumptions."
      }
    ],
    checkpoint: {
      prompt: "Which statement is most operationally accurate for Sacramento Medicaid assumptions?",
      options: [
        "Room-and-board treatment can be assumed equivalent to private-pay billing.",
        "Any community can apply Medicaid assumptions without enrollment validation.",
        "Program details must be verified; covered services and payment treatment are pathway-specific."
      ],
      answer: 2,
      rationale: "Program eligibility, provider status, and coverage design must be validated before budgeting."
    }
  },
  {
    id: "m7",
    title: "Daily Operations",
    duration: "35 min",
    focus: "Translate policy and staffing design into reliable daily memory-care execution.",
    outcomes: [
      "Define a repeatable daily operating rhythm from morning care through overnight coverage.",
      "Embed dementia-friendly programming and behavior support into routine care.",
      "Align clinical, lifestyle, and family communication workflows."
    ],
    exercise: [
      "Draft your community's daypart staffing-and-program schedule.",
      "Add escalation triggers for behavior, medication, and safety events by shift."
    ],
    sections: [
      {
        title: "Sample Daily Rhythm",
        table: {
          headers: ["Time Band", "Core Activity", "Lead Roles"],
          rows: [
            ["Morning", "Personal care, medication flow, breakfast support", "Caregivers, med support, nursing oversight"],
            ["Midday", "Therapeutic programming, mobility, meal support", "Activities + care team"],
            ["Afternoon/Evening", "Family touchpoints, calmer engagement blocks, dinner", "Memory care leadership + direct care"],
            ["Night", "Safety rounds, sleep support, incident readiness", "Awake overnight staff + escalation coverage"]
          ]
        }
      },
      {
        title: "Program Design Essentials",
        bullets: [
          "Activities should be ability-matched and behavior-aware.",
          "Dining and hydration workflows are central to outcomes.",
          "Family communication should be scheduled and event-triggered."
        ]
      },
      {
        title: "Operational Controls",
        bullets: [
          "Care-plan updates should follow condition change, not calendar only.",
          "Incident reviews should include staffing and process root-cause analysis.",
          "Shift handoffs need standardized behavior/safety communication."
        ]
      }
    ],
    checkpoint: {
      prompt: "What should trigger immediate multidisciplinary review in daily operations?",
      options: [
        "Routine activity-calendar refresh.",
        "Patterned behavior change and safety events.",
        "Any routine tour inquiry."
      ],
      answer: 1,
      rationale: "Escalating behavior/safety signals require rapid cross-functional intervention."
    }
  },
  {
    id: "m8",
    title: "Sacramento & Oregon Sites",
    duration: "30 min",
    focus: "Apply course principles to Chancellor's actual location footprint and operating differences.",
    outcomes: [
      "Understand facility class and capacity differences across sites.",
      "Identify which policies can be shared and which must be location-specific.",
      "Translate site profile differences into practical KPI and risk adjustments."
    ],
    exercise: [
      "Create a one-page site strategy sheet for each community.",
      "Define top 3 risks and top 3 opportunities by site for the next 2 quarters."
    ],
    sections: [
      {
        title: "Chancellor Site Snapshot",
        table: {
          headers: ["Community", "State", "Class", "Licensed Beds", "Memory Units"],
          rows: [
            ["Revere Court of Sacramento", "CA", "RCFE", "72", "72"],
            ["Maple Valley Memory Care", "OR", "ALF", "60", "60"],
            ["Fircrest Senior Living", "OR", "RCF", "52", "20"],
            ["Cherrywood Memory Care", "OR", "ALF", "78", "58"]
          ]
        }
      },
      {
        title: "Operational Contrast",
        bullets: [
          "Revere runs under California RCFE framework and Sacramento market dynamics.",
          "Oregon sites include mixed class structures and different memory-unit concentration.",
          "Fircrest's mixed profile requires different staffing and occupancy modeling than fully memory-dedicated communities."
        ]
      },
      {
        title: "Execution Priority",
        note: "Do not deploy one static playbook. Use a common operating framework with site-level controls for staffing, compliance, and payer assumptions."
      }
    ],
    checkpoint: {
      prompt: "Why does Fircrest require a different operating planning approach than a 100% memory-unit community?",
      options: [
        "It is a California site.",
        "It has a mixed bed profile and lower memory-unit share.",
        "It cannot participate in any payer pathway."
      ],
      answer: 1,
      rationale: "Capacity mix changes staffing, programming, and revenue planning logic."
    }
  },
  {
    id: "m9",
    title: "Compliance & Quality",
    duration: "40 min",
    focus: "Build an audit-ready quality and compliance operating system instead of ad hoc remediation.",
    outcomes: [
      "Understand survey and enforcement mechanics at a practical level.",
      "Create a correction and prevention workflow after deficiencies.",
      "Build monthly/quarterly QA cycles that catch issues early."
    ],
    exercise: [
      "Design a deficiency-response template with owner, due date, and verification field.",
      "Stand up a monthly QA dashboard with incident, medication, training, and care-plan controls."
    ],
    sections: [
      {
        title: "Inspection and Deficiency Mechanics",
        bullets: [
          "Survey findings often cluster around documentation, medication records, and training controls.",
          "Serious events can escalate from corrective actions to penalties or licensure constraints.",
          "Plan-of-correction quality determines whether issues are truly resolved or recur."
        ]
      },
      {
        title: "QA Cadence",
        table: {
          headers: ["Control", "Cadence", "Owner"],
          rows: [
            ["Training completion audit", "Monthly", "Administrator / HR"],
            ["Medication and PRN documentation audit", "Monthly", "Clinical leadership"],
            ["Care-plan quality review", "Quarterly minimum", "Nursing + memory care leadership"],
            ["Incident trend review", "Monthly", "QA committee"],
            ["Mock survey walkthrough", "Quarterly", "Regional + site leadership"]
          ]
        }
      },
      {
        title: "Mandatory Reporting Discipline",
        bullets: [
          "Define what is reportable, by whom, and within what timeline.",
          "Use event logs with timestamped escalation and closure evidence.",
          "Train shift leaders on first-hour reporting responsibilities."
        ]
      }
    ],
    checkpoint: {
      prompt: "What is the most common preventable deficiency theme in memory-care operations?",
      options: [
        "Landscape design aesthetics.",
        "Documentation quality gaps and incomplete follow-through.",
        "Use of digital calendars."
      ],
      answer: 1,
      rationale: "Documentation and follow-through failures are frequent and operationally preventable."
    }
  },
  {
    id: "m10",
    title: "Emerging Trends & Treatments",
    duration: "35 min",
    focus: "Understand treatment, diagnostics, and technology changes that could reshape dementia-care referral and operations.",
    outcomes: [
      "Understand why disease-modifying therapy news matters operationally even for residential providers.",
      "Track diagnostics and technology developments that alter family expectations and care planning.",
      "Build a trend-monitoring routine without overreacting to hype cycles."
    ],
    exercise: [
      "Create a trend watchlist with evidence level, potential impact, and action owner.",
      "Prepare a family-facing FAQ on current therapies, realistic expectations, and community coordination."
    ],
    sections: [
      {
        title: "Therapies and Referral Dynamics",
        bullets: [
          "Disease-modifying therapies are most relevant in earlier disease stages.",
          "Residential operators still need literacy because families ask therapy-specific questions.",
          "Referral timing may shift as community and medical pathways evolve."
        ]
      },
      {
        title: "Diagnostics and Technology",
        bullets: [
          "Improved diagnostics can support earlier and more precise care-path planning.",
          "Technology supports (sensors, decision support, documentation aids) can reduce missed signals.",
          "Adoption should be tied to measurable safety, quality, or labor outcomes."
        ]
      },
      {
        title: "2026+ Operator Outlook",
        table: {
          headers: ["Trend", "Potential Impact", "Operator Action"],
          rows: [
            ["Demographic demand growth", "Sustained pressure on capacity and staffing", "Strengthen hiring, retention, and admissions discipline"],
            ["Payment-model experimentation", "Changing referral and coordination economics", "Track policy updates and adjust models quarterly"],
            ["AI-enabled workflow tools", "Potential efficiency and quality improvements", "Pilot narrowly with outcome metrics before scaling"]
          ]
        }
      }
    ],
    checkpoint: {
      prompt: "Why should memory-care operators follow treatment and diagnostic innovation if most residents are later-stage?",
      options: [
        "It has no operational relevance.",
        "It influences referral timing, family expectations, and care coordination pathways.",
        "It automatically replaces residential care demand."
      ],
      answer: 1,
      rationale: "Innovation changes upstream behavior even when residential care remains essential."
    }
  }
];

const industryTopics = [
  {
    id: "continuum",
    name: "Care Continuum",
    summary: "Memory care sits inside a broader continuum that includes home/community services, assisted living, residential care, and nursing-level settings.",
    keyPoints: [
      "The operating model changes as resident acuity rises.",
      "Admission and retention criteria drive clinical and staffing complexity.",
      "Transitions are unavoidable; planning for them is a core operator skill."
    ],
    applyNow: [
      "Map your top 3 referral sources and likely next-level transfer destinations.",
      "Document escalation criteria that trigger reassessment or transfer planning."
    ]
  },
  {
    id: "economics",
    name: "Economics & Value",
    summary: "Industry economics are driven by occupancy, rate, labor productivity, clinical quality, and reputation.",
    keyPoints: [
      "Labor is commonly the largest controllable expense category.",
      "Revenue quality depends on both rate strategy and resident mix.",
      "Cap rates connect operational risk to enterprise value."
    ],
    applyNow: [
      "Set monthly thresholds for occupancy, overtime, and agency dependence.",
      "Track margin impact from one-point changes in occupancy and labor cost."
    ]
  },
  {
    id: "payer-flow",
    name: "Payer Flow",
    summary: "Memory care revenue is usually a blend of private pay, long-term care insurance, and state-program pathways where available.",
    keyPoints: [
      "Private pay often remains the base revenue channel in memory care.",
      "Medicaid pathways are state-specific and program-specific.",
      "Contract language and eligibility rules must be validated before forecasting."
    ],
    applyNow: [
      "Build one payer map for California RCFE and one for each Oregon site type.",
      "Maintain an assumptions register that ties each rate to a source document."
    ]
  },
  {
    id: "regulation",
    name: "Regulatory Exposure",
    summary: "Operators face multi-layered oversight from state licensing, resident rights frameworks, labor rules, and payer program obligations.",
    keyPoints: [
      "Cross-state operators need separate policy libraries by jurisdiction.",
      "Training, disclosure, incident response, and documentation are recurring audit themes.",
      "Ownership and transaction rules have tightened in both Oregon and California."
    ],
    applyNow: [
      "Create a jurisdiction-specific compliance calendar with named owners.",
      "Run quarterly mock audits focused on common survey failure points."
    ]
  },
  {
    id: "deals",
    name: "Transactions & Growth",
    summary: "Growth decisions depend on local demand, staffing feasibility, reimbursement reliability, and regulatory transaction risk.",
    keyPoints: [
      "Deal diligence must include licensure, quality, staffing, and payer-contract integrity.",
      "Small documentation gaps can become significant post-close liabilities.",
      "Integration speed is limited by workforce stability and policy harmonization."
    ],
    applyNow: [
      "Use a pre-close checklist that includes resident care-plan and incident trend review.",
      "Stage integration over 90 days with explicit risk controls."
    ]
  },
  {
    id: "risk-signals",
    name: "Risk Signals",
    summary: "Early detection of operational drift is essential in memory care because quality and financial impacts can compound quickly.",
    keyPoints: [
      "Repeated incidents, staffing churn, and rushed admissions are leading indicators.",
      "Family communication breakdown often precedes reputation and occupancy pressure.",
      "High overtime and high turnover together usually signal process strain."
    ],
    applyNow: [
      "Define 10 early-warning indicators and weekly review cadence.",
      "Assign escalation actions for each signal at yellow and red thresholds."
    ]
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
    paymentChannels: ["Private pay", "Medicaid participation shown in public record"],
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
    paymentChannels: ["Private pay", "Medicaid participation shown in public record"],
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
    paymentChannels: ["Private pay", "Medicaid participation shown in public record"],
    opsFocus: "Run a high-capacity ALF memory operation with close tracking of staffing stability, medication workflow consistency, and occupancy conversion."
  }
];

const finalQuiz = [
  {
    prompt: "What is the core intent of this course?",
    options: [
      "Only teach generic industry terms.",
      "Blend industry knowledge with practical operation of Chancellor communities.",
      "Only teach one state's licensing rules."
    ],
    answer: 1
  },
  {
    prompt: "In valuation terms, what is the typical effect of cap-rate expansion if NOI does not change?",
    options: ["Value declines", "Value rises", "No directional effect"],
    answer: 0
  },
  {
    prompt: "Which revenue channel most commonly anchors residential memory care economics?",
    options: ["Private pay", "Medicare Part B professional billing", "MA benchmark payments to the community"],
    answer: 0
  },
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
    prompt: "Why is one shared compliance checklist risky across Sacramento and Oregon sites?",
    options: [
      "Building age is different.",
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
    prompt: "In memory care operations, what is often the largest controllable expense bucket?",
    options: ["Labor", "Office supplies", "Property taxes"],
    answer: 0
  },
  {
    prompt: "Which statement is the best caution for California ALW assumptions?",
    options: [
      "ALW assumptions require no provider validation.",
      "ALW pathways are program-specific and require validation before budgeting.",
      "ALW always mirrors private-pay structure."
    ],
    answer: 1
  },
  {
    prompt: "What should trigger immediate multidisciplinary review?",
    options: ["Routine calendar updates", "Patterned behavior change with safety events", "Any tour request"],
    answer: 1
  },
  {
    prompt: "Which KPI bundle is most useful for memory-care operator control?",
    options: [
      "Occupancy, staffing stability, incident trend, and survey-task completion",
      "Only monthly gross revenue",
      "Only marketing leads"
    ],
    answer: 0
  },
  {
    prompt: "Why does Fircrest need different planning logic than a 100% memory-unit site?",
    options: [
      "It is in California.",
      "It has a mixed bed profile with lower memory-unit share.",
      "It has no payer pathways."
    ],
    answer: 1
  },
  {
    prompt: "What is a frequent preventable deficiency theme in residential memory care?",
    options: ["Landscape branding", "Documentation quality and follow-through gaps", "Website speed"],
    answer: 1
  },
  {
    prompt: "Why should operators monitor treatment and diagnostic innovation?",
    options: [
      "It has no relevance to residential care.",
      "It can influence referral timing, family expectations, and care coordination.",
      "It automatically eliminates residential demand."
    ],
    answer: 1
  }
];

const storageKeys = {
  completed: "chancellor_course_completed_v3",
  notes: "chancellor_course_notes_v3"
};

const state = {
  activeModuleId: modules[0].id,
  completed: new Set(),
  notes: {},
  activeIndustryId: industryTopics[0].id,
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

const industryControlsEl = document.getElementById("industry-controls");
const industryDetailEl = document.getElementById("industry-detail");

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
  renderIndustryLab();
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

  industryControlsEl.addEventListener("click", (event) => {
    const tab = event.target.closest(".industry-tab");
    if (!tab) {
      return;
    }

    state.activeIndustryId = tab.dataset.topicId;
    renderIndustryLab();
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
        <li class="module-card ${active ? "active" : ""}" style="animation-delay: ${index * 70}ms;">
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

  const sectionsHTML = (module.sections || [])
    .map((section) => {
      const bulletHTML = section.bullets
        ? `<ul>${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";

      const tableHTML = section.table ? renderTable(section.table) : "";

      return `
        <section class="content-section">
          <h4>${section.title}</h4>
          ${section.body ? `<p>${section.body}</p>` : ""}
          ${section.callout ? `<p class="inline-callout">${section.callout}</p>` : ""}
          ${bulletHTML}
          ${tableHTML}
          ${section.note ? `<p class="section-note">${section.note}</p>` : ""}
        </section>
      `;
    })
    .join("");

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

    <div class="module-sections">
      ${sectionsHTML}
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
      <textarea id="module-note" placeholder="Write your industry or operating notes, assumptions, and action items here.">${escapeHTML(noteValue)}</textarea>
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

function renderTable(table) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>${table.headers.map((header) => `<th>${header}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows
            .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
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

function renderIndustryLab() {
  industryControlsEl.innerHTML = industryTopics
    .map(
      (topic) => `
      <button
        class="industry-tab ${topic.id === state.activeIndustryId ? "active" : ""}"
        type="button"
        data-topic-id="${topic.id}"
      >
        ${topic.name}
      </button>
    `
    )
    .join("");

  const topic = industryTopics.find((entry) => entry.id === state.activeIndustryId) || industryTopics[0];

  industryDetailEl.innerHTML = `
    <h3>${topic.name}</h3>
    <p class="industry-summary">${topic.summary}</p>
    <div class="industry-grid">
      <section class="industry-card">
        <h4>Core Points</h4>
        <ul>
          ${topic.keyPoints.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </section>
      <section class="industry-card">
        <h4>Apply This Week</h4>
        <ul>
          ${topic.applyNow.map((step) => `<li>${step}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;
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
    score >= 80 ? "Pass" : "Review modules 2-9 and retry"
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
