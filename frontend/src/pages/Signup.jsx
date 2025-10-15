import AuthForm from "../components/AuthForm";

export default function Signup() {
  const handleSignup = (data) => {
    console.log("Signing up with:", data);
    // TODO: connect to backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
}
