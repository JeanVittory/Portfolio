import { Container } from '@nextui-org/react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type props = {
	children: JSX.Element;
};

export function Layout({ children }: props) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
