import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTheme } from '../context/ThemeContext'

/** A Lichess client with Stockfish wired in reads as a cheating tool until it
 *  says otherwise. This says otherwise, above the fold of anyone's suspicion. */
export default function FairPlay() {
  const { theme } = useTheme()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} id="fair-play" className="reveal w-full py-20 px-4" style={{ backgroundColor: theme.bg1 }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: theme.accent }}>
          Fair play
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: theme.fg }}>
          The engine is blocked in your own live games.
        </h2>

        <p className="text-base leading-relaxed mb-4" style={{ color: theme.operator }}>
          Gambito runs Stockfish, so the reasonable first question is whether it helps you cheat.
          It does not, and the answer is not a policy in a README: the daemon refuses engine
          evaluation, the opening explorer and server analysis while a live game of yours is
          running. The UI does not get to ask nicely, because the refusal is one layer below it.
        </p>

        <p className="text-base leading-relaxed mb-8" style={{ color: theme.operator }}>
          Analysis comes back the moment the game is over, on finished games, on other people&rsquo;s
          games, and on any analysis board. Lichess&rsquo;s API terms apply throughout: no automated
          play, no engine assistance, and nothing that hammers the API.
        </p>

        <div
          className="rounded-lg p-5 font-mono text-sm"
          style={{ backgroundColor: theme.bg, border: `1px solid ${theme.bg1}` }}
        >
          <p style={{ color: theme.comment }}>
            <span style={{ color: theme.accent }}>{'// '}</span>
            enforced in the daemon, not in the interface
          </p>
          <p className="mt-2" style={{ color: theme.fg }}>
            engine · explorer · analysis{' '}
            <span style={{ color: theme.number }}>blocked</span> while your live game runs
          </p>
        </div>

        <p className="text-sm mt-6" style={{ color: theme.comment }}>
          Never paste a Lichess token into an issue, a log or a screenshot. Tokens live in{' '}
          <code className="font-mono">~/.config/gambito/token</code>; if one leaks, revoke it in
          your Lichess account settings.
        </p>
      </div>
    </section>
  )
}
