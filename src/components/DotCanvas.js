import React, { useRef, useEffect } from 'react'
import './DotCanvas.css'




const DotCanvas = props => {

    const canvasRef = useRef(null)

    let bubleCord = [];
    let balls = 400;
    let context;
    let canvas;

    let mouse = {
        x:0,
        y:0
    }
    window.addEventListener("mousemove",function (e){
        mouse.x = e.x;
        mouse.y = e.y;
    })
    window.addEventListener("mousedown",function (e){
        bubleCord.push({
            x:mouse.x,
            y:mouse.y,
            radius:Math.floor(Math.random() * 5),
            dx:(Math.random() - 0.5) * 2,
            dy:(Math.random() - 0.5) * 2
        })
        mouse.x = e.x;
        mouse.y = e.y;
    })

    useEffect(() => {
        canvas = canvasRef.current
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        context = canvas.getContext('2d')

        for(let i = 0; i< balls; i++){
            bubleCord.push({
                x:Math.random() * context.canvas.width,
                y:Math.random() * context.canvas.height,
                radius:Math.floor(Math.random() * 5),
                dx:(Math.random() - 0.5) * 2,
                dy:(Math.random() - 0.5) * 2
                /*x:Math.random() * window.innerWidth,
                y:Math.random() * window.innerHeight*/
            })
        }

        animate();
    }, [])

    function draw(){
        for (let i = 0; i < bubleCord.length; i++){
            let buble = bubleCord[i];
            context.beginPath();
            context.arc(buble.x, buble.y,buble.radius,0,Math.PI*2,false)
            context.stroke();
            //context.fillStyle = "#fff"
            context.fill();
        }

        context.beginPath();
        for(let i = 0; i<bubleCord.length; i++){
            let l1 = bubleCord[i];
            context.moveTo(l1.x, l1.y);
            /*if(distance(mouse,l1)<70){
                context.lineTo(mouse.x, mouse.y);
            }*/
            for(let j = 0; j<bubleCord.length; j++){
                let l2 = bubleCord[j];
                if(distance(l1,l2) < 70){
                    context.lineTo(l2.x, l2.y);
                }

            }
        }
        //context.lineWidth = "0.05"
        //context.strokeStyle = "#fff"
        context.stroke();

    }
    function update(){
        for(let i = 0; i < bubleCord.length; i++){
            let s = bubleCord[i];
            if(s.x < 0 || s.x > canvas.width){
                s.dx = - s.dx;
            }
            if(s.y < 0 || s.y > canvas.height){
                s.dy = - s.dy;
            }
            //mouse
            let distanceMouse = 300;
            /*if(s.x - mouse.x < distanceMouse && s.x - mouse.x >= 0){
                s.dx = - s.dx;
            }
            if(s.x - mouse.x > -distanceMouse && s.x - mouse.x <= -1){
                s.dx = + s.dx;
            }
            if(s.y - mouse.y < distanceMouse && s.y - mouse.y >= 0){
                s.dy = - s.dy;
            }
            if(s.y - mouse.y > -distanceMouse && s.y - mouse.y <= -1){
                s.dy = + s.dy;
            }*/
            if(distance(mouse,s) < 70){
                let mx = s.dx - mouse.x
                let my = s.dy - mouse.y

            }



            s.x += s.dx;
            s.y += s.dy;
        }
        draw();
    }
    function distance(point1, point2){
        let dx = 0;
        let dy = 0;

        dx = point2.x - point1.x;
        dx = dx * dx;
        dy = point2.y - point1.y;
        dy = dy * dy;
        return Math.sqrt(dx + dy);
    }
    function animate(){
        requestAnimationFrame(animate);
        context.clearRect(0,0,canvas.width, canvas.height);
        update();
    }


    return <canvas className="canvas" ref={canvasRef} {...props}/>
}

export default DotCanvas