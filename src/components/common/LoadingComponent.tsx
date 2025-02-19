import React from "react";

const LoadingComponent = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="size-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 dark:border-gray-600 dark:border-t-blue-400 lg:size-20" />
    </div>
  );
};

export default LoadingComponent;
