import { HomeSection } from './components/home-section'
import { ServicesSection } from './components/services-section'
import { PlansSection } from './components/plans-section'
import { UnitysSection } from './components/unitys-section'
import { AboutSection } from './components/about-section'

export default function Page() {
	return (
		<>
			<HomeSection />
			<ServicesSection />
			<PlansSection />
			<AboutSection />
			<UnitysSection />
		</>
	)
}
