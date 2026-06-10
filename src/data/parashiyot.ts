import parashiyotJson from './categories/parashiyot.json';
import hagimJson from './categories/hagim.json';
import nosimJson from './categories/nosim.json';

export const parashiyot = parashiyotJson.items;
export const hagim = hagimJson.items;
export const nosim = nosimJson.items;

export const sampleShiurim: Shiur[] = [
  {
    id: 'bereshit-briut-haolam',
    title: 'בריאת העולם ומשמעותה',
    category: 'parasha',
    parasha: 'bereshit',
    description: 'עיון בפרשת בראשית — מדוע התורה פותחת בבריאה ולא במצוות',
    meaiver: [
      '## מטרות השיעור',
      'להבין מדוע התורה פותחת בבריאת העולם',
      '',
      '## מקורות למעביר',
      '**רש"י בראשית א:א** — "בשביל שהתורה תחלתה בראשית ברא..."',
      '**רמב"ן שם** — הסבר מורחב על עניין הבריאה',
      '',
      '## שאלות לדיון',
      '1. מה ההבדל בין "בראשית" ל"בתחילה"?',
      '2. מה המסר שנשמע מהפתיחה בבריאה?',
    ],
    mishtatfim: [
      '## פרשת בראשית — בריאת העולם',
      '',
      '**שאלת פתיחה:** מדוע לדעתכם פותחת התורה בבריאה?',
      '',
      '## מקורות',
      '**רש"י בראשית א:א**',
      '> "בְּרֵאשִׁית בָּרָא אֱלֹהִים" — בִּשְׁבִיל הַתּוֹרָה שֶׁנִּקְרֵאת רֵאשִׁית...',
      '',
      '**לדיון:** מה לדעתכם המסר?',
    ],
    tags: ['בראשית', 'בריאה', 'תחילת התורה'],
  },
];

export function getCurrentParasha(): { id: string; name: string; sefer: string } {
  // Simple calculation based on week of year
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const week = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  return parashiyot[week % parashiyot.length];
}
