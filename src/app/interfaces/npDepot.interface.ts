export interface NpDepotInterface {
    SiteKey: string,
    Description: string,
    ShortAddress: string,
    Phone: string,
    TypeOfWarehouse: string,
    Ref: string,
    Number: string,
    CityRef: string,
    CityDescription: string,
    SettlementRef: string,
    SettlementDescription: string,
    SettlementAreaDescription: string,
    SettlementRegionsDescription: string
    SettlementTypeDescription: string,
    Longitude: number,
    Latitude: number,
    PostFinance: string,
    BicycleParking: '0' | '1',
    PaymentAccess: '0' | '1',
    POSTerminal: '0' | '1',
    InternationalShipping: '0' | '1',
    SelfServiceWorkplacesCount: '0' | '1',
    DenyToSelect: '0' | '1',
    PostalCodeUA: string

    [key: string]: any
}
