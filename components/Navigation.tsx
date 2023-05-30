import Link from "next/link";
import React from "react";

const navigations = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/services",
    label: "Services",
  },
];

function Navigation() {
  return (
    // <ul>
    //   {navigations.map((nav) => (
    //     <li key={nav.label}>
    //       <Link href={nav.href}>{nav.label}</Link>
    //     </li>
    //   ))}
    // </ul>

    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-info navbar-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          NextJs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navigations.map((nav) => (
              <li key={nav.label} className="nav-item">
                <Link href={nav.href} className="nav-link">
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
