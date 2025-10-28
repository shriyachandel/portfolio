import React, { useEffect, useRef } from "react";
import "./css/Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 500; // 👈 increase dots
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 1.5 + 0.3;
        this.speed = Math.random() * 0.3 + 0.1;
        this.alpha = Math.random() * 0.8 + 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.y = 0;
          this.x = Math.random() * width;
        }
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-inner">
        <div className="hero-left">
          <h1>
            Hi, I’m <span className="glow-text">Shriya Chandel</span>
          </h1>
          <p className="subtitle">
            <span>Shopify Developer</span> | Learning <span>React</span> to build modern, dynamic web experiences.
          </p>
          <a href="#projects" className="hero-btn">
            Explore My Work
          </a>
        </div>
        <div className="hero-right">
          <img
            src="/designer.png"
            alt="Shriya Chandel"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
