import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="bg-black text-gray-200 h-screen flex flex-col justify-center items-center px-3">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
