import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Le nom est requis (au moins 2 caractères) / Name is required'),
  email: z.string().email('Adresse email invalide / Invalid email address'),
  subject: z.string().min(3, 'Le sujet est requis / Subject is required'),
  message: z.string().min(10, 'Le message doit comporter au moins 10 caractères / Message must be at least 10 characters'),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
