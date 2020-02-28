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

        this.hulkText = "Bioscience genius Dr. Bruce Banner focused his major studies on the effects of gamma radiation on humans, working alongside Dr. Betty Ross at a Virginia University lab. Dr. Ross’ father, General “Thunderbolt” Ross of the U.S. Army, channeled Banner’s work into a program to develop weapons for the military, unbeknownst to both doctors. When Banner decided to test what he learned on himself, he triggered a fantastic transformation in himself that resulted in an immense, hulking figure fueled by his own rage. Having destroyed his lab as the creature, and inadvertently harming Ross in the process, Banner slipped away to avoid capture and study by the Army and began a desperate quest for a cure to his bizarre affliction."

        this.ironText = "Genius inventor Tony Stark continued his father Howard Stark’s weaponry business after his parents’ untimely deaths and flew it to even greater heights of innovation. While in Afghanistan to demonstrate a new missile for the U.S. military, Stark’s convoy came under fire by a terrorist group known as the Ten Rings and he was severely wounded. Taken prisoner by the group, Stark awoke in their headquarters to learn that shrapnel near his heart had nearly cost him his life, but swift action by scientist and fellow prisoner Ho Yinsen—who had inserted a powerful electromagnet in Stark’s chest—would prolong it temporarily. Stalling his captors after they demanded he build them a new weapon, Stark replaced the magnet with the RT, a miniature version of a device originally designed by his father, the Arc Reactor. Furthermore, he and Yinsen created a crude suit of armor which could provide them the means with which to escape. The suit worked as planned, though Yinsen sacrificed himself in order to allow Tony enough time to power it up to fight their terrorist captors."       

        
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
        this.printed_el_text( sub );
        
    }

    printed_el_text( el ){
        let text;
        if (el.classList.contains("hulk")) text = this.hulkText;
        if (el.classList.contains("iron")) text = this.ironText;
        let	i = 0;
        var print = function print(){
                i++;
                if( i <= text.length ){
                    el.innerHTML = text.substr(0, i);
                    if(el.classList.contains('accordDisplay')) {
                        setTimeout( print, 50 );
                    }
                    
                }
            };
            print();
    };

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




