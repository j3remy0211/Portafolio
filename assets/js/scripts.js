/* ============================================
    TECH STACK DATA — SVG Icons Inline
============================================ */
const techStackData = [
    {
        id: 1,
        title: 'Git',
        color: '#F05032',
        icon: './assets/img/SVG/git.svg',
        modalImage: 'assets/img/portfolio/CapGit.png',
        description: "I have nine months of experience using Git as a version control system. During this time, I have learned to efficiently manage this tool from the Linux Mint terminal and the Visual Studio Code terminal. My knowledge includes using Git for branch management, commit and merge management, as well as code conflict resolution. At MTech, I have worked with collaborative development flows, ensuring good practices in source code management and change integration."
    },
    {
        id: 2,
        title: 'GitHub',
        color: '#f0f0f0',
        icon: './assets/img/SVG/github.svg',
        modalImage: 'assets/img/portfolio/CapGitHub.png',
        description: "I've been creating and managing repositories on GitHub for eight months, where I store personal and collaborative projects. In my experience with this platform, I've learned how to properly structure repositories, work with forks and pull requests, and use GitHub Actions for workflow automation. At MTech, GitHub has been one of my key tools for versioning and collaboration on internal and external projects."
    },
    {
        id: 3,
        title: 'GitLab',
        color: '#FC6D26',
        icon: './assets/img/SVG/gitlab.svg',
        modalImage: 'assets/img/portfolio/CapGitLab.png',
        description: "For the past nine months, I have been working with GitLab on open source repository management. During this time, I have contributed solutions to more than seven problems in projects for various companies, including a US insurance company, the official website of MTech and an NGO in Africa, among others. My experience in GitLab not only includes managing repositories and code contributions, but also configuring continuous integration and deployment (CI/CD) pipelines, ensuring efficient and automated software delivery."
    },
    {
        id: 4,
        title: 'Drupal',
        color: '#0678BE',
        icon: './assets/img/SVG/drupal.svg',
        modalImage: 'assets/img/portfolio/CapDrupal.png',
        description: "I have been working with Drupal for nine months, playing a key role in the development and maintenance of projects based on this CMS. As part of my learning and experience, I created a personal blog where users can add and manage movies. In my day-to-day at MTech, Drupal is one of my main tools, and my work is complemented by Docker, Composer, Drush and Git, which allows me to optimize development, dependency management and efficient deployment of projects on this platform."
    },
    {
        id: 5,
        title: 'PHP',
        color: '#777BB4',
        icon: './assets/img/SVG/php.svg',
        modalImage: 'assets/img/portfolio/CapPHP.png',
        description: "Drupal is based on PHP, so I have developed skills in this programming language to customize and troubleshoot within the platform. Although I am not an absolute expert, I strive to write clean and efficient code when tackling problems in GitLab and Drupal within MTech. I take the time to analyze and design effective solutions, ensuring they are scalable and maintainable."
    },
    {
        id: 6,
        title: 'Linux',
        color: '#FCC624',
        icon: './assets/img/SVG/linux.svg',
        modalImage: 'assets/img/portfolio/CapLinuxMint.png',
        description: "I have been using Linux for about a year, even before starting MTech, becoming my main operating system. During this time, I have learned to use it professionally, optimizing workflows in software development and maintenance. I have applied my knowledge in academic and work environments, installing advanced software and configuring systems to maximize performance and compatibility with development tools."
    },
    {
        id: 7,
        title: 'HTML5',
        color: '#E34F26',
        icon: './assets/img/SVG/html.svg',
        modalImage: '',
        description: "Description coming soon. Please add your real description here."
    },
    {
        id: 8,
        title: 'CSS3',
        color: '#1572B6',
        icon: './assets/img/SVG/css.svg',
        modalImage: '',
        description: "Description coming soon. Please add your real description here."
    },
    {
        id: 9,
        title: 'JavaScript',
        color: '#F7DF1E',
        icon: './assets/img/SVG/javascript.svg',
        modalImage: '',
        description: "Description coming soon. Please add your real description here."
    },
    {
        id: 10,
        title: 'VS Code',
        color: '#007ACC',
        icon: './assets/img/SVG/visual-studio-code.svg',
        modalImage: '',
        description: "Description coming soon. Please add your real description here."
    },
    {
        id: 11,
        title: 'Python',
        color: '#3776AB',
        icon: './assets/img/SVG/python.svg',
        modalImage: '',
        description: "Description coming soon. Please add your real description here."
    },
    {
        id: 12,
        title: 'C/C++',
        color: '#00599C',
        icon: './assets/img/SVG/c-cpp.png',
        modalImage: '',
        description: "Description coming soon. Please add your real description here."
    },
    {
        id: 13,
        title: 'Antigravity',
        color: '#9C27B0',
        icon: './assets/img/SVG/antigravity.png',
        modalImage: '',
        description: "Description coming soon. Please add your real description here."
    }
];

/* ============================================
    PORTFOLIO DATA (empty — ready for real projects)
    Add your real projects here using this format:
    {
        id: 100,
        title: 'Project Name',
        image: 'assets/img/portfolio/project-thumb.png',
        modalImage: 'assets/img/portfolio/project-full.png',
        description: "Description of the project..."
    }
============================================ */
const portfolioData = [];

/* ============================================
    ROLES FOR TYPING EFFECT
============================================ */
const roles = [
    'Electronic Cybernetics Engineer',
    'Drupal Web Developer',
    'Linux Operating System User',
    'Static Website and Landing Page Developer'
];

/* ============================================
    INITIALIZATION
============================================ */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    renderSkills();
    renderPortfolio();
    initTypingEffect();
    initScrollReveal();
    initActiveNavTracking();
    initScrollTopButton();

    // Navbar scroll handler
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    // Escape to close modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });
});

/* ============================================
    SKILLS / TECH STACK RENDER (compact cards with SVG icons)
============================================ */
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = techStackData.map((project, index) => `
        <div class="skill-card reveal reveal-delay-${Math.min(index % 3, 3)}" onclick="openModal(${project.id})">
            <div class="skill-image">
                <div class="skill-svg-wrapper">
                    ${project.svg ? project.svg : `<img src="${project.icon || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(project.title) + '&background=3a8a6e&color=fff'}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: contain;">`}
                </div>
                <div class="skill-overlay">
                    <div class="skill-overlay-content">
                        <div class="skill-overlay-icon">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                        </div>
                        <p style="font-size: 0.75rem; font-weight: 500; color: hsl(60, 10%, 93%);">View Details</p>
                    </div>
                </div>
            </div>
            <div class="skill-info">
                <h3 class="skill-name">${project.title}</h3>
                <p class="skill-subtitle">Click to learn more</p>
            </div>
        </div>
    `).join('');
}

/* ============================================
    PORTFOLIO RENDER (empty state or real projects)
============================================ */
function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');

    if (portfolioData.length === 0) {
        grid.innerHTML = `
            <div class="portfolio-empty">
                <div class="portfolio-empty-icon">
                    <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                </div>
                <h3 class="portfolio-empty-title">Coming Soon</h3>
                <p class="portfolio-empty-text">Real projects will be showcased here. Stay tuned!</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = portfolioData.map((project, index) => `
        <div class="portfolio-card reveal reveal-delay-${Math.min(index % 3, 3)}" onclick="openModal(${project.id})">
            <div class="portfolio-image">
                <img src="${project.image}"
                     alt="${project.title}"
                     loading="lazy"
                     onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=400&background=3a8a6e&color=fff&bold=true'">
                <div class="portfolio-overlay">
                    <div class="portfolio-overlay-content">
                        <div class="portfolio-overlay-icon">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                        </div>
                        <p style="font-size: 0.85rem; font-weight: 500; color: hsl(60, 10%, 93%);">View Details</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-subtitle">Click to learn more</p>
            </div>
        </div>
    `).join('');
}

/* ============================================
    TYPING EFFECT
============================================ */
function initTypingEffect() {
    const el = document.getElementById('typingText');
    if (!el) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            el.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            el.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400; // Pause before next word
        }

        setTimeout(type, typeSpeed);
    }

    // Start after a brief delay
    setTimeout(type, 800);
}

/* ============================================
    SCROLL REVEAL (Intersection Observer)
============================================ */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

/* ============================================
    ACTIVE NAV TRACKING
============================================ */
function initActiveNavTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

/* ============================================
    SCROLL TOP BUTTON
============================================ */
function initScrollTopButton() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================
    MODAL (works for both tech stack and portfolio)
============================================ */
function openModal(projectId) {
    // Search in both data sources
    const project = techStackData.find(p => p.id === projectId) ||
                    portfolioData.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    const img = document.getElementById('modalImage');
    img.src = project.modalImage;
    img.alt = project.title;
    img.onerror = function () {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=800&background=3a8a6e&color=fff&bold=true`;
    };
    document.getElementById('modalDescription').textContent = project.description;

    document.getElementById('portfolioModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================
    NAVIGATION
============================================ */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    menu.classList.toggle('open');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

/* ============================================
    CONTACT FORM
============================================ */
function handleFormSubmit(event) {
    event.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('contactForm');

    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending...';

    setTimeout(() => {
        successMessage.classList.add('show');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Message';

        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }, 1000);
}
