# Portfolio Website

A full-stack portfolio website built with modern web technologies to showcase projects, skills, and experience. Features a responsive React frontend and a robust Node.js/Express backend with MongoDB integration.

## ✨ Features

- **Responsive Design** - Mobile-first approach with React + Vite for optimal performance
- **Dynamic Content** - Backend APIs to manage projects, skills, and experience
- **Authentication** - Secure user authentication system
- **Contact Management** - Contact form with database persistence
- **Hot Module Replacement (HMR)** - Fast development experience with Vite
- **Professional UI** - Clean, modern interface for showcasing portfolios

## 🛠️ Tech Stack

### Frontend
- **React 19.x** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool
- **CSS** - Custom styling with responsive design
- **ESLint** - Code quality and consistency

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data persistence
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
Portfolio/
├── frontend/              # React + Vite frontend application
│   ├── src/
│   │   ├── App.jsx       # Main component
│   │   ├── App.css       # Styling
│   │   ├── main.jsx      # Entry point
│   │   └── assets/       # Images and SVGs
│   ├── public/           # Static files
│   ├── index.html        # HTML template
│   └── package.json      # Frontend dependencies
│
├── server/               # Node.js/Express backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── server.js         # Express server setup
│   ├── .env              # Environment variables
│   └── package.json      # Backend dependencies
│
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jeewa-hash/Portfolio.git
   cd Portfolio
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```
   
   Create a `.env` file in the `server` directory:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

## 📦 Running the Application

### Development Mode

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm start
```
Server will run on `http://localhost:5000`

**Terminal 2 - Start Frontend Development Server:**
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173` (or as shown in terminal)

### Production Build

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Preview Production Build:**
```bash
cd frontend
npm run preview
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout

### Projects
- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project (auth required)
- `PUT /api/projects/:id` - Update project (auth required)
- `DELETE /api/projects/:id` - Delete project (auth required)

### Skills
- `GET /api/skills` - Fetch all skills
- `POST /api/skills` - Add new skill (auth required)
- `DELETE /api/skills/:id` - Remove skill (auth required)

### Experience
- `GET /api/experience` - Fetch all experience entries
- `POST /api/experience` - Add experience (auth required)
- `PUT /api/experience/:id` - Update experience (auth required)
- `DELETE /api/experience/:id` - Delete experience (auth required)

### Contact
- `POST /api/contact` - Submit contact form message

## 📝 Scripts

### Frontend Scripts
- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

### Backend Scripts
- `npm start` - Start the server
- `npm run dev` - Start with nodemon for auto-restart

## 🔒 Environment Variables

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Frontend
The frontend connects to the backend via API calls to `http://localhost:5000/api`

## 📧 Contact Management

The portfolio includes a contact form that submits messages to the database. Messages include:
- Name
- Email
- Subject
- Message
- Timestamp

## 🎨 Customization

### Frontend
- Modify components in `frontend/src/`
- Update styles in `frontend/src/App.css`
- Replace hero image in `frontend/src/assets/`

### Backend
- Add new routes in `server/routes/`
- Create controllers in `server/controllers/`
- Define models in `server/models/`

## 🧪 Code Quality

The frontend includes ESLint configuration for maintaining code quality:

```bash
cd frontend
npm run lint
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Jeewa Hash**

Feel free to fork this project and use it as a template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues & Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/jeewa-hash/Portfolio/issues) on GitHub.

## 🔗 Links

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

**Happy Coding!** 🎉
