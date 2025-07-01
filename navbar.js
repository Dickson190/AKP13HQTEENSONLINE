// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Inject CSS dynamically
    const style = document.createElement("style");
    style.textContent = `
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #1e1e1e;
            padding: 10px 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            position: fixed;
            width: 100vw;
            box-sizing: border-box;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        .navbar .logo {
            color: white;
            font-size: 1.5em;
            font-weight: bold;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            max-width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .navbar .logo img {
            width: 35px;
            margin-right: 10px;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 20px;
            margin: 0;
            padding: 0;
        }

        .nav-links li {
            display: flex;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: white;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: #ff758c;
        }

        .nav-links i {
            margin-right: 8px;
            font-size: 1.2em;
        }

        .menu-toggle {
            display: none;
            font-size: 1.8em;
            color: white;
            cursor: pointer;
            margin-left: auto;
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 60px;
                left: 0;
                width: 100%;
                background: #1e1e1e;
                padding: 15px 0;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            }

            .nav-links.active {
                display: flex;
            }

            .nav-links li {
                padding: 10px 0;
                text-align: center;
            }

            .menu-toggle {
                display: block;
            }
        }
    `;
    document.head.appendChild(style);

    // Create navbar HTML
    const navbar = document.createElement("nav");
    navbar.className = "navbar";
    navbar.innerHTML = `
        <div class="logo">
            <img src="icon.png" alt="Logo"> AKP13 HQ
        </div>
        <ul class="nav-links">
            <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="form.html"><i class="fas fa-newspaper"></i> News</a></li>
            <li><a href="teens.html"><i class="fas fa-users"></i> Teens Executives</a></li>
            <li><a href="support.html"><i class="fas fa-hands-helping"></i> Support Us</a></li>
            <li><a href="contact.html"><i class="fas fa-envelope"></i> Contact Us</a></li>
            <li><a href="about.html"><i class="fas fa-info-circle"></i> About Us</a></li>
        </ul>
        <div class="menu-toggle">
            <i class="fas fa-bars"></i>
        </div>
    `;

    // Insert navbar at top of body
    document.body.prepend(navbar);

    // Toggle mobile menu
    const menuToggle = navbar.querySelector(".menu-toggle");
    const navLinks = navbar.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
