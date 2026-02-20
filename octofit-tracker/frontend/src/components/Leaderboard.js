import React, { useEffect, useState } from 'react';
import JsonPretty from './JsonPretty';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Leaderboard API endpoint:', endpoint);
        console.log('Fetched leaderboard data:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <div className="card shadow border-0 mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-success display-6">Leaderboard</h2>
        {data.length === 0 ? (
          <div className="alert alert-info">No leaderboard data found.</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-success">
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={item.id || idx}>
                    {Object.values(item).map((val, i) => (
                      <td key={i}><JsonPretty value={val} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
