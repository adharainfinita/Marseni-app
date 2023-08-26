export interface ICitizen {
  firstName: string;
  lastName: string;
  dni: number;
  dateBirth: Date;
  email: string;
  principalAdress: string;
  cuil: string;
  pronoums: 'she' | 'he' | 'they' | 'others';
  jobStatus: 'employeed' | 'not-employeed';
}