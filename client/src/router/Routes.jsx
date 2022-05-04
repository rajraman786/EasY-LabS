// import { Suspense } from "react";
import ROUTES, { RenderRoutes } from "./RenderRoutes";
// import SuspenseSpinner from "components/SuspenseFallback";

const Routes = () => {
    return (
        // <Suspense fallback={<SuspenseSpinner />}>
        <RenderRoutes routes={ROUTES} />
        // </Suspense>
    );
};

export default Routes;
