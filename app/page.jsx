// app/page.js
import { logger } from "@/lib/logger";
const log = logger.child({ module: "app/page" });
import Link from 'next/link';

export default function HomePage() {
  log.debug("HomePage called");
  getCaller();
  log.debug("HomePage returning");
  return (
    <main className="container">
      <h1>Welcome to Our Store</h1>
      <p>Your one-stop shop for exclusive products.</p>
      <div className="button-group">
        <Link href="/products">
          <button className="btn-primary">Shop Products</button>
        </Link>
        <Link href="/collections">
          <button className="btn-secondary">Browse Collections</button>
        </Link>
      </div>
    </main>
  );
}

function getCaller() {
  const error = new Error();
  const stack = error.stack.split('\n');
  // The first line is the current function, the second one is the caller.
  log.debug(stack[2].trim()); // Stack[2] will be the caller
}