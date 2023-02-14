"use strict";
const __esModule = true;
var jsonDataArray = [{
        "image": "./Assets/imageMask-1.png",
        "Title": "Acceleration",
        "Subject": "Physics",
        "Grade": 7,
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "Teacher": ["Mr.Frank's Class B",
            "Mr. Frank's Class A"],
        "Students": 50,
        "Start": "21-Jan-2021",
        "End": "21-Aug-2021",
        'isfavourite': true,
        'preview': true,
        'manage_course': true,
        'grade_submission': true,
        'reports': true,
        'is_expired': false
    }, {
        "image": "./Assets/imageMask.png",
        "Title": "Displacement, Velocity and Speed",
        "Subject": "Physics",
        "Grade": 6,
        "Units": 2,
        "Lessons": 15,
        "Topics": 20,
        "Teacher": [],
        "Students": 40,
        "Start": "21-Feb-2021",
        "End": "21-Sep-2021",
        'isfavourite': true,
        'preview': true,
        'manage_course': false,
        'grade_submission': false,
        'reports': true,
        'is_expired': false
    }, {
        "image": "./Assets/imageMask-2.png",
        "Title": "Introduction to Biology: Micro organisms and how they affec...",
        "Subject": "Biology",
        "Grade": 4,
        "Units": 5,
        "Lessons": 16,
        "Topics": 24,
        "Teacher": ["All Classes"],
        "Students": 300,
        "Start": "",
        "End": "",
        'isfavourite': true,
        'preview': true,
        'manage_course': false,
        'grade_submission': false,
        'reports': true,
        'is_expired': false
    }, {
        "image": "./Assets/imageMask-3.png",
        "Title": "Introduction to High School Mathematics",
        "Subject": "Mathematics",
        "Grade": 8,
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "Teacher": ["Mr. Frank's Class A"],
        "Students": 44,
        "Start": "14-Oct-2021",
        "End": "20-Oct-2022",
        'isfavourite': true,
        'preview': true,
        'manage_course': true,
        'grade_submission': true,
        'reports': true,
        'is_expired': false
    },
    {
        "image": "./Assets/imageMask-3.png",
        "Title": "Introduction to High School Mathematics",
        "Subject": "Mathematics",
        "Grade": 8,
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "Teacher": ["Mr. Frank's Class A"],
        "Students": 44,
        "Start": "14-Oct-2021",
        "End": "20-Oct-2022",
        'isfavourite': true,
        'preview': true,
        'manage_course': true,
        'grade_submission': true,
        'reports': true,
        'is_expired': false
    },
    {
        "image": "./Assets/imageMask-3.png",
        "Title": "Introduction to High School Mathematics",
        "Subject": "Mathematics",
        "Grade": 8,
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "Teacher": ["Mr. Frank's Class A"],
        "Students": 44,
        "Start": "14-Oct-2021",
        "End": "20-Oct-2022",
        'isfavourite': true,
        'preview': true,
        'manage_course': true,
        'grade_submission': true,
        'reports': true,
        'is_expired': false
    }, {
        "image": "./Assets/imageMask-3.png",
        "Title": "Introduction to High School Mathematics",
        "Subject": "Mathematics",
        "Grade": 8,
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "Teacher": ["Mr. Frank's Class A"],
        "Students": 44,
        "Start": "14-Oct-2021",
        "End": "20-Oct-2022",
        'isfavourite': true,
        'preview': true,
        'manage_course': true,
        'grade_submission': true,
        'reports': true,
        'is_expired': false
    }, {
        "image": "./Assets/imageMask-3.png",
        "Title": "Introduction to High School Mathematics",
        "Subject": "Mathematics",
        "Grade": 8,
        "Units": 4,
        "Lessons": 18,
        "Topics": 24,
        "Teacher": ["Mr. Frank's Class A"],
        "Students": 44,
        "Start": "14-Oct-2021",
        "End": "20-Oct-2022",
        'isfavourite': true,
        'preview': true,
        'manage_course': true,
        'grade_submission': true,
        'reports': true,
        'is_expired': true
    }
];
var jsonAlertArray = [{
        'msg': 'Lorem ipsum dolor sit amet cons ec abhba ban jasfj jan absd asbd ad a',
        'course': '',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': true
    },
    {
        'msg': 'Lorem ipsum dolor sit amet cons ec',
        'course': 'advanced maths',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': false
    },
    {
        'msg': 'Lorem ipsum dolor sit amet cons ec',
        'course': '',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': true
    },
    {
        'msg': 'Lorem ipsum dolor sit amet cons ec',
        'course': 'advanced maths',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': false
    },
    {
        'msg': 'Lorem ipsum dolor sit amet cons ec',
        'course': 'advanced maths',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': true
    },
    {
        'msg': 'Lorem ipsum dolor sit amet cons ec',
        'course': 'advanced maths',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': true
    },
    {
        'msg': 'Lorem ipsum dolor sit amet cons ec',
        'course': 'advanced maths',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': true
    },
    {
        'msg': 'Lorem ipsum dolor sit amet cons ec',
        'course': 'advanced maths',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': true
    },
    {
        'msg': 'Lorem ipsum dolor sit amet cons ec',
        'course': 'advanced maths',
        'class': '',
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAlert': false
    }
];
var jsonAnnouncementArray = [{
        'pa_name': 'Wilson Kumar',
        'msg': 'Lorem ipsum dolor sit amet cons ec abhba ban jasfj jan absd asbd ad a',
        'course': 'advanced maths',
        'class': '',
        'no_of_file_attached': 2,
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAnnouncement': true
    },
    {
        'pa_name': 'Wilson Kumar',
        'msg': 'Lorem ipsum dolor sit amet cons ec abhba ban jasfj jan absd asbd ad a',
        'course': 'advanced maths',
        'class': '',
        'no_of_file_attached': 2,
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAnnouncement': true
    },
    {
        'pa_name': 'Wilson Kumar',
        'msg': 'Lorem ipsum dolor sit amet cons ec abhba ban jasfj jan absd asbd ad a',
        'course': 'advanced maths',
        'class': '',
        'no_of_file_attached': 2,
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAnnouncement': true
    },
    {
        'pa_name': 'Wilson Kumar',
        'msg': 'Lorem ipsum dolor sit amet cons ec abhba ban jasfj jan absd asbd ad a',
        'course': 'advanced maths',
        'class': '',
        'no_of_file_attached': 2,
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAnnouncement': true
    },
    {
        'pa_name': 'Wilson Kumar',
        'msg': 'Lorem ipsum dolor sit amet cons ec abhba ban jasfj jan absd asbd ad a',
        'course': 'advanced maths',
        'class': '',
        'no_of_file_attached': 2,
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAnnouncement': true
    },
    {
        'pa_name': 'Wilson Kumar',
        'msg': 'Lorem ipsum dolor sit amet cons ec abhba ban jasfj jan absd asbd ad a',
        'course': 'advanced maths',
        'class': '',
        'no_of_file_attached': 2,
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAnnouncement': true
    },
    {
        'pa_name': 'Wilson Kumar',
        'msg': 'Lorem ipsum dolor sit amet cons ec abhba ban jasfj jan absd asbd ad a',
        'course': 'advanced maths',
        'class': '',
        'no_of_file_attached': 2,
        'date_time': '15-sep-2018 at 7:21 pm',
        'isNewAnnouncement': true
    }];
var data_string = JSON.stringify(jsonDataArray);
var objects = JSON.parse(data_string);
var alert_string = JSON.stringify(jsonAlertArray);
var alert_objects = JSON.parse(alert_string);
var announcement_string = JSON.stringify(jsonAnnouncementArray);
var announcement_objects = JSON.parse(announcement_string);
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
var alert_list = document.getElementById("alert_list");
var alert_img = "Assets/alerts.svg";
for (var _c = 0, alert_objects_1 = alert_objects; _c < alert_objects_1.length; _c++) {
    var alert_1 = alert_objects_1[_c];
    var li = document.createElement("li");
    li.classList.add("alert_list_item");
    alert_list.appendChild(li);
    var msgdiv = document.createElement("div");
    msgdiv.classList.add("msg");
    li.appendChild(msgdiv);
    var p = document.createElement("p");
    p.innerHTML = alert_1.msg;
    msgdiv.appendChild(p);
    var img = document.createElement("img");
    if (alert_1.isNewAlert) {
        img.src = alert_img;
        img.alt = "alert icon";
        li.style.backgroundColor = "#FFFFEE";
    }
    else {
        img.src = "Assets/checkbox-checked.svg";
    }
    msgdiv.appendChild(img);
    if (alert_1.course != "") {
        var courseclassdiv = document.createElement("div");
        courseclassdiv.classList.add("class_course_alert");
        li.appendChild(courseclassdiv);
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
    li.appendChild(date_time);
}
var announcement_list = document.getElementById("announcement_list");
for (var _d = 0, announcement_objects_1 = announcement_objects; _d < announcement_objects_1.length; _d++) {
    var announcement_1 = announcement_objects_1[_d];
    var li = document.createElement("li");
    li.classList.add("announcement_list_item");
    announcement_list.appendChild(li);
    var pa_header = document.createElement("div");
    pa_header.classList.add("pa_header");
    li.appendChild(pa_header);
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
    li.appendChild(pa_msg);
    var coursename = document.createElement("div");
    coursename.classList.add("class_course_announcement");
    li.appendChild(coursename);
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
    li.appendChild(pa_footer);
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
var fav = document.querySelector(".favourite");
fav.addEventListener("click", function () {
    if (fav.style.filter == "brightness(0.1)invert(1)") {
        fav.style.filter = "none";
    }
    else {
        fav.style.filter = "brightness(0.1)invert(1)";
    }
});
var hamburger = document.getElementById("hamburger");
var hamburger_menu = document.getElementById("hamburger-menu");
hamburger.addEventListener("mouseover", function () {
    // const toggles = document.querySelectorAll(".line");
    // toggles.forEach((toggle) => {
    //   toggle.classList.add("open");
    // });
    // hamburger.classList.toggle("selected");
    hamburger.style.filter = "brightness(0)invert(1)";
    hamburger_menu.classList.add("show_block");
    // const menu = document.querySelector(".nav-items") as HTMLDivElement;  
    // menu.classList.add("show");
});
function removehammenu() {
    hamburger_menu.classList.remove("show_block");
    hamburger_menu.classList.add("hide");
    setTimeout(function () {
        hamburger_menu.classList.remove("hide");
    }, 500);
    hamburger.style.filter = "none";
    // var menu = document.querySelector(".nav-items") as HTMLDListElement;
    // menu.classList.remove("show");
}
// hamburger.addEventListener("click",removehammenu);  
hamburger_menu.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".hamburger-menu:hover")) {
            removehammenu();
        }
    }, 300);
});
hamburger.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".hamburger-menu:hover")) {
            removehammenu();
        }
    }, 300);
});
var alert = document.getElementById("alert");
alert.addEventListener("mouseover", function () {
    alert.style.filter = "brightness(0)invert(1)";
    var menu = document.querySelector(".alert_wrapper");
    menu.classList.add("show_block");
    menu.style.zIndex = "5";
});
function removealertmenu() {
    var menu = document.querySelector(".alert_wrapper");
    alert.style.filter = "none";
    menu.classList.remove("show_block");
    menu.classList.add("hide");
    setTimeout(function () {
        menu.classList.remove("hide");
    }, 500);
    // menu.style.zIndex="4";
}
var alert_wrapper = document.getElementById("alert_wrapper");
alert_wrapper.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".alert_wrapper:hover")) {
            removealertmenu();
        }
    }, 300);
});
alert.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".alert_wrapper:hover")) {
            removealertmenu();
        }
    }, 300);
});
var announcement = document.getElementById("announcement");
announcement.addEventListener("mouseover", function () {
    announcement.style.filter = "brightness(0)invert(1)";
    var menu = document.querySelector(".announcement_wrapper");
    menu.classList.add("show_block");
    menu.style.zIndex = "5";
});
function remvoveannouncementmenu() {
    var menu = document.querySelector(".announcement_wrapper");
    announcement.style.filter = "none";
    menu.classList.remove("show_block");
    menu.classList.add("hide");
    setTimeout(function () {
        menu.classList.remove("hide");
    }, 500);
    // menu.style.zIndex="4";
}
// announcement.addEventListener("click",remvoveannouncementmenu);
var announcement_wrapper = document.getElementById("announcement_wrapper");
announcement_wrapper.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".announcement_wrapper:hover")) {
            remvoveannouncementmenu();
        }
    }, 300);
});
announcement.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".announcement_wrapper:hover")) {
            remvoveannouncementmenu();
        }
    }, 300);
});
