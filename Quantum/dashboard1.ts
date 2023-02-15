fetch('./dashboard.json')
.then((response) => response.json())
.then((json) => process(json));

fetch('./alert.json')
.then((response) => response.json())
.then((json) => process_alert(json));

fetch('./announcement.json')
.then((response) => response.json())
.then((json) =>process_announcement(json));


function process(objects: any)
{

  // const data_string = JSON.stringify(jsonDataArray);
  // const objects = JSON.parse(data_string);

  let favourite = "./Assets/favourite.svg";

  var total_course_category=document.getElementById("total_course_category") as HTMLSpanElement;
  total_course_category.innerHTML=""+objects.length+" courses";

  var total_courses=document.getElementById("total_courses") as HTMLParagraphElement;
  total_courses.innerHTML="Showing "+ objects.length +" out of "+ objects.length +" Courses";

  const cardContainer = document.getElementById('card_grid')as HTMLDivElement;
  for (const jsonData of objects) {
    
      let card = document.createElement("div") as HTMLDivElement;
      card.classList.add("card");
      cardContainer.appendChild(card);


      if(jsonData.hasOwnProperty('is_expired') && jsonData.is_expired){
      let expired = document.createElement("span");
      expired.innerHTML= "EXPIRED";
      expired.setAttribute("style","display: block;width: fit-content;max-height: 18px;background-color: #FFE4E6;font-weight: normal;color: #D80000;font-size: 10px;padding: 4px 7px 2px 5px; margin-bottom: 6px;text-align: left;");
      card.appendChild(expired);
      card.setAttribute("style","padding: 0 0 9px 0")
    }
      let card_upper = document.createElement("div");
      card.appendChild(card_upper);
      card_upper.classList.add("card_upper");

      let image = document.createElement("img");
      image.src = jsonData.image;
      image.alt = jsonData.title;
      card_upper.appendChild(image);

      let card_upper_right = document.createElement("div");
      card_upper_right.classList.add("card_upper_right");
      card_upper.appendChild(card_upper_right);

      let card_heading = document.createElement("div");
      card_heading.classList.add("card_heading");
      card_upper_right.appendChild(card_heading);

      let title = document.createElement("h3");
      title.innerText = jsonData.Title;
      card_heading.appendChild(title);

      
      let star = document.createElement("img");
    
      star.src = favourite;
      star.alt="favourite icon";
      if(!jsonData.isfavourite){
        star.style.filter="brightness(0.1)invert(1)";
      }
      star.setAttribute("width","20px");
      star.setAttribute("class", "favourite");
      card_heading.appendChild(star);

      
      card_heading.appendChild(star);

      let subjectGrade = document.createElement("small");
      subjectGrade.classList.add("text-muted");
      subjectGrade.innerHTML= jsonData.Subject +"&nbsp; | &nbsp; Grade " + jsonData.Grade;
      card_upper_right.appendChild(subjectGrade);
      
      let UnitsLesson = document.createElement("small");
      UnitsLesson.classList.add("text-muted");
      UnitsLesson.innerHTML= "<b>"+jsonData.Units+"</b>" +" Units &nbsp;<b>" + jsonData.Lessons + "</b> Lessons&nbsp;<b>" 
      + jsonData.Topics + "</b> Topics";
      card_upper_right.appendChild(UnitsLesson);

      let select = document.createElement("select");
      select.setAttribute("id","classes");
      select.setAttribute("name","classes");
      select.setAttribute("class","dropdown");
      card_upper_right.appendChild(select);
      if(jsonData.Teacher == '' || !jsonData.hasOwnProperty('Teacher'))
      {
      
        select.setAttribute("disabled","true");
        let option = document.createElement("option");
        option.value = 'No Classes';
        option.text = 'No Classes';
        select.appendChild(option);     
      }
      else
      {
        for(const options of jsonData.Teacher)
        {
          let option = document.createElement("option");
          option.id= options;
          option.value = options;
          option.text =  options;
          select.appendChild(option);
        }
      }

      let StudentDates = document.createElement("small");
      StudentDates.classList.add("text-muted");
      StudentDates.innerHTML= "<b>"+jsonData.Students+"</b>" +" Students &nbsp; | &nbsp;" + jsonData.Start + " - " 
      + jsonData.End ;
      card_upper_right.appendChild(StudentDates);

      card.appendChild(document.createElement("hr"));

      let card_footer = document.createElement("div");
      card_footer.classList.add("card_footer");
      card.appendChild(card_footer);

      let preview = document.createElement("img");
      preview.src = "./Assets/preview.svg";
      preview.alt = "Preview SVG";
      if(!jsonData.preview)
      {
        preview.classList.add("faded");
      }
      card_footer.appendChild(preview);
      
      let course = document.createElement("img");
      course.src = "./Assets/manage course.svg";
      course.alt = "manage course SVG";
      if(!jsonData.manage_course)
      {
        course.classList.add("faded");
      }
      card_footer.appendChild(course);
      
      let grade = document.createElement("img");
      grade.src = "./Assets/grade submissions.svg";
      grade.alt = "grade submissions SVG";
      if(!jsonData.grade_submission)
      {
        grade.classList.add("faded");
      }
      card_footer.appendChild(grade);
      
      let reports = document.createElement("img");
      reports.src = "./Assets/reports.svg";
      reports.alt = "reports SVG";
      if(!jsonData.reports)
      {
        reports.classList.add("faded");
      }
      card_footer.appendChild(reports);

  }
}

function process_alert(alert_objects: any)
{
  // const alert_string = JSON.stringify(jsonAlertArray);
  // const alert_objects = JSON.parse(alert_string);
  var alert_list = document.getElementById("alert_list") as HTMLDivElement;
  const alert_img  ="Assets/alerts.svg"
  for(const alert of alert_objects){
    const li = document.createElement("li");
    li.classList.add("alert_list_item");
    alert_list.appendChild(li);

    const msgdiv = document.createElement("div") as HTMLDivElement;
    msgdiv.classList.add("msg");
    li.appendChild(msgdiv);

    const p = document.createElement("p") as HTMLParagraphElement;
    p.innerHTML = alert.msg;
    msgdiv.appendChild(p);

    const img = document.createElement("img");
    if(alert.isNewAlert){
    img.src = alert_img;
    img.alt="alert icon";
    li.style.backgroundColor="#FFFFEE";
    }
    else{
      img.src = "Assets/checkbox-checked.svg";
    }
    msgdiv.appendChild(img);
    if(alert.course!=""){
    const courseclassdiv = document.createElement("div");
    courseclassdiv.classList.add("class_course_alert");
    li.appendChild(courseclassdiv);

    const course_title = document.createElement("span");
    course_title.classList.add("class_or_course");
    course_title.classList.add("faded");
    course_title.innerHTML="Course: ";
    courseclassdiv.appendChild(course_title);

    const course_name = document.createElement("span");
    course_name.classList.add("class_course_name");
    course_name.innerHTML=alert.course;
    courseclassdiv.appendChild(course_name);
    }

    const date_time = document.createElement("span");
    date_time.classList.add("date-time");
    date_time.classList.add("faded");
    date_time.innerHTML = alert.date_time;

    li.appendChild(date_time);

  }
}

function process_announcement(announcement_objects: any)
{
  // const announcement_string = JSON.stringify(jsonAnnouncementArray);
  // const announcement_objects = JSON.parse(announcement_string);
  var announcement_list = document.getElementById("announcement_list") as HTMLDivElement;
  for(const announcement of announcement_objects){
    const li=document.createElement("li");
    li.classList.add("announcement_list_item");
    announcement_list.appendChild(li);

    const pa_header=document.createElement("div");
    pa_header.classList.add("pa_header");
    li.appendChild(pa_header);

    const header_p = document.createElement("p");
    pa_header.appendChild(header_p);

    const pa_title=document.createElement("span");
    pa_title.classList.add("pa_title");
    pa_title.innerHTML="PA:";
    header_p.appendChild(pa_title);

    const pa_name=document.createElement("span");
    pa_name.classList.add("pa_name");
    pa_name.innerHTML= announcement.pa_name;
    header_p.appendChild(pa_name);

    const img=document.createElement("img");
    img.src="Assets/checkbox-checked.svg";
    img.alt="checked";
    pa_header.appendChild(img);

    const pa_msg=document.createElement("p");
    pa_msg.classList.add("pa_msg");
    pa_msg.innerHTML= announcement.msg;
    li.appendChild(pa_msg);
    
    const coursename=document.createElement("div");
    coursename.classList.add("class_course_announcement");
    li.appendChild(coursename);

    const course=document.createElement("span");
    course.classList.add("class_or_course");
    course.innerHTML="Course: "
    coursename.appendChild(course);

    const course_title=document.createElement("span");
    course_title.classList.add("class_course_name");
    course_title.innerHTML = announcement.course;
    coursename.appendChild(course_title);

    const pa_footer=document.createElement("div");
    pa_footer.classList.add("pa_footer");
    li.appendChild(pa_footer);

    const attachedfile=document.createElement("div");
    attachedfile.classList.add("attachedfile");
    pa_footer.appendChild(attachedfile);

    const attachimg=document.createElement("img");
    attachimg.src="Assets/file_attach.png";
    attachimg.alt="fileattach image";
    attachedfile.appendChild(attachimg);

    const no_of_file_attached=document.createElement("span");
    no_of_file_attached.innerHTML= announcement.no_of_file_attached+" Files Atteched";
    attachedfile.appendChild(no_of_file_attached);


    const date_time=document.createElement("span");
    date_time.classList.add("announcement_date_time");
    date_time.innerHTML=announcement.date_time;
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


const hamburger=document.getElementById("hamburger")as HTMLDivElement;
const hamburger_menu=document.getElementById("hamburger-menu")as HTMLDivElement;

hamburger.addEventListener("mouseover",()=>{
  hamburger.style.filter="brightness(0)invert(1)";
  hamburger_menu.classList.add("show_block");
});

function removehammenu()
{ setTimeout(() => {
    if(!document.querySelector(".hamburger-menu:hover")){
      hamburger_menu.classList.remove("show_block");
      hamburger_menu.classList.add("hide");
      setTimeout(() => {
        hamburger_menu.classList.remove("hide");
      }, 500)
      hamburger.style.filter="none";
    }
  }, 300);
}

const li = document.querySelectorAll(".nav-items li") as any;

function is_touch_enabled() {
          
  // Check if touch is enabled
  return "ontouchstart"
      in window;
}

li.forEach((li1: any) => {
  
  li1.addEventListener("mouseover",()=>{
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

const ham_li_hover = document.querySelectorAll(".nav-items li");
li.forEach((li: any) => {
  
 li.addEventListener("click",()=>{ 
  if(document.querySelector("li:hover")!=null){
    console.log("clicked");
    // if(!is_touch_enabled()){}
    li.classList.toggle("li");
    // else{
    //   li.classList.toggle("li");
    // }
 
   
  }});
});

hamburger_menu.addEventListener("mouseleave",removehammenu);   
hamburger.addEventListener("mouseleave",removehammenu);


let alert1=document.getElementById("alert")as HTMLImageElement;
let alert_wrapper = document.getElementById("alert_wrapper") as HTMLDivElement;

alert1.addEventListener("mouseover",()=>{
  alert1.style.filter = "brightness(0)invert(1)";
  const menu = document.querySelector(".alert_wrapper") as HTMLDivElement;
    menu.classList.add("show_block");
    menu.style.zIndex="5";
  
});

function removealertmenu(){
  setTimeout(() => {
    if(!document.querySelector(".alert_wrapper:hover")){
      const menu = document.querySelector(".alert_wrapper") as HTMLDivElement;
      alert1.style.filter ="none";
      menu.classList.remove("show_block");
      menu.classList.add("hide");
      setTimeout(() => {
        menu.classList.remove("hide");
      }, 500);
    }
  }, 300);
}

alert_wrapper.addEventListener("mouseleave",removealertmenu);
alert1.addEventListener("mouseleave",removealertmenu);


let announcement=document.getElementById("announcement")as HTMLImageElement;
let announcement_wrapper = document.getElementById("announcement_wrapper") as HTMLDivElement;

announcement.addEventListener("mouseover",()=>{
  announcement.style.filter = "brightness(0)invert(1)";
  const menu = document.querySelector(".announcement_wrapper") as HTMLDivElement;
    menu.classList.add("show_block");
    menu.style.zIndex="5";
  
})

function remvoveannouncementmenu(){
  setTimeout(() => {
    if(!document.querySelector(".announcement_wrapper:hover")){
      const menu = document.querySelector(".announcement_wrapper") as HTMLDivElement;
      announcement.style.filter ="none";
      menu.classList.remove("show_block");
      menu.classList.add("hide");
      setTimeout(() => {
        menu.classList.remove("hide");
      }, 500);
    }
  }, 300);
}

announcement_wrapper.addEventListener("mouseleave",remvoveannouncementmenu);
announcement.addEventListener("mouseleave",remvoveannouncementmenu);