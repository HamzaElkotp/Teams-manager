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
  

/*`<div class="column is-3" id="Pcard1" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
    <div class="card card-with-bg">
        <div class="card-content has-text-centered">
            <img src="../imgs/profile.png" alt="" class="img-with-size">
            <h4 class="title is-5 white card-header1">${name}</h4>
            <hr class="nav-divider">
            <div class="has-text-left texts">
                <div class="is-flex is-justify-content-space-between">
                    <p class="white">الرتبه:</p>
                    <p class="has-text-primary">${atchive}</p>
                </div>
                <div class="is-flex is-justify-content-space-between">
                    <p class="white">الاداء:</p>
                    <p class="has-text-primary"><i class="fas fa-long-arrow-alt-up"></i>${energy}</p>
                </div>
                <div class="is-flex is-justify-content-space-between">
                    <p class="white">الاجر:</p>
                    <p class="has-text-success">${salary}</p>
                </div>
                <div class="is-flex is-justify-content-space-between">
                    <p class="white">الخبرة:</p>
                    <p class="has-text-warning">${expert}</p>
                </div>
            </div>
            <button class="button is-danger is-outlined texts-btn" onclick='document.getElementById("Pcard1").style.display="none"'>حذف</button>
        </div>
    </div>
  </div>`*/