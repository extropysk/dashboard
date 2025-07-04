import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Extropy PWA</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
