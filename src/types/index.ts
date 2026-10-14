export interface DossierFormData {
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  relationshipToTheme: string;
  accommodationType: 'double' | 'single' | 'undecided';
  participantsCount: string;
  observations?: string;
  lgpdConsent: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}
