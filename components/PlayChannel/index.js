import Title from '../Section/Title';
import Container from '../Section/Container';
import Description from '../Section/Description';
import Header from '../Section/Header';
import ViewAllButton from '../ViewAllButton';
import PlayChannelPreviewList from './PlayChannelPreviewList';

const gradient = '92.7deg, #A2FACF -1.37%, #64ACFF 78.71%';

export default function PlayChannel() {
	return (
		<Container>
			<Header>
				<Header.TextContainer>
					<Title gradient={gradient}>Play Channel</Title>
					<Description>
						Entertaining performances, tutorials, and unexpected stories, all driven by code.
					</Description>
				</Header.TextContainer>
				<Header.ButtonContainer>
					<ViewAllButton gradient={gradient} />
				</Header.ButtonContainer>
			</Header>
			<PlayChannelPreviewList backgroundGradient={gradient} />
		</Container>
	);
}
