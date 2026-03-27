const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-kanto-orange/30 border-t-kanto-orange rounded-full animate-spin" />
        <p className="text-kanto-brown/60 text-sm">Sandali lang...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
