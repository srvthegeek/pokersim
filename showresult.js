function showresult(){
    var x = document.getElementById("showsimresults");
    if (x.style.display === "none") {
    x.style.display = "block";
    console.log(counter);
    counter=counter+1;
    console.log(counter);
    }
    
}