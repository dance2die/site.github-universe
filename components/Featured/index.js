import FeaturedSessionPreviewList from './FeaturedSessionPreviewList';
import Container from '../Section/Container';
import Description from '../Section/Description';
import Title from '../Section/Title';

export default function Featured() {
	return (
		<Container>
			<header>
				<Title>Featured</Title>
				<Description>
					Watch the opening day keynote, featured sessions and daily highlights for a snapshot of Unverse's
					biggest moments
				</Description>
			</header>
			<FeaturedSessionPreviewList />
		</Container>
	);
}
