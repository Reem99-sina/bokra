const ErrorInputComponent = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <p className="mb-2 h-2 text-xs text-red-600 dark:text-red-500">
      {errorMessage}
    </p>
  );
};

export default ErrorInputComponent;
