let input = document.getElementById("inpt");
input.max = new Date().toISOString().split("T")[0]; //يمنع تحديد تاريخ بالمستقبل
/**
 يعني اعلى قيمة ممكن ادخلها بالانبوت هي التاريخ الحالي
 1. new Date().toISOString(): new Date() creates a new JavaScript Date object representing the current date and time. 
.toISOString() converts the Date object to a string in ISO format, which looks like this: "YYYY-MM-DDTHH:mm:ss.sssZ". This format includes the date, time, and timezone information.

2. .split("T"): .split("T") is a method that splits the string into an array of substrings using the "T" character as the separator. After the split, you get an array with two elements: the date part before "T" and the time part after "T".


3. [0]: [0] retrieves the first element of the array, which is the date part.

4. "userInput.max = ...": userInput refers to an HTML input element, likely of type "date". 
The .max attribute sets the maximum allowed value for the date input.

Putting it all together, the line of code sets the maximum date for the input element to the current date. It extracts the date part from the ISO string format and assigns it to the max attribute.
 This ensures that users cannot select a date beyond the current date when using the input field. (thanks to chatGPT for the explanation
 */
function calculateAge() {
  let birthDate = new Date(input.value); //جبت التاريخ الي دخلو المستخدم وحولتو لتاريخ بدل سترينج
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
    //يعني اذا كان شهر ميلادي بعدو مش جاي يعني بعدني مش موفي السنة
    y3--;
    //وعشان احسب عمري بالاشهر بدي اعرف عدد الاشهر الي قطعتهن بالسنة لحتوى اوصل يوم ميلادي
    // وبعملها من خلال اني بجمع 12 شهر بالسنة الكاملة زائدد الشهر الحالي ناقص الشهر الي انولدت فيه
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    //اليوم الحالي اكبر من اليوم الي انولدت فيه يعني انا فايتة عدة ايام بالسنة الجديدة
    d3 = d2 - d1;
  } else {
    m3--;
    //يعني لو كان يوم ميلادي بعدو مش جاي
    //عشان احسب عدد الايام بدقة بعمل نفس السنين بس هون لازم اعرف عدد الايام بالشهر الي انولدت فيه لانهن بختلفن فبعمل فنكشن تحسبلي اياه
    d3 = calculateDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
    //احتياطا عشان لو الشهر صار بالسالب مثلا لو كان شهر 1 ونقصت واحد رح يروح على 11 وطبعا هيك نقصت سنة
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
