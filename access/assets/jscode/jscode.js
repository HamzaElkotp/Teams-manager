const burgerIcon = document.querySelector('#burger');
    const navbarMenu = document.querySelector('#navbar-menu');
    burgerIcon.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-active')
    })

function notitogglePopup(){
  document.getElementById("notipopup-1").classList.toggle("active");
}

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

function mstogglePopup(){
  document.getElementById("mspopup-1").classList.toggle("active");
}

function peopleManage(){
  document.getElementById("peopopup-1").classList.toggle("active");
}

function logout(){
    document.getElementById("logout-1").classList.toggle("active");
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 3000);
}

function logout2(){
    document.getElementById("logout-1").classList.toggle("active");
    setTimeout(() => {
        window.location.href = "../../index.html";
    }, 3000);
}
  

let newMem = document.getElementById("NewMemperForm");
let NewFormName = newMem.name;
let NewFormLevel = newMem.level;
let NewFormEnergy = newMem.energy;
let NewFormSalary = newMem.salary;
let NewFormExpert = newMem.expert;
let NFormB = newMem.querySelector("button");
let MemebrsBox = document.getElementById("Person_Adder")
NFormB.onclick = function (event){
    event.preventDefault();
    let NVal = NewFormName.value;
    let LVal = NewFormLevel.value;
    let EnVal = NewFormEnergy.value;
    let SVal = NewFormSalary.value;
    let ExVal = NewFormExpert.value;

    if(NVal.length != 0 && LVal.length != 0 && EnVal.length != 0 && SVal.length != 0 && ExVal.length != 0){
        MemebrsBox.innerHTML += `
        <div class="column is-3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
        <div class="card card-with-bg">
            <div class="card-content has-text-centered">
                <img src="../assets/imgs/profile.png" alt="" class="img-with-size">
                <h4 class="title is-5 white card-header1">${NVal}</h4>
                <hr class="nav-divider">
                <div class="has-text-left texts">
                    <div class="is-flex is-justify-content-space-between">
                        <p class="white">الرتبه:</p>
                        <p class="has-text-primary">${LVal}</p>
                    </div>
                    <div class="is-flex is-justify-content-space-between">
                        <p class="white">الاداء:</p>
                        <p class="has-text-primary"><i class="fas fa-long-arrow-alt-up"></i>${EnVal}</p>
                    </div>
                    <div class="is-flex is-justify-content-space-between">
                        <p class="white">الاجر:</p>
                        <p class="has-text-success">${SVal}</p>
                    </div>
                    <div class="is-flex is-justify-content-space-between">
                        <p class="white">الخبرة:</p>
                        <p class="has-text-warning">${ExVal}</p>
                    </div>
                </div>
                <button class="button is-primary is-outlined texts-btn" onclick=''>تعديل</button>
                <button class="button is-danger is-outlined texts-btn" onclick='this.parentNode.parentNode.parentNode.remove()'>حذف</button>
            </div>
        </div>
    </div>
        `
    }
    else{
        
    }
}

// if (window.location.href.includes("#persons")){
//     peopleManage()
// }
