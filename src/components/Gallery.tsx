import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTheme } from '../context/ThemeContext'
import { groups } from '../data/shots'

export default function Gallery() {
  const { theme } = useTheme()
  const ref = useScrollReveal<HTMLElement>()
  const [active, setActive] = useState(groups[0].id)

  const group = groups.find((g) => g.id === active) ?? groups[0]

  return (
    <section ref={ref} id="gallery" className="reveal w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: theme.accent }}>
          What is in it
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: theme.fg }}>
          Play, study, watch
        </h2>

        <div className="flex gap-2 mb-6" role="tablist">
          {groups.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={g.id === active}
              onClick={() => setActive(g.id)}
              className="px-4 py-2 rounded-lg text-sm font-mono transition-colors"
              style={{
                backgroundColor: g.id === active ? theme.accent : 'transparent',
                color: g.id === active ? theme.bg : theme.comment,
                border: `1px solid ${g.id === active ? theme.accent : theme.bg1}`,
              }}
            >
              {g.title}
            </button>
          ))}
        </div>

        <p className="max-w-2xl text-sm leading-relaxed mb-10" style={{ color: theme.comment }}>
          {group.blurb}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {group.shots.map((shot) => (
            <figure key={shot.src}>
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="w-full rounded-lg"
                style={{ border: `1px solid ${theme.bg1}` }}
              />
              <figcaption className="text-xs mt-2.5 leading-relaxed" style={{ color: theme.comment }}>
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <figure className="mt-12">
          <img
            src="tiling.png"
            alt="The lobby reflowing inside narrow tiled panes"
            loading="lazy"
            className="w-full rounded-lg"
            style={{ border: `1px solid ${theme.bg1}` }}
          />
          <figcaption className="text-xs mt-2.5" style={{ color: theme.comment }}>
            The same pages in narrow tiled panes. Nothing clips.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
