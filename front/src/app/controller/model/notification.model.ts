import {User} from "./User.model";

export class Notification {
    id: number;
    status: string;
    message: string;
    seen: boolean;
    addedAt: Date;
    seenAt: Date;
    user: User;
}
