function clear_disp() {
    document.getElementById("calc-display").innerText = "0";
}

function add_number(n) {
    var number = document.getElementById("calc-display").innerText;
   if (number=="0."){
    document.getElementById("calc-display").innerText = number.toString() + n.toString();
   } else if (Number.parseFloat(number)==0) {
        document.getElementById("calc-display").innerText = n.toString();
    } else {
        if (document.getElementById("calc-display").innerText.length<8) {
            document.getElementById("calc-display").innerText = number.toString() + n.toString();
        }
    }
}

function add_dp() {
    var currentNum = document.getElementById("calc-display").innerText
    document.getElementById("calc-display").innerText = currentNum + ".";
}

let op_clicked = false;
let op_num = 0;
let prev_number = 0;
function op_click(c) {
    if (op_clicked == false) {
        prev_number = Number.parseFloat(document.getElementById("calc-display").innerText);
        op_clicked = true;
        op_num = c;
        clear_disp();
    }
}

function int_check(num) {
    if (num%1 == 0) {
        return num;
    } else {
        return Number.parseFloat(num.toFixed(8));
    }
}

function calculate() {
    if (op_clicked == true) {
        if (op_num == 1) {
            let result = int_check(Number.parseFloat(prev_number) / Number.parseFloat(document.getElementById("calc-display").innerText));
            document.getElementById("calc-display").innerText = result.toString();
            op_clicked = false;
            op_num = 0;
            prev_number = 0;
        } else if (op_num == 2) {
            let result = int_check(Number.parseFloat(prev_number) * Number.parseFloat(document.getElementById("calc-display").innerText));
            document.getElementById("calc-display").innerText = result.toString();
            op_clicked = false;
            op_num = 0;
            prev_number = 0;   
        } else if (op_num == 3) {
            let result = int_check(Number.parseFloat(prev_number) - Number.parseFloat(document.getElementById("calc-display").innerText));
            document.getElementById("calc-display").innerText = result.toString();
            op_clicked = false;
            op_num = 0;
            prev_number = 0;
        } else if (op_num == 4) {
            let result = int_check(Number.parseFloat(prev_number) + Number.parseFloat(document.getElementById("calc-display").innerText));
            document.getElementById("calc-display").innerText = result.toString();
            op_clicked = false;
            op_num = 0;
            prev_number = 0;
        }
    }
}