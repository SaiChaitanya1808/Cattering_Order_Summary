
document.getElementById("clientForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");
});

function submitOrder() {
  let items = [];
  document.querySelectorAll("#step2 input[type='checkbox']:checked").forEach(el => {
    items.push(el.value);
  });

  let summary = `
    <b>Name:</b> ${document.getElementById("name").value}<br>
    <b>Phone:</b> ${document.getElementById("phone").value}<br>
    <b>Address:</b> ${document.getElementById("address").value}<br>
    <b>No. of People:</b> ${document.getElementById("people").value}<br>
    <b>Date:</b> ${document.getElementById("date").value}<br>
    <b>Time:</b> ${document.getElementById("time").value}<br>
    <b>Requests:</b> ${document.getElementById("requests").value || "None"}<br><br>
    <b>Selected Items:</b> ${items.length ? items.join(", ") : "No items selected"}
  `;

  document.getElementById("step2").classList.remove("active");
  document.getElementById("step3").classList.add("active");
  document.getElementById("summary").innerHTML = summary;
}
