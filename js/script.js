const navbar_change_point=40;

document.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop >= navbar_change_point){
        document.getElementById("navbar").className="navbar-sticky";
    }else{
        document.getElementById("navbar").className="navbar";
    }
});