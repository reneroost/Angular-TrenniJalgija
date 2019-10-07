export interface Harjutus {
  id: string;
  nimi: string;
  kestus: number;
  kalorid: number;
  kuupaev?: Date; // ? tähendab valikulist välja
  olek?: 'lõpetatud' | 'tühistatud' | null;
}
