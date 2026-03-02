// Hospital Website Data

export const hospital = {
  name: "Die-Later Hospital",
  tagline: "Compassionate Care, Advanced Medicine",
  description: "Leading healthcare provider committed to delivering exceptional patient care with state-of-the-art facilities and experienced medical professionals.",
  address: "123 Medical Plaza, Healthcare District, CA 90210",
  phone: "(555) 123-4567",
  emergencyPhone: "(555) 911-CARE",
  email: "info@carefirstmedical.com",
  hours: {
    emergency: "24/7 Emergency Services",
    general: "Monday - Friday: 8:00 AM - 8:00 PM",
    weekend: "Saturday - Sunday: 9:00 AM - 5:00 PM"
  },
  socialLinks: {
    facebook: "https://facebook.com/carefirstmedical",
    twitter: "https://twitter.com/carefirstmed",
    instagram: "https://instagram.com/carefirstmedical",
    linkedin: "https://linkedin.com/company/carefirst-medical"
  }
};

export const services = [
  {
    id: "cardiology",
    name: "Cardiology",
    slug: "cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment options for all cardiovascular conditions.",
    department: "Heart & Vascular",
    overview: "Our Cardiology department provides comprehensive care for all heart and vascular conditions. We utilize the latest technology and evidence-based treatments to ensure optimal patient outcomes.",
    conditionsTreated: [
      "Coronary Artery Disease",
      "Heart Failure",
      "Arrhythmias",
      "Hypertension",
      "Heart Valve Disease",
      "Peripheral Artery Disease"
    ],
    procedures: [
      "Cardiac Catheterization",
      "Angioplasty and Stenting",
      "Pacemaker Implantation",
      "Echocardiography",
      "Stress Testing",
      "Holter Monitoring"
    ],
    equipment: [
      "State-of-the-art Cath Lab",
      "Advanced 3D Echocardiography",
      "CT Angiography",
      "Nuclear Cardiology Suite"
    ],
    relatedDoctors: ["dr-sarah-johnson", "dr-michael-chen"],
    icon: "heart"
  },
  {
    id: "neurology",
    name: "Neurology",
    slug: "neurology",
    description: "Expert diagnosis and treatment of brain, spine, and nervous system disorders with cutting-edge neurological care.",
    department: "Brain & Nervous System",
    overview: "Our Neurology department specializes in diagnosing and treating disorders of the brain, spinal cord, and nervous system. We offer comprehensive care from diagnosis through treatment and rehabilitation.",
    conditionsTreated: [
      "Stroke",
      "Epilepsy",
      "Multiple Sclerosis",
      "Parkinson's Disease",
      "Alzheimer's Disease",
      "Migraines and Headaches"
    ],
    procedures: [
      "EEG (Electroencephalography)",
      "EMG/NCS Studies",
      "Lumbar Puncture",
      "Neurological Examinations",
      "Brain Imaging",
      "Nerve Conduction Studies"
    ],
    equipment: [
      "Advanced MRI Technology",
      "CT Scanners",
      "EEG Lab",
      "Neurovascular Suite"
    ],
    relatedDoctors: ["dr-robert-williams"],
    icon: "brain"
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    slug: "pediatrics",
    description: "Specialized medical care for infants, children, and adolescents with a focus on growth, development, and wellness.",
    department: "Children's Health",
    overview: "Our Pediatrics department provides comprehensive healthcare for children from birth through adolescence. We focus on preventive care, early detection, and treatment of childhood illnesses.",
    conditionsTreated: [
      "Childhood Infections",
      "Asthma and Allergies",
      "Growth Disorders",
      "Behavioral Issues",
      "Developmental Delays",
      "Chronic Conditions"
    ],
    procedures: [
      "Well-Child Visits",
      "Vaccinations",
      "Developmental Screenings",
      "Sick Visits",
      "Sports Physicals",
      "Nutrition Counseling"
    ],
    equipment: [
      "Child-Friendly Examination Rooms",
      "Pediatric Imaging Equipment",
      "Growth Monitoring Tools",
      "Play Therapy Spaces"
    ],
    relatedDoctors: ["dr-emily-rodriguez"],
    icon: "baby"
  },
  {
    id: "emergency",
    name: "Emergency Medicine",
    slug: "emergency",
    description: "24/7 emergency care with rapid response team and state-of-the-art trauma facilities for urgent medical needs.",
    department: "Emergency Services",
    overview: "Our Emergency Department provides immediate, life-saving care 24 hours a day, 7 days a week. Our team is equipped to handle all types of medical emergencies.",
    conditionsTreated: [
      "Cardiac Emergencies",
      "Trauma and Injuries",
      "Stroke",
      "Respiratory Distress",
      "Severe Infections",
      "Poisoning and Overdose"
    ],
    procedures: [
      "Emergency Resuscitation",
      "Trauma Surgery",
      "Emergency Imaging",
      "Wound Care",
      "Pain Management",
      "Emergency Stabilization"
    ],
    equipment: [
      "Advanced Life Support Equipment",
      "Trauma Bays",
      "Emergency CT Scanner",
      "Mobile X-Ray Units",
      "Defibrillators"
    ],
    relatedDoctors: ["dr-michael-chen", "dr-sarah-johnson"],
    icon: "activity"
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    slug: "orthopedics",
    description: "Expert care for bones, joints, muscles, and ligaments with advanced surgical and non-surgical treatments.",
    department: "Musculoskeletal Health",
    overview: "Our Orthopedics department specializes in treating conditions affecting the musculoskeletal system. We offer both surgical and non-surgical treatment options.",
    conditionsTreated: [
      "Fractures and Dislocations",
      "Arthritis",
      "Sports Injuries",
      "Back and Neck Pain",
      "Joint Problems",
      "Osteoporosis"
    ],
    procedures: [
      "Joint Replacement Surgery",
      "Arthroscopic Surgery",
      "Fracture Repair",
      "Spinal Surgery",
      "Physical Therapy",
      "Pain Management"
    ],
    equipment: [
      "Digital X-Ray Systems",
      "MRI Scanners",
      "Surgical Suites",
      "Rehabilitation Facilities"
    ],
    relatedDoctors: ["dr-robert-williams"],
    icon: "bone"
  },
  {
    id: "radiology",
    name: "Radiology",
    slug: "radiology",
    description: "Advanced medical imaging services including MRI, CT, X-ray, and ultrasound for accurate diagnosis.",
    department: "Diagnostic Imaging",
    overview: "Our Radiology department provides comprehensive imaging services using the latest technology to aid in accurate diagnosis and treatment planning.",
    conditionsTreated: [
      "Cancer Detection",
      "Bone and Joint Disorders",
      "Internal Organ Assessment",
      "Vascular Conditions",
      "Neurological Disorders",
      "Pregnancy Monitoring"
    ],
    procedures: [
      "MRI Scans",
      "CT Scans",
      "X-Rays",
      "Ultrasound",
      "Mammography",
      "Nuclear Medicine"
    ],
    equipment: [
      "3T MRI Scanner",
      "64-Slice CT Scanner",
      "Digital Mammography",
      "Interventional Radiology Suite"
    ],
    relatedDoctors: ["dr-sarah-johnson"],
    icon: "scan"
  }
];

export const doctors = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    slug: "dr-sarah-johnson",
    specialty: "Cardiology",
    bio: "Board-certified cardiologist with over 15 years of experience in treating complex cardiovascular conditions.",
    fullBio: "Dr. Sarah Johnson is a highly respected cardiologist who has dedicated her career to advancing heart health. She completed her medical degree at Stanford University School of Medicine and her cardiology fellowship at Johns Hopkins Hospital. Dr. Johnson has published numerous research papers on cardiovascular disease prevention and is actively involved in clinical trials.",
    image: "https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjM0Mzk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "15+ years",
    education: [
      "MD, Stanford University School of Medicine",
      "Residency, Internal Medicine, Massachusetts General Hospital",
      "Fellowship, Cardiology, Johns Hopkins Hospital"
    ],
    specializations: [
      "Interventional Cardiology",
      "Heart Failure Management",
      "Preventive Cardiology",
      "Women's Heart Health"
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Internal Medicine",
      "Fellow, American College of Cardiology"
    ]
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    slug: "dr-michael-chen",
    specialty: "Emergency Medicine",
    bio: "Emergency medicine specialist with expertise in trauma care and critical emergency response.",
    fullBio: "Dr. Michael Chen is an accomplished emergency medicine physician with extensive experience in trauma and critical care. He received his medical degree from UCLA and completed his emergency medicine residency at Harbor-UCLA Medical Center. Dr. Chen has served as the Medical Director of Emergency Services and is known for his calm demeanor in high-pressure situations.",
    image: "https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3VyZ2VvbiUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMzQzOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "12+ years",
    education: [
      "MD, UCLA David Geffen School of Medicine",
      "Residency, Emergency Medicine, Harbor-UCLA Medical Center",
      "Advanced Trauma Life Support Certification"
    ],
    specializations: [
      "Trauma Care",
      "Critical Care Medicine",
      "Emergency Procedures",
      "Disaster Medicine"
    ],
    certifications: [
      "Board Certified in Emergency Medicine",
      "ATLS Instructor",
      "ACLS Provider"
    ]
  },
  {
    id: "dr-emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    slug: "dr-emily-rodriguez",
    specialty: "Pediatrics",
    bio: "Compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence.",
    fullBio: "Dr. Emily Rodriguez has a passion for working with children and families. She earned her medical degree from Columbia University and completed her pediatric residency at Children's Hospital of Philadelphia. Dr. Rodriguez believes in a holistic approach to pediatric care, focusing on prevention, education, and building strong relationships with her patients and their families.",
    image: "https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkb2N0b3IlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzI0Mzc3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "10+ years",
    education: [
      "MD, Columbia University College of Physicians and Surgeons",
      "Residency, Pediatrics, Children's Hospital of Philadelphia",
      "Certificate, Developmental-Behavioral Pediatrics"
    ],
    specializations: [
      "Developmental Pediatrics",
      "Behavioral Health",
      "Preventive Care",
      "Adolescent Medicine"
    ],
    certifications: [
      "Board Certified in Pediatrics",
      "Fellow, American Academy of Pediatrics",
      "Certified Lactation Counselor"
    ]
  },
  {
    id: "dr-robert-williams",
    name: "Dr. Robert Williams",
    slug: "dr-robert-williams",
    specialty: "Neurology",
    bio: "Renowned neurologist specializing in stroke care, epilepsy management, and neurodegenerative diseases.",
    fullBio: "Dr. Robert Williams is a leading neurologist with a focus on complex neurological disorders. He obtained his medical degree from Harvard Medical School and completed his neurology residency at Massachusetts General Hospital. Dr. Williams has received numerous awards for his research in stroke prevention and is frequently invited to speak at national and international conferences.",
    image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2dpc3QlMjBoZWFydCUyMHNwZWNpYWxpc3R8ZW58MXx8fHwxNzcyMzUyMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "18+ years",
    education: [
      "MD, Harvard Medical School",
      "Residency, Neurology, Massachusetts General Hospital",
      "Fellowship, Vascular Neurology, UCSF Medical Center"
    ],
    specializations: [
      "Stroke and Cerebrovascular Disease",
      "Epilepsy",
      "Movement Disorders",
      "Neurodegenerative Diseases"
    ],
    certifications: [
      "Board Certified in Neurology",
      "Board Certified in Vascular Neurology",
      "Fellow, American Academy of Neurology"
    ]
  }
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Understanding Heart Health: Prevention Tips for Every Age",
    slug: "understanding-heart-health-prevention-tips",
    excerpt: "Learn essential strategies to maintain cardiovascular health throughout your life.",
    content: `
      <h2>The Importance of Heart Health</h2>
      <p>Cardiovascular disease remains the leading cause of death globally, but many heart conditions are preventable through lifestyle modifications and early detection.</p>
      
      <h3>Prevention Strategies by Age Group</h3>
      
      <h4>In Your 20s and 30s</h4>
      <p>This is the time to establish healthy habits that will serve you for life:</p>
      <ul>
        <li>Maintain a healthy weight through regular exercise and balanced nutrition</li>
        <li>Avoid smoking and limit alcohol consumption</li>
        <li>Get baseline health screenings, including blood pressure and cholesterol</li>
        <li>Manage stress through mindfulness, exercise, or other healthy outlets</li>
      </ul>
      
      <h4>In Your 40s and 50s</h4>
      <p>As you age, it's important to be more vigilant about your heart health:</p>
      <ul>
        <li>Schedule regular check-ups with your doctor</li>
        <li>Monitor your blood pressure, cholesterol, and blood sugar levels</li>
        <li>Incorporate cardiovascular exercise into your routine at least 150 minutes per week</li>
        <li>Pay attention to your family history of heart disease</li>
      </ul>
      
      <h4>In Your 60s and Beyond</h4>
      <p>Continue prioritizing your heart health with these strategies:</p>
      <ul>
        <li>Stay active with age-appropriate exercises like walking, swimming, or yoga</li>
        <li>Take prescribed medications as directed</li>
        <li>Monitor for signs of heart disease and seek immediate care if symptoms arise</li>
        <li>Maintain social connections and mental stimulation</li>
      </ul>
      
      <h3>Warning Signs to Watch For</h3>
      <p>Seek immediate medical attention if you experience:</p>
      <ul>
        <li>Chest pain or discomfort</li>
        <li>Shortness of breath</li>
        <li>Pain in the arms, back, neck, jaw, or stomach</li>
        <li>Unusual fatigue</li>
        <li>Dizziness or lightheadedness</li>
      </ul>
      
      <p>Remember, prevention is always better than cure. Start taking care of your heart today!</p>
    `,
    category: "health_tips",
    author: "Dr. Sarah Johnson",
    publishedAt: "2026-02-15",
    featuredImage: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2dpc3QlMjBoZWFydCUyMHNwZWNpYWxpc3R8ZW58MXx8fHwxNzcyMzUyMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "post-2",
    title: "New Advanced MRI Technology Now Available at CareFirst",
    slug: "new-advanced-mri-technology",
    excerpt: "We're proud to announce the addition of state-of-the-art 3T MRI technology to our diagnostic imaging department.",
    content: `
      <h2>Cutting-Edge Imaging Technology</h2>
      <p>Die-Later Hospital is excited to announce the installation of our new 3 Tesla (3T) MRI scanner, representing a significant advancement in diagnostic imaging capabilities.</p>
      
      <h3>What Makes 3T MRI Special?</h3>
      <p>The 3T MRI offers several advantages over traditional 1.5T systems:</p>
      <ul>
        <li><strong>Higher Resolution Images:</strong> Produces clearer, more detailed images for more accurate diagnoses</li>
        <li><strong>Faster Scan Times:</strong> Reduces time in the scanner, improving patient comfort</li>
        <li><strong>Enhanced Contrast:</strong> Better visualization of soft tissues, blood vessels, and organs</li>
        <li><strong>Advanced Applications:</strong> Enables specialized imaging techniques like functional MRI and cardiac imaging</li>
      </ul>
      
      <h3>Benefits for Patients</h3>
      <p>This new technology will enhance our ability to:</p>
      <ul>
        <li>Detect diseases earlier, when they're most treatable</li>
        <li>Provide more precise treatment planning</li>
        <li>Monitor treatment effectiveness more accurately</li>
        <li>Reduce the need for invasive diagnostic procedures</li>
      </ul>
      
      <h3>Patient Comfort Features</h3>
      <p>Our new MRI system includes several features designed for patient comfort:</p>
      <ul>
        <li>Wider bore design to reduce claustrophobia</li>
        <li>Quieter operation for a more pleasant experience</li>
        <li>Ambient lighting and music options</li>
        <li>Faster scan times mean less time in the machine</li>
      </ul>
      
      <p>To schedule an MRI scan or learn more about this technology, please contact our Radiology Department at (555) 123-4567.</p>
    `,
    category: "news",
    author: "CareFirst Communications Team",
    publishedAt: "2026-02-20",
    featuredImage: "https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIzODU4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "post-3",
    title: "Managing Stress: A Guide to Mental Wellness",
    slug: "managing-stress-guide",
    excerpt: "Discover practical strategies to manage stress and improve your overall mental health.",
    content: `
      <h2>Understanding Stress and Its Impact</h2>
      <p>Stress is a natural response to challenging situations, but chronic stress can take a toll on both mental and physical health. Learning to manage stress effectively is crucial for overall wellness.</p>
      
      <h3>Common Signs of Stress</h3>
      <ul>
        <li>Difficulty sleeping or sleeping too much</li>
        <li>Changes in appetite</li>
        <li>Irritability or mood swings</li>
        <li>Difficulty concentrating</li>
        <li>Physical symptoms like headaches, muscle tension, or digestive issues</li>
        <li>Fatigue or low energy</li>
      </ul>
      
      <h3>Effective Stress Management Techniques</h3>
      
      <h4>1. Mindfulness and Meditation</h4>
      <p>Regular mindfulness practice can help you stay present and reduce anxiety about the future or regrets about the past. Even 10 minutes of daily meditation can make a significant difference.</p>
      
      <h4>2. Physical Activity</h4>
      <p>Exercise is one of the most effective stress relievers. It releases endorphins, improves mood, and helps clear your mind. Aim for at least 30 minutes of moderate activity most days of the week.</p>
      
      <h4>3. Healthy Sleep Habits</h4>
      <p>Quality sleep is essential for stress management. Establish a consistent sleep schedule, create a relaxing bedtime routine, and avoid screens before bed.</p>
      
      <h4>4. Social Connections</h4>
      <p>Maintaining strong social relationships provides emotional support and helps buffer against stress. Make time for friends and family, even if it's just a phone call or video chat.</p>
      
      <h4>5. Time Management</h4>
      <p>Poor time management can be a significant source of stress. Prioritize tasks, break large projects into smaller steps, and don't be afraid to say no to additional commitments when you're overwhelmed.</p>
      
      <h3>When to Seek Professional Help</h3>
      <p>If stress is interfering with your daily life, relationships, or work, it may be time to seek professional help. Signs that you should consult a mental health professional include:</p>
      <ul>
        <li>Persistent feelings of sadness or hopelessness</li>
        <li>Withdrawal from activities you once enjoyed</li>
        <li>Significant changes in eating or sleeping patterns</li>
        <li>Difficulty functioning at work or home</li>
        <li>Thoughts of self-harm</li>
      </ul>
      
      <p>Remember, seeking help is a sign of strength, not weakness. Contact Die-Later Hospital to schedule an appointment with one of our mental health professionals.</p>
    `,
    category: "health_tips",
    author: "Dr. Emily Rodriguez",
    publishedAt: "2026-02-25",
    featuredImage: "https://images.unsplash.com/photo-1665315469403-fde8e923f719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZSUyMG1lZGljYWwlMjBoZWFsdGh8ZW58MXx8fHwxNzcyNDM3NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "post-4",
    title: "Breakthrough Research: New Treatment for Stroke Recovery",
    slug: "breakthrough-stroke-treatment",
    excerpt: "Recent clinical trials show promising results for a new therapy that enhances stroke recovery.",
    content: `
      <h2>A New Hope for Stroke Survivors</h2>
      <p>Researchers have made significant progress in developing treatments that can improve recovery outcomes for stroke patients. A recent clinical trial has shown promising results for a novel therapy that enhances the brain's ability to heal after a stroke.</p>
      
      <h3>Understanding Stroke Recovery</h3>
      <p>When a stroke occurs, blood flow to part of the brain is interrupted, causing brain cells to die. The brain has a remarkable ability to rewire itself, known as neuroplasticity, but this process can be slow and incomplete.</p>
      
      <h3>The New Treatment Approach</h3>
      <p>The experimental therapy combines:</p>
      <ul>
        <li>Intensive physical and occupational therapy</li>
        <li>Non-invasive brain stimulation</li>
        <li>Targeted medication to enhance neuroplasticity</li>
      </ul>
      
      <h3>Clinical Trial Results</h3>
      <p>The phase II clinical trial included 200 stroke patients and showed:</p>
      <ul>
        <li>30% greater improvement in motor function compared to standard therapy</li>
        <li>Faster recovery times, with patients reaching rehabilitation milestones weeks earlier</li>
        <li>Improved quality of life scores at 6 months post-stroke</li>
        <li>Minimal side effects</li>
      </ul>
      
      <h3>What This Means for Patients</h3>
      <p>While the therapy is still in the research phase and not yet widely available, these results offer hope for better stroke recovery outcomes in the future. The research team is planning a larger phase III trial to confirm these findings.</p>
      
      <h3>Current Stroke Prevention and Care</h3>
      <p>While we await these new treatments, it's important to focus on stroke prevention and immediate care:</p>
      <ul>
        <li>Know the signs of stroke: Face drooping, Arm weakness, Speech difficulty, Time to call 911</li>
        <li>Manage risk factors like high blood pressure, diabetes, and high cholesterol</li>
        <li>Maintain a healthy lifestyle with regular exercise and a balanced diet</li>
        <li>Seek immediate medical attention if you suspect a stroke – time is critical</li>
      </ul>
      
      <p>Die-Later Hospital's Neurology Department stays at the forefront of stroke care and treatment. For more information about stroke prevention or treatment, contact us at (555) 123-4567.</p>
    `,
    category: "research",
    author: "Dr. Robert Williams",
    publishedAt: "2026-02-28",
    featuredImage: "https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzI0Mzc3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "post-5",
    title: "Community Health Fair: Free Screenings This Weekend",
    slug: "community-health-fair-march",
    excerpt: "Join us for our annual community health fair featuring free health screenings and wellness education.",
    content: `
      <h2>CareFirst Community Health Fair</h2>
      <p>Die-Later Hospital is proud to host our annual Community Health Fair this Saturday, March 8th, from 9 AM to 4 PM in the hospital's main atrium.</p>
      
      <h3>Free Health Screenings</h3>
      <p>Take advantage of complimentary health screenings including:</p>
      <ul>
        <li>Blood Pressure checks</li>
        <li>Cholesterol screening (fasting required)</li>
        <li>Blood glucose testing</li>
        <li>Body Mass Index (BMI) assessment</li>
        <li>Vision screening</li>
        <li>Bone density testing (limited availability)</li>
      </ul>
      
      <h3>Educational Sessions</h3>
      <p>Attend informative presentations by our medical experts:</p>
      <ul>
        <li><strong>10:00 AM:</strong> Heart Health 101 with Dr. Sarah Johnson</li>
        <li><strong>11:30 AM:</strong> Nutrition for Families with our Registered Dietitians</li>
        <li><strong>1:00 PM:</strong> Managing Chronic Pain with Physical Therapy</li>
        <li><strong>2:30 PM:</strong> Understanding Diabetes Prevention and Management</li>
      </ul>
      
      <h3>Activities for All Ages</h3>
      <ul>
        <li>Kids' Corner with healthy snacks and activities</li>
        <li>Fitness demonstrations and mini-workouts</li>
        <li>Cooking demonstrations featuring heart-healthy recipes</li>
        <li>Meet our physicians and ask questions</li>
        <li>Wellness resources and information booths</li>
      </ul>
      
      <h3>Special Offers</h3>
      <p>Attendees will receive:</p>
      <ul>
        <li>Free reusable water bottle (while supplies last)</li>
        <li>Discount vouchers for future services</li>
        <li>Recipe booklet with healthy meal ideas</li>
        <li>Raffle entry to win a free gym membership</li>
      </ul>
      
      <h3>Event Details</h3>
      <p><strong>Date:</strong> Saturday, March 8, 2026<br>
      <strong>Time:</strong> 9:00 AM - 4:00 PM<br>
      <strong>Location:</strong> Die-Later Hospital, Main Atrium<br>
      <strong>Address:</strong> 123 Medical Plaza, Healthcare District, CA 90210</p>
      
      <p>No registration required – just show up! Bring your family and friends. Free parking available in the visitor lot.</p>
      
      <p>For more information, call (555) 123-4567 or visit our website.</p>
    `,
    category: "community",
    author: "CareFirst Communications Team",
    publishedAt: "2026-03-01",
    featuredImage: "https://images.unsplash.com/photo-1631039302217-5a6c56371e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI0MjIyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "post-6",
    title: "Pediatric Care: When to Visit the ER vs. Urgent Care",
    slug: "pediatric-er-vs-urgent-care",
    excerpt: "A parent's guide to determining when your child needs emergency care versus urgent care.",
    content: `
      <h2>Making the Right Decision for Your Child</h2>
      <p>As a parent, it can be stressful to determine the appropriate level of care when your child is sick or injured. Understanding the difference between emergency room and urgent care can help you make the best decision for your child's health.</p>
      
      <h3>Go to the Emergency Room for:</h3>
      <ul>
        <li><strong>Difficulty breathing or shortness of breath</strong></li>
        <li><strong>Severe allergic reactions</strong> with symptoms like swelling, difficulty breathing, or rapid pulse</li>
        <li><strong>Head injuries</strong> with loss of consciousness, severe headache, or vomiting</li>
        <li><strong>Severe burns</strong> covering a large area or affecting the face, hands, or genitals</li>
        <li><strong>Broken bones</strong> with visible deformity or bone protruding through skin</li>
        <li><strong>Severe abdominal pain</strong> especially if accompanied by fever or vomiting</li>
        <li><strong>Seizures</strong> (first-time or lasting more than 5 minutes)</li>
        <li><strong>High fever in infants</strong> under 3 months (100.4°F or higher)</li>
        <li><strong>Signs of dehydration</strong> with lethargy or decreased consciousness</li>
        <li><strong>Poisoning or drug ingestion</strong></li>
        <li><strong>Deep cuts</strong> that won't stop bleeding</li>
        <li><strong>Severe mental health crisis</strong> including suicidal thoughts</li>
      </ul>
      
      <h3>Visit Urgent Care for:</h3>
      <ul>
        <li>Minor cuts requiring stitches (but not life-threatening bleeding)</li>
        <li>Sprains and strains</li>
        <li>Mild to moderate asthma symptoms</li>
        <li>Ear infections</li>
        <li>Sore throats and colds</li>
        <li>Minor burns</li>
        <li>Vomiting and diarrhea (without severe dehydration)</li>
        <li>Rashes</li>
        <li>Minor allergic reactions</li>
        <li>Urinary tract infections</li>
        <li>Fever (over 3 months of age, without other serious symptoms)</li>
      </ul>
      
      <h3>Call Your Pediatrician First for:</h3>
      <ul>
        <li>Questions about symptoms</li>
        <li>Non-urgent medical concerns</li>
        <li>Guidance on whether to seek immediate care</li>
        <li>Prescription refills</li>
        <li>Follow-up care questions</li>
      </ul>
      
      <h3>When in Doubt</h3>
      <p>If you're unsure about the severity of your child's condition:</p>
      <ul>
        <li>Call your pediatrician's office – many have 24/7 nurse lines</li>
        <li>Call our Emergency Department at (555) 911-CARE for guidance</li>
        <li>Trust your parental instincts – if something feels seriously wrong, seek emergency care</li>
      </ul>
      
      <h3>What to Bring</h3>
      <p>Whether visiting the ER or urgent care, bring:</p>
      <ul>
        <li>Insurance card</li>
        <li>List of current medications</li>
        <li>Immunization records (if available)</li>
        <li>Comfort items for your child (favorite toy, blanket)</li>
      </ul>
      
      <p>Die-Later Hospital's Pediatric Emergency Department and Urgent Care are staffed 24/7 with board-certified pediatric specialists. We're here whenever your child needs us.</p>
    `,
    category: "health_tips",
    author: "Dr. Emily Rodriguez",
    publishedAt: "2026-03-02",
    featuredImage: "https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkb2N0b3IlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzI0Mzc3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const galleryItems = [
  {
    id: "gallery-1",
    title: "Modern Hospital Exterior",
    image: "https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyMzcwMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "facilities",
    description: "State-of-the-art medical facility with modern architecture"
  },
  {
    id: "gallery-2",
    title: "Emergency Department",
    image: "https://images.unsplash.com/photo-1721114989769-0423619f03d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MXx8fHwxNzcyMzcyOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "facilities",
    description: "24/7 Emergency care with rapid response capabilities"
  },
  {
    id: "gallery-3",
    title: "Advanced Medical Equipment",
    image: "https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIzODU4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "equipment",
    description: "Latest diagnostic and treatment technology"
  },
  {
    id: "gallery-4",
    title: "Patient Ward",
    image: "https://images.unsplash.com/photo-1769456338697-13e702d51eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHdhcmQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI0Mzc3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "facilities",
    description: "Comfortable patient rooms designed for healing"
  },
  {
    id: "gallery-5",
    title: "Medical Team Collaboration",
    image: "https://images.unsplash.com/photo-1631039302217-5a6c56371e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI0MjIyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "staff",
    description: "Dedicated healthcare professionals working together"
  },
  {
    id: "gallery-6",
    title: "Research Laboratory",
    image: "https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzI0Mzc3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "facilities",
    description: "Cutting-edge research and diagnostic laboratory"
  },
  {
    id: "gallery-7",
    title: "Compassionate Patient Care",
    image: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwY2FyZSUyMGNvbXBhc3Npb258ZW58MXx8fHwxNzcyNDM3NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "staff",
    description: "Providing care with compassion and expertise"
  },
  {
    id: "gallery-8",
    title: "Community Health Fair 2025",
    image: "https://images.unsplash.com/photo-1631039302217-5a6c56371e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI0MjIyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "events",
    description: "Annual community outreach and health screening event"
  }
];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Jennifer Martinez",
    text: "The care I received at CareFirst was exceptional. The staff was compassionate, professional, and truly cared about my recovery. I'm grateful for the excellent treatment.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "David Thompson",
    text: "After my heart surgery, Dr. Johnson and her team provided outstanding follow-up care. They were always available to answer questions and made sure I was on the right path to recovery.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Maria Garcia",
    text: "Dr. Rodriguez has been wonderful with my children. She's patient, thorough, and always takes time to address our concerns. We trust her completely with our family's health.",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "Robert Lee",
    text: "The Emergency Department staff saved my life. Their quick response and expertise during my stroke made all the difference. I can't thank them enough.",
    rating: 5
  }
];

export const leadership = [
  {
    id: "lead-1",
    name: "Dr. Patricia Anderson",
    title: "Chief Executive Officer",
    bio: "Dr. Anderson brings over 25 years of healthcare leadership experience to Die-Later Hospital."
  },
  {
    id: "lead-2",
    name: "Dr. James Mitchell",
    title: "Chief Medical Officer",
    bio: "Board-certified surgeon with extensive experience in hospital operations and quality improvement."
  },
  {
    id: "lead-3",
    name: "Susan Richardson",
    title: "Chief Nursing Officer",
    bio: "Dedicated to advancing nursing excellence and patient-centered care across all departments."
  },
  {
    id: "lead-4",
    name: "Michael Stevens",
    title: "Chief Financial Officer",
    bio: "Financial strategist committed to ensuring sustainable, high-quality healthcare delivery."
  }
];

export const certifications = [
  {
    id: "cert-1",
    name: "Joint Commission Accreditation",
    description: "Gold Seal of Approval for meeting the highest standards of safety and quality"
  },
  {
    id: "cert-2",
    name: "Chest Pain Center Accreditation",
    description: "Recognized for excellence in treating patients with heart attack symptoms"
  },
  {
    id: "cert-3",
    name: "Primary Stroke Center Certification",
    description: "Certified to provide advanced stroke care and rapid intervention"
  },
  {
    id: "cert-4",
    name: "Magnet Recognition",
    description: "Highest honor for nursing excellence and quality patient care"
  }
];
