// Particle Animation System
        function createParticles() {
            const bgAnimation = document.getElementById('bgAnimation');
            const particleCount = 30; // Reduced particle count
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random positioning and animation delay
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
                
                // Random color variation between blue and purple
                if (Math.random() > 0.5) {
                    particle.style.background = 'var(--accent-purple)';
                    particle.style.boxShadow = 'var(--glow-purple)';
                }
                
                bgAnimation.appendChild(particle);
            }
            
            // Add background logos (currently disabled - see function above)
            // createBackgroundLogos();
        }
        
        // Create Background Logo Elements - Currently disabled
        function createBackgroundLogos() {
            /* 
            DEVELOPER NOTE: To add background logos, uncomment the CSS styles above and this function
            
            const bgAnimation = document.getElementById('bgAnimation');
            
            // Create 6-8 instances of your logo floating in background
            for (let i = 0; i < 7; i++) {
                const logoElement = document.createElement('img');
                logoElement.className = 'bg-logo';
                logoElement.src = 'YOUR_LOGO_URL_HERE'; // Replace with your logo URL
                logoElement.alt = 'Senpai Studios Logo';
                
                // Random positioning across the screen
                logoElement.style.left = Math.random() * 85 + '%';
                logoElement.style.top = Math.random() * 85 + '%';
                logoElement.style.animationDelay = Math.random() * 12 + 's';
                logoElement.style.animationDuration = (Math.random() * 8 + 10) + 's';
                
                // Random rotation and slight scale variation
                const rotation = Math.random() * 30 - 15; // -15 to +15 degrees
                const scale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2 scale
                logoElement.style.transform = `rotate(${rotation}deg) scale(${scale})`;
                
                bgAnimation.appendChild(logoElement);
            }
            */
        }
        
        // Smooth Scrolling for Navigation Links
        function initSmoothScrolling() {
            const navLinks = document.querySelectorAll('.nav-links a, .glow-btn[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
        
        // Navbar Scroll Effect
        function initNavbarScrollEffect() {
            const navbar = document.querySelector('.navbar');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                    navbar.style.backdropFilter = 'blur(20px)';
                } else {
                    navbar.style.background = 'rgba(10, 10, 10, 0.9)';
                    navbar.style.backdropFilter = 'blur(10px)';
                }
            });
        }
        
        // Form Submission Handler (Demo)
        function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const project = form.project.value;
    const message = form.message.value.trim();

    const subject = encodeURIComponent("Video Editing Inquiry from " + name);
    const body = encodeURIComponent(
        `Hi Senpai Studios,\n\n` +
        `I'm interested in your video editing services.\n\n` +
        `👤 Name: ${name}\n` +
        `📧 Email: ${email}\n` +
        `🎬 Project Type: ${project}\n` +
        `📝 Project Details: ${message}\n\n` +
        `Thank you!`
    );

    const mailtoLink = `mailto:studiossenpai07@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    form.reset();
}
        
        // Intersection Observer for Animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('service-card')) {
                            // Add flip animation to service cards
                            setTimeout(() => {
                                entry.target.classList.add('flip-in');
                            }, Math.random() * 300); // Stagger the animations
                        } else {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    }
                });
            }, observerOptions);
            
            // Observe service cards and video cards
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'rotateY(-90deg) translateY(50px)';
                observer.observe(card);
            });
            
            const videoCards = document.querySelectorAll('.video-card');
            videoCards.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease';
                observer.observe(el);
            });
        }
        
        // Quote Carousel Animation
        function initQuoteCarousel() {
            const quotes = document.querySelectorAll('.quote');
            let currentQuote = 0;
            
            function showNextQuote() {
                quotes[currentQuote].classList.remove('active');
                currentQuote = (currentQuote + 1) % quotes.length;
                quotes[currentQuote].classList.add('active');
            }
            
            // Change quote every 4 seconds
            setInterval(showNextQuote, 4000);
        }
        
        // Initialize all functionality when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            initSmoothScrolling();
            initNavbarScrollEffect();
            initScrollAnimations();
            initQuoteCarousel();
            
            console.log('🎬 Senpai Studios website loaded successfully!');
            console.log('💡 Developer Notes:');
            console.log('- Clean particle background animation ready');
            console.log('- Video section prepared with templates for easy addition');
            console.log('- Background logo system ready (currently disabled)');
            console.log('- All animations and effects working perfectly');
            console.log('- Ready for content customization');
            console.log('');
            console.log('📝 TO ADD VIDEOS:');
            console.log('1. Find the video-grid section in HTML');
            console.log('2. Use the commented templates for YouTube or placeholder videos');
            console.log('3. Replace YOUR_VIDEO_ID with actual YouTube video IDs');
            console.log('');
            console.log('🖼️ TO ADD BACKGROUND LOGOS:');
            console.log('1. Uncomment the .bg-logo CSS styles');
            console.log('2. Uncomment the createBackgroundLogos() function');
            console.log('3. Replace YOUR_LOGO_URL_HERE with your logo URL');
            console.log('4. Uncomment the function call in createParticles()');
        });
        
        // Logo Click Handler
        document.querySelector('.logo').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'95f2db8c351cc1a1',t:'MTc1MjUxNTM3Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();