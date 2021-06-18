import Title from '../Section/Title';
import Container from '../Section/Container';
import Description from '../Section/Description';
import ViewAllButton from '../ViewAllButton';
import PlayChannelPreviewList from './PlayChannelPreviewList';

const gradient = '92.7deg, #A2FACF -1.37%, #64ACFF 78.71%';

export default function PlayChannel() {
	return (
		<Container>
			<header>
				<Title>Play Channel</Title>
				<Description>
					Entertaining performances, tutorials, and unexpected stories, all driven by code.
				</Description>
			</header>
			<div className="mt-4">
				<ViewAllButton gradient={gradient} />
			</div>
			<PlayChannelPreviewList backgroundGradient={gradient} />
		</Container>
	);
}
