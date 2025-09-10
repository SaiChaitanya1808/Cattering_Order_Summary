let orderData = {};

// Language translations
const translations = {
  en: {
    pageTitle: "Sri Durga Sai Catering - Order Form",
    headerTitle: "Sri Durga Sai Catering",
    addressTitle: "Address",
    ownerAddressHeading: "Our Address",
    ownerNameLabel: "Name:",
    ownerPhoneLabel: "Phone:",
    ownerAddressLabel: "Address:",
    formTitle: "Sri Durga Sai Catering - Order Form",
    nameLabel: "Name:",
    namePlaceholder: "Your Name",
    phoneLabel: "Phone Number:",
    phonePlaceholder: "Your Phone Number",
    villageLabel: "Village/Colony Name:",
    villagePlaceholder: "Village/Colony Name",
    addressLabel: "Full Address:",
    addressPlaceholder: "Full Address",
    eventLabel: "Event Type:",
    eventOptions: {
      select: "Select",
      wedding: "Wedding",
      birthday: "Birthday",
      corporate: "Corporate Event",
      other: "Other Events"
    },
    mealTimesLabel: "Meal Times:",
    mealTimesOptions: {
      morningTiffins: "Morning Tiffins",
      afternoonMeals: "Afternoon Meals",
      eveningSnacks: "Evening Snacks",
      nightTiffins: "Night Tiffins",
      nightMeals: "Night Meals"
    },
    dateLabel: "Event Date:",
    timeLabel: "Event Time:",
    guestsLabel: "No Of People:",
    guestsPlaceholder: "Number of Guests",
    menuLabel: "Additional Details:",
    menuPlaceholder: "Your Menu Preferences or Special Requirements",
    submitBtn: "Submit Order",
    highlightsTitle: "Catering Highlights",
    highlightsList: [
      "We maintain every dish with utmost care, keeping it neat and clean.",
      "Each non-veg and veg item is specially prepared and served for functions and celebrations.",
      "We strictly follow food safety and hygiene at every stage: cutting, preparation, and cooking.",
      "No food preservatives are used; all ingredients are fresh and of premium quality.",
      "We provide catering services suitable for large functions, weddings, and parties.",
      "Each item is presented neatly and stored properly.",
      "We maintain cleanliness and hygiene during cooking, packaging, and delivery.",
      "Our staff is trained and responsible, maintaining professional behavior at every function.",
      "Customized menu planning is available according to client requirements.",
      "Food hygiene and neat presentation are our top priority.",
      "Catering boys, assistants, and staff strictly maintain proper sanitation.",
      "For both small and large events, we focus completely on food quality, taste, and presentation."
    ],
    menuTitle: "Select Your Menu",
    searchLabel: "Search:",
    searchPlaceholder: "Search...",
    summaryTitle: "Summary"
  },
  te: {
    pageTitle: "శ్రీ దుర్గా సాయి కేటరింగ్ - ఆర్డర్ ఫారం",
    headerTitle: "శ్రీ దుర్గా సాయి కేటరింగ్",
    addressTitle: "చిరునామా",
    ownerAddressHeading: "మా చిరునామా",
    ownerNameLabel: "పేరు:",
    ownerPhoneLabel: "ఫోన్:",
    ownerAddressLabel: "చిరునామా:",
    formTitle: "శ్రీ దుర్గా సాయి కేటరింగ్ - ఆర్డర్ ఫారం",
    nameLabel: "పేరు:",
    namePlaceholder: "మీ పేరు",
    phoneLabel: "ఫోన్ నంబర్:",
    phonePlaceholder: "మీ ఫోన్ నంబర్",
    villageLabel: "గ్రామం/పల్లి పేరు:",
    villagePlaceholder: "గ్రామం/పల్లి పేరు",
    addressLabel: "పూర్తి చిరునామా:",
    addressPlaceholder: "పూర్తి చిరునామా",
    eventLabel: "ఈవెంట్ రకం:",
    eventOptions: {
      select: "ఎంచుకోండి",
      wedding: "వివాహం",
      birthday: "పుట్టినరోజు",
      corporate: "కార్పొరేట్ ఈవెంట్",
      other: "ఇతర కారిక్రమాలు"
    },
    mealTimesLabel: "భోజన సమయాలు:",
    mealTimesOptions: {
      morningTiffins: "పొద్దున్న టిఫిన్స్",
      afternoonMeals: "మధ్యాహ్నం భోజనాలు",
      eveningSnacks: "సాయంత్రం స్నాక్స్",
      nightTiffins: "రాత్రి టిఫిన్స్",
      nightMeals: "రాత్రి భోజనాలు"
    },
    dateLabel: "ఈవెంట్ తేదీ:",
    timeLabel: "ఈవెంట్ సమయం:",
    guestsLabel: "అతిథుల సంఖ్య:",
    guestsPlaceholder: "అతిథుల సంఖ్య",
    menuLabel: "మెనూ ప్రాధాన్యతలు:",
    menuPlaceholder: "మీ మెనూ ప్రాధాన్యతలు లేదా ప్రత్యేక అవసరాలు",
    submitBtn: "ఆర్డర్ సమర్పించు",
    highlightsTitle: "కేటరింగ్ ముఖ్యాంశాలు",
    highlightsList: [
      "మేము ప్రతి వంటకాన్ని ఎంతో శ్రద్ధతో, పరిశుభ్రంగా నిర్వహిస్తాము.",
      "ప్రతి నాన్-వెజ్ మరియు వెజ్ ఐటమ్‌ను ప్రత్యేకంగా ఫంక్షన్స్, పండగల కోసం తయారు చేసి అందిస్తాము.",
      "కట్టింగ్, ప్రిపరేషన్, కుకింగ్ ప్రతి దశలో ఆహార స్వచ్ఛత మరియు పరిశుభ్రతను కచ్చితంగా పాటిస్తాము.",
      "మా వంటకాల్లో ఎలాంటి ఫుడ్ ప్రిజర్వేటివ్స్ ఉపయోగించము; ప్రతి పదార్థం తాజా మరియు నాణ్యమైన వాటితో తయారు చేయబడుతుంది.",
      "మేము పెద్ద ఫంక్షన్స్, పెళ్లిళ్లు, పార్టీలు వంటి ఈవెంట్స్‌కు సరిపడే క్యాటరింగ్ సర్వీస్ అందిస్తాము.",
      "ఒక్కో ఐటమ్‌ను పరిశుభ్రంగా, సక్రమమైన స్టోరేజ్‌తో అందిస్తాము.",
      "కుకింగ్, ప్యాకేజింగ్, డెలివరీ ప్రతి దశలో శుభ్రత మరియు హైజీన్‌ను కాపాడుతాము.",
      "మా సిబ్బంది ట్రెయిన్డ్ మరియు రెస్పాన్సిబుల్‌గా ఉంటారు; ప్రతి ఫంక్షన్‌లో ప్రొఫెషనల్ ప్రవర్తనను పాటిస్తారు.",
      "కస్టమర్ అవసరాలకు అనుగుణంగా కస్టమైజ్డ్ మెనూ ప్లానింగ్ కూడా అందుబాటులో ఉంటుంది.",
      "ఆహార పరిశుభ్రత మరియు నిట్టనిలువైన ప్రదర్శన మా మొదటి ప్రాధాన్యత.",
      "క్యాటరింగ్ బాయ్స్, అసిస్టెంట్స్, సిబ్బంది అందరూ కూడా శుభ్రతను కచ్చితంగా పాటిస్తారు.",
      "చిన్న, పెద్ద ఈవెంట్స్‌లో కూడా ఫుడ్ క్వాలిటీ, రుచి, ప్రెజెంటేషన్‌పై పూర్తి దృష్టి పెట్టబడుతుంది."
    ],
    menuTitle: "మీ మెనూని ఎంచుకోండి",
    searchLabel: "వెతకండి:",
    searchPlaceholder: "వెతకండి...",
    summaryTitle: "సారాంశం"
  }
};

// Function to change language
function changeLanguage() {
  const lang = document.getElementById("languageSelect").value;
  document.documentElement.lang = lang;

  // Update page title
  document.getElementById("page-title").textContent = translations[lang].pageTitle;
  // Update header
  document.getElementById("header-title").textContent = translations[lang].headerTitle;
  // Update address section
  document.getElementById("address-title").textContent = translations[lang].addressTitle;
  document.getElementById("owner-address-heading").textContent = translations[lang].ownerAddressHeading;
  document.getElementById("owner-name-label").textContent = translations[lang].ownerNameLabel;
  document.getElementById("owner-phone-label").textContent = translations[lang].ownerPhoneLabel;
  document.getElementById("owner-address-label").textContent = translations[lang].ownerAddressLabel;
  // Update form
  document.getElementById("form-title").textContent = translations[lang].formTitle;
  document.getElementById("name-label").textContent = translations[lang].nameLabel;
  document.getElementById("name").placeholder = translations[lang].namePlaceholder;
  document.getElementById("phone-label").textContent = translations[lang].phoneLabel;
  document.getElementById("phone").placeholder = translations[lang].phonePlaceholder;
  document.getElementById("village-label").textContent = translations[lang].villageLabel;
  document.getElementById("villagename").placeholder = translations[lang].villagePlaceholder;
  document.getElementById("address-label").textContent = translations[lang].addressLabel;
  document.getElementById("address").placeholder = translations[lang].addressPlaceholder;
  document.getElementById("event-label").textContent = translations[lang].eventLabel;
  document.getElementById("event").innerHTML = `
    <option value="">${translations[lang].eventOptions.select}</option>
    <option value="wedding">${translations[lang].eventOptions.wedding}</option>
    <option value="birthday">${translations[lang].eventOptions.birthday}</option>
    <option value="corporate">${translations[lang].eventOptions.corporate}</option>
    <option value="other">${translations[lang].eventOptions.other}</option>
  `;
  document.getElementById("meal-times-label").textContent = translations[lang].mealTimesLabel;
  document.getElementById("meal-times").innerHTML = `
    <option value="morning-tiffins">${translations[lang].mealTimesOptions.morningTiffins}</option>
    <option value="afternoon-meals">${translations[lang].mealTimesOptions.afternoonMeals}</option>
    <option value="evening-snacks">${translations[lang].mealTimesOptions.eveningSnacks}</option>
    <option value="night-tiffins">${translations[lang].mealTimesOptions.nightTiffins}</option>
    <option value="night-meals">${translations[lang].mealTimesOptions.nightMeals}</option>
  `;
  document.getElementById("date-label").textContent = translations[lang].dateLabel;
  document.getElementById("time-label").textContent = translations[lang].timeLabel;
  document.getElementById("guests-label").textContent = translations[lang].guestsLabel;
  document.getElementById("guests").placeholder = translations[lang].guestsPlaceholder;
  document.getElementById("menu-label").textContent = translations[lang].menuLabel;
  document.getElementById("menu").placeholder = translations[lang].menuPlaceholder;
  document.getElementById("submit-btn").textContent = translations[lang].submitBtn;
  // Update highlights section
  document.getElementById("highlights-title").textContent = translations[lang].highlightsTitle;
  const highlightsList = document.getElementById("highlights-list");
  highlightsList.innerHTML = "";
  translations[lang].highlightsList.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    highlightsList.appendChild(li);
  });
  // Update page 2 title and search
  document.querySelector("#page2 .heading").textContent = translations[lang].menuTitle;
  document.querySelector("#page2 .search-container label").textContent = translations[lang].searchLabel;
  document.getElementById("menuSearch").placeholder = translations[lang].searchPlaceholder;
  // Update page 3 title
  document.getElementById("summary-title").textContent = translations[lang].summaryTitle;
}

function gotopage(pageNumber) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + pageNumber).classList.add("active");
}

// Checkbox selection → live preview
document.querySelectorAll("input[type=checkbox]").forEach(chk => {
  chk.addEventListener("change", () => {
    let selected = [...document.querySelectorAll("input[type=checkbox]:checked")]
      .map(c => c.value);
    let listEl = document.getElementById("selectedList");
    listEl.innerHTML = "";
    selected.forEach(item => {
      let li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  });
});

// Step-1 submit
document.getElementById("myform").addEventListener("submit", function (e) {
  e.preventDefault();
  orderData.name = document.getElementById("name").value;
  orderData.phone = document.getElementById("phone").value;
  orderData.village = document.getElementById("villagename").value;
  orderData.address = document.getElementById("address").value;
  orderData.event = document.getElementById("event").value;
  orderData.mealTimes = [...document.getElementById("meal-times").selectedOptions].map(option => option.value);
  orderData.date = document.getElementById("date").value;
  orderData.time = document.getElementById("time").value;
  orderData.guests = document.getElementById("guests").value;
  gotopage(2);
});

// Step-2 submit
document.getElementById("menuForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let selected = [];
  document.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
    selected.push(cb.value);
  });
  orderData.menu = selected;

  // WhatsApp message
  const lang = document.getElementById("languageSelect").value;
  const messageLabels = {
    en: {
      title: "🍴 *New Catering Order* 🍴",
      name: "👤 Name: ",
      phone: "📞 Phone: ",
      village: "🏡 Village/Colony: ",
      address: "📬 Address: ",
      event: "🎉 Event: ",
      mealTimes: "⏳ Meal Times: ",
      date: "📅 Date: ",
      time: "⏰ Time: ",
      guests: "👥 Guests: ",
      menu: "🍽️ Menu: \n"
    },
    te: {
      title: "🍴 *కొత్త క్యాటరింగ్ ఆర్డర్* 🍴",
      name: "👤 పేరు: ",
      phone: "📞 ఫోన్: ",
      village: "🏡 గ్రామం/పల్లి: ",
      address: "📬 చిరునామా: ",
      event: "🎉 ఈవెంట్: ",
      mealTimes: "⏳ భోజన సమయాలు: ",
      date: "📅 తేదీ: ",
      time: "⏰ సమయం: ",
      guests: "👥 అతిథులు: ",
      menu: "🍽️ మెనూ: \n"
    }
  };
  let mealTimesText = orderData.mealTimes.map(time => translations[lang].mealTimesOptions[time]).join(", ");
  let message = messageLabels[lang].title + "\n" +
    "--------------------------------\n" +
    messageLabels[lang].name + orderData.name + "\n" +
    messageLabels[lang].phone + orderData.phone + "\n" +
    messageLabels[lang].village + orderData.village + "\n" +
    messageLabels[lang].address + orderData.address + "\n" +
    messageLabels[lang].event + orderData.event + "\n" +
    messageLabels[lang].mealTimes + mealTimesText + "\n" +
    messageLabels[lang].date + orderData.date + "\n" +
    messageLabels[lang].time + orderData.time + "\n" +
    messageLabels[lang].guests + orderData.guests + "\n" +
    messageLabels[lang].menu + orderData.menu.join("\n");
  let phoneNumber = "+919491011566";
  let whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappURL, "_blank");

  // Local summary
  let summaryDiv = document.getElementById("summary");
  const summaryLabels = {
    en: {
      name: "Name:",
      phone: "Phone:",
      village: "Village/Colony:",
      address: "Address:",
      event: "Event:",
      mealTimes: "Meal Times:",
      date: "Date:",
      time: "Time:",
      guests: "Guests:",
      menu: "Menu:",
      success: "✔️ Your Order Was Submitted Successfully!"
    },
    te: {
      name: "పేరు:",
      phone: "ఫోన్:",
      village: "గ్రామం/పల్లి:",
      address: "చిరునామా:",
      event: "ఈవెంట్:",
      mealTimes: "భోజన సమయాలు:",
      date: "తేదీ:",
      time: "సమయం:",
      guests: "అతిథులు:",
      menu: "మెనూ:",
      success: "✔️ మీ ఆర్డర్ విజయవంతంగా సమర్పించబడింది!"
    }
  };
  summaryDiv.innerHTML = `
    <p><b>${summaryLabels[lang].name}</b> ${orderData.name}</p>
    <p><b>${summaryLabels[lang].phone}</b> ${orderData.phone}</p>
    <p><b>${summaryLabels[lang].village}</b> ${orderData.village}</p>
    <p><b>${summaryLabels[lang].address}</b> ${orderData.address}</p>
    <p><b>${summaryLabels[lang].event}</b> ${orderData.event}</p>
    <p><b>${summaryLabels[lang].mealTimes}</b> ${mealTimesText}</p>
    <p><b>${summaryLabels[lang].date}</b> ${orderData.date}</p>
    <p><b>${summaryLabels[lang].time}</b> ${orderData.time}</p>
    <p><b>${summaryLabels[lang].guests}</b> ${orderData.guests}</p>
    <p><b>${summaryLabels[lang].menu}</b></p>
    <ul id="finalMenu"></ul>
    <hr>
    <h3 style="color: green; text-align:center;">${summaryLabels[lang].success}</h3>
  `;
  let menuList = document.getElementById("finalMenu");
  orderData.menu.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li);
  });
  gotopage(3);
});

// Search
document.getElementById("menuSearch").addEventListener("input", function () {
  let filter = this.value.toLowerCase().trim();
  let categories = document.querySelectorAll(".category");
  if (filter) {
    categories.forEach(cat => {
      let labels = cat.querySelectorAll("label");
      let catTitle = cat.querySelector("h2,h3,h4")?.textContent.toLowerCase() || "";
      let hasMatch = false;
      labels.forEach(label => {
        let text = label.textContent.toLowerCase();
        if (text.includes(filter)) {
          label.style.display = "";
          hasMatch = true;
        } else {
          label.style.display = "none";
        }
      });
      if (catTitle.includes(filter)) {
        labels.forEach(l => (l.style.display = ""));
        hasMatch = true;
      }
      cat.style.display = hasMatch ? "" : "none";
    });
  } else {
    categories.forEach(cat => {
      cat.style.display = "";
      let labels = cat.querySelectorAll("label");
      labels.forEach(l => (l.style.display = ""));
    });
  }
});