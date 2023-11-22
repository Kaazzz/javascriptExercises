function operation(operator){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(operator === 'mult'){
        var answer = num1 * num2;
    }else{
        var answer = num1 / num2;
    }
    
    document.getElementById("answer").innerText = answer;
    
}

function guess(){

    var num1 = parseInt(document.getElementById("rand").value);

    if(num1 <= 0 || num1 >= 11){
        alert("1-10 RA lage!");
        return;
    }

    var randomNumber = Math.floor(Math.random() * 10) + 1;

    if(num1 === randomNumber){
        alert("Good Work");
    }else{
        alert("Not matched");
    }
}

function greatest(){

    var int1 = parseFloat(document.getElementById("int1").value);
    var int2 = parseFloat(document.getElementById("int2").value);
    var int3 = parseFloat(document.getElementById("int3").value);

    if(int1 >= int2 && int1 >= int3){
        document.getElementById("greatestInt").innerText = int1;
    }else if(int2 >= int1 && int2 >= int3){
        document.getElementById("greatestInt").innerText = int2;
    }else if(int3 >= int1 && int3 >= int1){
        document.getElementById("greatestInt").innerText = int3;
    }
}

function checkSet(){

    var int1 = parseFloat(document.getElementById("int11").value);
    var int2 = parseFloat(document.getElementById("int22").value);
    var int3 = parseFloat(document.getElementById("int33").value);

    if(int1 === int2 && int1 === int3){
        return 30;
    }else if(int1 === int2 || int2 === int3 || int1 === int3){
        return 40;
    }else{
        return 20;
    }
}

function displayResult() {

    var answer = checkSet();

    document.getElementById("ambotUnsaNi").innerText = "Result: " + String(answer);

}

function revString(){

    var str1 = document.getElementById("string").value;

    var revStr = str1.split("");

    var bali = revStr.reverse();

    var revedStr = bali.join("");

    document.getElementById("StringRev").innerText = "Reversed String : " + revedStr;

}

function palindromeCheck(){

    var str1 = document.getElementById("stringNew").value;

    str1 = str1.charAt(0).toLowerCase() + str1.slice(1);

    var revStr = str1.split("");

    var bali = revStr.reverse();

    var revedStr = bali.join("");

    if(revedStr === str1){
        alert("The " + str1 + " is a palindrome");
    }else{
        alert("This is not a palindrome");
    }

}

function findAngle(){

    var num = parseInt(document.getElementById("angle").value);

    if(num >= 0 && num < 90){
        document.getElementById("typeOfAngle").innerText = "Acute angle";
    }else if(num == 90){
        document.getElementById("typeOfAngle").innerText = "Right angle";
    }else if(num > 90 && num < 180){
        document.getElementById("typeOfAngle").innerText = "Obtuse angle";
    }else if(num == 180){
        document.getElementById("typeOfAngle").innerText = "Straight angle";
    }else{
        alert("Angle is too much or too low!");
    }


}