import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      const parentWidth = canvas.parentElement?.offsetWidth || 500;
      const parentHeight = canvas.parentElement?.offsetHeight || 500;
      
      // Set canvas size with higher resolution for retina displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parentWidth * dpr;
      canvas.height = parentHeight * dpr;
      
      // Scale the canvas back down with CSS
      canvas.style.width = `${parentWidth}px`;
      canvas.style.height = `${parentHeight}px`;
      
      // Scale the drawing context
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Colors
    const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#f97316'];
    
    // Create particles
    const particlesCount = 40;
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const width = parseInt(canvas.style.width);
      const height = parseInt(canvas.style.height);
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1
      });
    }
    
    // Animation
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw browser mockup
      drawBrowserMockup(ctx, parseInt(canvas.style.width), parseInt(canvas.style.height));
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary check
        if (p.x < 0 || p.x > parseInt(canvas.style.width)) p.speedX *= -1;
        if (p.y < 0 || p.y > parseInt(canvas.style.height)) p.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      
      // Connect particles
      connectParticles(ctx, particles);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Function to draw browser mockup
  const drawBrowserMockup = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Calculate browser dimensions
    const browserWidth = width * 0.85;
    const browserHeight = height * 0.7;
    const startX = (width - browserWidth) / 2;
    const startY = (height - browserHeight) / 2;
    
    // Draw browser window
    ctx.fillStyle = '#fff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;
    ctx.beginPath();
    ctx.roundRect(startX, startY, browserWidth, browserHeight, 8);
    ctx.fill();
    ctx.shadowColor = 'transparent';
    
    // Draw browser top bar
    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath();
    ctx.roundRect(startX, startY, browserWidth, 30, [8, 8, 0, 0]);
    ctx.fill();
    
    // Draw browser dots
    const dotY = startY + 15;
    const dotRadius = 4;
    
    // Red dot
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(startX + 15, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Yellow dot
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(startX + 30, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Green dot
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(startX + 45, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw address bar
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.roundRect(startX + 60, startY + 8, browserWidth - 120, 15, 10);
    ctx.fill();
    
    // Website content mockup
    const contentStartX = startX + 20;
    const contentStartY = startY + 50;
    const contentWidth = browserWidth - 40;
    
    // Header
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.rect(contentStartX, contentStartY, contentWidth, 40);
    ctx.fill();
    
    // Logo area
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.rect(contentStartX + 10, contentStartY + 10, 100, 20);
    ctx.fill();
    
    // Nav items
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = '#93c5fd';
      ctx.beginPath();
      ctx.rect(contentStartX + contentWidth - 220 + (i * 70), contentStartY + 10, 60, 20);
      ctx.fill();
    }
    
    // Hero section
    ctx.fillStyle = '#dbeafe';
    ctx.beginPath();
    ctx.rect(contentStartX, contentStartY + 60, contentWidth, 100);
    ctx.fill();
    
    // Hero content
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.rect(contentStartX + 30, contentStartY + 80, contentWidth * 0.4, 20);
    ctx.fill();
    
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.rect(contentStartX + 30, contentStartY + 110, contentWidth * 0.3, 15);
    ctx.fill();
    
    // Button
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.roundRect(contentStartX + 30, contentStartY + 135, 80, 20, 4);
    ctx.fill();
    
    // Content sections
    const sectionColors = ['#f8fafc', '#f1f5f9'];
    const sectionHeight = 60;
    
    for (let i = 0; i < 2; i++) {
      const sectionY = contentStartY + 180 + (i * sectionHeight);
      
      ctx.fillStyle = sectionColors[i % 2];
      ctx.beginPath();
      ctx.rect(contentStartX, sectionY, contentWidth, sectionHeight);
      ctx.fill();
      
      // Section content
      const boxWidth = (contentWidth - 80) / 3;
      
      for (let j = 0; j < 3; j++) {
        const boxX = contentStartX + 20 + (j * (boxWidth + 20));
        
        ctx.fillStyle = j === 1 ? '#bfdbfe' : '#dbeafe';
        ctx.beginPath();
        ctx.roundRect(boxX, sectionY + 10, boxWidth, 40, 4);
        ctx.fill();
      }
    }
  };
  
  // Function to connect particles
  const connectParticles = (ctx: CanvasRenderingContext2D, particles: Array<{ x: number; y: number; radius: number; color: string }>) => {
    const maxDistance = 100;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Calculate opacity based on distance
          const opacity = 1 - (distance / maxDistance);
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(203, 213, 225, ${opacity * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[500px] relative"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </motion.div>
  );
};

export default HeroAnimation;