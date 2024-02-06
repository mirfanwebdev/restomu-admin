import LoginForm from "./LoginForm";
import Cover from "./Cover";
export default function LoginPage() {
  return (
    <main id="login-page" className="flex gap-8">
      <Cover />
      <LoginForm />
    </main>
  );
}
