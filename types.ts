import React from 'react';

export interface ClassSession {
  time: string;
  name: string;
  instructor?: string;
}

export interface DaySchedule {
  day: string;
  classes: ClassSession[];
}

export interface Testimonial {
  id: string;
  name: string;
  result: string;
  quote: string;
  imageBefore: string;
  imageAfter: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}