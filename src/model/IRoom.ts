export interface IRoom {
  id: number,
  number: Number, 
  luxe:  Boolean, 
  stars:  Number, 
  reviewcount:  Number, 

  beds:  Number, 
  bedrooms:  Number, 
  bathrooms:  Number, 

  adult:  Number, 
  children:  Number, 
  babies:  Number, 

  comfort:  string[], 
  daystart:  Date, 
  dayend:  Date, 
  price:  Number, 
  photos:  string[]
}