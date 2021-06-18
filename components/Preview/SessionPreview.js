import cx from 'clsx';

import styles from './SessionPreview.module.css';

function SessionPreview({ backgroundGradient, data: { title, onDemandTag, speakers, channel, url } }) {
	const previewSpeakers = speakers ? (speakers.length > 1 ? `${speakers.length} speakers` : speakers[0]) : '';

	return (
		<div className="relative min-w-[225px] max-w-[225px] h-40">
			<a
				href={url}
				style={{
					'--background-gradient': backgroundGradient
				}}
				className={cx('p-3 flex flex-col justify-between', styles['session-preview'])}
			>
				{(onDemandTag || '') !== '' && (
					<span className="uppercase text-[0.5rem] rounded-full py-1 px-2 bg-gray-100 text-surface w-[fit-content]">
						{onDemandTag}
					</span>
				)}
				<h4 className="text-xs flex-grow pt-4">{title}</h4>
				<section className="text-[0.7rem] text-gray-400">{previewSpeakers}</section>
			</a>
		</div>
	);
}

export default SessionPreview;
