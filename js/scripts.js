const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById("toggle-colors");

const rrotStyles = document.documentElement.style;


const flagsElement = document.getElementById("flags");
/*const textToChange = document.querySelectorAll ("[data-section]");*/

const changelenguaje = async (lenguaje) => {
    const requestJson = await fetch(`./lenguaje/${lenguaje}.json`);
    const texts = await requestJson.json();
    console.log(texts);
}
flagsElement.addEventListener("click",  (e)=> {
        changelenguaje(e.target.parentElement.dataset.lenguaje);
    });
   
  /*
    for(const textsToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }

};

flagsElement.addEventListener("click", (e)=>{
    console.log(e.target.parentElement.dataset.lenguaje);
});
/*const textToChange = document.querySelectorAll("[data-section]");

/*const changelenguaje = async (lenguaje)=>{
    const requestJson = await fetch(`./lenguaje/${lenguaje}.json`);
    const texts = await requestJson.json();
    
}
   /* for(const textsToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }

    

};*/

/*flagsElement.addEventListener("click", (e) => {
    changelenguaje(e.target.parentElement.dataset.lenguaje);

});*/

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("noche.png")) {
        toggleIcon.src = "assets/icons/sol1png.png";
        toggleText.textContent="Light Mode";

    }else{
        toggleIcon.src = "assets/icons/noche.png";
        toggleText.textContent="Dark Mode";

    }
});

toggleColors.addEventListener("click", (e) => {
rrotStyles.setProperty('--primary-color', e.target.dataset.color);

});

