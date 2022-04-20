/**
 * @Author: Your name
 * @Date:   2022-04-09 19:26:47
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-20 11:05:44
 */



/*Display submit comment text*/

document.getElementById("commentHere").onclick=function() {myFunction()};

function myFunction(){
document.getElementById("commentHere").innerHTML = '<p class="alert alert-light text-center" role="alert"> Your comment has been submitted </p>'
}

/*Display submit join us form*/

document.getElementById("joinForm").onclick=function() {myForm()};

function myForm(){
document.getElementById("joinForm").innerHTML = '<p class="alert alert-light text-center" role="alert"> Your details have been submitted </p>'
}
