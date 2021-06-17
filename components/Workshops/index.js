import SectionContainer from '../SectionContainer';
import ViewAllButton from '../ViewAllButton';
import WorkshopsPreviewList from './WorkshopsPreviewList';

const gradient = '272.22deg, #3BF0E4 -14.27%, #73F280 43.01%, #B2F4B6 96.82%';

export default function Workshops() {
	return (
		<SectionContainer>
			<header>
				<h4 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-400
          inline-block
          ">
					Workshops
				</h4>
				<p className="pt-4">
					Work directly with GitHub experts on EcoSystems, Professional Services, and/or Security topics
					during these two-hour, hands-on Workshops.
				</p>
			</header>
			<div className="mt-4">
				<ViewAllButton gradient={gradient} />
			</div>
			<WorkshopsPreviewList backgroundGradient={gradient} />
		</SectionContainer>
	);
}
