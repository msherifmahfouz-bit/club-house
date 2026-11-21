import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Clubhouse | Your campus, your community', description: 'The home of your university club.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
