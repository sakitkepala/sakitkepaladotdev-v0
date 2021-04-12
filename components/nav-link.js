import Link from "next/link";

export function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}
