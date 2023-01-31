'use client';

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);
