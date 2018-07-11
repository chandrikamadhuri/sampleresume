/*function getfile(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange =function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
})*/

function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
      resolve(response.json());
    }else{
        reject(new Error('error'));
      }
    })
  })
}
var newFile=loadJSON("data.json");
newFile.then(data=>{
  console.log(data);
  career(data.career)
  education(data.education);
})

var childTwo=document.querySelector(".childtwo");
function career(carrerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="career Objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
childTwo.appendChild(hr);

  var p=document.createElement("p");
  p.textContent=carrerObj.info;
  childTwo.appendChild(p);


}
function education(edu){
  var educationHeading=document.createElement("h2");
  educationHeading.textContent="educational qualifications";
  childTwo.appendChild(educationHeading);
  var hr =document.createElement("hr");
  childTwo.appendChild(hr);
  for(var i=0; i<edu.length; i++){
    eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childTwo.appendChild(eduH3);
    var eduUl=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduUl.appendChild(eduLi);
    childTwo.appendChild(eduUl);
    var eduLi2=document.createElement("li");
    eduLi2.textContent=edu[i].data;
    eduUl.appendChild(eduLi2);
    childTwo.appendChild(eduUl);
  }

}
