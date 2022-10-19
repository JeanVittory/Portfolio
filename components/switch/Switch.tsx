import { Switch } from '@nextui-org/react';
import IconTheme from './SunIcon';
import { useTheme as useThemeNext } from 'next-themes';
import { useTheme } from '@nextui-org/react';

export default function SwitchTheme() {
	const { setTheme } = useThemeNext();
	const { isDark, type } = useTheme();

	return (
		<>
			<Switch
				checked={isDark}
				color='secondary'
				size={'lg'}
				shadow
				iconOff={<IconTheme dark={isDark} />}
				iconOn={<IconTheme dark={isDark} />}
				onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
			/>
		</>
	);
}
