// NavBar for Phone  
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbar-menu');
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});

// Notification function 
function notitogglePopup(){
    document.body.innerHTML += `
    <div class="notipopup" id="notipopup-1">
        <div class="content1">
            <article class="message" id="message3">
                <div class="message-body">
                    <div class="card">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="is-size-6">تم اضافه "عمر محمد" الى الفريق بنجاح</p>
                                    <p class="is-size-7"><i class="far fa-clock has-text-info"></i>منذ دقيقتين</p>
                                </div>
                            </div>
                        </div>

                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="is-size-6">تم ارسال طلب انضمام الى "عمر محمد"</p>
                                    <p class="is-size-7"><i class="far fa-clock has-text-info"></i>منذ5 دقائق</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
    `
    document.getElementById("notipopup-1").classList.toggle("active");
}

// Premium pop up function 
function togglePopup(){
    document.body.innerHTML += `
    <div class="popup" id="popup-1">
        <div class="overlay"></div>
        <div class="content1">
            <article class="message" id="message3">
                <div class="message-header">
                    <p class="white"><i class="fas fa-hand-paper has-text-danger"></i>لا يمكنك استخدام هذه الميزه!</p>
                    <button class="delete" aria-label="delete" onclick='togglePopup()'></button>
                </div>
                <div class="message-body has-text-weight-bold">
                    لايمكنك استخدام هذه الميزه , قم بتطوير حسابك
                    للاشتراك
                    المدفوع للحصول على اخر التحديثات والمميزات
                    <br><br>
                    <a href="/access/prim/">الانتقال للاشتراك المدفوع</a>
                </div>
            </article>

        </div>
    </div>
    `
    setTimeout(() => {
        document.getElementById("popup-1").classList.toggle("active");
    }, 300); 
  
}

// Message function 
function mstogglePopup(){
    document.body.innerHTML += `
    <div class="mspopup" id="mspopup-1">
        <div class="content1">
            <article class="message" id="message3">
                <div class="message-header">
                    <p class="white"><i class="fas fa-comment-alt"></i>الرسائل</p>
                    <button class="delete" aria-label="delete" onclick='mstogglePopup()'></button>
                </div>
                <div class="message-body">
                    <p class="content is-6">لاتوجد رسائل حتى الان</p>
                </div>
            </article>
        </div>
    </div>
    `
    setTimeout(() => {
        document.getElementById("mspopup-1").classList.toggle("active");
    }, 300); 
}

function peopleManage(){
  document.getElementById("peopopup-1").classList.toggle("active");
}

// logout function  
function logout(){
    document.body.innerHTML += `
    <div class="logout" id="logout-1">
        <div class="overlay"></div>
        <div class="content1">
            <article class="message" id="message3">
                <div class="message-body">
                    <i class="fas fa-sign-out-alt has-text-danger"></i>
                    <p class="title is-4 has-text-danger">تم تسجيل الخروج بنجاح</p>
                </div>
            </article>
        </div>
    </div>
    `
    setTimeout(() => {
        document.getElementById("logout-1").classList.toggle("active")
    }, 300);

    setTimeout(() => {
        window.location.href = "/";
    }, 4000);
}


// Adding new memeber function  
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
                <img src="/access/assets/imgs/profile.png" alt="" class="img-with-size">
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
                <button class="button is-primary is-outlined texts-btn" onclick=''><i class="fas fa-pen"></i>تعديل</button>
                <button class="button is-danger is-outlined texts-btn" onclick='this.parentNode.parentNode.parentNode.remove()'><i class="fas fa-times"></i>حذف</button>
            </div>
        </div>
    </div>
        `
    }
    else{
        
    }
}



// make memeber add pop up show directly when enter page
/* if (window.location.href.includes("#persons")){
       peopleManage()
}*/
