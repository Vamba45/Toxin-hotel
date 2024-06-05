export interface IRoom {
  number: Number, 
  luxe:  Boolean, 
  stars:  Number, 
  reviewCount:  Number, 

  beds:  Number, 
  bedRooms:  Number, 
  bathRooms:  Number, 

  adult:  Number, 
  children:  Number, 
  babies:  Number, 

  comfort:  string[], 
  dayStart:  Date, 
  dayEnd:  Date, 
  price:  Number, 
  photos:  string[], 
}