import React, { useState, useEffect } from 'react';

const GitHubCard = ({ username }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
      <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} style={{ width: '100px', borderRadius: '50%' }} />
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <ul>
        <li>Followers: {userData.followers}</li>
        <li>Following: {userData.following}</li>
        <li>Public Repos: {userData.public_repos}</li>
      </ul>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
};

export default GitHubCard;
