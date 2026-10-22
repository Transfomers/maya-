import { z } from 'zod';

export const registrationSchema = z.object({
  first_name: z.string().min(1, 'Le prénom est requis / First name is required').max(100),
  last_name: z.string().min(1, 'Le nom est requis / Last name is required').max(100),
  email: z.string().email('Adresse email invalide / Invalid email address').max(255),
  country: z.string().min(2, 'Le pays de résidence est requis / Country of residence is required'),
  city: z.string().max(100).optional().or(z.literal('')),
  professional_role: z.string().max(120).optional().or(z.literal('')),
  organization: z.string().max(150).optional().or(z.literal('')),
  interests: z.array(z.string()).default([]),
  reason_for_joining: z.string().max(2000).optional().or(z.literal('')),
  preferred_way_to_participate: z.string().max(255).optional().or(z.literal('')),
  preferred_language: z.enum(['fr', 'en']),
  privacy_consent: z.literal(true, {
    errorMap: () => ({
      message: 'Vous devez accepter la politique de confidentialité pour continuer / You must agree to the privacy policy',
    }),
  }),
  honeypot: z.string().optional(),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
