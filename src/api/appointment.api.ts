import {
    ApiResponse,
    BookAppointmentPayload,
    BookAppointmentResponse,
    PublicDoctorProfile,
} from '@/interface';
import apiClient from '@/lib/apiClient';

export function bookAppointment(payload: BookAppointmentPayload) {
    return apiClient<ApiResponse<BookAppointmentResponse>>(
        '/appointment/book-appointment',
        {
            method: 'POST',
            body: payload,
        },
    );
}

export function getMyAppointments(params: { page?: number; limit?: number }) {
    return apiClient<
        ApiResponse<
            { doctor: PublicDoctorProfile; status: string; id: string }[]
        >
    >('/appointment/my-appointments', {
        params,
    });
}
