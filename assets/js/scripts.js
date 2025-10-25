
const portfolioData = [
    {
        id: 1,
        title: 'Git',
        image: 'assets/img/portfolio/git.png',
        modalImage: 'assets/img/portfolio/CapGit.png',
        description: "I have nine months of experience using Git as a version control system. During this time, I have learned to efficiently manage this tool from the Linux Mint terminal and the Visual Studio Code terminal. My knowledge includes using Git for branch management, commit and merge management, as well as code conflict resolution. At MTech, I have worked with collaborative development flows, ensuring good practices in source code management and change integration."
    },
    {
        id: 2,
        title: 'GitHub',
        image: 'assets/img/portfolio/Github.png',
        modalImage: 'assets/img/portfolio/CapGitHub.png',
        description: "I've been creating and managing repositories on GitHub for eight months, where I store personal and collaborative projects. In my experience with this platform, I've learned how to properly structure repositories, work with forks and pull requests, and use GitHub Actions for workflow automation. At MTech, GitHub has been one of my key tools for versioning and collaboration on internal and external projects."
    },
    {
        id: 3,
        title: 'GitLab',
        image: 'assets/img/portfolio/gitlab.png',
        modalImage: 'assets/img/portfolio/CapGitLab.png',
        description: "For the past nine months, I have been working with GitLab on open source repository management. During this time, I have contributed solutions to more than seven problems in projects for various companies, including a US insurance company, the official website of MTech and an NGO in Africa, among others. My experience in GitLab not only includes managing repositories and code contributions, but also configuring continuous integration and deployment (CI/CD) pipelines, ensuring efficient and automated software delivery."
    },
    {
        id: 4,
        title: 'Drupal',
        image: 'assets/img/portfolio/drupal.png',
        modalImage: 'assets/img/portfolio/CapDrupal.png',
        description: "I have been working with Drupal for nine months, playing a key role in the development and maintenance of projects based on this CMS. As part of my learning and experience, I created a personal blog where users can add and manage movies. In my day-to-day at MTech, Drupal is one of my main tools, and my work is complemented by Docker, Composer, Drush and Git, which allows me to optimize development, dependency management and efficient deployment of projects on this platform."
    },
    {
        id: 5,
        title: 'PHP',
        image: 'assets/img/portfolio/php.png',
        modalImage: 'assets/img/portfolio/CapPHP.png',
        description: "Drupal is based on PHP, so I have developed skills in this programming language to customize and troubleshoot within the platform. Although I am not an absolute expert, I strive to write clean and efficient code when tackling problems in GitLab and Drupal within MTech. I take the time to analyze and design effective solutions, ensuring they are scalable and maintainable."
    },
    {
        id: 6,
        title: 'LinuxMint',
        image: 'assets/img/portfolio/linuxmint.jpeg',
        modalImage: 'assets/img/portfolio/CapLinuxMint.png',
        description: "I have been using Linux Mint for about a year, even before starting MTech, becoming my main operating system. During this time, I have learned to use it professionally, optimizing workflows in software development and maintenance. I have applied my knowledge in academic and work environments, installing advanced software and configuring systems to maximize performance and compatibility with development tools."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    renderPortfolio();
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
});

function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = portfolioData.map(project => `
        <div class="portfolio-card" onclick="openModal(${project.id})">
            <div class="portfolio-image">
                <img src="${project.image}" 
                        alt="${project.title}"
                        onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=400&background=1ab377&color=fff&bold=true'">
                <div class="portfolio-overlay">
                    <div style="text-align: center;">
                        <svg style="width: 3rem; height: 3rem; margin: 0 auto 0.5rem; stroke: hsl(var(--primary));" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        <p>View Details</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <h3 class="portfolio-title">${project.title}</h3>
                <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">Click to learn more</p>
            </div>
        </div>
    `).join('');
}

function openModal(projectId) {
    const project = portfolioData.find(p => p.id === projectId);
    if (!project) return;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').src = project.modalImage;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('modalImage').onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=800&background=1ab377&color=fff&bold=true`;
    };
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('portfolioModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('portfolioModal').classList.remove('active');
    document.body.style.overflow = '';
}

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

function handleFormSubmit(event) {
    event.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('contactForm');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    setTimeout(() => {
        successMessage.classList.add('show');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }, 1000);
}
