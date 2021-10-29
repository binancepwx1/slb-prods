var DATASET = {
    "extender": {
        "type": {
            "uphole": [
            	{"id": 1, "name": "MEXM-BA", "min": 28.13, "max": 31.65, "tolerance": 0, "require_crossover": true}, 
            	{"id": 2, "name": "MEXM-AA", "min": 31.63, "max": 35.15, "tolerance": 0, "require_crossover": true}, 
            	{"id": 3, "name": "MEXM-DA", "min": 34.13, "max": 37.65, "tolerance": 0, "require_crossover": true}, 

            	{"id": 4, "name": "EXTM-CB", "min": 11.25, "max": 13.75, "tolerance": 0, "require_crossover": false}, 
            	{"id": 5, "name": "EXTM-BB", "min": 13.37, "max": 15.87, "tolerance": 0, "require_crossover": false}, 
            	{"id": 6, "name": "EXTM-FA", "min": 15.49, "max": 17.99, "tolerance": 0, "require_crossover": false}, 
            	{"id": 7, "name": "EXTM-GB", "min": 17.58, "max": 20.14, "tolerance": 0, "require_crossover": false}, 
            	
            	{"id": 8, "name": "RTLM-CC", "min": 29.54, "max": 32.28, "tolerance": 0, "require_crossover": false}, 
            	{"id": 9, "name": "RTLM-BD", "min": 39.28, "max": 42.02, "tolerance": 0, "require_crossover": false}
            ],
            "downhole": [
            	{"id": 1, "name": "EXTF-AA", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": false}, 
            	{"id": 2, "name": "EXTF-BA", "min": 10.41, "max": 12.75, "tolerance": 0, "require_crossover": false}, 
            	{"id": 3, "name": "EXTF-CA", "min": 8.06, "max": 10.40, "tolerance": 0, "require_crossover": false}, 
            	{"id": 4, "name": "EXTF-DA", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": false}, 
            	{"id": 5, "name": "EXTF-DB", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": false}, 
            	
            	{"id": 6, "name": "MEXD-GA", "min": 22.36, "max": 24.36, "tolerance": 26.86, "require_crossover": true}, 
            	{"id": 7, "name": "MEXD-DB", "min": 25.36, "max": 27.76, "tolerance": 30.26, "require_crossover": true}, 
            	{"id": 8, "name": "MEXD-BA", "min": 27.82, "max": 30.16, "tolerance": 32.66, "require_crossover": true}, 
            	{"id": 9, "name": "MEXD-CB", "min": 30.22, "max": 32.56, "tolerance": 35.06, "require_crossover": true}, 
            	{"id": 10, "name": "MEXD-EB", "min": 31.96, "max": 34.36, "tolerance": 36.86, "require_crossover": true}, 
            	
            	{"id": 11, "name": "MXLD-DA", "min": 49.39, "max": 51.73, "tolerance": 54.23, "require_crossover": true}, 
            	{"id": 12, "name": "MXLD-BA", "min": 51.82, "max": 54.16, "tolerance": 56.66, "require_crossover": true}, 
            	{"id": 13, "name": "MXLD-G/BA", "min": 51.82, "max": 54.16, "tolerance": 56.66, "require_crossover": true}, 
            	
            	{"id": 14, "name": "RTLF-CA", "min": 12.85, "max": 13.75, "tolerance": 0, "require_crossover": false}, 
            	{"id": 15, "name": "RTLF-BB", "min": 14.96, "max": 17.58, "tolerance": 0, "require_crossover": false}, 
            	{"id": 16, "name": "RTLF-EA", "min": 28.81, "max": 31.43, "tolerance": 0, "require_crossover": false},

                {"id": 17, "name": "MEXC-MA", "min": 25.56, "max": 27.90, "tolerance": 0, "require_crossover": true},
                {"id": 18, "name": "MEXC-LA", "min": 27.92, "max": 30.26, "tolerance": 0, "require_crossover": true},
                {"id": 19, "name": "MEXC-EA", "min": 30.32, "max": 32.66, "tolerance": 0, "require_crossover": true},
                {"id": 20, "name": "MEXC-BA", "min": 32.11, "max": 33.94, "tolerance": 0, "require_crossover": true},

                {"id": 21, "name": "MEXC-DA", "min": 8.24, "max": 10.12, "tolerance": 0, "require_crossover": false},
                {"id": 22, "name": "MEXC-CA", "min": 10.60, "max": 12.48, "tolerance": 0, "require_crossover": false},
                {"id": 23, "name": "MEXC-AB", "min": 13.00, "max": 14.88, "tolerance": 0, "require_crossover": false},

                {"id": 24, "name": "RTLF-FA", "min": 13.75, "max": 14.95, "tolerance": 0, "require_crossover": false},
                {"id": 25, "name": "RTLF-AA", "min": 14.96, "max": 17.58, "tolerance": 0, "require_crossover": false},
                {"id": 26, "name": "RTLF-BA", "min": 14.96, "max": 17.58, "tolerance": 0, "require_crossover": false},
                {"id": 27, "name": "RTLF-BC", "min": 14.96, "max": 17.58, "tolerance": 0, "require_crossover": false},
                {"id": 28, "name": "RTLF-BD", "min": 14.96, "max": 17.58, "tolerance": 0, "require_crossover": false},
                {"id": 29, "name": "RTLF-DA", "min": 14.96, "max": 17.58, "tolerance": 0, "require_crossover": false},

                {"id": 30, "name": "EXTF-AA", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": true}, 
                {"id": 31, "name": "EXTF-BA", "min": 10.41, "max": 12.75, "tolerance": 0, "require_crossover": true}, 
                {"id": 32, "name": "EXTF-CA", "min": 8.06, "max": 10.40, "tolerance": 0, "require_crossover": true}, 
                {"id": 33, "name": "EXTF-DA", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": true}, 
                {"id": 34, "name": "EXTF-DB", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": true}, 
            ]
        }
    },
    "tool": [
        {
            "id": 1,
            "name": "ADN 4",
            "view": 2,
            "id_uphole": [],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {},
            "downhole": {
                "box": function(rop2usc, crossover){ return adn4_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 2,
            "name": "ARC 6",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return arc6_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return arc6_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return arc6_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return arc6_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 3,
            "name": "ARC 8",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return arc8_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return arc8_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return arc8_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return arc8_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 4,
            "name": "ARC 9",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return arc9_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return arc9_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return arc9_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return arc9_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 5,
            "name": "Ecoscope",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return ecoscope_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return ecoscope_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return ecoscope_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return ecoscope_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 6,
            "name": "Geosphere Transmitter",
            "view": 0,
            "id_uphole": [8],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {
                "pin": function(rop2usc, crossover){ return geosphere_transmitter_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc, crossover){ return geosphere_transmitter_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 7,
            "name": "Geosphere Receiver",
            "view": 0,
            "id_uphole": [8],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {
                "pin": function(rop2usc, crossover){ return geosphere_receiver_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc, crossover){ return geosphere_receiver_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 8,
            "name": "Gyropulse",
            "view": 0,
            "id_uphole": [1,2,3],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10,13],
            "uphole": {
                "box": function(rop2usc, crossover){ return gyropulse_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return gyropulse_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return gyropulse_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return gyropulse_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 9,
            "name": "Impulse",
            "view": 1,
            "id_uphole": [9],
            "label_form": {
                "uphole": ["Length from HV to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["HV", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {
                "pin": function(rop2usc, crossover){ return impulse_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc, crossover){ return impulse_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 10,
            "name": "Microscope 475",
            "view": 0,
            "id_uphole": [8],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {
                "pin": function(rop2usc, crossover){ return microscope475_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return microscope475_downhole_box(rop2usc) },
            }
        },
        {
            "id": 11,
            "name": "Microscope 675",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return microscope675_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return microscope675_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return microscope675_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return microscope675_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 12,
            "name": "Optidrill 675",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc){ return optidrill675_uphole_box(rop2usc) },
            },
            "downhole": {
                "pin": function(rop2usc, crossover){ return optidrill675_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 13,
            "name": "Optidrill 900",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return optidrill900_uphole_box(rop2usc, crossover) },
            },
            "downhole": {
                "pin": function(rop2usc, crossover){ return optidrill900_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 14,
            "name": "Periscope 675",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){
                    if (crossover == 0) {
                        var fin_len = rop2usc-17.66-1.678
                    }else{
                        var fin_len = rop2usc-17.66+crossover-1.838
                    }
                    var ext_type = get_extender_type(14, "uphole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-164.75+crossover+3.417
                    var ext_type = get_extender_type(14, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        },
        {
            "id": 15,
            "name": "Periscope 475",
            "view": 0,
            "id_uphole": [8],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {
                "pin": function(rop2usc, crossover){ return periscope475_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return periscope475_downhole_box(rop2usc) },
            }
        },
        {
            "id": 16,
            "name": "Sonicscope 675",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return sonicscope675_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return sonicscope675_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return sonicscope675_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return sonicscope675_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 17,
            "name": "Telescope IWOB",
            "view": 0,
            "id_uphole": [1,2,3],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10,13],
            "uphole": {
                "box": function(rop2usc, crossover){ return telescope_iwob_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return telescope_iwob_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return telescope_iwob_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return telescope_iwob_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 18,
            "name": "Telescope Non IWOB",
            "view": 0,
            "id_uphole": [1,2,3],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10,11,13],
            "uphole": {
                "box": function(rop2usc, crossover){ return telescope_non_iwob_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return telescope_non_iwob_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return telescope_non_iwob_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return telescope_non_iwob_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 19,
            "name": "VPWD",
            "view": 0,
            "id_uphole": [8],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {
                "pin": function(rop2usc, crossover){ return vpwd_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return vpwd_downhole_box(rop2usc) },
            }
        },
        {
            "id": 21,
            "name": "Digiscope",
            "view": 0,
            "id_uphole": [9],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {
                "pin": function(rop2usc, crossover){ return digiscope_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc, crossover){ return digiscope_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 22,
            "name": "Stethoscope 4",
            "view": 0,
            "id_uphole": [8],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [14,15,16,24],
            "uphole": {
                "box": function(rop2usc, crossover){ return stethoscope4_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return stethoscope4_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return stethoscope4_downhole_box(rop2usc) },
            }
        },
        {
            "id": 23,
            "name": "Stethoscope 6",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [17,18,19,20,21,22,23],
            "uphole": {
                "box": function(rop2usc, crossover){ return stethoscope6_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return stethoscope6_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return stethoscope6_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return stethoscope6_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 24,
            "name": "Sonicscope 825",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){
                    if (crossover == 0) {
                        var fin_len = rop2usc-97.5+crossover-1.678
                    }else{
                        var fin_len = rop2usc-97.5+crossover-1.838
                    }
                    var ext_type = get_extender_type(24, "uphole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                },
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-97.5+crossover+3.257
                    var ext_type = get_extender_type(24, "uphole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-58.375-1.678
                    var ext_type = get_extender_type(24, "downhole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                },
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-58.375+crossover+3.4
                    var ext_type = get_extender_type(24, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        },
        {
            "id": 25,
            "name": "Sonicvision 675",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [11,12,13],
            "uphole": {
                "box": function(rop2usc, crossover){
                    if (crossover == 0) {
                        var fin_len = rop2usc-116.625+crossover-1.678
                    }else{
                        var fin_len = rop2usc-116.625+crossover-1.838
                    }
                    var ext_type = get_extender_type(25, "uphole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                },
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-116.625+crossover+3.257
                    var ext_type = get_extender_type(25, "uphole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-135.125+crossover+3.417
                    var ext_type = get_extender_type(25, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        },
        {
            "id": 26,
            "name": "RSS Receiver Threaded 675",
            "view": 3,
            "id_uphole": [4,5,6,7],
            "label_form": {
                "uphole": ["Length from Body thread Shoulder to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [],
            "uphole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-17.03-1.678
                    var ext_type = get_extender_type(26, "uphole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {}
        },
        {
            "id": 27,
            "name": "RSS Receiver Threaded 1100",
            "view": 3,
            "id_uphole": [4,5,6,7],
            "label_form": {
                "uphole": ["Length from Body thread Shoulder to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [],
            "uphole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-6.68-1.678
                    var ext_type = get_extender_type(27, "uphole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {}
        },
        {
            "id": 28,
            "name": "Upper Clink 825",
            "view": 0,
            "id_uphole": [4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-24.02-1.678
                    var ext_type = get_extender_type(28, "uphole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {
                "box": function(rop2usc, crossover){
                    if (crossover == 0) {
                        alert("If extender not required, please install correct bullnose")
                    }
                    var fin_len = rop2usc-crossover-30.185+3.417
                    var ext_type = get_extender_type(28, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        },
        {
            "id": 29,
            "name": "Lower Clink 825",
            "view": 2,
            "id_uphole": [],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [6,7,8,9,10],
            "uphole": {},
            "downhole": {
                "box": function(rop2usc, crossover){
                    if (crossover == 0) {
                        alert("If extender not required, please install correct bullnose")
                    }
                    var fin_len = rop2usc-crossover-30.17+3.417
                    var ext_type = get_extender_type(29, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        },
        {
            "id": 30,
            "name": "KAI 675",
            "view": 0,
            "id_uphole": [4,5,6,7],
            "label_form": {
                "uphole": ["Length from ROP to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-20.8125-1.678
                    var ext_type = get_extender_type(30, "uphole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-126.75+crossover+3.417
                    var ext_type = get_extender_type(30, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        },
        {
            "id": 31,
            "name": "RSS Receiver Threaded 900",
            "view": 3,
            "id_uphole": [4,5,6,7],
            "label_form": {
                "uphole": ["Length from Body thread Shoulder to Uphole", "Crossover"],
                "downhole": ["Length from ROP to Downhole", "Crossover"],
            },
            "label_result": {
                "uphole": ["ROP", "Crossover"],
                "downhole": ["ROP", "Crossover"],
            },
            "id_downhole": [],
            "uphole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-8.53-1.678
                    var ext_type = get_extender_type(31, "uphole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {}
        },
        {
            "id": 32,
            "name": "Flex 675",
            "view": 0,
            "id_uphole": [4,5,6,7],
            "label_form": {
                "uphole": ["", ""],
                "downhole": ["", ""],
            },
            "label_result": {
                "uphole": ["Full collar length", "End StepID"],
                "downhole": ["Full collar length", "End StepID"],
            },
            "id_downhole": [30,31,32,33,34],
            "uphole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-8.53-1.678
                    var ext_type = get_extender_type(32, "uphole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-crossover-77.31+3.147
                    var ext_type = get_extender_type(32, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        },
        {
            "id": 33,
            "name": "Flex 900",
            "view": 0,
            "id_uphole": [4,5,6,7],
            "label_form": {
                "uphole": ["", ""],
                "downhole": ["", ""],
            },
            "label_result": {
                "uphole": ["Full collar length", "End StepID"],
                "downhole": ["Full collar length", "End StepID"],
            },
            "id_downhole": [1,2,3,4,5],
            "uphole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-7.5-1.678
                    var ext_type = get_extender_type(33, "uphole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-crossover-77.31+3.147
                    var ext_type = get_extender_type(33, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        },
        {
            "id": 34,
            "name": "Flex 1100",
            "view": 0,
            "id_uphole": [4,5,6,7],
            "label_form": {
                "uphole": ["", ""],
                "downhole": ["", ""],
            },
            "label_result": {
                "uphole": ["Full collar length", "End StepID"],
                "downhole": ["Full collar length", "End StepID"],
            },
            "id_downhole": [1,2,3,4,5],
            "uphole": {
                "box": function(rop2usc){
                    var fin_len = rop2usc-7.5-1.678
                    var ext_type = get_extender_type(34, "uphole", fin_len)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            },
            "downhole": {
                "pin": function(rop2usc, crossover){
                    var fin_len = rop2usc-crossover-77.31+3.147
                    var ext_type = get_extender_type(34, "downhole", fin_len, crossover)
                    var ret_data = {"extender": ext_type, "fin_len": fin_len}
                    return ret_data
                }
            }
        }
    ]
}
