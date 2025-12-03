// --- DEFAULT DATA ---
const defaultSchools = [
    {
        "name": "University of Michigan",
        "rank": "#10",
        "domain": "umich.edu",
        "status": "Pending",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/1200px-Seal_of_the_University_of_Michigan.svg.png",
        "image": "https://www.lib.umich.edu/static/f7ffa2d7bc8b7d2c2e56eaf08f237c8b/057ba/AerialsNov08(186)Stock-a.jpg",
        "stats": {
            "tuition": "$71,000",
            "scholarship": "$25,000",
            "col": "$22,000",
            "earnings": "$190,000"
        }
    },
    {
        "name": "Washington University in St. Louis",
        "rank": "#14",
        "domain": "wustl.edu",
        "status": "Pending",
        "logo": "https://cdn.lawyerlegion.com/images/schools/MO_WashULaw.png",
        "image": "https://washu.edu/app/uploads/2024/07/TPDA-7849_0207.jpg",
        "stats": {
            "tuition": "$67,500",
            "scholarship": "$30,000",
            "col": "$18,000",
            "earnings": "$180,000"
        }
    },
    {
        "name": "University of North Carolina",
        "rank": "#18",
        "domain": "unc.edu",
        "status": "Pending",
        "image": "https://cdn.prod.website-files.com/6617098ab3803c82c98b234e/6648af93c13701ae4ecc11a1_b576c4_8968c8be4dbb49699f050e92b04cf0b8~mv2.jpg.webp",
        "stats": {
            "tuition": "$44,000",
            "scholarship": "$15,000",
            "col": "$19,000",
            "earnings": "$160,000"
        },
        "logo": "https://cdn.lawyerlegion.com/images/schools/NC_UNC.png"
    },
    {
        "name": "University of Minnesota",
        "rank": "#20",
        "domain": "umn.edu",
        "status": "Pending",
        "image": "https://twin-cities.umn.edu/sites/twin-cities.umn.edu/files/umn-lawn.jpg",
        "stats": {
            "tuition": "$56,000",
            "scholarship": "$25,000",
            "col": "$17,000",
            "earnings": "$155,000"
        },
        "logo": "https://yt3.googleusercontent.com/ytc/AIdro_mWfXsYyBJHpd8IOQpwWqNlatO8E3gtgQYaQKbHkxIVCA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        "name": "Boston University",
        "rank": "#22",
        "domain": "bu.edu",
        "status": "Pending",
        "image": "https://www.bu.edu/questrom/wp-content/uploads/sites/2/2024/04/BOSTON-UNIVERSITY-CAMPUS-ALONG-CHARLES-RIVER-0983-resize-1400x788-1.jpg",
        "stats": {
            "tuition": "$63,000",
            "scholarship": "$20,000",
            "col": "$24,000",
            "earnings": "$190,000"
        },
        "logo": "https://upload.wikimedia.org/wikipedia/commons/2/26/BU_Law_Logo.png"
    },
    {
        "name": "Boston College",
        "rank": "#25",
        "domain": "bc.edu",
        "status": "Pending",
        "image": "https://oleg-schapov-studio.myshopify.com/cdn/shop/files/DJI_0482.jpg?v=1698250754&width=2400",
        "stats": {
            "tuition": "$64,000",
            "scholarship": "$18,000",
            "col": "$24,000",
            "earnings": "$190,000"
        },
        "logo": ""
    },
    {
        "name": "Wake Forest University",
        "rank": "#26",
        "domain": "wfu.edu",
        "status": "Pending",
        "image": "https://npr.brightspotcdn.com/legacy/sites/wunc/files/201703/1.jpg",
        "stats": {
            "tuition": "$52,000",
            "scholarship": "$22,000",
            "col": "$16,000",
            "earnings": "$150,000"
        },
        "logo": ""
    },
    {
        "name": "George Washington University",
        "rank": "#31",
        "domain": "gwu.edu",
        "status": "Pending",
        "image": "https://adawdc.org/file/690/570x350/higl_.png",
        "stats": {
            "tuition": "$68,000",
            "scholarship": "$15,000",
            "col": "$26,000",
            "earnings": "$180,000"
        },
        "logo": ""
    },
    {
        "name": "George Mason University",
        "rank": "#31",
        "domain": "gmu.edu",
        "status": "Pending",
        "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/pwmva/Woodbridge_Campus1_82acaa59-affb-4e7a-b256-eafe099f4168.jpg",
        "stats": {
            "tuition": "$42,000",
            "scholarship": "$10,000",
            "col": "$26,000",
            "earnings": "$140,000"
        },
        "logo": ""
    },
    {
        "name": "Washington & Lee University",
        "rank": "#36",
        "domain": "wlu.edu",
        "status": "Accepted",
        "image": "https://www.wlu.edu/Admissions/video-information-session.png",
        "stats": {
            "tuition": "$54,000",
            "scholarship": "$28,000",
            "col": "$14,000",
            "earnings": "$165,000"
        },
        "logo": ""
    },
    {
        "name": "University of Illinois",
        "rank": "#48",
        "domain": "illinois.edu",
        "status": "Accepted",
        "image": "https://ncsa.illinois.edu/wp-content/uploads/2025/10/UIUC-drone-shot.jpg",
        "stats": {
            "tuition": "$48,000",
            "scholarship": "$15,000",
            "col": "$15,000",
            "earnings": "$145,000"
        },
        "logo": ""
    },
    {
        "name": "Villanova University",
        "rank": "#48",
        "domain": "villanova.edu",
        "status": "Accepted",
        "image": "https://www1.villanova.edu/university/professional-studies/villanova-cps-experience/advising/academic_support_professional_education/campus_services_pe/_jcr_content/root/container/container/container_1731001697/container/image.coreimg.jpeg/1574356842499/campus-final.jpeg",
        "stats": {
            "tuition": "$53,000",
            "scholarship": "$22,000",
            "col": "$18,000",
            "earnings": "$130,000"
        },
        "logo": ""
    },
    {
        "name": "Marquette University",
        "rank": "#59",
        "domain": "marquette.edu",
        "status": "Pending",
        "image": "https://www.marquette.edu/visit/images/aerial-of-campus.webp",
        "stats": {
            "tuition": "$51,000",
            "scholarship": "$25,000",
            "col": "$16,000",
            "earnings": "$90,000"
        },
        "logo": "https://law.marquette.edu/facultyblog/wp-content/uploads/2008/07/law-logo-web.gif"
    },
    {
        "name": "Loyola University Chicago",
        "rank": "#79",
        "domain": "luc.edu",
        "status": "Pending",
        "image": "https://pxl-lucedu.terminalfour.net/prod01/cdn/media/universitymediaassets-vetted/1000X560-standard/lakeshorecampus/lake-shore-campus-aerial-northward-1000X560.jpg",
        "stats": {
            "tuition": "$52,000",
            "scholarship": "$20,000",
            "col": "$20,000",
            "earnings": "$95,000"
        },
        "logo": ""
    },
    {
        "name": "Michigan State University",
        "rank": "#115",
        "domain": "msu.edu",
        "status": "Accepted",
        "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_372,q_65,w_640/v1/clients/lansing/MSU_brady_mcdonough_Instagram_2736_ig_18068692432395619_7a17ba53-79a8-4030-adcd-7922c61d4922.jpg",
        "stats": {
            "tuition": "$46,000",
            "scholarship": "$18,000",
            "col": "$14,000",
            "earnings": "$95,000"
        },
        "logo": ""
    }
];

const defaultScholarships = [
    { abbr: "W&L", saved: "-$43,000 SAVED", pay: "$13,000", total: "$56,000", percent: 23.2 },
    { abbr: "MSU", saved: "-$41,000 SAVED", pay: "$0", total: "$41,000", percent: 0 },
    { abbr: "VILLANOVA", saved: "-$30,000 SAVED", pay: "$26,000", total: "$56,000", percent: 46.4 }
];

let schools = [];
let scholarshipData = [];

// --- LOAD DATA ---
function loadData() {
    const savedSchools = localStorage.getItem('juris_schools');
    const savedScholarships = localStorage.getItem('juris_scholarships');

    if (savedSchools) {
        schools = JSON.parse(savedSchools);
    } else {
        schools = JSON.parse(JSON.stringify(defaultSchools));
        sortSchools();
    }

    if (savedScholarships) {
        scholarshipData = JSON.parse(savedScholarships);
    } else {
        scholarshipData = JSON.parse(JSON.stringify(defaultScholarships));
    }
}

// --- SAVE DATA ---
function saveData() {
    localStorage.setItem('juris_schools', JSON.stringify(schools));
    localStorage.setItem('juris_scholarships', JSON.stringify(scholarshipData));
}

// --- RESET DATA ---
function resetAllData() {
    if (confirm("Are you sure you want to reset everything to the original 15 schools?")) {
        localStorage.removeItem('juris_schools');
        localStorage.removeItem('juris_scholarships');
        location.reload();
    }
}

function sortSchools() {
    schools.sort((a, b) => {
        const rankA = parseInt(a.rank.replace(/[^0-9]/g, '')) || 999;
        const rankB = parseInt(b.rank.replace(/[^0-9]/g, '')) || 999;
        return rankA - rankB;
    });
}

function smoothScrollTo(e, targetId) {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;
    
    // Calculate position to account for fixed header + padding
    const headerOffset = 110; 
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// --- RENDER FUNCTIONS ---
function renderSchools() {
    const grid = document.getElementById('app-root');
    grid.innerHTML = '';

    schools.forEach((school, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        // Prioritize manual logo, then fallback to clearbit
        const logoUrl = school.logo ? school.logo : `https://logo.clearbit.com/${school.domain}`;

        let statusClass = 'pending';
        if (school.status === 'Accepted') statusClass = 'accepted';
        if (school.status === 'Other') statusClass = 'other';

        card.innerHTML = `
            <div class="card-hero">
                <img src="${school.image}" alt="${school.name}" class="card-image" onerror="this.src='https://placehold.co/600x400/333/666?text=Image'">
                <div class="hero-overlay"></div>
                <div class="rank-pill">${school.rank}</div>
                <button class="menu-btn" onclick="toggleMenu(event, ${index})"><i class="fas fa-ellipsis-v"></i></button>
                <div class="menu-dropdown" id="menu-${index}">
                    <div class="menu-label">Status</div>
                    <div class="menu-item" onclick="updateStatus(${index}, 'Accepted')"><i class="fas fa-check-circle" style="color:var(--success-green)"></i> Mark Accepted</div>
                    <div class="menu-item" onclick="updateStatus(${index}, 'Pending')"><i class="fas fa-clock" style="color:var(--pending-grey)"></i> Mark Pending</div>
                    <div class="menu-item" onclick="updateStatus(${index}, 'Other')"><i class="fas fa-times-circle" style="color:var(--danger-red)"></i> Mark Other</div>
                    <div class="menu-label">Actions</div>
                    <div class="menu-item" onclick="openEditModal(${index})"><i class="fas fa-edit"></i> Edit School</div>
                    <div class="menu-item delete" onclick="deleteSchool(${index})"><i class="fas fa-trash-alt"></i> Remove School</div>
                </div>
                <div class="hero-header">
                    <div class="logo-box"><img src="${logoUrl}" alt="Logo" class="logo-img" onerror="this.style.opacity=0.3"></div>
                    <div class="text-group">
                        <div class="school-title">${school.name}</div>
                        <div class="school-loc"><i class="fas fa-map-marker-alt"></i> Law School</div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="status-badge-container"><span class="status-pill ${statusClass}">${school.status}</span></div>
                <div class="stats-grid-new">
                    <div class="stat-box"><div class="sb-label"><i class="fas fa-money-bill-wave"></i> Tuition</div><div class="sb-value">${school.stats.tuition}</div></div>
                    <div class="stat-box"><div class="sb-label"><i class="fas fa-home"></i> Living</div><div class="sb-value">${school.stats.col}</div></div>
                    <div class="stat-box wide"><div class="sb-label"><i class="fas fa-briefcase"></i> Median Earnings</div><div class="sb-value">${school.stats.earnings}</div></div>
                </div>
                <a href="https://${school.domain}" target="_blank" class="visit-btn-pill">Visit Law School <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderStatusGraphic() {
    let accepted = 0, pending = 0, other = 0;
    schools.forEach(s => {
        if (s.status === 'Accepted') accepted++;
        else if (s.status === 'Other') other++;
        else pending++;
    });
    const total = schools.length;

    document.getElementById('status-counts-root').innerHTML = `
        <div class="status-col"><div class="status-circle accepted"><i class="fas fa-check"></i></div><div class="status-count" style="color:var(--success-green)">${accepted}</div><div class="status-label">Accepted</div></div>
        <div class="status-col"><div class="status-circle pending"><i class="fas fa-clock"></i></div><div class="status-count" style="color:var(--pending-grey)">${pending}</div><div class="status-label">Pending</div></div>
        <div class="status-col"><div class="status-circle other"><i class="fas fa-times"></i></div><div class="status-count" style="color:var(--danger-red)">${other}</div><div class="status-label">Other</div></div>
    `;

    const barRoot = document.getElementById('status-bar-root');
    if (total === 0) {
        barRoot.innerHTML = '<div style="width:100%; background:#eee;"></div>';
    } else {
        barRoot.innerHTML = `
            <div class="sb-segment sb-green" style="width:${(accepted/total)*100}%"></div>
            <div class="sb-segment sb-grey" style="width:${(pending/total)*100}%"></div>
            <div class="sb-segment sb-red" style="width:${(other/total)*100}%"></div>
        `;
    }
}

function renderScholarships() {
    const listRoot = document.getElementById('scholarship-list-root');
    listRoot.innerHTML = '';
    let totalSavedValue = 0;
    scholarshipData.forEach(item => {
        const savedNum = parseInt(item.saved.replace(/[^0-9]/g, '')) || 0;
        totalSavedValue += savedNum;
        const row = document.createElement('div');
        row.className = 'scholarship-item';
        row.innerHTML = `
            <div class="item-header"><span class="school-abbr">${item.abbr}</span><span class="saved-amount">${item.saved}</span></div>
            <div class="progress-bar-container"><div class="progress-bar" style="--target-width: ${item.percent}%;"></div></div>
            <div class="cost-labels"><span>Pay: ${item.pay}</span><span>Total: ${item.total}</span></div>
        `;
        listRoot.appendChild(row);
    });
    document.getElementById('total-value-display').innerText = '$' + totalSavedValue.toLocaleString();
}

// --- ACTIONS ---
function toggleMenu(e, index) {
    e.stopPropagation();
    document.querySelectorAll('.menu-dropdown').forEach(el => el.classList.remove('show'));
    const menu = document.getElementById(`menu-${index}`);
    if (menu) menu.classList.toggle('show');
}
document.addEventListener('click', () => { document.querySelectorAll('.menu-dropdown').forEach(el => el.classList.remove('show')); });

function updateStatus(index, newStatus) {
    schools[index].status = newStatus;
    saveData();
    renderSchools();
    renderStatusGraphic();
}

function deleteSchool(index) {
    if (confirm("Remove " + schools[index].name + "?")) {
        schools.splice(index, 1);
        saveData();
        renderSchools();
        renderStatusGraphic();
    }
}

// --- FILE DOWNLOAD ---
function downloadUpdatedHTML() {
    alert("Since you are using multiple files (GitHub Pages), your data is auto-saved to your browser. You don't need to download a file!");
}

// --- MODALS ---
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    modal.offsetHeight; 
    modal.classList.add('active');
    if (id === 'scholarshipModal') populateScholarshipDropdown();
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

function handleAddSchoolSubmit(e) {
    e.preventDefault();
    const newSchool = {
        name: document.getElementById('inpName').value,
        rank: document.getElementById('inpRank').value,
        domain: document.getElementById('inpDomain').value,
        status: "Pending",
        image: document.getElementById('inpImage').value || 'https://placehold.co/600x400/333/666?text=Image',
        logo: document.getElementById('inpLogo').value,
        stats: {
            tuition: document.getElementById('inpTuition').value,
            scholarship: document.getElementById('inpScholarship').value,
            col: document.getElementById('inpCol').value,
            earnings: document.getElementById('inpEarnings').value
        }
    };
    schools.push(newSchool);
    sortSchools();
    saveData();
    renderSchools();
    renderStatusGraphic();
    closeModal('addSchoolModal');
    e.target.reset();
}

// --- EDIT SCHOOL LOGIC ---
function openEditModal(index) {
    const school = schools[index];
    document.getElementById('editIndex').value = index;
    document.getElementById('editName').value = school.name;
    document.getElementById('editRank').value = school.rank;
    document.getElementById('editDomain').value = school.domain;
    document.getElementById('editImage').value = school.image;
    document.getElementById('editLogo').value = school.logo || "";
    document.getElementById('editTuition').value = school.stats.tuition;
    document.getElementById('editScholarship').value = school.stats.scholarship;
    document.getElementById('editCol').value = school.stats.col;
    document.getElementById('editEarnings').value = school.stats.earnings;
    openModal('editSchoolModal');
}

function handleEditSchoolSubmit(e) {
    e.preventDefault();
    const index = document.getElementById('editIndex').value;
    schools[index].name = document.getElementById('editName').value;
    schools[index].rank = document.getElementById('editRank').value;
    schools[index].domain = document.getElementById('editDomain').value;
    schools[index].image = document.getElementById('editImage').value;
    schools[index].logo = document.getElementById('editLogo').value;
    schools[index].stats.tuition = document.getElementById('editTuition').value;
    schools[index].stats.scholarship = document.getElementById('editScholarship').value;
    schools[index].stats.col = document.getElementById('editCol').value;
    schools[index].stats.earnings = document.getElementById('editEarnings').value;
    
    sortSchools();
    saveData();
    renderSchools();
    renderStatusGraphic();
    closeModal('editSchoolModal');
}

function populateScholarshipDropdown() {
    const select = document.getElementById('existingSchoolSelect');
    select.innerHTML = '<option value="">-- Choose School --</option>';
    schools.forEach((s, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = s.name;
        select.appendChild(opt);
    });
}

function autoFillScholarship() {
    const idx = document.getElementById('existingSchoolSelect').value;
    if (idx === "") return;
    const school = schools[idx];
    const abbr = school.name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 4);
    document.getElementById('scholAbbr').value = abbr;
    document.getElementById('scholTotal').value = school.stats.tuition;
    calculateSavingsPreview();
}

function calculateSavingsPreview() {
    const payStr = document.getElementById('scholPay').value;
    const totalStr = document.getElementById('scholTotal').value;
    const payNum = parseFloat(payStr.replace(/[^0-9.]/g, '')) || 0;
    const totalNum = parseFloat(totalStr.replace(/[^0-9.]/g, '')) || 0;
    const saved = totalNum - payNum;
    if (saved > 0) document.getElementById('scholSaved').value = `-$${saved.toLocaleString()} SAVED`;
    else document.getElementById('scholSaved').value = "$0 SAVED";
}

function handleScholarshipSubmit(e) {
    e.preventDefault();
    const payStr = document.getElementById('scholPay').value;
    const totalStr = document.getElementById('scholTotal').value;
    const savedStr = document.getElementById('scholSaved').value;
    const payNum = parseFloat(payStr.replace(/[^0-9.]/g, '')) || 0;
    const totalNum = parseFloat(totalStr.replace(/[^0-9.]/g, '')) || 1;
    let percent = (payNum / totalNum) * 100;
    if (percent > 100) percent = 100;
    scholarshipData.push({
        abbr: document.getElementById('scholAbbr').value.toUpperCase(),
        saved: savedStr,
        pay: payStr,
        total: totalStr,
        percent: percent.toFixed(1)
    });
    saveData();
    renderScholarships();
    closeModal('scholarshipModal');
    e.target.reset();
}

// INITIAL LOAD
loadData();
renderSchools();
renderStatusGraphic();
renderScholarships();

// --- EXPORT FUNCTION (Run this to update your code) ---
function copyDataForCode() {
    // 1. Convert the current schools array to a JSON string
    const schoolsJSON = JSON.stringify(schools, null, 4);
    
    // 2. Create the full string formatted for JavaScript
    const codeToCopy = `const defaultSchools = ${schoolsJSON};`;
    
    // 3. Copy to clipboard
    navigator.clipboard.writeText(codeToCopy).then(() => {
        alert("Data copied to clipboard! \n\nNow open your 'script.js' file and PASTE this over the 'const defaultSchools' section.");
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert("Failed to copy. Check console for details.");
    });
}
