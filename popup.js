function contactOpen(){
    window.open("contact.html",  "contact", "width=1030px, height=500px");
}
function applyOpen(){
    window.open("apply.html",  "apply", "width=370px, height=710px");
}

function more(){
    opener.location.href="member.html";
    self.close();
}

function popupclose(){
    self.close();
}