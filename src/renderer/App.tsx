import React, { useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handlePing = async () => {
    const response = await (window as any).electronAPI.ping();
    setMessage(`Response from main process: ${response}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Axiom</h1>
        <p style={styles.subtitle}>Digital Asset Management</p>
      </div>
      
      <div style={styles.content}>
        <button onClick={handlePing} style={styles.button}>
          Test Connection
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100vh',
    backgroundColor: '#f5f5f7',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    padding: '60px 40px 20px 40px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #d2d2d7',
  },
  title: {
    margin: 0,
    fontSize: '48px',
    fontWeight: 600,
    color: '#1d1d1f',
  },
  subtitle: {
    margin: '8px 0 0 0',
    fontSize: '21px',
    color: '#6e6e73',
    fontWeight: 400,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '17px',
    fontWeight: 500,
    color: '#ffffff',
    backgroundColor: '#0071e3',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  message: {
    marginTop: '20px',
    fontSize: '17px',
    color: '#1d1d1f',
  },
};

export default App;