export interface Workstation {
    id: number,
    ipAddress: string,
    hostname: string,
    cpu: string,
    board: string,
    capacity: string,
    ram: number,
    barcode: number,
    types: {
        ramType: string,
        region: string,
        branch: string,
        hdd: string,
        os: string,

    }
}




