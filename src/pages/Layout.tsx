import { Outlet } from "react-router-dom";

import { Navbar } from "components";

export const Layout: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="container max-h-[calc(100dvh-70px)] flex-auto py-4">
                <Outlet />
            </main>
        </>
    );
};
