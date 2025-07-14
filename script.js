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
 607 changes: 607 additions & 0 deletions607  
style.css
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,607 @@
/* Import Google Fonts for modern typography */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');

        /* CSS Variables for easy theme customization */
        :root {
            --primary-black: #0a0a0a;
            --secondary-black: #1a1a1a;
            --accent-blue: #00d4ff;
            --accent-purple: #8b5cf6;
            --text-white: #ffffff;
            --text-gray: #a1a1aa;
            --glow-blue: 0 0 20px rgba(0, 212, 255, 0.5);
            --glow-purple: 0 0 20px rgba(139, 92, 246, 0.5);
            --glow-intense: 0 0 40px rgba(0, 212, 255, 0.8);
        }

        /* Global Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--primary-black);
            color: var(--text-white);
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Animated Background with Floating Particles */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(45deg, var(--primary-black), var(--secondary-black));
        }

        /* Background logo styles - Currently disabled, uncomment and add your logo URL below */
        /*
        .bg-logo {
            position: absolute;
            opacity: 0.15;
            animation: float-glow 12s ease-in-out infinite;
            pointer-events: none;
            filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.6)) drop-shadow(0 0 60px rgba(139, 92, 246, 0.4));
            width: 200px;
            height: auto;
            border-radius: 15px;
        }
        
        @keyframes float-glow {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg) scale(1); 
                opacity: 0.12;
                filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.6)) drop-shadow(0 0 60px rgba(139, 92, 246, 0.4));
            }
            25% { 
                transform: translateY(-20px) rotate(2deg) scale(1.05); 
                opacity: 0.18;
                filter: drop-shadow(0 0 40px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.6));
            }
            50% { 
                transform: translateY(-40px) rotate(-1deg) scale(0.95); 
                opacity: 0.15;
                filter: drop-shadow(0 0 50px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 100px rgba(0, 212, 255, 0.5));
            }
            75% { 
                transform: translateY(-25px) rotate(3deg) scale(1.02); 
                opacity: 0.2;
                filter: drop-shadow(0 0 35px rgba(0, 212, 255, 0.9)) drop-shadow(0 0 70px rgba(139, 92, 246, 0.7));
            }
        }
        */

        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--accent-blue);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
            box-shadow: var(--glow-blue);
        }

        /* Particle Animation Keyframes */
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        /* Navigation Styles with Glow Effects */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1rem 2rem;
            background: rgba(10, 10, 10, 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 212, 255, 0.2);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            font-family: 'Orbitron', monospace;
            font-size: 1.8rem;
            font-weight: 900;
            color: var(--accent-blue);
            text-shadow: var(--glow-blue);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
        }

        .logo:hover {
            transform: scale(1.05);
            text-shadow: var(--glow-intense);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--text-white);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--accent-blue);
            text-shadow: var(--glow-blue);
        }

        /* Glowing Button Component */
        .glow-btn {
            padding: 0.5rem 1.2rem;
            background: linear-gradient(45deg, var(--accent-blue), var(--accent-purple));
            border: none;
            border-radius: 25px;
            color: var(--text-white);
            font-weight: 500;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: var(--glow-blue);
            text-decoration: none;
            display: inline-block;
        }

        .glow-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--glow-intense);
        }

        /* Hero Section with Anime-inspired Design */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            background: radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
        }

        .hero-content h1 {
            font-family: 'Orbitron', monospace;
            font-size: 4rem;
            font-weight: 900;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, var(--accent-blue), var(--accent-purple));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow-pulse 2s ease-in-out infinite alternate;
        }

        @keyframes glow-pulse {
            from { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5)); }
            to { filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.8)); }
        }

        .hero-content p {
            font-size: 1.2rem;
            color: var(--text-gray);
            margin-bottom: 2rem;
            max-width: 600px;
        }

        /* Services Section with Card Grid */
        .services {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 3rem;
            color: var(--accent-blue);
            text-shadow: var(--glow-blue);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: rgba(26, 26, 26, 0.8);
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            transition: all 0.6s ease;
            backdrop-filter: blur(10px);
            transform-style: preserve-3d;
            perspective: 1000px;
        }

        .service-card:hover {
            transform: rotateY(10deg) translateY(-10px);
            border-color: var(--accent-blue);
            box-shadow: var(--glow-blue);
        }

        .service-card.flip-in {
            animation: flipIn 0.8s ease-out forwards;
        }

        @keyframes flipIn {
            0% {
                transform: rotateY(-90deg) translateY(50px);
                opacity: 0;
            }
            50% {
                transform: rotateY(-45deg) translateY(25px);
                opacity: 0.5;
            }
            100% {
                transform: rotateY(0deg) translateY(0px);
                opacity: 1;
            }
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: block;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--accent-purple);
        }

        /* About Section with Team Focus */
        .about {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .about-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .about p {
            font-size: 1.1rem;
            color: var(--text-gray);
            margin-bottom: 2rem;
        }

        /* Contact Section with Form */
        .contact {
            padding: 5rem 2rem;
            background: rgba(26, 26, 26, 0.5);
        }

        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .contact-form {
            display: grid;
            gap: 1.5rem;
            margin-top: 3rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            text-align: left;
        }

        .form-group label {
            margin-bottom: 0.5rem;
            color: var(--accent-blue);
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
            padding: 1rem;
            background: rgba(26, 26, 26, 0.8);
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 10px;
            color: var(--text-white);
            font-family: inherit;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent-blue);
            box-shadow: var(--glow-blue);
        }

        /* Footer Styles */
        .footer {
            padding: 2rem;
            text-align: center;
            border-top: 1px solid rgba(0, 212, 255, 0.2);
            background: var(--primary-black);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .nav-links {
                display: none; /* Simplified for mobile - can be enhanced with hamburger menu */
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }

            .services-grid {
                grid-template-columns: 1fr;
            }

            .navbar {
                padding: 1rem;
            }
        }

        /* Smooth Scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Video Showcase Section */
        .video-showcase {
            padding: 5rem 2rem;
            background: rgba(26, 26, 26, 0.3);
        }

        .video-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .video-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .video-card {
            background: rgba(26, 26, 26, 0.8);
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .video-card:hover {
            transform: translateY(-10px);
            border-color: var(--accent-blue);
            box-shadow: var(--glow-blue);
        }

        .video-placeholder {
            position: relative;
            height: 200px;
            background: linear-gradient(45deg, var(--secondary-black), rgba(0, 212, 255, 0.1));
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .play-button {
            font-size: 3rem;
            color: var(--accent-blue);
            text-shadow: var(--glow-blue);
            transition: all 0.3s ease;
        }

        .video-placeholder:hover .play-button {
            transform: scale(1.2);
            color: var(--accent-purple);
        }

        .video-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            padding: 1rem;
            color: white;
        }

        .video-overlay h4 {
            margin: 0;
            font-size: 1.1rem;
        }

        .video-overlay p {
            margin: 0.5rem 0 0 0;
            font-size: 0.9rem;
            color: var(--text-gray);
        }

        .video-info {
            padding: 1.5rem;
        }

        .video-info h4 {
            color: var(--accent-blue);
            margin-bottom: 0.5rem;
        }

        .video-link {
            color: var(--accent-purple);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .video-link:hover {
            color: var(--accent-blue);
            text-shadow: var(--glow-blue);
        }

        /* Anime Quotes Section */
        .anime-quotes {
            padding: 3rem 2rem;
            text-align: center;
            background: rgba(139, 92, 246, 0.05);
        }

        .quotes-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .torii-gate {
            margin-bottom: 2rem;
        }

        .torii-svg {
            width: 100px;
            height: 60px;
            filter: drop-shadow(var(--glow-blue));
        }

        .quote-carousel {
            position: relative;
            height: 120px;
        }

        .quote {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            opacity: 0;
            transition: all 0.5s ease;
            transform: translateY(20px);
        }

        .quote.active {
            opacity: 1;
            transform: translateY(0);
        }

        .quote p {
            font-size: 1.3rem;
            font-style: italic;
            color: var(--accent-blue);
            margin-bottom: 1rem;
            text-shadow: var(--glow-blue);
        }

        .quote span {
            color: var(--text-gray);
            font-size: 0.9rem;
        }

        /* Clients Carousel Section */
        .clients-section {
            padding: 5rem 2rem;
            background: rgba(26, 26, 26, 0.5);
            overflow: hidden;
        }

        .clients-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .clients-carousel {
            overflow: hidden;
            margin-top: 3rem;
        }

        .client-track {
            display: flex;
            gap: 2rem;
            animation: scroll-clients 30s linear infinite;
            width: calc(200% + 4rem);
        }

        @keyframes scroll-clients {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 2rem)); }
        }

        .client-card {
            min-width: 250px;
            background: rgba(26, 26, 26, 0.8);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .client-card:hover {
            border-color: var(--accent-purple);
            box-shadow: var(--glow-purple);
            transform: translateY(-5px);
        }

        .client-logo {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .client-card h4 {
            color: var(--accent-blue);
            margin-bottom: 0.5rem;
        }

        .client-card p {
            color: var(--text-gray);
            font-size: 0.9rem;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--primary-black);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--accent-blue);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--accent-purple);
        }
