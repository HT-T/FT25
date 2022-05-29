import { useAuth } from "../hooks/useAuth";

function PageLogin() {
  const { signInWithGoogle } = useAuth();

  return (
    <>
      <h1>Login</h1>
      <button type="button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

export default PageLogin;
