document.getElementById('navbar-toggle').addEventListener('click', function() {
    var menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
});

function orderItem(itemName) {
    alert(`You've ordered a ${itemName}!`);
}

//This creates the nice menu bar you see on top. Really classy, if I say so myself.//