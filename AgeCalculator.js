let input = document.getElementById("inpt");
input.max = new Date().toISOString().split("T")[0]; 

function calculateAge() {
  let birthDate = new Date(input.value); 
  let today = new Date();
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth();
  let y1 = birthDate.getFullYear();

  let d2 = today.getDate();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();

  let y3, m3, d3; //بتخزن فرق العمر

  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
   
    y3--;
    
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
  
    d3 = d2 - d1;
  } else {
    m3--;
   
    d3 = calculateDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
    
  }
  document.getElementById("result").style.display = "block";
  document.getElementById("year").innerHTML = y3;
  document.getElementById("month").innerHTML = m3;
  document.getElementById("day").innerHTML = d3;
}
function calculateDaysInMonth(Year, Month) {
  return new Date(Year, Month, 0).getDate();
  //هيك بترجع اخر يوم او الي هو اخر تاريخ بهاد الشهر
}
