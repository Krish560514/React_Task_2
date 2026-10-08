import { useEffect, useState } from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Student Management System</h1>
    </header>
  );
}

function StudentProfile({
  name,
  department,
  year,
  count,
  onComplete,
  onReset
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div className="student-profile">
      <h2>Student Practice Tracker</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <h3>Practice Count: {count}</h3>

      <button onClick={onComplete}>
        Complete Practice
      </button>

      <button onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Student Management System</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const studentName = 'Anu';
  const studentDepartment = 'CSE';
  const studentYear = '3rd Year';

  const completePractice = () => {
    setCount(count + 1);
  };

  const resetPractice = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <Header />

      <main>
        <button
          className="toggle-button"
          onClick={() => setShowProfile(!showProfile)}
        >
          {showProfile ? 'Hide Profile' : 'Show Profile'}
        </button>

        {showProfile && (
          <StudentProfile
            name={studentName}
            department={studentDepartment}
            year={studentYear}
            count={count}
            onComplete={completePractice}
            onReset={resetPractice}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;