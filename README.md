# Nedolingo - Learning Quiz App

A simple, interactive quiz application built with React + Vite, inspired by language learning platforms like Duolingo.

## Features

- Multiple choice and text input questions
- Real-time feedback on answers
- Progress tracking
- Score calculation
- Review of incorrect answers at the end
- Responsive design with gradient UI

## Live Demo

Once deployed to GitHub Pages, your app will be available at:
`https://[your-username].github.io/nedolingo/`

## Local Development

### Prerequisites

- Node.js (v18+)
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:5173` in your browser.

### Available Scripts

```bash
pnpm dev      # Start development server with hot reload
pnpm build    # Build for production
pnpm preview  # Preview production build locally
pnpm deploy   # Build and deploy to GitHub Pages
```

## Deploying to GitHub Pages

### One-Command Deployment

```bash
# Make sure you've committed all changes first
pnpm deploy
```

This will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Your site will be live at `https://[your-username].github.io/nedolingo/`

### First-Time Setup

1. **Create GitHub repository:**

```bash
git init
git add .
git commit -m "Initial commit: Nedolingo quiz app"
git remote add origin https://github.com/[your-username]/nedolingo.git
git branch -M main
git push -u origin main
```

2. **Update base path in `vite.config.js`:**

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this to your repository name
})
```

3. **Deploy:**

```bash
pnpm deploy
```

4. **Enable GitHub Pages:**
   - Go to repository **Settings** > **Pages**
   - Source should automatically be set to `gh-pages` branch
   - Your site will be live in a few minutes

### Alternative: Using GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v2
        with:
          version: 10

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install
      - run: pnpm build

      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then just push to main and it will auto-deploy!

## Project Structure

```
nedolingo/
├── index.html              # Entry HTML file
├── src/
│   ├── main.jsx           # App entry point
│   ├── App.jsx            # Main quiz component
│   ├── index.css          # Global styles + Tailwind directives
│   └── prototype.js       # Original prototype (kept for reference)
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Technologies Used

- **React 19** - UI framework
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon system
- **pnpm** - Fast, disk space efficient package manager
- **gh-pages** - Deploy to GitHub Pages

## Customization

### Adding New Questions

Edit the `mockExercises` array in `src/App.jsx`:

```javascript
const mockExercises = [
  {
    id: 1,
    question: "Your question here?",
    type: "multiple-choice", // or "text-input"
    options: ["Option 1", "Option 2", "Option 3", "Option 4"], // for multiple-choice
    correctAnswer: "Option 2"
  },
  // Add more questions...
];
```

### Changing Colors

The app uses Tailwind CSS classes. To change the color scheme, modify the gradient classes in `src/App.jsx`:

- Main gradient background: `from-blue-50 to-purple-50`
- Button gradients: `from-blue-500 to-purple-600`
- Progress bar: `from-blue-500 to-purple-600`

You can also extend the Tailwind theme in `tailwind.config.js`.

### Loading Questions from JSON

To load questions from an external file:

1. Create `public/questions.json`:

```json
[
  {
    "id": 1,
    "question": "Your question?",
    "type": "multiple-choice",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": "A"
  }
]
```

2. Update `src/App.jsx`:

```javascript
import { useState, useEffect } from 'react';

export default function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('/questions.json')
      .then(res => res.json())
      .then(data => setExercises(data));
  }, []);

  // rest of component...
}
```

## Browser Compatibility

Works in all modern browsers that support:
- ES6+ JavaScript
- React 19
- CSS Grid and Flexbox

## License

MIT License - feel free to use and modify as needed!

## Contributing

This is a simple prototype. Feel free to fork and enhance!

Possible improvements:
- Load questions from external JSON file
- Add timer functionality
- Include different difficulty levels
- Add sound effects and animations
- Implement user authentication and progress saving
- Add more question types (matching, ordering, drag-and-drop)
- Support for multiple languages
- Difficulty-based scoring system
- Leaderboard functionality
