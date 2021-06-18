import Container from '../Section/Container';
import Title from '../Section/Title';
import Description from '../Section/Description';
import Header from '../Section/Header';
import ViewAllButton from '../ViewAllButton';
import WorkshopsPreviewList from './WorkshopsPreviewList';

const gradient = '272.22deg, #3BF0E4 -14.27%, #73F280 43.01%, #B2F4B6 96.82%';

export default function Workshops() {
	return (
		<Container>
			<Header>
				<Header.TextContainer>
					<Title gradient={gradient}>Workshops</Title>
					<Description>
						Work directly with GitHub experts on EcoSystems, Professional Services, and/or Security topics
						during these two-hour, hands-on Workshops.
					</Description>
				</Header.TextContainer>
				<Header.ButtonContainer>
					<ViewAllButton gradient={gradient} />
				</Header.ButtonContainer>
			</Header>
			<WorkshopsPreviewList backgroundGradient={gradient} />
		</Container>
	);
}
