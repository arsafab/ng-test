import { IArticleItem } from './shared/models';

export const articles: IArticleItem[] = [
  {
    title: 'PCR - Labortest 08:00 Uhr',
    description: 'Zusätzliche Laborkosten in Höhe von 59,-€ werden nachträglich in Rechnung gestellt.',
    price: 39.80,
    date: new Date(),
    articleId: '1'
  },
  {
    title: 'Blutzucker 08:05 Uhr',
    description: 'Zusätzliche Laborkosten in Höhe von 59,-€ werden nachträglich in Rechnung gestellt.',
    price: 20.80,
    date: new Date(),
    articleId: '2'
  },
  {
    title: 'Hormone und Diabetes mellit 09:00 Uhr',
    description: 'Zusätzliche Laborkosten in Höhe von 59,-€ werden nachträglich in Rechnung gestellt.',
    price: 21.80,
    date: new Date(),
    articleId: '3'
  },
  {
    title: 'Blutgasanalyse 10:00 Uhr',
    description: 'Zusätzliche Laborkosten in Höhe von 59,-€ werden nachträglich in Rechnung gestellt.',
    price: 30.80,
    date: new Date(),
    articleId: '4'
  }
];
