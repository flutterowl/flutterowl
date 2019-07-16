window.onload = function () {
    var mybtn = document.getElementById("fo_dlbtn");
    var pop = document.createElement("div");
    pop.id = "fo_modelPop";
    if (mybtn != null) mybtn.appendChild(pop);

    var loginpopup = `<div id="fo_myModal" style="display:none;position: fixed;z-index: 1000;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgba(0, 0, 0, 0.8);"><div style="margin: auto;padding: 20px;width: 300px;height: 400px;"><iframe style="border:none;width:100%;height:350px;" name="fo_dlurl"></iframe></div></div>`;
    document.querySelector('#fo_modelPop').innerHTML = loginpopup;

    var modal = document.getElementById("fo_myModal");
    var btn = document.getElementById("fo_dlbtn");

    btn.onclick = function () {
        var fileid = btn.getAttribute("data-fileid");
        modal.style.display = "block";
        document.getElementsByName('fo_dlurl')[0].src = "login.html?file=" + fileid;
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}