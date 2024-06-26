"use client";
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

import { useUser } from '@clerk/nextjs';
import DashboardSidebar from '../widgets/dashboard/DashboardSidebar';
import { Toaster } from 'react-hot-toast';

interface ProviderProps {
    children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
    const pathname = usePathname();

    const { isLoaded } = useUser();

    if (!isLoaded) return null;

    return (
        <NextUIProvider>
            {pathname !== "/dashboard/new-email"
                && pathname !== "/"
                && pathname !== "/sign-up"
                && pathname !== "/subscribe"
                && pathname !== "/sign-in"
                ? (
                    <div className='w-full flex'>
                        <div className="w-[290px] h-screen overflow-y-scroll">
                            <DashboardSidebar />
                        </div>
                        {children}
                    </div>
                ) : (
                    <>{children}</>
                )}

            <Toaster position="top-center" reverseOrder={false} />
        </NextUIProvider>
    );
}

export default Providers;
