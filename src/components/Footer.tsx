import { useTheme } from '../context/ThemeContext'

const LINKS = [
  { label: 'Source', href: 'https://github.com/harbefas/gambito' },
  { label: 'Install', href: 'https://github.com/harbefas/gambito/blob/master/docs/install.md' },
  { label: 'Guide', href: 'https://github.com/harbefas/gambito/blob/master/docs/guide.md' },
  { label: 'Keyboard', href: 'https://github.com/harbefas/gambito/blob/master/docs/keyboard.md' },
  { label: 'CLI & protocol', href: 'https://github.com/harbefas/gambito/blob/master/docs/cli.md' },
  { label: 'Harbefas', href: 'https://harbefas.github.io' },
]

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="w-full py-12 px-4" style={{ borderTop: `1px solid ${theme.bg1}` }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <img src="mark.svg" alt="" className="w-8 h-8 opacity-60" />

        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: theme.comment }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: theme.comment }}>
          <span>Gambito</span>
          <span>&middot;</span>
          <span>MIT licensed</span>
          <span>&middot;</span>
          <span>Not affiliated with Lichess</span>
        </div>
      </div>
    </footer>
  )
}
