import FeaturedDoctors from '@/components/layout/hero/featured-doctors';
import HeroSection from '@/components/layout/hero/hero-section';
import HowItWorks from '@/components/layout/hero/how-it-works';
import MedicalSpecialties from '@/components/layout/hero/medical-specialties';
import WhyChooseUs from '@/components/layout/hero/why-choose-us';

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <WhyChooseUs />
            <MedicalSpecialties />
            <FeaturedDoctors />
            <HowItWorks />
        </main>
    );
};

export default HomePage;
