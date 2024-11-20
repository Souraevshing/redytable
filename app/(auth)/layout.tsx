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
    <div>
      <main>{children}</main>
    </div>
  );
}
