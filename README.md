# 📝 Minhas Tarefas

Uma aplicação de lista de tarefas moderna e responsiva construída com React e Styled Components, oferecendo uma experiência de usuário elegante e funcional.

<img width="1920" height="945" alt="image" src="https://github.com/user-attachments/assets/c205df08-b660-4c7b-a0c8-5fe162696ec6" />

https://minhas-tarefas-01.vercel.app/


## ✨ Funcionalidades

### 🎯 **Gerenciamento de Tarefas**
- ➕ **Adicionar tarefas** com validação de entrada
- ✏️ **Editar tarefas** inline com modo de edição
- ✅ **Marcar como concluída** com feedback visual
- 🗑️ **Deletar tarefas** com confirmação
- ⌨️ **Atalhos de teclado** (Enter para adicionar/salvar, Escape para cancelar)

### 🎨 **Interface Moderna**
- 🌙 **Modo escuro/claro** com toggle animado
- 📱 **Design responsivo** para todos os dispositivos
- 🎭 **Animações suaves** e transições elegantes
- 🎨 **Gradientes modernos** e cores harmoniosas
- 💫 **Efeitos glassmorphism** no card principal

### 📊 **Estatísticas em Tempo Real**
- 📈 **Contador total** de tarefas
- ✅ **Tarefas concluídas** com contagem
- ⏳ **Tarefas pendentes** em tempo real

### 🔍 **Filtros Inteligentes**
- 🔄 **Todas** - mostra todas as tarefas
- ⏳ **Pendentes** - apenas tarefas não concluídas
- ✅ **Concluídas** - apenas tarefas finalizadas

### 💾 **Persistência de Dados**
- 💿 **Salva preferências** no localStorage
- 🌙 **Mantém tema** escolhido entre sessões
- 🔄 **Estado persistente** da aplicação

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal para interface
- **Styled Components** - Estilização CSS-in-JS
- **Vite** - Build tool e servidor de desenvolvimento
- **JavaScript ES6+** - Sintaxe moderna
- **CSS3** - Animações e gradientes

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/minhas-tarefas.git
cd minhas-tarefas
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 📱 Como Usar

### Adicionando Tarefas
1. Digite sua tarefa no campo de entrada
2. Pressione **Enter** ou clique em **"Adicionar"**
3. A tarefa aparecerá na lista

### Editando Tarefas
1. Clique no botão **✏️** (laranja) na tarefa desejada
2. Edite o texto no campo que aparecer
3. Clique em **💾** (azul) para salvar ou **❌** (rosa) para cancelar
4. Use **Enter** para salvar ou **Escape** para cancelar

### Gerenciando Tarefas
- **✅** - Marcar/desmarcar como concluída
- **🗑️** - Deletar tarefa
- **Filtros** - Use os botões para filtrar por status

### Alternando Tema
- Clique no botão **🌙/☀️** no canto superior direito
- O tema será salvo automaticamente

## 🎨 Personalização

### Cores dos Temas

#### Modo Claro
- **Fundo**: Gradiente azul/roxo
- **Card**: Branco com transparência
- **Acentos**: Azul e roxo

#### Modo Escuro
- **Fundo**: Gradiente azul escuro
- **Card**: Cinza escuro com transparência
- **Acentos**: Azul claro e amarelo

### Componentes Principais
- `Container` - Layout principal
- `TodoCard` - Card da aplicação
- `TaskItem` - Item individual da tarefa
- `ThemeToggle` - Botão de alternância de tema

## 📁 Estrutura do Projeto

```
src/
├── App.jsx              # Componente principal
├── StyApp.js            # Estilos com Styled Components
├── GlobStyle.js         # Estilos globais
└── main.jsx             # Ponto de entrada
```

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
VITE_APP_TITLE=Todo App
VITE_APP_VERSION=1.0.0
```

### Personalização de Cores
Edite o arquivo `src/StyApp.js` para personalizar as cores:

```javascript
// Exemplo de personalização
export const Container = styled.div`
  background: ${props => props.isDarkMode 
    ? 'sua-cor-escura' 
    : 'sua-cor-clara'};
`;
```

## 🚀 Deploy

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Faça upload da pasta dist/
```

### GitHub Pages
```bash
npm run build
# Configure o GitHub Actions para deploy automático
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!** ⭐


