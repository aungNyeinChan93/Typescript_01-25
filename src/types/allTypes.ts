// function types
export type Logger = {
    log?: (message: string) => void;
    error?: (message: string) => void;
    warn?: (message: string) => void;
    info?: (message: string) => void;
    debug?: (message: string) => void;
    trace?: (message: string) => void;
    fatal?: (message: string) => void;
    success?: (message: string) => void;
    critical?: (message: string) => void;
    alert?: (message: string) => void;
    notice?: (message: string) => void;
    verbose?: (message: string) => void;
    prompt?: (message: string) => void;
    question?: (message: string) => void;
    confirm?: (message: string) => void;
    ask?: (message: string) => void;
    test?(message: string): void;
    add?(a: number, b: number): number;
    // add?: (a: number, b: number) => number;
    // [key: string]: any; // Allow additional properties with any type

}

export type BigBoolean = false | true | 'true' | 'false' | 0 | 1 | '1' | '0' | boolean | null | '' | undefined;

export type UserInformations = {
    name: string;
    age: number;
    readonly email: string;
    isActive: boolean;
    address?: {
        street: string;
        city: string;
        country: string;
    };
    hobbies?: string[];
    createdAt?: Date;
    updatedAt?: Date;
    readonly isAdmin?: boolean;
    isVerified?: boolean;
    phone?: string;
    profilePicture?: string;
    bio?: string | number | null | undefined;
    readonly website?: string;
}

export type About<T> = {
    bio: T,
}

