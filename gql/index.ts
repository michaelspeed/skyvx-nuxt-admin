import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type AirportInput = {
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['ID']>;
  city?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Airports = {
  __typename?: 'Airports';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Locations>;
  city?: Maybe<Cities>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type AirportsAggregator = {
  __typename?: 'AirportsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AirportsConnection = {
  __typename?: 'AirportsConnection';
  values?: Maybe<Array<Maybe<Airports>>>;
  groupBy?: Maybe<AirportsGroupBy>;
  aggregate?: Maybe<AirportsAggregator>;
};

export type AirportsConnectionCity = {
  __typename?: 'AirportsConnectionCity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AirportsConnection>;
};

export type AirportsConnectionCreated_At = {
  __typename?: 'AirportsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AirportsConnection>;
};

export type AirportsConnectionId = {
  __typename?: 'AirportsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AirportsConnection>;
};

export type AirportsConnectionLocation = {
  __typename?: 'AirportsConnectionLocation';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AirportsConnection>;
};

export type AirportsConnectionName = {
  __typename?: 'AirportsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AirportsConnection>;
};

export type AirportsConnectionPublished_At = {
  __typename?: 'AirportsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AirportsConnection>;
};

export type AirportsConnectionUpdated_At = {
  __typename?: 'AirportsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AirportsConnection>;
};

export type AirportsGroupBy = {
  __typename?: 'AirportsGroupBy';
  id?: Maybe<Array<Maybe<AirportsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AirportsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AirportsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<AirportsConnectionName>>>;
  location?: Maybe<Array<Maybe<AirportsConnectionLocation>>>;
  city?: Maybe<Array<Maybe<AirportsConnectionCity>>>;
  published_at?: Maybe<Array<Maybe<AirportsConnectionPublished_At>>>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Cities = {
  __typename?: 'Cities';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  cmapping?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  location?: Maybe<Locations>;
  currency?: Maybe<Currency>;
  country?: Maybe<Country>;
  hotel?: Maybe<Scalars['Boolean']>;
  intercity?: Maybe<Scalars['Boolean']>;
  tours?: Maybe<Scalars['Boolean']>;
  hourly?: Maybe<Scalars['Boolean']>;
  interoriginpricing?: Maybe<Pricing>;
  interdestinationpricing?: Maybe<Pricing>;
  hourlypricing?: Maybe<Pricing>;
  published_at?: Maybe<Scalars['DateTime']>;
  airports?: Maybe<Array<Maybe<Airports>>>;
  hotels?: Maybe<Array<Maybe<Hotels>>>;
  hotelpricings?: Maybe<Array<Maybe<Pricing>>>;
};


export type CitiesAirportsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CitiesHotelsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CitiesHotelpricingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CitiesAggregator = {
  __typename?: 'CitiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CitiesConnection = {
  __typename?: 'CitiesConnection';
  values?: Maybe<Array<Maybe<Cities>>>;
  groupBy?: Maybe<CitiesGroupBy>;
  aggregate?: Maybe<CitiesAggregator>;
};

export type CitiesConnectionCmapping = {
  __typename?: 'CitiesConnectionCmapping';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionCountry = {
  __typename?: 'CitiesConnectionCountry';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionCreated_At = {
  __typename?: 'CitiesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionCurrency = {
  __typename?: 'CitiesConnectionCurrency';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionHotel = {
  __typename?: 'CitiesConnectionHotel';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionHourly = {
  __typename?: 'CitiesConnectionHourly';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionHourlypricing = {
  __typename?: 'CitiesConnectionHourlypricing';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionId = {
  __typename?: 'CitiesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionIntercity = {
  __typename?: 'CitiesConnectionIntercity';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionInterdestinationpricing = {
  __typename?: 'CitiesConnectionInterdestinationpricing';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionInteroriginpricing = {
  __typename?: 'CitiesConnectionInteroriginpricing';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionLabel = {
  __typename?: 'CitiesConnectionLabel';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionLocation = {
  __typename?: 'CitiesConnectionLocation';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionName = {
  __typename?: 'CitiesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionPublished_At = {
  __typename?: 'CitiesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionTours = {
  __typename?: 'CitiesConnectionTours';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionUpdated_At = {
  __typename?: 'CitiesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesGroupBy = {
  __typename?: 'CitiesGroupBy';
  id?: Maybe<Array<Maybe<CitiesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CitiesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CitiesConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CitiesConnectionName>>>;
  cmapping?: Maybe<Array<Maybe<CitiesConnectionCmapping>>>;
  label?: Maybe<Array<Maybe<CitiesConnectionLabel>>>;
  location?: Maybe<Array<Maybe<CitiesConnectionLocation>>>;
  currency?: Maybe<Array<Maybe<CitiesConnectionCurrency>>>;
  country?: Maybe<Array<Maybe<CitiesConnectionCountry>>>;
  hotel?: Maybe<Array<Maybe<CitiesConnectionHotel>>>;
  intercity?: Maybe<Array<Maybe<CitiesConnectionIntercity>>>;
  tours?: Maybe<Array<Maybe<CitiesConnectionTours>>>;
  hourly?: Maybe<Array<Maybe<CitiesConnectionHourly>>>;
  interoriginpricing?: Maybe<Array<Maybe<CitiesConnectionInteroriginpricing>>>;
  interdestinationpricing?: Maybe<Array<Maybe<CitiesConnectionInterdestinationpricing>>>;
  hourlypricing?: Maybe<Array<Maybe<CitiesConnectionHourlypricing>>>;
  published_at?: Maybe<Array<Maybe<CitiesConnectionPublished_At>>>;
};

export type CityInput = {
  name?: Maybe<Scalars['String']>;
  cmapping?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['ID']>;
  airports?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currency?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['ID']>;
  hotel?: Maybe<Scalars['Boolean']>;
  intercity?: Maybe<Scalars['Boolean']>;
  tours?: Maybe<Scalars['Boolean']>;
  hourly?: Maybe<Scalars['Boolean']>;
  interoriginpricing?: Maybe<Scalars['ID']>;
  interdestinationpricing?: Maybe<Scalars['ID']>;
  hotels?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hotelpricings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hourlypricing?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  cities?: Maybe<Array<Maybe<Cities>>>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
};


export type CountryCitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CountryCurrenciesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CountryAggregator = {
  __typename?: 'CountryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  values?: Maybe<Array<Maybe<Country>>>;
  groupBy?: Maybe<CountryGroupBy>;
  aggregate?: Maybe<CountryAggregator>;
};

export type CountryConnectionCode = {
  __typename?: 'CountryConnectionCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionCreated_At = {
  __typename?: 'CountryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionEnabled = {
  __typename?: 'CountryConnectionEnabled';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionId = {
  __typename?: 'CountryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionName = {
  __typename?: 'CountryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionPublished_At = {
  __typename?: 'CountryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionUpdated_At = {
  __typename?: 'CountryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryGroupBy = {
  __typename?: 'CountryGroupBy';
  id?: Maybe<Array<Maybe<CountryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CountryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CountryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CountryConnectionName>>>;
  code?: Maybe<Array<Maybe<CountryConnectionCode>>>;
  enabled?: Maybe<Array<Maybe<CountryConnectionEnabled>>>;
  published_at?: Maybe<Array<Maybe<CountryConnectionPublished_At>>>;
};

export type CountryInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currencies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateAirportInput = {
  data?: Maybe<AirportInput>;
};

export type CreateAirportPayload = {
  __typename?: 'createAirportPayload';
  airport?: Maybe<Airports>;
};

export type CreateCityInput = {
  data?: Maybe<CityInput>;
};

export type CreateCityPayload = {
  __typename?: 'createCityPayload';
  city?: Maybe<Cities>;
};

export type CreateCountryInput = {
  data?: Maybe<CountryInput>;
};

export type CreateCountryPayload = {
  __typename?: 'createCountryPayload';
  country?: Maybe<Country>;
};

export type CreateCurrencyInput = {
  data?: Maybe<CurrencyInput>;
};

export type CreateCurrencyPayload = {
  __typename?: 'createCurrencyPayload';
  currency?: Maybe<Currency>;
};

export type CreateHotelInput = {
  data?: Maybe<HotelInput>;
};

export type CreateHotelPayload = {
  __typename?: 'createHotelPayload';
  hotel?: Maybe<Hotels>;
};

export type CreateLocationInput = {
  data?: Maybe<LocationInput>;
};

export type CreateLocationPayload = {
  __typename?: 'createLocationPayload';
  location?: Maybe<Locations>;
};

export type CreatePricingInput = {
  data?: Maybe<PricingInput>;
};

export type CreatePricingPayload = {
  __typename?: 'createPricingPayload';
  pricing?: Maybe<Pricing>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateVehicleInput = {
  data?: Maybe<VehicleInput>;
};

export type CreateVehiclePayload = {
  __typename?: 'createVehiclePayload';
  vehicle?: Maybe<Vehicles>;
};

export type Currency = {
  __typename?: 'Currency';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  base?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Country>;
  unicode?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  cities?: Maybe<Array<Maybe<Cities>>>;
};


export type CurrencyCitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CurrencyAggregator = {
  __typename?: 'CurrencyAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<CurrencyAggregatorSum>;
  avg?: Maybe<CurrencyAggregatorAvg>;
  min?: Maybe<CurrencyAggregatorMin>;
  max?: Maybe<CurrencyAggregatorMax>;
};

export type CurrencyAggregatorAvg = {
  __typename?: 'CurrencyAggregatorAvg';
  value?: Maybe<Scalars['Float']>;
};

export type CurrencyAggregatorMax = {
  __typename?: 'CurrencyAggregatorMax';
  value?: Maybe<Scalars['Float']>;
};

export type CurrencyAggregatorMin = {
  __typename?: 'CurrencyAggregatorMin';
  value?: Maybe<Scalars['Float']>;
};

export type CurrencyAggregatorSum = {
  __typename?: 'CurrencyAggregatorSum';
  value?: Maybe<Scalars['Float']>;
};

export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  values?: Maybe<Array<Maybe<Currency>>>;
  groupBy?: Maybe<CurrencyGroupBy>;
  aggregate?: Maybe<CurrencyAggregator>;
};

export type CurrencyConnectionBase = {
  __typename?: 'CurrencyConnectionBase';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionCountry = {
  __typename?: 'CurrencyConnectionCountry';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionCreated_At = {
  __typename?: 'CurrencyConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionId = {
  __typename?: 'CurrencyConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionKey = {
  __typename?: 'CurrencyConnectionKey';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionName = {
  __typename?: 'CurrencyConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionPublished_At = {
  __typename?: 'CurrencyConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionUnicode = {
  __typename?: 'CurrencyConnectionUnicode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionUpdated_At = {
  __typename?: 'CurrencyConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyConnectionValue = {
  __typename?: 'CurrencyConnectionValue';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<CurrencyConnection>;
};

export type CurrencyGroupBy = {
  __typename?: 'CurrencyGroupBy';
  id?: Maybe<Array<Maybe<CurrencyConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CurrencyConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CurrencyConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CurrencyConnectionName>>>;
  key?: Maybe<Array<Maybe<CurrencyConnectionKey>>>;
  value?: Maybe<Array<Maybe<CurrencyConnectionValue>>>;
  base?: Maybe<Array<Maybe<CurrencyConnectionBase>>>;
  country?: Maybe<Array<Maybe<CurrencyConnectionCountry>>>;
  unicode?: Maybe<Array<Maybe<CurrencyConnectionUnicode>>>;
  published_at?: Maybe<Array<Maybe<CurrencyConnectionPublished_At>>>;
};

export type CurrencyInput = {
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  base?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['ID']>;
  unicode?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type DeleteAirportInput = {
  where?: Maybe<InputId>;
};

export type DeleteAirportPayload = {
  __typename?: 'deleteAirportPayload';
  airport?: Maybe<Airports>;
};

export type DeleteCityInput = {
  where?: Maybe<InputId>;
};

export type DeleteCityPayload = {
  __typename?: 'deleteCityPayload';
  city?: Maybe<Cities>;
};

export type DeleteCountryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCountryPayload = {
  __typename?: 'deleteCountryPayload';
  country?: Maybe<Country>;
};

export type DeleteCurrencyInput = {
  where?: Maybe<InputId>;
};

export type DeleteCurrencyPayload = {
  __typename?: 'deleteCurrencyPayload';
  currency?: Maybe<Currency>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteHotelInput = {
  where?: Maybe<InputId>;
};

export type DeleteHotelPayload = {
  __typename?: 'deleteHotelPayload';
  hotel?: Maybe<Hotels>;
};

export type DeleteLocationInput = {
  where?: Maybe<InputId>;
};

export type DeleteLocationPayload = {
  __typename?: 'deleteLocationPayload';
  location?: Maybe<Locations>;
};

export type DeletePricingInput = {
  where?: Maybe<InputId>;
};

export type DeletePricingPayload = {
  __typename?: 'deletePricingPayload';
  pricing?: Maybe<Pricing>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteVehicleInput = {
  where?: Maybe<InputId>;
};

export type DeleteVehiclePayload = {
  __typename?: 'deleteVehiclePayload';
  vehicle?: Maybe<Vehicles>;
};

export type EditAirportInput = {
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['ID']>;
  city?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCityInput = {
  name?: Maybe<Scalars['String']>;
  cmapping?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['ID']>;
  airports?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currency?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['ID']>;
  hotel?: Maybe<Scalars['Boolean']>;
  intercity?: Maybe<Scalars['Boolean']>;
  tours?: Maybe<Scalars['Boolean']>;
  hourly?: Maybe<Scalars['Boolean']>;
  interoriginpricing?: Maybe<Scalars['ID']>;
  interdestinationpricing?: Maybe<Scalars['ID']>;
  hotels?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hotelpricings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hourlypricing?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCountryInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currencies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCurrencyInput = {
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  base?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['ID']>;
  unicode?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHotelInput = {
  name?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocationInput = {
  fomat?: Maybe<Scalars['String']>;
  geoJSON?: Maybe<Scalars['JSON']>;
  placeId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['ID']>;
  airport?: Maybe<Scalars['ID']>;
  hotel?: Maybe<Scalars['ID']>;
  hoteloriginpricings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hoteldestpricings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPricingInput = {
  nameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Pricing_Type>;
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  origincity?: Maybe<Scalars['ID']>;
  destinationcity?: Maybe<Scalars['ID']>;
  vehicle?: Maybe<Scalars['ID']>;
  originlocation?: Maybe<Scalars['ID']>;
  destinationlocation?: Maybe<Scalars['ID']>;
  hotelcity?: Maybe<Scalars['ID']>;
  trip?: Maybe<Enum_Pricing_Trip>;
  hourlycity?: Maybe<Scalars['ID']>;
  horulyUnits?: Maybe<Enum_Pricing_Horulyunits>;
  tripJumps?: Maybe<Scalars['Float']>;
  distance?: Maybe<Enum_Pricing_Distance>;
  unitjumps?: Maybe<Scalars['Int']>;
  addBase?: Maybe<Scalars['Float']>;
  distanceBundle?: Maybe<Scalars['Int']>;
  minDuration?: Maybe<Scalars['Int']>;
  maxDuration?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Long']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditVehicleInput = {
  vehicleClass?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tagLiine?: Maybe<Scalars['String']>;
  operations?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['ID']>;
  luggage?: Maybe<Scalars['Boolean']>;
  max?: Maybe<Scalars['Int']>;
  occupancy_log?: Maybe<Scalars['String']>;
  pricings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum Enum_Pricing_Distance {
  Km = 'KM',
  Miles = 'MILES'
}

export enum Enum_Pricing_Horulyunits {
  Hours = 'HOURS',
  Minutes = 'MINUTES',
  Days = 'DAYS'
}

export enum Enum_Pricing_Trip {
  Airport = 'AIRPORT',
  Bus = 'BUS',
  Railway = 'RAILWAY',
  General = 'GENERAL'
}

export enum Enum_Pricing_Type {
  Inter = 'INTER',
  Hour = 'HOUR',
  Hotel = 'HOTEL',
  Tour = 'TOUR'
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type HotelInput = {
  name?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Hotels = {
  __typename?: 'Hotels';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  locations?: Maybe<Array<Maybe<Locations>>>;
  cities?: Maybe<Array<Maybe<Cities>>>;
};


export type HotelsLocationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type HotelsCitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HotelsAggregator = {
  __typename?: 'HotelsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HotelsConnection = {
  __typename?: 'HotelsConnection';
  values?: Maybe<Array<Maybe<Hotels>>>;
  groupBy?: Maybe<HotelsGroupBy>;
  aggregate?: Maybe<HotelsAggregator>;
};

export type HotelsConnectionCreated_At = {
  __typename?: 'HotelsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionId = {
  __typename?: 'HotelsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionName = {
  __typename?: 'HotelsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionPublished_At = {
  __typename?: 'HotelsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsConnectionUpdated_At = {
  __typename?: 'HotelsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HotelsConnection>;
};

export type HotelsGroupBy = {
  __typename?: 'HotelsGroupBy';
  id?: Maybe<Array<Maybe<HotelsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<HotelsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<HotelsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<HotelsConnectionName>>>;
  published_at?: Maybe<Array<Maybe<HotelsConnectionPublished_At>>>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type LocationInput = {
  fomat?: Maybe<Scalars['String']>;
  geoJSON?: Maybe<Scalars['JSON']>;
  placeId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['ID']>;
  airport?: Maybe<Scalars['ID']>;
  hotel?: Maybe<Scalars['ID']>;
  hoteloriginpricings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hoteldestpricings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Locations = {
  __typename?: 'Locations';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  fomat?: Maybe<Scalars['String']>;
  geoJSON?: Maybe<Scalars['JSON']>;
  placeId?: Maybe<Scalars['String']>;
  city?: Maybe<Cities>;
  airport?: Maybe<Airports>;
  hotel?: Maybe<Hotels>;
  published_at?: Maybe<Scalars['DateTime']>;
  hoteloriginpricings?: Maybe<Array<Maybe<Pricing>>>;
  hoteldestpricings?: Maybe<Array<Maybe<Pricing>>>;
};


export type LocationsHoteloriginpricingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type LocationsHoteldestpricingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type LocationsAggregator = {
  __typename?: 'LocationsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  values?: Maybe<Array<Maybe<Locations>>>;
  groupBy?: Maybe<LocationsGroupBy>;
  aggregate?: Maybe<LocationsAggregator>;
};

export type LocationsConnectionAirport = {
  __typename?: 'LocationsConnectionAirport';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionCity = {
  __typename?: 'LocationsConnectionCity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionCreated_At = {
  __typename?: 'LocationsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionFomat = {
  __typename?: 'LocationsConnectionFomat';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionGeoJson = {
  __typename?: 'LocationsConnectionGeoJSON';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionHotel = {
  __typename?: 'LocationsConnectionHotel';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionId = {
  __typename?: 'LocationsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionPlaceId = {
  __typename?: 'LocationsConnectionPlaceId';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionPublished_At = {
  __typename?: 'LocationsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsConnectionUpdated_At = {
  __typename?: 'LocationsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LocationsConnection>;
};

export type LocationsGroupBy = {
  __typename?: 'LocationsGroupBy';
  id?: Maybe<Array<Maybe<LocationsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LocationsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LocationsConnectionUpdated_At>>>;
  fomat?: Maybe<Array<Maybe<LocationsConnectionFomat>>>;
  geoJSON?: Maybe<Array<Maybe<LocationsConnectionGeoJson>>>;
  placeId?: Maybe<Array<Maybe<LocationsConnectionPlaceId>>>;
  city?: Maybe<Array<Maybe<LocationsConnectionCity>>>;
  airport?: Maybe<Array<Maybe<LocationsConnectionAirport>>>;
  hotel?: Maybe<Array<Maybe<LocationsConnectionHotel>>>;
  published_at?: Maybe<Array<Maybe<LocationsConnectionPublished_At>>>;
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Airports | AirportsConnection | AirportsAggregator | AirportsGroupBy | AirportsConnectionId | AirportsConnectionCreated_At | AirportsConnectionUpdated_At | AirportsConnectionName | AirportsConnectionLocation | AirportsConnectionCity | AirportsConnectionPublished_At | CreateAirportPayload | UpdateAirportPayload | DeleteAirportPayload | Cities | CitiesConnection | CitiesAggregator | CitiesGroupBy | CitiesConnectionId | CitiesConnectionCreated_At | CitiesConnectionUpdated_At | CitiesConnectionName | CitiesConnectionCmapping | CitiesConnectionLabel | CitiesConnectionLocation | CitiesConnectionCurrency | CitiesConnectionCountry | CitiesConnectionHotel | CitiesConnectionIntercity | CitiesConnectionTours | CitiesConnectionHourly | CitiesConnectionInteroriginpricing | CitiesConnectionInterdestinationpricing | CitiesConnectionHourlypricing | CitiesConnectionPublished_At | CreateCityPayload | UpdateCityPayload | DeleteCityPayload | Country | CountryConnection | CountryAggregator | CountryGroupBy | CountryConnectionId | CountryConnectionCreated_At | CountryConnectionUpdated_At | CountryConnectionName | CountryConnectionCode | CountryConnectionEnabled | CountryConnectionPublished_At | CreateCountryPayload | UpdateCountryPayload | DeleteCountryPayload | Currency | CurrencyConnection | CurrencyAggregator | CurrencyAggregatorSum | CurrencyAggregatorAvg | CurrencyAggregatorMin | CurrencyAggregatorMax | CurrencyGroupBy | CurrencyConnectionId | CurrencyConnectionCreated_At | CurrencyConnectionUpdated_At | CurrencyConnectionName | CurrencyConnectionKey | CurrencyConnectionValue | CurrencyConnectionBase | CurrencyConnectionCountry | CurrencyConnectionUnicode | CurrencyConnectionPublished_At | CreateCurrencyPayload | UpdateCurrencyPayload | DeleteCurrencyPayload | Hotels | HotelsConnection | HotelsAggregator | HotelsGroupBy | HotelsConnectionId | HotelsConnectionCreated_At | HotelsConnectionUpdated_At | HotelsConnectionName | HotelsConnectionPublished_At | CreateHotelPayload | UpdateHotelPayload | DeleteHotelPayload | Locations | LocationsConnection | LocationsAggregator | LocationsGroupBy | LocationsConnectionId | LocationsConnectionCreated_At | LocationsConnectionUpdated_At | LocationsConnectionFomat | LocationsConnectionGeoJson | LocationsConnectionPlaceId | LocationsConnectionCity | LocationsConnectionAirport | LocationsConnectionHotel | LocationsConnectionPublished_At | CreateLocationPayload | UpdateLocationPayload | DeleteLocationPayload | Pricing | PricingConnection | PricingAggregator | PricingAggregatorSum | PricingAggregatorAvg | PricingAggregatorMin | PricingAggregatorMax | PricingGroupBy | PricingConnectionId | PricingConnectionCreated_At | PricingConnectionUpdated_At | PricingConnectionNameSlug | PricingConnectionType | PricingConnectionBase | PricingConnectionTax | PricingConnectionFlat | PricingConnectionToll | PricingConnectionOrigincity | PricingConnectionDestinationcity | PricingConnectionVehicle | PricingConnectionOriginlocation | PricingConnectionDestinationlocation | PricingConnectionHotelcity | PricingConnectionTrip | PricingConnectionHourlycity | PricingConnectionHorulyUnits | PricingConnectionTripJumps | PricingConnectionDistance | PricingConnectionUnitjumps | PricingConnectionAddBase | PricingConnectionDistanceBundle | PricingConnectionMinDuration | PricingConnectionMaxDuration | PricingConnectionPublished_At | CreatePricingPayload | UpdatePricingPayload | DeletePricingPayload | Vehicles | VehiclesConnection | VehiclesAggregator | VehiclesAggregatorSum | VehiclesAggregatorAvg | VehiclesAggregatorMin | VehiclesAggregatorMax | VehiclesGroupBy | VehiclesConnectionId | VehiclesConnectionCreated_At | VehiclesConnectionUpdated_At | VehiclesConnectionVehicleClass | VehiclesConnectionTitle | VehiclesConnectionTagLiine | VehiclesConnectionOperations | VehiclesConnectionIcon | VehiclesConnectionLogo | VehiclesConnectionLuggage | VehiclesConnectionMax | VehiclesConnectionOccupancy_Log | VehiclesConnectionPublished_At | CreateVehiclePayload | UpdateVehiclePayload | DeleteVehiclePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionFirstName | UsersPermissionsUserConnectionLastName | UsersPermissionsUserConnectionPhone | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createAirport?: Maybe<CreateAirportPayload>;
  updateAirport?: Maybe<UpdateAirportPayload>;
  deleteAirport?: Maybe<DeleteAirportPayload>;
  createCity?: Maybe<CreateCityPayload>;
  updateCity?: Maybe<UpdateCityPayload>;
  deleteCity?: Maybe<DeleteCityPayload>;
  createCountry?: Maybe<CreateCountryPayload>;
  updateCountry?: Maybe<UpdateCountryPayload>;
  deleteCountry?: Maybe<DeleteCountryPayload>;
  createCurrency?: Maybe<CreateCurrencyPayload>;
  updateCurrency?: Maybe<UpdateCurrencyPayload>;
  deleteCurrency?: Maybe<DeleteCurrencyPayload>;
  createHotel?: Maybe<CreateHotelPayload>;
  updateHotel?: Maybe<UpdateHotelPayload>;
  deleteHotel?: Maybe<DeleteHotelPayload>;
  createLocation?: Maybe<CreateLocationPayload>;
  updateLocation?: Maybe<UpdateLocationPayload>;
  deleteLocation?: Maybe<DeleteLocationPayload>;
  createPricing?: Maybe<CreatePricingPayload>;
  updatePricing?: Maybe<UpdatePricingPayload>;
  deletePricing?: Maybe<DeletePricingPayload>;
  createVehicle?: Maybe<CreateVehiclePayload>;
  updateVehicle?: Maybe<UpdateVehiclePayload>;
  deleteVehicle?: Maybe<DeleteVehiclePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateAirportArgs = {
  input?: Maybe<CreateAirportInput>;
};


export type MutationUpdateAirportArgs = {
  input?: Maybe<UpdateAirportInput>;
};


export type MutationDeleteAirportArgs = {
  input?: Maybe<DeleteAirportInput>;
};


export type MutationCreateCityArgs = {
  input?: Maybe<CreateCityInput>;
};


export type MutationUpdateCityArgs = {
  input?: Maybe<UpdateCityInput>;
};


export type MutationDeleteCityArgs = {
  input?: Maybe<DeleteCityInput>;
};


export type MutationCreateCountryArgs = {
  input?: Maybe<CreateCountryInput>;
};


export type MutationUpdateCountryArgs = {
  input?: Maybe<UpdateCountryInput>;
};


export type MutationDeleteCountryArgs = {
  input?: Maybe<DeleteCountryInput>;
};


export type MutationCreateCurrencyArgs = {
  input?: Maybe<CreateCurrencyInput>;
};


export type MutationUpdateCurrencyArgs = {
  input?: Maybe<UpdateCurrencyInput>;
};


export type MutationDeleteCurrencyArgs = {
  input?: Maybe<DeleteCurrencyInput>;
};


export type MutationCreateHotelArgs = {
  input?: Maybe<CreateHotelInput>;
};


export type MutationUpdateHotelArgs = {
  input?: Maybe<UpdateHotelInput>;
};


export type MutationDeleteHotelArgs = {
  input?: Maybe<DeleteHotelInput>;
};


export type MutationCreateLocationArgs = {
  input?: Maybe<CreateLocationInput>;
};


export type MutationUpdateLocationArgs = {
  input?: Maybe<UpdateLocationInput>;
};


export type MutationDeleteLocationArgs = {
  input?: Maybe<DeleteLocationInput>;
};


export type MutationCreatePricingArgs = {
  input?: Maybe<CreatePricingInput>;
};


export type MutationUpdatePricingArgs = {
  input?: Maybe<UpdatePricingInput>;
};


export type MutationDeletePricingArgs = {
  input?: Maybe<DeletePricingInput>;
};


export type MutationCreateVehicleArgs = {
  input?: Maybe<CreateVehicleInput>;
};


export type MutationUpdateVehicleArgs = {
  input?: Maybe<UpdateVehicleInput>;
};


export type MutationDeleteVehicleArgs = {
  input?: Maybe<DeleteVehicleInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type Pricing = {
  __typename?: 'Pricing';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  nameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Pricing_Type>;
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  origincity?: Maybe<Cities>;
  destinationcity?: Maybe<Cities>;
  vehicle?: Maybe<Vehicles>;
  originlocation?: Maybe<Locations>;
  destinationlocation?: Maybe<Locations>;
  hotelcity?: Maybe<Cities>;
  trip?: Maybe<Enum_Pricing_Trip>;
  hourlycity?: Maybe<Cities>;
  horulyUnits?: Maybe<Enum_Pricing_Horulyunits>;
  tripJumps?: Maybe<Scalars['Float']>;
  distance?: Maybe<Enum_Pricing_Distance>;
  unitjumps?: Maybe<Scalars['Int']>;
  addBase?: Maybe<Scalars['Float']>;
  distanceBundle?: Maybe<Scalars['Int']>;
  minDuration?: Maybe<Scalars['Int']>;
  maxDuration?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PricingAggregator = {
  __typename?: 'PricingAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<PricingAggregatorSum>;
  avg?: Maybe<PricingAggregatorAvg>;
  min?: Maybe<PricingAggregatorMin>;
  max?: Maybe<PricingAggregatorMax>;
};

export type PricingAggregatorAvg = {
  __typename?: 'PricingAggregatorAvg';
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  tripJumps?: Maybe<Scalars['Float']>;
  unitjumps?: Maybe<Scalars['Float']>;
  addBase?: Maybe<Scalars['Float']>;
  distanceBundle?: Maybe<Scalars['Float']>;
  minDuration?: Maybe<Scalars['Float']>;
  maxDuration?: Maybe<Scalars['Float']>;
};

export type PricingAggregatorMax = {
  __typename?: 'PricingAggregatorMax';
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  tripJumps?: Maybe<Scalars['Float']>;
  unitjumps?: Maybe<Scalars['Float']>;
  addBase?: Maybe<Scalars['Float']>;
  distanceBundle?: Maybe<Scalars['Float']>;
  minDuration?: Maybe<Scalars['Float']>;
  maxDuration?: Maybe<Scalars['Float']>;
};

export type PricingAggregatorMin = {
  __typename?: 'PricingAggregatorMin';
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  tripJumps?: Maybe<Scalars['Float']>;
  unitjumps?: Maybe<Scalars['Float']>;
  addBase?: Maybe<Scalars['Float']>;
  distanceBundle?: Maybe<Scalars['Float']>;
  minDuration?: Maybe<Scalars['Float']>;
  maxDuration?: Maybe<Scalars['Float']>;
};

export type PricingAggregatorSum = {
  __typename?: 'PricingAggregatorSum';
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  tripJumps?: Maybe<Scalars['Float']>;
  unitjumps?: Maybe<Scalars['Float']>;
  addBase?: Maybe<Scalars['Float']>;
  distanceBundle?: Maybe<Scalars['Float']>;
  minDuration?: Maybe<Scalars['Float']>;
  maxDuration?: Maybe<Scalars['Float']>;
};

export type PricingConnection = {
  __typename?: 'PricingConnection';
  values?: Maybe<Array<Maybe<Pricing>>>;
  groupBy?: Maybe<PricingGroupBy>;
  aggregate?: Maybe<PricingAggregator>;
};

export type PricingConnectionAddBase = {
  __typename?: 'PricingConnectionAddBase';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionBase = {
  __typename?: 'PricingConnectionBase';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionCreated_At = {
  __typename?: 'PricingConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionDestinationcity = {
  __typename?: 'PricingConnectionDestinationcity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionDestinationlocation = {
  __typename?: 'PricingConnectionDestinationlocation';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionDistance = {
  __typename?: 'PricingConnectionDistance';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionDistanceBundle = {
  __typename?: 'PricingConnectionDistanceBundle';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionFlat = {
  __typename?: 'PricingConnectionFlat';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionHorulyUnits = {
  __typename?: 'PricingConnectionHorulyUnits';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionHotelcity = {
  __typename?: 'PricingConnectionHotelcity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionHourlycity = {
  __typename?: 'PricingConnectionHourlycity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionId = {
  __typename?: 'PricingConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionMaxDuration = {
  __typename?: 'PricingConnectionMaxDuration';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionMinDuration = {
  __typename?: 'PricingConnectionMinDuration';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionNameSlug = {
  __typename?: 'PricingConnectionNameSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionOrigincity = {
  __typename?: 'PricingConnectionOrigincity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionOriginlocation = {
  __typename?: 'PricingConnectionOriginlocation';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionPublished_At = {
  __typename?: 'PricingConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionTax = {
  __typename?: 'PricingConnectionTax';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionToll = {
  __typename?: 'PricingConnectionToll';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionTrip = {
  __typename?: 'PricingConnectionTrip';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionTripJumps = {
  __typename?: 'PricingConnectionTripJumps';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionType = {
  __typename?: 'PricingConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionUnitjumps = {
  __typename?: 'PricingConnectionUnitjumps';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionUpdated_At = {
  __typename?: 'PricingConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingConnectionVehicle = {
  __typename?: 'PricingConnectionVehicle';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricingConnection>;
};

export type PricingGroupBy = {
  __typename?: 'PricingGroupBy';
  id?: Maybe<Array<Maybe<PricingConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PricingConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PricingConnectionUpdated_At>>>;
  nameSlug?: Maybe<Array<Maybe<PricingConnectionNameSlug>>>;
  type?: Maybe<Array<Maybe<PricingConnectionType>>>;
  base?: Maybe<Array<Maybe<PricingConnectionBase>>>;
  tax?: Maybe<Array<Maybe<PricingConnectionTax>>>;
  flat?: Maybe<Array<Maybe<PricingConnectionFlat>>>;
  toll?: Maybe<Array<Maybe<PricingConnectionToll>>>;
  origincity?: Maybe<Array<Maybe<PricingConnectionOrigincity>>>;
  destinationcity?: Maybe<Array<Maybe<PricingConnectionDestinationcity>>>;
  vehicle?: Maybe<Array<Maybe<PricingConnectionVehicle>>>;
  originlocation?: Maybe<Array<Maybe<PricingConnectionOriginlocation>>>;
  destinationlocation?: Maybe<Array<Maybe<PricingConnectionDestinationlocation>>>;
  hotelcity?: Maybe<Array<Maybe<PricingConnectionHotelcity>>>;
  trip?: Maybe<Array<Maybe<PricingConnectionTrip>>>;
  hourlycity?: Maybe<Array<Maybe<PricingConnectionHourlycity>>>;
  horulyUnits?: Maybe<Array<Maybe<PricingConnectionHorulyUnits>>>;
  tripJumps?: Maybe<Array<Maybe<PricingConnectionTripJumps>>>;
  distance?: Maybe<Array<Maybe<PricingConnectionDistance>>>;
  unitjumps?: Maybe<Array<Maybe<PricingConnectionUnitjumps>>>;
  addBase?: Maybe<Array<Maybe<PricingConnectionAddBase>>>;
  distanceBundle?: Maybe<Array<Maybe<PricingConnectionDistanceBundle>>>;
  minDuration?: Maybe<Array<Maybe<PricingConnectionMinDuration>>>;
  maxDuration?: Maybe<Array<Maybe<PricingConnectionMaxDuration>>>;
  published_at?: Maybe<Array<Maybe<PricingConnectionPublished_At>>>;
};

export type PricingInput = {
  nameSlug?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Pricing_Type>;
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  origincity?: Maybe<Scalars['ID']>;
  destinationcity?: Maybe<Scalars['ID']>;
  vehicle?: Maybe<Scalars['ID']>;
  originlocation?: Maybe<Scalars['ID']>;
  destinationlocation?: Maybe<Scalars['ID']>;
  hotelcity?: Maybe<Scalars['ID']>;
  trip?: Maybe<Enum_Pricing_Trip>;
  hourlycity?: Maybe<Scalars['ID']>;
  horulyUnits?: Maybe<Enum_Pricing_Horulyunits>;
  tripJumps?: Maybe<Scalars['Float']>;
  distance?: Maybe<Enum_Pricing_Distance>;
  unitjumps?: Maybe<Scalars['Int']>;
  addBase?: Maybe<Scalars['Float']>;
  distanceBundle?: Maybe<Scalars['Int']>;
  minDuration?: Maybe<Scalars['Int']>;
  maxDuration?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  airport?: Maybe<Airports>;
  airports?: Maybe<Array<Maybe<Airports>>>;
  airportsConnection?: Maybe<AirportsConnection>;
  city?: Maybe<Cities>;
  cities?: Maybe<Array<Maybe<Cities>>>;
  citiesConnection?: Maybe<CitiesConnection>;
  country?: Maybe<Country>;
  countries?: Maybe<Array<Maybe<Country>>>;
  countriesConnection?: Maybe<CountryConnection>;
  currency?: Maybe<Currency>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  currenciesConnection?: Maybe<CurrencyConnection>;
  hotel?: Maybe<Hotels>;
  hotels?: Maybe<Array<Maybe<Hotels>>>;
  hotelsConnection?: Maybe<HotelsConnection>;
  location?: Maybe<Locations>;
  locations?: Maybe<Array<Maybe<Locations>>>;
  locationsConnection?: Maybe<LocationsConnection>;
  pricing?: Maybe<Pricing>;
  pricings?: Maybe<Array<Maybe<Pricing>>>;
  pricingsConnection?: Maybe<PricingConnection>;
  vehicle?: Maybe<Vehicles>;
  vehicles?: Maybe<Array<Maybe<Vehicles>>>;
  vehiclesConnection?: Maybe<VehiclesConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryAirportArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryAirportsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryAirportsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCityArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCitiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCountriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCountriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCurrencyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCurrenciesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCurrenciesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHotelArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryHotelsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryHotelsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryLocationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryLocationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPricingArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPricingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPricingsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryVehicleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryVehiclesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryVehiclesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type UpdateAirportInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAirportInput>;
};

export type UpdateAirportPayload = {
  __typename?: 'updateAirportPayload';
  airport?: Maybe<Airports>;
};

export type UpdateCityInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCityInput>;
};

export type UpdateCityPayload = {
  __typename?: 'updateCityPayload';
  city?: Maybe<Cities>;
};

export type UpdateCountryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCountryInput>;
};

export type UpdateCountryPayload = {
  __typename?: 'updateCountryPayload';
  country?: Maybe<Country>;
};

export type UpdateCurrencyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCurrencyInput>;
};

export type UpdateCurrencyPayload = {
  __typename?: 'updateCurrencyPayload';
  currency?: Maybe<Currency>;
};

export type UpdateHotelInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditHotelInput>;
};

export type UpdateHotelPayload = {
  __typename?: 'updateHotelPayload';
  hotel?: Maybe<Hotels>;
};

export type UpdateLocationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLocationInput>;
};

export type UpdateLocationPayload = {
  __typename?: 'updateLocationPayload';
  location?: Maybe<Locations>;
};

export type UpdatePricingInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPricingInput>;
};

export type UpdatePricingPayload = {
  __typename?: 'updatePricingPayload';
  pricing?: Maybe<Pricing>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateVehicleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditVehicleInput>;
};

export type UpdateVehiclePayload = {
  __typename?: 'updateVehiclePayload';
  vehicle?: Maybe<Vehicles>;
};


export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Long']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Long']>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionFirstName = {
  __typename?: 'UsersPermissionsUserConnectionFirstName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionLastName = {
  __typename?: 'UsersPermissionsUserConnectionLastName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionPhone = {
  __typename?: 'UsersPermissionsUserConnectionPhone';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>;
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>;
  phone?: Maybe<Array<Maybe<UsersPermissionsUserConnectionPhone>>>;
};

export type VehicleInput = {
  vehicleClass?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tagLiine?: Maybe<Scalars['String']>;
  operations?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['ID']>;
  luggage?: Maybe<Scalars['Boolean']>;
  max?: Maybe<Scalars['Int']>;
  occupancy_log?: Maybe<Scalars['String']>;
  pricings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Vehicles = {
  __typename?: 'Vehicles';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  vehicleClass?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tagLiine?: Maybe<Scalars['String']>;
  operations?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFile>;
  logo?: Maybe<UploadFile>;
  luggage?: Maybe<Scalars['Boolean']>;
  max?: Maybe<Scalars['Int']>;
  occupancy_log?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  pricings?: Maybe<Array<Maybe<Pricing>>>;
};


export type VehiclesPricingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type VehiclesAggregator = {
  __typename?: 'VehiclesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<VehiclesAggregatorSum>;
  avg?: Maybe<VehiclesAggregatorAvg>;
  min?: Maybe<VehiclesAggregatorMin>;
  max?: Maybe<VehiclesAggregatorMax>;
};

export type VehiclesAggregatorAvg = {
  __typename?: 'VehiclesAggregatorAvg';
  max?: Maybe<Scalars['Float']>;
};

export type VehiclesAggregatorMax = {
  __typename?: 'VehiclesAggregatorMax';
  max?: Maybe<Scalars['Float']>;
};

export type VehiclesAggregatorMin = {
  __typename?: 'VehiclesAggregatorMin';
  max?: Maybe<Scalars['Float']>;
};

export type VehiclesAggregatorSum = {
  __typename?: 'VehiclesAggregatorSum';
  max?: Maybe<Scalars['Float']>;
};

export type VehiclesConnection = {
  __typename?: 'VehiclesConnection';
  values?: Maybe<Array<Maybe<Vehicles>>>;
  groupBy?: Maybe<VehiclesGroupBy>;
  aggregate?: Maybe<VehiclesAggregator>;
};

export type VehiclesConnectionCreated_At = {
  __typename?: 'VehiclesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionIcon = {
  __typename?: 'VehiclesConnectionIcon';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionId = {
  __typename?: 'VehiclesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionLogo = {
  __typename?: 'VehiclesConnectionLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionLuggage = {
  __typename?: 'VehiclesConnectionLuggage';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionMax = {
  __typename?: 'VehiclesConnectionMax';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionOccupancy_Log = {
  __typename?: 'VehiclesConnectionOccupancy_log';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionOperations = {
  __typename?: 'VehiclesConnectionOperations';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionPublished_At = {
  __typename?: 'VehiclesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionTagLiine = {
  __typename?: 'VehiclesConnectionTagLiine';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionTitle = {
  __typename?: 'VehiclesConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionUpdated_At = {
  __typename?: 'VehiclesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesConnectionVehicleClass = {
  __typename?: 'VehiclesConnectionVehicleClass';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VehiclesConnection>;
};

export type VehiclesGroupBy = {
  __typename?: 'VehiclesGroupBy';
  id?: Maybe<Array<Maybe<VehiclesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<VehiclesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<VehiclesConnectionUpdated_At>>>;
  vehicleClass?: Maybe<Array<Maybe<VehiclesConnectionVehicleClass>>>;
  title?: Maybe<Array<Maybe<VehiclesConnectionTitle>>>;
  tagLiine?: Maybe<Array<Maybe<VehiclesConnectionTagLiine>>>;
  operations?: Maybe<Array<Maybe<VehiclesConnectionOperations>>>;
  icon?: Maybe<Array<Maybe<VehiclesConnectionIcon>>>;
  logo?: Maybe<Array<Maybe<VehiclesConnectionLogo>>>;
  luggage?: Maybe<Array<Maybe<VehiclesConnectionLuggage>>>;
  max?: Maybe<Array<Maybe<VehiclesConnectionMax>>>;
  occupancy_log?: Maybe<Array<Maybe<VehiclesConnectionOccupancy_Log>>>;
  published_at?: Maybe<Array<Maybe<VehiclesConnectionPublished_At>>>;
};

export type CreateCountryMutationVariables = Exact<{
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
}>;


export type CreateCountryMutation = (
  { __typename?: 'Mutation' }
  & { createCountry?: Maybe<(
    { __typename?: 'createCountryPayload' }
    & { country?: Maybe<(
      { __typename?: 'Country' }
      & Pick<Country, 'id'>
    )> }
  )> }
);

export type CreateLoginMutationVariables = Exact<{
  identifier: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateLoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id' | 'email'>
      & { role?: Maybe<(
        { __typename?: 'UsersPermissionsMeRole' }
        & Pick<UsersPermissionsMeRole, 'id' | 'name' | 'type'>
      )> }
    ) }
  ) }
);

export type CreateCurrencyMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  base?: Maybe<Scalars['Boolean']>;
  unicode?: Maybe<Scalars['String']>;
}>;


export type CreateCurrencyMutation = (
  { __typename?: 'Mutation' }
  & { createCurrency?: Maybe<(
    { __typename?: 'createCurrencyPayload' }
    & { currency?: Maybe<(
      { __typename?: 'Currency' }
      & Pick<Currency, 'id'>
    )> }
  )> }
);

export type CreateLocationMutationVariables = Exact<{
  format?: Maybe<Scalars['String']>;
  geoJSON?: Maybe<Scalars['JSON']>;
  placeId?: Maybe<Scalars['String']>;
}>;


export type CreateLocationMutation = (
  { __typename?: 'Mutation' }
  & { createLocation?: Maybe<(
    { __typename?: 'createLocationPayload' }
    & { location?: Maybe<(
      { __typename?: 'Locations' }
      & Pick<Locations, 'id'>
    )> }
  )> }
);

export type CreateCityMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  cmapping?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['ID']>;
  hotel?: Maybe<Scalars['Boolean']>;
  intercity?: Maybe<Scalars['Boolean']>;
  tour?: Maybe<Scalars['Boolean']>;
  hourly?: Maybe<Scalars['Boolean']>;
}>;


export type CreateCityMutation = (
  { __typename?: 'Mutation' }
  & { createCity?: Maybe<(
    { __typename?: 'createCityPayload' }
    & { city?: Maybe<(
      { __typename?: 'Cities' }
      & Pick<Cities, 'id'>
    )> }
  )> }
);

export type UpdateCityMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  hotel?: Maybe<Scalars['Boolean']>;
  intercity?: Maybe<Scalars['Boolean']>;
  tour?: Maybe<Scalars['Boolean']>;
  hourly?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateCityMutation = (
  { __typename?: 'Mutation' }
  & { updateCity?: Maybe<(
    { __typename?: 'updateCityPayload' }
    & { city?: Maybe<(
      { __typename?: 'Cities' }
      & Pick<Cities, 'id'>
    )> }
  )> }
);

export type CreateAirportMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['ID']>;
  city?: Maybe<Scalars['ID']>;
}>;


export type CreateAirportMutation = (
  { __typename?: 'Mutation' }
  & { createAirport?: Maybe<(
    { __typename?: 'createAirportPayload' }
    & { airport?: Maybe<(
      { __typename?: 'Airports' }
      & Pick<Airports, 'id'>
    )> }
  )> }
);

export type CreateVehicleMutationVariables = Exact<{
  class?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  operations?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
  luggage?: Maybe<Scalars['Boolean']>;
  max?: Maybe<Scalars['Int']>;
  occ?: Maybe<Scalars['String']>;
}>;


export type CreateVehicleMutation = (
  { __typename?: 'Mutation' }
  & { createVehicle?: Maybe<(
    { __typename?: 'createVehiclePayload' }
    & { vehicle?: Maybe<(
      { __typename?: 'Vehicles' }
      & Pick<Vehicles, 'id'>
    )> }
  )> }
);

export type CreateIntercityPricingMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  vehicle?: Maybe<Scalars['ID']>;
  origincity?: Maybe<Scalars['ID']>;
  destinationcity?: Maybe<Scalars['ID']>;
}>;


export type CreateIntercityPricingMutation = (
  { __typename?: 'Mutation' }
  & { createPricing?: Maybe<(
    { __typename?: 'createPricingPayload' }
    & { pricing?: Maybe<(
      { __typename?: 'Pricing' }
      & Pick<Pricing, 'id'>
    )> }
  )> }
);

export type CreateHotelPricingMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  vehicle?: Maybe<Scalars['ID']>;
  oloc?: Maybe<Scalars['ID']>;
  dloc?: Maybe<Scalars['ID']>;
  hotel?: Maybe<Scalars['ID']>;
  trip?: Maybe<Enum_Pricing_Trip>;
}>;


export type CreateHotelPricingMutation = (
  { __typename?: 'Mutation' }
  & { createPricing?: Maybe<(
    { __typename?: 'createPricingPayload' }
    & { pricing?: Maybe<(
      { __typename?: 'Pricing' }
      & Pick<Pricing, 'id'>
    )> }
  )> }
);

export type CreateHotelMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  location: Array<Scalars['ID']>;
}>;


export type CreateHotelMutation = (
  { __typename?: 'Mutation' }
  & { createHotel?: Maybe<(
    { __typename?: 'createHotelPayload' }
    & { hotel?: Maybe<(
      { __typename?: 'Hotels' }
      & Pick<Hotels, 'id'>
    )> }
  )> }
);

export type CreateHourlyPricingMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  flat?: Maybe<Scalars['Float']>;
  toll?: Maybe<Scalars['Float']>;
  addBase?: Maybe<Scalars['Float']>;
  vehicle?: Maybe<Scalars['ID']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  dbundle?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['ID']>;
  hunit?: Maybe<Enum_Pricing_Horulyunits>;
  distance?: Maybe<Enum_Pricing_Distance>;
  unitJump?: Maybe<Scalars['Int']>;
}>;


export type CreateHourlyPricingMutation = (
  { __typename?: 'Mutation' }
  & { createPricing?: Maybe<(
    { __typename?: 'createPricingPayload' }
    & { pricing?: Maybe<(
      { __typename?: 'Pricing' }
      & Pick<Pricing, 'id'>
    )> }
  )> }
);

export type GetAllCountriesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetAllCountriesQuery = (
  { __typename?: 'Query' }
  & { countries?: Maybe<Array<Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'id' | 'created_at' | 'code' | 'name' | 'enabled'>
  )>>> }
);

export type GetAllCurrencyQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetAllCurrencyQuery = (
  { __typename?: 'Query' }
  & { currencies?: Maybe<Array<Maybe<(
    { __typename?: 'Currency' }
    & Pick<Currency, 'id' | 'created_at' | 'updated_at' | 'name' | 'key' | 'value'>
  )>>> }
);

export type GetSingleUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSingleUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UsersPermissionsUser' }
    & Pick<UsersPermissionsUser, 'id' | 'created_at' | 'updated_at' | 'username' | 'email' | 'provider' | 'confirmed' | 'firstName' | 'lastName' | 'phone'>
    & { role?: Maybe<(
      { __typename?: 'UsersPermissionsRole' }
      & Pick<UsersPermissionsRole, 'id' | 'type' | 'name'>
    )> }
  )> }
);

export type GetAllCountriesConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesConnectionQuery = (
  { __typename?: 'Query' }
  & { countriesConnection?: Maybe<(
    { __typename?: 'CountryConnection' }
    & { aggregate?: Maybe<(
      { __typename?: 'CountryAggregator' }
      & Pick<CountryAggregator, 'count' | 'totalCount'>
    )> }
  )> }
);

export type GetAllCurrenciesConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCurrenciesConnectionQuery = (
  { __typename?: 'Query' }
  & { currenciesConnection?: Maybe<(
    { __typename?: 'CurrencyConnection' }
    & { aggregate?: Maybe<(
      { __typename?: 'CurrencyAggregator' }
      & Pick<CurrencyAggregator, 'count' | 'totalCount'>
    )> }
  )> }
);

export type GetAllCitiesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetAllCitiesQuery = (
  { __typename?: 'Query' }
  & { cities?: Maybe<Array<Maybe<(
    { __typename?: 'Cities' }
    & Pick<Cities, 'id' | 'name' | 'cmapping' | 'label' | 'hotel' | 'intercity' | 'tours' | 'hourly'>
    & { location?: Maybe<(
      { __typename?: 'Locations' }
      & Pick<Locations, 'id' | 'fomat' | 'geoJSON' | 'placeId'>
    )>, airports?: Maybe<Array<Maybe<(
      { __typename?: 'Airports' }
      & Pick<Airports, 'id' | 'name'>
      & { location?: Maybe<(
        { __typename?: 'Locations' }
        & Pick<Locations, 'id' | 'fomat' | 'geoJSON' | 'placeId'>
      )> }
    )>>> }
  )>>> }
);

export type GetAllVehiclesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetAllVehiclesQuery = (
  { __typename?: 'Query' }
  & { vehicles?: Maybe<Array<Maybe<(
    { __typename?: 'Vehicles' }
    & Pick<Vehicles, 'id' | 'vehicleClass' | 'title' | 'tagLiine' | 'operations' | 'luggage' | 'max' | 'occupancy_log'>
    & { icon?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url'>
    )> }
  )>>> }
);

export type SearchLocationByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type SearchLocationByIdQuery = (
  { __typename?: 'Query' }
  & { locations?: Maybe<Array<Maybe<(
    { __typename?: 'Locations' }
    & Pick<Locations, 'id'>
    & { hotel?: Maybe<(
      { __typename?: 'Hotels' }
      & Pick<Hotels, 'id'>
    )> }
  )>>> }
);


export const CreateCountryDocument = gql`
    mutation CreateCountry($code: String, $name: String, $enabled: Boolean) {
  createCountry(input: {data: {code: $code, name: $name, enabled: $enabled}}) {
    country {
      id
    }
  }
}
    `;
export const CreateLoginDocument = gql`
    mutation CreateLogin($identifier: String!, $password: String!) {
  login(input: {identifier: $identifier, password: $password}) {
    user {
      id
      email
      role {
        id
        name
        type
      }
    }
    jwt
  }
}
    `;
export const CreateCurrencyDocument = gql`
    mutation CreateCurrency($name: String, $key: String, $value: Float, $base: Boolean, $unicode: String) {
  createCurrency(input: {data: {name: $name, key: $key, value: $value, base: $base, unicode: $unicode}}) {
    currency {
      id
    }
  }
}
    `;
export const CreateLocationDocument = gql`
    mutation CreateLocation($format: String, $geoJSON: JSON, $placeId: String) {
  createLocation(input: {data: {fomat: $format, geoJSON: $geoJSON, placeId: $placeId}}) {
    location {
      id
    }
  }
}
    `;
export const CreateCityDocument = gql`
    mutation CreateCity($name: String, $cmapping: String, $label: String, $location: ID, $hotel: Boolean, $intercity: Boolean, $tour: Boolean, $hourly: Boolean) {
  createCity(input: {data: {name: $name, cmapping: $cmapping, label: $label, location: $location, hotel: $hotel, intercity: $intercity, tours: $tour, hourly: $hourly}}) {
    city {
      id
    }
  }
}
    `;
export const UpdateCityDocument = gql`
    mutation UpdateCity($id: ID!, $name: String, $label: String, $hotel: Boolean, $intercity: Boolean, $tour: Boolean, $hourly: Boolean) {
  updateCity(input: {where: {id: $id}, data: {name: $name, label: $label, hotel: $hotel, intercity: $intercity, tours: $tour, hourly: $hourly}}) {
    city {
      id
    }
  }
}
    `;
export const CreateAirportDocument = gql`
    mutation CreateAirport($name: String, $location: ID, $city: ID) {
  createAirport(input: {data: {name: $name, location: $location, city: $city}}) {
    airport {
      id
    }
  }
}
    `;
export const CreateVehicleDocument = gql`
    mutation CreateVehicle($class: String, $title: String, $tag: String, $operations: String, $icon: ID, $luggage: Boolean, $max: Int, $occ: String) {
  createVehicle(input: {data: {vehicleClass: $class, title: $title, tagLiine: $tag, operations: $operations, icon: $icon, luggage: $luggage, max: $max, occupancy_log: $occ}}) {
    vehicle {
      id
    }
  }
}
    `;
export const CreateIntercityPricingDocument = gql`
    mutation CreateIntercityPricing($name: String, $base: Float, $tax: Float, $flat: Float, $toll: Float, $vehicle: ID, $origincity: ID, $destinationcity: ID) {
  createPricing(input: {data: {nameSlug: $name, type: INTER, base: $base, tax: $tax, flat: $flat, toll: $toll, vehicle: $vehicle, origincity: $origincity, destinationcity: $destinationcity}}) {
    pricing {
      id
    }
  }
}
    `;
export const CreateHotelPricingDocument = gql`
    mutation CreateHotelPricing($name: String, $base: Float, $tax: Float, $flat: Float, $toll: Float, $vehicle: ID, $oloc: ID, $dloc: ID, $hotel: ID, $trip: ENUM_PRICING_TRIP) {
  createPricing(input: {data: {nameSlug: $name, type: HOTEL, base: $base, tax: $tax, flat: $flat, toll: $toll, vehicle: $vehicle, originlocation: $oloc, destinationlocation: $dloc, hotelcity: $hotel, trip: $trip}}) {
    pricing {
      id
    }
  }
}
    `;
export const CreateHotelDocument = gql`
    mutation CreateHotel($name: String, $location: [ID!]!) {
  createHotel(input: {data: {name: $name, locations: $location}}) {
    hotel {
      id
    }
  }
}
    `;
export const CreateHourlyPricingDocument = gql`
    mutation CreateHourlyPricing($name: String, $base: Float, $tax: Float, $flat: Float, $toll: Float, $addBase: Float, $vehicle: ID, $max: Int, $min: Int, $dbundle: Int, $city: ID, $hunit: ENUM_PRICING_HORULYUNITS, $distance: ENUM_PRICING_DISTANCE, $unitJump: Int) {
  createPricing(input: {data: {nameSlug: $name, type: HOUR, base: $base, tax: $tax, flat: $flat, toll: $toll, vehicle: $vehicle, addBase: $addBase, minDuration: $max, maxDuration: $min, distanceBundle: $dbundle, hourlycity: $city, horulyUnits: $hunit, distance: $distance, unitjumps: $unitJump}}) {
    pricing {
      id
    }
  }
}
    `;
export const GetAllCountriesDocument = gql`
    query GetAllCountries($limit: Int, $start: Int, $search: String) {
  countries(limit: $limit, start: $start, where: {name_contains: $search}) {
    id
    created_at
    code
    name
    enabled
  }
}
    `;
export const GetAllCurrencyDocument = gql`
    query GetAllCurrency($limit: Int, $start: Int, $search: String) {
  currencies(limit: $limit, start: $start, where: {name_contains: $search}) {
    id
    created_at
    updated_at
    name
    key
    value
  }
}
    `;
export const GetSingleUserDocument = gql`
    query GetSingleUser($id: ID!) {
  user(id: $id) {
    id
    created_at
    updated_at
    username
    email
    provider
    confirmed
    role {
      id
      type
      name
    }
    firstName
    lastName
    phone
  }
}
    `;
export const GetAllCountriesConnectionDocument = gql`
    query GetAllCountriesConnection {
  countriesConnection {
    aggregate {
      count
      totalCount
    }
  }
}
    `;
export const GetAllCurrenciesConnectionDocument = gql`
    query GetAllCurrenciesConnection {
  currenciesConnection {
    aggregate {
      count
      totalCount
    }
  }
}
    `;
export const GetAllCitiesDocument = gql`
    query GetAllCities($limit: Int, $start: Int, $search: String) {
  cities(limit: $limit, start: $start, where: {name_contains: $search}) {
    id
    name
    cmapping
    label
    hotel
    intercity
    tours
    hourly
    location {
      id
      fomat
      geoJSON
      placeId
    }
    airports {
      id
      name
      location {
        id
        fomat
        geoJSON
        placeId
      }
    }
  }
}
    `;
export const GetAllVehiclesDocument = gql`
    query GetAllVehicles($limit: Int, $start: Int, $search: String) {
  vehicles(limit: $limit, start: $start, where: {title_contains: $search}) {
    id
    vehicleClass
    title
    tagLiine
    operations
    icon {
      id
      url
    }
    luggage
    max
    occupancy_log
  }
}
    `;
export const SearchLocationByIdDocument = gql`
    query SearchLocationById($id: String) {
  locations(where: {placeId: $id}) {
    id
    hotel {
      id
    }
  }
}
    `;