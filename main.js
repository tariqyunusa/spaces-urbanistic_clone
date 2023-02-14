const tl = gsap.timeline({duration:1})

tl.from('.nav', {opacity: 0, duration: 2})
    .from('.h3',{right:50, duration:1, opacity:0})
    .from('.h2', {left:50, duration:1, delay:0, opacity: 0})
    .from('.first__img', {y:100, opacity:0, duration: 1})
    .from('.second__img', {y:-100, opacity:0, duration:1})
    .from('.numbers', {x:-100, opacity:0, duration:1})
    .from('.text__lecture', {x:-50, opacity:0, duration:1})