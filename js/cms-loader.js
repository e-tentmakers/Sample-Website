// CMS Content Loader
// This script loads content from JSON files created by Decap CMS

// Load homepage content
async function loadHomepageContent() {
    try {
        const response = await fetch('content/homepage/homepage.json');
        const data = await response.json();
        
        // Update hero background image
        const heroImg = document.querySelector('.hero-background img');
        if (heroImg && data.heroBackgroundImage) {
            heroImg.src = data.heroBackgroundImage;
        }
        
        // Update vision section
        const visionImg = document.querySelector('.vision-image img');
        if (visionImg && data.visionImage) {
            visionImg.src = data.visionImage;
        }
        
        const visionTitle = document.querySelector('.vision-text h2');
        if (visionTitle && data.visionTitle) {
            visionTitle.textContent = data.visionTitle;
        }
        
        const visionMain = document.querySelector('.vision-main');
        if (visionMain && data.visionMain) {
            visionMain.textContent = data.visionMain;
        }
        
        const visionVerse = document.querySelector('.vision-verse');
        if (visionVerse && data.visionVerse) {
            visionVerse.textContent = data.visionVerse;
        }
        
        const visionReference = document.querySelector('.vision-reference');
        if (visionReference && data.visionReference) {
            visionReference.textContent = data.visionReference;
        }
        
        // Update YouTube section
        const youtubeText = document.querySelector('.video-placeholder p');
        if (youtubeText && data.youtubeText) {
            youtubeText.textContent = data.youtubeText;
        }
        
        const youtubeLink = document.querySelector('.youtube-link');
        if (youtubeLink && data.youtubeLink) {
            youtubeLink.href = data.youtubeLink;
        }
    } catch (error) {
        console.log('Homepage content not found or error loading:', error);
    }
}

// Load worship schedule
async function loadWorshipSchedule() {
    try {
        const scheduleFiles = [
            'content/worship-schedule/sunday-1.json',
            'content/worship-schedule/sunday-2.json',
            'content/worship-schedule/toddler.json',
            'content/worship-schedule/elementary.json',
            'content/worship-schedule/youth.json',
            'content/worship-schedule/college.json',
            'content/worship-schedule/wednesday.json'
        ];
        
        const scheduleList = document.querySelector('.schedule-list');
        if (!scheduleList) return;
        
        // Clear existing schedule items (except the first one which is the template)
        const existingItems = scheduleList.querySelectorAll('.schedule-item:not(.schedule-template)');
        existingItems.forEach(item => item.remove());
        
        // Load each schedule item
        for (const file of scheduleFiles) {
            try {
                const response = await fetch(file);
                const data = await response.json();
                
                const scheduleItem = document.createElement('div');
                scheduleItem.className = 'schedule-item';
                scheduleItem.innerHTML = `
                    <span class="service-name">${data.serviceName}</span>
                    <span class="service-time">${data.time}</span>
                    <span class="service-venue">${data.venue}</span>
                `;
                scheduleList.appendChild(scheduleItem);
            } catch (error) {
                console.log(`Error loading ${file}:`, error);
            }
        }
    } catch (error) {
        console.log('Worship schedule not found or error loading:', error);
    }
}

// Load notices
async function loadNotices() {
    try {
        const noticeFiles = [
            'content/notices/notice-1.json',
            'content/notices/notice-2.json',
            'content/notices/notice-3.json'
        ];
        
        const noticeList = document.querySelector('.notice-list');
        if (!noticeList) return;
        
        // Clear existing notices
        noticeList.innerHTML = '';
        
        // Load each notice
        for (const file of noticeFiles) {
            try {
                const response = await fetch(file);
                const data = await response.json();
                
                const noticeItem = document.createElement('a');
                noticeItem.className = 'notice-item';
                noticeItem.href = data.link;
                noticeItem.innerHTML = `
                    <span class="notice-date">${data.date}</span>
                    <span class="notice-title">${data.title}</span>
                `;
                noticeList.appendChild(noticeItem);
            } catch (error) {
                console.log(`Error loading ${file}:`, error);
            }
        }
    } catch (error) {
        console.log('Notices not found or error loading:', error);
    }
}

// Load footer content
async function loadFooterContent() {
    try {
        const response = await fetch('content/footer/footer.json');
        const data = await response.json();
        
        // Update contact info
        const footerSections = document.querySelectorAll('.footer-section');
        if (footerSections.length >= 1 && data.address) {
            footerSections[0].innerHTML = `
                <h3>연락처</h3>
                <p>${data.address}</p>
                <p>${data.phone}</p>
                <p>${data.email}</p>
            `;
        }
        
        // Update donations
        if (footerSections.length >= 2 && data.donations) {
            let donationsHTML = '<h3>샘플교회 온라인헌금</h3>';
            data.donations.forEach(donation => {
                donationsHTML += `<p>${donation.type}: ${donation.account}</p>`;
            });
            footerSections[1].innerHTML = donationsHTML;
        }
    } catch (error) {
        console.log('Footer content not found or error loading:', error);
    }
}

// Initialize content loading when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Only load if we're on the homepage
    if (document.querySelector('.hero-section')) {
        loadHomepageContent();
        loadWorshipSchedule();
        loadNotices();
        loadFooterContent();
    }
});
