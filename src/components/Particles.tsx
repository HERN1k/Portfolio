import { FC, useEffect, useRef } from "react";
import { IBackground } from "../Types";
import { MOBILE } from "../Constants";

class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    speed: number = 0.25;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() + 1;
        this.speedX = Math.random() > 0.5 
            ? Math.random() * this.speed - 0.01 
            : -Math.random() * this.speed - 0.01;
        this.speedY = Math.random() > 0.5 
            ? Math.random() * this.speed - 0.01 
            : -Math.random() * this.speed - 0.01;
    }

    update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "grey";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

const Particles: FC<IBackground> = ({ children }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesArray = useRef<Particle[]>([]);

    const getParticleCount = () => (window.innerWidth <= MOBILE ? 50 : 100);

    const initParticles = (canvasWidth: number, canvasHeight: number) => {
        particlesArray.current = [];
        const particleCount = getParticleCount();
        for (let i = 0; i < particleCount; i++) {
            particlesArray.current.push(new Particle(canvasWidth, canvasHeight));
        }
    };

    const animateParticles = (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        particlesArray.current.forEach((particle) => {
            particle.update(canvasWidth, canvasHeight);
            particle.draw(ctx);
        });
        requestAnimationFrame(() => animateParticles(ctx, canvasWidth, canvasHeight));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                initParticles(canvas.width, canvas.height);
                animateParticles(ctx, canvas.width, canvas.height);
            }
        }
    }, []);

    return (
        <>
            {children}
            <canvas ref={canvasRef} className="particlesBg" />
        </>
    );
};


export default Particles;