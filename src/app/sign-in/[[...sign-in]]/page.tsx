"use client";
import { auth } from "@/firebase";
import { signIn, SignType } from "@/firebase/signIn";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const route = useRouter();
  const userStore = useUserStore();
  const handleSignIn = async () => {
    const { user, permissions } = await signIn(SignType.GOOGLE);

    userStore.saveUser({ ...user, permissions });
    if (user.status === "new") route.replace("/role");
    if (user.status === "completed") route.back();
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign in by Google</button>
    </div>
  );
};

export default SignInPage;
