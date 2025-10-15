import AuthForm from "../components/AuthForm";

export default function Login() {
  const handleLogin = (data) => {
    console.log("Logging in with:", data);
    // TODO: connect to backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}
