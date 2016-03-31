javascript: function D(a, b) {
    c = b.split('|');
    d = false;
    for (q = 0; q < c.length; q++) {
        if (c[q] == a) d = true;
    }
    return d;
}

function E() {
    f0 = document.forms['addPassengerForm'] || document.forms['jpBook'];
    if (f0['addPassengerForm:psdetail:0:psgnName']) f0['addPassengerForm:psdetail:0:psgnName'].value = 'NameOne';
    dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:0:\']');
    if (dq) dq.value = 'Name1';
    if (f0['addPassengerForm:psdetail:0:psgnAge']) f0['addPassengerForm:psdetail:0:psgnAge'].value = '100';
    if (f0['addPassengerForm:psdetail:0:psgnGender']) f0['addPassengerForm:psdetail:0:psgnGender'].value = 'M';
    if (f0['addPassengerForm:psdetail:0:berthChoice']) f0['addPassengerForm:psdetail:0:berthChoice'].value = 'LB';
    if (f0['addPassengerForm:psdetail:0:foodChoice']) f0['addPassengerForm:psdetail:0:foodChoice'].value = ' ';
    if (f0['addPassengerForm:psdetail:1:psgnName']) f0['addPassengerForm:psdetail:1:psgnName'].value = 'NameTwo';
    dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:1:\']');
    if (dq) dq.value = 'Name2';
    if (f0['addPassengerForm:psdetail:1:psgnAge']) f0['addPassengerForm:psdetail:1:psgnAge'].value = '100';
    if (f0['addPassengerForm:psdetail:1:psgnGender']) f0['addPassengerForm:psdetail:1:psgnGender'].value = 'F';
    if (f0['addPassengerForm:psdetail:1:berthChoice']) f0['addPassengerForm:psdetail:1:berthChoice'].value = 'MB';
    if (f0['addPassengerForm:psdetail:0:foodChoice']) f0['addPassengerForm:psdetail:0:foodChoice'].value = ' ';
    if (f0['addPassengerForm:psdetail:2:psgnName']) f0['addPassengerForm:psdetail:2:psgnName'].value = 'NameThree';
    dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:2:\']');
    if (dq) dq.value = 'Name3';
    if (f0['addPassengerForm:psdetail:2:psgnAge']) f0['addPassengerForm:psdetail:2:psgnAge'].value = '100';
    if (f0['addPassengerForm:psdetail:2:psgnGender']) f0['addPassengerForm:psdetail:2:psgnGender'].value = 'M';
    if (f0['addPassengerForm:psdetail:2:berthChoice']) f0['addPassengerForm:psdetail:2:berthChoice'].value = 'UB';
    if (f0['addPassengerForm:psdetail:0:foodChoice']) f0['addPassengerForm:psdetail:0:foodChoice'].value = ' ';
    if (f0['addPassengerForm:psdetail:3:psgnName']) f0['addPassengerForm:psdetail:3:psgnName'].value = 'NameFour';
    dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:3:\']');
    if (dq) dq.value = 'Name4';
    if (f0['addPassengerForm:psdetail:3:psgnAge']) f0['addPassengerForm:psdetail:3:psgnAge'].value = '100';
    if (f0['addPassengerForm:psdetail:3:psgnGender']) f0['addPassengerForm:psdetail:3:psgnGender'].value = 'F';
    if (f0['addPassengerForm:psdetail:3:berthChoice']) f0['addPassengerForm:psdetail:3:berthChoice'].value = 'SL';
    if (f0['addPassengerForm:psdetail:0:foodChoice']) f0['addPassengerForm:psdetail:0:foodChoice'].value = ' ';
    if (f0['addPassengerForm:psdetail:4:psgnName']) f0['addPassengerForm:psdetail:4:psgnName'].value = 'NameFive';
    dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:4:\']');
    if (dq) dq.value = 'Name5';
    if (f0['addPassengerForm:psdetail:4:psgnAge']) f0['addPassengerForm:psdetail:4:psgnAge'].value = '100';
    if (f0['addPassengerForm:psdetail:4:psgnGender']) f0['addPassengerForm:psdetail:4:psgnGender'].value = 'M';
    if (f0['addPassengerForm:psdetail:4:berthChoice']) f0['addPassengerForm:psdetail:4:berthChoice'].value = 'SU';
    if (f0['addPassengerForm:psdetail:0:foodChoice']) f0['addPassengerForm:psdetail:0:foodChoice'].value = ' ';
    if (f0['addPassengerForm:psdetail:5:psgnName']) f0['addPassengerForm:psdetail:5:psgnName'].value = 'NameSix';
    dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:5:\']');
    if (dq) dq.value = 'Name6';
    if (f0['addPassengerForm:psdetail:5:psgnAge']) f0['addPassengerForm:psdetail:5:psgnAge'].value = '100';
    if (f0['addPassengerForm:psdetail:5:psgnGender']) f0['addPassengerForm:psdetail:5:psgnGender'].value = 'F';
    if (f0['addPassengerForm:psdetail:5:berthChoice']) f0['addPassengerForm:psdetail:5:berthChoice'].value = 'WS';
    if (f0['addPassengerForm:psdetail:0:foodChoice']) f0['addPassengerForm:psdetail:0:foodChoice'].value = ' ';
    if (f0['addPassengerForm:childInfoTable:0:infantName']) f0['addPassengerForm:childInfoTable:0:infantName'].value = 'ChildOne';
    if (f0['addPassengerForm:childInfoTable:0:infantAge']) f0['addPassengerForm:childInfoTable:0:infantAge'].value = '0';
    if (f0['addPassengerForm:childInfoTable:0:infantGender']) f0['addPassengerForm:childInfoTable:0:infantGender'].value = 'M';
    if (f0['addPassengerForm:childInfoTable:1:infantName']) f0['addPassengerForm:childInfoTable:1:infantName'].value = '';
    if (f0['addPassengerForm:childInfoTable:1:infantAge']) f0['addPassengerForm:childInfoTable:1:infantAge'].value = '-1';
    if (f0['addPassengerForm:childInfoTable:1:infantGender']) f0['addPassengerForm:childInfoTable:1:infantGender'].value = '';
    if (f0['addPassengerForm:boardingStation']) f0['addPassengerForm:boardingStation'].value = 'NCJ';
    if (f0['addPassengerForm:mobileNo']) f0['addPassengerForm:mobileNo'].value = '9999999999';
    if (f0['jpBook:bankINBList']) f0['jpBook:bankINBList'].value = '-1';
    if (f0['jpBook:bankPGList']) f0['jpBook:bankPGList'].value = '-1';
    if (f0['jpBook:bankDCList']) f0['jpBook:bankDCList'].value = '-1';
    if (f0['jpBook:bankCCList']) f0['jpBook:bankCCList'].value = '-1';
    if (f0['jpBook:bankEMIList']) f0['jpBook:bankEMIList'].value = '-1';
}
E()
