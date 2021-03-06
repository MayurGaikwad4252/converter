document.getElementById("ft1").addEventListener("keyup", function() {
    var feet = document.getElementById("ft1");
    var meters = document.getElementById("m1");
    var result9 = feet.value / 3.2808;
    meters.value = result9;
  });
  document.getElementById("ft2").addEventListener("keyup", function() {
    var feet1 = document.getElementById("ft2");
    var inch = document.getElementById("inch1");
    var result10 = feet1.value * 12;
    inch.value = result10;
  });
  document.getElementById("ft3").addEventListener("keyup", function() {
    var feet2 = document.getElementById("ft3");
    var cm = document.getElementById("cm1");
    var result11 = feet2.value / 0.032808;
    cm.value = result11;
  });
  document.getElementById("ft4").addEventListener("keyup", function() {
    var feet3 = document.getElementById("ft4");
    var yard = document.getElementById("yard1");
    var result12 = feet3.value * 0.33333;
    yard.value = result12;
  });
  document.getElementById("ft5").addEventListener("keyup", function() {
    var feet4 = document.getElementById("ft5");
    var km = document.getElementById("km1");
    var result13 = feet4.value / 3280.8;
    km.value = result13;
  });
  document.getElementById("ft6").addEventListener("keyup", function() {
    var feet5 = document.getElementById("ft6");
    var miles = document.getElementById("miles1");
    var result14 = feet5.value * 0.00018939;
    miles.value = result14;
  });
  document.getElementById("meter1").addEventListener("keyup", function() {
    var m1 = document.getElementById("meter1");
    var feet = document.getElementById("output1");
    var result15 = m1.value * 3.2808;
    feet.value = result15;
  });
  document.getElementById("meter2").addEventListener("keyup", function() {
    var m2 = document.getElementById("meter2");
    var inches = document.getElementById("output2");
    var result16 = m2.value * 39.370;
    inches.value = result16;
  });
  document.getElementById("meter3").addEventListener("keyup", function() {
    var m3 = document.getElementById("meter3");
    var cm = document.getElementById("output3");
    var result17 = m3.value / 0.01;
    cm.value = result17;
  });
  document.getElementById("meter4").addEventListener("keyup", function() {
    var m4 = document.getElementById("meter4");
    var yards = document.getElementById("output4");
    var result18 = m4.value * 1.0936;
    yards.value = result18;
  });
  document.getElementById("meter5").addEventListener("keyup", function() {
    var m5 = document.getElementById("meter5");
    var km = document.getElementById("output5");
    var result19 = km.value / 1000;
    km.value = result19;
  });
  document.getElementById("meter6").addEventListener("keyup", function() {
    var m6 = document.getElementById("meter6");
    var miles = document.getElementById("output6");
    var result20 = m6.value * 0.00062137;
    miles.value = result20;
  });
  document.getElementById("inches1").addEventListener("keyup", function() {
    var inch1 = document.getElementById("inches1");
    var feet01 = document.getElementById("output7");
    var result21 = inch1.value * 0.083333;
    feet01.value = result21;
  });
  document.getElementById("inches2").addEventListener("keyup", function() {
    var inch2 = document.getElementById("inches2");
    var meters02 = document.getElementById("output8");
    var result22 = inch2.value / 39.370;
    meters02.value = result22;
  });
  document.getElementById("inches3").addEventListener("keyup", function() {
    var inch3 = document.getElementById("inches3");
    var cm03 = document.getElementById("output9");
    var result23 = inch3.value / 0.39370;
    cm03.value = result23;
  });
  document.getElementById("inches4").addEventListener("keyup", function() {
    var inch4 = document.getElementById("inches4");
    var yards04 = document.getElementById("output10");
    var result24 = inch4.value * 0.027778;
    yards04.value = result24;
  });
  document.getElementById("inches5").addEventListener("keyup", function() {
    var inch5 = document.getElementById("inches5");
    var km05 = document.getElementById("output11");
    var result25 = inch5.value / 39370;
    km05.value = result25;
  });
  document.getElementById("inches6").addEventListener("keyup", function() {
    var inch6 = document.getElementById("inches6");
    var mile06 = document.getElementById("output12");
    var result26 = inch6.value * 0.000015783;
    mile06.value = result26;
  });
  document.getElementById("centi1").addEventListener("keyup", function() {
    var cm11 = document.getElementById("centi1");
    var feet11 = document.getElementById("ans1");
    var result27 = cm11.value * 0.032808;
    feet11.value = result27;
  });
  document.getElementById("centi2").addEventListener("keyup", function() {
    var cm22 = document.getElementById("centi2");
    var meters11 = document.getElementById("ans2");
    var result28 = cm22.value / 100;
    meters11.value = result28;
  });
  document.getElementById("centi3").addEventListener("keyup", function() {
    var cm33 = document.getElementById("centi3");
    var inches11 = document.getElementById("ans3");
    var result29 = cm33.value * 0.39370;
    inches11.value = result29;
  });
  document.getElementById("centi4").addEventListener("keyup", function() {
    var cm44 = document.getElementById("centi4");
    var yards11 = document.getElementById("ans4");
    var result30 = cm44.value * 0.010936;
    yards11.value = result30;
  });
  document.getElementById("centi5").addEventListener("keyup", function() {
    var cm55 = document.getElementById("centi5");
    var km11 = document.getElementById("ans5");
    var result31 = cm55.value / 100000;
    km11.value = result31;
  });
  document.getElementById("centi6").addEventListener("keyup", function() {
    var cm66 = document.getElementById("centi6");
    var miles11 = document.getElementById("ans6");
    var result32 = cm66.value * 0.0000062137;
    miles11.value = result32;
  });
  document.getElementById("yards1").addEventListener("keyup", function() {
    var yard1 = document.getElementById("yards1");
    var fty = document.getElementById("op1");
    var result33 = yard1.value * 3;
    fty.value = result33;
  });
  document.getElementById("yards2").addEventListener("keyup", function() {
    var yard2 = document.getElementById("yards2");
    var ytm = document.getElementById("op2");
    var result34 = yard2.value / 1.0936;
    ytm.value = result34;
  });
  document.getElementById("yards3").addEventListener("keyup", function() {
    var yard3 = document.getElementById("yards3");
    var yti = document.getElementById("op3");
    var result35 = yard3.value * 36;
    yti.value = result35;
  });
  document.getElementById("yards4").addEventListener("keyup", function() {
    var yard4 = document.getElementById("yards4");
    var ytc = document.getElementById("op4");
    var result36 = yard4.value / 0.010936;
    ytc.value = result36;
  });
  document.getElementById("yards5").addEventListener("keyup", function() {
    var yard5 = document.getElementById("yards5");
    var ytk = document.getElementById("op5");
    var result37 = yard5.value / 1093.6;
    ytk.value = result37;
  });
  document.getElementById("yards6").addEventListener("keyup", function() {
    var yard6 = document.getElementById("yards6");
    var ytmi = document.getElementById("op6");
    var result38 = yard6.value * 0.00056818;
    ytmi.value = result38;
  });
  document.getElementById("kilometer1").addEventListener("keyup", function() {
    var kilom1 = document.getElementById("kilometer1");
    var kmtf = document.getElementById("kmtf");
    var result39 = kilom1.value * 3280.8;
    kmtf.value = result39;
  });
  document.getElementById("kilometer2").addEventListener("keyup", function() {
    var kilom2 = document.getElementById("kilometer2");
    var kmtm = document.getElementById("kmtm");
    var result40 = kilom2.value * 1000;
    kmtm.value = result40;
  });
  document.getElementById("kilometer3").addEventListener("keyup", function() {
    var kilom3 = document.getElementById("kilometer3");
    var kmti = document.getElementById("kmti");
    var result41 = kilom3.value * 39370;
    kmti.value = result41;
  });
  document.getElementById("kilometer4").addEventListener("keyup", function() {
    var kilom4 = document.getElementById("kilometer4");
    var kmtc = document.getElementById("kmtc");
    var result42 = kilom4.value * 100000;
    kmtc.value = result42;
  });
  document.getElementById("kilometer5").addEventListener("keyup", function() {
    var kilom5 = document.getElementById("kilometer5");
    var kmty = document.getElementById("kmty");
    var result43 = kilom5.value * 1093.6;
    kmty.value = result43;
  });
  document.getElementById("kilometer6").addEventListener("keyup", function() {
    var kilom6 = document.getElementById("kilometer6");
    var kmtmi = document.getElementById("kmtmi");
    var result44 = kilom6.value * 0.62137;
    kmtmi.value = result44;
  });
  document.getElementById("miles01").addEventListener("keyup", function() {
    var miles111 = document.getElementById("miles01");
    var feet111 = document.getElementById("milestft1");
    var result45 = miles111.value * 5280;
    feet111.value = result45;
  });
  document.getElementById("miles02").addEventListener("keyup", function() {
    var miles222 = document.getElementById("miles02");
    var meters222 = document.getElementById("milestmt2");
    var result46 = miles222.value / 0.00062137;
    meters222.value = result46;
  });
  document.getElementById("miles03").addEventListener("keyup", function() {
    var miles333 = document.getElementById("milesti3");
    var inches333 = document.getElementById("milesti3");
    var result47 = miles333.value * 63360;
    inches333.value = result47;
  });
  document.getElementById("miles04").addEventListener("keyup", function() {
    var miles444 = document.getElementById("miles04");
    var cm444 = document.getElementById("milestcm4");
    var result48 = miles444.value / 0.0000062137;
    cm444.value = result48;
  });
  document.getElementById("miles05").addEventListener("keyup", function() {
    var miles555 = document.getElementById("miles05");
    var yards555 = document.getElementById("milesty5");
    var result49 = miles555.value * 1760;
    yards555.value = result49;
  });
  document.getElementById("miles06").addEventListener("keyup", function() {
    var miles006 = document.getElementById("miles06");
    var km006 = document.getElementById("milestkm6");
    var result50 = miles006.value / 0.62137;
    km006.value = result50;
  });