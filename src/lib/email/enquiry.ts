/** Shared between the client form and the server templates — keep dependency-free. */
export const ENQUIRY_TYPES = {
  booking: "Booking enquiry",
  bridal: "Bridal & events",
  mobile: "Mobile appointment",
  academy: "Academy & training",
  general: "Something else",
} as const;

export type EnquiryType = keyof typeof ENQUIRY_TYPES;

export type Enquiry = {
  name: string;
  email: string;
  phone?: string;
  type: EnquiryType;
  preferredDate?: string;
  message: string;
  submittedAt: Date;
};
