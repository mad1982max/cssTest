class HTML {
    constructor() {
        let bar = document.getElementById("bar-menu");
        bar.addEventListener("click", this.toggleClass)
        //setInterval(() => bar.click(),2000)
    }

    toggleClass() {
        this.classList.toggle("change");        
    }
}

let htmlStarter = new HTML();


