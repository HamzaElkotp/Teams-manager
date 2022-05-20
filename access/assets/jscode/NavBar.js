let nav = document.getElementById("nav");
nav.innerHTML +=
`<div class="navbar-brand">
<a class="navbar-burger" id="burger">
    <span></span>
    <span></span>
    <span></span>
</a>
<a href="/access/" class="navbar-item">
    <img src="/access/assets/imgs/logo.png" width="112" height="28">
</a>
</div>

<div class="navbar-menu" id="navbar-menu">
<div class="navbar-end">
    <a href="/access/" class="navbar-item">
        <i class="fas fa-home has-text-info"></i>الرئيسيه
    </a>
    <a href="/access/features/" class="navbar-item">
        <i class="fas fa-bolt has-text-warning"></i>الخصائص
    </a>
    <a href="/access/prim/" class="navbar-item">
        <i class="fas fa-dollar-sign has-text-success"></i>الاسعار
    </a>
    <a href="/access/about/" class="navbar-item">حول</a>
</div>
<div class="navbar-start">
    <a onclick="notitogglePopup()" class="navbar-item">
        <i class="fas fa-bell has-text-danger"></i>الاشعارات
    </a>
    <div class="navbar-item has-dropdown is-hoverable">
        <p class="navbar-link">الادارة</p>
        <div class="navbar-dropdown">
            <a href="/access/profile/" class="navbar-item hoverd1"><i class="fas fa-user"></i>الملف الشخصي</a>
            <a href="/access/team/#persons" class="navbar-item hoverd1"><i class="fas fa-users"></i>الاعضاء</a>
            <a href="/access/set/" class="navbar-item hoverd1"><i class="fas fa-cogs"></i>الاعدادات</a>
            <a href="/access/prim/" class="navbar-item hoverd1"><i class="fas fa-wrench"></i>تطوير الحساب</a>
            <hr class="nav-divider">
            <a class="navbar-item hoverd1" onclick="logout()"><i class="fas fa-sign-out-alt"></i>تسجيل خروج</a>
        </div>
    </div>
</div>
</div>`

let slider = document.getElementById("slideBar");
slider.innerHTML += `
<div class="menu-container px-1">
    <div class="menu-wrapper">
        <aside class="menu">
            <p class="menu-label">عام</p>
            <ul class="menu-list">
                <li><a class="is-active" href="/access/"><i class="fas fa-tachometer-alt"></i>لوحة التحكم</a></li>
                <li><a href="/access/cusomers/"><i class="fas fa-user-friends"></i>العملاء</a></li>
            </ul>
            <p class="menu-label">الادارة</p>
            <ul class="menu-list">
                <li><a href="/access/set/"><i class="fas fa-cogs"></i>الاعدادات</a></li>
                <li><a href="/access/saving/"><i class="fas fa-cloud"></i>ادارة التخزين السحابي</a></li>
                <li>
                    <a href="/access/team/"><i class="fas fa-users-crown"></i>ادارة الفريق</a>
                    <ul>
                        <li><a href="/access/team/#persons"><i class="fas fa-users"></i>الاعضاء</a></li>
                        <li><a href="/access/team/#persons"><i class="fas fa-user-plus"></i>اضافه عضو</a></li>
                        <li><a onclick="togglePopup()"><i class="fas fa-sitemap"></i>اضافه فريق</a></li>
                    </ul>
                </li>
            </ul>
            <p class="menu-label">اخرى</p>
            <ul class="menu-list">
                <li><a onclick="togglePopup()"><i class="fas fa-tasks"></i>مهمات</a></li>
                <li><a  onclick='mstogglePopup()'><i class="fas fa-comment"></i>محادثات</a></li>
                <li><a href="/access/adds/"><i class="fas fa-info-circle"></i>اضافات</a></li>
                <li><a href="/access/help/"><i class="fas fa-hands-helping"></i>مساعده</a></li>
            </ul>
        </aside>
    </div>
</div>
`