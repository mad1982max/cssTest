class HTMLel {
    i = 10;
    constructor() {
        this.slideIndex = 1;
        this.bar = document.getElementById("bar-menu");
        this.slides = document.getElementsByClassName("mySlides");
        this.dots = [...document.getElementsByClassName("dot")];
        this.arrow = [...document.querySelectorAll('.arrow')];
        this.panel = [...document.querySelectorAll('.section-header')];
        this.lineText = document.querySelector('.lineText');
        this.line = document.querySelector('.line');
        this.spanLetter; 
        this.z = 1;
        this.fSize = "50px";
        
        this.arrow.forEach(arrow => {
            arrow.addEventListener('click', this.slide.bind(this, arrow))
        });

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', this.currentSlide.bind(this, index + 1))
        });

        this.panel.forEach((panel, index) => {
            panel.addEventListener('click', (e) => this.accordeon.call(this, e))
        });

        this.bar.addEventListener("click", this.toggleClass);
        setInterval(() => {
            this.bar.click();
            this.arrow[0].click();
        },5000);
       
        this.showSlides(this.slideIndex);
        this.splitText();

        setInterval(this.change.bind(this), 4000)

    }

    change() {

        this.spanLetter.forEach(span => {
            span.setAttribute("style", `position:relative; z-index:${this.z}; color: white; font-size: ${this.fsize}`);
            let char = span.textContent;
            if (char !== " ") {
                this.z = this.z === 3 ? 1: 3;
                this.fsize = this.fsize === "50px" ? "60px" : "50px"
            }
            
        })
        
    }

    splitText() {

        let textArr = this.lineText.textContent.trim().split("");
        this.lineText.innerHTML = "";
        textArr.forEach((char,i) => {
            let span = document.createElement('span');
            span.className = "spanLetter";
            span.innerText = char;
            span.setAttribute("style", `position:relative; z-index:${this.z}; color: white; font-size: ${this.fsize}`)
            if (char !== " ") {
                this.z = this.z === 3 ? 1: 3;
                this.fsize = this.fsize === "50px" ? "60px" : "50px"
            }
            
            this.lineText.append(span)
        })
        this.spanLetter = [...document.querySelectorAll('.spanLetter')];
        
    }

    accordeon(e) {
        let el = e.target;
        let sub = el.nextElementSibling;
        el.classList.toggle('active');
        sub.classList.toggle('accordDisplay');
        
    }

    toggleClass () {
         this.classList.toggle("change");        
    }

    slide = (item) => {
        let counter = item.classList.contains("next")? 1: -1;
        this.plusSlides(counter);
    }    

    plusSlides = (n) => {
        this.showSlides(this.slideIndex += n);
      }
      
    currentSlide = (n) => {
        this.showSlides(this.slideIndex = n);
      }
      
    showSlides = (n) => {
        let i;
        
        if (n > this.slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = this.slides.length}
        for (i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }
        for (i = 0; i < this.dots.length; i++) {
            this.dots[i].className = this.dots[i].className.replace(" active", "");
        }
        this.slides[this.slideIndex-1].style.display = "block";
        this.dots[this.slideIndex-1].className += " active";
      }
}

let htmlStarter = new HTMLel();

