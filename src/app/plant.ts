export class Results {
    "current_page": number;
    "data": Plant[];
    "from": number;
    "last_page": number;
    "per_page": number;
    "to": number;
    "total": number;
}

export class Plant {
    "common_name": string;
    "cycle": string;
    "default_image": {
        "small_url": string;
    }
    "id": number;
    "other_name": string[];
    "scientific_name": string[];
    "sunlight": string[];
    "watering": string;
}
