export interface ICredentialRegister {
    name: string;
    email: string;
    password: string;
    patient?: {
        contactNumber?: string;
    };
}

export interface ICredentialLogin {
    email: string;
    password: string;
}

export interface ICredentialVerifyOTP {
    email: string;
    otp: string;
}

export interface DoctorApplicationData {
    user: {
        name: string;
        email: string;
    };
    doctor: {
        specialization: string;
        licenseNumber: string;
        qualifications: string;
        experienceYears: number;
        contactNumber: string;
        address: string;
        consultationFee: number | undefined;
        bio: string;
    };
}

export interface DoctorApplicationPayload {
    resume: File;
    additionalFiles: File[];
    data: DoctorApplicationData;
}

export interface SidebarItem {
    title: string;
    url: string;
}

export interface SidebarGroup {
    title: string;
    items: SidebarItem[];
}

export type SidebarItems = SidebarGroup[];

export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'DOCTOR' | 'PATIENT';

export interface IUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}
