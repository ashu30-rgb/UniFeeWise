import { CBTQuestion } from "./types";

export const biologyQuestions: CBTQuestion[] = [
  {
    id: "bio-01",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Genetics & Mendelian Inheritance",
    marks: 4,
    negativeMarks: 0,
    text: "In a classical Mendelian dihybrid cross between heterozygous pea plants (RrYy × RrYy), what is the expected phenotypic ratio among the F2 offspring?",
    options: ["9 : 3 : 3 : 1", "1 : 2 : 1", "3 : 1", "9 : 7"],
    correctOptionIndex: 0,
    explanation:
      "According to Mendel's Law of Independent Assortment, crossing two double heterozygotes (RrYy) yields 16 combinations with 4 distinct phenotypes in the ratio 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1)."
  },
  {
    id: "bio-02",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Molecular Basis of Inheritance (Replication)",
    marks: 4,
    negativeMarks: 0,
    text: "During semi-conservative DNA replication in prokaryotes, Okazaki fragments synthesized on the lagging strand are joined covalently by which enzyme?",
    options: ["DNA Polymerase I", "DNA Ligase", "DNA Helicase", "RNA Primase"],
    correctOptionIndex: 1,
    explanation:
      "DNA Ligase catalyzes the formation of phosphodiester bonds between the 3'-OH and 5'-phosphate ends of adjacent Okazaki fragments, sealing nicks on the lagging strand."
  },
  {
    id: "bio-03",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Molecular Basis of Inheritance (Gene Regulation)",
    marks: 4,
    negativeMarks: 0,
    text: "In the Lac Operon of Escherichia coli, what role does allolactose play?",
    options: [
      "It acts as a corepressor binding to the promoter",
      "It acts as an inducer that binds to the repressor protein, inactivating it",
      "It acts as a structural gene encoding permease",
      "It stops RNA polymerase transcription"
    ],
    correctOptionIndex: 1,
    explanation:
      "Allolactose is an inducer. When lactose is present, allolactose binds to the lac repressor protein, altering its conformation so it can no longer bind the operator, allowing RNA polymerase to transcribe the operon."
  },
  {
    id: "bio-04",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Biotechnology & Genetic Engineering",
    marks: 4,
    negativeMarks: 0,
    text: "Taq polymerase, the thermostable DNA polymerase widely used in the Polymerase Chain Reaction (PCR), is isolated from which thermophilic bacterium?",
    options: [
      "Thermus aquaticus",
      "Bacillus thuringiensis",
      "Agrobacterium tumefaciens",
      "Streptomyces thermophilus"
    ],
    correctOptionIndex: 0,
    explanation:
      "Taq polymerase is extracted from Thermus aquaticus, a bacterium thriving in geothermal hot springs, enabling it to withstand the 94°C-96°C denaturation steps of PCR."
  },
  {
    id: "bio-05",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Biotechnology Tools (Restriction Enzymes)",
    marks: 4,
    negativeMarks: 0,
    text: "The restriction endonuclease EcoRI cleaves double-stranded DNA specifically at which palindromic recognition sequence?",
    options: [
      "5'-GAATTC-3' and 3'-CTTAAG-5'",
      "5'-GGATCC-3' and 3'-CCTAGG-5'",
      "5'-AAGCTT-3' and 3'-TTCGAA-5'",
      "5'-GATATC-3' and 3'-CTATAG-5'"
    ],
    correctOptionIndex: 0,
    explanation:
      "EcoRI cuts between G and A in the symmetrical hexanucleotide sequence 5'-G↓AATTC-3' (producing 5' overhang sticky ends)."
  },
  {
    id: "bio-06",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Biotechnology Vectors",
    marks: 4,
    negativeMarks: 0,
    text: "In the cloning vector pBR322, insertional inactivation of the ampᴿ gene with a foreign DNA fragment allows recombinant colonies to be identified because:",
    options: [
      "They become resistant to both ampicillin and tetracycline",
      "They grow on tetracycline medium but fail to grow on ampicillin medium",
      "They fail to grow on either antibiotic",
      "They turn bright blue in the presence of X-gal"
    ],
    correctOptionIndex: 1,
    explanation:
      "Inserting foreign DNA into the ampicillin resistance (ampᴿ) site destroys the ampicillin resistance gene while leaving the tetracycline (tetᴿ) gene intact. Recombinant colonies grow on tetracycline but die on ampicillin."
  },
  {
    id: "bio-07",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Human Physiology (Respiration)",
    marks: 4,
    negativeMarks: 0,
    text: "The oxygen-hemoglobin dissociation curve is shifted to the right (Bohr Effect) by an increase in which of the following physiological factors?",
    options: [
      "Partial pressure of CO₂ (pCO₂) and H⁺ concentration (acidity)",
      "Partial pressure of O₂ (pO₂)",
      "Blood pH (alkalinity)",
      "Hypothermia (decreased temperature)"
    ],
    correctOptionIndex: 0,
    explanation:
      "A rightward shift reduces hemoglobin's affinity for oxygen, promoting O₂ release to metabolizing tissues. It is triggered by high pCO₂, increased [H⁺] (lower pH), elevated temperature, and higher 2,3-BPG."
  },
  {
    id: "bio-08",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Human Physiology (Circulation)",
    marks: 4,
    negativeMarks: 0,
    text: "During a normal human cardiac cycle of 0.8 seconds duration, what is the average duration of ventricular systole?",
    options: ["0.1 second", "0.3 second", "0.4 second", "0.5 second"],
    correctOptionIndex: 1,
    explanation:
      "In a 0.8 s cardiac cycle: Auricular systole lasts 0.1 s, Ventricular systole lasts 0.3 s, and Complete joint diastole lasts 0.4 s."
  },
  {
    id: "bio-09",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Human Physiology (Excretion)",
    marks: 4,
    negativeMarks: 0,
    text: "In the human nephron, where does the majority (70–80%) of water and essential electrolyte reabsorption take place?",
    options: [
      "Proximal Convoluted Tubule (PCT)",
      "Henle's descending loop",
      "Distal Convoluted Tubule (DCT)",
      "Collecting Duct"
    ],
    correctOptionIndex: 0,
    explanation:
      "The Proximal Convoluted Tubule (PCT) is lined with simple cuboidal brush-border epithelium that provides an extensive surface area for reabsorbing ~70-80% of electrolytes and water."
  },
  {
    id: "bio-10",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Human Physiology (Endocrinology)",
    marks: 4,
    negativeMarks: 0,
    text: "Which pancreatic hormone is secreted by the beta cells of the Islets of Langerhans to promote glycogenesis and lower blood glucose levels?",
    options: ["Glucagon", "Insulin", "Somatostatin", "Epinephrine"],
    correctOptionIndex: 1,
    explanation:
      "Insulin is produced by the beta cells of the pancreatic islets. It stimulates cellular glucose uptake and glycogen synthesis (glycogenesis) in liver and muscle tissues."
  },
  {
    id: "bio-11",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Plant Physiology (Photosynthesis)",
    marks: 4,
    negativeMarks: 0,
    text: "Kranz anatomy in leaves, characterized by prominent bundle sheath cells containing chloroplasts arranged in a wreath around vascular bundles, is a hallmark of:",
    options: ["C3 plants", "C4 plants (such as Maize and Sugarcane)", "CAM plants", "Bryophytes"],
    correctOptionIndex: 1,
    explanation:
      "Kranz anatomy is an evolutionary adaptation in C4 plants (e.g., maize, sugarcane, sorghum) that minimizes photorespiration by concentrating CO₂ around RuBisCO inside bundle sheath cells."
  },
  {
    id: "bio-12",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Plant Physiology (Light Reaction)",
    marks: 4,
    negativeMarks: 0,
    text: "During the light reactions of photosynthesis, the photolysis of water in the Oxygen-Evolving Complex (OEC) of Photosystem II critically requires which mineral ions?",
    options: [
      "Manganese (Mn²⁺) and Chlorine (Cl⁻)",
      "Iron (Fe²⁺) and Copper (Cu²⁺)",
      "Magnesium (Mg²⁺) and Zinc (Zn²⁺)",
      "Boron (B³⁺) and Molybdenum (Mo⁶⁺)"
    ],
    correctOptionIndex: 0,
    explanation:
      "The water-splitting complex associated with PS II requires Manganese (Mn²⁺), Chloride (Cl⁻), and Calcium (Ca²⁺) ions to catalyze the oxidation of water into O₂, protons, and electrons."
  },
  {
    id: "bio-13",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Plant Physiology (Hormones)",
    marks: 4,
    negativeMarks: 0,
    text: "Which phytohormone is gaseous in nature and widely utilized in agriculture for accelerating the post-harvest ripening of climatic fruits?",
    options: ["Indole-3-acetic acid (Auxin)", "Ethylene", "Abscisic acid (ABA)", "Gibberellin"],
    correctOptionIndex: 1,
    explanation:
      "Ethylene (C₂H₄) is the only gaseous plant hormone. It triggers fruit ripening, promotes senescence, and stimulates abscission of leaves and flowers."
  },
  {
    id: "bio-14",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Cell Biology & Cell Cycle",
    marks: 4,
    negativeMarks: 0,
    text: "During which substage of Prophase I in meiosis does crossing over (genetic recombination) occur between non-sister chromatids of homologous chromosomes?",
    options: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    correctOptionIndex: 2,
    explanation:
      "Crossing over and recombination nodules mediated by the enzyme recombinase occur during the Pachytene substage of Meiotic Prophase I."
  },
  {
    id: "bio-15",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Ecology & Energy Flow",
    marks: 4,
    negativeMarks: 0,
    text: "According to Raymond Lindeman's 10% Ecological Law of energy transfer, if 10,000 Joules of net solar energy is trapped by primary producers (green plants), how much energy is transferred to tertiary consumers?",
    options: ["1,000 J", "100 J", "10 J", "1 J"],
    correctOptionIndex: 2,
    explanation:
      "Producers: 10,000 J -> Primary consumers (Herbivores): 10% = 1,000 J -> Secondary consumers (Carnivores): 10% = 100 J -> Tertiary consumers (Apex): 10% = 10 J."
  },
  {
    id: "bio-16",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Ecology & Biodiversity",
    marks: 4,
    negativeMarks: 0,
    text: "Which of the following is an example of an 'ex-situ' conservation strategy for endangered biological species?",
    options: [
      "National Parks",
      "Biosphere Reserves",
      "Wildlife Sanctuaries",
      "Cryopreservation & Zoological Gene Banks"
    ],
    correctOptionIndex: 3,
    explanation:
      "Ex-situ conservation involves conserving threatened animals and plants outside their natural habitats (such as botanical gardens, seed banks, and cryopreservation banks). National parks and sanctuaries are in-situ."
  },
  {
    id: "bio-17",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Human Reproduction",
    marks: 4,
    negativeMarks: 0,
    text: "In human females, ovulation is immediately triggered by a sharp mid-cycle surge in which anterior pituitary gonadotropin?",
    options: [
      "Luteinizing Hormone (LH)",
      "Follicle Stimulating Hormone (FSH)",
      "Progesterone",
      "Prolactin"
    ],
    correctOptionIndex: 0,
    explanation:
      "Around day 14 of the 28-day menstrual cycle, high estrogen causes a positive feedback surge of Luteinizing Hormone ('LH surge'), inducing rupture of the Graafian follicle and release of the ovum (ovulation)."
  },
  {
    id: "bio-18",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Evolution",
    marks: 4,
    negativeMarks: 0,
    text: "The forelimbs of a human, the flipper of a whale, and the wing of a bat exhibit similar anatomical bone layouts (humerus, radius, ulna) despite serving different functions. This provides classic evidence for:",
    options: [
      "Homologous organs indicating divergent evolution",
      "Analogous organs indicating convergent evolution",
      "Atavism",
      "Industrial melanism"
    ],
    correctOptionIndex: 0,
    explanation:
      "Structures having common embryonic origin and basic anatomical architecture that adapt to diverse ecological functions are homologous organs, reflecting divergent evolution from a common ancestor."
  },
  {
    id: "bio-19",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Human Health & Immunity",
    marks: 4,
    negativeMarks: 0,
    text: "Which immunoglobulin (antibody) class is secreted as a dimer and provides localized mucosal immunity in colostrum, saliva, and tears?",
    options: ["IgG", "IgA", "IgE", "IgM"],
    correctOptionIndex: 1,
    explanation:
      "Secretory Immunoglobulin A (IgA) is abundant in body secretions such as tears, saliva, and maternal colostrum, protecting mucosal surfaces against microbial entry."
  },
  {
    id: "bio-20",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Cell Structure & Organelles",
    marks: 4,
    negativeMarks: 0,
    text: "Which semi-autonomous organelle contains circular double-stranded DNA, 70S ribosomes, and performs oxidative phosphorylation?",
    options: ["Mitochondria", "Golgi Apparatus", "Endoplasmic Reticulum", "Lysosome"],
    correctOptionIndex: 0,
    explanation:
      "Mitochondria (and chloroplasts) have their own circular DNA genome and 70S ribosomes, supporting the endosymbiotic theory and hosting the electron transport chain for ATP generation."
  },
  {
    id: "bio-21",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Microbes in Human Welfare",
    marks: 4,
    negativeMarks: 0,
    text: "Cyclosporin A, an important immunosuppressive agent given to organ transplant patients, is commercially produced from which fungal species?",
    options: [
      "Trichoderma polysporum",
      "Monascus purpureus",
      "Aspergillus niger",
      "Penicillium notatum"
    ],
    correctOptionIndex: 0,
    explanation:
      "Cyclosporin A is produced by the fungus Trichoderma polysporum. Monascus purpureus produces statins, and Aspergillus niger produces citric acid."
  },
  {
    id: "bio-22",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Plant Reproduction",
    marks: 4,
    negativeMarks: 0,
    text: "In angiosperms, double fertilization is a unique phenomenon where one male gamete fuses with the egg cell (syngamy) and the second male gamete fuses with:",
    options: [
      "Two polar nuclei to form triploid (3n) endosperm",
      "Synergids to form diploid zygote",
      "Antipodal cells to form seed coat",
      "Nucellar tissue"
    ],
    correctOptionIndex: 0,
    explanation:
      "Double fertilization consists of syngamy (male gamete + egg = diploid 2n zygote) and triple fusion (second male gamete + two polar nuclei = primary triploid 3n endosperm nucleus)."
  },
  {
    id: "bio-23",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Ecosystems (Nitrogen Cycle)",
    marks: 4,
    negativeMarks: 0,
    text: "Which symbiotic nitrogen-fixing bacterium forms root nodules in leguminous crops such as peas and chickpeas?",
    options: ["Rhizobium leguminosarum", "Azotobacter", "Clostridium", "Nitrosomonas"],
    correctOptionIndex: 0,
    explanation:
      "Rhizobium is a symbiotic bacterium that colonizes legume root hairs and forms nitrogen-fixing root nodules utilizing the oxygen-sensitive nitrogenase enzyme."
  },
  {
    id: "bio-24",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Biological Classification",
    marks: 4,
    negativeMarks: 0,
    text: "Prions, the causative infectious agents of Bovine Spongiform Encephalopathy (Mad Cow Disease) and Kuru in humans, consist solely of:",
    options: [
      "Abnormally folded protein molecules without any nucleic acid",
      "Single-stranded RNA encapsulated in a lipid coat",
      "Double-stranded circular DNA",
      "Bacterial spores"
    ],
    correctOptionIndex: 0,
    explanation:
      "Prions are infectious proteinaceous particles lacking both DNA and RNA. They cause neurodegenerative disorders by inducing normal host proteins to misfold into pathological beta-sheet aggregates."
  },
  {
    id: "bio-25",
    subjectId: "biology",
    subjectName: "Biology",
    type: "mcq",
    topic: "Human Genetics & Pedigree",
    marks: 4,
    negativeMarks: 0,
    text: "Hemophilia A and red-green color blindness in humans are classic examples of which mode of inheritance?",
    options: [
      "X-linked recessive inheritance",
      "Autosomal dominant inheritance",
      "Y-linked holandric inheritance",
      "Mitochondrial maternal inheritance"
    ],
    correctOptionIndex: 0,
    explanation:
      "Both hemophilia A and red-green color blindness are X-linked recessive traits that occur far more frequently in males (hemizygous XY) and are transmitted through carrier mothers."
  }
];

