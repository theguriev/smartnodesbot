import { Suspense } from "react";
import Projects from "./components/Projects";

const CartHome = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Server Component */}
      <Projects />
    </Suspense>
  );
};
export default CartHome;
