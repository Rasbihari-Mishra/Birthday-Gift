import React from 'react';

const PandaGallery: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  const imgs = images.length ? images : ['https://placebear.com/200/200', 'https://placebear.com/201/200'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px,1fr))', gap: 8 }}>
      {imgs.map((src, i) => (
        <img key={i} src={src} alt={`panda-${i}`} style={{ width: '100%', borderRadius: 8 }} />
      ))}
    </div>
  );
};

export default PandaGallery;
