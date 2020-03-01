class Clock {
    canvas;
    ctx;
    r;
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx= this.canvas.getContext('2d');
        this.r = this.canvas.width / 2;
        this.ctx.translate (this.r, this.r);
		this.r *= 0.9;
		setInterval(this.drawclock, 1000);
        //this.drawclock();
	}
	
    drawclock = () => {
        this.drawFace();
        this.drawNumbers();
        this.drawTime();        
    }

    drawTime  = () => {
        let time = new Date();
        let h = time.getHours()%12;
        let minute = time.getMinutes();
        let second = time.getSeconds();
        h = (h*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));       
        this.drawHand(h, this.r*0.5, this.r*0.07);

        minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
        this.drawHand(minute, this.r*0.75, this.r*0.07);

        second = (second*Math.PI/30);
        this.drawHand(second, this.r*0.85, this.r*0.02);
    }

    drawHand = (pos, length, width) => {
		this.ctx.strokeStyle = '#12123a';
        this.ctx.beginPath();
        this.ctx.lineWidth = width;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(0,0);
        this.ctx.rotate(pos);
        this.ctx.lineTo(0, -length);
        this.ctx.stroke();
        this.ctx.rotate(-pos);    
    }

    drawFace = () => {
		this.ctx.beginPath();
        this.ctx.arc(0,0,this.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();

        let grd = this.ctx.createRadialGradient(0, 0 , this.r * 0.95, 0, 0, this.r * 1.05);
        grd.addColorStop(0, '#12123a');
        grd.addColorStop(0.5, 'white');
        grd.addColorStop(1, '#12123a');
        this.ctx.strokeStyle = grd;
        this.ctx.lineWidth = this.r*0.1;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.r * 0.05, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#333';
        this.ctx.fill();
    }
    drawNumbers = () => {

        this.ctx.font = '20px arial';
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = '#12123a'
        for (let h = 1; h < 13; h ++) {
            let ang = h * Math.PI / 6;
            this.ctx.rotate(+ang);
            this.ctx.translate(0, -this.r * 0.7);
            this.ctx.rotate(-ang);
            this.ctx.fillText(h.toString(), 0, 0);
            this.ctx.rotate(ang);
            this.ctx.translate(0, +this.r * 0.7);
            this.ctx.rotate(-ang);
        }

        this.ctx.font = '8px arial';
        this.ctx.fillStyle = '#996600'
        for (let m = 1; m < 61; m ++) {
            let angM = m * Math.PI / 30;

            this.ctx.rotate(+angM);
            this.ctx.translate(0, -this.r * 0.9);
            this.ctx.rotate(-angM);

            this.ctx.fillText(m.toString(), 0, 0);
            this.ctx.rotate(angM);
            this.ctx.translate(0, +this.r * 0.9);
            this.ctx.rotate(-angM);
        }

    }
}
let clock = new Clock();








 