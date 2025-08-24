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
// Step-2 submit
document.getElementById("menuForm").addEventListener("submit", function(e){
  e.preventDefault();

  let selected = [];
  document.querySelectorAll("input[type='checkbox']:checked").forEach(cb=>{
    selected.push(cb.value);
  });
  orderData.menu = selected;

  // Telugu WhatsApp message (line by line)
  let message = 
    "🍴 *కొత్త క్యాటరింగ్ ఆర్డర్* 🍴\n" +
    "--------------------------------\n" +
    "👤 పేరు: " + orderData.name + "\n" +
    "📞 ఫోన్: " + orderData.phone + "\n" +
    "🎉 ఈవెంట్: " + orderData.event + "\n" +
    "📅 తేదీ: " + orderData.date + "\n" +
    "⏰ సమయం: " + orderData.time + "\n" +
    "👥 అతిథులు: " + orderData.guests + "\n" +
    "🍽️ మెనూ: \n" + orderData.menu.join("\n");

  // 👇 ఇక్కడ నీ WhatsApp నంబర్ +91 తో పెట్టాలి
  let phoneNumber = "+919491011566";  

  let whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  // WhatsApp లో open అవుతుంది
  window.open(whatsappURL, "_blank");

  // Local summary చూపించడానికి
  let summaryDiv = document.getElementById("summary");
  summaryDiv.innerHTML = `
    <p><b>పేరు:</b> ${orderData.name}</p>
    <p><b>ఫోన్:</b> ${orderData.phone}</p>
    <p><b>ఈవెంట్:</b> ${orderData.event}</p>
    <p><b>తేదీ:</b> ${orderData.date}</p>
    <p><b>సమయం:</b> ${orderData.time}</p>
    <p><b>అతిథులు:</b> ${orderData.guests}</p>
    <p><b>మెనూ:</b></p>
    <ul id="finalMenu"></ul>
    <hr>
    <h3 style="color: green; text-align:center;">
      ✔️ మీ ఆర్డర్ విజయవంతంగా సమర్పించబడింది!
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
