import ViewAllButton from '../ViewAllButton';
import DeveloperChannelPreviewList from './DeveloperChannelPreviewList';
import Container from '../Section/Container';
import Title from '../Section/Title';
import Description from '../Section/Description';

export default function DeveloperChannel() {
	return (
		<Container>
			<header>
				<Title>Developer Channel</Title>
				<Description>
					Sessions tailored toward open source contributors and maintainers running projects of all sizes, as
					well as developers looking to understand the latest software tools, techniques, and best practices.
				</Description>
			</header>
			<div className="mt-4">
				<ViewAllButton gradient="267.91deg, #ffe57f 9.35%, #ff7170 96.48%" />
			</div>
			<DeveloperChannelPreviewList />
		</Container>
	);
}
