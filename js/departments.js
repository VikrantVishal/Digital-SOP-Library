/* ===== DEPARTMENTS & EQUIPMENT: add new departments / equipment here ===== */
const DEPTS = {
  mining: {
    page: "mining.html",
    title: "Mining operations",
    en: "Mining",
    hi: "खनन",
    freezeHead: true,
    equipment: [
      { id: "loader", en: "Loader / Shovel", hi: "लोडर / शॉवेल" },
      { id: "dumper", en: "Dumper", hi: "डंपर" },
      { id: "drill", en: "Drill", hi: "ड्रिल" },
      { id: "wheeldozer", en: "Wheel Dozer", hi: "व्हील डोजर" },
      { id: "chaindozer", en: "Chain Dozer", hi: "चेन डोजर" },
      { id: "grader", en: "Motor Grader", hi: "मोटर ग्रेडर" },
      { id: "breaker", en: "Rock Breaker", hi: "रॉक ब्रेकर" },
      { id: "bowser", en: "Diesel Bowser", hi: "डीजल बाउज़र" },
      { id: "backhoe", en: "Backhoes", hi: "बैकहो" },
      { id: "tmb", en: "TMB Tanker", hi: "टीएमबी टैंकर" },
      { id: "sprinkler", en: "Water Sprinkler", hi: "वाटर स्प्रिंकलर" },
      { id: "bit", en: "Bit Handling", hi: "बिट हैंडलिंग" },
      { id: "explosive", en: "Explosive Handling", hi: "विस्फोटक हैंडलिंग" },
    ],
  },
  mech: {
    page: "mechanical.html",
    en: "Mechanical Services",
    hi: "यांत्रिक सेवाएं",
    freezeHead: true,
    equipment: [],
  },
  elec: {
    page: "electrical.html",
    title: "Electrical services",
    en: "Electrical Services",
    hi: "विद्युत सेवाएं",
    heading: "Select Activity  /  कार्य चुनें",
    gridClass: "list",
    freezeHead: true,
    // Add or merge inside the electrical services / equipment section of department.js

    equipment: [
      {
        id: "electrical_shutdown_ht_lt",
        en: "Electrical Shutdown in HT/LT Circuit",
        hi: "HT/LT सर्किट में इलेक्ट्रिकल शटडाउन (विद्युत आपूर्ति बंद करना)",
      },
      {
        id: "om_earth_pits",
        en: "Operation & Maintenance of Earth Pits",
        hi: "अर्थ पिट्स का संचालन एवं रखरखाव",
      },
      {
        id: "om_electrical_shovels_drills",
        en: "Operation & Maintenance of Electrical Shovels & Drills",
        hi: "इलेक्ट्रिकल शॉवेल्स और ड्रिल्स का संचालन एवं रखरखाव",
      },
      {
        id: "om_transformers",
        en: "Operation & Maintenance of Transformers",
        hi: "ट्रांसफार्मर का संचालन एवं रखरखाव",
      },
      {
        id: "om_ht_panels_psg_isolator",
        en: "Operation & Maintenance of HT Panels/PSG/Isolator",
        hi: "HT पैनल्स/PSG/आइसोलेटर का संचालन एवं रखरखाव",
      },
      {
        id: "om_lt_panels_psg_isolator",
        en: "Operation & Maintenance of LT Panels/PSG/ Isolator",
        hi: "LT पैनल्स/PSG/आइसोलेटर का संचालन एवं रखरखाव",
      },
      {
        id: "om_motor_generator",
        en: "Operation & Maintenance of Motor & Generator",
        hi: "मोटर एवं जनरेटर का संचालन एवं रखरखाव",
      },
      {
        id: "om_ht_lt_dg_sets",
        en: "Operation & Maintenance of HT/LT DG Sets",
        hi: "HT/LT डीजी सेट्स का संचालन एवं रखरखाव",
      },
      {
        id: "om_overhead_ht_lt_line",
        en: "Operation & Maintenance of Overhead HT/LT Line",
        hi: "ओवरहेड HT/LT लाइन का संचालन एवं रखरखाव",
      },
      {
        id: "erection_dismantling_oh_lines",
        en: "Erection/Dismantling of OH Lines",
        hi: "OH (ओवरहेड) लाइनों की स्थापना / उन्हें हटाना (डिसमेंबलिंग)",
      },
      {
        id: "handling_shifting_ht_lt_cable",
        en: "Handling/Shifting of HT/LT Cable",
        hi: "HT/LT केबल की हैंडलिंग और शिफ्टिंग (स्थानांतरण)",
      },
      {
        id: "jungle_cleaning_weed_ht_lt_oh_lines",
        en:
          "Jungle Cleaning/ Weed Growth Cutting Works for HT/LT OH Lines",
        hi:
          "HT/LT OH लाइनों के लिए जंगल/झाड़ियों की सफाई और खरपतवार काटने का कार्य",
      },
      {
        id: "working_at_height",
        en: "Working at Height",
        hi: "ऊंचाई पर कार्य करना",
      },
      {
        id: "transformer_oil_testing",
        en: "Transformer Oil Testing",
        hi: "ट्रांसफार्मर ऑयल (तेल) की टेस्टिंग (जांच)",
      },
      {
        id: "om_ups_battery_charger",
        en: "Operation & Maintenance of UPS, Battery & Battery Charger",
        hi: "यूपीएस, बैटरी एवं बैटरी चार्जर का संचालन एवं रखरखाव",
      },
      {
        id: "om_capacitor_bank",
        en: "Operation & Maintenance of Capacitor Bank",
        hi: "कैपेसिटर बैंक का संचालन एवं रखरखाव",
      },
      {
        id: "shifting_psg_kiosk",
        en: "Shifting of PSG/KIOSK",
        hi: "PSG/कियोस्क की शिफ्टिंग (स्थानांतरण)",
      },
      {
        id: "om_lightning_surge_arrestors",
        en:
          "Operation & Maintenance of Lightning Arrestors/ Surge Arrestor",
        hi: "लाइटनिंग अरेस्टर/सर्ज अरेस्टर का संचालन एवं रखरखाव",
      },
      {
        id: "om_cooling_equipment",
        en: "Operation & Maintenance of Cooling Equipment",
        hi: "कूलिंग उपकरणों का संचालन एवं रखरखाव",
      },
      {
        id: "cleaning_ht_lt_switchyard",
        en: "Cleaning of HT/LT Equipment/ Switchyard",
        hi: "HT/LT उपकरणों एवं स्विचयार्ड की सफाई",
      },
      {
        id: "om_fixed_high_mast_tower",
        en: "Operation & Maintenance of Fixed type-high Mast Tower",
        hi: "फिक्स्ड टाइप हाई-मास्ट टॉवर का संचालन एवं रखरखाव",
      },
      {
        id: "om_portable_lighting_tower",
        en: "Operation & Maintenance of Portable Lighting Tower",
        hi: "पोर्टेबल लाइटिंग टॉवर का संचालन एवं रखरखाव",
      },
      {
        id: "street_light_maintenance_mines_township",
        en: "Street Light Maintenance in Mines & Township",
        hi: "माइंस (खदानों) और टाउनशिप में स्ट्रीट लाइट का रखरखाव",
      },
      {
        id: "use_ht_lt_insulation_tester",
        en: "Use of HT/LT Insulation Tester",
        hi: "HT/LT इंसुलेशन टेस्टर का उपयोग",
      },
      {
        id: "use_multimeters",
        en: "Use of Multimeters",
        hi: "मल्टीमीटर का उपयोग",
      },
      {
        id: "ht_lt_cable_termination_works",
        en: "HT/LT Cable Termination Works",
        hi: "HT/LT केबल टर्मिनेशन का कार्य",
      },
      {
        id: "temporary_power_supply",
        en: "Providing Temporary Power Supply",
        hi: "अस्थायी विद्युत (पावर) आपूर्ति प्रदान करना",
      },
      {
        id: "relay_calibration_testing",
        en: "Relay Calibration & Testing",
        hi: "रिले कैलिब्रेशन एवं टेस्टिंग",
      },
      {
        id: "om_wireless_telephone_system",
        en: "Operation & Maintenance of Wireless / Telephone System",
        hi: "वायरलेस / टेलीफोन प्रणाली का संचालन एवं रखरखाव",
      },
      {
        id: "laying_ht_lt_telephone_cable",
        en: "Undergrounding/ Laying of HT/LT/Telephone Cable",
        hi: "HT/LT/टेलीफोन केबल बिछाना (अंडरग्राउंडिंग/लेइंग कार्य)",
      },
      {
        id: "structure_painting_electrical_installations",
        en: "Structure Painting Works of Electrical Installations",
        hi: "विद्युत प्रतिष्ठानों के स्ट्रक्चर का पेंटिंग कार्य",
      },
      {
        id: "om_eot_cranes",
        en: "Operation & Maintenance of EOT Cranes",
        hi: "EOT क्रेनों का संचालन एवं रखरखाव",
      },
      {
        id: "om_access_platform_truck",
        en: "Operation & Maintenance of Access Platform Truck",
        hi: "एक्सेस प्लेटफॉर्म ट्रक का संचालन एवं रखरखाव",
      },
    ],
  },
};
