import SideAuth from "./_components/SideAuth";

/**
 * @description `wrapper` containing code to `authenticate` user
 * @param children ReactNode
 * @returns layout containing auth
 */

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className="auth-no-scroll">

    <div className="flex flex-1 h-screen overflow-hidden">
      <SideAuth />
      <main className="flex-1 flex items-center justify-center overflow-hidden">
        {children}
      </main>
    {/* </div> */}
    </div>
  );
}