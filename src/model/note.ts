export class Note {
  _id: string;
  title : string;
  content : string;
  dateCreation: number;
  checklist : boolean;
  reminder : Date;
  items : [any];
}
