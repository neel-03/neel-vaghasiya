import { z } from "zod";

export const dataSchema = z.object({
    firstName: z.string().min(2, 'First name needs at least 2 characters').max(15, 'First name must be less than 50 characters'),
    lastName: z.string().min(2, 'Last name needs at least 2 characters').max(15, 'Last name must be less than 50 characters'),
    mailFrom: z.string().email('The email address seems a bit off'),
    mailSubject: z.string().min(1, 'Subject is required'),
    mailBody: z.string().min(4, 'Email body must be at least 4 characters').max(1024, 'Email body must be less than 1024 characters')
})