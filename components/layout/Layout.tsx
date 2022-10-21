import { Container } from '@nextui-org/react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { useTheme } from '@nextui-org/react';

type props = {
	children: JSX.Element;
};

export function Layout({ children }: props) {
	return (
		<Container>
			<Header />
			{children}
			<Footer />
		</Container>
	);
}
