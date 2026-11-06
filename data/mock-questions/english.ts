import { CBTQuestion } from "./types";

export const englishQuestions: CBTQuestion[] = [
  {
    id: "eng-01",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Subject-Verb Agreement",
    marks: 4,
    negativeMarks: 0,
    text: "Fill in the blank with the grammatically correct option: 'Neither the director nor the actors ________ arrived on the film set yet.'",
    options: ["has", "have", "is", "was"],
    correctOptionIndex: 1,
    explanation:
      "When two subjects are joined by 'neither... nor', the verb agrees in person and number with the nearer subject. Here, 'the actors' is plural, so the plural verb 'have' is correct."
  },
  {
    id: "eng-02",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Conditional Tenses",
    marks: 4,
    negativeMarks: 0,
    text: "Choose the correct completion: 'Had the engineering team ________ the structural flaw earlier, the bridge collapse could have been prevented.'",
    options: ["detect", "detects", "detected", "detecting"],
    correctOptionIndex: 2,
    explanation:
      "This is an inverted third conditional ('Had + subject + past participle (V3)... would/could have + V3'). The past participle form of 'detect' is 'detected'."
  },
  {
    id: "eng-03",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Active & Passive Voice",
    marks: 4,
    negativeMarks: 0,
    text: "Convert the following active sentence into the passive voice: 'The university board approved the new AI research curriculum.'",
    options: [
      "The new AI research curriculum was approved by the university board.",
      "The new AI research curriculum had approved by the university board.",
      "The new AI research curriculum is approved by the university board.",
      "The university board was approving the new AI research curriculum."
    ],
    correctOptionIndex: 0,
    explanation:
      "The active sentence is in simple past tense ('approved'). The passive voice structure for simple past is 'was/were + past participle (V3)'. Thus, 'was approved' is the correct transformation."
  },
  {
    id: "eng-04",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Direct & Indirect Speech",
    marks: 4,
    negativeMarks: 0,
    text: "Convert into indirect speech: The professor said to Rahul, 'Have you submitted your scholarship verification form?'",
    options: [
      "The professor asked Rahul whether he has submitted his scholarship verification form.",
      "The professor asked Rahul if he had submitted his scholarship verification form.",
      "The professor told Rahul that had he submitted the scholarship verification form.",
      "The professor asked Rahul whether had he submitted his scholarship verification form."
    ],
    correctOptionIndex: 1,
    explanation:
      "In indirect questions with yes/no auxiliary verbs ('Have you...'), use 'if' or 'whether'. The present perfect ('have submitted') changes to past perfect ('had submitted'), and the word order becomes assertive ('he had submitted')."
  },
  {
    id: "eng-05",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Fixed Prepositions",
    marks: 4,
    negativeMarks: 0,
    text: "Fill in the blank with the appropriate preposition: 'All registered candidates must strictly abide ________ the examination code of conduct.'",
    options: ["to", "by", "with", "for"],
    correctOptionIndex: 1,
    explanation:
      "The phrasal verb 'abide by' is a fixed idiom meaning to accept or obey a rule, decision, or recommendation."
  },
  {
    id: "eng-06",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Prepositions with Adjectives",
    marks: 4,
    negativeMarks: 0,
    text: "Select the correct preposition: 'Dr. Sharma is senior ________ all other faculty members in the Department of Computer Science.'",
    options: ["than", "to", "from", "over"],
    correctOptionIndex: 1,
    explanation:
      "Comparative adjectives ending in '-ior' (such as senior, junior, superior, inferior, prior) take the preposition 'to', never 'than'."
  },
  {
    id: "eng-07",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Vocabulary (Synonyms)",
    marks: 4,
    negativeMarks: 0,
    text: "Choose the word that is most nearly identical in meaning to EPHEMERAL:",
    options: ["Transient", "Permanent", "Eternal", "Ubiquitous"],
    correctOptionIndex: 0,
    explanation:
      "'Ephemeral' means lasting for a very short time or fleeting. Its direct synonym is 'Transient' (or fleeting/momentary)."
  },
  {
    id: "eng-08",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Vocabulary (Antonyms)",
    marks: 4,
    negativeMarks: 0,
    text: "Choose the word that is most opposite in meaning to PRAGMATIC:",
    options: ["Practical", "Realistic", "Idealistic", "Rational"],
    correctOptionIndex: 2,
    explanation:
      "'Pragmatic' refers to dealing with things sensibly and realistically based on practical considerations. Its opposite is 'Idealistic' (guided more by ideals than practical realities)."
  },
  {
    id: "eng-09",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Vocabulary (Contextual)",
    marks: 4,
    negativeMarks: 0,
    text: "Choose the closest meaning of the word CANDID as used in: 'The admissions counselor gave a candid evaluation of the student's chances.'",
    options: ["Deceptive", "Frank and truthful", "Ambiguous", "Hostile"],
    correctOptionIndex: 1,
    explanation:
      "'Candid' means truthful, straightforward, and outspoken without hesitation."
  },
  {
    id: "eng-10",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Idioms & Phrases",
    marks: 4,
    negativeMarks: 0,
    text: "What does the idiom 'to burn the midnight oil' mean?",
    options: [
      "To waste energy on an unproductive task",
      "To work or study late into the night",
      "To cause an intentional industrial hazard",
      "To celebrate late with colleagues"
    ],
    correctOptionIndex: 1,
    explanation:
      "'To burn the midnight oil' is a common idiom meaning to stay awake late into the night studying, revising, or working."
  },
  {
    id: "eng-11",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Idioms & Phrases",
    marks: 4,
    negativeMarks: 0,
    text: "What is the meaning of the idiomatic phrase 'to spill the beans'?",
    options: [
      "To ruin an expensive dinner",
      "To reveal secret or confidential information unintentionally",
      "To speak with arrogance and pride",
      "To apologize sincerely"
    ],
    correctOptionIndex: 1,
    explanation:
      "'To spill the beans' means to disclose confidential information or reveal a surprise prematurely."
  },
  {
    id: "eng-12",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Error Spotting",
    marks: 4,
    negativeMarks: 0,
    text: "Identify the part of the sentence that contains an error: '(A) One of the students / (B) in our batch / (C) have won the national hackathon / (D) with a gold trophy.'",
    options: ["Part A", "Part B", "Part C", "Part D"],
    correctOptionIndex: 2,
    explanation:
      "The phrase 'One of the + plural noun' takes a singular verb because the subject is 'One'. Therefore, 'have won' in Part C is incorrect; it should be 'has won'."
  },
  {
    id: "eng-13",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Sentence Correction",
    marks: 4,
    negativeMarks: 0,
    text: "Choose the correct sentence: 'Scarcely had the test invigilator distributed the question papers ________.'",
    options: [
      "when the power supply failed suddenly.",
      "than the power supply failed suddenly.",
      "then the power supply failed suddenly.",
      "while the power supply failed suddenly."
    ],
    correctOptionIndex: 0,
    explanation:
      "'Scarcely' and 'Hardly' are correlative conjunctions that are paired with 'when', whereas 'No sooner' is paired with 'than'."
  },
  {
    id: "eng-14",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "One-Word Substitution",
    marks: 4,
    negativeMarks: 0,
    text: "What is the one-word substitution for: 'A person who renounces a religious or political belief or principle'?",
    options: ["Apostate", "Apostle", "Ascetic", "Altruist"],
    correctOptionIndex: 0,
    explanation:
      "An 'Apostate' is someone who abandons their religion or political cause. 'Ascetic' practices severe self-discipline, and 'Altruist' shows unselfish concern for others."
  },
  {
    id: "eng-15",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Para-Jumbles",
    marks: 4,
    negativeMarks: 0,
    text: "Arrange the jumbled sentences into a logical paragraph:\nP: This rapid digitization transformed consumer habits permanently.\nQ: Consequently, traditional brick-and-mortar stores embraced omnichannel models.\nR: In 2020, electronic commerce witnessed an unprecedented surge.\nS: Online transactions and digital wallets became everyday necessities.",
    options: ["R - P - S - Q", "P - R - Q - S", "R - S - P - Q", "S - R - P - Q"],
    correctOptionIndex: 0,
    explanation:
      "R introduces the main event (the 2020 e-commerce surge). P explains its impact ('This rapid digitization...'). S elaborates with examples (online transactions). Q concludes with the consequence ('Consequently, traditional stores...'). The sequence R-P-S-Q is coherent."
  },
  {
    id: "eng-16",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Parallelism & Conjunctions",
    marks: 4,
    negativeMarks: 0,
    text: "Choose the most balanced and grammatically parallel sentence:",
    options: [
      "The engineering curriculum aims to teach coding, designing systems, and how to analyze data.",
      "The engineering curriculum aims to teach coding, designing systems, and analyzing data.",
      "The engineering curriculum aims to teach to code, system design, and analyzing data.",
      "The engineering curriculum aims at teaching code, to design systems, and data analysis."
    ],
    correctOptionIndex: 1,
    explanation:
      "Parallel structure requires all listed items to share the same grammatical form: 'coding', 'designing systems', and 'analyzing data' (all gerund phrases)."
  },
  {
    id: "eng-17",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Vocabulary in Context",
    marks: 4,
    negativeMarks: 0,
    text: "Fill in the blank with the most precise academic term: 'The researcher presented ________ evidence from three independent clinical trials to substantiate her hypothesis.'",
    options: ["empirical", "superficial", "anecdotal", "nominal"],
    correctOptionIndex: 0,
    explanation:
      "'Empirical' means based on observation, experience, or verifiable scientific experiment, perfectly fitting clinical trial evidence."
  },
  {
    id: "eng-18",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Articles & Determiners",
    marks: 4,
    negativeMarks: 0,
    text: "Fill in the blanks: 'Dr. APJ Abdul Kalam was ________ honorable scientist who inspired ________ European and global audience alike.'",
    options: ["a, a", "an, a", "an, an", "a, an"],
    correctOptionIndex: 1,
    explanation:
      "'Honorable' begins with a silent 'h' and vowel sound /ɒ/, taking 'an'. 'European' begins with a consonant glide sound /j/ (yoo-ro-pe-an), taking 'a'. Thus, 'an, a' is correct."
  },
  {
    id: "eng-19",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Misspelled Words",
    marks: 4,
    negativeMarks: 0,
    text: "Select the word that is correctly spelled:",
    options: [
      "Accomodation",
      "Accommodation",
      "Acommodation",
      "Acomodation"
    ],
    correctOptionIndex: 1,
    explanation:
      "'Accommodation' is spelled with double 'c' and double 'm' (A-c-c-o-m-m-o-d-a-t-i-o-n)."
  },
  {
    id: "eng-20",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Analogies",
    marks: 4,
    negativeMarks: 0,
    text: "Complete the analogy: THERMOMETER : TEMPERATURE :: BAROMETER : ________",
    options: ["Humidity", "Atmospheric Pressure", "Wind Velocity", "Precipitation"],
    correctOptionIndex: 1,
    explanation:
      "A thermometer is an instrument used to measure temperature, while a barometer is used to measure atmospheric pressure."
  },
  // Reading Comprehension Passage for Q21 - Q25
  {
    id: "eng-21",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Reading Comprehension (Passage)",
    marks: 4,
    negativeMarks: 0,
    text: "Read the passage and answer questions 21 to 25:\n\n'Technological revolutions have historically decoupled manual labor from economic output, yet the rapid emergence of generative artificial intelligence presents an unprecedented cognitive paradigm shift. Unlike industrial automation, which substituted muscular kinetic tasks with mechanical steam and hydraulic systems, generative models augment abstract synthesis, legal document summarization, computer programming, and diagnostic medicine. While optimists envision an era of profound creative liberation, economists emphasize the urgency of re-skilling workforces to avert widening socioeconomic inequality.'\n\nQuestion 21: According to the passage, how does the current AI revolution primarily differ from the historical Industrial Revolution?",
    options: [
      "It requires more physical mechanical power than steam engines.",
      "It augments abstract cognitive capabilities rather than replacing manual muscular labor.",
      "It solely benefits the manufacturing and agricultural sectors.",
      "It has eliminated economic disparity entirely."
    ],
    correctOptionIndex: 1,
    explanation:
      "The passage explicitly states that while industrial automation substituted muscular kinetic tasks, generative AI augments cognitive synthesis, programming, and medicine."
  },
  {
    id: "eng-22",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Reading Comprehension (Passage)",
    marks: 4,
    negativeMarks: 0,
    text: "Question 22: Which of the following professional domains is NOT explicitly cited in the passage as being augmented by generative AI?",
    options: [
      "Legal document summarization",
      "Computer programming",
      "Deep-sea mining operations",
      "Diagnostic medicine"
    ],
    correctOptionIndex: 2,
    explanation:
      "The passage lists legal summarization, computer programming, and diagnostic medicine, but does not mention deep-sea mining."
  },
  {
    id: "eng-23",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Reading Comprehension (Passage)",
    marks: 4,
    negativeMarks: 0,
    text: "Question 23: What urgent measure do economists emphasize in the passage to mitigate the disruptive impact of AI?",
    options: [
      "Imposing a total global moratorium on semiconductor development",
      "Proactively re-skilling the human workforce",
      "Replacing all white-collar workers with automated scripts",
      "Eliminating corporate taxes on AI startups"
    ],
    correctOptionIndex: 1,
    explanation:
      "The passage closes with: '...economists emphasize the urgency of re-skilling workforces to avert widening socioeconomic inequality.'"
  },
  {
    id: "eng-24",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Reading Comprehension (Passage)",
    marks: 4,
    negativeMarks: 0,
    text: "Question 24: In the context of the passage, the word 'DECOUPLED' most nearly means:",
    options: ["Linked permanently", "Separated or disconnected", "Multiplied", "Subsidized"],
    correctOptionIndex: 1,
    explanation:
      "'Decoupled' means separated or unlinked, referring to separating labor input from economic output."
  },
  {
    id: "eng-25",
    subjectId: "english",
    subjectName: "English Language & Verbal Ability",
    type: "mcq",
    topic: "Reading Comprehension (Passage)",
    marks: 4,
    negativeMarks: 0,
    text: "Question 25: What is the overall tone of the author in the passage?",
    options: [
      "Pessimistic and dismissive",
      "Objective, analytical, and cautionary",
      "Sarcastic and humorous",
      "Indifferent and detached"
    ],
    correctOptionIndex: 1,
    explanation:
      "The author impartially compares historical transitions with modern developments while noting both optimistic potentials and cautionary economic imperatives, reflecting an analytical and objective tone."
  }
];
