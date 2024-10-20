
import { hello_backend } from 'declarations/hello_backend';
import React, { useState, useEffect } from 'react';
import './index.scss';

// Mock data fetching function to simulate interaction with Motoko backend
// In real implementation, you'd call your Motoko backend here using ICP's agent.js
const fetchArtworks = async () => {
  // Replace with actual canister call
  return [
    { id: 1, title: 'Sunset Dream', artist: 'Tim Henson', imageUrl: 'https://i.pinimg.com/564x/29/4f/e0/294fe0fb233d16475401c2a219da8748.jpg' },
    { id: 2, title: 'Mountain Spirit', artist: 'Bobby', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a44faf8-ae2f-4df6-9e4c-ff80037e83d6/d5o68ri-244b25dc-8c02-4d32-9364-75f6623e7ff1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVhNDRmYWY4LWFlMmYtNGRmNi05ZTRjLWZmODAwMzdlODNkNlwvZDVvNjhyaS0yNDRiMjVkYy04YzAyLTRkMzItOTM2NC03NWY2NjIzZTdmZjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9oQGdU0a0sOLAzbhlGjevkyGcNRHc8S-xLdTkE8763U' },
    { id: 3, title: 'Ocean Waves', artist: 'Charlie Puth', imageUrl: 'https://i.ebayimg.com/images/g/os0AAOSwoZRj9hxv/s-l1200.jpg' },
  ];
};

function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const loadArtworks = async () => {
      const data = await fetchArtworks();
      setArtworks(data);
    };
    loadArtworks();
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Art Gallery</h1>
      <div className="gallery-grid">
        {artworks.map((art) => (
          <div key={art.id} className="gallery-item">
            <img src={art.imageUrl} alt={art.title} className="art-image" />
            <div className="art-details">
              <h2 className="art-title">{art.title}</h2>
              <p className="art-artist">By: {art.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
