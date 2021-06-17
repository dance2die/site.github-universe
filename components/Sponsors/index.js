/* prettier-ignore */
const svgs = {
  Veracode: 'https://githubuniverse.com/assets/img/sponsors/logo-veracode.svg',
  Bridgecrew: 'https://githubuniverse.com/assets/img/sponsors/Bridgecrew.svg',
  WhiteSource: 'https://githubuniverse.com/assets/img/sponsors/Whitesource.svg',
  Ponicode: 'https://githubuniverse.com/assets/img/sponsors/ponicode.svg',
  Microsoft: 'https://githubuniverse.com/assets/img/sponsors/Azure-Stacked-White%20(1).png',
  ZenHub: 'https://githubuniverse.com/assets/img/sponsors/zenhub.svg',
  Accurics: 'https://githubuniverse.com/assets/img/sponsors/Accurics_Monochromatic_Logo%20(1).png',
  Intuit: 'https://githubuniverse.com/assets/img/sponsors/Intuit_Logo.svg',
  CircleCI: 'https://githubuniverse.com/assets/img/sponsors/circle-logo-horizontal-white-1200x341%20(1).svg',
  Intel: 'https://githubuniverse.com/assets/img/sponsors/Intel_logo-white-3000px.png',
  StackPulse: 'https://githubuniverse.com/assets/img/sponsors/stackpulse_white_lockup.png',
  Secure: 'https://githubuniverse.com/assets/img/sponsors/scw_white_h_R.svg',
  Lightstep: 'https://githubuniverse.com/assets/img/sponsors/Lightsteplogo-medium-white.png',
  Datree: 'https://githubuniverse.com/assets/img/sponsors/Datree_Logo_1_color%20(1).png',
  HashiCorp: 'https://githubuniverse.com/assets/img/sponsors/HashiCorp_PrimaryLogo_White_RGB.png',
  StackHawk: 'https://githubuniverse.com/assets/img/sponsors/stackhawk-stacked-dark%20(1).svg',
  ServiceNow: 'https://githubuniverse.com/assets/img/sponsors/service-now.png',
  CODAME: 'https://githubuniverse.com/assets/img/sponsors/Codame_Badge_Logo_08_white.png',
  Sauce: 'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
  Contrast: 'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
  Snyk: 'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
  SonarSource: 'https://githubuniverse.com/assets/img/sponsors/SonarSource%20-%20blanc.svg'
};

function Sponsors() {
	return (
		<section className="bg-surface text-on-surface mt-12 mx-4">
			<h3 className="text-center text-2xl mb-6 md:text-3xl">Thank you to our sponsors</h3>

			<ul className="flex flex-wrap justify-center items-center list-none">
				{Object.entries(svgs).map(([ alt, src ]) => (
					<li key={alt} className="sponsor-list">
						<a
							className="flex justify-center items-center w-full h-[128px] relative hover:opacity-70 transition-opacity duration-300 ease-in-out"
							href="#"
						>
							<img className="h-auto block w-auto max-w-[70%] max-h-[80px]" src={src} alt={alt} />
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}

// <li key={alt} className="">
//   <a className="" href="#">
//     <img className="" src={src} alt={alt} />
//   </a>
// </li>

export default Sponsors;
