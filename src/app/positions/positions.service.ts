import { Injectable } from '@angular/core';

export interface Position {
  name: string;
  description: string;
  location: string;
  salary: number;
  startDate: Date;
  endDate: Date;
  company: string;
}

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  positions: Position[] = [
    {
      name: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      location: 'New York, NY',
      salary: 120000,
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-12-31'),
      company: 'Tech Corp'
    },
    {
      name: 'Data Analyst',
      description: 'Analyze data and generate reports.',
      location: 'San Francisco, CA',
      salary: 90000,
      startDate: new Date('2023-02-01'),
      endDate: new Date('2023-11-30'),
      company: 'Data Insights'
    }
  ];
  constructor() { }
}
