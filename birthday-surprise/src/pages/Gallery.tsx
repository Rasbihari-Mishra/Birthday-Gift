import React from 'react';
import PandaGallery from '../components/PandaGallery';
import MusicPlayer from '../components/MusicPlayer';

const Gallery: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h3>Gallery</h3>
      <PandaGallery />
      <div style={{ marginTop: 12 }}>
        <MusicPlayer src="/assets/sample.mp3" title="Happy Tune" />
      </div>
    </div>
  );
};

export default Gallery;
