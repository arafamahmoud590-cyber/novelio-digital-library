const searchBtn=document.getElementById("searchBtn");

const popup=document.getElementById("searchPopup");

const overlay=document.getElementById("overlay");

const input=document.getElementById("searchInput");

const clearBtn=document.getElementById("clearSearch");

const searchIcon=document.getElementById("searchIcon");




searchBtn.onclick=function(e){

    e.preventDefault();

    popup.classList.toggle("show");

    overlay.classList.toggle("show");

    document.body.classList.toggle("no-scroll");

    if(popup.classList.contains("show")){

        input.focus();

    }

}




overlay.onclick=function(){

    popup.classList.remove("show");

    overlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

}




clearBtn.onclick=function(){

    input.value="";

    input.focus();

}



// Enter

input.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        searchBook();

    }

});




searchIcon.onclick=function(){

    searchBook();

}




function searchBook(){

    let keyword=input.value.trim();

    if(keyword==="") return;

    console.log(keyword);

}
const recentItems = document.querySelectorAll(".search-suggestions ul li");

const categoryItems = document.querySelectorAll(".categories span");

function fillSearch(text){

    input.value = text;

    input.focus();

    searchBook();

}

// Recent Searches
recentItems.forEach(item => {

    item.addEventListener("click", function(){

        const text = this.textContent.replace("📖","").trim();

        fillSearch(text);

    });

});

// Popular Categories
categoryItems.forEach(item => {

    item.addEventListener("click", function(){

        fillSearch(this.textContent.trim());

    });

});
