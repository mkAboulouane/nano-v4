export class User {
     credentialsNonExpired: boolean;
     enabled: boolean;
     email: string;
     accountNonExpired: boolean;
     accountNonLocked: boolean;
     id: string;
     prenom: string;
     nom: string;
     username: string;
     password: string;
     passwordChanged: boolean;
     phone: string;
     pays: string;
     gender: string;
     city: string;
     adress: string;
     newPassword: string;
     confirmPassword: string;
     createdAt: Date;
     updatedAt: Date;
     roles: any = [];
}
