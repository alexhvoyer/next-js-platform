type NotificationType = "info" | "danger" | "warning";

export type Notification = {
    id: number;
    title: string;
    text: string;
    type: NotificationType;
};
