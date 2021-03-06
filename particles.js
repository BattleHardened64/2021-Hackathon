function drawParticles() {
    particles.forEach(function(p, i){
        if(p.alpha > 0) {
            ctx.fillStyle = `rgba(${p.red}, ${p.green}, 0, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fill();
            p.x += p.xvel;
            p.y += p.yvel;
            p.yvel += 0.1;
            p.r += p.rvel;
            if(p.y > 85 + 5 * Math.random()) {
                p.yvel = -1 * Math.random();
                p.xvel = Math.random() * 2 - 1
            }
            p.alpha -= p.die
        }
    })
    if(gameover) {
        makeParticle();
        makeParticle();
        makeParticle();
        makeParticle();
        makeParticle();
    }
}

function resetParticles() {
    particles = [];
}

function makeParticle() {
    var red = Math.random() * 50 + 200;
    var green = (1-Math.random()**2) * red/2 + red/2;
    var alpha = Math.random()*0.3+0.5
    particles.push({
        x: [4.9, 8.1, 11.1][Math.floor(Math.random() * 3)] - 0.3 + 0.6 * Math.random(),
        y: -rocketHeight + 85.5 - Math.random() - rocketVel * 2,
        xvel: - 0.2 + 0.4 * Math.random(),
        yvel: 0.1 - rocketVel * 0.8,
        r: 0.8 + Math.random() * 0.4,
        rvel: Math.random() * 0.1,
        red: red,
        green: green,
        alpha:  alpha,
        die: (0.02 + Math.random() * 0.01) * alpha
    })
}

var particles;
