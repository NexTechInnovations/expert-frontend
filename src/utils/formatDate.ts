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

export const formatLastUpdated = (dateString: string): string => {
    if (!dateString) return '-';
    try {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        // Less than 1 hour (3600 seconds)
        if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes <= 0 ? 1 : minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        }

        // Less than 1 day (86400 seconds)
        if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        }

        // Less than 1 week (604800 seconds)
        if (diffInSeconds < 604800) {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        }

        // Less than 1 month (approx 30.44 days)
        const diffInDays = Math.floor(diffInSeconds / 86400);
        if (diffInDays < 30) {
            const weeks = Math.floor(diffInDays / 7);
            if (weeks > 0) {
                return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
            }
            return `${diffInDays} days ago`;
        }

        // Less than 1 year (approx 365.25 days)
        const diffInMonths = Math.floor(diffInDays / 30.44);
        if (diffInMonths < 12) {
            return `${diffInMonths <= 0 ? 1 : diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'} ago`;
        }

        // Years ago
        const diffInYears = Math.floor(diffInDays / 365.25);
        return `${diffInYears <= 0 ? 1 : diffInYears} ${diffInYears === 1 ? 'year' : 'years'} ago`;
    } catch (error) {
        console.error("Invalid date string:", dateString);
        return dateString;
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