const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonialArray = [{text:"The Landscaping Professionals were quick, courteous and very helpful. They helped me restore my lawn and gardens completely after putting in my deck. I was worried it wouldn’t be done in time for my garden party, but they finished the job with time to spare!" ,
                           imgsrc: "https://randomuser.me/api/portraits/women/48.jpg",
                           name: "Alex Chang",
                           role:"Marketing Research"},
                          {
                              text:"Local City Restaurant has great food at a great price. The wait staff was friendly and quick, the burgers were top-notch, and we had a great time. We’ll be back soon!",
                              imgsrc:"https://randomuser.me/api/portraits/men/48.jpg",
                              name:"John Smith",
                              role:"Software Developer"
                          },
                          {
                              text:"Our cycling group visited Local Cycling Shop for some much-needed tune-ups in the spring. Some of our bikes had flat tires, issues with gears and brakes, and more. Local Cycling Shop got us all up and running fast and easy, with rates we could all afford. We would all recommend Local Cycling Shop to all the cyclists in town!",
                              imgsrc:"https://randomuser.me/api/portraits/women/50.jpg",
                              name:"Alexis Brown",
                              role:"Proffesional Baker"
                          },
                        {
                            text:"Our takeout just went the roof because we could be taking five orders at one time , instead of just one order at a time.",
                            imgsrc:"https://randomuser.me/api/portraits/men/50.jpg",
                            name:"Tom Davis",
                            role:"Research Analyst"
                        }];

let idx = 1;
function changeTestimonial(){
   const {text,imgsrc,name,role} = testimonialArray[idx];
   testimonial.innerHTML = text;
   username.innerHTML = name;
   role.innerHTML = role;
   userImage.src=imgsrc;
   idx++;
   if(idx>testimonialArray.length-1){
       idx=0;
   }
}

setInterval(changeTestimonial,10000);