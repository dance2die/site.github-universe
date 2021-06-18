import Container from '../Section/Container';
import Title from '../Section/Title';
import Description from '../Section/Description';
import Header from '../Section/Header';
import ViewAllButton from '../ViewAllButton';
import EnterpriseChannelPreviewList from './EnterpriseChannelPreviewList';

const gradient = '92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%';

export default function EnterpriseChannel() {
	return (
		<Container>
			<Header>
				<Header.TextContainer>
					<Title gradient={gradient}>Enterprise Channel</Title>
					<Description>
						Hear from industry experts on transformation, security, scalability, and productivity and learn
						how to build like the best.
					</Description>
				</Header.TextContainer>
				<Header.ButtonContainer>
					<ViewAllButton gradient={gradient} />
				</Header.ButtonContainer>
			</Header>
			<EnterpriseChannelPreviewList backgroundGradient={gradient} />
		</Container>
	);
}
