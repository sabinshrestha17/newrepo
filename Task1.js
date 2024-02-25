const{argv} = require('node:process');

if(argv.length >=3){
    console.log("Enter your full name (end to stop):");
    //console.log(readFullName(argv[2]));
    const firstName= argv[2].split(" ");
    if(firstName[0]=="end"){
        console.log("This is about to end");
        }
    else{
        console.log("Your First Name is " + firstName[0]);
    }
}
else{
    console.log("You must enter at least your first name.");
}
