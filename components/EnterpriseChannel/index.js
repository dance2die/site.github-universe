import Container from '../Section/Container';
import Title from '../Section/Title';
import ViewAllButton from '../ViewAllButton';
import EnterpriseChannelPreviewList from './EnterpriseChannelPreviewList';

const gradient = '92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%';

export default function EnterpriseChannel() {
	return (
		<Container>
			<header>
				<Title>Enterprise Channel</Title>
				<p className="pt-4">
					Hear from industry experts on transformation, security, scalability, and productivity and learn how
					to build like the best.
				</p>
			</header>
			<div className="mt-4">
				<ViewAllButton gradient={gradient} />
			</div>
			<EnterpriseChannelPreviewList backgroundGradient={gradient} />
		</Container>
	);
}
