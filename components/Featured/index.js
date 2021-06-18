import FeaturedSessionPreviewList from './FeaturedSessionPreviewList';
import Container from '../Section/Container';
import Description from '../Section/Description';
import Title from '../Section/Title';
import Header from '../Section/Header';

const gradient =
	'267.91deg, #FFE580 -21.36%, #FF7571 -2.45%, #EA5DAD 26.84%, #C2A0FD 64.15%, #3BF0E4 108.29%, #B2F4B6 159.03%';

export default function Featured() {
	return (
		<Container>
			<Header.TextContainer>
				<Title gradient={gradient}>Featured</Title>
				<Description>
					Watch the opening day keynote, featured sessions and daily highlights for a snapshot of Unverse's
					biggest moments
				</Description>
			</Header.TextContainer>
			<Header.ButtonContainer />
			<FeaturedSessionPreviewList />
		</Container>
	);
}
