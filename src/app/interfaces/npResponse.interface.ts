import {NpCitiesInterface} from "./npCities.interface";
import {NpDepotInterface} from "./npDepot.interface";

export interface NpResponseInterface {
    "success": boolean,
    "data": [NpCitiesInterface | NpDepotInterface],
    "errors": [],
    "warnings": [],
    "info": [],
    "messageCodes": [],
    "errorCodes": [],
    "warningCodes": [],
    "infoCodes": []

    [key: string]: any
}
