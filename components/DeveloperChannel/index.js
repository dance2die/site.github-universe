import ViewAllButton from '../ViewAllButton';
import DeveloperChannelPreviewList from './DeveloperChannelPreviewList';
import Container from '../Section/Container';
import Title from '../Section/Title';
import Header from '../Section/Header';
import Description from '../Section/Description';

const gradient = '267.91deg, #ffe57f 9.35%, #ff7170 96.48%';

export default function DeveloperChannel() {
	return (
		<Container>
			<Header>
				<Header.TextContainer>
					<Title gradient={gradient}>Developer Channel</Title>
					<Description>
						Sessions tailored toward open source contributors and maintainers running projects of all sizes,
						as well as developers looking to understand the latest software tools, techniques, and best
						practices.
					</Description>
				</Header.TextContainer>
				<Header.ButtonContainer>
					<ViewAllButton gradient={gradient} />
				</Header.ButtonContainer>
			</Header>
			<DeveloperChannelPreviewList />
		</Container>
	);
}
