function mahi()
{
    alert("Hello, world!");
}
function mahi1()
{
    const userConfirmed = confirm("Are you sure you want to continue?");
    if (userConfirmed) {
    console.log("you press ok!!!")
    } else {
    // User clicked "Cancel"
    }
}

function mahi2()
{
    const userName = prompt("Enter your name:", "write your name here .");
    if (userName) {
    alert("Hello, " + userName + "!");
    } else {
    alert("You didn't enter a name.");
    }
}



