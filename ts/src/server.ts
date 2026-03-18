import app from './index';

const PORT = Number(process.env.PORT) || 3004;

app.listen(PORT, () => {
  console.log(`🚀 Portfolio API Server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`🏥 Health: http://localhost:${PORT}/health`);
});
