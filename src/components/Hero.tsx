import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeContext'

// Two lines, not one: the installer ships a prebuilt binary, so the runtime
// deps have to come first or `gambito open` finds no Quickshell. Rust is not
// among them -- that is only for building from source.
const DEPS = 'sudo pacman -S --needed quickshell stockfish ttf-dejavu libnotify'
const INSTALL = 'curl -fsSL https://raw.githubusercontent.com/harbefas/gambito/master/scripts/install.sh | sh'
const BOTH = `${DEPS}\n${INSTALL}`

export default function Hero() {
  const { theme, setTheme, isDark } = useTheme()
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard?.writeText(BOTH).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      },
      () => undefined,
    )
  }

  return (
    <section className="relative flex flex-col items-center pt-20 pb-12 px-4 text-center overflow-hidden">
      <div
        className="pointer-events-none absolute -inset-20"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 25%, ${theme.accent}18 0%, ${theme.accent}08 30%, transparent 60%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)'} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <img src="mark.svg" alt="" className="w-16 h-16 mb-6 relative z-10" />

      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4 relative z-10" style={{ color: theme.fg }}>
        Gambito
      </h1>

      <p className="max-w-xl text-lg mb-3 relative z-10" style={{ color: theme.fg }}>
        A keyboard-first Lichess client for tiling desktops.
      </p>

      <p className="max-w-xl text-sm mb-8 relative z-10" style={{ color: theme.comment }}>
        Rust daemon · Quickshell UI · Stockfish analysis. Every action has a key, every window
        tiles, and the games keep running when you close them.
      </p>

      <div className="relative z-10 mb-8">
        <ThemeToggle onThemeChange={setTheme} currentTheme={theme} />
      </div>

      <div
        className="relative z-10 w-full max-w-3xl rounded-lg mb-6 text-left"
        style={{ backgroundColor: theme.bg1, border: `1px solid ${theme.bg1}` }}
      >
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ borderBottom: `1px solid ${theme.bg}` }}
        >
          <span className="font-mono text-xs" style={{ color: theme.comment }}>
            Arch, including any Quickshell setup
          </span>
          <button
            onClick={copy}
            className="font-mono text-xs transition-opacity hover:opacity-70"
            style={{ color: copied ? theme.string : theme.accent }}
          >
            {copied ? 'copied' : 'copy both'}
          </button>
        </div>
        <pre className="px-4 py-3 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-all">
          <code>
            <span style={{ color: theme.accent }}>$</span>{' '}
            <span style={{ color: theme.fg }}>{DEPS}</span>
            {'\n'}
            <span style={{ color: theme.accent }}>$</span>{' '}
            <span style={{ color: theme.fg }}>{INSTALL}</span>
          </code>
        </pre>
      </div>

      <div className="flex gap-4 relative z-10">
        <a
          href="https://github.com/harbefas/gambito"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: theme.accent, color: theme.bg, boxShadow: `0 4px 20px ${theme.accent}40` }}
        >
          Source
        </a>
        <a
          href="https://github.com/harbefas/gambito/blob/master/docs/install.md"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{ border: `1px solid ${theme.bg1}`, color: theme.fg }}
        >
          Install guide
        </a>
      </div>

      <figure className="relative z-10 mt-14 w-full max-w-4xl">
        <img
          src="demo.gif"
          alt="Playing a game, turning on Stockfish, opening a second tiled window and entering zen mode, all from the keyboard"
          className="w-full rounded-lg"
          style={{ border: `1px solid ${theme.bg1}` }}
        />
        <figcaption className="text-xs mt-3 font-mono" style={{ color: theme.comment }}>
          Playing, analysing, tiling a second window and entering zen mode. No mouse.
        </figcaption>
      </figure>
    </section>
  )
}
