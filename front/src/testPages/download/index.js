import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const DownloadZip = () => {
  const [loading, setLoading] = useState(false);

  const downloadZip = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/game/getzip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'test game' }),
      });

      if (!response.ok) {
        throw new Error('Erro ao baixar o arquivo');
      }

      const blob = await response.blob();
      saveAs(blob, 'game-name.zip');
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={downloadZip} disabled={loading}>
        Baixar arquivo .zip
      </button>
    </div>
  );
};

export default DownloadZip;