// ===== LOGIN FUNCTIONALITY =====

// Configuração de credenciais (em produção, isso deve estar em um backend seguro)
const CREDENTIALS = {
    'admin': 'admin123',
    'franqueado': 'franquia2024',
    'sp.centro': 'pizzacesar',
    'demo': 'demo123'
};

// Event listener para o formulário de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.querySelector('input[name="remember"]').checked;
    
    // Validação de credenciais
    if (CREDENTIALS[username] && CREDENTIALS[username] === password) {
        // Salvar informações do usuário
        const userData = {
            username: username,
            loginTime: new Date().toISOString(),
            remember: remember
        };
        
        // Armazenar no localStorage ou sessionStorage
        if (remember) {
            localStorage.setItem('pizzaCesarUser', JSON.stringify(userData));
        } else {
            sessionStorage.setItem('pizzaCesarUser', JSON.stringify(userData));
        }
        
        // Mostrar mensagem de sucesso
        showNotification('Login realizado com sucesso! Redirecionando...', 'success');
        
        // Redirecionar para o dashboard após 1 segundo
        setTimeout(() => {
            window.location.href = './dashboard.html';
        }, 1000);
        
    } else {
        // Mostrar mensagem de erro
        showNotification('Usuário ou senha incorretos. Tente novamente.', 'error');
        
        // Limpar campo de senha
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
});

// Função para mostrar notificações
function showNotification(message, type) {
    // Criar elemento de notificação se não existir
    let notification = document.querySelector('.notification-login');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification-login';
        document.body.appendChild(notification);
    }
    
    // Definir estilo baseado no tipo
    if (type === 'success') {
        notification.style.background = 'linear-gradient(90deg, #10b981 0%, #059669 100%)';
    } else {
        notification.style.background = 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
    }
    
    // Aplicar estilos
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '8px';
    notification.style.color = '#ffffff';
    notification.style.fontWeight = '600';
    notification.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    notification.style.zIndex = '10000';
    notification.style.transform = 'translateX(400px)';
    notification.style.transition = 'transform 0.3s ease';
    
    notification.textContent = message;
    
    // Mostrar notificação
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Esconder após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Verificar se já está logado ao carregar a página
window.addEventListener('load', function() {
    const userData = localStorage.getItem('pizzaCesarUser') || sessionStorage.getItem('pizzaCesarUser');
    
    if (userData) {
        // Usuário já está logado, redirecionar para dashboard
        window.location.href = './dashboard.html';
    }
});

// Adicionar efeito de foco nos inputs
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Adicionar efeito hover no botão de login
const loginBtn = document.querySelector('.btn-login');
loginBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.02)';
});

loginBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
});

console.log('Sistema de Login Pizza Cesar carregado!');
console.log('Credenciais de teste disponíveis:');
console.log('- admin / admin123');
console.log('- franqueado / franquia2024');
console.log('- demo / demo123');

