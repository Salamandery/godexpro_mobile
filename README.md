# 📱 GoDex Pro Mobile

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.60.5-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/React-16.8.6-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/Redux-4.0.4-764ABC?style=for-the-badge&logo=redux"/>
  <img src="https://img.shields.io/badge/Axios-0.19.0-5A29E4?style=for-the-badge&logo=axios"/>
  <img src="https://img.shields.io/badge/Firebase-5.5.6-FFCA28?style=for-the-badge&logo=firebase"/>
  <img src="https://img.shields.io/badge/OneSignal-3.4.1-FF6B6B?style=for-the-badge&logo=onesignal"/>
</p>

<div align="center">
  <b>🇧🇷 Português | <a href="#english-version">🇺🇸 English below</a></b>
</div>

---

## 📑 Sumário | Table of Contents
- [Sobre o Projeto | About](#sobre-o-projeto--about)
- [Tecnologias | Technologies](#tecnologias--technologies)
- [Estrutura | Structure](#estrutura--structure)
- [Funcionalidades | Features](#funcionalidades--features)
- [Rotas | Routes](#rotas--routes)
- [Explicação das Telas | Screen Explanations](#-explicação-das-telas--screen-explanations)
- [Instalação e Execução | Setup & Run](#instalação-e-execução--setup--run)
- [Configurações | Configuration](#configurações--configuration)
- [Autor | Author](#autor--author)

---

## Sobre o Projeto | About

**PT-BR:**
> GoDex Pro é um aplicativo móvel React Native desenvolvido para entusiastas de Pokémon. Oferece informações detalhadas sobre Pokémon, incluindo estatísticas, ataques, tipos, fraquezas e resistências. O app também inclui funcionalidades de notificações push, autenticação Google, e sincronização de dados.

**EN:**
> GoDex Pro is a React Native mobile application developed for Pokémon enthusiasts. It provides detailed information about Pokémon, including statistics, attacks, types, weaknesses, and resistances. The app also includes push notification features, Google authentication, and data synchronization.

---

## 🚀 Tecnologias | Technologies

**PT-BR:**
- **React Native 0.60.5**: Framework para desenvolvimento de aplicações móveis multiplataforma
- **React 16.8.6**: Biblioteca JavaScript para construção de interfaces
- **Redux 4.0.4**: Gerenciamento de estado da aplicação
- **React Navigation 3.11.1**: Navegação entre telas
- **Axios 0.19.0**: Cliente HTTP para requisições à API
- **Firebase 5.5.6**: Backend como serviço (BaaS)
- **OneSignal 3.4.1**: Serviço de notificações push
- **Code Push**: Atualizações OTA (Over-the-Air)
- **AsyncStorage**: Armazenamento local de dados

**EN:**
- **React Native 0.60.5**: Framework for cross-platform mobile application development
- **React 16.8.6**: JavaScript library for building user interfaces
- **Redux 4.0.4**: Application state management
- **React Navigation 3.11.1**: Screen navigation
- **Axios 0.19.0**: HTTP client for API requests
- **Firebase 5.5.6**: Backend as a Service (BaaS)
- **OneSignal 3.4.1**: Push notification service
- **Code Push**: OTA (Over-the-Air) updates
- **AsyncStorage**: Local data storage

---

## 🗂️ Estrutura | Structure
```
godexpro_mobile/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── AdSense/        # Componentes de anúncios
│   │   ├── Header/         # Cabeçalho da aplicação
│   │   ├── ItemList/       # Lista de itens
│   │   ├── NewsAndEvents/  # Notícias e eventos
│   │   ├── PkInfoModal/    # Modal de informações Pokémon
│   │   ├── StringTrataments/ # Tratamento de strings
│   │   ├── WeakAndStrong/  # Fraquezas e resistências
│   │   ├── checkType/      # Verificação de tipos
│   │   └── typeWeather/    # Tipos e clima
│   ├── Views/              # Telas da aplicação
│   │   ├── Contact/        # Tela de contato
│   │   ├── Guide/          # Guia do usuário
│   │   ├── Itens/          # Lista de itens
│   │   ├── ListaPkms/      # Lista de Pokémon
│   │   ├── Loading/        # Tela de carregamento
│   │   ├── Login/          # Autenticação
│   │   ├── Logout/         # Logout
│   │   ├── Main/           # Tela principal
│   │   ├── News/           # Notícias
│   │   ├── PkmAtks/        # Ataques Pokémon
│   │   ├── PkmCP/          # CP dos Pokémon
│   │   ├── PkmController/  # Controlador Pokémon
│   │   ├── PkmInfo/        # Informações Pokémon
│   │   ├── PkmInfoController/ # Controlador de informações
│   │   ├── Settings/       # Configurações
│   │   └── Splash/         # Tela de splash
│   ├── services/           # Serviços e API
│   │   ├── actions/        # Ações Redux
│   │   ├── reducers/       # Redutores Redux
│   │   ├── api.js          # Configuração da API
│   │   └── realm.js        # Banco de dados local
│   ├── schemas/            # Esquemas de dados
│   ├── default/            # Configurações padrão
│   ├── App.js              # Componente principal
│   └── router.js           # Configuração de rotas
├── android/                # Configurações Android
├── ios/                    # Configurações iOS
├── __tests__/              # Testes
├── package.json            # Dependências do projeto
└── README.md               # Documentação
```

---

## ⚡ Funcionalidades | Features

**PT-BR:**
- 📱 **Interface multiplataforma**: Funciona em iOS e Android
- 🔍 **Busca de Pokémon**: Pesquisa por nome, tipo ou CP
- 📊 **Estatísticas detalhadas**: Informações completas sobre cada Pokémon
- ⚔️ **Sistema de ataques**: Lista de ataques e danos
- 🛡️ **Tipos e resistências**: Fraquezas e resistências por tipo
- 🔔 **Notificações push**: Receba atualizações em tempo real
- 🔐 **Autenticação Google**: Login seguro com Google
- 📱 **Atualizações OTA**: Atualizações sem reinstalação
- 🌐 **Sincronização online**: Dados sincronizados com servidor
- 📰 **Notícias e eventos**: Fique por dentro das novidades

**EN:**
- 📱 **Cross-platform interface**: Works on iOS and Android
- 🔍 **Pokémon search**: Search by name, type, or CP
- 📊 **Detailed statistics**: Complete information about each Pokémon
- ⚔️ **Attack system**: List of attacks and damage
- 🛡️ **Types and resistances**: Weaknesses and resistances by type
- 🔔 **Push notifications**: Receive real-time updates
- 🔐 **Google authentication**: Secure login with Google
- 📱 **OTA updates**: Updates without reinstallation
- 🌐 **Online synchronization**: Data synchronized with server
- 📰 **News and events**: Stay updated with the latest news

---

## 🗺️ Rotas | Routes

**PT-BR:**
- **Splash**: Tela inicial de carregamento
- **Login**: Autenticação do usuário
- **Main**: Tela principal do aplicativo
- **ListaPkms**: Lista de todos os Pokémon
- **PkmInfo**: Informações detalhadas de um Pokémon
- **PkmAtks**: Ataques disponíveis
- **PkmCP**: Estatísticas de CP
- **Itens**: Lista de itens do jogo
- **News**: Notícias e eventos
- **Guide**: Guia do usuário
- **Contact**: Informações de contato
- **Settings**: Configurações do app
- **Loading**: Tela de carregamento
- **Logout**: Sair da aplicação

**EN:**
- **Splash**: Initial loading screen
- **Login**: User authentication
- **Main**: Main application screen
- **ListaPkms**: List of all Pokémon
- **PkmInfo**: Detailed Pokémon information
- **PkmAtks**: Available attacks
- **PkmCP**: CP statistics
- **Itens**: Game items list
- **News**: News and events
- **Guide**: User guide
- **Contact**: Contact information
- **Settings**: App settings
- **Loading**: Loading screen
- **Logout**: Sign out

---

## 📱 Explicação das Telas | Screen Explanations

### 🔐 **Login**
**PT-BR:** Tela de autenticação com login social via Google. Permite aos usuários fazer login usando suas contas Google, com suporte a temas claro/escuro e múltiplos idiomas. Após o login, os dados do usuário são sincronizados com o servidor.

**EN:** Authentication screen with social login via Google. Allows users to sign in using their Google accounts, with support for light/dark themes and multiple languages. After login, user data is synchronized with the server.

### 🏠 **Main (Tela Principal)**
**PT-BR:** Tela principal com menu lateral (drawer navigation) contendo todas as seções do app. Exibe o perfil do usuário logado com foto e nome, e oferece navegação para Pokédex, Notícias, Itens, Guia, Contato e Configurações.

**EN:** Main screen with side menu (drawer navigation) containing all app sections. Displays the logged-in user's profile with photo and name, and provides navigation to Pokédex, News, Items, Guide, Contact, and Settings.

### 📋 **ListaPkms (Lista de Pokémon)**
**PT-BR:** Tela principal da Pokédex com lista completa de todos os Pokémon. Inclui funcionalidades de busca por nome, tipo, número ou geração, filtros avançados, visualização em modal com informações rápidas, e suporte a temas personalizados (incluindo tema especial "minimichelle").

**EN:** Main Pokédex screen with complete list of all Pokémon. Includes search functionality by name, type, number, or generation, advanced filters, modal view with quick information, and support for custom themes (including special "minimichelle" theme).

### 📊 **PkmInfo (Informações do Pokémon)**
**PT-BR:** Tela detalhada de informações de um Pokémon específico. Exibe imagem, tipos, gênero, altura, peso, descrição, estatísticas completas (CP, ATK, DEF, STM) com barras de progresso, fraquezas e resistências por tipo, e informações sobre clima favorável.

**EN:** Detailed information screen for a specific Pokémon. Displays image, types, gender, height, weight, description, complete statistics (CP, ATK, DEF, STM) with progress bars, weaknesses and resistances by type, and favorable weather information.

### ⚔️ **PkmAtks (Ataques do Pokémon)**
**PT-BR:** Tela dedicada aos ataques de um Pokémon específico. Mostra ataques rápidos e carregados com informações de dano, energia, duração e tipo de cada ataque.

**EN:** Screen dedicated to a specific Pokémon's attacks. Shows quick and charged attacks with damage, energy, duration, and type information for each attack.

### 📈 **PkmCP (CP do Pokémon)**
**PT-BR:** Tela de estatísticas de CP (Combat Power) do Pokémon. Exibe gráficos e cálculos de CP máximo, evolução e comparações de poder de combate.

**EN:** Pokémon CP (Combat Power) statistics screen. Displays charts and calculations for maximum CP, evolution, and combat power comparisons.

### 🎒 **Itens (Lista de Itens)**
**PT-BR:** Catálogo completo de itens do jogo Pokémon. Inclui Pokébolas, poções, incensos, ovos e outros itens com descrições e efeitos.

**EN:** Complete catalog of Pokémon game items. Includes Pokéballs, potions, incense, eggs, and other items with descriptions and effects.

### 📰 **News (Notícias e Eventos)**
**PT-BR:** Tela com navegação por abas contendo atualizações do jogo e eventos especiais. Inclui notícias sobre novos Pokémon, eventos, mudanças no jogo e informações sobre eventos especiais.

**EN:** Screen with tab navigation containing game updates and special events. Includes news about new Pokémon, events, game changes, and special event information.

### 📖 **Guide (Guia)**
**PT-BR:** Guia completo do usuário com dicas, tutoriais e informações sobre como usar o aplicativo e jogar Pokémon GO.

**EN:** Complete user guide with tips, tutorials, and information on how to use the app and play Pokémon GO.

### 📞 **Contact (Contato)**
**PT-BR:** Tela de informações de contato com detalhes sobre o desenvolvedor, suporte e canais de comunicação.

**EN:** Contact information screen with details about the developer, support, and communication channels.

### ⚙️ **Settings (Configurações)**
**PT-BR:** Tela de configurações do aplicativo onde os usuários podem alterar tema (claro/escuro), idioma, direção do layout e outras preferências pessoais.

**EN:** App settings screen where users can change theme (light/dark), language, layout direction, and other personal preferences.

### 🔄 **Loading**
**PT-BR:** Tela de carregamento exibida durante operações assíncronas como carregamento de dados da API ou transições entre telas.

**EN:** Loading screen displayed during asynchronous operations such as API data loading or screen transitions.

### 🚪 **Logout**
**PT-BR:** Funcionalidade para sair da aplicação, limpar dados locais e retornar à tela de login.

**EN:** Functionality to sign out of the application, clear local data, and return to the login screen.

---

## ⚙️ Instalação e Execução | Setup & Run

**PT-BR:**
1. **Pré-requisitos:**
   - Node.js 16+
   - React Native CLI
   - Android Studio (para Android)
   - Xcode (para iOS - apenas macOS)

2. **Clone o repositório:**
   ```bash
   git clone [url-do-repositorio]
   cd godexpro_mobile
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Configure as variáveis de ambiente:**
   - Configure as chaves do Firebase
   - Configure o OneSignal
   - Configure a API base URL

5. **Execute o projeto:**
   ```bash
   # Para Android
   npx react-native run-android
   
   # Para iOS
   npx react-native run-ios
   ```

**EN:**
1. **Prerequisites:**
   - Node.js 16+
   - React Native CLI
   - Android Studio (for Android)
   - Xcode (for iOS - macOS only)

2. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd godexpro_mobile
   ```

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Configure environment variables:**
   - Configure Firebase keys
   - Configure OneSignal
   - Configure API base URL

5. **Run the project:**
   ```bash
   # For Android
   npx react-native run-android
   
   # For iOS
   npx react-native run-ios
   ```

---

## 🔧 Configurações | Configuration

**PT-BR:**
- **API Base URL**: `https://godexpro1.herokuapp.com/`
- **OneSignal App ID**: `7fe80b62-8290-4a4c-a7c9-a4f677e14046`
- **Firebase**: Configurado para autenticação e banco de dados
- **Code Push**: Atualizações automáticas habilitadas
- **AsyncStorage**: Armazenamento local de dados do usuário

**EN:**
- **API Base URL**: `https://godexpro1.herokuapp.com/`
- **OneSignal App ID**: `7fe80b62-8290-4a4c-a7c9-a4f677e14046`
- **Firebase**: Configured for authentication and database
- **Code Push**: Automatic updates enabled
- **AsyncStorage**: Local user data storage

---

## 👨‍💻 Autor | Author

**PT-BR:**

<div align="center">

**Rodolfo M. F. Abreu**  
**Arianne Michelle dos Santos Brito**  
Desenvolvedor de software apaixonado por tecnologia, aprendizado contínuo e boas práticas de programação. Sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![GitHub](https://img.shields.io/badge/GitHub-ariannemichelle-black?style=for-the-badge&logo=github)](https://github.com/ArianneYnue)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!

</div>

**EN:**

<div align="center">

**Rodolfo M. F. Abreu**  
**Arianne Michelle dos Santos Brito**  
Software developer passionate about technology, continuous learning, and best programming practices. Always looking for new challenges and opportunities to collaborate on innovative projects.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![GitHub](https://img.shields.io/badge/GitHub-ariannemichelle-black?style=for-the-badge&logo=github)](https://github.com/ArianneYnue)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Feel free to get in touch for questions, suggestions, or collaborations!

</div>

---

<div align="center">
  <b>Feito com 💙 para estudos de React Native, desenvolvimento móvel e aplicações Pokémon.<br/>
  Made with 💙 for React Native, mobile development and Pokémon application studies.</b>
</div>

---

<div align="center" id="english-version">
  <b>🇺🇸 English version above | <a href="#top">🇧🇷 Versão em português acima</a></b>
</div>
