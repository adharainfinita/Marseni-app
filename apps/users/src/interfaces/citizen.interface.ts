export interface ICitizen {
  firstName: string;
  lastName: string;
  dni: number;
  dateBirth: Date;
  email: string;
  principalAddress: string;
  cuil: string;
  pronoums: 'she' | 'he' | 'they' | 'others';
  jobStatus: 'employed' | 'unemployed';
}