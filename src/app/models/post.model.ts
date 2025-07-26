export interface Ipost{
  title:string;
  body:string;
  id:number;
  userid:number;
  imgurl:string;
  date: Date;
  like:boolean;
  likes:number;
  comments:string[];
}
