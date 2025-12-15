document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // إغلاق القائمة عند الضغط على رابط
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    // 2. 3D Background Parallax (حركة الشماغ)
    const bg = document.getElementById('bg-effect');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        // حركة عكسية لإعطاء عمق
        bg.style.transform = `translate(-${x * 25}px, -${y * 25}px)`;
    });

    // 3. Founder Modal (النافذة المنبثقة للمؤسس)
    const modal = document.getElementById('founder-modal');
    const trigger = document.getElementById('founder-trigger');
    const closeBtn = document.querySelector('.close-modal');

    trigger.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // منع السكرول للصفحة الخلفية
    });

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    // 4. Accordion Logic (الأسئلة الشائعة)
    const accHeaders = document.querySelectorAll('.accordion-header');
    
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            
            // إغلاق العناصر الأخرى (اختياري)
            document.querySelectorAll('.accordion-body').forEach(b => {
                if(b !== body) b.style.display = 'none';
            });

            if (body.style.display === 'block') {
                body.style.display = 'none';
            } else {
                body.style.display = 'block';
            }
        });
    });

    // 5. Navbar Glass Effect on Scroll
    window.addEventListener('scroll', () => {
        const navBar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navBar.style.background = 'rgba(17, 17, 17, 0.95)';
            navBar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navBar.style.background = 'rgba(255, 255, 255, 0.05)';
            navBar.style.boxShadow = 'none';
        }
    });
});