"use strict";
const __esModule = true;
// exports.__esModule = true;



// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html> `);
//  var document = new JSDOM(dom).window.document;
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
        'isfavourite': false,
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
    star.setAttribute("height", "24px");
    card_heading.appendChild(star);
    star.addEventListener("click", function () {
        jsonData.isfavourite = !jsonData.isfavourite;
        if(favourite=="./Assets/favourite.svg")
        {
            star.src = "./Assets/Empty_Star.png";
        }
        else{
            star.src = "./Assets/favourite.svg";
        }
    });
    star.setAttribute("class", "favourite");
    var originalcolor = star.style.backgroundColor;


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
{ /* <div class="card_footer">
//       <img src="./Assets/preview.svg" />
//       <img src="./Assets/manage course.svg" />
//       <img src="./Assets/grade submissions.svg" />
//       <img src="./Assets/reports.svg" />
//     </div> */
}
// `<div class="card">
//     <div class="card_upper">
//       <img src=`+objects[object].image+` />
//       <div class="card_upper_right">
//         <div class="card_heading">
//           <h3>`+ objects[object].Title+`</h3>
//           <img src="./Assets/favourite.svg" />
//         </div>
//         <small class="text-muted">`+ objects[object].Subject+` &nbsp; | &nbsp; Grade 7</small>
//         <small class="text-muted"><b>4</b> Units &nbsp;<b>18</b> Lessons&nbsp;
//           <b>24</b> Topics</small>
//           <select name="classes" id="classes">
//             <option value="Mr. Frank's Class B">Mr Frank's Class B</option>
//           </select>
//         <small class="text-muted">50 Students &nbsp; | &nbsp;21-Jan-2020 - 21-Aug-2020</small>
//       </div>
//     </div>
//     <hr />
//     
//   </div>`;
//     document.body.appendChild(card);
//     // cardGrid.innerHTML = card;
//     console.log(objects[object]);
// } 
// console.log(obj.Teacher);
