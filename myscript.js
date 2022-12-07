var year = document.querySelector('.year')
var correct = document.querySelector('.correct')
var wrong = document.querySelector('.wrong')
var two = document.querySelector('.two')
var zero = document.querySelector('.zero')
var two_1 = document.querySelector('.two_1')
var two_2 = document.querySelector('.two_2')
var alphabate1 = document.querySelector('.alphabate1')
var five = document.querySelector('.five')
var seven = document.querySelector('.seven')
var alphabate2 = document.querySelector('.alphabate2')
var alphabate3 = document.querySelector('.alphabate3')
var four = document.querySelector('.four')
var one = document.querySelector('.one')
var three = document.querySelector('.three')
var nine = document.querySelector('.nine')
var myrighttap = document.querySelector('.myrighttap')
var slide1 = document.querySelector('.slide1')
var slide2 = document.querySelector('.slide2')
var cup = document.querySelector('.cup')
var cashback = document.querySelector('.cashback')
var cup = document.querySelector('.cup')
var cashback = document.querySelector('.cashback')
var text2 = document.querySelector('.text2')
var text1 = document.querySelector('.text1')
var condition = document.querySelector('.condition')

console.log(cup)

var correctguess= [two, zero, two_1, two_2]
console.log(correctguess[1])

alphabate1.addEventListener('click', ()=>{
  alphabate1.style.backgroundColor = "Red"
})
five.addEventListener('click', ()=>{
  five.style.backgroundColor = "Red"
})
seven.addEventListener('click', ()=>{
  seven.style.backgroundColor = "Red"
})
alphabate2.addEventListener('click', ()=>{
  alphabate2.style.backgroundColor = "Red"
})
four.addEventListener('click', ()=>{
  four.style.backgroundColor = "Red"
})
one.addEventListener('click', ()=>{
  one.style.backgroundColor = "Red"
})
three.addEventListener('click', ()=>{
  three.style.backgroundColor = "Red"
})
nine.addEventListener('click', ()=>{
  nine.style.backgroundColor = "Red"
})
alphabate3.addEventListener('click', ()=>{
  alphabate3.style.backgroundColor = "Red"
})

two.addEventListener('click', ()=>{
    two.style.backgroundColor = "Green"
    two_1.style.backgroundColor = "Green"
    two_2.style.backgroundColor = "Green"
    // correctyear();
})
zero.addEventListener('click', ()=>{
    zero.style.backgroundColor = "Green"
    correctyear();
})
two_1.addEventListener('click', ()=>{
    two.style.backgroundColor = "Green"
    two_1.style.backgroundColor = "Green"
    two_2.style.backgroundColor = "Green"
    // correctyear();
})
two_2.addEventListener('click', ()=>{
  two.style.backgroundColor = "Green"
  two_1.style.backgroundColor = "Green"
  two_2.style.backgroundColor = "Green"
   
})

// if(correctguess[1] != zero){
//   slide2_Animation();
// }

function correctyear(){
if(correctguess[0] === two || correctguess[0] === two_1 || correctguess[0] === two_2 && correctguess[1] === zero && correctguess[2] === two_1 && correctguess[3] === two_2 ){
    console.log("correct guess")
    slide2_Animation();
}
}


function slide2_Animation(){
  year.classList.add('fadeOut')
  
    setTimeout(function(){
      text1.classList.add('hidden')
      slide2.classList.remove('hidden')
        flashWorks();
        setTimeout(()=>{
            cup.classList.remove('hidden')
            setTimeout(()=>{
              cup.classList.add('lightSpeedOut')
              setTimeout(()=>{
                cashback.classList.remove('hidden')
                cashback.classList.add('popup')
                setTimeout(()=>{
                  text2.classList.remove('hidden')
                  text2.classList.add('fadeIn')
                  condition.classList.remove('hidden')
                },2100)
              },2000)
            },1800)
        },1000)
    },500)   
}



function flashWorks(){

    Point = function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
      };
      
      Particle = function(ctx, p0, p1, p2, p3) {
        this.ctx = ctx;
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
      
        this.time = 0;
        this.duration = 4 + Math.random() * 20;
        this.color =  '#' + Math.floor((Math.random() * 0xffffff)).toString(16);
      
        this.w = 10;
        this.h = 8;
      
        this.complete = false;
      };
      
      Particle.prototype = {
        update: function() {
          // (1/60) is timeStep
          this.time = Math.min(this.duration, this.time + (1/60));
      
          var f = Ease.outCubic(this.time, .0125, 1, this.duration);
          var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);
      
          var dx = p.x - this.x;
          var dy = p.y - this.y;
      
          this.r =  Math.atan2(dy, dx) + (Math.PI * 0.5);
          this.sy = Math.sin(Math.PI * f * 10);
          this.x = p.x;
          this.y = p.y;
      
          this.complete = this.time === this.duration;
        },
        draw: function() {
          this.ctx.save();
          this.ctx.translate(this.x, this.y);
          this.ctx.rotate(this.r);
          this.ctx.scale(1, this.sy);
      
          this.ctx.fillStyle = this.color;
          this.ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);
      
          this.ctx.restore();
        }
      };
      
      function CelebrationCanvas(canvas, width, height) {
        var particles = [];
        var ctx = canvas.getContext('2d');
      
        canvas.width = width;
        canvas.height = height;
        createParticles();
      
        function animate() {
          requestAnimationFrame(loop);
        }
      
        function createParticles() {
          for (var i = 0; i < 200; i++) {
            var p0 = new Point(width * 0.5, height * 0.5);
            var p1 = new Point(Math.random() * width, Math.random() * height);
            var p2 = new Point(Math.random() * width, Math.random() * height);
            var p3 = new Point(Math.random() * width, height + 64);
      
            particles.push(new Particle(ctx, p0, p1, p2, p3));
          }
        }
      
        function update() {
          particles.forEach(function(p) {
            p.update();
          });
        }
      
        function draw() {
          ctx.clearRect(0, 0, width, height);
          particles.forEach(function(p) {
            p.draw();
          });
        }
      
        function loop() {
          update();
          draw();
      
          if (checkParticlesComplete()) {
            // reset
            particles.length = 0;
            createParticles();
            setTimeout(function(){
              animate();
            }, (Math.random()*2000));
          } else {
            animate();
          }
        }
      
        function checkParticlesComplete() {
          for (var i = 0; i < particles.length; i++) {
            if (particles[i].complete === false) return false;
          }
          return true;
        }
      
        return {
          animate: animate
        };
      }
      
      var celebrationCanvas = new CelebrationCanvas(document.getElementById('celebration'), 600, 600);
      
      celebrationCanvas.animate();
      
      /**
       * easing equations from http://gizma.com/easing/
       * t = current time
       * b = start value
       * c = delta value
       * d = duration
       */
      var Ease = {
          inCubic: function (t, b, c, d) {
              t /= d;
              return c*t*t*t + b;
          },
          outCubic: function(t, b, c, d) {
              t /= d;
              t--;
              return c*(t*t*t + 1) + b;
          },
          inOutCubic: function(t, b, c, d) {
              t /= d/2;
              if (t < 1) return c/2*t*t*t + b;
              t -= 2;
              return c/2*(t*t*t + 2) + b;
          },
          inBack: function (t, b, c, d, s) {
              s = s || 1.70158;
              return c*(t/=d)*t*((s+1)*t - s) + b;
          }
      };
      
      function cubeBezier(p0, c0, c1, p1, t) {
          var p = new Point();
          var nt = (1 - t);
      
          p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
          p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;
      
          return p;
      }
    }