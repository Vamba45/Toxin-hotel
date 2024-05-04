export interface IRoom {
    "isLuxe": boolean,
    "dayStart": string,
    "parent": number,
    "children": number,
    "baby": number,
    "price": number,
    "rules": {
      "canSmoke": boolean,
      "pets": boolean,
      "guests": boolean
    },
    "availability": {
      "wideCoridor": boolean,
      "assistant": boolean
    },
    "comfort": {
      "bedrooms": number,
      "bed": number,
      "bath": number
    },
    "number": number,
    "reviewNumber": number,
    "starCount": number,
    "photos": [],
    "additionalComfort": {
      "breakfast": boolean,
      "desk": boolean,
      "highChair": boolean,
      "babyCrib": boolean
    }
}