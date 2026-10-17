export interface Question {
  id: string;
  week: number;
  weekTitle: string;
  question: string;
  options: string[];
  answer: string;
}

export interface WeekMeta {
  week: number;
  title: string;
  assignmentTitle: string;
  questionCount: number;
}

export const WEEKS_META: WeekMeta[] = [
  { week: 0, title: "Week 0", assignmentTitle: "Assignment 0", questionCount: 10 },
  { week: 1, title: "Week 1", assignmentTitle: "Assignment 1", questionCount: 10 },
  { week: 2, title: "Week 2", assignmentTitle: "Assignment 2", questionCount: 10 },
  { week: 3, title: "Week 3", assignmentTitle: "Assignment 3", questionCount: 10 },
  { week: 4, title: "Week 4", assignmentTitle: "Assignment 4", questionCount: 10 },
  { week: 5, title: "Week 5", assignmentTitle: "Assignment 5", questionCount: 10 },
  { week: 6, title: "Week 6", assignmentTitle: "Assignment 6", questionCount: 10 },
  { week: 7, title: "Week 7", assignmentTitle: "Assignment 7", questionCount: 10 },
  { week: 8, title: "Week 8", assignmentTitle: "Assignment 8", questionCount: 10 },
  { week: 9, title: "Week 9", assignmentTitle: "Assignment 9", questionCount: 10 },
  { week: 10, title: "Week 10", assignmentTitle: "Assignment 10", questionCount: 10 },
  { week: 11, title: "Week 11", assignmentTitle: "Assignment 11", questionCount: 10 },
  { week: 12, title: "Week 12", assignmentTitle: "Assignment 12", questionCount: 10 }
];

export const ALL_QUESTIONS: readonly Question[] = [
  // WEEK 0 — ASSIGNMENT 0
  {
    id: "w0q1",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Which approach in ecology uses models and predictions to simplify reality and identify patterns?",
    options: ["Theoretical ecology", "Field ecology", "Laboratory ecology", "Descriptive conservation"],
    answer: "Theoretical ecology"
  },
  {
    id: "w0q2",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Which statement best describes the role of forests in climate regulation?",
    options: ["Forests store carbon and vegetation influences local temperature and moisture", "Forests prevent all climatic variation", "Forests regulate only animal populations", "Forests affect climate only through visible wildlife"],
    answer: "Forests store carbon and vegetation influences local temperature and moisture"
  },
  {
    id: "w0q3",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Genetic diversity refers to:",
    options: ["Variation among ecosystems", "Variation in ecological roles", "Variation within a species", "Variation among climate zones"],
    answer: "Variation within a species"
  },
  {
    id: "w0q4",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Ecosystem diversity means:",
    options: ["Diversity of genes within one population", "Variety of ecosystems and habitats across space", "Number of individuals of one species", "Number of economic activities in a region"],
    answer: "Variety of ecosystems and habitats across space"
  },
  {
    id: "w0q5",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Which ecological support is directly connected with food security?",
    options: ["Pollination and nutrient cycling", "Road construction and industrial output", "Political boundaries and administration", "Urban zoning and traffic control"],
    answer: "Pollination and nutrient cycling"
  },
  {
    id: "w0q6",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Why is pollution difficult to manage in sustainability terms?",
    options: ["Waste disappears when it leaves human sight", "Pollution may move through air, water, soil, food chains, and living bodies", "Pollution affects only the point where it is released", "Pollution has no connection with ecosystems"],
    answer: "Pollution may move through air, water, soil, food chains, and living bodies"
  },
  {
    id: "w0q7",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Which are the three pillars of sustainability?",
    options: ["Genetic, species, and ecosystem sustainability", "Habitat, population, and community sustainability", "Food, water, and climate sustainability", "Environmental, social, and economic sustainability"],
    answer: "Environmental, social, and economic sustainability"
  },
  {
    id: "w0q8",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "What is environmental injustice?",
    options: ["Equal sharing of environmental benefits and burdens", "A situation where vulnerable communities often bear more pollution, risk, or reduced access to clean resources", "The scientific study of population regulation", "The natural variation of climate across regions"],
    answer: "A situation where vulnerable communities often bear more pollution, risk, or reduced access to clean resources"
  },
  {
    id: "w0q9",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Functional diversity refers to:",
    options: ["Variety in ecological roles and traits", "Variety in political institutions", "Variety in land ownership systems", "Variety in human population size"],
    answer: "Variety in ecological roles and traits"
  },
  {
    id: "w0q10",
    week: 0,
    weekTitle: "Week 0 — Assignment 0",
    question: "Which approach in ecology is most directly associated with controlled experiments and systematic manipulation of variables?",
    options: ["Field ecology", "Laboratory ecology", "Landscape observation", "Social sustainability"],
    answer: "Laboratory ecology"
  },

  // WEEK 1 — ASSIGNMENT 1
  {
    id: "w1q1",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "Which of the following is included in invisible biodiversity?",
    options: ["Mountains and rivers", "Genes, microbes, fungi, soil life, and ecological processes", "Only large animals hidden in forests", "Only plants growing below tree cover"],
    answer: "Genes, microbes, fungi, soil life, and ecological processes"
  },
  {
    id: "w1q2",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "What does the term distribution refer to in ecology?",
    options: ["How organisms reproduce", "How organisms compete", "Where organisms occur", "How organisms obtain food"],
    answer: "Where organisms occur"
  },
  {
    id: "w1q3",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "How do wetlands contribute to water security?",
    options: ["By increasing fossil fuel availability", "By storing and filtering water", "By eliminating the need for forests", "By replacing all human water management"],
    answer: "By storing and filtering water"
  },
  {
    id: "w1q4",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "Which statement best describes a habitat?",
    options: ["A visually attractive natural location", "A fixed geographical point where a species was once recorded", "A place containing only physical conditions", "A functionally suitable setting in which an organism can live"],
    answer: "A functionally suitable setting in which an organism can live"
  },
  {
    id: "w1q5",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "Why is ecology not identical to environmental concern?",
    options: ["Ecology rejects ethical thinking completely", "Environmental concern is based only on laboratory experiments", "Ecology deals only with non-living matter", "Ecology provides scientific evidence and explanation, while concern is a social or ethical response"],
    answer: "Ecology provides scientific evidence and explanation, while concern is a social or ethical response"
  },
  {
    id: "w1q6",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "Which of the following is an example of a community interaction?",
    options: ["Rainfall entering the soil", "Temperature changing across seasons", "Predation between two species", "A rock weathering over time"],
    answer: "Predation between two species"
  },
  {
    id: "w1q7",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "What is the biosphere?",
    options: ["A single habitat suitable for one species", "The global sum of life and living systems", "A local group of interacting populations", "A laboratory model of ecological processes"],
    answer: "The global sum of life and living systems"
  },
  {
    id: "w1q8",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "A community in ecology means:",
    options: ["Populations of different species living together and interacting", "Individuals of one species competing in one location", "Physical conditions without living organisms", "A single organism responding to environmental stress"],
    answer: "Populations of different species living together and interacting"
  },
  {
    id: "w1q9",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "What are ecosystem services?",
    options: ["The benefits people obtain from ecosystems", "The laws created to protect forests", "The instruments used for field surveys", "The number of species in an area"],
    answer: "The benefits people obtain from ecosystems"
  },
  {
    id: "w1q10",
    week: 1,
    weekTitle: "Week 1 — Assignment 1",
    question: "At the organism level, ecology focuses on:",
    options: ["A single individual living being", "All ecosystems on Earth", "Only non-living environmental conditions", "The total number of species in a biome"],
    answer: "A single individual living being"
  },

  // WEEK 2 — ASSIGNMENT 2
  {
    id: "w2q1",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What does functional diversity refer to?",
    options: ["The total market value of ecosystem products", "Different species performing different ecological roles", "The number of development projects in a region", "The use of one indicator for multiple systems"],
    answer: "Different species performing different ecological roles"
  },
  {
    id: "w2q2",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What is a trade-off in sustainability analysis?",
    options: ["A situation where real benefits and real harms occur together", "A decision that supports all three pillars equally", "A case where ecological damage has no social effect", "A method for avoiding evidence-based assessment"],
    answer: "A situation where real benefits and real harms occur together"
  },
  {
    id: "w2q3",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What is the main role of regulating services?",
    options: ["Reducing risks and stabilising conditions through ecological processes", "Supplying only direct material goods", "Replacing social indicators in development planning", "Measuring ecosystem value through one composite score"],
    answer: "Reducing risks and stabilising conditions through ecological processes"
  },
  {
    id: "w2q4",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What does environmental sustainability primarily involve?",
    options: ["Protecting ecological processes, biodiversity, resources, and resilience", "Increasing production without measuring ecological effects", "Ensuring compensation after environmental damage", "Treating nature only as a source of market products"],
    answer: "Protecting ecological processes, biodiversity, resources, and resilience"
  },
  {
    id: "w2q5",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "Why can wetlands be understood as natural infrastructure?",
    options: ["They store water, slow flows, filter contaminants, and support habitat", "They are empty spaces suitable for quick conversion", "They only provide scenic value to nearby residents", "Their services can always be fully replaced by drainage systems"],
    answer: "They store water, slow flows, filter contaminants, and support habitat"
  },
  {
    id: "w2q6",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What helped many early societies understand environmental limits?",
    options: ["Direct ecological feedback from land, water, seasons, and resource use", "International environmental agreements", "Industrial monitoring systems", "Modern composite indicators"],
    answer: "Direct ecological feedback from land, water, seasons, and resource use"
  },
  {
    id: "w2q7",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What should a good sustainability indicator do?",
    options: ["Count whatever is easiest to measure", "Replace interpretation with numerical certainty", "Ignore context to allow simple comparison", "Represent important realities, be understandable, and support action"],
    answer: "Represent important realities, be understandable, and support action"
  },
  {
    id: "w2q8",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What made industrialization different from earlier forms of development?",
    options: ["It removed the need for natural resources", "It made ecological damage immediately visible everywhere", "It reduced the distance between consumption and resource sources", "It increased speed, scale, and distance, making damage easier to hide"],
    answer: "It increased speed, scale, and distance, making damage easier to hide"
  },
  {
    id: "w2q9",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What does an ecological threshold indicate?",
    options: ["A point where social benefits become impossible to measure", "A market price at which ecosystem services become profitable", "A limit beyond which ecological change may become unsafe or difficult to reverse", "A planning method that removes uncertainty from sustainability decisions"],
    answer: "A limit beyond which ecological change may become unsafe or difficult to reverse"
  },
  {
    id: "w2q10",
    week: 2,
    weekTitle: "Week 2 — Assignment 2",
    question: "What does natural capital accounting emphasise?",
    options: ["Nature should be valued only when it produces goods for markets", "Forests, soils, water systems, wetlands, and biodiversity have real value", "Economic decisions should ignore ecological functions", "Market price always captures the full value of ecosystems"],
    answer: "Forests, soils, water systems, wetlands, and biodiversity have real value"
  },

  // WEEK 3 — ASSIGNMENT 3
  {
    id: "w3q1",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "Why do specialist species often decline earlier under ecological pressure?",
    options: ["They can easily shift food and habitat use", "They depend on narrow habitat, food, or breeding conditions", "They reproduce faster than generalist species", "They are always disturbance-tolerant"],
    answer: "They depend on narrow habitat, food, or breeding conditions"
  },
  {
    id: "w3q2",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "What does habitat fragmentation involve?",
    options: ["Only pollution of a single water body", "Breaking a natural landscape into smaller isolated parcels within a human-dominated matrix", "Complete removal of all species from a region", "Natural growth of continuous forest corridors"],
    answer: "Breaking a natural landscape into smaller isolated parcels within a human-dominated matrix"
  },
  {
    id: "w3q3",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "Why is soil erosion a habitat degradation problem?",
    options: ["It adds nutrients to all rivers", "It increases topsoil depth", "It removes biologically active topsoil and can cause sedimentation in aquatic habitats", "It prevents all landslides permanently"],
    answer: "It removes biologically active topsoil and can cause sedimentation in aquatic habitats"
  },
  {
    id: "w3q4",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "What are ghost nets?",
    options: ["Nets used to protect wildlife from predators", "Lost, abandoned, or discarded fishing nets that continue trapping marine life", "Nets used only in freshwater farming", "Natural coral structures that trap plastic"],
    answer: "Lost, abandoned, or discarded fishing nets that continue trapping marine life"
  },
  {
    id: "w3q5",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "Why can a renewable biological resource become effectively non-renewable?",
    options: ["Because all renewable resources stop reproducing naturally", "Because legal use automatically destroys all species", "Because removal may exceed the resource's capacity to regenerate", "Because only non-living resources can be harvested"],
    answer: "Because removal may exceed the resource's capacity to regenerate"
  },
  {
    id: "w3q6",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "What is a native species?",
    options: ["A species introduced for human use", "A species that survives only in captivity", "A species that occurs naturally in a region and is part of its long-term ecological community", "Any species that spreads aggressively"],
    answer: "A species that occurs naturally in a region and is part of its long-term ecological community"
  },
  {
    id: "w3q7",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "What is the key ecological principle behind sustainable use?",
    options: ["Removal may exceed regeneration if demand is high", "Removal must remain below regeneration capacity", "Any legal extraction is sustainable", "Biological renewal is unaffected by habitat quality"],
    answer: "Removal must remain below regeneration capacity"
  },
  {
    id: "w3q8",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "Why is light pollution ecologically significant?",
    options: ["It affects only electricity consumption", "It improves all nocturnal behaviour", "It alters natural day-night conditions, orientation, timing, and activity patterns", "It prevents all insect movement"],
    answer: "It alters natural day-night conditions, orientation, timing, and activity patterns"
  },
  {
    id: "w3q9",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "Why are energy systems described as having ecological footprints?",
    options: ["They require only sunlight and wind", "They require land, water, materials, mines, dams, roads, drilling, or transmission infrastructure", "They never cause habitat change", "They affect only urban areas"],
    answer: "They require land, water, materials, mines, dams, roads, drilling, or transmission infrastructure"
  },
  {
    id: "w3q10",
    week: 3,
    weekTitle: "Week 3 — Assignment 3",
    question: "What is overexploitation?",
    options: ["Any use of biological resources", "Use of biological resources beyond their capacity to regenerate", "Complete protection of all species from use", "Natural increase in wildlife populations"],
    answer: "Use of biological resources beyond their capacity to regenerate"
  },

  // WEEK 4 — ASSIGNMENT 4
  {
    id: "w4q1",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "What does overexploitation mean?",
    options: ["The movement of species into new habitats", "Taking biological resources faster than nature can replace them", "The recycling of nutrients by decomposers", "The restoration of extinct species through cloning"],
    answer: "Taking biological resources faster than nature can replace them"
  },
  {
    id: "w4q2",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "What is the classical period used for calculating climate averages?",
    options: ["5 years", "10 years", "20 years", "30 years"],
    answer: "30 years"
  },
  {
    id: "w4q3",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "Why are specialist species especially vulnerable to climate change?",
    options: ["They always have large home ranges", "They reproduce faster than generalists", "They have narrow ecological requirements and few alternatives when conditions change", "They are unaffected by changes in food quality"],
    answer: "They have narrow ecological requirements and few alternatives when conditions change"
  },
  {
    id: "w4q4",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "Under Shelford's Law of Tolerance, what happens when an ecological condition falls outside an organism's coping capacity?",
    options: ["The population reaches its optimum level", "The species immediately adapts genetically", "The species shifts into its most suitable range", "The population drops to zero"],
    answer: "The population drops to zero"
  },
  {
    id: "w4q5",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "What does the IUCN Red List category Extinct in the Wild mean?",
    options: ["The species has many stable wild populations", "The species has no known individuals anywhere", "The species survives only in zoos, seed banks, or other human-managed settings", "The species is common but declining slowly"],
    answer: "The species survives only in zoos, seed banks, or other human-managed settings"
  },
  {
    id: "w4q6",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "Which set correctly identifies major climatic changes affecting biodiversity?",
    options: ["Soil erosion, mining, hunting, and disease", "Rising temperature, changing rainfall patterns, more frequent extremes, and shifting seasons", "Urbanisation, overgrazing, logging, and fishing", "Mutation, migration, predation, and reproduction"],
    answer: "Rising temperature, changing rainfall patterns, more frequent extremes, and shifting seasons"
  },
  {
    id: "w4q7",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "What is genetic rescue?",
    options: ["Introducing individuals from another population to increase genetic diversity and reduce inbreeding problems", "Removing all predators from a protected area", "Converting a dryland into agricultural land", "Increasing pollutant concentration in predators"],
    answer: "Introducing individuals from another population to increase genetic diversity and reduce inbreeding problems"
  },
  {
    id: "w4q8",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "What is eutrophication?",
    options: ["Rapid algal growth triggered by excess nutrients, leading to oxygen decline and harm to aquatic life", "Movement of animals toward cooler latitudes", "Recovery of forests after fire", "A process of genetic rescue in small populations"],
    answer: "Rapid algal growth triggered by excess nutrients, leading to oxygen decline and harm to aquatic life"
  },
  {
    id: "w4q9",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "What does the Allee effect describe?",
    options: ["Increased survival when nutrient runoff is high", "Reduced shell-building due to seawater chemistry", "Faster adaptation in fragmented landscapes", "Failure of survival or reproduction when population size or density becomes too low"],
    answer: "Failure of survival or reproduction when population size or density becomes too low"
  },
  {
    id: "w4q10",
    week: 4,
    weekTitle: "Week 4 — Assignment 4",
    question: "In a nutrient cycle, what role do decomposers perform?",
    options: ["They prevent nutrients from entering food webs", "They convert all nutrients into fossil fuels", "They remove producers from ecosystems", "They break down dead material and wastes, returning nutrients to the nutrient pool"],
    answer: "They break down dead material and wastes, returning nutrients to the nutrient pool"
  },

  // WEEK 5 — ASSIGNMENT 5
  {
    id: "w5q1",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "What is human-wildlife conflict?",
    options: ["A situation where wildlife needs or behaviour clash with human interests and lead to damage, fear, injury, loss, or retaliation", "Any peaceful interaction between humans and wildlife", "The presence of wildlife in a landscape without any cost", "A condition where all species remain inside protected areas"],
    answer: "A situation where wildlife needs or behaviour clash with human interests and lead to damage, fear, injury, loss, or retaliation"
  },
  {
    id: "w5q2",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "Why can a protected area alone fail to secure a species over time?",
    options: ["Protected areas always reduce biodiversity", "Species cannot survive inside reserves", "Human activity is absent around all reserves", "Many species move beyond reserves for food, water, mates, or seasonal habitat"],
    answer: "Many species move beyond reserves for food, water, mates, or seasonal habitat"
  },
  {
    id: "w5q3",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "What is option value in biodiversity valuation?",
    options: ["The value of replacing ecosystems with infrastructure", "The value of using only one species now", "The benefit of keeping biodiversity available for possible future uses", "The cost of removing biodiversity from markets"],
    answer: "The benefit of keeping biodiversity available for possible future uses"
  },
  {
    id: "w5q4",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "What are examples of non-timber forest products?",
    options: ["Fruits, nuts, resins, medicinal plants, bamboo, and fibres", "Roads, drains, fences, and bridges", "Coal, cement, steel, and petroleum", "Cars, buildings, markets, and pipelines"],
    answer: "Fruits, nuts, resins, medicinal plants, bamboo, and fibres"
  },
  {
    id: "w5q5",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "What is microclimate regulation by vegetation?",
    options: ["Reducing heat stress by shade, lower surface temperatures, and humidity influence", "Increasing heat stress by removing tree cover", "Preventing all seasonal variation in climate", "Replacing water regulation with pest regulation"],
    answer: "Reducing heat stress by shade, lower surface temperatures, and humidity influence"
  },
  {
    id: "w5q6",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "Which set represents cultural services of biodiversity?",
    options: ["Flood control, pollination, soil structure, and carbon storage", "Recreation, inspiration, education, heritage, and shared public spaces", "Crop raiding, livestock loss, property damage, and fear", "Compensation, insurance, fences, and early warnings"],
    answer: "Recreation, inspiration, education, heritage, and shared public spaces"
  },
  {
    id: "w5q7",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "What is a major limitation of fortress thinking in conservation?",
    options: ["Not all biodiversity can be isolated from people", "It gives too much importance to shared landscapes", "It ignores the need for protected areas altogether", "It assumes people and wildlife must always interact directly"],
    answer: "Not all biodiversity can be isolated from people"
  },
  {
    id: "w5q8",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "How does biodiversity help regulate water in a landscape?",
    options: ["By stopping rainfall from entering the soil", "By increasing surface runoff in simplified landscapes", "By influencing infiltration, storage, and runoff through vegetation, roots, and living soils", "By eliminating wetlands from human-used areas"],
    answer: "By influencing infiltration, storage, and runoff through vegetation, roots, and living soils"
  },
  {
    id: "w5q9",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "Which factor can make coexistence difficult?",
    options: ["Perfectly equal sharing of all conservation costs", "Inadequate planning of roads, settlements, farms, or infrastructure", "Complete absence of ecological uncertainty", "Guaranteed support from all institutions"],
    answer: "Inadequate planning of roads, settlements, farms, or infrastructure"
  },
  {
    id: "w5q10",
    week: 5,
    weekTitle: "Week 5 — Assignment 5",
    question: "How can biodiversity support physical health?",
    options: ["By increasing polluted water flow", "By removing all disease risk permanently", "By replacing all healthcare systems", "By filtering pollutants, improving air and water quality, and supporting stable ecological regulation"],
    answer: "By filtering pollutants, improving air and water quality, and supporting stable ecological regulation"
  },

  // WEEK 6 — ASSIGNMENT 6
  {
    id: "w6q1",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "Which species concept defines species mainly by niche, resources, and environmental conditions used?",
    options: ["Evolutionary species concept", "Ecological species concept", "Biological species concept", "Morphological species concept"],
    answer: "Ecological species concept"
  },
  {
    id: "w6q2",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "Habitat quality depends mainly on:",
    options: ["Legal status alone", "Whether the habitat appears on a map", "Food, water, shelter, breeding sites, and low disturbance", "Whether only one species is present"],
    answer: "Food, water, shelter, breeding sites, and low disturbance"
  },
  {
    id: "w6q3",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "Genetic diversity refers to:",
    options: ["Variation in hereditary information among individuals and populations", "Difference in species composition between two ecosystems", "Number of habitats across a landscape", "Number of visible traits in a field guide"],
    answer: "Variation in hereditary information among individuals and populations"
  },
  {
    id: "w6q4",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "A biodiversity hotspot combines which three features?",
    options: ["High rainfall, high elevation, and high productivity", "High abundance, low disturbance, and uniform habitat", "High genetic similarity, low endemism, and low threat", "High species richness, high endemism, and significant threat"],
    answer: "High species richness, high endemism, and significant threat"
  },
  {
    id: "w6q5",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "Which barrier acts before fertilization?",
    options: ["Hybrid sterility", "Hybrid breakdown", "Embryo inviability", "Temporal isolation"],
    answer: "Temporal isolation"
  },
  {
    id: "w6q6",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "Allelopathy occurs when:",
    options: ["Animals form groups to avoid predators", "One organism releases chemicals that inhibit another", "Species shift upward in altitude because of warming", "Adjacent populations interbreed around a barrier"],
    answer: "One organism releases chemicals that inhibit another"
  },
  {
    id: "w6q7",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "Gamma diversity refers to:",
    options: ["Diversity within one wetland", "Total diversity across a larger region", "Evenness of individuals among species", "Fitness differences between populations"],
    answer: "Total diversity across a larger region"
  },
  {
    id: "w6q8",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "What does biodiversity mean?",
    options: ["Only the number of large animals in a forest", "Only the number of protected areas in a landscape", "Only variation in climate and soil", "The variety of life within species, among species, and among ecosystems"],
    answer: "The variety of life within species, among species, and among ecosystems"
  },
  {
    id: "w6q9",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "What is speciation?",
    options: ["The seasonal movement of individuals between habitats", "The increase in population size within one area", "The grouping of organisms according to body colour", "The splitting of one lineage into two or more independently evolving species"],
    answer: "The splitting of one lineage into two or more independently evolving species"
  },
  {
    id: "w6q10",
    week: 6,
    weekTitle: "Week 6 — Assignment 6",
    question: "Which idea best describes a species as a scientific concept?",
    options: ["A fixed sentence that applies equally to every organism", "A category based only on visible form", "A flexible tool that may emphasize interbreeding, form, ancestry, or niche", "A group that must always be geographically isolated"],
    answer: "A flexible tool that may emphasize interbreeding, form, ancestry, or niche"
  },

  // WEEK 7 — ASSIGNMENT 7
  {
    id: "w7q1",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "Simple random sampling gives:",
    options: ["Larger units a higher chance of selection", "Every sampling unit an equal chance of selection", "Only remote areas a chance of selection", "Every kth unit after a fixed start without randomness"],
    answer: "Every sampling unit an equal chance of selection"
  },
  {
    id: "w7q2",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "Stratified sampling is especially useful when:",
    options: ["The whole landscape is uniform", "Animal density varies across habitat types", "Complete census is always possible", "Sampling units cannot be mapped"],
    answer: "Animal density varies across habitat types"
  },
  {
    id: "w7q3",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "Which is an example of equipment bias?",
    options: ["Missed detections due to low observer skill", "Faulty calibration of a measuring device", "Dense vegetation hiding animals", "Unrealistic movement assumptions in a model"],
    answer: "Faulty calibration of a measuring device"
  },
  {
    id: "w7q4",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "Bias in wildlife monitoring means:",
    options: ["Random scatter around a true value", "Systematic deviation from the true value", "Higher cost of data collection", "Larger sample size than required"],
    answer: "Systematic deviation from the true value"
  },
  {
    id: "w7q5",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "In camera-trap-based tiger estimation, individual tigers can be identified by:",
    options: ["Herd size", "Nesting banks", "Unique stripe patterns", "Flowering season"],
    answer: "Unique stripe patterns"
  },
  {
    id: "w7q6",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "Which pair represents losses from a population?",
    options: ["Natality and immigration", "Births and recruitment", "Mortality and emigration", "Density and dispersal"],
    answer: "Mortality and emigration"
  },
  {
    id: "w7q7",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "A population in wildlife studies is best understood as which of the following?",
    options: ["All species living in a habitat during one season", "Individuals of the same species in a defined area that are capable of interbreeding", "All animals counted during a field survey", "Individuals of different species using the same corridor"],
    answer: "Individuals of the same species in a defined area that are capable of interbreeding"
  },
  {
    id: "w7q8",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "Which pair represents gains to a population?",
    options: ["Births and immigration", "Deaths and emigration", "Births and deaths", "Immigration and emigration"],
    answer: "Births and immigration"
  },
  {
    id: "w7q9",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "PPS sampling means:",
    options: ["Larger sampling units receive a higher chance of selection", "Every unit has the same chance regardless of size", "Only point transects are used", "Animals are removed after each capture"],
    answer: "Larger sampling units receive a higher chance of selection"
  },
  {
    id: "w7q10",
    week: 7,
    weekTitle: "Week 7 — Assignment 7",
    question: "Sampling intensity is calculated as:",
    options: ["Total animals divided by total area", "Sample units divided by total population units", "Marked animals divided by recaptured animals", "Detection distance divided by transect length"],
    answer: "Sample units divided by total population units"
  },

  // WEEK 8 — ASSIGNMENT 8
  {
    id: "w8q1",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "Which statement best describes conservation genetics?",
    options: ["It studies only visible animal behaviour in protected areas", "It replaces habitat management with captive breeding", "It applies genetic tools to biodiversity protection", "It measures only the age structure of populations"],
    answer: "It applies genetic tools to biodiversity protection"
  },
  {
    id: "w8q2",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "What is allele frequency?",
    options: ["A fixed number of individuals in a population", "A measure of animal movement across habitats", "A record of all chromosomes in one cell", "The proportion of a particular allele among all copies of that gene"],
    answer: "The proportion of a particular allele among all copies of that gene"
  },
  {
    id: "w8q3",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "What are chromosomes?",
    options: ["Short-term environmental pressures on wildlife", "Long DNA-protein structures carrying many genes", "Behavioural adaptations learned during life", "Statistical outputs of viability models"],
    answer: "Long DNA-protein structures carrying many genes"
  },
  {
    id: "w8q4",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "What does fitness mean in evolutionary terms?",
    options: ["Physical strength or speed alone", "Relative reproductive success across generations", "Ability to occupy the largest territory", "Ability to avoid all competition"],
    answer: "Relative reproductive success across generations"
  },
  {
    id: "w8q5",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "What is the founder effect?",
    options: ["A selection process where predators remove weak individuals", "A condition where all individuals have identical chromosomes", "A disease caused by increased heterozygosity", "A new population starting from a few individuals and carrying only part of the original genetic diversity"],
    answer: "A new population starting from a few individuals and carrying only part of the original genetic diversity"
  },
  {
    id: "w8q6",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "Which perspective asks what external pressures made a population small?",
    options: ["Small population paradigm", "Genetic rescue model", "Declining population paradigm", "Outbreeding enhancement model"],
    answer: "Declining population paradigm"
  },
  {
    id: "w8q7",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "Which inheritance pattern occurs when both alleles are fully expressed?",
    options: ["Complete dominance", "Incomplete dominance", "Codominance", "Segregation"],
    answer: "Codominance"
  },
  {
    id: "w8q8",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "Which statement correctly describes phenotype?",
    options: ["It is the hidden genetic constitution of an organism", "It is the observable expression of traits", "It is the total genetic variation of a population", "It is the location of a gene on a chromosome"],
    answer: "It is the observable expression of traits"
  },
  {
    id: "w8q9",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "What is the Allee effect?",
    options: ["A condition where large populations always decline", "A process where all mutations improve fitness", "A method for calculating allele frequency", "Lower survival or reproduction in very small populations because density is too low"],
    answer: "Lower survival or reproduction in very small populations because density is too low"
  },
  {
    id: "w8q10",
    week: 8,
    weekTitle: "Week 8 — Assignment 8",
    question: "What is genetic rescue?",
    options: ["A method of counting chromosomes under a microscope", "Introduction of new genetic variation into small, isolated populations to reduce inbreeding depression and increase fitness", "Removal of all predators from a protected area", "Use of only visually rare animals for captive breeding"],
    answer: "Introduction of new genetic variation into small, isolated populations to reduce inbreeding depression and increase fitness"
  },

  // WEEK 9 — ASSIGNMENT 9
  {
    id: "w9q1",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "What does infectivity mean?",
    options: ["Ability of a pathogen to establish infection after exposure", "Severity of disease caused after symptoms appear", "Probability that a diseased animal dies", "Number of carcasses found in an outbreak zone"],
    answer: "Ability of a pathogen to establish infection after exposure"
  },
  {
    id: "w9q2",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "Which statement best describes wildlife health in conservation management?",
    options: ["A fixed condition measured only by absence of visible injury", "A veterinary issue unrelated to population survival", "A dynamic state involving normal function at individual, population, and ecosystem levels", "A measure based only on body size and population count"],
    answer: "A dynamic state involving normal function at individual, population, and ecosystem levels"
  },
  {
    id: "w9q3",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "What is a dead-end host?",
    options: ["A host that increases pathogen abundance", "A host that becomes infected but does not sustain further transmission", "A host that always acts as a biological vector", "A host that supports the complete adult parasite cycle"],
    answer: "A host that becomes infected but does not sustain further transmission"
  },
  {
    id: "w9q4",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "What is disease in wildlife health assessment?",
    options: ["A condition that disrupts normal function and may affect behavior, physiology, reproduction, or survival", "A temporary injury that always results from external trauma", "A normal ecological process that never affects conservation outcomes", "A population increase caused by improved habitat quality"],
    answer: "A condition that disrupts normal function and may affect behavior, physiology, reproduction, or survival"
  },
  {
    id: "w9q5",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "Which action is central to anthrax management in wildlife areas?",
    options: ["Opening carcasses immediately for visual diagnosis", "Careful carcass handling to reduce environmental contamination", "Increasing scavenger access to remove infected remains", "Moving infected carcasses to shared grazing areas"],
    answer: "Careful carcass handling to reduce environmental contamination"
  },
  {
    id: "w9q6",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "Which description best fits an acute disease?",
    options: ["Slow onset with subtle signs over many years", "Rapid onset, short duration, and possible sudden mortality events", "Low disease burden with no visible population impact", "Permanent genetic condition passed through inheritance only"],
    answer: "Rapid onset, short duration, and possible sudden mortality events"
  },
  {
    id: "w9q7",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "What does sporadic disease occurrence mean?",
    options: ["Disease that persists regularly in a local reservoir", "Irregular and isolated disease occurrence without a predictable pattern", "Sudden mass mortality across multiple countries", "Continuous spread through every susceptible host"],
    answer: "Irregular and isolated disease occurrence without a predictable pattern"
  },
  {
    id: "w9q8",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "What is horizontal transmission?",
    options: ["Transmission between individuals of the same generation", "Transmission only through inherited genetic traits", "Transmission only through contaminated soil", "Transmission only from domestic animals to wildlife"],
    answer: "Transmission between individuals of the same generation"
  },
  {
    id: "w9q9",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "Which is an example of a precipitating factor?",
    options: ["Old age lowering resistance over time", "Strong immunity reducing spread", "Migration stress triggering disease expression in already susceptible animals", "Genetic diversity improving population resilience"],
    answer: "Migration stress triggering disease expression in already susceptible animals"
  },
  {
    id: "w9q10",
    week: 9,
    weekTitle: "Week 9 — Assignment 9",
    question: "What does virulence describe?",
    options: ["Number of species living in the disease area", "Proportion of animals with background immunity", "Severity of disease caused by a pathogen", "Amount of rainfall before an outbreak"],
    answer: "Severity of disease caused by a pathogen"
  },

  // WEEK 10 — ASSIGNMENT 10
  {
    id: "w10q1",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "Why should captive enclosures be habitat-like?",
    options: ["To reduce documentation requirements", "To support natural movement, behaviour, welfare, health, and breeding", "To make all species follow the same diet", "To avoid scientific management"],
    answer: "To support natural movement, behaviour, welfare, health, and breeding"
  },
  {
    id: "w10q2",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "Why is representative sampling important in ex-situ conservation?",
    options: ["It ensures only the best-looking individuals are collected", "It helps capture genetic variation and avoid loss of alleles", "It prevents the need for records", "It replaces future restoration planning"],
    answer: "It helps capture genetic variation and avoid loss of alleles"
  },
  {
    id: "w10q3",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "Why are compact or circular reserves generally preferred where feasible?",
    options: ["They are easier to convert into zoos", "They have higher edge-to-area pressure", "They usually reduce edge effects and outside disturbance", "They prevent natural dispersal"],
    answer: "They usually reduce edge effects and outside disturbance"
  },
  {
    id: "w10q4",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "A fragmented landscape with isolated wildlife populations mainly requires which management focus?",
    options: ["Connectivity planning", "Captive display planning", "Scenic viewpoint development", "Uniform fencing across all habitats"],
    answer: "Connectivity planning"
  },
  {
    id: "w10q5",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "Which group correctly represents protected-area categories used for in-situ conservation in India?",
    options: ["National Park, Sanctuary, Conservation Reserve, and Community Reserve", "Zoo, aquarium, seed bank, and cryobank", "Arboretum, bambusetum, gene bank, and rescue centre", "Nursery, enclosure, corridor map, and field camp"],
    answer: "National Park, Sanctuary, Conservation Reserve, and Community Reserve"
  },
  {
    id: "w10q6",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "Pollination, seed dispersal, predation, decomposition, and nutrient cycling are important because they represent which aspect of biodiversity management?",
    options: ["Revenue generation", "Boundary demarcation", "Ecological function", "Species display"],
    answer: "Ecological function"
  },
  {
    id: "w10q7",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "What does ex-situ conservation involve?",
    options: ["Maintaining species only through community grazing systems", "Protecting species only by expanding natural corridors", "Preventing all movement of species between facilities", "Moving species or genetic material to designated facilities outside natural habitats"],
    answer: "Moving species or genetic material to designated facilities outside natural habitats"
  },
  {
    id: "w10q8",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "Why can reserved forests be strategically useful for faster sanctuary notification?",
    options: ["They require no ecological significance", "They are automatically free from all human use", "They are suitable only for ex-situ conservation", "Their land status, boundaries, records, and rights position are often already well structured or documented"],
    answer: "Their land status, boundaries, records, and rights position are often already well structured or documented"
  },
  {
    id: "w10q9",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "What is the main function of studbooks in conservation breeding?",
    options: ["They record ancestry, births, deaths, transfers, and breeding history to guide management", "They replace veterinary care", "They identify tourist routes inside zoos", "They eliminate the need for genetic diversity"],
    answer: "They record ancestry, births, deaths, transfers, and breeding history to guide management"
  },
  {
    id: "w10q10",
    week: 10,
    weekTitle: "Week 10 — Assignment 10",
    question: "Why is ex-situ conservation described as an insurance strategy?",
    options: ["It guarantees automatic reintroduction success", "It prevents immediate extinction in high-risk cases and preserves individuals or genetic material outside threatened habitats", "It removes the need for genetic management", "It works best when habitat loss continues unchecked"],
    answer: "It prevents immediate extinction in high-risk cases and preserves individuals or genetic material outside threatened habitats"
  },

  // WEEK 11 — ASSIGNMENT 11
  {
    id: "w11q1",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "What is the main purpose of PIT tags?",
    options: ["To sedate animals during transport", "To create artificial movement routes", "To prevent conflict with livestock", "To allow long-term individual identification"],
    answer: "To allow long-term individual identification"
  },
  {
    id: "w11q2",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "Which practice is appropriate while physically handling small reptiles?",
    options: ["Holding only the tail to restrict movement", "Supporting the body and avoiding squeezing", "Keeping the animal exposed to heat for long periods", "Applying pressure to the abdomen for control"],
    answer: "Supporting the body and avoiding squeezing"
  },
  {
    id: "w11q3",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "Which statement reflects the central caution in habitat management?",
    options: ["Fire and grazing always damage habitats", "Water provisioning is always beneficial", "Management tools can help or harm depending on timing, intensity, location, and monitoring", "Plantation is automatically equal to restoration"],
    answer: "Management tools can help or harm depending on timing, intensity, location, and monitoring"
  },
  {
    id: "w11q4",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "When is a jab stick most suitable?",
    options: ["When the animal is distant and hidden in dense vegetation", "When the animal is approachable, confined, or partially restrained", "When no trained personnel are available", "When the animal must be monitored from the air"],
    answer: "When the animal is approachable, confined, or partially restrained"
  },
  {
    id: "w11q5",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "Which type of wildfire burns treetops and can spread rapidly?",
    options: ["Ground fire", "Surface fire", "Crown fire", "Prescribed fire"],
    answer: "Crown fire"
  },
  {
    id: "w11q6",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "Which form of restraint is based on training, conditioning, or desensitisation?",
    options: ["Behavioural restraint", "Physical restraint", "Chemical restraint", "Mechanical restraint"],
    answer: "Behavioural restraint"
  },
  {
    id: "w11q7",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "Which form of restraint uses cages, traps, poles, nets, or chutes?",
    options: ["Chemical restraint", "Behavioural restraint", "Physical restraint", "Mechanical restraint"],
    answer: "Physical restraint"
  },
  {
    id: "w11q8",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "Which statement best describes a Ketch-All pole?",
    options: ["It is used to create long-term animal enclosures", "It is a device for measuring animal temperature", "It provides short-distance control while keeping handlers away", "It is used to guide animals into pitfall traps"],
    answer: "It provides short-distance control while keeping handlers away"
  },
  {
    id: "w11q9",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "Which drug group immobilises animals through paralysis of voluntary muscles without providing sedation or analgesia?",
    options: ["CNS depressants", "Tranquillisers", "Dissociatives", "Neuromuscular blockers"],
    answer: "Neuromuscular blockers"
  },
  {
    id: "w11q10",
    week: 11,
    weekTitle: "Week 11 — Assignment 11",
    question: "Which is a physical effect of wildfire?",
    options: ["Endocrine disruption", "Hydrophobic soil reducing infiltration and increasing runoff", "Dart leakage during immobilisation", "Formation of ghost nets"],
    answer: "Hydrophobic soil reducing infiltration and increasing runoff"
  },

  // WEEK 12 — ASSIGNMENT 12
  {
    id: "w12q1",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "What should fences do in wildlife-road mitigation?",
    options: ["Block all animal movement permanently", "Guide animals toward safe crossing structures", "Increase vehicle speed near hotspots", "Replace monitoring after construction"],
    answer: "Guide animals toward safe crossing structures"
  },
  {
    id: "w12q2",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "Which of the following is an example of linear infrastructure?",
    options: ["Wetland food web", "Railway", "Tiger population", "Carbon stock"],
    answer: "Railway"
  },
  {
    id: "w12q3",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "What is the barrier effect of a road?",
    options: ["A road becomes wider after repeated use", "Animals are attracted to vegetation along road edges", "Animals avoid crossing, reducing movement between habitat areas", "Roadside soil becomes more fertile due to runoff"],
    answer: "Animals avoid crossing, reducing movement between habitat areas"
  },
  {
    id: "w12q4",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "What is Total Economic Value designed to capture?",
    options: ["Only direct market income from biodiversity", "Only tourism earnings from protected areas", "Both use and non-use values", "Only the cost of artificial habitat restoration"],
    answer: "Both use and non-use values"
  },
  {
    id: "w12q5",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "Which valuation method uses surveys to ask willingness to pay for conservation?",
    options: ["Market price method", "Benefits transfer method", "Contingent valuation method", "Damage cost avoided method"],
    answer: "Contingent valuation method"
  },
  {
    id: "w12q6",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "What is linear infrastructure?",
    options: ["Facilities that extend as lines across landscapes", "A protected-area zoning system based on circles", "A method for valuing non-use benefits", "A seasonal migration pattern of animals"],
    answer: "Facilities that extend as lines across landscapes"
  },
  {
    id: "w12q7",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "What is an oil spill?",
    options: ["A gradual increase in salt concentration in coastal water", "The release of liquid petroleum hydrocarbons into the environment", "The natural movement of sediments along a shoreline", "The biological decay of organic matter in wetlands"],
    answer: "The release of liquid petroleum hydrocarbons into the environment"
  },
  {
    id: "w12q8",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "Which structure is designed for arboreal mammals and some reptiles?",
    options: ["Canopy bridge", "In-situ burn area", "Skimmer channel", "Benefits-transfer site"],
    answer: "Canopy bridge"
  },
  {
    id: "w12q9",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "Which mitigation hierarchy step means keeping infrastructure away from critical habitat where possible?",
    options: ["Restore", "Offset", "Minimise", "Avoid"],
    answer: "Avoid"
  },
  {
    id: "w12q10",
    week: 12,
    weekTitle: "Week 12 — Assignment 12",
    question: "Which compounds are especially associated with toxicity in petroleum oil?",
    options: ["Biogenic sugars", "Pyrogenic salts", "Aromatic hydrocarbons, especially PAHs", "Soil nutrients"],
    answer: "Aromatic hydrocarbons, especially PAHs"
  }
];

export function getQuestionsByWeek(weekNumber: number): Question[] {
  return ALL_QUESTIONS.filter((q) => q.week === weekNumber);
}

export function getQuestionsByWeeks(weekNumbers: number[]): Question[] {
  const weekSet = new Set(weekNumbers);
  return ALL_QUESTIONS.filter((q) => weekSet.has(q.week));
}

export function getAllQuestions(): Question[] {
  return [...ALL_QUESTIONS];
}
