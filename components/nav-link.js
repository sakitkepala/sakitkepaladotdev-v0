import Link from "next/link";

export function NavLink({ href, children, style }) {
  return (
    <Link href={href}>
      <a style={style}>{children}</a>
    </Link>
  );
}
