import { useSelector } from 'react-redux'
import { selectTheme } from './store/slice/themeSlice'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const theme = useSelector(selectTheme)

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <header className="flex justify-between items-center p-6 border-b border-[var(--border-color)]">
        <h1 className="text-2xl font-bold">HomeTruth AI</h1>
        <ThemeToggle />
      </header>
      
      <main className="p-8">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Theme Engine Demo</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
              <h3 className="text-lg font-medium mb-2">Card Component</h3>
              <p className="text-[var(--text-secondary)]">
                This card uses CSS variables defined in theme. The background adapts to dark/light mode automatically.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
              <h3 className="text-lg font-medium mb-2">Theme Status</h3>
              <p className="text-[var(--text-secondary)]">
                Current theme: <span className="font-mono font-bold">{theme}</span>
              </p>
              <p className="text-[var(--text-secondary)] mt-2">
                Theme persists via localStorage on page refresh.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="text-lg font-medium mb-4">CSS Variables Available</h3>
            <div className="grid gap-2 text-sm font-mono">
              <div className="flex justify-between">
                <span>--bg-primary</span>
                <span className="text-[var(--text-secondary)]">{theme === 'dark' ? '#111827' : '#ffffff'}</span>
              </div>
              <div className="flex justify-between">
                <span>--bg-secondary</span>
                <span className="text-[var(--text-secondary)]">{theme === 'dark' ? '#1f2937' : '#f9fafb'}</span>
              </div>
              <div className="flex justify-between">
                <span>--text-primary</span>
                <span className="text-[var(--text-secondary)]">{theme === 'dark' ? '#f9fafb' : '#1f2937'}</span>
              </div>
              <div className="flex justify-between">
                <span>--text-secondary</span>
                <span className="text-[var(--text-secondary)]">{theme === 'dark' ? '#9ca3af' : '#6b7280'}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App