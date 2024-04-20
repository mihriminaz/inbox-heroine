export type Email = {
  id: string;
  from: string;
  to: string;
  subject: string;
  deliveredAt: string;
  snippet: string;
  body: string;
  completed?: boolean;
}
