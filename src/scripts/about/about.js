//  ==========   Display Portfolio Animation    ==========
var skills = document.getElementById("skills");


//checks if any project is visible: if none visible, reduce length of projects line && place skills & arsenal on the same line
const checkAnyProjectVisible =()=>{
  let check = Object.values(projectList).map(project=>{
    return project
  });
  if(check.includes(true)){

  }else{
    console.log('put everything back')
    abilities_container.style='display: flex';
    projects.style = 'width: 50%;';
    skills.classList.add('slideInSkillsAndArsenal');
    arsenal.classList.add('slideInSkillsAndArsenal')
  }
};

//shows img
let showProjectDiv = [];
Object.values(row_project).forEach(div => {
  showProjectDiv.push(div);
});


const showProject = index => {

  if(skills.classList.contains('slideInSkillsAndArsenal')){
    skills.classList.remove('slideInSkillsAndArsenal')
  }

  if(arsenal.classList.contains('slideInSkillsAndArsenal')){
    arsenal.classList.remove('slideInSkillsAndArsenal')
  }

  console.log(showHeight, 'whats in showHeight')

  faArrows[index].style = 'transform: rotate(180deg)';
  project_item__show[index].style = `height: calc(${showHeight}px)`;
  projects.style= 'max-width : 100%';
};

const hideProject = index => {

  faArrows[index].style = 'transform: rotate(0deg)';
  project_item__show[index].style = "height : 0px; ";
  setTimeout(()=>checkAnyProjectVisible(), 200)
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

