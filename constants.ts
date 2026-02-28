import { DaySchedule, Testimonial, Feature } from './types';
import { Dumbbell, Users, BrainCircuit, MapPin } from 'lucide-react';

export const SCHEDULE_DATA: DaySchedule[] = [
  {
    day: 'Monday',
    classes: [
      { time: '06:00 AM', name: 'Morning Session A', instructor: 'Instructor Name' },
      { time: '05:30 PM', name: 'Evening Group B', instructor: 'Instructor Name' },
      { time: '07:00 PM', name: 'Cardio Focus', instructor: 'Instructor Name' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '06:00 AM', name: 'Strength Block', instructor: 'Instructor Name' },
      { time: '05:30 PM', name: 'Core Session', instructor: 'Instructor Name' },
      { time: '07:00 PM', name: 'Conditioning', instructor: 'Instructor Name' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '06:00 AM', name: 'Full Body Mix', instructor: 'Instructor Name' },
      { time: '05:30 PM', name: 'HIIT Session', instructor: 'Instructor Name' },
      { time: '07:00 PM', name: 'Recovery Flow', instructor: 'Instructor Name' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '06:00 AM', name: 'Lower Body Focus', instructor: 'Instructor Name' },
      { time: '05:30 PM', name: 'Athletic Drill', instructor: 'Instructor Name' },
      { time: '07:00 PM', name: 'Core Blast', instructor: 'Instructor Name' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '06:00 AM', name: 'Mix It Up', instructor: 'Instructor Name' },
      { time: '05:30 PM', name: 'Endurance', instructor: 'Instructor Name' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '09:00 AM', name: 'Community Class', instructor: 'Instructor Name' },
      { time: '10:30 AM', name: 'Open Gym Time', instructor: 'Instructor Name' },
    ],
  },
  {
    day: 'Sunday',
    classes: [
      { time: '10:00 AM', name: 'Yoga Recovery', instructor: 'Instructor Name' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Client Name',
    result: 'Result Placeholder',
    quote: "This is a placeholder for a testimonial quote. It represents the client's positive experience.",
    imageBefore: '', 
    imageAfter: '',
  },
  {
    id: '2',
    name: 'Client Name',
    result: 'Result Placeholder',
    quote: "Another placeholder quote goes here. The transformation was incredible and the process was smooth.",
    imageBefore: '',
    imageAfter: '',
  },
  {
    id: '3',
    name: 'Client Name',
    result: 'Result Placeholder',
    quote: "Short placeholder quote about the community and atmosphere.",
    imageBefore: '',
    imageAfter: '',
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Structured Group Training',
    description: 'Never guess what to do. We plan every workout for maximum efficiency.',
    icon: Users,
  },
  {
    id: 'f2',
    title: 'Expert Coaching',
    description: 'Certified trainers who correct your form and push you safely.',
    icon: BrainCircuit,
  },
  {
    id: 'f3',
    title: 'All Fitness Levels',
    description: 'Whether you are a pro or just starting, everything is scalable.',
    icon: Dumbbell,
  },
  {
    id: 'f4',
    title: 'Duluth Location',
    description: 'Conveniently located right in your neighborhood.',
    icon: MapPin,
  },
];

export const FAQ_DATA = [
  {
    question: "Is the 3-day trial really free?",
    answer: "Yes, absolutely! You get full access to all classes and amenities for 3 days with no commitment and no credit card required."
  },
  {
    question: "What should I bring to my first class?",
    answer: "Just bring a water bottle, a towel, and comfortable workout clothes. We provide all the equipment you'll need."
  },
  {
    question: "Do I need to be in shape to join?",
    answer: "Not at all! Our workouts are designed to be scalable for all fitness levels, from complete beginners to seasoned athletes."
  },
  {
    question: "What are the class sizes like?",
    answer: "We keep our classes small (usually 10-15 people) to ensure everyone gets personalized attention and coaching."
  },
  {
    question: "How do I sign up?",
    answer: "Simply click the 'Start 3-Day Free Trial' button, fill out a quick form, and come in during our staffed hours to get started!"
  }
];
