let orderData = {}; 

function gotopage(pageNumber){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+pageNumber).classList.add("active");
}

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

document.getElementById("menuForm").addEventListener("submit", function(e){
  e.preventDefault();

  let selected = [];
  document.querySelectorAll("input[type='checkbox']:checked").forEach(cb=>{
    selected.push(cb.value);
  });

  let sure = confirm("Are you sure? Do you want to submit?");
  if(!sure){
    return;
  }

  orderData.menu = selected;
  
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
