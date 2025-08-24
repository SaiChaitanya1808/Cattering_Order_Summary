let orderData = {}; 

function gotopage(pageNumber){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+pageNumber).classList.add("active");
}

// Checkbox selection → live preview
document.querySelectorAll("input[type=checkbox]").forEach(chk=>{
  chk.addEventListener("change",()=>{
    let selected = [...document.querySelectorAll("input[type=checkbox]:checked")]
      .map(c=>c.value);

    let listEl = document.getElementById("selectedList");
    listEl.innerHTML = "";

    selected.forEach(item=>{
      let li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  });
});

// Step-1 submit
document.getElementById("myform").addEventListener("submit", function(e){
  e.preventDefault();
  orderData.name = document.getElementById("name").value;
  orderData.phone = document.getElementById("phone").value;
  orderData.event = document.getElementById("event").value;
  orderData.date = document.getElementById("date").value;
  orderData.time = document.getElementById("time").value;
  orderData.guests = document.getElementById("guests").value;
  gotopage(2);
});

// Step-2 submit
document.getElementById("menuForm").addEventListener("submit", function(e){
  e.preventDefault();

  let selected = [];
  document.querySelectorAll("input[type='checkbox']:checked").forEach(cb=>{
    selected.push(cb.value);
  });
  orderData.menu = selected;

  // WhatsApp message
  let message = `
  *New Catering Order* 🍴
  ---------------------
  👤 Name: ${orderData.name}
  📞 Phone: ${orderData.phone}
  🎉 Event: ${orderData.event}
  📅 Date: ${orderData.date}
  ⏰ Time: ${orderData.time}
  👥 Guests: ${orderData.guests}
  🍽️ Menu: ${orderData.menu.join(", ")}
  `;

  // 👇 ఇక్కడ నీ WhatsApp నంబర్ +91 తో పెట్టాలి
  let phoneNumber = "+919491011566";  

  let whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  // WhatsApp లో open అవుతుంది
  window.open(whatsappURL, "_blank");

  // Local summary కూడా చూపించడానికి
  let summaryDiv = document.getElementById("summary");
  summaryDiv.innerHTML = `
    <p><b>పేరు / Name:</b> ${orderData.name}</p>
    <p><b>ఫోన్ / Phone:</b> ${orderData.phone}</p>
    <p><b>ఈవెంట్ / Event:</b> ${orderData.event}</p>
    <p><b>తేదీ / Date:</b> ${orderData.date}</p>
    <p><b>సమయం / Time:</b> ${orderData.time}</p>
    <p><b>అతిథులు / Guests:</b> ${orderData.guests}</p>
    <p><b>మెనూ / Menu:</b></p>
    <ul id="finalMenu"></ul>
    <hr>
    <h3 style="color: green; text-align:center;">
      ✔️ మీ ఆర్డర్ విజయవంతంగా సమర్పించబడింది! <br> 
      Your form was submitted successfully!
    </h3>
  `;
  let menuList = document.getElementById("finalMenu");
  orderData.menu.forEach(item=>{
    let li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li);
  });

  gotopage(3);
});

// Search filter
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
