import styles from "./DotArt.module.css";

/* ---------------------------------------------------------------
   Decorative dot-matrix halftone artwork (no profile photo).
   The mountain silhouette is generated at render time and the dots
   are grouped into 8 opacity buckets, so the whole SVG is only
   ~8 <path> elements regardless of grid size.
---------------------------------------------------------------- */

const COLS = 84;
const ROWS = 34;
const CELL = 5; // px in the SVG viewBox
const LEVELS = 8;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/** Deterministic pseudo-random in [0,1) so SSR and CSR match. */
const noise = (i, j) => {
  const v = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
  return v - Math.floor(v);
};

/** Catmull-Rom interpolation through the ridge key points. */
const interpolate = (points, x) => {
  let i = 0;
  while (i < points.length - 2 && points[i + 1][0] < x) i += 1;

  const [x0, y0] = points[Math.max(0, i - 1)];
  const [x1, y1] = points[i];
  const [x2, y2] = points[i + 1];
  const [x3, y3] = points[Math.min(points.length - 1, i + 2)];

  const t = x2 === x1 ? 0 : (x - x1) / (x2 - x1);
  const t2 = t * t;
  const t3 = t2 * t;

  return (
    0.5 *
    (2 * y1 +
      (-y0 + y2) * t +
      (2 * y0 - 5 * y1 + 4 * y2 - y3) * t2 +
      (-y0 + 3 * y1 - 3 * y2 + y3) * t3)
  );
};

/** Ridge line of a small mountain range: height above baseline, 0..1. */
const RIDGE = [
  [0, 0.16],
  [0.07, 0.3],
  [0.15, 0.58],
  [0.23, 0.4],
  [0.31, 0.64],
  [0.41, 0.97],
  [0.49, 0.7],
  [0.57, 0.88],
  [0.65, 0.52],
  [0.73, 0.7],
  [0.83, 0.4],
  [0.92, 0.52],
  [1, 0.2],
];

const heightAt = (x) => {
  const base = interpolate(RIDGE, x);
  // small jagged variation so the ridge reads as rock, not a smooth curve
  const jag = 0.035 * Math.sin(x * Math.PI * 17) + 0.02 * Math.sin(x * Math.PI * 41);
  return clamp(base + jag, 0.05, 1);
};

function buildPaths() {
  const buckets = Array.from({ length: LEVELS }, () => []);

  for (let i = 0; i < COLS; i += 1) {
    const x = i / (COLS - 1);
    const topRow = (1 - heightAt(x)) * (ROWS - 1);

    // fade out towards the left/right edges of the strip
    const edge = clamp(Math.min(x, 1 - x) / 0.14, 0, 1);

    for (let j = 0; j < ROWS; j += 1) {
      const dist = j - topRow;
      if (dist < -0.5) continue; // above the silhouette

      // speckled / dithered ridge line
      if (dist < 1.2 && noise(i, j) > 0.55) continue;

      const depth = clamp(dist / (ROWS * 0.55), 0, 1);
      let opacity = (1 - depth) ** 1.15 * edge;

      // slight horizontal shimmer so flat areas do not look mechanical
      opacity *= 0.86 + 0.14 * noise(i + 3, j + 7);

      if (opacity < 0.05) continue;

      const level = clamp(
        Math.round(opacity * (LEVELS - 1)),
        0,
        LEVELS - 1
      );
      const size = (1.3 + (level / (LEVELS - 1)) * 2.5).toFixed(2);
      const px = (i * CELL + (CELL - Number(size)) / 2).toFixed(2);
      const py = (j * CELL + (CELL - Number(size)) / 2).toFixed(2);

      buckets[level].push(`M${px} ${py}h${size}v${size}h-${size}z`);
    }
  }

  return buckets.map((cmds, idx) => ({
    d: cmds.join(""),
    opacity: ((idx + 1) / LEVELS).toFixed(2),
  }));
}

export default function DotArt() {
  const paths = buildPaths();

  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`}
        role="presentation"
        focusable="false"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="dotArtGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BEA" />
            <stop offset="55%" stopColor="#4B7BF2" />
            <stop offset="100%" stopColor="#6C9BFF" />
          </linearGradient>
        </defs>
        <g fill="url(#dotArtGrad)">
          {paths.map((p) => (
            <path key={p.opacity} d={p.d} fillOpacity={p.opacity} />
          ))}
        </g>
      </svg>
    </div>
  );
}
