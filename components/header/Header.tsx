import { Container, Navbar, Text } from '@nextui-org/react';
import SwitchTheme from '../switch/Switch';
import styles from './Header.module.css';
import { useTheme } from '@nextui-org/react';
import Image from 'next/image';

export default function Header(): JSX.Element {
	const { theme, isDark } = useTheme();
	const itemsCollapse = ['Projects', 'Articles', 'Contact'];

	return (
		<Navbar>
			<Container
				as={'nav'}
				fluid
				display='flex'
				justify='space-between'
				alignItems='center'
				css={{ padding: '$10' }}
			>
				<Navbar.Brand css={{ gap: '$5' }}>
					<Image alt='logo' src={isDark ? '/logo_white.png' : '/logo.png'} width={'50'} height={'50'} />
					<Navbar.Toggle className={styles.hidden} />
					<Text b css={{ color: theme?.colors.primarySolidContrast }} hideIn='xs'>
						VittoryDev
					</Text>
				</Navbar.Brand>
				<Navbar.Content
					hideIn={'xs'}
					enableCursorHighlight
					variant='highlight-rounded'
					activeColor='primary'
					css={{ marginRight: '$10' }}
				>
					<Navbar.Link isActive>Projects</Navbar.Link>
					<Navbar.Link>Articles</Navbar.Link>
					<Navbar.Link>Contact</Navbar.Link>
				</Navbar.Content>
				<Navbar.Content>
					<Navbar.Item>
						<SwitchTheme />
					</Navbar.Item>
				</Navbar.Content>
				<Navbar.Collapse className={styles.hidden}>
					{itemsCollapse.map((item, idx) => (
						<Navbar.CollapseItem key={idx}>{item}</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
