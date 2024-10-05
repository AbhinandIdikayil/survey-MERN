import { format } from 'date-fns'

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = format(date, 'MMMM d, yyyy');
    return formattedDate ?? ''
}