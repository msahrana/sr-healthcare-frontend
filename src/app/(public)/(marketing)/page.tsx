import FeaturedDoctors from '@/components/layout/hero/featured-doctors';
import HealthArticles from '@/components/layout/hero/health-articles';
import HeroSection from '@/components/layout/hero/hero-section';
import HowItWorks from '@/components/layout/hero/how-it-works';
import MedicalSpecialties from '@/components/layout/hero/medical-specialties';
import PatientTestimonials from '@/components/layout/hero/patient-testimonials';
import WhyChooseUs from '@/components/layout/hero/why-choose-us';

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <WhyChooseUs />
            <MedicalSpecialties />
            <FeaturedDoctors />
            <HowItWorks />
            <PatientTestimonials />
            <HealthArticles />
        </main>
    );
};

export default HomePage;
