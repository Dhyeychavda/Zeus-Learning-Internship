fetch('./dashboard.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { return process(json); });
fetch('./alert.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { return process_alert(json); });
fetch('./announcement.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { return process_announcement(json); });
function process(objects) {
    // const data_string = JSON.stringify(jsonDataArray);
    // const objects = JSON.parse(data_string);
    var favourite = "./Assets/favourite.svg";
    var total_course_category = document.getElementById("total_course_category");
    total_course_category.innerHTML = "" + objects.length + " courses";
    var total_courses = document.getElementById("total_courses");
    total_courses.innerHTML = "Showing " + objects.length + " out of " + objects.length + " Courses";
    var cardContainer = document.getElementById('card_grid');
    for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
        var jsonData = objects_1[_i];
        var card = document.createElement("div");
        card.classList.add("card");
        cardContainer.appendChild(card);
        if (jsonData.hasOwnProperty('is_expired') && jsonData.is_expired) {
            var expired = document.createElement("span");
            expired.innerHTML = "EXPIRED";
            expired.setAttribute("style", "display: block;width: fit-content;max-height: 18px;background-color: #FFE4E6;font-weight: normal;color: #D80000;font-size: 10px;padding: 4px 7px 2px 5px; margin-bottom: 6px;text-align: left;");
            card.appendChild(expired);
            card.setAttribute("style", "padding: 0 0 9px 0");
        }
        var card_upper = document.createElement("div");
        card.appendChild(card_upper);
        card_upper.classList.add("card_upper");
        var image = document.createElement("img");
        image.src = jsonData.image;
        image.alt = jsonData.title;
        card_upper.appendChild(image);
        var card_upper_right = document.createElement("div");
        card_upper_right.classList.add("card_upper_right");
        card_upper.appendChild(card_upper_right);
        var card_heading = document.createElement("div");
        card_heading.classList.add("card_heading");
        card_upper_right.appendChild(card_heading);
        var title = document.createElement("h3");
        title.innerText = jsonData.Title;
        card_heading.appendChild(title);
        var star = document.createElement("img");
        star.src = favourite;
        star.alt = "favourite icon";
        if (!jsonData.isfavourite) {
            star.style.filter = "brightness(0.1)invert(1)";
        }
        star.setAttribute("width", "20px");
        star.setAttribute("class", "favourite");
        card_heading.appendChild(star);
        card_heading.appendChild(star);
        var subjectGrade = document.createElement("small");
        subjectGrade.classList.add("text-muted");
        subjectGrade.innerHTML = jsonData.Subject + "&nbsp; | &nbsp; Grade " + jsonData.Grade;
        card_upper_right.appendChild(subjectGrade);
        var UnitsLesson = document.createElement("small");
        UnitsLesson.classList.add("text-muted");
        UnitsLesson.innerHTML = "<b>" + jsonData.Units + "</b>" + " Units &nbsp;<b>" + jsonData.Lessons + "</b> Lessons&nbsp;<b>"
            + jsonData.Topics + "</b> Topics";
        card_upper_right.appendChild(UnitsLesson);
        var select = document.createElement("select");
        select.setAttribute("id", "classes");
        select.setAttribute("name", "classes");
        select.setAttribute("class", "dropdown");
        card_upper_right.appendChild(select);
        if (jsonData.Teacher == '' || !jsonData.hasOwnProperty('Teacher')) {
            select.setAttribute("disabled", "true");
            var option = document.createElement("option");
            option.value = 'No Classes';
            option.text = 'No Classes';
            select.appendChild(option);
        }
        else {
            for (var _a = 0, _b = jsonData.Teacher; _a < _b.length; _a++) {
                var options = _b[_a];
                var option = document.createElement("option");
                option.id = options;
                option.value = options;
                option.text = options;
                select.appendChild(option);
            }
        }
        var StudentDates = document.createElement("small");
        StudentDates.classList.add("text-muted");
        StudentDates.innerHTML = "<b>" + jsonData.Students + "</b>" + " Students &nbsp; | &nbsp;" + jsonData.Start + " - "
            + jsonData.End;
        card_upper_right.appendChild(StudentDates);
        card.appendChild(document.createElement("hr"));
        var card_footer = document.createElement("div");
        card_footer.classList.add("card_footer");
        card.appendChild(card_footer);
        var preview = document.createElement("img");
        preview.src = "./Assets/preview.svg";
        preview.alt = "Preview SVG";
        if (!jsonData.preview) {
            preview.classList.add("faded");
        }
        card_footer.appendChild(preview);
        var course = document.createElement("img");
        course.src = "./Assets/manage course.svg";
        course.alt = "manage course SVG";
        if (!jsonData.manage_course) {
            course.classList.add("faded");
        }
        card_footer.appendChild(course);
        var grade = document.createElement("img");
        grade.src = "./Assets/grade submissions.svg";
        grade.alt = "grade submissions SVG";
        if (!jsonData.grade_submission) {
            grade.classList.add("faded");
        }
        card_footer.appendChild(grade);
        var reports = document.createElement("img");
        reports.src = "./Assets/reports.svg";
        reports.alt = "reports SVG";
        if (!jsonData.reports) {
            reports.classList.add("faded");
        }
        card_footer.appendChild(reports);
    }
}
function process_alert(alert_objects) {
    // const alert_string = JSON.stringify(jsonAlertArray);
    // const alert_objects = JSON.parse(alert_string);
    var alert_list = document.getElementById("alert_list");
    var alert_img = "Assets/alerts.svg";
    for (var _i = 0, alert_objects_1 = alert_objects; _i < alert_objects_1.length; _i++) {
        var alert_1 = alert_objects_1[_i];
        var li_1 = document.createElement("li");
        li_1.classList.add("alert_list_item");
        alert_list.appendChild(li_1);
        var msgdiv = document.createElement("div");
        msgdiv.classList.add("msg");
        li_1.appendChild(msgdiv);
        var p = document.createElement("p");
        p.innerHTML = alert_1.msg;
        msgdiv.appendChild(p);
        var img = document.createElement("img");
        if (alert_1.isNewAlert) {
            img.src = alert_img;
            img.alt = "alert icon";
            li_1.style.backgroundColor = "#FFFFEE";
        }
        else {
            img.src = "Assets/checkbox-checked.svg";
        }
        msgdiv.appendChild(img);
        if (alert_1.course != "") {
            var courseclassdiv = document.createElement("div");
            courseclassdiv.classList.add("class_course_alert");
            li_1.appendChild(courseclassdiv);
            var course_title = document.createElement("span");
            course_title.classList.add("class_or_course");
            course_title.classList.add("faded");
            course_title.innerHTML = "Course: ";
            courseclassdiv.appendChild(course_title);
            var course_name = document.createElement("span");
            course_name.classList.add("class_course_name");
            course_name.innerHTML = alert_1.course;
            courseclassdiv.appendChild(course_name);
        }
        var date_time = document.createElement("span");
        date_time.classList.add("date-time");
        date_time.classList.add("faded");
        date_time.innerHTML = alert_1.date_time;
        li_1.appendChild(date_time);
    }
}
function process_announcement(announcement_objects) {
    // const announcement_string = JSON.stringify(jsonAnnouncementArray);
    // const announcement_objects = JSON.parse(announcement_string);
    var announcement_list = document.getElementById("announcement_list");
    for (var _i = 0, announcement_objects_1 = announcement_objects; _i < announcement_objects_1.length; _i++) {
        var announcement_1 = announcement_objects_1[_i];
        var li_2 = document.createElement("li");
        li_2.classList.add("announcement_list_item");
        announcement_list.appendChild(li_2);
        var pa_header = document.createElement("div");
        pa_header.classList.add("pa_header");
        li_2.appendChild(pa_header);
        var header_p = document.createElement("p");
        pa_header.appendChild(header_p);
        var pa_title = document.createElement("span");
        pa_title.classList.add("pa_title");
        pa_title.innerHTML = "PA:";
        header_p.appendChild(pa_title);
        var pa_name = document.createElement("span");
        pa_name.classList.add("pa_name");
        pa_name.innerHTML = announcement_1.pa_name;
        header_p.appendChild(pa_name);
        var img = document.createElement("img");
        img.src = "Assets/checkbox-checked.svg";
        img.alt = "checked";
        pa_header.appendChild(img);
        var pa_msg = document.createElement("p");
        pa_msg.classList.add("pa_msg");
        pa_msg.innerHTML = announcement_1.msg;
        li_2.appendChild(pa_msg);
        var coursename = document.createElement("div");
        coursename.classList.add("class_course_announcement");
        li_2.appendChild(coursename);
        var course = document.createElement("span");
        course.classList.add("class_or_course");
        course.innerHTML = "Course: ";
        coursename.appendChild(course);
        var course_title = document.createElement("span");
        course_title.classList.add("class_course_name");
        course_title.innerHTML = announcement_1.course;
        coursename.appendChild(course_title);
        var pa_footer = document.createElement("div");
        pa_footer.classList.add("pa_footer");
        li_2.appendChild(pa_footer);
        var attachedfile = document.createElement("div");
        attachedfile.classList.add("attachedfile");
        pa_footer.appendChild(attachedfile);
        var attachimg = document.createElement("img");
        attachimg.src = "Assets/file_attach.png";
        attachimg.alt = "fileattach image";
        attachedfile.appendChild(attachimg);
        var no_of_file_attached = document.createElement("span");
        no_of_file_attached.innerHTML = announcement_1.no_of_file_attached + " Files Atteched";
        attachedfile.appendChild(no_of_file_attached);
        var date_time = document.createElement("span");
        date_time.classList.add("announcement_date_time");
        date_time.innerHTML = announcement_1.date_time;
        pa_footer.appendChild(date_time);
    }
}
// const fav = document.querySelector(".favourite") as HTMLImageElement;
// fav.addEventListener("click", function () {
//   if(fav.style.filter == "brightness(0.1)invert(1)")
//   {
//       fav.style.filter="none";
//   }
//   else{
//       fav.style.filter="brightness(0.1)invert(1)";
//   }
// });
var hamburger = document.getElementById("hamburger");
var hamburger_menu = document.getElementById("hamburger-menu");
hamburger.addEventListener("mouseover", function () {
    hamburger.style.filter = "brightness(0)invert(1)";
    hamburger_menu.classList.add("show_block");
});
function removehammenu() {
    setTimeout(function () {
        if (!document.querySelector(".hamburger-menu:hover")) {
            hamburger_menu.classList.remove("show_block");
            hamburger_menu.classList.add("hide");
            setTimeout(function () {
                hamburger_menu.classList.remove("hide");
            }, 500);
            hamburger.style.filter = "none";
        }
    }, 300);
}
var li = document.querySelectorAll(".nav-items li");
function is_touch_enabled() {
    // Check if touch is enabled
    return "ontouchstart"
        in window;
}
li.forEach(function (li1) {
    li1.addEventListener("mouseover", function () {
        li1.classList.add("li");
    });
});
// else{
//   li.forEach((li1: any) => {
//     li1.addEventListener("click",()=>{
//       li1.classList.toggle("li");
//     });
//   });
// }
var ham_li_hover = document.querySelectorAll(".nav-items li");
li.forEach(function (li) {
    li.addEventListener("click", function () {
        if (document.querySelector("li:hover") != null) {
            console.log("clicked");
            // if(!is_touch_enabled()){}
            li.classList.toggle("li");
            // else{
            //   li.classList.toggle("li");
            // }
        }
    });
});
hamburger_menu.addEventListener("mouseleave", removehammenu);
hamburger.addEventListener("mouseleave", removehammenu);
var alert1 = document.getElementById("alert");
var alert_wrapper = document.getElementById("alert_wrapper");
alert1.addEventListener("mouseover", function () {
    alert1.style.filter = "brightness(0)invert(1)";
    var menu = document.querySelector(".alert_wrapper");
    menu.classList.add("show_block");
    menu.style.zIndex = "5";
});
function removealertmenu() {
    setTimeout(function () {
        if (!document.querySelector(".alert_wrapper:hover")) {
            var menu_1 = document.querySelector(".alert_wrapper");
            alert1.style.filter = "none";
            menu_1.classList.remove("show_block");
            menu_1.classList.add("hide");
            setTimeout(function () {
                menu_1.classList.remove("hide");
            }, 500);
        }
    }, 300);
}
alert_wrapper.addEventListener("mouseleave", removealertmenu);
alert1.addEventListener("mouseleave", removealertmenu);
var announcement = document.getElementById("announcement");
var announcement_wrapper = document.getElementById("announcement_wrapper");
announcement.addEventListener("mouseover", function () {
    announcement.style.filter = "brightness(0)invert(1)";
    var menu = document.querySelector(".announcement_wrapper");
    menu.classList.add("show_block");
    menu.style.zIndex = "5";
});
function remvoveannouncementmenu() {
    setTimeout(function () {
        if (!document.querySelector(".announcement_wrapper:hover")) {
            var menu_2 = document.querySelector(".announcement_wrapper");
            announcement.style.filter = "none";
            menu_2.classList.remove("show_block");
            menu_2.classList.add("hide");
            setTimeout(function () {
                menu_2.classList.remove("hide");
            }, 500);
        }
    }, 300);
}
announcement_wrapper.addEventListener("mouseleave", remvoveannouncementmenu);
announcement.addEventListener("mouseleave", remvoveannouncementmenu);
