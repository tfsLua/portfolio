import { useEffect, useState } from "react";

const phases = ["Lua nova", "Lua crescente", "Lua cheia", "Lua minguante"];

function MoonPhase({ index, active }: { index: number; active: boolean }) {
  const size = active ? 58 : 42;
  const center = size / 2;
  const radius = size * 0.34;
  const className = `moon-phase ${active ? "moon-phase-active" : ""}`;

  return (
    <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={center} cy={center} r={radius} className="moon-phase-base" />
      {index === 0 && <circle cx={center} cy={center} r={radius - 1} className="moon-phase-shadow" />}
      {index === 1 && <circle cx={center + radius * 0.42} cy={center - radius * 0.02} r={radius} className="moon-phase-shadow" />}
      {index === 2 && <rect x={center} y={center - radius} width={radius} height={radius * 2} className="moon-phase-shadow" />}
      {index === 3 && <circle cx={center - radius * 0.42} cy={center - radius * 0.02} r={radius} className="moon-phase-shadow" />}
    </svg>
  );
}

export default function MoonLoader() {
  const [activePhase, setActivePhase] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    const minimumDuration = 1500;
    const phaseTimer = window.setInterval(() => {
      setActivePhase((current) => (current + 1) % phases.length);
    }, 360);

    const finish = () => {
      const remaining = Math.max(0, minimumDuration - (Date.now() - startedAt));
      window.setTimeout(() => setIsReady(true), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearInterval(phaseTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  if (isReady) return null;

  return (
    <div className="moon-loader" role="status" aria-live="polite" aria-label={`Carregando portfólio: ${phases[activePhase]}`}>
      <div className="moon-loader-orbit" aria-hidden="true" />
      <div className="moon-loader-content">
        <div className="moon-loader-phases">
          {phases.map((phase, index) => (
            <MoonPhase key={phase} index={index} active={activePhase === index} />
          ))}
        </div>
        <p className="moon-loader-kicker">Portfólio profissional</p>
        <p className="moon-loader-label">{phases[activePhase]}</p>
        <span className="moon-loader-dots" aria-hidden="true">···</span>
      </div>
    </div>
  );
}
