// Counter Calculation
let interViewList = [];
let rejectList = [];

let currentStatus = "all-job-list";

let counter = document.getElementById("counter")

let mainCon = document.getElementById("main");
//  Counter
let interViewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("rejected-count");

// ALl section
let allJobList = document.getElementById("all-job-list");
let allJobSec = document.getElementById("all-job-list");
let interviewSec = document.getElementById("interview-list");
let rejectSec = document.getElementById("reject-list");

//   All Button
let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectBtn = document.getElementById("reject-btn");

// Empty Div

let interviewEmpty = document.getElementById("interview-empty");
let rejectEmpty = document.getElementById("reject-empty")



let totalNum = document.querySelectorAll(".total");
function calculateCount() {

  let total = allJobList.children.length
  let interviewCounter = interViewList.length;
  let rejectCounter = rejectList.length
  let allJobCount = allJobList.children.length;
  // Total Counter
  totalNum.forEach((element) => {
    element.innerText = allJobCount;
  });

  interViewCount.innerText = interViewList.length;
  rejectCount.innerText = rejectList.length;

  

  if(currentStatus == "all-job-list"){
    counter.innerText = ` ${total} of ${total} Jobs `
  }
  if(currentStatus == "interview-list"){
    counter.innerText = ` ${interviewCounter} of ${total} Jobs `

  }
  if(currentStatus == "reject-list"){
    counter.innerText = ` ${rejectCounter} of ${total} Jobs `

  }
}

calculateCount();

// Show Section And Button With Click

function showOnly(id, btn) {
  allJobSec.classList.add("hidden");
  interviewSec.classList.add("hidden");
  rejectSec.classList.add("hidden");

  currentStatus = id;
  allBtn.classList.remove("bg-blue-700", "text-white");
  interviewBtn.classList.remove("bg-blue-700", "text-white");
  rejectBtn.classList.remove("bg-blue-700", "text-white");

  allBtn.classList.add("bg-white", "text-black");
  interviewBtn.classList.add("bg-white", "text-black");
  rejectBtn.classList.add("bg-white", "text-black");

  let select = document.getElementById(id);
  select.classList.remove("hidden");

  let selectBtn = document.getElementById(btn);
  selectBtn.classList.remove("bg-white", "text-black");
  selectBtn.classList.add("bg-blue-700", "text-white");
  if (id == "interview-list") {
    interviewRender();
  }
  if (id == "reject-list") {
    rejectRender();
  }
  calculateCount();
}

mainCon.addEventListener("click", function (event) {
  if (event.target.classList.contains("interViewBtn")) {
    let parentNodes = event.target.parentNode.parentNode;

    let jobTitle = parentNodes.querySelector(".jobTitle").innerText;
    let jobPosition = parentNodes.querySelector(".job-position").innerText;
    let workFlow = parentNodes.querySelector(".work-type").innerText;
    let status = parentNodes.querySelector(".status").innerText;
    let jobBio = parentNodes.querySelector(".job-bio").innerText;
    parentNodes.querySelector(".status").innerText = "Interview";

    let jobCard = {
      jobTitle,
      jobPosition,
      workFlow,
      status: "Interview",
      jobBio,
    };

    // console.log(jobCard);

    let exist = interViewList.find((item) => item.jobTitle == jobCard.jobTitle);

    
    if (!exist) {
      interViewList.push(jobCard);
    }

    // interviewRender()
    rejectList = rejectList.filter(
      (item) => item.jobTitle !== jobCard.jobTitle,
    );

    console.log(currentStatus);
    if (currentStatus == "interview-list") {
      interviewRender();
    }
    calculateCount();
  } else if (event.target.classList.contains("rejectBtn")) {
    let parentNodes = event.target.parentNode.parentNode;

    let jobTitle = parentNodes.querySelector(".jobTitle").innerText;
    let jobPosition = parentNodes.querySelector(".job-position").innerText;
    let workFlow = parentNodes.querySelector(".work-type").innerText;
    let status = parentNodes.querySelector(".status").innerText;
    let jobBio = parentNodes.querySelector(".job-bio").innerText;
    parentNodes.querySelector(".status").innerText = "Reject";

    let jobCard = {
      jobTitle,
      jobPosition,
      workFlow,
      status: "Reject",
      jobBio,
    };

    // console.log(jobCard);

    let exist = rejectList.find((item) => item.jobTitle == jobCard.jobTitle);

    if (!exist) {
      rejectList.push(jobCard);
    }
    // rejectRender()
    interViewList = interViewList.filter(
      (item) => item.jobTitle !== jobCard.jobTitle,
    );
    console.log(currentStatus);
    if (currentStatus == "reject-list") {
      rejectRender();
    }
    calculateCount();
  }

  
});



// Render

function interviewRender() {
  interviewSec.innerHTML = "";
  
  if(interViewList.length === 0){
    interviewSec.appendChild(interviewEmpty);
    interviewEmpty.classList.remove("hidden");
    return;
  }
  interviewEmpty.classList.add("hidden")


  for (let interview of interViewList) {
    console.log(interview);

    
    
    let newDiv = document.createElement("div");
newDiv.classList = "space-y-6";
    newDiv.innerHTML = `
        
        <div class="joblist flex p-4 border-2 border-gray-500 rounded-lg bg-white hover:-translate-y-1.5 duration-300">
        <div class="space-y-3.5">
            <h1 class="text-2xl jobTitle">${interview.jobTitle}</h1>
            <p class="text-lg text-gray-700 job-position">${interview.jobPosition}</p>
            <p class="text-lg text-gray-700 work-type">${interview.workFlow}</p>
            <div>
                <button class="status font-semibold px-5 py-2 text-blue-600 bg-blue-200 rounded-sm">${interview.status}</button>
            </div>
            <p class="text-lg text-gray-700 job-bio">${interview.jobBio}</p>

            <div class="space-x-2.5">
                <button class="interViewBtn text-green-600 border-2 border-green-600 py-2 px-5 font-bold rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">Interview</button>
                <button class="rejectBtn text-red-600 border-2 border-red-600 py-2 px-5 font-bold rounded-lg hover:bg-red-600 hover:text-white cursor-pointer">Reject</button>
            </div>
        </div>
        <div>
            <button class="border-2 rounded-lg active:bg-green-700 active:text-white  p-2 cursor-pointer text-green-700"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>
        `;
    interviewSec.appendChild(newDiv);
  }
}

function rejectRender() {
  rejectSec.innerHTML = "";

  if(rejectList.length === 0){
    rejectSec.appendChild(rejectEmpty);
    rejectEmpty.classList.remove("hidden");
    return;
  }
rejectEmpty.classList.add("hidden")
  for (let reject of rejectList) {
    console.log(reject);

    let newDiv = document.createElement("div");
newDiv.classList = "space-y-6";
    newDiv.innerHTML = `
        
        <div class="joblist flex p-4 border-2 border-gray-500 rounded-lg bg-white hover:-translate-y-1.5 duration-300">
        <div class="space-y-3.5">
            <h1 class="text-2xl jobTitle">${reject.jobTitle}</h1>
            <p class="text-lg text-gray-700 job-position">${reject.jobPosition}</p>
            <p class="text-lg text-gray-700 work-type">${reject.workFlow}</p>
            <div>
                <button class="status font-semibold px-5 py-2 text-blue-600 bg-blue-200 rounded-sm">${reject.status}</button>
            </div>
            <p class="text-lg text-gray-700 job-bio">${reject.jobBio}</p>

            <div class="space-x-2.5">
                <button class="interViewBtn text-green-600 border-2 border-green-600 py-2 px-5 font-bold rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">Interview</button>
                <button class="rejectBtn text-red-600 border-2 border-red-600 py-2 px-5 font-bold rounded-lg hover:bg-red-600 hover:text-white cursor-pointer">Reject</button>
            </div>
        </div>
        <div>
            <button class="border-2 rounded-lg active:bg-green-700 active:text-white  p-2 cursor-pointer text-green-700"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>
        `;
    rejectSec.appendChild(newDiv);
  }
}
