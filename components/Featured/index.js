import FeaturedSessionPreviewList from './FeaturedSessionPreviewList';
import Container from '../Section/Container';
import Title from '../Section/Title';

export default function Featured() {
	return (
		<Container>
			<header>
				<Title>Featured</Title>
				<p className="pt-4">
					Watch the opening day keynote, featured sessions and daily highlights for a snapshot of Unverse's
					biggest moments
				</p>
			</header>
			<FeaturedSessionPreviewList />
		</Container>
	);
}
