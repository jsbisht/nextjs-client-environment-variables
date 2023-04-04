import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/first">First</Link>
        </li>
        <li>
          <Link href="/second">Second</Link>
        </li>
        <li>
          <Link href="/third">Third</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
