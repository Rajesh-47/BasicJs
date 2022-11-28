function x(){    // outer fucntion 
    let name="raj";
    let company="IBM";

    function y(){      // inner function 
        console.log(name + " is working in " + company);  // accessing outer function variables (parent function)
    }
    y();

}
x();


