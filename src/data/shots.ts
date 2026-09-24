export interface Shot {
  src: string
  alt: string
  caption: string
}

export interface Group {
  id: string
  title: string
  blurb: string
  shots: Shot[]
}

export const groups: Group[] = [
  {
    id: 'play',
    title: 'Play',
    blurb:
      'Seek an opponent, take on the computer, or set up a local game on one board. Chat, takebacks and desktop notifications included.',
    shots: [
      {
        src: 'screenshot-lobby.png',
        alt: 'The lobby, with Lichess TV, the puzzle of the day, news and games in progress',
        caption: 'The lobby: TV, the daily puzzle, news, and whatever you left running.',
      },
      {
        src: 'screenshot.png',
        alt: 'A board mid-game with the Stockfish evaluation, a best-move arrow and move annotations',
        caption: 'A game, with Stockfish running beside it and the best move drawn on the board.',
      },
      {
        src: 'screenshot-challenges.png',
        alt: 'Incoming and outgoing challenges',
        caption: 'Challenges in both directions.',
      },
      {
        src: 'screenshot-chat.png',
        alt: 'In-game chat panel',
        caption: 'Chat, without leaving the keyboard.',
      },
    ],
  },
  {
    id: 'study',
    title: 'Study',
    blurb:
      'Local Stockfish to depth 245, Lichess server analysis with its move marks, the opening explorer, and analysis boards you can save.',
    shots: [
      {
        src: 'screenshot-study.jpg',
        alt: 'A study board with saved variations',
        caption: 'Analysis boards from any position, with variations you keep.',
      },
      {
        src: 'screenshot-openings.png',
        alt: 'Opening explorer showing popular continuations with win rates',
        caption: 'The opening explorer, over the Masters and Lichess databases.',
      },
      {
        src: 'screenshot-explorer.png',
        alt: 'Explorer view with move statistics',
        caption: 'What everyone else played from here, and how it went for them.',
      },
      {
        src: 'screenshot-puzzle.png',
        alt: 'A tactics puzzle on the board',
        caption: 'The puzzle of the day, and every theme behind it.',
      },
      {
        src: 'screenshot-puzzles.png',
        alt: 'Puzzle themes listing',
        caption: 'Pick a theme and grind it.',
      },
    ],
  },
  {
    id: 'watch',
    title: 'Watch',
    blurb:
      'Lichess TV on every channel, tournament broadcasts, and any game you are watching opened on your own board.',
    shots: [
      {
        src: 'screenshot-tv.png',
        alt: 'Lichess TV with the channel list',
        caption: 'Lichess TV, every channel.',
      },
      {
        src: 'screenshot-broadcast.png',
        alt: 'A tournament broadcast with the games listed',
        caption: 'Tournament broadcasts — the reason this runs on a TV in the corner.',
      },
      {
        src: 'screenshot-broadcast-round.jpg',
        alt: 'A single broadcast round with its boards',
        caption: 'A round, board by board.',
      },
      {
        src: 'screenshot-profile.png',
        alt: 'Player profile with a ratings chart and game history',
        caption: 'Profiles: the ratings chart, the history, the accuracy.',
      },
    ],
  },
]
