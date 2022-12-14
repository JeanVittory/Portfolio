import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { lightTheme, darkTheme } from '../providers/themeProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			defaultTheme='system'
			attribute='class'
			value={{ light: lightTheme.className, dark: darkTheme.className }}
		>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</ThemeProvider>
	);
}

export default MyApp;
