class TodoApp {
    constructor() {
        this.tasks = this.loadTasks();
        this.taskIdCounter = this.getNextId();
        
        this.elements = {
            form: document.getElementById('taskForm'),
            input: document.getElementById('taskInput'),
            tasksList: document.getElementById('tasksList'),
            emptyState: document.getElementById('emptyState'),
            stats: document.getElementById('stats'),
            totalTasks: document.getElementById('totalTasks'),
            completedTasks: document.getElementById('completedTasks'),
            remainingTasks: document.getElementById('remainingTasks'),
            notification: document.getElementById('notification')
        };
        
        this.init();
    }
    
    init() {
        this.elements.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.render();
    }
    
    loadTasks() {
        try {
            return JSON.parse(localStorage.getItem('todoTasks')) || [];
        } catch {
            return [];
        }
    }
    
    saveTasks() {
        localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
    }
    
    getNextId() {
        const maxId = this.tasks.reduce((max, task) => Math.max(max, parseInt(task.id) || 0), 0);
        return maxId + 1;
    }
    
    showNotification(message, type = 'error') {
        this.elements.notification.textContent = message;
        this.elements.notification.className = `notification ${type}`;
        this.elements.notification.classList.add('show');
        
        setTimeout(() => {
            this.elements.notification.classList.remove('show');
        }, 3000);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        const taskText = this.elements.input.value.trim();
        
        if (!taskText) {
            this.showNotification('Please add new task');
            return;
        }
        
        if (taskText.length > 200) {
            this.showNotification('task is too long (200 symbols max)');
            return;
        }
        
        this.addTask(taskText);
        this.elements.input.value = '';
        this.elements.input.focus();
    }
    
    addTask(text) {
        const task = {
            id: String(this.taskIdCounter++),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.tasks.push(task);
        this.saveTasks();
        this.render();
    }
    
    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
        }
    }
    
    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.saveTasks();
        this.render();
    }
    
    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
                 onclick="todoApp.toggleTask('${task.id}')"></div>
            <span class="task-text">${this.escapeHtml(task.text)}</span>
            <button class="delete-button" 
                    onclick="todoApp.deleteTask('${task.id}')"
                    aria-label="Удалить задачу"></button>
        `;
        
        return li;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const remaining = total - completed;
        
        this.elements.totalTasks.textContent = total;
        this.elements.completedTasks.textContent = completed;
        this.elements.remainingTasks.textContent = remaining;
        
        this.elements.stats.style.display = total > 0 ? 'flex' : 'none';
    }
    
    render() {
        this.elements.tasksList.innerHTML = '';
        
        if (this.tasks.length === 0) {
            this.elements.tasksList.appendChild(this.elements.emptyState);
        } else {
            const sortedTasks = [...this.tasks].sort((a, b) => {
                if (a.completed === b.completed) {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }
                return a.completed - b.completed;
            });
            
            sortedTasks.forEach(task => {
                const taskElement = this.createTaskElement(task);
                this.elements.tasksList.appendChild(taskElement);
            });
        }
        
        this.updateStats();
    }
}

const todoApp = new TodoApp();

window.addEventListener('load', () => {
    todoApp.elements.input.focus();
});