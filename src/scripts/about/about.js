//  ==========   Display Portfolio Animation    ==========
var skills = document.getElementById("skills");
var arsenal = document.getElementById("arsenal");

var abilities_container = document.getElementById("abilities-container");
var abilities_item = document.getElementsByClassName("abilities-item");

var test = document.getElementById("test");
var project_item__content = document.getElementById("project-item__content");

var project_item__icon = document.getElementsByClassName("project-item__icon");
var project_item__show = document.getElementsByClassName("project-item__show");
var row_project = document.getElementsByClassName("row-project");
var col_project_img = document.getElementsByClassName("col-project-img");

console.log(Array.isArray(col_project_img), "col_project_img");


const projectList = {
  isDevConOpen: false,
  isDomNomsOpen: false,
  isVincePhotoOpen: false,
  isSbSitOpen: false
};

//shows img
let showProjectDiv = [];
Object.values(row_project).forEach(div => {
  showProjectDiv.push(div);
});

const showProject = index => {
  project_item__show[index].style = "min-height : 20em; height: 100%";
  showProjectDiv[index].style = "width: 100%";
  col_project_img[index].style = "width: 100%";
};

const hideProject = index => {
  project_item__show[index].style = "height : 0px";
  showProjectDiv[index].style = "width: 0px";
  col_project_img[index].style = "width: 0px";
};

//  reformat abilities-container from display flex to display block:
const moveSkillsAndArsenal = () => {
  abilities_container.style = "display: block;";
  //get the 3 id's within abilities-container...
  const projectShowKeys = Object.values(abilities_item);

  //make room and reposition skills & arsenal below projects...
  projectShowKeys.forEach(div => {
    if (div.id !== "projects") {
      div.style = "margin-top:75px;";
    }
  });
};

const toggleProjectItemShow = id => {
  //get the icon ids for the switch statement below...
  let iconId = [];
  Object.values(project_item__icon).forEach(icon => {
    iconId.push(icon.id);
  });

  // if the clicked id matches icon id, toggle div class === project-item__show
  switch (id) {
    case iconId[0]:
      projectList.isDevConOpen = !projectList.isDevConOpen;
      projectList.isDevConOpen ? showProject(0) : hideProject(0);

      break;

    case iconId[1]:
      projectList.isDomNomsOpen = !projectList.isDomNomsOpen;
      projectList.isDomNomsOpen ? showProject(1) : hideProject(1);

      break;

    case iconId[2]:
      projectList.isVincePhotoOpen = !projectList.isVincePhotoOpen;
      projectList.isVincePhotoOpen ? showProject(2) : hideProject(2);

      break;

    case iconId[3]:
      projectList.isSbSitOpen = !projectList.isSbSitOpen;
      projectList.isSbSitOpen ? showProject(3) : hideProject(3);

      break;
  }
};

function handleClickDropDown(id) {
  moveSkillsAndArsenal();
  toggleProjectItemShow(id);
}