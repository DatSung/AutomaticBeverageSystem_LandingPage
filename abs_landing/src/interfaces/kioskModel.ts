import type { DeviceModel } from "./deviceModel";
import type { Product } from "./product";

export interface KioskModel {
    kioskModelId: string;
    kioskModelName: string;
    kioskModelDescription: string;
    tagline: string;
    heroImageUrl: string;
    footprint: string;
    power: string;
    weight: string;
    capacityPerHour: string;
    waterInlet: string;
    network: string;
    materials: string;
    supportProducts: Product[];
    includeDeviceModels: DeviceModel[];
    sortOrder: number;
}