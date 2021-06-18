import Title from '../Section/Title';
import Container from '../Section/Container';
import ViewAllButton from '../ViewAllButton';
import PlayChannelPreviewList from './PlayChannelPreviewList';

const gradient = '92.7deg, #A2FACF -1.37%, #64ACFF 78.71%';

export default function PlayChannel() {
	return (
		<Container>
			<header>
				<Title>Play Channel</Title>
				<p className="pt-4">
					Entertaining performances, tutorials, and unexpected stories, all driven by code.
				</p>
			</header>
			<div className="mt-4">
				<ViewAllButton gradient={gradient} />
			</div>
			<PlayChannelPreviewList backgroundGradient={gradient} />
		</Container>
	);
}
