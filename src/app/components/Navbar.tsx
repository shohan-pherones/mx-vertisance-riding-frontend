import Link from "next/link";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/training-programs">Training Programs</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <header className="navbar h-16 max-h-16 bg-secondary sticky top-0 left-0 right-0 z-50">
      <nav className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          MVR
        </Link>
      </nav>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </nav>
      <nav className="navbar-end">
        <Link href="/sign-in" className="btn btn-primary">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
