
interface Airport {
    code: string,
    friendlyName: string,
    groundCallsign: string,
    towerCallsigns: string[],
    hasGround: boolean,
    defaultTowerFrequency: string,
    defaultGroundFrequency: string,
    maxAcft: string,
    chartPacks: ChartPack[],
    generalInfo: string,
    runwayInfo: Runway[],
    commsInfo: string,
    topDowns?: string[],
}
interface Runway {
    name1: string,
    name2: string,
    width?: number,
    length: number,
    type: "concrete" | "sand" | "grass" | "water",
}
interface ChartPack {
    author: string,
    link: string,
    sids?: SID[]
}
interface SID {
    name: string,
    runways: string[],
    transitions?: string[],
    route?: string
}

function getDefaultAirport(): Airport {
    return getAirport("IGAR")
}

function generateAirports(): Airport[] {
    return [
        {
            code: "IGAR",
            friendlyName: "Airbase Garry",
            groundCallsign: "",
            towerCallsigns: [
                "Garry Approach",
                "Garry Director",
                "Garry Radar",
                "Garry Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.800",
            defaultGroundFrequency: "",
            maxAcft: "N/A",
            chartPacks: [
                 {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Air%20Base%20Garry",
                    sids: []
                 },
            ],
            generalInfo: "Location: Rockford PTFS\nICAO/IATA: IGAR / ABG\nLat/Long: N41° 44.6', W000° 02.0'\nElevation: 0 ft\n\nAirport Use: Military",
            runwayInfo: [
                {
                    name1: "01",
                    name2: "19",
                    length: 2078,
                    type: "concrete"
                }
			],
            commsInfo: "Garry Tower: 118.800\nChicago Centre: 124.850",
        },
        {
            code: "IJAF",
            friendlyName: "Al Najaf",
            groundCallsign: "",
            towerCallsigns: [
                "Al Najaf Approach",
                "Al Najaf Director",
                "Al Najaf Radar",
                "Al Najaf Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "119.1",
            defaultGroundFrequency: "",
            maxAcft: "CRJ7/Q400",
            chartPacks: [
                 {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/AL%20Najaf",
                 },
                 {
                    author: "EzyDubbs",
                    link: "https://drive.google.com/file/d/1USL62H5M-TlF_Gk1erRGuNkBhQYuDqup/view"
                 },
                 {
                    author: "Midwest Avgeek",
                    link: "https://docs.google.com/document/d/1AAVgOdVWRAq070j-ExKGqF0lbdd2R4lzb-O3G9ISoy4/edit"
                 }
            ],
            generalInfo: "Location: Izolirani PTFS\nICAO/IATA: IJAR / NJF\nLat/Long: N41° 49.4', W000° 16.4'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "07",
                    name2: "25",
                    length: 2278,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 123.900\nAl Najaf Ground: 121.700\nAl Najaf Tower: 119.1\nAl Najaf Approach: 120.200\nNorsom Centre: 125.640",
        },
        {
            code: "IBAR",
            friendlyName: "Barra Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Barra Approach",
                "Barra Director",
                "Barra Radar",
                "Barra Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.080",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Barra"
                },
                {
                    author: "userwastaken, din0_nuggies21",
                    link: "https://docs.google.com/document/d/1wazg7w22DMyvJdu869_BnNwvA0aR6naw9y0kKw3sNO4/edit"
                },
                {
                    author: "Sander",
                    link: "https://cdn.discordapp.com/attachments/876914987715686440/888806599844593745/EGPR_CHARTS.pdf"
                }
            ],
            generalInfo: "Location: Cyprus PTFS\nICAO/IATA: IBAR / BRR\nLat/Long: N41° 38.0', W000° 10.8'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [

			],
            commsInfo: "Barra Tower: 118.080\nLazarus Centre: 126.300",
        },
        {
            code: "IBLT",
            friendlyName: "Boltic Airfield",
            groundCallsign: "",
            towerCallsigns: [
                "Boltic Approach",
                "Boltic Director",
                "Boltic Radar",
                "Boltic Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.430",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Boltic%20Airfield"
                }
            ],
            generalInfo: "Location: Rockford PTFS\nICAO/IATA: IBLT / BOL\nLat/Long: N41° 44.8', W000° 00.9'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "15",
                    name2: "33",
                    length: 496,
                    type:"grass"
                }
			],
            commsInfo: "Boltic Tower: 118.430\nChicago Centre: 124.850",
        },
        {
            code: "IRFD",
            friendlyName: "Greater Rockford",
            groundCallsign: "Rockford Ground",
            towerCallsigns: [
                "Chicago Centre",
                "Rockford Approach",
                "Rockford Centre",
                "Rockford Control",
                "Rockford Director",
                "Rockford Radar",
                "Rockford Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "124.850",
            defaultGroundFrequency: "120.400",
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Greater%20Rockford",
                    sids: [
                        {
                            name: "INTER1A",
                            runways: [
                                "36L"
                            ],
                            transitions: [
                                "REAPR",
                                "LOGAN",
                                "DEATH"
                            ]        
                        },
                        {
                            name: "INTER1B",
                            runways: [
                                "36R"
                            ],
                            transitions: [
                                "REAPR",
                                "LOGAN",
                                "DEATH"
                            ]        
                        },
                        {
                            name: "INTER1C",
                            runways: [
                                "18R",
                                "18L"
                            ],
                            transitions: [
                                "REAPR",
                                "LOGAN",
                                "DEATH"
                            ]        
                        },
                        {
                            name: "KEN1A",
                            runways: [
                                "36L",
                                "36R"
                            ]       
                        },
                        {
                            name: "KEN1B",
                            runways: [
                                "18R"
                            ]   
                        },
                        {
                            name: "KEN1C",
                            runways: [
                                "18L"
                            ]       
                        },
                    ]
                },
                {
                    author: "sanderli25",
                    link: "https://drive.google.com/file/d/1I-oucFK61M6QdSFdEPYWQ3P9dRZ8D7Jl/view"
                },
                {
                    author: "Nikita39Gamer",
                    link: "https://drive.google.com/file/d/1Kg7IaeCuovKrtfTduSCsmhsjWTiFDSV_/view",
                    sids: [
                        {
                            name: "GUESS1A",
                            runways: [
                                "36L"
                            ],
                            route: "EASTN GUESS"
                        },
                        {
                            name: "GUESS1B",
                            runways: [
                                "36R"
                            ], route:"EASTN GUESS"
                        },
                        {
                            name: "GUESS1C",
                            runways: [
                                "18R"
                            ],route: "BLA HELPR WAREZ PARTS GUESS"
                        },
                        {
                            name: "GUESS1D",
                            runways: [
                                "18L"
                            ],route: "BLA HELPR WAREZ PARTS GUESS"
                        },
                        {
                            name: "WELSH3A",
                            runways: [
                                "36L"
                            ],route: "EASTN KEN WELSH"
                        },
                        {
                            name: "WELSH3B",
                            runways: [
                                "36R"
                            ],route:"EASTN KEN WELSH"
                        },
                        {
                            name: "WELSH3C",
                            runways: [
                                "18R"
                            ],route:"BLA TRN STOOD RESTS WELSH"
                        },
                        {
                            name: "WELSH3D",
                            runways: [
                                "18L"
                            ],route:"BLA TRN STOOD RESTS WELSH"
                        },
                        {
                            name: "INDEX4A",
                            runways: [
                                "36L"
                            ],route:"EASTN INDEX"
                        },
                        {
                        
                            name: "INDEX4B",
                        
                            runways: [
                            
                                "36R"
                            
                            ],route:"EASTN INDEX"
                        
                        },
                        {
                        
                            name: "INDEX4C",
                        
                            runways: [
                                "18R"
                            ],route:"BLA TRN STOOD RESTS INDEX"
                        },
                        {
                            name: "INDEX4D",
                            runways: [
                                "18L"
                            ],route:"BLA TRN STOOD RESTS INDEX"
                        },
                        {
                            name: "SEEKS1A",
                            runways: [
                                "36L"
                            ],route:"EASTN ROK BEANS SEEKS"
                        },
                        {
                            name: "SEEKS1B",
                            runways: [
                                "36R"
                            ],route:"EASTN ROK BEANS SEEKS"
                        },
                        {
                            name: "SEEKS1C",
                            runways: [
                                "18R"
                            ],route:"BLA HELPR SEEKS"
                        },
                        {
                            name: "SEEKS1D",
                            runways: [
                                "18L"
                            ],route:"BLA HELPR SEEKS"
                        },
                        {
                            name: "SETHR1A",
                            runways: [
                                "36L"
                            ],route:"EASTN RESTS SETHR"
                        },
                        {
                            name: "SETHR1B",
                            runways: [
                                "36R"
                            ],route:"EASTN RESTS SETHR"
                        },
                        {
                            name: "SETHR1C",
                            runways: [
                                "18R"
                            ],route:"BLA TRN HMS SETHR"
                        },
                        {
                            name: "SETHR1D",
                            runways: [
                                "18L"
                            ],route:"BLA TRN HMS SETHR"
                        },
                        {
                            name: "JAMSI1A",
                            runways: [
                                "36L"
                            ],route:"EASTN RESTS HMS JAMSI"
                        },
                        {
                            name: "JAMSI1B",
                            runways: [
                                "36R"
                            ],route:"EASTN RESTS HMS JAMSI"
                        },
                        {
                            name: "JAMSI1C",
                            runways: [
                                "18R"
                            ],route:"BLA TRN SAVES JAMSI"
                        },
                        {
                            name: "JAMSI1D",
                            runways: [
                                "18L"
                            ],route:"BLA TRN SAVES JAMSI"
                        },
                        {
                            name: "LAZER1A",
                            runways: [
                                "36L"
                            ],route:"EASTN RESTS HMS LAZER"
                        },
                        {
                            name: "LAZER1B",
                            runways: [
                                "36R"
                            ],route:"EASTN RESTS HMS LAZER"
                        },
                        {
                            name: "LAZER1C",
                            runways: [
                                "18R"
                            ],route:"BLA TRN SAVES LAZER"
                        },
                        {
                            name: "LAZER1D",
                            runways: [
                                "18L"
                            ],route:"BLA TRN SAVES LAZER"
                        
                        }

                    ]
                },
                {
                    author: "makiwasmyidea",
                    link: "https://docs.google.com/document/d/1pOfIhQ9z6HSgFNjIMryd_FWwF_FgkAPvhK5xerOBex4/edit"
                },
                {
                    author: "DarthD3NN15",
                    link: "https://docs.google.com/presentation/d/1kc8pIQMEukO_meQ05yavOX1EFDbLqJTyxv5jA9p-m3s/edit#slide=id.g1f43ba55dbd_0_131"
                },
                {
                    author: "userwastaken",
                    link: "https://docs.google.com/document/d/1AR-TLLS1S5H0SjDFCsiWKKQ4HTi87JUkU80ij4i-wPc/edit#heading=h.hev5tuk6ocb6"
                },
                {
                    author: "Eastern",
                    link: "https://docs.google.com/presentation/d/1mKn1mwti1rA8t6xXGBXQxVmVycgxuUWWLaaHpiJg-d4/edit#slide=id.g1111f78b68b_0_154"
                },
                {
                    author: "Aloha516",
                    link: "https://drive.google.com/file/d/14L3ZEegJfXIli1xn_QBIyJeTQPurHTr0/view"
                },
                {
                    author: "EzyDubbs",
                    link: "https://drive.google.com/file/d/13WTsIv4FbnUhUoDJzXyw1ZV3_fGqbjBF/view",
                    sids: [
                        {
                            name: "GUESS1S",
                            runways: [
                                "36L"
                            ],route:"GUESS"
                        },
                        {
                            name: "GUESS1Z",
                            runways: [
                                "36R"
                            ],route:"GUESS"
                        },
                        {
                            name: "GUESS1R",
                            runways: [
                                "18R"
                            ],route:"ROK GUESS"
                        },
                        {
                            name: "GUESS1Y",
                            runways: [
                                "18L"
                            ],route:"ROK GUESS"
                        },
                        {
                            name: "WELSH1S",
                            runways: [
                                "36L"
                            ],route:"WELSH"
                        },
                        {
                            name: "WELSH1Z",
                            runways: [
                                "36R"
                            ],route:"WELSH"
                        },
                        {
                            name: "WELSH1R",
                            runways: [
                                "18R"
                            ],route:"ROK WELSH"
                        },
                        {
                            name: "WELSH1Y",
                            runways: [
                                "18L"
                            ],route:"ROK WELSH"
                        },
                        {
                            name: "INDEX1S",
                            runways: [
                                "36L"
                            ],route:"INDEX"
                        },
                        {
                            name: "INDEX1Z",
                            runways: [
                                "36R"
                            ],route:"INDEX"
                        },
                        {
                            name: "INDEX1R",
                            runways: [
                                "18R"
                            ],route:"ROK INDEX"
                        },
                        {
                            name: "INDEX1Y",
                            runways: [
                                "18L"
                            ],route:"ROK INDEX"
                        },
                        {
                            name: "SETHR1S",
                            runways: [
                                "36L"
                            ],route:"SETHR"
                        },
                        {
                            name: "SETHR1Z",
                            runways: [
                                "36R"
                            ],route:"SETHR"
                        },
                        {
                            name: "SETHR1R",
                            runways: [
                                "18R"
                            ],route:"SETHR"
                        },
                        {
                            name: "SETHR1Y",
                            runways: [
                                "18L"
                            ],route:"SETHR"
                        },
                        {
                            name: "LAZER1S",
                            runways: [
                                "36L"
                            ],route:"LAZER"
                        },
                        {
                            name: "LAZER1Z",
                            runways: [
                                "36R"
                            ],route:"LAZER"
                        },
                        {
                            name: "LAZER1R",
                            runways: [
                                "18R"
                            ],route:"LAZER"
                        },
                        {
                            name: "LAZER1Y",
                            runways: [
                                "18L"
                            ],route:"LAZER"
                        }
                    ]
                }
            ],
            generalInfo: "Location: Rockford PTFS\nICAO/IATA: IRFD / RFD\nLat/Long: N41° 43.3', W000° 01.4'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "18R",
                    name2: "36L",
                    length: 3535,
                    type: "concrete"
                },
                {
                    name1: "18L",
                    name2: "36R",
                    length: 3000,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 127.600\nRockford Delivery: 128.400\nRockford Ground: 120.400\nRockford Tower: 118.100\nRockford Departure: 121.000\nChicago Centre: 124.850",
            topDowns: [
                "IGAR",
                "IMLR",
                "IBLT",
                "ITRC",
                "OWO"
            ]
        },
        {
            code: "IGRV",
            friendlyName: "Grindavik Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Keflavik Control",
                "Grindavik Approach",
                "Grindavik Centre",
                "Grindavik Control",
                "Grindavik Director",
                "Grindavik Radar",
                "Grindavik Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "126.750",
            defaultGroundFrequency: "",
            maxAcft: "B787/A350/MD11",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Grindavik/Grindavik"
                },
                {
                    author: "sander25",
                    link: "https://cdn.discordapp.com/attachments/876914987715686440/888886462848831508/UGDK_CHARTS.pdf"
                },
                {
                    author: "EzyDubbs",
                    link: "https://drive.google.com/file/d/1FWfJotQk2yKI03Kg43M5RQlzisdlDEql/view"
                },
                {
                    author: "ATC24MobileMaster, Pro_Gamer7089",
                    link: "https://drive.google.com/file/d/1WNxb-d3gxIqPhtncoM3hDbALfMfuIdDS/view"
                },
                {
                    author: "nova_av",
                    link: "https://drive.google.com/file/d/1G4M1CGxjXO688x-l7WBnD8UfhiLq2yrB/view"
                }
            ],
            generalInfo: "Location: Grindavik PTFS\nICAO/IATA: IGRV / GVK\nLat/Long: N41° 50.2', W000° 10.6'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "06",
                    name2: "24",
                    length: 2392,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 128.300\nGrindavik Ground: 121.900\nGrindavik Tower: 118.300\nGrindavik Departure: 119.300\nKeflavik Control: 126.750",
            topDowns:
            [
                "TVO"
            ]
        },
        {
            code: "IHEN",
            friendlyName: "Henstridge Airfield",
            groundCallsign: "",
            towerCallsigns: [
                "Henstridge Approach",
                "Henstridge Director",
                "Henstridge Radar",
                "Henstridge Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.200",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Henstridge"
                }
            ],
            generalInfo: "Location: Rockford PTFS\nICAO/IATA: IHEN / HEN\nLat/Long: N41° 37.0', W000° 07.6'\nElevation: 1 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "17",
                    name2: "35",
                    length: 1170,
                    type: "concrete"
                }
			],
            commsInfo: "Henstridge Tower: 118.200\nChicago Centre: 124.850",
        },
        {
            code: "IZOL",
            friendlyName: "Izolirani Intl.",
            groundCallsign: "Izolirani Ground",
            towerCallsigns: [
                "Norsom Centre",
                "Izolirani Approach",
                "Izolirani Centre",
                "Izolirani Control",
                "Izolirani Director",
                "Izolirani Radar",
                "Izolirani Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "124.640",
            defaultGroundFrequency: "121.900",
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/Izolirani"
                },
                {
                    author: "sanderli25",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/Izolirani"
                },
                {
                    author: "userwastaken",
                    link: "https://docs.google.com/document/d/1WGSfuBNWxn4WxVBtEFF3ZYboNIh21Fcqrm9AtSXnq_4/edit#heading=h.ydxas8subl85"
                },
                {
                    author: "Midwest Avgeek",
                    link: "https://docs.google.com/document/d/19f9w2uE7vqwLBLlbKrfc8_NZlEcDr4I34SKGN0dfub0/edit"
                }
            ],
            generalInfo: "Location: Izolirani PTFS\nICAO/IATA: IZOL / IZO\nLat/Long: N41° 48.1', W000° 16.1'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "10",
                    name2: "28",
                    length: 4375,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 127.800\nIzolirani Delivery: 128.200\nIzolirani Ground: 121.900\nIzolirani Tower: 118.700\nIzolirani Departure: 124.300\nNorsom Centre: 125.640",
            topDowns: [
                "IJAF",
                "ISCM"
            ]
        },
        {
            code: "ILAR",
            friendlyName: "Larnaca Intl.",
            groundCallsign: "Larnaca Ground",
            towerCallsigns: [
                "Lazarus Centre",
                "Larnaca Approach",
                "Larnaca Centre",
                "Larnaca Control",
                "Larnaca Director",
                "Larnaca Radar",
                "Larnaca Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "126.300",
            defaultGroundFrequency: "119.400",
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Larnaca"
                },
                {
                    author: "Aloha516",
                    link: "https://docs.google.com/document/d/1Hat4-PSwd9L0tWKaofTEQH-egoJLw7pzvgCo2RHO0cE/edit"
                }, 
                {
                    author: "makiwasmyidea",
                    link: "https://docs.google.com/document/d/11Wvou24H_RgUIn5VwJoQ5w4tnE5JZbtYTTbkuRDvtHk/edit"
                },
                {
                    author: "userwastaken, Nikita39Gamer",
                    link: "https://docs.google.com/document/d/1DXI4DGpc2UMl7bHrPygf3_oHAZ68UDe5X4boa2teIw8/edit",
                    sids: [{
                        name: "ANYMS1J",
                        runways: [
                            "06"
                        ]
                    },
                    {
                        name: "JAMSI1J",
                        runways: [
                            "06"
                        ]
                    },
                    {
                        name: "JUSTY1J",
                        runways: [
                            "06"
                        ]
                    },
                    {
                        name: "REAPR1J",
                        runways: [
                            "06"
                        ]
                    },
                    {
                        name: "ANYMS1K",
                        runways: [
                            "24"
                        ]
                    },
                    {
                        name: "JAMSI1K",
                        runways: [
                            "24"
                        ]
                    },
                    {
                        name: "JUSTY1K",
                        runways: [
                            "24"
                        ]
                    },
                    {
                        name: "REAPR1K",
                        runways: [
                            "24"
                        ]
                    },     
                ]
                },
                {
                    author: "greek_dutchman",
                    link: "https://docs.google.com/document/d/1i9q2jla0cXq6Vq-IkLihjkzqu-s3Q1e_EyPWAo3mxso/edit"
                }
            ],
            generalInfo: "Location: Cyprus PTFS\nICAO/IATA: ILAR / LCA\nLat/Long: N41° 39.5', E000° 08.8'\nElevation: 1 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "06",
                    name2: "24",
                    length: 3355,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 126.550\nLarnaca Delivery: 120.575\nLarnaca Ground: 119.4\nLarnaca Tower: 121.200\nLarnaca Departure: 130.200\nLazarus Centre: 126.300",
            topDowns: [
                "IBAR",
                "IHEN",
                "IIAB",
                "IPAP"
            ]
        },
        {
            code: "ILKL",
            friendlyName: "Lukla Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Lukla Approach",
                "Lukla Director",
                "Lukla Radar",
                "Lukla Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "120.150",
            defaultGroundFrequency: "",
            maxAcft: "LJ45/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Perth/Lukla"
                }
            ],
            generalInfo: "Location: Perth PTFS\nICAO/IATA: ILKL / LUA\nLat/Long: N41° 54.4', E000° 09.2'\nElevation: 954 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "09",
                    name2: "27",
                    length: 1303,
                    type: "concrete"
                }
			],
            commsInfo: "Lukla Tower: 120.150\nPerth Centre: 135.250",
        },
        {
            code: "IIAB",
            friendlyName: "McConnell AFB",
            groundCallsign: "",
            towerCallsigns: [
                "McConnell Approach",
                "McConnell Director",
                "McConnell Radar",
                "McConnell Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "127.250",
            defaultGroundFrequency: "",
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "N/A",
                    link: "N/A"
                }
            ],
            generalInfo: "",
            runwayInfo: [
                {name1:"27L",name2:"09R",length:4329,type:"concrete"},
                {name1:"27R",name2:"09L",length:4329,type:"concrete"}
            ],
            commsInfo: ""
        },
        {
            code: "IMLR",
            friendlyName: "Mellor",
            groundCallsign: "",
            towerCallsigns: [
                "Mellor Approach",
                "Mellor Director",
                "Mellor Radar",
                "Mellor Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "133.850",
            defaultGroundFrequency: "",
            maxAcft: "B787/A350/MD11",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Mellor"
                },
                {
                    author: "EzyDubbs",
                    link: "https://drive.google.com/file/d/1u0f6131yt_nA83RYKm5cy6f1SzfOOxTu/view"
                },
                {
                    author: "DarthD3NN15",
                    link: "https://docs.google.com/presentation/d/1s72z-fRBtVsDE4fGcTyIMWNbrVF7_i9ja8K4PDA1MWc/edit#slide=id.p"
                },
                {
                    author: "SQD_Yeet, sanderli25",
                    link: "https://docs.google.com/presentation/d/1OVEz2Zq1MzEr9_kDXYxo_t82d-bHchD_MJXi38d8IWk/edit#slide=id.gc6f90357f_0_0"
                },
                {
                    author: "Jeffersen",
                    link: "https://formicacidgd.github.io/atisgen/IMLR_Chart_Jeffersen.png"
                }
            ],
            generalInfo: "Location: Rockford PTFS\nICAO/IATA: IMLR / MEL\nLat/Long: N41° 43.3', W000° 00.1'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "11",
                    name2: "29",
                    length: 2997,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 126.030\nMellor Delivery: 121.930\nMellor Tower: 133.850\nMellor Radar: 125.650\nChicago Centre: 124.850",
        },
        {
            code: "IPAP",
            friendlyName: "Paphos",
            groundCallsign: "",
            towerCallsigns: [
                "Paphos Approach",
                "Paphos Director",
                "Paphos Radar",
                "Paphos Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "119.900",
            defaultGroundFrequency: "",
            maxAcft: "B787/A350/MD11",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Paphos"
                },
                {
                    author: "sanderli25",
                    link: "https://drive.google.com/file/d/1feK0t-bD79o5PJTPlOhfe_0agf83xt9y/view"
                },
                {
                    author: "playevator",
                    link: "https://docs.google.com/presentation/d/1OTeilcBnK6c5MJuhMTcBu03cauV5dKokGkAsrGdD3sg/edit#slide=id.g23c6c35c134_1_0"
                },
                {
                    author: "sweet_kid",
                    link: "https://drive.google.com/file/d/1Ckwrvr93OBZxEfpSwTzc75ALkCmjqsqr/view"
                }
            ],
            generalInfo: "Location: Cyprus PTFS\nICAO/IATA: IPAP / PFO\nLat/Long: N41° 39.3', E000° 12.1'\nElevation: 95 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "17",
                    name2: "35",
                    length: 3404,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 127.325\nPaphos Ground: 120.800\nPaphos Tower: 119.900\nPaphos Departure: 130.625\nLazarus Centre: 126.300",
        },
        {
            code: "IPPH",
            friendlyName: "Perth",
            groundCallsign: "Perth Ground",
            towerCallsigns: [
                "Perth Approach",
                "Perth Centre",
                "Perth Control",
                "Perth Director",
                "Perth Radar",
                "Perth Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "135.250",
            defaultGroundFrequency: "121.700",
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Perth/Perth",
                },
                {
                    author: "Natto, userwastaken, Nikita39Gamer",
                    link: "https://docs.google.com/document/d/1sEOREpJL5TCAs7tejRn2Fm02Ai4IZV5uolC9cX65x3c/edit",
                    sids: [
                        {
                            name: "KNIF1A",
                            runways: [
                                "11"
                            ]
                        },
                        {
                            name: "KNIF1B",
                            runways: [
                                "15"
                            ]
                        },
                        {
                            name: "KNIF1C",
                            runways: [
                                "29"
                            ]
                        },
                        {
                            name: "KNIF1D",
                            runways: [
                                "33"
                            ]
                        },
                        {
                            name: "ROM1A",
                            runways: [
                                "11"
                            ]
                        },
                        {
                            name: "ROM1B",
                            runways: [
                                "15"
                            ]
                        },
                        {
                            name: "ROM1C",
                            runways: [
                                "29"
                            ]
                        },
                        {
                            name: "ROM1D",
                            runways: [
                                "33"
                            ]
                        },
                        {
                            name: "CAME1A",
                            runways: [
                                "11"
                            ]
                        },
                        {
                            name: "CAME1B",
                            runways: [
                                "15"
                            ]
                        },
                        {
                            name: "CAME1C",
                            runways: [
                                "29"
                            ]
                        },
                        {
                            name: "CAME1D",
                            runways: [
                                "33"
                            ]
                        }
                    ]
                }
            ],
            generalInfo: "Location: Perth PTFS\nICAO/IATA: IPPH / PER\nLat/Long: N41° 55.7', E000° 7.7'\nElevation: 26 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "11",
                    name2: "29",
                    length: 4375,
                    type: "concrete"
                },
                {
                    name1: "15",
                    name2: "33",
                    length: 3355,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 123.800\nPerth Delivery: 118.550\nPerth Ground: 121.700\nPerth Tower: 127.400\nPerth Departure: 118.700\nPerth Centre: 135.250",
            topDowns: [
                "ILKL",
                "SHV"
            ]
        },
        {
            code: "ISCM",
            friendlyName: "RAF Scampton",
            groundCallsign: "",
            towerCallsigns: [
                "Scampton Approach",
                "Scampton Director",
                "Scampton Radar",
                "Scampton Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.220",
            defaultGroundFrequency: "",
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/RAF%20Scampton"
                }
            ],
            generalInfo: "Location: Izolirania PTFS\nICAO/IATA: ISCM / SCT\nLat/Long: N41° 51.1', E000° 13.3'\nElevation: 0 ft\n\nAirport Use: Military",
            runwayInfo: [
                {
                    name1: "13",
                    name2: "31",
                    length: 1812,
                    type: "concrete"
                }
			],
            commsInfo: "Scampton Tower: 118.220\nNorsom Centre: 125.640",
        },
        {
            code: "IDCS",
            friendlyName: "Saba Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Saba Approach",
                "Saba Director",
                "Saba Radar",
                "Saba Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "122.500",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Orenji/Saba"
                },
                {
                    author: "MR. GEARZ",
                    link: "https://docs.google.com/document/d/17-uqDqJ1YzxvZDwtlduM8hGdPH-kCNxoDxdfBHoOhzE/edit"
                }
            ],
            generalInfo: "Location: Orenji PTFS\nICAO/IATA: IDCS / SAB\nLat/Long: N41° 03.0', E000° 1.0'\nElevation: 65 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "07",
                    name2: "25",
                    length: 750,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 118.250\nSaba Tower: 122.500\nTokyo Control: 132.300",
        },
        {
            code: "IBTH",
            friendlyName: "Saint Barthelemy",
            groundCallsign: "",
            towerCallsigns: [
                "Sotaf Centre",
                "Saint Barthelemy Approach",
                "Saint Barthelemy Centre",
                "Saint Barthelemy Control",
                "Saint Barthelemy Director",
                "Saint Barthelemy Radar",
                "Saint Barthelemy Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "128.600",
            defaultGroundFrequency: "",
            maxAcft: "CRJ7/Q400",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts"
                },
                {
                    author: "sweet_kid",
                    link: "https://drive.google.com/file/d/1OSWgKHBnu8ch3sP68erv8_nVcAFIY7CQ/view"
                },
                {
                    author: "playevator",
                    link: "https://drive.google.com/file/d/1OakBVh551I5OmqO05KdEFAF9LcjscaGs/view"
                },
                {
                    author: "snowfrfr",
                    link: "https://docs.google.com/presentation/d/1qJjS4HnvnP1u0j6ESnOqb-sGJIO_B0jFh1h10vsFWv0/edit#slide=id.p"
                },
                {
                    author: "Sander25",
                    link: "https://cdn.discordapp.com/attachments/876914987715686440/904124376457310228/IBTH_CHARTS.pdf"
                }
            ],
            generalInfo: "Location: Saint Barthélemy PTFS\nICAO/IATA: IBTH / SBH\nLat/Long: N41° 50.8', E000° 4.2'\nElevation: 9 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "09",
                    name2: "27",
                    length: 1547,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 118.450\nSotaf Centre: 128.600",
        },
        {
            code: "ISAU",
            friendlyName: "Sauthemptona Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Brighton Control",
                "Sauthemptona Approach",
                "Sauthemptona Centre",
                "Sauthemptona Control",
                "Sauthemptona Director",
                "Sauthemptona Radar",
                "Sauthemptona Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "127.820",
            defaultGroundFrequency: "",
            maxAcft: "A320/B737/MD90",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Sauthemptona/Sauthemptona"
                },
                {
                    author: "Aloha516",
                    link: "https://drive.google.com/file/d/11_ioZKaEt2Un1oyKa1R6WZ4hUjUFk7VL/view"
                },
                {
                    author: "userwastaken, Nikita39Gamer",
                    link: "https://docs.google.com/document/d/1iRG8S9p2bq99rgnofHK6_r0jtJqgXc1bj13W0IaBSzc/edit#heading=h.hev5tuk6ocb6"
                }
            ],
            generalInfo: "Location: Sauthemptona PTFS\nICAO/IATA: ISAU / SAU\nLat/Long: N41° 41.0', W000° 11.5'\nElevation: 1 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "08",
                    name2: "26",
                    length: 2554,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 113.350\nSauthemptona Ground: 130.880\nSauthemptona Tower: 118.205\nSauthemptona Radar: 122.730\nBrighton Control: 127.820",
        },
        {
            code: "ISKP",
            friendlyName: "Skopelos Airfield",
            groundCallsign: "",
            towerCallsigns: [
                "Skopelos Approach",
                "Skopelos Centre",
                "Skopelos Control",
                "Skopelos Director",
                "Skopelos Radar",
                "Skopelos Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.400",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Skopelos/Skopelos%20Airfield"
                }
            ],
            generalInfo: "Location: Skopelos PTFS\nICAO/IATA: ISKP / SKO\nLat/Long: N41° 45.5', E000° 10.2'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "05",
                    name2: "23",
                    length: 636,
                    type: "grass"
                }
			],
            commsInfo: "Skopelos Tower: 118.400",
        },
        {
            code: "ITKO",
            friendlyName: "Tokyo",
            groundCallsign: "Tokyo Ground",
            towerCallsigns: [
                "Tokyo Approach",
                "Tokyo Centre",
                "Tokyo Control",
                "Tokyo Director",
                "Tokyo Radar",
                "Tokyo Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "132.300",
            defaultGroundFrequency: "118.225",
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Orenji/Tokyo"
                },
                {
                    author: "Nikita39Gamer, userwastaken",
                    link: "https://drive.google.com/file/d/12D4LEcKJiMkh9u7i1kEih54dYSAFQHRG/view",
                    sids: [
                        {
                            name: "BLANK1W",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "EURAD1W",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "HONDA1W",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "RENDR1W",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "ONDER1W",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "BLANK1X",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "EURAD1X",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "HONDA1X",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "RENDR1X",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "ONDER1X",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "BLANK1Y",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "EURAD1Y",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "HONDA1Y",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "RENDR1Y",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "ONDER1Y",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "BLANK1Z",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "EURAD1Z",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "HONDA1Z",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "RENDR1Z",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "ONDER1Z",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "BLANK2A",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "EURAD2A",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "HONDA2A",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "RENDR2A",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "ONDER2A",
                            runways: [
                                "02"
                            ]
                        },
                        {
                            name: "BLANK2B",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "EURAD2B",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "HONDA2B",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "RENDR2B",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "ONDER2B",
                            runways: [
                                "13"
                            ]
                        },
                        {
                            name: "BLANK2C",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "EURAD2C",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "HONDA2C",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "RENDR2C",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "ONDER2C",
                            runways: [
                                "20"
                            ]
                        },
                        {
                            name: "BLANK2D",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "EURAD2D",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "HONDA2D",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "RENDR2D",
                            runways: [
                                "31"
                            ]
                        },
                        {
                            name: "ONDER2D",
                            runways: [
                                "31"
                            ]
                        },
                    ]
                },
                {
                    author: "GA4RIE1",
                    link: "https://docs.google.com/document/d/1NjssUTQnlHVQiZciry656h5ZBu2xW7lJu2Q2L5G90CU/edit"
                },
                {
                    author: "SQD_YEET",
                    link: "https://docs.google.com/presentation/d/1PPpJoNXSOLL5DUMBSexPGDbDskA2nMkrPglJ35szKF4/edit#slide=id.gc6f90357f_0_0"
                }
            ],
            generalInfo: "Location: Orenji PTFS\nICAO/IATA: ITKO / HND\nLat/Long: N41° 59.2', W000° 00.2'\nElevation: 1 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "02",
                    name2: "20",
                    length: 3754,
                    type: "concrete"
                },
                {
                    name1: "13",
                    name2: "31",
                    length: 4850,
                    type: "concrete"
                }
			],
            commsInfo: "ATIS: 128.800\nTokyo Delivery: 121.825\nTokyo Ground: 118.225\nTokyo Tower: 118.800\nTokyo Departure: 119.100\nTokyo Control: 132.300",
            topDowns: [
                "IDCS"
            ]
        },
        {
            code: "ITRC",
            friendlyName: "Training Centre",
            groundCallsign: "",
            towerCallsigns: [
                "Training Centre Approach",
                "Training Centre Director",
                "Training Centre Radar",
                "Training Centre Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.500",
            defaultGroundFrequency: "",
            maxAcft: "C172",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Training%20Center"
                },
                {
                    author: "DarthD3NN15",
                    link: "https://docs.google.com/presentation/d/1gNU9XNr-D6ioJBg1Ndia6nUuzP01G6cSnFoRoWM8DF8/edit#slide=id.p"
                }
            ],
            generalInfo: "Location: Rockford PTFS\nICAO/IATA: ITRC / TRN\nLat/Long: N41° 41.2', E000° 00.3'\nElevation: 80 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "18",
                    name2: "36",
                    length: 1286,
                    type: "concrete"
                }
			],
            commsInfo: "Traning Centre Tower: 118.500\nChicago Centre: 124.850",
        },
        {
            code: "TVO",
            friendlyName: "Tavaro Seabase",
            groundCallsign: "",
            towerCallsigns: [
                "Tavaro Approach",
                "Tavaro Director",
                "Tavaro Radar",
                "Tavaro Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "121.800",
            defaultGroundFrequency: "",
            maxAcft: "Amphibian",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Grindavik/Tavaro%20Seabase"
                },
            ],
            generalInfo: "Location: Grindavik PTFS\nIATA: TVO\nLat/Long: N41° 50.2', W000° 10.6'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "4W",
                    name2: "21W",
                    length: 1000,
                    type: "water"
                }
            ],
            commsInfo: "Tavaro Tower: 121.800\nKeflavik Control: 126.750"
        },
        {
            code: "SHV",
            friendlyName: "Sea Haven Seabase",
            groundCallsign: "",
            towerCallsigns: [
                "Sea Haven Approach",
                "Sea Haven Director",
                "Sea Haven Radar",
                "Sea Haven Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.625",
            defaultGroundFrequency: "",
            maxAcft: "Amphibian",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Perth/Sea%20Haven"
                },
            ],
            generalInfo: "Location: Perth PTFS\nIATA: SHV\nLat/Long: N41° 55.7', E000° 09.2'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "18W",
                    name2: "36W",
                    length: 1000,
                    type: "water"
                }
            ],
            commsInfo: "Sea Haven Tower: 118.625\nPerth Centre: 136.250"
        },
        {
            code: "OWO",
            friendlyName: "Waterloo Seabase",
            groundCallsign: "",
            towerCallsigns: [
                "Waterloo Approach",
                "Waterloo Director",
                "Waterloo Radar",
                "Waterloo Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.600",
            defaultGroundFrequency: "",
            maxAcft: "Amphibian",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Waterloo"
                },
            ],
            generalInfo: "Location: Rockford PTFS\nIATA: OWO\nLat/Long: N41° 40.4', W000° 01.1'\nElevation: 0 ft\n\nAirport Use: Public",
            runwayInfo: [
                {
                    name1: "10W",
                    name2: "28W",
                    length: 1000,
                    type: "water"
                }
            ],
            commsInfo: "Waterloo Radar: 118.600\nChicago Centre: 124.850"
        }
    ]
}


function getAirport(code: string): Airport {
    let found = false;
    let a = null;
    generateAirports().forEach(airport => {
        if (found) {
            return
        }
        if (airport.code == code) {
            a = airport
            found = true
        }
    })
    return a != null ? a : getDefaultAirport()
}

function getAirportByName(name: string): Airport | undefined {
    let found = false;
    let a = undefined;
    generateAirports().forEach(airport => {
        if (found) {
            return
        }
        if (airport.friendlyName == name) {
            a = airport
            found = true
        }
    })
    return a
}
export { getAirport as findAirport, generateAirports, getAirportByName, getDefaultAirport, type Airport, type ChartPack };

