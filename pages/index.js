import Head from 'next/head';

import Appbar from '../components/Appbar';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import DeveloperChannel from '../components/DeveloperChannel';
import EnterpriseChannel from '../components/EnterpriseChannel';
import PlayChannel from '../components/PlayChannel';
import Workshops from '../components/Workshops';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>

			<main className="bg-surface">
				<Appbar />
				<section className="lg:p-8">
					<Hero />
					<Featured />
					<DeveloperChannel />
					<EnterpriseChannel />
					<PlayChannel />
					<Workshops />
					<Sponsors />
				</section>
			</main>
			<Footer />
		</div>
	);
}
