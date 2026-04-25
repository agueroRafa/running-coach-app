import { useMemo, useState } from "react";
import { monthPlan } from "./data/trainings";

const formatDate = (isoDate) =>
  new Date(`${isoDate}T12:00:00`).toLocaleDateString("es-AR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

function App() {
  const sortedDays = useMemo(
    () =>
      [...monthPlan.days].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      ),
    []
  );

  const [selectedDate, setSelectedDate] = useState(sortedDays[0]?.date ?? null);
  const selectedTraining =
    sortedDays.find((day) => day.date === selectedDate) ?? sortedDays[0];

  return (
    <div className="app-shell">
      <div className="background-overlay" />
      <main className="layout">
        <header className="hero">
          <p className="kicker">Running Coach Planner</p>
          <h1>{monthPlan.monthLabel}</h1>
          <p className="subtitle">
            Plan de {monthPlan.athleteName}. Editas entrenamientos desde
            <code>src/data/trainings.js</code> y redeploy cada 15 dias.
          </p>
        </header>

        <section className="calendar-card">
          <h2>Calendario de entrenamientos</h2>
          <div className="calendar-grid">
            {sortedDays.map((training) => {
              const isActive = training.date === selectedTraining?.date;

              return (
                <button
                  key={training.date}
                  className={`day-card ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedDate(training.date)}
                  type="button"
                >
                  <span className="day-date">{formatDate(training.date)}</span>
                  <strong>{training.title}</strong>
                  <span>{training.summary}</span>
                </button>
              );
            })}
          </div>
        </section>

        {selectedTraining && (
          <section className="detail-card">
            <h3>Detalle del dia</h3>
            <p className="detail-date">{formatDate(selectedTraining.date)}</p>
            <h4>{selectedTraining.title}</h4>
            <div className="detail-metrics">
              <span>Distancia: {selectedTraining.distance}</span>
              <span>Intensidad: {selectedTraining.effort}</span>
            </div>
            <p className="detail-description">{selectedTraining.detail}</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
