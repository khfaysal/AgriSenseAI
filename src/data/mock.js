export const farmerProfile = {
  name: 'Abdul Karim',
  displayName: 'Farid Ahmed',
  district: 'Bogura, Bangladesh',
  language: 'Bengali (বাংলা)',
  membership: 'Pro Farmer',
  plan: 'Premium Plan',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDKpt-P8RkGfmdJ4LwrfEpw75UpZ2_fRybrEgV1PL6Gx3TIM7MB-4ikf7fsZfY4XFScSTJ-q_xq_0hATJlHktGUBwxkHhcUtttdmUz5cTTnlFUQu2wzVO6TqyhU9bH5KfMC6eSyMpbn6P9Tl7Pb5yL8otnZKYf5nRo6p9RrY-zIdb0Tb5KRjw5uHVYfUPOVgigF-P2zoYM96ZJw8nDXS0BXAECoGxCRqdSkse7qEY3Moqis-GjVkKpvlA',
  farm: {
    name: 'Karim Homestead Farm',
    area: '4.2',
    crops: 'Rice, Potato',
    health: 'Optimal',
    lastScanned: '2 hours ago',
    mapImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqyL5TkR9zn_yjwDettTQYIMtPZ9z-p0n8T7H6XUEQrtmrovGGhAdcBighg79hrR4X0F6kdtHmg5DIhlAiMjZ6ZRaIzt2LwRPdjyOYs8eqdtjuwLMJ4n0aTbhC1S4-izWiBG34ZgikD3VS1qSxuVnB2L_abeSP80EsTta6gD0kxLULw9Nh7fQky_DLfiL7nR9bNxnuXwIMbENbMe0ifTIT-X5TL35jJjPsKHWttu5yrGwDIyeP9CKqeQ',
  },
}

export const services = [
  {
    id: 'crop',
    title: 'Crop Recommendation',
    description: 'AI suggestions based on soil and climate conditions.',
    icon: 'Leaf',
    iconTone: 'green',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCibO-Go2DNBqwXf5dOyYr5clDS19b2gwImIoiYdUEyrX76VC9QWWfO2g3wwy3KTMKs5W6Mp5tpFH-nUktbH6WxWH0iLU3R6TpCWyvSnAyPj5-XnxDzRBomcwWUGUOnMJYmUTe6z9onl7fNYEKB8nc75PHCDwn1Ht5uG05sTEI2fqAU6G7thZyfigeIMWBcopBdfuWGb4UQ0X3FgpX59GRhGlIBLt-cVlRxIK_4nc7YrCV9PWYbxnxPPQ',
    to: '/app/analysis/new?service=crop',
  },
  {
    id: 'disease',
    title: 'Disease Detection',
    description: 'Upload leaf photos to identify pests and diseases instantly.',
    icon: 'ScanSearch',
    iconTone: 'error',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIstbWcRfbFNmSTQcPsEzHf0SFMHR0Y7HrwvDcvh6jGd5quJBDC7louQ2E1_rLuSuRDpQWnzHrmoLjlKmS1DoAysmzL-uR6Mis611xbUEfQOEvY1UshhojiuaXYqUe270Owsn-aOZtcbjof6R0ofe0grTkVR5rYLagW_hcOiXv1yGeZgq9tbOBSofiUUuAelVYi0nYdTrdsufDgxE20WzLWs6G0oxSh0GiWZ8NycbQ-39G2mfZnOJV9Q',
    to: '/app/analysis/new?service=disease',
  },
  {
    id: 'fertilizer',
    title: 'Fertilizer Recommendation',
    description: 'Optimize NPK levels for your specific land plot.',
    icon: 'FlaskConical',
    iconTone: 'tertiary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnFZyHdIgkrSM7RWow2uAi32oCRcT56oa5tWOBxQ6WIJ3uE2cEweD7S9EYxZ88NHfFVsatIrstlgXjCxTFo2CH7HW33JCmtywape37oIW5MCs7xlXOkya7cV6SBMPaCTIdO3m_X7o6V5GZdfICZkOL96Bm1r35s8kG5TtRxkFYYp34AwKEDQAYVs58jvaAFfVQQCROTbted_Hg5kwNyPREHwEV_hd90fyeC2zddn0uSJKGsmmByFmYww',
    to: '/app/analysis/new?service=fertilizer',
  },
  {
    id: 'irrigation',
    title: 'Irrigation Recommendation',
    description: 'Water conservation strategies based on real-time soil moisture.',
    icon: 'Droplets',
    iconTone: 'blue',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcekrT5GDqnEpaDgVcIwtxdwAzOWq3mU5BQUUI-EBfBtBmKDBbAtNjRLPY6eJFTMwg2AQ7duHlxUA6xUV8ZgdpimOz2VjvuvgUo8nO_xh2jrR0DWZafphTDoDZjcvdB5o5G9bDA7kjjOp3e4xUxXN_o4NfgE0ijkgY8b5oS2W8DjPhTxMIbmC1j0MTEnXajQOfmLwaIaIJrbUoN7hTiRo1OV6YIBjaqr2J44QXEVw1yzYaayjlHf_ffg',
    to: '/app/analysis/new?service=irrigation',
  },
  {
    id: 'weather',
    title: 'Weather Advisory',
    description: 'Local forecasts with actionable agricultural impact reports.',
    icon: 'Sun',
    iconTone: 'amber',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAdBna1_mw_x85sPUJUB2aDel2aLQhKLRGsD1ENb8wRhrAmvl1Lknp0APLOniBqJLs6qRU5bPfLNv_W1ikMwmgLu_lNjMNN6g9aXV7JA9lXQYOmG30UtLHSLWVHzR5qXCceWPe8qYyD3yqsG4RgRBycJxVCmVujQ_hciq7P7Z5dHA738xRVLXG2J8yt9wUCOXCHz8TjrOuIKJPvESE59ATHA-8sonNIGV2ret7b0I8DZh-Og17wSNXtQ',
    to: '/app/analysis/new?service=weather',
  },
  {
    id: 'market',
    title: 'Market Price Prediction',
    description: 'Stay ahead with 7-day crop price forecasts and market trends.',
    icon: 'TrendingUp',
    iconTone: 'primary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnBD4wbjorudI40XLW30cc-D4EmxfRxXavIJUUOWRybJVFL1HBL2pQMk0ikdQpcSMEFYA2bqupuaMRArgZW8CUFtLHMW8sN1CFSrXzxcXloZlxf70t8ZWqzkiF2vx1wGhkC-cEBX9c2sKKrJixi7HbMLGxvL8djxH4Jx1yNP5-nirDG9hUxanF4Huw3j6eypCVTGvUFrPz1bigvURAxnCeU5cLJc_1gQjApS1f1he7hX6vi0CUYDZMVw',
    to: '/app/market',
  },
]

export const assistantBannerImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDbvVKiAxZRnNjwil1xnWkJFnB7N-6R4p0LCEinjaG1axf0aUdCjxtXLHf2Ex4OypSzsltcavl-Ds3d5s07SlNT8IkCHaEVYYBqsWc99iZ-ajW0LHKf4hzKw186-sww32j3TVzOi0XjvF4QgDGIRd2fWctLzENN-NoZyF7-8bz8sxI_0WBR5tMB2CGbaToF5ojziQ4e6hkrxv2ildbzFe-t1X4aCiSocANzZq-RoLYHQWn7FG1CElv05Q'

export const analysisHistory = [
  {
    id: '8294',
    title: 'Tomato - Early Blight',
    date: 'Oct 24, 2024',
    confidence: 92,
    status: 'critical',
    summary:
      'Large-scale fungal infection detected in the lower canopy. Immediate fungicide application recommended.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAhu3zpRspjgvRmqolHdLReGON-lW8xMApkDkEX0sXeNtjQvObMqNqeX3h5g5a4-zFA3mKnj4Bd-MYLh4JV3kxMLtPlOw6GI3P7MwV76Ob6R7zhPvbWl7vEBywKwmWP8O4dNa9N7z636qJWAeh-qFxb3sa1R2oy5GtKcfPHAuOp69YWv6Rb3qILgyg3eTqyFQ0m97IPBqYzT13AemaanwNw66S2MDW_KqnKI-mERew-0RpXqWllaFIUCg',
    crop: 'Tomato',
  },
  {
    id: '8288',
    title: 'Rice - NPK Deficiency',
    date: 'Oct 18, 2024',
    confidence: 88,
    status: 'resolved',
    summary:
      'Nitrogen and Potassium levels were critically low. Post-treatment analysis shows healthy growth.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJV-OpbUS3O3SudKogXoRO2XpLMrQtaVYq0hqDPSsWuJiYMnXaj3I3VRAVoIeqDSolshBRHJWt-3_h-xij4vC8Bv_T61GwtQxVT7IesDpPq2Ty3ZcWBzmneiqUr2DfciJ0eQ80kJY-UcMF06GpB48So1ipDBstbMjVu8f6BR9HYsMcAK-nmm5At3UWFuZZeiuSrtqEb_-bI4e0EUmklWKX3wrq2ZrTkMk-2S53SGbMimfXBwwmnpSneA',
    crop: 'Rice',
  },
  {
    id: '8291',
    title: 'Potato - Late Blight',
    date: 'Oct 22, 2024',
    confidence: 95,
    status: 'progress',
    summary:
      'Potential outbreak detected. Treatment plan initiated; awaiting 48-hour follow-up scan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHquDNjtm5S9ePYJPavuJ0vOADbyWy3rzYPaMHVmH_NAbrppgq6PMhSImD70z7pZwtrrXJaxnWxVMBDSlkWg4Ay3ZS5-zjkLQFh_6GP7qyQ3A83F5kc0z7xN2u4bLl8zb7ehYa5RDrAcI6fb9l7rVnY1AjhJ6_G75VwaZJFNQK-Qwokf0A6KW-ijncbJBfdPCGy5iO1pX-NwEVXOqbqc0Ay07hPuoFj2a3Vm08erGwQdH-jYen2KJByg',
    crop: 'Potato',
  },
  {
    id: '8275',
    title: 'Maize - Stem Borer',
    date: 'Oct 12, 2024',
    confidence: 91,
    status: 'resolved',
    summary:
      'Pest infestation successfully neutralized using organic pesticide recommendation.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFVyVurBrGh8CEvhg_xkMkppVPCfofwV5YCwQ67YAsMiG3PFjIPXfzAjbM0Yy3GYq6yUqPHlNcUL5PVBkXZzPwWU5YzEdHXKNPEfStNefwbhFwB0YTKyePd-RuvlNInekQDHUb1hFmwKlc4Ps3lDH_clltc7tErNLEKYA5su_IaxECrJFUlSilEPZM8YeIhOvBwVDPOjd5j39Juri_XdIaUbTdVa7nSktf9pG-KrdgSFY9KotaKj4Lew',
    crop: 'Maize',
  },
  {
    id: '8260',
    title: 'Wheat - Leaf Rust',
    date: 'Oct 05, 2024',
    confidence: 94,
    status: 'critical',
    summary:
      'Rapid spread of leaf rust detected in North-East quadrant. High risk of yield loss.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4dlVCEyhrZRjQSRZJg1qKZibfik3e47ICUGfMcqdkX3VWxPLKq8oNgnQSfRlKdcPRwJMQowji8qxaAgKyvrCyLrsodLyW0LKzJ1Ijv4_T3H5MAwx6-OEMzHjkHV1UowdcnJP7K2-2hm84KCRuRlj6cbHMX4QvOGD47U6Ec0B8yxwJSUzrwXtY78wNOJaw9yY5BKGEecV1KBRvYY2eA4O_pZuGyTeuss6zDJdwl1f2nw7-iCLdprjJ1g',
    crop: 'Wheat',
  },
]

export const diagnosisResult = {
  id: '8294',
  crop: 'Tomato (Solanum lycopersicum)',
  disease: 'Early Blight (Alternaria solani)',
  diseaseType: 'Fungal Infection Detected',
  confidence: 94,
  warning: 'Moderate Warning',
  description:
    'Early blight is caused by the fungus Alternaria solani. It manifests as dark spots with concentric rings (target-like appearance) on older leaves. If left untreated, it can lead to significant leaf loss and reduced fruit yield.',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDPeb12bjygEZOkzlDKF_vxpo-7ks8OwQekZmSjcruKgEnO9R5qYHfBvXGqhdU4rqzkIBcGaCdkmOgRi4ZIVF06Yo36Vh14aJWr-uHE61zQcdkYhs32BqgnGiT531T4refbW-_DhcMg7XbXbm9wa0tf8-sRQemNFtrKMvrfE3ImgPHTrUEtwKnTev8b0mx9AxfaAMevRtQGAp5tP-gd1AME_4-DcTZLextSSshNQiscCA_djBa-wLwW2Q',
  immediateActions: [
    'Remove and burn infected leaves.',
    'Improve air circulation between plants.',
    'Avoid overhead watering.',
  ],
  weather: {
    humidity: '88% (High)',
    rain: 'Low (Next 48h)',
  },
  recoveryPlan: [
    {
      day: '1',
      title: 'Day 1-3: Containment',
      detail: 'Prune infected lower leaves and apply copper-based fungicide.',
      active: true,
    },
    {
      day: '7',
      title: 'Day 7: Nutrition Boost',
      detail: 'Apply NPK 5-10-10 fertilizer to strengthen plant immunity.',
      active: false,
    },
    {
      day: '14',
      title: 'Day 14: Evaluation',
      detail: 'Check for new growth. Ensure no new lesions appear on upper foliage.',
      active: false,
    },
  ],
  products: [
    {
      type: 'Fertilizer Recommendation',
      name: 'Potassium-rich Nutrition',
      detail: 'Use NPK 5-10-10 formula to promote disease resistance.',
      price: '৳450',
      unit: '/5kg',
      cta: 'Shop Now',
      icon: 'Leaf',
    },
    {
      type: 'Fungicide Control',
      name: 'Mancozeb 75% WP',
      detail: 'Effective protective fungicide. Alternate with Chlorothalonil.',
      price: '৳320',
      unit: '/500g',
      cta: 'Find Dealer',
      icon: 'Syringe',
    },
  ],
  nearby: {
    name: 'Upazila Agriculture Office',
    distance: '1.2 km away • Open until 5 PM',
    mapImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCe-Etxvo-0Hfs-lLy5PP1oYzAv3gzxRqw-aEwZCdu79guYUXH1DE_kUJ2PXJ3QvlgJQMWHjSI2mLB3n1tyVLpt5xn_X55zfbu_y-RdbObUlStU5kBiz-oveQJMdQbfL8M0ginEJ0fB18NZBjqnhs03DqyFXxTto9YL0PoQhJbSrOS8M_hmO5zcqGIdovkMr90D3LtwFceYwk9EGTJFAW3tT-_UjoRFQ5OUfRYTI6c7CmHrp2s9-W8Oyg',
  },
}

export const chatMessages = [
  {
    role: 'user',
    text: "Can you check the health of my Boro Rice crop? It's been raining a lot in Mymensingh lately.",
  },
  {
    role: 'assistant',
    text: 'Certainly, Farid. Based on current satellite data and the specific weather patterns in Mymensingh, here is your crop health overview and action plan:',
    weather: {
      title: 'Weather Alert: High Humidity',
      detail: 'Expect 85% humidity over the next 48 hours.',
      temp: '28°C',
    },
    stats: [
      { label: 'Soil Moisture', value: '74%', hint: 'Optimum range: 65-80%', tone: 'primary' },
      { label: 'Blast Risk', value: 'Moderate', hint: 'High moisture detected', tone: 'tertiary' },
    ],
    advice: [
      'Apply Potash (MOP) at 15kg/acre to strengthen stalks against wind.',
      'Delay Urea application until the rain clears to prevent nitrogen leaching.',
      'Inspect leaf edges for Blast Fungus lesions due to high humidity.',
    ],
  },
]

export const previousChats = [
  { id: '1', title: 'Rice Crop Analysis', active: true },
  { id: '2', title: 'Fertilizer Schedule', active: false },
  { id: '3', title: 'Pest Control Tips', active: false },
]

export const satelliteImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDfsxKTksWyV9Vg_uBrkld2bI9IBIA9rSThtd6eSloqrgBpw0m26pBxOHQ0C1NtFk4h_oP8IoDQgvnfwv5XWHCsDTSbRQmu6I4KDJx3TQvlKEmZAfvIKXEOgG8tcKWJT-Nt6JdfXa9oPA0aUyD01NXBK67u9eVzfhRh_h3-7AC-DXXv_u1yBlNJLce9mYuKzrq1JEfQ1AmvYjnBw55oF7p0VUqMWxVz2H6a0gsTwp-v2carqdOjzZqwFQ'

export const analysisTips = [
  'Did you know? Regular soil testing can increase yield by up to 30%.',
  'Pro Tip: Early detection of leaf blight can save an entire harvest season.',
  'Watering your crops during early morning reduces evaporation loss by 15%.',
  'Crop rotation with legumes naturally restores nitrogen levels in your soil.',
  'Using organic mulch helps retain moisture and suppress invasive weeds.',
]

export const crops = ['Rice', 'Jute', 'Wheat', 'Mango', 'Tomato', 'Potato', 'Maize']
export const seasons = ['Kharif-1', 'Kharif-2', 'Rabi']
export const districts = ['Dhaka', 'Rajshahi', 'Sylhet', 'Khulna', 'Bogura', 'Mymensingh']

export const marketSummary = {
  updatedAt: 'Today, 8:30 AM',
  district: 'Bogura',
  insight:
    'Boro rice demand is rising ahead of the weekly hat. Selling within 48 hours could improve returns by ~6% versus waiting until weekend.',
  bestCrop: 'Rice (Boro)',
  bestAction: 'Sell in 1–2 days',
}

export const marketPrices = [
  {
    id: 'rice',
    crop: 'Rice (Boro)',
    unit: 'per mound',
    price: 1480,
    change: 4.2,
    trend: 'up',
    forecast: [1390, 1410, 1425, 1440, 1455, 1470, 1480],
    market: 'Bogura Wholesale',
    demand: 'High',
  },
  {
    id: 'potato',
    crop: 'Potato',
    unit: 'per kg',
    price: 28,
    change: -2.1,
    trend: 'down',
    forecast: [32, 31, 30, 29, 29, 28, 28],
    market: 'Dhaka Kawran Bazar',
    demand: 'Medium',
  },
  {
    id: 'jute',
    crop: 'Jute',
    unit: 'per mound',
    price: 2650,
    change: 1.8,
    trend: 'up',
    forecast: [2550, 2570, 2580, 2600, 2620, 2640, 2650],
    market: 'Faridpur Mandi',
    demand: 'Stable',
  },
  {
    id: 'tomato',
    crop: 'Tomato',
    unit: 'per kg',
    price: 45,
    change: 7.5,
    trend: 'up',
    forecast: [38, 39, 40, 41, 43, 44, 45],
    market: 'Rajshahi Local Hat',
    demand: 'High',
  },
  {
    id: 'wheat',
    crop: 'Wheat',
    unit: 'per mound',
    price: 1320,
    change: -0.6,
    trend: 'down',
    forecast: [1340, 1335, 1330, 1328, 1325, 1322, 1320],
    market: 'Dinajpur Hub',
    demand: 'Low',
  },
  {
    id: 'maize',
    crop: 'Maize',
    unit: 'per mound',
    price: 980,
    change: 2.4,
    trend: 'up',
    forecast: [940, 950, 955, 960, 970, 975, 980],
    market: 'Rangpur Center',
    demand: 'Medium',
  },
]

export const marketHubs = [
  {
    name: 'Kawran Bazar',
    district: 'Dhaka',
    distance: '182 km',
    status: 'Open until 6 PM',
    topCrop: 'Potato',
    priceNote: '৳28/kg today',
  },
  {
    name: 'Bogura Wholesale Mandi',
    district: 'Bogura',
    distance: '4.5 km',
    status: 'Open until 5 PM',
    topCrop: 'Rice (Boro)',
    priceNote: '৳1,480/mound',
  },
  {
    name: 'Rajshahi Local Hat',
    district: 'Rajshahi',
    distance: '68 km',
    status: 'Open Thu & Sun',
    topCrop: 'Tomato',
    priceNote: '৳45/kg peak',
  },
]

export const sellTips = [
  {
    title: 'Best Window',
    detail: 'Sell Boro rice before Friday hat to avoid weekend supply surge.',
    icon: 'Clock',
  },
  {
    title: 'Transport Cost',
    detail: 'Bogura mandi saves ~৳120/mound vs shipping to Dhaka today.',
    icon: 'Truck',
  },
  {
    title: 'Buyer Demand',
    detail: 'Traders report higher demand for dry, well-graded potatoes.',
    icon: 'Users',
  },
]
