// src/components/ErrorMessage.jsx
function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">{message}</div>
  );
}

export default ErrorMessage;
