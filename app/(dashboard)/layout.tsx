"use client";

/**
 * @description `layout` wrapper for dashboard
 * @param children ReactNode
 */

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
