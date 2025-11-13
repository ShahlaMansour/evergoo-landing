document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect on mouse move
    const container = document.querySelector('.container');
    const shapes = document.querySelectorAll('.shape');
    const icons = document.querySelectorAll('.icon');

    document.addEventListener('mousemove', (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const mouseX = (e.clientX / width) - 0.5;
        const mouseY = (e.clientY / height) - 0.5;

        // Parallax for shapes
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const x = mouseX * speed;
            const y = mouseY * speed;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Parallax for icons
        icons.forEach((icon, index) => {
            const speed = (index + 1) * 15;
            const x = mouseX * speed;
            const y = mouseY * speed;
            icon.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Subtle tilt effect on container
        const rotateY = mouseX * 5;
        const rotateX = mouseY * -5;
        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        shapes.forEach(shape => {
            shape.style.transform = 'translate(0, 0)';
        });
        icons.forEach(icon => {
            icon.style.transform = 'translate(0, 0)';
        });
    });
});