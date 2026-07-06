// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 20px -2px rgba(15, 23, 42, 0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;

        // Here you would typically send the data to a server
        // For demo purposes, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

        // Reset form
        contactForm.reset();
    });
}

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add typing effect to hero title (optional enhancement)
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const text = heroTitle.textContent;
//     heroTitle.textContent = '';
//     let i = 0;
//     
//     function typeWriter() {
//         if (i < text.length) {
//             heroTitle.textContent += text.charAt(i);
//             i++;
//             setTimeout(typeWriter, 50);
//         }
//     }
//     
//     // Uncomment to enable typing effect
//     // typeWriter();
// }

// Parallax effect for hero section (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / window.innerHeight;
    }
});

// Hide preloader on page load
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 300);
    }
});

// Project Details Data
const projectsData = {
    1: {
        title: "Credit Keeper",
        icon: '<i class="fas fa-shield-alt"></i>',
        overview: "A digital Khata mobile application designed for Pakistani shopkeepers. It replaces traditional paper ledger books, allowing easy management of customer debts (Credit/Udhaar) and payments (Zama) with professional text-based receipts in PKR.",
        features: [
            "Customer Management: Add, search, and manage customer profiles",
            "Digital Ledger: Record credit (Udhaar) and payments (Payment) instantly",
            "Multi-Select Delete: Efficiently delete multiple customers or transactions at once",
            "Quick Add: Record transactions directly from the dashboard for frequent customers",
            "Professional Receipts: Generate text-based receipts in PKR (Rs.) and share them via messaging apps",
            "Business Insights: View total market credit and net balance at a glance",
            "Shop Customization: Personalize the app with your own Shop Name (e.g., KNB Mart)"
        ],
        technologies: ["Flutter", "Dart", "SQLite", "sqflite", "Shared Preferences"],
        details: "Credit Keeper is a lightweight, secure Flutter mobile application designed to replace traditional paper-based ledger books (Khata). The app leverages SQLite (via sqflite) for offline local storage, ensuring user data remains private and fast. Shop custom configurations are persisted locally using shared_preferences. It provides a simple dashboard displaying net balances and total market credit, helping shopkeepers transition to a modern digital workflow.",
        githubUrl: "https://github.com/faaizashiq/Credit-Keeper-app"
    },
    2: {
        title: "Shop POS System",
        icon: '<i class="fas fa-cash-register"></i>',
        overview: "A modern desktop Point of Sale (POS) system built using Python and PyQt5. Designed to help small retail business owners manage inventory, process sales transactions efficiently, and print custom receipts to thermal printers.",
        features: [
            "Inventory Management: Add, update, and delete products (names, prices, stock, barcodes)",
            "Barcode & Autocomplete Search: Fast product lookups by scanning a barcode or typing with autocomplete",
            "Dynamic Billing System: Real-time calculation of item prices, quantities, and running totals",
            "Thermal Printer Support: Print compact, formatted sales receipts on standard 80mm thermal paper",
            "Sales History Tracker: View past transactions, item details, quantities, and total earnings",
            "Product Reports: Access cleanly structured, styled HTML reports of all products in inventory"
        ],
        technologies: ["Python", "PyQt5", "SQLite3", "QPrinter", "QTextDocument", "QCompleter"],
        details: "This desktop POS system is engineered for local merchants and retail shops. Built using Python and the PyQt5 GUI framework, it integrates a local SQLite3 database for robust offline performance and ease of deployment. Features like QCompleter provide a seamless autocomplete search experience. Printing is handled directly through QPrinter and QTextDocument, generating clean and compact 80mm receipts. This product is actively developed for commercial deployment to local retail stores.",
        githubUrl: "https://github.com/faaizashiq/POS-System"
    },
    3: {
        title: "Forest Fire Detector",
        icon: '<i class="fas fa-fire"></i>',
        overview: "A deep learning computer vision system built to detect active forest fires from aerial and landscape images. Employs a custom Convolutional Neural Network (CNN) trained with PyTorch and deployed locally in-browser.",
        features: [
            "Deep Learning Core: Custom CNN model trained to identify fire/non-fire landscapes",
            "High Accuracy: Reached 97.27% validation accuracy on a dataset of 50,000+ images",
            "Client-Side Inference: Runs predictions locally in the browser with ONNX Runtime Web",
            "Real-Time Testing: Upload any image of a forest or landscape to instantly check for fire",
            "Efficient Operations: Leverages optimized tensor math operations with no server costs"
        ],
        technologies: ["PyTorch", "Python", "CNN", "ONNX Runtime Web", "OpenCV", "Matplotlib"],
        details: "This project addresses the problem of early wildfire detection by developing an image classification pipeline. Built using PyTorch, the network is trained on Kaggle's comprehensive forest fire dataset. To demonstrate end-to-end AI application delivery, the model weights were compiled to the ONNX format, enabling full client-side execution in the browser. Users can upload images to run predictions directly on their local CPU/GPU, removing the need for a cloud GPU server.",
        githubUrl: "https://github.com/faaizashiq/Fire_Nonfire_CNN-Model",
        interactiveDemo: "fire-detector"
    },
    4: {
        title: "KNN Spatial Map Reconstruction",
        icon: '<i class="fas fa-map-marked-alt"></i>',
        overview: "A spatial prediction and image processing project applying the K-Nearest Neighbors (KNN) algorithm to reconstruct missing geographic regions on partially occluded maps of Italy.",
        features: [
            "Spatial Reconstruction: Reconstructs missing/occluded geographical map segments using KNN",
            "Multi-Metric Evaluation: Compares Euclidean and Manhattan distance metrics for reconstruction quality",
            "Visibility Level Testing: Evaluated performance across 10%, 20%, 30%, 40%, and 50% visibility rates",
            "Hyperparameter Comparisons: Analyzed map reconstruction using multiple k-values (1, 3, 5, 7, and 9)",
            "Visual Comparison Analysis: Generated 50 high-resolution visual comparison reports mapping the predictions"
        ],
        technologies: ["Python", "NumPy", "Scikit-learn", "OpenCV", "Matplotlib", "Jupyter Notebook"],
        details: "This project explores spatial prediction by formulating geographical map reconstruction as a machine learning task. It uses K-Nearest Neighbors (KNN) to impute missing pixel regions in maps of Italy. By testing varying percentages of map occlusions and comparing Euclidean vs. Manhattan distance functions across k-values 1 to 9, the study demonstrates how different hyperparameters affect reconstruction resolution and noise.",
        githubUrl: "https://github.com/faaizashiq/KNN-with-Image-processing-",
        images: [
            { src: "assets/knn/italy_original.png", label: "Original Italy Map" },
            { src: "assets/knn/italy_10_visible.png", label: "10% Visible Input (Masked)" },
            { src: "assets/knn/reconstructed_10_euclidean_k1.png", label: "Reconstruction (10% Vis, Euclidean, K=1)" },
            { src: "assets/knn/italy_50_visible.png", label: "50% Visible Input (Masked)" },
            { src: "assets/knn/reconstructed_50_euclidean_k9.png", label: "Reconstruction (50% Vis, Euclidean, K=9)" }
        ]
    },
    5: {
        title: "Diabetes Prediction App",
        icon: '<i class="fas fa-notes-medical"></i>',
        overview: "A machine learning application trained to classify and predict diabetes risk using key patient health indicators. Built with Scikit-learn, evaluated with multiple models (SVM, Random Forest, Logistic Regression), and deployed live for interactive testing.",
        features: [
            "Predictive Classification: Estimates diabetes risk using standardized clinical health metrics",
            "Multi-Algorithm Evaluation: Compares Logistic Regression (96.35% accuracy), Random Forest (97.27%), and SVM (97.10%)",
            "Live Interactive Tester: Calculates and updates diagnostic risk probability dynamically as you input details",
            "Pure JS Deploy: Embedded directly in the client-side portfolio using the trained model weights",
            "Responsive Diagnostic Feedback: Highlights low-risk and high-risk states with clear warnings"
        ],
        technologies: ["Scikit-learn", "Python", "Gradio", "JavaScript", "StandardScaler", "Logistic Regression"],
        details: "This diabetes prediction application uses machine learning to identify diabetic risk from health parameters. It analyzes patient data including Age, BMI, HbA1c, and Glucose levels. The model was built and compared in Python using Scikit-learn. To create a highly responsive portfolio demo, we extracted the model's standardized feature means and logistic coefficients, implementing the mathematical inference engine directly in JavaScript. This allows instant risk calculations as users modify clinical values.",
        githubUrl: "https://github.com/faaizashiq/AI_Project",
        interactiveDemo: "diabetes-predictor"
    },
    6: {
        title: "Android Weather App",
        icon: '<i class="fas fa-cloud-sun"></i>',
        overview: "A responsive weather reporting mobile application built using Android Studio. This project represents my very first milestone, serving as the initial start of my journey into full-stack software coding, APIs, and AI/Machine learning development.",
        features: [
            "Milestone Project: Served as my foundational introduction to coding, APIs, and software engineering",
            "Real-Time Weather: Fetches live temperature, humidity, and wind metrics for any city using REST APIs",
            "Sleek Android UI: Clean, user-friendly mobile layout featuring dynamic weather icons",
            "Modern Tooling: Developed in Android Studio utilizing Java/Kotlin programming fundamentals",
            "API Integration: Parses JSON payloads and handles network threads asynchronously on mobile"
        ],
        technologies: ["Android Studio", "Java", "Kotlin", "REST API", "JSON Parsing", "Mobile Development"],
        details: "This Weather App represents my initial step and personal start in full-stack coding, laying the foundational knowledge needed for my transition into advanced Artificial Intelligence, Machine Learning, and Deep Learning development. Built for Android devices, it integrates a remote weather REST API to retrieve real-time regional weather statistics. The project introduced key mobile development concepts, including network calling threads, asynchronous JSON parsing, state handling, and responsive mobile layout design.",
        githubUrl: "https://github.com/faaizashiq/Weather_app"
    },
    7: {
        title: "Autonomous AI Agent",
        icon: '<i class="fas fa-robot"></i>',
        overview: "An intelligent agent built with LLMs and tool-calling capabilities. Capable of executing complex workflows, searching the web, and interacting with APIs autonomously based on natural language commands.",
        features: [
            "Natural language parsing and task decomposition",
            "Dynamic tool calling and API interaction",
            "Web search integration for real-time information retrieval",
            "Autonomous error recovery and self-correction loop",
            "Conversational memory management for multi-turn interactions",
            "Clean, modular agent architecture using LangChain"
        ],
        technologies: ["Python", "LangChain", "OpenAI API", "Agentic Workflow", "ChromaDB", "APIs"],
        details: "This project showcases the implementation of an autonomous AI agent capable of breaking down complex high-level instructions into concrete steps, executing them using a variety of external tools (such as search engines, math solvers, and databases), and self-correcting if any step fails. Built on top of LangChain, it leverages advanced prompt engineering and OpenAI's function-calling API to deliver robust agentic behavior.",
        githubUrl: "https://github.com/faaizashiq/autonomous-ai-agent"
    },
    8: {
        title: "CodeCracker",
        icon: '<i class="fas fa-cogs"></i>',
        overview: "Custom pipe with own LLM server using llama.cpp and gguf models(with weight set what we required) I made sure these features! Dynamic content, adaptive difficulty level, AI feedback(A AI coach for student's help.)",
        features: [
            "Custom pipeline with own LLM server using llama.cpp and GGUF models",
            "Dynamic content generation",
            "Adaptive difficulty level",
            "AI feedback (A AI coach for student's help)"
        ],
        technologies: ["llama.cpp", "GGUF", "Python", "LLMs"],
        details: "CodeCracker features a custom pipeline with a dedicated local LLM server using llama.cpp and GGUF models (with weight sets tailored to specific needs). It delivers dynamic content, adapts difficulty levels dynamically, and offers specialized AI feedback acting as an AI coach for students.",
        githubUrl: "https://codecracker.org",
        buttonText: "codecracker.org",
        buttonIcon: '<i class="fas fa-external-link-alt"></i>'
    }
};

// Modal functionality
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalIcon = document.getElementById('modalIcon');
const modalOverview = document.getElementById('modalOverview');
const modalFeatures = document.getElementById('modalFeatures');
const modalTags = document.getElementById('modalTags');
const modalGallerySection = document.getElementById('modalGallerySection');
const modalGallery = document.getElementById('modalGallery');
const modalInteractiveSection = document.getElementById('modalInteractiveSection');
const dropZone = document.getElementById('dropZone');
const modelImageInput = document.getElementById('modelImageInput');
const testerPreviewContainer = document.getElementById('testerPreviewContainer');
const testerPreview = document.getElementById('testerPreview');
const runInferenceBtn = document.getElementById('runInferenceBtn');
const clearTesterBtn = document.getElementById('clearTesterBtn');
const testerStatus = document.getElementById('testerStatus');
const testerSpinner = document.getElementById('testerSpinner');
const testerResults = document.getElementById('testerResults');
const resultAlert = document.getElementById('resultAlert');
const resultIcon = document.getElementById('resultIcon');
const resultLabel = document.getElementById('resultLabel');
const firePercentage = document.getElementById('firePercentage');
const fireFill = document.getElementById('fireFill');
const safePercentage = document.getElementById('safePercentage');
const safeFill = document.getElementById('safeFill');

const modalDiabetesSection = document.getElementById('modalDiabetesSection');
const diagGender = document.getElementById('diagGender');
const diagAge = document.getElementById('diagAge');
const diagHypertension = document.getElementById('diagHypertension');
const diagHeartDisease = document.getElementById('diagHeartDisease');
const diagBMI = document.getElementById('diagBMI');
const diagHbA1c = document.getElementById('diagHbA1c');
const diagGlucose = document.getElementById('diagGlucose');
const diagAlert = document.getElementById('diagAlert');
const diagIcon = document.getElementById('diagIcon');
const diagLabel = document.getElementById('diagLabel');
const diagRiskPercentage = document.getElementById('diagRiskPercentage');
const diagRiskFill = document.getElementById('diagRiskFill');

const modalDetails = document.getElementById('modalDetails');
const modalGithubLink = document.getElementById('modalGithubLink');
const modalClose = document.querySelector('.modal-close');

// Global state variables for the ML model
let loadedModelSession = null;
let selectedImageFile = null;

// Function to open modal with project details
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Set modal content
    modalTitle.textContent = project.title;
    modalIcon.innerHTML = project.icon;
    modalOverview.textContent = project.overview;

    // Set features
    modalFeatures.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });

    // Set technologies
    modalTags.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        modalTags.appendChild(span);
    });

    // Set gallery if images are present
    modalGallery.innerHTML = '';
    if (project.images && project.images.length > 0) {
        project.images.forEach(img => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const image = document.createElement('img');
            image.src = img.src;
            image.alt = img.label;
            image.loading = 'lazy';

            const caption = document.createElement('div');
            caption.className = 'gallery-caption';
            caption.textContent = img.label;

            item.appendChild(image);
            item.appendChild(caption);
            modalGallery.appendChild(item);
        });
        modalGallerySection.style.display = 'block';
    } else {
        modalGallerySection.style.display = 'none';
    }

    // Set details
    modalDetails.textContent = project.details;

    // Set Link button text, icon, and URL
    modalGithubLink.href = project.githubUrl;
    if (project.buttonText) {
        const icon = project.buttonIcon || '<i class="fas fa-external-link-alt"></i>';
        modalGithubLink.innerHTML = `${icon} ${project.buttonText}`;
    } else {
        modalGithubLink.innerHTML = '<i class="fab fa-github"></i> View on GitHub';
    }

    // Set interactive demos if configured
    if (project.interactiveDemo === "fire-detector") {
        modalInteractiveSection.style.display = 'block';
        resetTesterUI();
        initFireDetectorDemo();
    } else {
        modalInteractiveSection.style.display = 'none';
    }

    if (project.interactiveDemo === "diabetes-predictor") {
        modalDiabetesSection.style.display = 'block';
        resetDiabetesUI();
        runDiabetesInference();
    } else {
        modalDiabetesSection.style.display = 'none';
    }

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Add click event to project cards
document.querySelectorAll('.project-card.clickable').forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't open modal if clicking the view button (it will handle it)
        if (!e.target.closest('.view-details-btn')) {
            const projectId = card.getAttribute('data-project');
            openModal(projectId);
        }
    });
});

// Add click event to view details buttons
document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = btn.getAttribute('data-project');
        openModal(projectId);
    });
});

// Close modal when clicking close button
modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Interactive Mouse and Card Effects
document.addEventListener('DOMContentLoaded', () => {

    // 2. Modern Particle Trail
    let lastX = 0;
    let lastY = 0;
    const minDistance = 18; // Spacing between particles

    window.addEventListener('mousemove', (e) => {
        const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);

        if (dist > minDistance) {
            createParticle(e.clientX, e.clientY);
            lastX = e.clientX;
            lastY = e.clientY;
        }
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'trail-particle';

        // Randomize size slightly
        const size = Math.floor(Math.random() * 4) + 4; // 4px to 7px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Match viewport position
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Match theme accents (Teal & Sky Blue)
        const colors = ['#0d9488', '#0284c7'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(particle);

        // Remove particle after fade animation ends
        setTimeout(() => {
            particle.remove();
        }, 600);
    }

    // 3. 3D Project Card Tilt
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate tilt rotation (max 10 degrees)
            const rotateX = ((centerY - y) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;

            // Apply 3D tilt + slide up + scale
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -8px, 0) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            // Smoothly snap back
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)`;
        });
    });
});

// Interactive Neural Network Background Canvas
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 115; // Balanced for aesthetics and performance
    const connectionDist = 110; // Max line distance
    let mouse = { x: null, y: null, active: false };

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
        mouse.active = false;
    });

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            // Slow velocities
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.radius = Math.random() * 1.5 + 1.5; // 1.5px to 3px
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off boundaries
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

            // Gentle mouse attraction / repulsion
            if (mouse.active && mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 150) {
                    // Push particles away slightly
                    const force = (150 - dist) / 150;
                    this.x -= (dx / dist) * force * 0.65;
                    this.y -= (dy / dist) * force * 0.65;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(13, 148, 136, 0.35)'; // Soft Teal Nodes
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections and particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);

                if (dist < connectionDist) {
                    const alpha = (1 - (dist / connectionDist)) * 0.12; // Proportional opacity
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(13, 148, 136, ${alpha})`;
                    ctx.lineWidth = 0.85;
                    ctx.stroke();
                }
            }

            // Connect mouse to particles
            if (mouse.active && mouse.x !== null && mouse.y !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.hypot(dx, dy);

                if (dist < 150) {
                    const alpha = (1 - (dist / 150)) * 0.2; // Brighter line to mouse
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(13, 148, 136, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }
    animate();
});

// Setup interactive tester event listeners once
document.addEventListener('DOMContentLoaded', () => {
    if (!dropZone) return; // Guard in case script runs on a page without these elements

    // Click dropzone triggers file input
    dropZone.addEventListener('click', () => {
        modelImageInput.click();
    });

    // Drag-drop events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('hover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('hover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('hover');
        if (e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    });

    // File input change
    modelImageInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileSelect(e.target.files[0]);
        }
    });

    // Run inference click
    runInferenceBtn.addEventListener('click', () => {
        runModelInference();
    });

    // Clear click
    clearTesterBtn.addEventListener('click', () => {
        resetTesterUI();
    });

    // Diabetes form inputs change/input event listeners
    const diabetesInputs = [diagGender, diagAge, diagHypertension, diagHeartDisease, diagBMI, diagHbA1c, diagGlucose];
    diabetesInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', runDiabetesInference);
            input.addEventListener('change', runDiabetesInference);
        }
    });
});

function handleFileSelect(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }
    selectedImageFile = file;

    const reader = new FileReader();
    reader.onload = (e) => {
        testerPreview.src = e.target.result;
        dropZone.style.display = 'none';
        testerPreviewContainer.style.display = 'flex';
        testerStatus.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

function resetTesterUI() {
    selectedImageFile = null;
    modelImageInput.value = '';
    testerPreview.src = '#';
    dropZone.style.display = 'block';
    testerPreviewContainer.style.display = 'none';
    testerStatus.style.display = 'none';
    testerSpinner.style.display = 'none';
    testerResults.style.display = 'none';
}

function initFireDetectorDemo() {
    // Pre-emptively warm up/load model when Project 3 is opened
    if (!loadedModelSession) {
        console.log("Pre-emptively loading ONNX model in background...");
        ort.InferenceSession.create('assets/models/forest_fire_model.onnx')
            .then(session => {
                loadedModelSession = session;
                console.log("ONNX Model loaded successfully and cached.");
            })
            .catch(err => {
                console.warn("Pre-emptive model loading failed (will try again on click):", err);
            });
    }
}

async function runModelInference() {
    if (!selectedImageFile) return;

    // Show loading spinner
    testerStatus.style.display = 'block';
    testerSpinner.style.display = 'block';
    testerResults.style.display = 'none';
    runInferenceBtn.disabled = true;

    try {
        // 1. Load ONNX model if not loaded yet
        if (!loadedModelSession) {
            testerSpinner.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Loading AI Model (this might take a few seconds)...';
            loadedModelSession = await ort.InferenceSession.create('assets/models/forest_fire_model.onnx');
        }

        testerSpinner.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Preprocessing image & running inference...';

        // 2. Preprocess the image
        const img = new Image();
        img.src = testerPreview.src;
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });

        // Resize image to 224x224 using a canvas
        const canvas = document.createElement('canvas');
        canvas.width = 224;
        canvas.height = 224;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 224, 224);

        const imgData = ctx.getImageData(0, 0, 224, 224).data;

        // Normalize channels using ImageNet mean & std
        const mean = [0.485, 0.456, 0.406];
        const std = [0.229, 0.224, 0.225];
        const floatData = new Float32Array(3 * 224 * 224);

        for (let i = 0; i < 224 * 224; i++) {
            const r = imgData[i * 4] / 255.0;
            const g = imgData[i * 4 + 1] / 255.0;
            const b = imgData[i * 4 + 2] / 255.0;

            // Pack planar format (C, H, W)
            floatData[i] = (r - mean[0]) / std[0]; // R channel
            floatData[224 * 224 + i] = (g - mean[1]) / std[1]; // G channel
            floatData[2 * 224 * 224 + i] = (b - mean[2]) / std[2]; // B channel
        }

        // Create ONNX Tensor
        const inputTensor = new ort.Tensor('float32', floatData, [1, 3, 224, 224]);

        // 3. Run Inference
        const feeds = { [loadedModelSession.inputNames[0]]: inputTensor };
        const outputMap = await loadedModelSession.run(feeds);
        const output = outputMap[loadedModelSession.outputNames[0]].data; // Logits shape: [1, 2]

        // Logits for classes [FIRE, Non-Fire]
        const logitFire = output[0];
        const logitSafe = output[1];

        // Softmax
        const expFire = Math.exp(logitFire);
        const expSafe = Math.exp(logitSafe);
        const sumExp = expFire + expSafe;

        const probFire = expFire / sumExp;
        const probSafe = expSafe / sumExp;

        const firePctVal = (probFire * 100).toFixed(1);
        const safePctVal = (probSafe * 100).toFixed(1);

        // Update UI
        firePercentage.textContent = `${firePctVal}%`;
        fireFill.style.width = `${firePctVal}%`;
        safePercentage.textContent = `${safePctVal}%`;
        safeFill.style.width = `${safePctVal}%`;

        // Check winner
        if (probFire > probSafe) {
            resultAlert.className = 'result-alert danger';
            resultIcon.className = 'fas fa-exclamation-triangle';
            resultLabel.textContent = 'WARNING: ACTIVE FIRE DETECTED';
        } else {
            resultAlert.className = 'result-alert success';
            resultIcon.className = 'fas fa-check-circle';
            resultLabel.textContent = 'SAFE: NO ACTIVE FIRE DETECTED';
        }

        testerSpinner.style.display = 'none';
        testerResults.style.display = 'flex';

    } catch (err) {
        console.error(err);
        testerSpinner.innerHTML = `<i class="fas fa-exclamation-circle" style="color: #ef4444;"></i> Error running model: ${err.message}. Make sure forest_fire_model.onnx exists in assets/models/`;
    } finally {
        runInferenceBtn.disabled = false;
    }
}

function resetDiabetesUI() {
    diagGender.value = "Female";
    diagAge.value = "45";
    diagHypertension.value = "0";
    diagHeartDisease.value = "0";
    diagBMI.value = "25.0";
    diagHbA1c.value = "5.5";
    diagGlucose.value = "120";
    
    diagRiskPercentage.textContent = "0.0%";
    diagRiskFill.style.width = "0%";
    diagAlert.className = "result-alert success";
    diagIcon.className = "fas fa-check-circle";
    diagLabel.textContent = "LOW RISK: NON-DIABETIC";
}

function runDiabetesInference() {
    // 1. Gather input values
    const gender = diagGender.value;
    const age = parseFloat(diagAge.value) || 0;
    const hypertension = parseInt(diagHypertension.value) || 0;
    const heartDisease = parseInt(diagHeartDisease.value) || 0;
    const bmi = parseFloat(diagBMI.value) || 0;
    const hba1c = parseFloat(diagHbA1c.value) || 0;
    const glucose = parseFloat(diagGlucose.value) || 0;

    // 2. Map gender to numeric
    const genderVal = gender === 'Male' ? 1 : 0;

    // 3. Define scaler mean, standard deviation, model weights (coefficients) and intercept
    const inputs = [genderVal, age, hypertension, heartDisease, bmi, hba1c, glucose];
    const means = [0.421, 41.991556, 0.0753, 0.0374, 27.331413, 5.52065, 137.8521];
    const stds = [0.4937196, 22.539237, 0.2638748, 0.1897399, 6.649691, 1.082064, 41.226431];
    const coefs = [0.06110846, 0.88875102, 0.28331844, 0.1428996, 0.5618597, 2.72445189, 1.44188058];
    const intercept = -5.32303355;

    // 4. Calculate standardization and logit score
    let sum = intercept;
    for (let i = 0; i < inputs.length; i++) {
        const scaled = (inputs[i] - means[i]) / stds[i];
        sum += scaled * coefs[i];
    }

    // 5. Calculate sigmoid probability
    const probability = 1 / (1 + Math.exp(-sum));
    const riskPctVal = (probability * 100).toFixed(1);

    // 6. Update UI
    diagRiskPercentage.textContent = `${riskPctVal}%`;
    diagRiskFill.style.width = `${riskPctVal}%`;

    // 7. Display classification feedback
    if (probability >= 0.5) {
        diagAlert.className = 'result-alert danger';
        diagIcon.className = 'fas fa-exclamation-triangle';
        diagLabel.textContent = 'HIGH RISK: DIABETIC DETECTED';
    } else {
        diagAlert.className = 'result-alert success';
        diagIcon.className = 'fas fa-check-circle';
        diagLabel.textContent = 'LOW RISK: NON-DIABETIC';
    }
}

