export enum RoomCategory{
  Standart,
  Superior,
  Apartment,
  Lux,
  Duplex
}

export const RoomCategory2LabelMapping = {
  [RoomCategory.Standart]: "Standart room",
  [RoomCategory.Superior]: "Superior room",
  [RoomCategory.Apartment]: "Apartment room",
  [RoomCategory.Lux]: "Lux room",
  [RoomCategory.Duplex]: "Duplex room",
}
