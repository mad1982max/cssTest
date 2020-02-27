class HTMLel {
    i = 10;
    constructor() {
        this.slideIndex = 1;
        this.bar = document.getElementById("bar-menu");
        this.slides = document.getElementsByClassName("mySlides");
        this.dots = [...document.getElementsByClassName("dot")];
        this.arrow = [...document.querySelectorAll('.arrow')];
        this.panel = [...document.querySelectorAll('.section-header')];
        
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
        },300000);
       
        this.showSlides(this.slideIndex);        
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

