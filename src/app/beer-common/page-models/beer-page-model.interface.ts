export interface Beer extends Base {
  id: number;
  name: string;
  description: string;
  foodPairings: string;
  originalGravity: number;
  abv: number;
  ibu: number;
  glasswareId: number;
  glass: Base;

  styleId: number;
  style: Base;

  isOrganic: string;

  labels: { icon: string; medium: string; large: string; }

  servingTemperature: string;
  servingTemperatureDisplay: string;

  // status
  // statusDisplay

  availableId: number;
  available: Base;

  beerVariationId: number;
  beerVariation: Base;

  year: string;
}

interface Base {
  id: number;
  name: string;
  description: string;
}
