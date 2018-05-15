export const notificationTypes = {
    info: 'info',
    warning: 'warning',
    negative: 'danger',
};
export const notificationsDefaultTimer = 5000;
export interface INotification {
    id?: string;
    type: string; // 'info', 'warning', 'danger'
    title?: string;
    detail: string;
    timer?: number;
}
