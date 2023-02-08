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
var data_string = JSON.stringify(jsonDataArray);
var objects = JSON.parse(data_string);
var favourite = "./Assets/favourite.svg";
var total_course_category = document.getElementById("total_course_category");
total_course_category.innerHTML = objects.length + " courses";
var total_courses = document.getElementById("total_courses");
total_courses.innerHTML = "Showing " + objects.length + " out of " + objects.length + " Courses";
var cardContainer = document.getElementById('card_grid');
var _loop_1 = function (jsonData) {
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
    if (!jsonData.isfavourite || !jsonData.hasOwnProperty('isfavourite')) {
        favourite = "./Assets/Empty_Star.png";
    }
    var star = document.createElement("img");
    star.src = favourite;
    star.setAttribute("width", "20px");
    card_heading.appendChild(star);
    star.setAttribute("class", "favourite");
    star.addEventListener("click", function () {
        jsonData.isfavourite = !jsonData.isfavourite;
        if (favourite == "./Assets/favourite.svg") {
            star.src = "./Assets/Empty_Star.png";
        }
        else {
            star.src = "./Assets/favourite.svg";
        }
    });
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
};
for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
    var jsonData = objects_1[_i];
    _loop_1(jsonData);
}
var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("mouseover", function () {
    var toggles = document.querySelectorAll(".line");
    toggles.forEach(function (toggle) {
        toggle.classList.add("open");
    });
    // hamburger.classList.toggle("selected");
    var menu = document.querySelector(".nav-items");
    menu.classList.add("show");
});
var removemenu;
hamburger.addEventListener("click", function () {
    removemenu = setTimeout(function () {
        var toggles = document.querySelectorAll(".line");
        toggles.forEach(function (toggle) {
            toggle.classList.remove("open");
        });
        var menu = document.querySelector(".nav-items");
        menu.classList.remove("show");
    }, 400);
});
clearTimeout(removemenu);
// var removemenu: ReturnType<typeof setTimeout>= 
//   setTimeout(() => {
//       var toggles = document.querySelectorAll(".line");
//   toggles.forEach(function (toggle) {
//       toggle.classList.remove("open");
//   });
//   // hamburger.classList.toggle("selected");
//   var menu = document.querySelector(".nav-items") as HTMLDivElement;
//   menu.classList.remove("show");
//   },1500);
//   hamburger.addEventListener("mouseout",removemenu);
//   clearTimeout(removemenu);
