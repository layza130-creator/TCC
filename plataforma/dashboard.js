// ===== DASHBOARD FUNCTIONALITY =====

// ===== CONFIGURAÇÃO DOS LINKS DO GOOGLE DRIVE =====
// IMPORTANTE: Substitua estes links pelos seus links reais do Google Drive
const DRIVE_LINKS = {
    templates: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_TEMPLATES',
    brandbook: 'https://drive.google.com/file/d/SEU_ID_ARQUIVO_BRANDBOOK/view',
    videos: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_VIDEOS',
    kits: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_KITS',
    orientacoes: 'https://drive.google.com/drive/folders/SEU_ID_PASTA_ORIENTACOES'
};

// ===== VERIFICAÇÃO DE AUTENTICAÇÃO =====
function checkAuth() {
    const userData = localStorage.getItem('pizzaCesarUser') || sessionStorage.getItem('pizzaCesarUser');
    
    if (!userData) {
        // Usuário não está logado, redirecionar para login
        window.location.href = '/TCC/plataforma/login.html';
        return null;
    }
    
    return JSON.parse(userData);
}

// ===== LOGOUT =====
function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        localStorage.removeItem('pizzaCesarUser');
        sessionStorage.removeItem('pizzaCesarUser');
        showNotification('Logout realizado com sucesso!');
        setTimeout(() => {
            window.location.href = '/TCC/plataforma/login.html';
        }, 1000);
    }
}

// ===== FUNÇÕES DE NAVEGAÇÃO PARA GOOGLE DRIVE =====

function openDriveFolder(type) {
    const link = DRIVE_LINKS[type];
    
    if (link && !link.includes('SEU_ID')) {
        // Link configurado corretamente
        window.open(link, '_blank');
        showNotification(`Abrindo ${getFolderName(type)}...`);
    } else {
        // Link não configurado
        showNotification(`Link do Google Drive para ${getFolderName(type)} ainda não configurado. Verifique o arquivo dashboard.js`, 'warning');
        console.warn(`Configure o link do Google Drive para: ${type}`);
        console.warn(`Edite a variável DRIVE_LINKS no arquivo dashboard.js`);
    }
}

function downloadBrandbook() {
    const link = DRIVE_LINKS.brandbook;
    
    if (link && !link.includes('SEU_ID')) {
        window.open(link, '_blank');
        showNotification('Iniciando download do Brandbook...');
    } else {
        showNotification('Link do Brandbook ainda não configurado. Verifique o arquivo dashboard.js', 'warning');
        console.warn('Configure o link do Brandbook na variável DRIVE_LINKS');
    }
}

function getFolderName(type) {
    const names = {
        templates: 'Templates & Artes',
        videos: 'Vídeos Promocionais',
        kits: 'Kits de Comunicação',
        orientacoes: 'Orientações de Marketing'
    };
    return names[type] || type;
}

// ===== MODAL DE SUPORTE =====
function openSupport() {
    const modal = document.getElementById('supportModal');
    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

function submitSupport(event) {
    event.preventDefault();
    
    const type = document.getElementById('supportType').value;
    const subject = document.getElementById('supportSubject').value;
    const message = document.getElementById('supportMessage').value;
    
    // Em produção, aqui você enviaria os dados para um backend
    console.log('Solicitação de Suporte:', { type, subject, message });
    
    showNotification('Sua solicitação foi enviada com sucesso! Nossa equipe entrará em contato em breve.');
    
    // Limpar formulário e fechar modal
    document.getElementById('supportType').value = '';
    document.getElementById('supportSubject').value = '';
    document.getElementById('supportMessage').value = '';
    closeModal('supportModal');
}

// Fechar modal ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// ===== NOTIFICAÇÕES =====
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    
    // Definir cor baseada no tipo
    if (type === 'warning') {
        notification.style.background = 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
    } else {
        notification.style.background = 'linear-gradient(90deg, #dc2626 0%, #991b1b 100%)';
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ===== CALENDÁRIO DE CAMPANHAS =====
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// Campanhas de exemplo (você pode personalizar)
const campaigns = {
    '2024-01-15': 'Campanha Verão',
    '2024-02-14': 'Dia dos Namorados',
    '2024-03-08': 'Dia da Mulher',
    '2024-04-21': 'Tiradentes',
    '2024-05-12': 'Dia das Mães',
    '2024-06-12': 'Dia dos Namorados',
    '2024-07-20': 'Campanha Inverno',
    '2024-08-11': 'Dia dos Pais',
    '2024-09-07': 'Independência',
    '2024-10-12': 'Dia das Crianças',
    '2024-11-15': 'Black Friday',
    '2024-12-25': 'Natal'
};

function generateCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const monthDisplay = document.getElementById('currentMonth');
    
    // Atualizar display do mês
    monthDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Limpar calendário
    calendarGrid.innerHTML = '';
    
    // Adicionar cabeçalhos dos dias
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Calcular primeiro dia do mês e total de dias
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Adicionar dias vazios antes do primeiro dia
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Adicionar dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Verificar se há campanha neste dia
        const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (campaigns[dateString]) {
            dayElement.classList.add('campaign');
            dayElement.title = campaigns[dateString];
            
            const dot = document.createElement('div');
            dot.className = 'campaign-dot';
            dayElement.appendChild(dot);
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
}

// ===== INICIALIZAÇÃO =====
window.addEventListener('load', function() {
    // Verificar autenticação
    const user = checkAuth();
    
    if (user) {
        // Atualizar nome do usuário
        const userName = document.getElementById('userName');
        if (userName) {
            userName.textContent = `Franquia ${user.username.charAt(0).toUpperCase() + user.username.slice(1)}`;
        }
        
        // Gerar calendário
        generateCalendar();
        
        // Mostrar mensagem de boas-vindas
        setTimeout(() => {
            showNotification(`Bem-vindo de volta, ${user.username}!`);
        }, 500);
    }
});

// ===== ANIMAÇÕES E INTERAÇÕES =====

// Adicionar efeitos hover nos cards
const cards = document.querySelectorAll('.dashboard-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Adicionar efeitos nos botões rápidos
const quickButtons = document.querySelectorAll('.btn-quick');
quickButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// ===== LOGS PARA DESENVOLVIMENTO =====
console.log('Dashboard Pizza Cesar carregado!');
console.log('Para configurar os links do Google Drive, edite a variável DRIVE_LINKS no arquivo dashboard.js');
console.log('Exemplo de configuração:');
console.log(`
DRIVE_LINKS = {
    templates: 'https://drive.google.com/drive/folders/1ABC123...',
    brandbook: 'https://drive.google.com/file/d/1XYZ789.../view',
    videos: 'https://drive.google.com/drive/folders/1DEF456...',
    kits: 'https://drive.google.com/drive/folders/1GHI789...',
    orientacoes: 'https://drive.google.com/drive/folders/1JKL012...'
};
`);

