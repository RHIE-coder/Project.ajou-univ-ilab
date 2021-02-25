const navbar_change_point = 40;

document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= navbar_change_point) {
        document.getElementById("navbar").className = "navbar-sticky";
    } else {
        document.getElementById("navbar").className = "navbar";
    }
});

function show_hidden_content(summ, cur_re, loc) {

    const intro_detail_space = document.getElementsByClassName("intro-detail-space")[0].style;

    const summary_detail = document.getElementsByClassName("summary-detail")[0].style;
    const summary_btn = document.getElementsByClassName("summary")[0];

    const current_research_detail = document.getElementsByClassName("current-research-detail")[0].style;
    const current_research_btn = document.getElementsByClassName("current-research")[0];

    const location_detail = document.getElementsByClassName("location-detail")[0].style;
    const location_btn = document.getElementsByClassName("location")[0];

    let origin;
    let show_target;
    let source;

    if (summ) {
        origin = "summary"
        show_target = summary_detail;
        source = summary_btn;
        current_research_detail.display = "none";
        location_detail.display = "none";
        current_research_btn.className = "show-detail-button current-research";
        location_btn.className = "show-detail-button location";
    } else if (cur_re) {
        origin = "current-research"
        show_target = current_research_detail;
        source = current_research_btn;
        summary_detail.display = "none";
        location_detail.display = "none";
        summary_btn.className = "show-detail-button summary";
        location_btn.className = "show-detail-button location";
    } else if (loc) {
        origin = "location"
        show_target = location_detail;
        source = location_btn;
        summary_detail.display = "none";
        current_research_detail.display = "none";
        summary_btn.className = "show-detail-button summary";
        current_research_btn.className = "show-detail-button current-research";
    }

    if (source.className.includes("clicked-intro-btn")) {
        intro_detail_space.display = "block";
        show_target.display = "none";
        source.className = "show-detail-button " + origin;
        return;
    }

    intro_detail_space.display = "none";
    show_target.display = "block";
    source.className = "show-detail-button " + origin + " clicked-intro-btn";
}

function grant_popup_func(target, filename){
 
    const path = "../images/"+filename;
 
    const aiming = document.getElementsByClassName(target);

    aiming[0].addEventListener("click",function(){
        const fade_effect = document.createElement('div');
        const zoom_image = document.createElement('div');
        fade_effect.className='magnific-popup';
        zoom_image.className='popup-img';
        zoom_image.setAttribute('onclick','return_to_main()');
        zoom_image.style.backgroundImage="url("+path+")";
        document.body.prepend(zoom_image);
        document.body.prepend(fade_effect);
    });

}

function return_to_main(){
    document.getElementsByClassName("magnific-popup")[0].remove();
    document.getElementsByClassName("popup-img")[0].remove();
}