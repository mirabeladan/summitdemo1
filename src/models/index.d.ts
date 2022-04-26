import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DestinationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Destinations {
  readonly id: string;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Destinations, DestinationsMetaData>);
  static copyOf(source: Destinations, mutator: (draft: MutableModel<Destinations, DestinationsMetaData>) => MutableModel<Destinations, DestinationsMetaData> | void): Destinations;
}