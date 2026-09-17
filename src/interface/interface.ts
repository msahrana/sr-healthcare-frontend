// Auth Interface
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

// Doctor Interface
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

export type DoctorVerificationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface Doctor {
    id: string;
    name: string;
    email: string;
    address?: string | null;
    specialization: string;
    licenseNumber: string;
    qualifications: string;
    experienceYears: number;
    bio?: string | null;
    consultationFee?: number | string | null;
    contactNumber?: string | null;
    verificationStatus: DoctorVerificationStatus;
    rejectionReason?: string | null;
    reviewedBy?: string | null;
    reviewedAt?: string | null;
    resume?: string | null;
    additionalFiles?: { url: string; publicId: string }[] | null;
    isDeleted: boolean;
    deletedAt?: null | string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    user: User;
}

export interface DoctorParams {
    verificationStatus?: DoctorVerificationStatus;
    page?: number;
    limit?: number;
    searchTerm?: string;
    sortOrder?: 'desc' | 'asc';
}

export interface ApproveDoctorPayload {
    doctorId: string;
    verificationStatus: 'APPROVED' | 'REJECTED';
    rejectionReason?: string;
}

// Sidebar Interface
export interface SidebarItem {
    title: string;
    url: string;
}

export interface SidebarGroup {
    title: string;
    items: SidebarItem[];
}

export type SidebarItems = SidebarGroup[];

// User Interface
export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'DOCTOR' | 'PATIENT';

export type UserStatus = 'ACTIVE' | 'BLOCKED' | 'DELETED';

export interface User {
    id: string;
    name: string;
    email: string;
    googleId: null | string;
    authProvider: string;
    emailVerified: boolean;
    role: UserRole;
    status: UserStatus;
    needPasswordChange: boolean;
    imageUrl: null | string;
    imagePublicId: null | string;
    isDeleted: boolean;
    deletedAt: null | string;
    createdAt: string;
    updatedAt: string;
}

// Api Interface
export interface ApiResponse<T> {
    success: boolean;
    statusCode: number;
    message: string;
    data: T;
}
