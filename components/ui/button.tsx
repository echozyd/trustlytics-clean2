export function Button({
  children,
  className = "",
  onClick, // ← 之前是必填，现在我们不加默认值即可
  variant = "default"
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // ✅ 改成可选
  variant?: string;
}) {
  const baseStyle = "rounded px-4 py-2 font-semibold";
  const variantStyle =
    variant === "ghost"
      ? "bg-transparent text-blue-600 hover:underline"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </button>
  );
}
