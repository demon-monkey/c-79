var student_array=[];

function submit_fun(){
var name_1=document.getElementById("name1").value;
var name_2=document.getElementById("name2").value;
var name_3=document.getElementById("name3").value;
var name_4=document.getElementById("name4").value;

student_array.push(name_1);
student_array.push(name_2);
student_array.push(name_3);
student_array.push(name_4);
console.log(student_array);

document.getElementById("output").innerHTML=student_array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block"
}

function sort_fun(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("output").innerHTML=student_array;
}