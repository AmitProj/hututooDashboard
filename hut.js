let sidebar = document.getElementById('sidebar');
let menuBar = document.getElementById('menuBar');
let header = document.getElementById('user')
let searchIcon = document.getElementById('searchIcon');
let searchBox = document.getElementById('searchBox');


menuBar.addEventListener("click",function(){
    sidebar.classList.toggle('siderbarToggleWidth');
    header.classList.toggle('headerToggleWidth');

})

searchIcon.addEventListener("click", function(){
    searchBox.classList.toggle('showSearch')
})

