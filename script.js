// FBS Team Database - Comprehensive list of all FBS teams
const FBS_TEAMS = [
    { name: "Alabama", conference: "SEC", mascot: "Crimson Tide" },
    { name: "Arizona", conference: "Pac-12", mascot: "Wildcats" },
    { name: "Arizona State", conference: "Pac-12", mascot: "Sun Devils" },
    { name: "Arkansas", conference: "SEC", mascot: "Razorbacks" },
    { name: "Auburn", conference: "SEC", mascot: "Tigers" },
    { name: "Baylor", conference: "Big 12", mascot: "Bears" },
    { name: "Boston College", conference: "ACC", mascot: "Eagles" },
    { name: "California", conference: "Pac-12", mascot: "Golden Bears" },
    { name: "Clemson", conference: "ACC", mascot: "Tigers" },
    { name: "Colorado", conference: "Pac-12", mascot: "Buffaloes" },
    { name: "Duke", conference: "ACC", mascot: "Blue Devils" },
    { name: "Florida", conference: "SEC", mascot: "Gators" },
    { name: "Florida State", conference: "ACC", mascot: "Seminoles" },
    { name: "Georgia", conference: "SEC", mascot: "Bulldogs" },
    { name: "Georgia Tech", conference: "ACC", mascot: "Yellow Jackets" },
    { name: "Illinois", conference: "Big Ten", mascot: "Fighting Illini" },
    { name: "Indiana", conference: "Big Ten", mascot: "Hoosiers" },
    { name: "Iowa", conference: "Big Ten", mascot: "Hawkeyes" },
    { name: "Iowa State", conference: "Big 12", mascot: "Cyclones" },
    { name: "Kansas", conference: "Big 12", mascot: "Jayhawks" },
    { name: "Kansas State", conference: "Big 12", mascot: "Wildcats" },
    { name: "Kentucky", conference: "SEC", mascot: "Wildcats" },
    { name: "Louisville", conference: "ACC", mascot: "Cardinals" },
    { name: "LSU", conference: "SEC", mascot: "Tigers" },
    { name: "Maryland", conference: "Big Ten", mascot: "Terrapins" },
    { name: "Miami (FL)", conference: "ACC", mascot: "Hurricanes" },
    { name: "Michigan", conference: "Big Ten", mascot: "Wolverines" },
    { name: "Michigan State", conference: "Big Ten", mascot: "Spartans" },
    { name: "Minnesota", conference: "Big Ten", mascot: "Golden Gophers" },
    { name: "Mississippi State", conference: "SEC", mascot: "Bulldogs" },
    { name: "Missouri", conference: "SEC", mascot: "Tigers" },
    { name: "Nebraska", conference: "Big Ten", mascot: "Cornhuskers" },
    { name: "North Carolina", conference: "ACC", mascot: "Tar Heels" },
    { name: "North Carolina State", conference: "ACC", mascot: "Wolfpack" },
    { name: "Northwestern", conference: "Big Ten", mascot: "Wildcats" },
    { name: "Notre Dame", conference: "Independent", mascot: "Fighting Irish" },
    { name: "Ohio State", conference: "Big Ten", mascot: "Buckeyes" },
    { name: "Oklahoma", conference: "Big 12", mascot: "Sooners" },
    { name: "Oklahoma State", conference: "Big 12", mascot: "Cowboys" },
    { name: "Oregon", conference: "Pac-12", mascot: "Ducks" },
    { name: "Oregon State", conference: "Pac-12", mascot: "Beavers" },
    { name: "Penn State", conference: "Big Ten", mascot: "Nittany Lions" },
    { name: "Pittsburgh", conference: "ACC", mascot: "Panthers" },
    { name: "Purdue", conference: "Big Ten", mascot: "Boilermakers" },
    { name: "Rutgers", conference: "Big Ten", mascot: "Scarlet Knights" },
    { name: "South Carolina", conference: "SEC", mascot: "Gamecocks" },
    { name: "Stanford", conference: "Pac-12", mascot: "Cardinal" },
    { name: "Syracuse", conference: "ACC", mascot: "Orange" },
    { name: "TCU", conference: "Big 12", mascot: "Horned Frogs" },
    { name: "Tennessee", conference: "SEC", mascot: "Volunteers" },
    { name: "Texas", conference: "Big 12", mascot: "Longhorns" },
    { name: "Texas A&M", conference: "SEC", mascot: "Aggies" },
    { name: "Texas Tech", conference: "Big 12", mascot: "Red Raiders" },
    { name: "UCLA", conference: "Pac-12", mascot: "Bruins" },
    { name: "USC", conference: "Pac-12", mascot: "Trojans" },
    { name: "Utah", conference: "Pac-12", mascot: "Utes" },
    { name: "Vanderbilt", conference: "SEC", mascot: "Commodores" },
    { name: "Virginia", conference: "ACC", mascot: "Cavaliers" },
    { name: "Virginia Tech", conference: "ACC", mascot: "Hokies" },
    { name: "Wake Forest", conference: "ACC", mascot: "Demon Deacons" },
    { name: "Washington", conference: "Pac-12", mascot: "Huskies" },
    { name: "Washington State", conference: "Pac-12", mascot: "Cougars" },
    { name: "Wisconsin", conference: "Big Ten", mascot: "Badgers" },
    // Additional FBS teams
    { name: "Air Force", conference: "Mountain West", mascot: "Falcons" },
    { name: "Akron", conference: "MAC", mascot: "Zips" },
    { name: "Appalachian State", conference: "Sun Belt", mascot: "Mountaineers" },
    { name: "Arkansas State", conference: "Sun Belt", mascot: "Red Wolves" },
    { name: "Army", conference: "Independent", mascot: "Black Knights" },
    { name: "Ball State", conference: "MAC", mascot: "Cardinals" },
    { name: "Boise State", conference: "Mountain West", mascot: "Broncos" },
    { name: "Bowling Green", conference: "MAC", mascot: "Falcons" },
    { name: "Buffalo", conference: "MAC", mascot: "Bulls" },
    { name: "BYU", conference: "Independent", mascot: "Cougars" },
    { name: "Central Michigan", conference: "MAC", mascot: "Chippewas" },
    { name: "Charlotte", conference: "C-USA", mascot: "49ers" },
    { name: "Cincinnati", conference: "Big 12", mascot: "Bearcats" },
    { name: "Coastal Carolina", conference: "Sun Belt", mascot: "Chanticleers" },
    { name: "Colorado State", conference: "Mountain West", mascot: "Rams" },
    { name: "Connecticut", conference: "Independent", mascot: "Huskies" },
    { name: "East Carolina", conference: "AAC", mascot: "Pirates" },
    { name: "Eastern Michigan", conference: "MAC", mascot: "Eagles" },
    { name: "FIU", conference: "C-USA", mascot: "Panthers" },
    { name: "Florida Atlantic", conference: "AAC", mascot: "Owls" },
    { name: "Fresno State", conference: "Mountain West", mascot: "Bulldogs" },
    { name: "Georgia Southern", conference: "Sun Belt", mascot: "Eagles" },
    { name: "Georgia State", conference: "Sun Belt", mascot: "Panthers" },
    { name: "Hawaii", conference: "Mountain West", mascot: "Rainbow Warriors" },
    { name: "Houston", conference: "Big 12", mascot: "Cougars" },
    { name: "Idaho", conference: "Independent", mascot: "Vandals" },
    { name: "Illinois State", conference: "FCS", mascot: "Redbirds" },
    { name: "Indiana State", conference: "FCS", mascot: "Sycamores" },
    { name: "Iowa State", conference: "Big 12", mascot: "Cyclones" },
    { name: "James Madison", conference: "Sun Belt", mascot: "Dukes" },
    { name: "Kansas", conference: "Big 12", mascot: "Jayhawks" },
    { name: "Kent State", conference: "MAC", mascot: "Golden Flashes" },
    { name: "Liberty", conference: "C-USA", mascot: "Flames" },
    { name: "Louisiana", conference: "Sun Belt", mascot: "Ragin' Cajuns" },
    { name: "Louisiana Tech", conference: "C-USA", mascot: "Bulldogs" },
    { name: "Louisiana-Monroe", conference: "Sun Belt", mascot: "Warhawks" },
    { name: "Marshall", conference: "Sun Belt", mascot: "Thundering Herd" },
    { name: "Memphis", conference: "AAC", mascot: "Tigers" },
    { name: "Miami (OH)", conference: "MAC", mascot: "RedHawks" },
    { name: "Middle Tennessee", conference: "C-USA", mascot: "Blue Raiders" },
    { name: "Minnesota", conference: "Big Ten", mascot: "Golden Gophers" },
    { name: "Navy", conference: "AAC", mascot: "Midshipmen" },
    { name: "Nevada", conference: "Mountain West", mascot: "Wolf Pack" },
    { name: "New Mexico", conference: "Mountain West", mascot: "Lobos" },
    { name: "New Mexico State", conference: "C-USA", mascot: "Aggies" },
    { name: "North Texas", conference: "AAC", mascot: "Mean Green" },
    { name: "Northern Illinois", conference: "MAC", mascot: "Huskies" },
    { name: "Ohio", conference: "MAC", mascot: "Bobcats" },
    { name: "Old Dominion", conference: "Sun Belt", mascot: "Monarchs" },
    { name: "Rice", conference: "AAC", mascot: "Owls" },
    { name: "San Diego State", conference: "Mountain West", mascot: "Aztecs" },
    { name: "San Jose State", conference: "Mountain West", mascot: "Spartans" },
    { name: "SMU", conference: "AAC", mascot: "Mustangs" },
    { name: "South Alabama", conference: "Sun Belt", mascot: "Jaguars" },
    { name: "Southern Miss", conference: "Sun Belt", mascot: "Golden Eagles" },
    { name: "Temple", conference: "AAC", mascot: "Owls" },
    { name: "Texas State", conference: "Sun Belt", mascot: "Bobcats" },
    { name: "Toledo", conference: "MAC", mascot: "Rockets" },
    { name: "Troy", conference: "Sun Belt", mascot: "Trojans" },
    { name: "Tulane", conference: "AAC", mascot: "Green Wave" },
    { name: "Tulsa", conference: "AAC", mascot: "Golden Hurricane" },
    { name: "UAB", conference: "AAC", mascot: "Blazers" },
    { name: "UCF", conference: "Big 12", mascot: "Knights" },
    { name: "ULM", conference: "Sun Belt", mascot: "Warhawks" },
    { name: "UMass", conference: "Independent", mascot: "Minutemen" },
    { name: "UNLV", conference: "Mountain West", mascot: "Rebels" },
    { name: "UTEP", conference: "C-USA", mascot: "Miners" },
    { name: "UTSA", conference: "AAC", mascot: "Roadrunners" },
    { name: "Utah State", conference: "Mountain West", mascot: "Aggies" },
    { name: "UTEP", conference: "C-USA", mascot: "Miners" },
    { name: "Vanderbilt", conference: "SEC", mascot: "Commodores" },
    { name: "Western Kentucky", conference: "C-USA", mascot: "Hilltoppers" },
    { name: "Western Michigan", conference: "MAC", mascot: "Broncos" },
    { name: "Wyoming", conference: "Mountain West", mascot: "Cowboys" }
];

// Application State
let currentPoll = {
    week: 1,
    lastUpdated: new Date(),
    results: []
};

let pollHistory = [];
let currentRankings = new Array(25).fill(null);
let currentPosition = 0;

// DOM Elements
const elements = {
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    currentWeek: document.getElementById('current-week'),
    lastUpdated: document.getElementById('last-updated'),
    pollResults: document.getElementById('poll-results'),
    rankingsGrid: document.getElementById('rankings-grid'),
    pollForm: document.getElementById('poll-form'),
    voterName: document.getElementById('voter-name'),
    clearForm: document.getElementById('clear-form'),
    teamModal: document.getElementById('team-modal'),
    modalPosition: document.getElementById('modal-position'),
    teamSearch: document.getElementById('team-search'),
    teamList: document.getElementById('team-list'),
    closeModal: document.querySelector('.close'),
    messageContainer: document.getElementById('message-container'),
    weekSelector: document.getElementById('week-selector'),
    historyResults: document.getElementById('history-results'),
    exportData: document.getElementById('export-data'),
    uploadArea: document.getElementById('upload-area'),
    excelFile: document.getElementById('excel-file')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    generateRankingsGrid();
    loadPollData();
    updatePollDisplay();
    setupExcelUpload();
}

function setupEventListeners() {
    // Tab navigation
    elements.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Form submission
    elements.pollForm.addEventListener('submit', handleFormSubmission);
    elements.clearForm.addEventListener('click', clearForm);

    // Modal events
    elements.closeModal.addEventListener('click', closeTeamModal);
    window.addEventListener('click', (e) => {
        if (e.target === elements.teamModal) closeTeamModal();
    });

    // Team search
    elements.teamSearch.addEventListener('input', filterTeams);

    // History and export
    elements.weekSelector.addEventListener('change', loadHistoryWeek);
    elements.exportData.addEventListener('click', exportPollData);

    // Excel upload
    elements.uploadArea.addEventListener('click', () => elements.excelFile.click());
    elements.excelFile.addEventListener('change', handleExcelUpload);
}

function switchTab(tabName) {
    // Update tab buttons
    elements.tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Update tab content
    elements.tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabName);
    });

    // Load data for specific tabs
    if (tabName === 'poll-history') {
        loadPollHistory();
    }
}

function generateRankingsGrid() {
    elements.rankingsGrid.innerHTML = '';
    
    for (let i = 0; i < 25; i++) {
        const rankingItem = document.createElement('div');
        rankingItem.className = 'ranking-item';
        rankingItem.innerHTML = `
            <div class="ranking-number">${i + 1}</div>
            <div class="team-selector placeholder" data-position="${i}">
                Click to select team
            </div>
            <button class="remove-team" style="display: none;">×</button>
        `;
        
        const teamSelector = rankingItem.querySelector('.team-selector');
        const removeBtn = rankingItem.querySelector('.remove-team');
        
        teamSelector.addEventListener('click', () => openTeamModal(i));
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearRanking(i);
        });
        
        elements.rankingsGrid.appendChild(rankingItem);
    }
}

function openTeamModal(position) {
    currentPosition = position;
    elements.modalPosition.textContent = position + 1;
    elements.teamSearch.value = '';
    elements.teamModal.style.display = 'block';
    populateTeamList();
    elements.teamSearch.focus();
}

function closeTeamModal() {
    elements.teamModal.style.display = 'none';
}

function populateTeamList() {
    elements.teamList.innerHTML = '';
    
    FBS_TEAMS.forEach(team => {
        const teamOption = document.createElement('div');
        teamOption.className = 'team-option';
        teamOption.innerHTML = `
            <strong>${team.name}</strong>
            <small>${team.conference} • ${team.mascot}</small>
        `;
        teamOption.addEventListener('click', () => selectTeam(team));
        elements.teamList.appendChild(teamOption);
    });
}

function filterTeams() {
    const searchTerm = elements.teamSearch.value.toLowerCase();
    const teamOptions = elements.teamList.querySelectorAll('.team-option');
    
    teamOptions.forEach(option => {
        const teamName = option.querySelector('strong').textContent.toLowerCase();
        const isVisible = teamName.includes(searchTerm);
        option.style.display = isVisible ? 'block' : 'none';
    });
}

function selectTeam(team) {
    currentRankings[currentPosition] = team;
    updateRankingDisplay(currentPosition);
    closeTeamModal();
}

function updateRankingDisplay(position) {
    const rankingItem = elements.rankingsGrid.children[position];
    const teamSelector = rankingItem.querySelector('.team-selector');
    const removeBtn = rankingItem.querySelector('.remove-team');
    
    if (currentRankings[position]) {
        const team = currentRankings[position];
        teamSelector.textContent = team.name;
        teamSelector.className = 'team-selector selected';
        rankingItem.className = 'ranking-item filled';
        removeBtn.style.display = 'block';
    } else {
        teamSelector.textContent = 'Click to select team';
        teamSelector.className = 'team-selector placeholder';
        rankingItem.className = 'ranking-item';
        removeBtn.style.display = 'none';
    }
}

function clearRanking(position) {
    currentRankings[position] = null;
    updateRankingDisplay(position);
}

function clearForm() {
    currentRankings.fill(null);
    for (let i = 0; i < 25; i++) {
        updateRankingDisplay(i);
    }
    elements.voterName.value = '';
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    // Validate form
    const emptySlots = currentRankings.filter(team => team === null).length;
    if (emptySlots > 0) {
        showMessage(`Please fill in all 25 rankings. You have ${emptySlots} empty slots.`, 'error');
        return;
    }
    
    // Check for duplicates
    const teamNames = currentRankings.map(team => team.name);
    const uniqueNames = new Set(teamNames);
    if (uniqueNames.size !== 25) {
        showMessage('Please ensure each team appears only once in your rankings.', 'error');
        return;
    }
    
    // Submit ranking
    const submission = {
        id: Date.now(),
        voterName: elements.voterName.value || 'Anonymous',
        rankings: [...currentRankings],
        submittedAt: new Date()
    };
    
    // Store submission
    let submissions = JSON.parse(localStorage.getItem('pollSubmissions') || '[]');
    submissions.push(submission);
    localStorage.setItem('pollSubmissions', JSON.stringify(submissions));
    
    // Recalculate poll
    calculatePollResults();
    updatePollDisplay();
    
    showMessage('Your rankings have been submitted successfully!', 'success');
    clearForm();
}

function calculatePollResults() {
    const submissions = JSON.parse(localStorage.getItem('pollSubmissions') || '[]');
    const teamScores = {};
    
    // Initialize team scores
    FBS_TEAMS.forEach(team => {
        teamScores[team.name] = {
            totalPoints: 0,
            appearances: 0,
            team: team
        };
    });
    
    // Calculate scores based on submissions
    submissions.forEach(submission => {
        submission.rankings.forEach((team, index) => {
            if (team) {
                const points = 26 - (index + 1); // 25 points for #1, 24 for #2, etc.
                teamScores[team.name].totalPoints += points;
                teamScores[team.name].appearances += 1;
            }
        });
    });
    
    // Sort teams by total points
    const sortedTeams = Object.values(teamScores)
        .filter(team => team.appearances > 0)
        .sort((a, b) => b.totalPoints - a.totalPoints)
        .slice(0, 25);
    
    currentPoll.results = sortedTeams.map((team, index) => ({
        rank: index + 1,
        team: team.team,
        points: team.totalPoints,
        appearances: team.appearances,
        averageRank: team.appearances > 0 ? (team.totalPoints / team.appearances).toFixed(1) : 0
    }));
    
    currentPoll.lastUpdated = new Date();
    
    // Store poll history
    pollHistory = JSON.parse(localStorage.getItem('pollHistory') || '[]');
    pollHistory.push({
        week: currentPoll.week,
        results: [...currentPoll.results],
        lastUpdated: currentPoll.lastUpdated,
        totalSubmissions: submissions.length
    });
    localStorage.setItem('pollHistory', JSON.stringify(pollHistory));
}

function updatePollDisplay() {
    elements.currentWeek.textContent = currentPoll.week;
    elements.lastUpdated.textContent = currentPoll.lastUpdated.toLocaleString();
    
    elements.pollResults.innerHTML = '';
    
    if (currentPoll.results.length === 0) {
        elements.pollResults.innerHTML = '<p style="text-align: center; color: #6c757d; font-style: italic;">No poll results available yet. Be the first to submit your rankings!</p>';
        return;
    }
    
    currentPoll.results.forEach((result, index) => {
        const pollTeam = document.createElement('div');
        pollTeam.className = `poll-team rank-${index < 3 ? index + 1 : ''}`;
        pollTeam.innerHTML = `
            <div class="rank-number">${result.rank}</div>
            <div class="team-name">${result.team.name}</div>
            <div class="team-record">
                ${result.points} pts • ${result.appearances} votes • Avg: ${result.averageRank}
            </div>
        `;
        elements.pollResults.appendChild(pollTeam);
    });
}

function loadPollHistory() {
    pollHistory = JSON.parse(localStorage.getItem('pollHistory') || '[]');
    
    // Populate week selector
    elements.weekSelector.innerHTML = '<option value="">Select Week</option>';
    pollHistory.forEach((poll, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `Week ${poll.week} (${new Date(poll.lastUpdated).toLocaleDateString()})`;
        elements.weekSelector.appendChild(option);
    });
}

function loadHistoryWeek() {
    const weekIndex = elements.weekSelector.value;
    if (weekIndex === '') {
        elements.historyResults.innerHTML = '<p style="text-align: center; color: #6c757d;">Select a week to view poll history.</p>';
        return;
    }
    
    const poll = pollHistory[weekIndex];
    elements.historyResults.innerHTML = '';
    
    poll.results.forEach((result, index) => {
        const pollTeam = document.createElement('div');
        pollTeam.className = `poll-team rank-${index < 3 ? index + 1 : ''}`;
        pollTeam.innerHTML = `
            <div class="rank-number">${result.rank}</div>
            <div class="team-name">${result.team.name}</div>
            <div class="team-record">
                ${result.points} pts • ${result.appearances} votes • Avg: ${result.averageRank}
            </div>
        `;
        elements.historyResults.appendChild(pollTeam);
    });
}

function exportPollData() {
    const data = {
        currentPoll: currentPoll,
        pollHistory: pollHistory,
        submissions: JSON.parse(localStorage.getItem('pollSubmissions') || '[]')
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ap-poll-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function setupExcelUpload() {
    elements.uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        elements.uploadArea.style.borderColor = '#007bff';
        elements.uploadArea.style.backgroundColor = '#f8f9fa';
    });
    
    elements.uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        elements.uploadArea.style.borderColor = '#ced4da';
        elements.uploadArea.style.backgroundColor = 'transparent';
    });
    
    elements.uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        elements.uploadArea.style.borderColor = '#ced4da';
        elements.uploadArea.style.backgroundColor = 'transparent';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleExcelFile(files[0]);
        }
    });
}

function handleExcelUpload(e) {
    const file = e.target.files[0];
    if (file) {
        handleExcelFile(file);
    }
}

function handleExcelFile(file) {
    if (!file.name.match(/\.(xlsx|xls)$/)) {
        showMessage('Please upload a valid Excel file (.xlsx or .xls)', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            
            processExcelData(jsonData);
        } catch (error) {
            showMessage('Error reading Excel file. Please check the format.', 'error');
            console.error('Excel parsing error:', error);
        }
    };
    reader.readAsArrayBuffer(file);
}

function processExcelData(data) {
    if (data.length < 2) {
        showMessage('Excel file must contain at least a header row and one data row.', 'error');
        return;
    }
    
    const rankings = [];
    const errors = [];
    
    for (let i = 1; i < data.length; i++) {
        const row = data[i];
        if (row.length < 2) continue;
        
        const teamName = row[0]?.toString().trim();
        const rank = parseInt(row[1]);
        
        if (!teamName || isNaN(rank) || rank < 1 || rank > 25) {
            errors.push(`Row ${i + 1}: Invalid team name or ranking`);
            continue;
        }
        
        // Find matching team
        const team = FBS_TEAMS.find(t => 
            t.name.toLowerCase() === teamName.toLowerCase() ||
            t.name.toLowerCase().includes(teamName.toLowerCase()) ||
            teamName.toLowerCase().includes(t.name.toLowerCase())
        );
        
        if (!team) {
            errors.push(`Row ${i + 1}: Team "${teamName}" not found in FBS database`);
            continue;
        }
        
        rankings[rank - 1] = team;
    }
    
    if (errors.length > 0) {
        showMessage(`Excel processing completed with ${errors.length} errors. Check console for details.`, 'error');
        console.error('Excel processing errors:', errors);
    }
    
    if (rankings.filter(r => r).length === 25) {
        // Fill current rankings and switch to submit tab
        currentRankings = rankings;
        for (let i = 0; i < 25; i++) {
            updateRankingDisplay(i);
        }
        switchTab('submit-poll');
        showMessage('Excel data loaded successfully! Please review and submit your rankings.', 'success');
    } else {
        showMessage('Excel file must contain exactly 25 valid team rankings.', 'error');
    }
}

function showMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    elements.messageContainer.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}

function loadPollData() {
    // Load existing poll data from localStorage
    const savedPoll = localStorage.getItem('currentPoll');
    if (savedPoll) {
        currentPoll = JSON.parse(savedPoll);
        currentPoll.lastUpdated = new Date(currentPoll.lastUpdated);
    }
    
    pollHistory = JSON.parse(localStorage.getItem('pollHistory') || '[]');
    
    // Calculate current poll if we have submissions
    const submissions = JSON.parse(localStorage.getItem('pollSubmissions') || '[]');
    if (submissions.length > 0) {
        calculatePollResults();
    }
}

// Auto-save poll data
setInterval(() => {
    localStorage.setItem('currentPoll', JSON.stringify(currentPoll));
}, 30000); // Save every 30 seconds

// Simulate weekly poll updates (for demo purposes)
function simulateWeeklyUpdate() {
    currentPoll.week += 1;
    calculatePollResults();
    updatePollDisplay();
    showMessage(`Week ${currentPoll.week} poll has been updated!`, 'success');
}

// For demo: simulate weekly updates every 5 minutes
// setInterval(simulateWeeklyUpdate, 5 * 60 * 1000);
