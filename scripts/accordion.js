var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove("active");
        } else {
        var j;
        for (j = 0; j < acc.length; j++) {
            acc[j].nextElementSibling.style.maxHeight = null;
            acc[j].classList.remove("active");
        }
        this.classList.toggle("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}