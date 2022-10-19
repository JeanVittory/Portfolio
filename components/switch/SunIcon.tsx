import Image from 'next/image';

type props = {
	dark: Boolean | undefined;
};

export default function IconTheme({ dark }: props) {
	if (!dark) {
		return (
			<>
				<Image alt='light Theme Icon' src={'/sunIcon.svg'} width={'17'} height={'17'} />
			</>
		);
	} else {
		return (
			<>
				<Image alt='light Theme Icon' src={'/moonIcon.svg'} width={'17'} height={'17'} />
			</>
		);
	}
}
