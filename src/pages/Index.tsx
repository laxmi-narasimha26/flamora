
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to splash screen on initial load
    navigate('/splash');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-flamora-purple/20">
      <p>Redirecting to Kafe Flamora...</p>
    </div>
  );
};

export default Index;
