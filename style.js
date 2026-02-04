function nextPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + num).classList.add('active');
}

function showMessage() {
    let n1 = document.getElementById("name1").value || "Me";
    let n2 = document.getElementById("name2").value || "My Bestie";

    document.getElementById("finalMessage").innerHTML = `
        Hlo bestie...
