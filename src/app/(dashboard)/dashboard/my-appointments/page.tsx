import AppointmentList from '@/components/modules/my-appointment-list/AppointmentList';

const MyAppointments = () => {
    return (
        <div className="m-10">
            <h1 className='text-2xl font-bold mb-2'> My Appointments: </h1>
            <AppointmentList />
        </div>
    );
};

export default MyAppointments;
