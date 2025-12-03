// --- DEFAULT DATA ---
const defaultSchools = [
    {
        name: "University of Michigan",
        rank: "#10",
        domain: "umich.edu",
        status: "Pending",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/1200px-Seal_of_the_University_of_Michigan.svg.png",
        image: "https://www.lib.umich.edu/static/f7ffa2d7bc8b7d2c2e56eaf08f237c8b/057ba/AerialsNov08(186)Stock-a.jpg",
        stats: { tuition: "$71,000", scholarship: "$25,000", col: "$22,000", earnings: "$190,000" }
    },
    {
        name: "Washington University in St. Louis",
        rank: "#16",
        domain: "wustl.edu",
        status: "Pending",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Washington_University_in_St._Louis_seal.svg/1200px-Washington_University_in_St._Louis_seal.svg.png",
        image: "https://washu.edu/app/uploads/2024/07/TPDA-7849_0207.jpg",
        stats: { tuition: "$67,500", scholarship: "$30,000", col: "$18,000", earnings: "$180,000" }
    },
    {
        name: "University of North Carolina",
        rank: "#22",
        domain: "unc.edu",
        status: "Pending",
        image: "https://cdn.prod.website-files.com/6617098ab3803c82c98b234e/6648af93c13701ae4ecc11a1_b576c4_8968c8be4dbb49699f050e92b04cf0b8~mv2.jpg.webp",
        stats: { tuition: "$44,000", scholarship: "$15,000", col: "$19,000", earnings: "$160,000" }
    },
    {
        name: "University of Minnesota",
        rank: "#16",
        domain: "umn.edu",
        status: "Pending",
        image: "https://twin-cities.umn.edu/sites/twin-cities.umn.edu/files/umn-lawn.jpg",
        stats: { tuition: "$56,000", scholarship: "$25,000", col: "$17,000", earnings: "$155,000" }
    },
    {
        name: "Boston University",
        rank: "#27",
        domain: "bu.edu",
        status: "Pending",
        image: "https://www.bu.edu/questrom/wp-content/uploads/sites/2/2024/04/BOSTON-UNIVERSITY-CAMPUS-ALONG-CHARLES-RIVER-0983-resize-1400x788-1.jpg",
        stats: { tuition: "$63,000", scholarship: "$20,000", col: "$24,000", earnings: "$190,000" }
    },
    {
        name: "Boston College",
        rank: "#28",
        domain: "bc.edu",
        status: "Pending",
        image: "https://oleg-schapov-studio.myshopify.com/cdn/shop/files/DJI_0482.jpg?v=1698250754&width=2400",
        stats: { tuition: "$64,000", scholarship: "$18,000", col: "$24,000", earnings: "$190,000" }
    },
    {
        name: "Wake Forest University",
        rank: "#22",
        domain: "wfu.edu",
        status: "Pending",
        image: "https://npr.brightspotcdn.com/legacy/sites/wunc/files/201703/1.jpg",
        stats: { tuition: "$52,000", scholarship: "$22,000", col: "$16,000", earnings: "$150,000" }
    },
    {
        name: "George Washington University",
        rank: "#35",
        domain: "gwu.edu",
        status: "Pending",
        image: "https://adawdc.org/file/690/570x350/higl_.png",
        stats: { tuition: "$68,000", scholarship: "$15,000", col: "$26,000", earnings: "$180,000" }
    },
    {
        name: "George Mason University",
        rank: "#32",
        domain: "gmu.edu",
        status: "Pending",
        image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/pwmva/Woodbridge_Campus1_82acaa59-affb-4e7a-b256-eafe099f4168.jpg",
        stats: { tuition: "$42,000", scholarship: "$10,000", col: "$26,000", earnings: "$140,000" }
    },
    {
        name: "Washington & Lee University",
        rank: "#35",
        domain: "wlu.edu",
        status: "Pending",
        image: "https://www.wlu.edu/Admissions/video-information-session.png",
        stats: { tuition: "$54,000", scholarship: "$28,000", col: "$14,000", earnings: "$165,000" }
    },
    {
        name: "Villanova University",
        rank: "#56",
        domain: "villanova.edu",
        status: "Pending",
        image: "https://www1.villanova.edu/university/professional-studies/villanova-cps-experience/advising/academic_support_professional_education/campus_services_pe/_jcr_content/root/container/container/container_1731001697/container/image.coreimg.jpeg/1574356842499/campus-final.jpeg",
        stats: { tuition: "$53,000", scholarship: "$22,000", col: "$18,000", earnings: "$130,000" }
    },
    {
        name: "University of Illinois",
        rank: "#43",
        domain: "illinois.edu",
        status: "Pending",
        image: "https://ncsa.illinois.edu/wp-content/uploads/2025/10/UIUC-drone-shot.jpg",
        stats: { tuition: "$48,000", scholarship: "$15,000", col: "$15,000", earnings: "$145,000" }
    },
    {
        name: "Marquette University",
        rank: "#71",
        domain: "marquette.edu",
        status: "Pending",
        image: "https://www.marquette.edu/visit/images/aerial-of-campus.webp",
        stats: { tuition: "$51,000", scholarship: "$25,000", col: "$16,000", earnings: "$90,000" }
    },
    {
        name: "Loyola University Chicago",
        rank: "#80",
        domain: "luc.edu",
        status: "Pending",
        image: "https://pxl-lucedu.terminalfour.net/prod01/cdn/media/universitymediaassets-vetted/1000X560-standard/lakeshorecampus/lake-shore-campus-aerial-northward-1000X560.jpg",
        stats: { tuition: "$52,000", scholarship: "$20,000", col: "$20,000", earnings: "$95,000" }
    },
    {
        name: "Michigan State University",
        rank: "#91",
        domain: "msu.edu",
        status: "Pending",
        image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_372,q_65,w_640/v1/clients/lansing/MSU_brady_mcdonough_Instagram_2736_ig_18068692432395619_7a17ba53-79a8-4030-adcd-7922c61d4922.jpg",
        stats: { tuition: "$46,000", scholarship: "$18,000", col: "$14,000", earnings: "$95,000" }
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

// --- RESET DATA (Important fix for you) ---
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
    const
