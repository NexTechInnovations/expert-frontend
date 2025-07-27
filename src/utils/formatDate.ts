// src/utils/formatDate.ts
import { formatDistanceToNow, format } from 'date-fns';

export const formatRelativeTime = (dateString: string): string => {
    try {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.error("Invalid date string:", dateString);
        return dateString; // Return original string if date is invalid
    }
};

export const formatNotificationDate = (dateString: string): string => {
    try {
        const date = new Date(dateString);
        return format(date, 'dd MMM, hh:mm a');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.error("Invalid date string:", dateString);
        return dateString;
    }
};