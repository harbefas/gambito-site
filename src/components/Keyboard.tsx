import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTheme } from '../context/ThemeContext'

const KEYS = [
  { k: 's', what: 'find an opponent' },
  { k: 'c', what: 'play the computer' },
  { k: 'hjkl', what: 'move a piece' },
  { k: 'i', what: 'type a move — Nf3, e2e4' },
  { k: '[ ]', what: 'step through the game' },
  { k: 'e', what: 'engine on and off' },
  { k: 'a', what: 'analysis board from here' },
  { k: 'z', what: 'zen mode — just the board' },
  { k: ':', what: 'command line' },
  { k: '?', what: 'every key, on screen' },
]

export default function Keyboard() {
  const { theme } = useTheme()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="keyboard" className="reveal w-full py-20 px-4" style={{ backgroundColor: theme.bg1 }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: theme.accent }}>
          The whole point
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: theme.fg }}>
          Every control has a key, and the button shows it.
        </h2>

        <p className="max-w-2xl text-base leading-relaxed mb-12" style={{ color: theme.operator }}>
          Not a shortcut sheet you are expected to memorise: the key is printed on the control, so
          you learn it by using the thing. A button without a hint is treated as an unfinished
          feature.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <figure>
            <img
              src="screenshot-lobby.png"
              alt="The lobby, with a key hint printed on every button and a key bar along the bottom"
              className="w-full rounded-lg"
              style={{ border: `1px solid ${theme.bg}` }}
            />
            <figcaption className="text-xs mt-3 font-mono" style={{ color: theme.comment }}>
              Look at the bottom bar, and at the corner of every button.
            </figcaption>
          </figure>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3">
            {KEYS.map((row) => (
              <li key={row.k} className="flex items-baseline gap-3">
                <kbd
                  className="font-mono text-xs px-2 py-1 rounded shrink-0 min-w-[3.25rem] text-center"
                  style={{ backgroundColor: theme.bg, color: theme.accent, border: `1px solid ${theme.bg}` }}
                >
                  {row.k}
                </kbd>
                <span className="text-sm" style={{ color: theme.comment }}>
                  {row.what}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Made for tiling',
              body: 'Every page reflows from a full screen down to a narrow column, and scrolls rather than clipping.',
            },
            {
              title: 'A daemon, like emacs --daemon',
              body: 'Closing a window keeps your games, clocks and streams running. Open the same game in two windows, or drive it from the CLI.',
            },
            {
              title: 'Your theme, live',
              body: 'One colors.toml in the Quickshell format — from matugen, pywal or a script of your own — and it follows along.',
            },
          ].map((c) => (
            <div key={c.title}>
              <h3 className="text-base font-semibold mb-2" style={{ color: theme.accent }}>
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: theme.comment }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
