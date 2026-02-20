import React from 'react';

const JsonPretty = ({ value }) => {
  if (typeof value !== 'object' || value === null) return value;
  return (
    <pre style={{ margin: 0, background: '#f8f9fa', borderRadius: '6px', padding: '4px 8px', fontSize: '0.95em', color: '#3a86ff', fontFamily: 'Fira Mono, monospace' }}>
      {JSON.stringify(value, null, 2)}
    </pre>
  );
};

export default JsonPretty;
