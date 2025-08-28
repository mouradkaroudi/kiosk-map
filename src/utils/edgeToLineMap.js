// Map edges to lines
export const edgeToLineMap = {
  "1-2": "road_2",
  "2-1": "road_2",
  "2-road_2_a": "road_2_a",
  "road_2_a-2": "road_2_a",
  "road_2_a-road_2_b": "road_2_b",
  "road_2_b-road_2_a": "road_2_b",
  "road_2_b-road_2_c": "road_2_c",
  "road_2_c-road_2_b": "road_2_c",
  "road_2_c-3": "road_2_c",
  "3-road_2_c": "road_2_c",
  "3-road_3_a": "road_3_a",
  "road_3_a-3": "road_3_a",
  "road_3_a-road_3_b": "road_3_b",
  "road_3_b-road_3_a": "road_3_b",
  "road_3_b-7": "road_3_b",
  "7-road_3_b": "road_3_b",
  "1-road_1": "road_1",
  "road_1-1": "road_1",
  "road_1-road_1_e": "road_1_e",
  "road_1_e-road_1": "road_1_e",
  "road_1_e-road_1_d": "road_1_d",
  "road_1_d-road_1_e": "road_1_d",
  "road_1_d-road_1_c": "road_1_c",
  "road_1_c-road_1_d": "road_1_c",
  "road_1_c-road_1_b": "road_1_b",
  "road_1_b-road_1_c": "road_1_b",
  "road_1_b-road_1_a": "road_1_a",
  "road_1_a-road_1_b": "road_1_a",
  "road_1_a-road_4_b": "road_4_b",
  "road_4_b-road_1_a": "road_4_b",
  "road_4_b-road_4_a": "road_4_a",
  "road_4_a-road_4_b": "road_4_a",
  "road_4_a-road_4": "road_4",
  "road_4-road_4_a": "road_4",
  "road_4-4": "road_4",
  "4-road_4": "road_4",

//go to 5 

"4-road_4_c": "road_4_c",
"road_4_c-4": "road_4_c",

"road_4_c-road_4_d": "road_4_d",
"road_4_d-road_4_c": "road_4_d",

"road_4_d-5": "road_4_d",
"5-road_4_d": "road_4_d",


// go to 6
"5-road_5": "road_5",
"road_5-5": "road_5",

"road_5-road_6": "road_6",
"road_6-road_5": "road_6",

"road_6-6": "road_6",
"6-road_6": "road_6",
  
// go to 8
"6-road_8_a": "road_8_a",
"road_8_a-6": "road_8_a",

"road_8_a-road_8_b": "road_8_b",
"road_8_b-road_8_a": "road_8_b",

"road_8_b-road_8_c": "road_8_c",
"road_8_c-road_8_b": "road_8_c",

"road_8_c-road_8_d": "road_8_d",
"road_8_d-road_8_c": "road_8_d",

"road_8_d-road_8_e": "road_8_e",
"road_8_e-road_8_d": "road_8_e",

"road_8_e-road_10": "road_10",
"road_10-road_8_e": "road_10",

"road_10-8": "road_10",
"8-road_10": "road_10",
// go to 11

 
  "10-road_11": "road_11",
"road_11-10": "road_11",

"road_11-9": "road_11",
"9-road_11": "road_11",
// go from road_8_e to 12
"road_8_e-road_12": "road_12",
"road_12-road_8_e": "road_12",

"road_12-road_12_a": "road_12_a",
"road_12_a-road_12": "road_12_a",

"road_12_a-12": "road_12_a",
"12-road_12_a": "road_12_a",



// go to 13
"12-road_14": "road_14",
"road_14-12": "road_14",

"road_14-13": "road_14",
"13-road_14": "road_14",


// go from 11 to 15
"11-road_9": "road_9",
"road_9-11": "road_9",

"road_9-road_15_b": "road_15_b",
"road_15_b-road_9": "road_15_b",

"road_15_b-road_15": "road_15",
"road_15-road_15_b": "road_15",

"road_15-15": "road_15",
"15-road_15": "road_15",

//go from 12 to 16
"road_12-road_16_d": "road_16_d",
"road_16_d-road_12": "road_16_d",

"road_16_d-road_16_c": "road_16_c",
"road_16_c-road_16_d": "road_16_c",

"road_16_c-road_16_b": "road_16_b",
"road_16_b-road_16_c": "road_16_b",

"road_16_b-road_16_a": "road_16_a",
"road_16_a-road_16_b": "road_16_a",

"road_16_a-road_16": "road_16",
"road_16-road_16_a": "road_16",

"road_16-16": "road_16",
"16-road_16": "road_16",

// go from 16 to 17
"16-road_17_d": "road_17_d",
"road_17_d-16": "road_17_d",

"road_17_d-road_17_c": "road_17_c",
"road_17_c-road_17_d": "road_17_c",

"road_17_c-road_17_b": "road_17_b",
"road_17_b-road_17_c": "road_17_b",

"road_17_b-road_17_a": "road_17_a",
"road_17_a-road_17_b": "road_17_a",

"road_17_a-road_17": "road_17",
"road_17-road_17_a": "road_17",

"road_17-17": "road_17",
"17-road_17": "road_17",

// go from 17 to 19
"17-road_19": "road_19",
"road_19-17": "road_19",

"road_19-19": "road_19",
"19-road_19": "road_19",

// go from 19 to 18
"19-road_18": "road_18",
"road_18-19": "road_18",

"road_18-18": "road_18",
"18-road_18": "road_18",

//go to road_15 to loundry
"15-road_15": "road_15",
"road_15-15": "road_15",

"road_15-line1438": "line1438",
"line1438-road_15": "line1438",

"line1438-road_laundry_d": "road_laundry_d",
"road_laundry_d-line1438": "road_laundry_d",

"road_laundry_d-road_laundry_e": "road_laundry_e",
"road_laundry_e-road_laundry_d": "road_laundry_e",

"road_laundry_e-road_laundry": "road_laundry",
"road_laundry-road_laundry_e": "road_laundry",

"road_laundry-laundry": "road_laundry",
"laundry-road_laundry": "road_laundry",



// go from road_laundry_a to 18
"laundry-road_laundry_a": "road_laundry_a",
"road_laundry_a-laundry": "road_laundry_a",

"road_laundry_a-road_laundry_b": "road_laundry_b",
"road_laundry_b-road_laundry_a": "road_laundry_b",

"road_laundry_b-road_laundry_c": "road_laundry_c",
"road_laundry_c-road_laundry_b": "road_laundry_c",

"road_laundry_c-road_18_a": "road_18_a",
"road_18_a-road_laundry_c": "road_18_a",

"road_18_a-18": "road_18_a",
"18-road_18_a": "road_18_a",


// go from 17 to 20


"road_17_a-road_20_a": "road_20_a",
"road_20_a-road_17_a": "road_20_a",

"road_20_a-road_20": "road_20",
"road_20-road_20_a": "road_20",

"road_20-20": "road_20",
"20-road_20": "road_20",


// go from 18 to 20
"road_laundry_c-road_20_c": "road_20_c",
"road_20_c-road_laundry_c": "road_20_c",

"road_20_c-road_20_b": "road_20_b",
"road_20_b-road_20_c": "road_20_b",

"road_20_b-20": "road_20_b",
"20-road_20_b": "road_20_b",


// go from road_laroche_4 to 21

"4-road_4": "road_4",

"road_4-4": "road_4",

"road_4-road_4_a": "road_4_a",
"road_4_a-road_4": "road_4_a",

"road_4_a-road_4_b": "road_4_b",
"road_4_b-road_4_a": "road_4_b",

"road_4_b-road_sub_1": "road_sub_1",
"road_sub_1-road_4_b": "road_sub_1",

"road_sub_1-road_laroche_2": "road_laroche_2",
"road_laroche_2-road_sub_1": "road_laroche_2",

"road_laroche_2-road_laroche_3": "road_laroche_3",
"road_laroche_3-road_laroche_2": "road_laroche_3",

"road_laroche_3-road_laroche_4": "road_laroche_4",
"road_laroche_4-road_laroche_3": "road_laroche_4",

"road_laroche_4-road_laroche_5": "road_laroche_5",
"road_laroche_5-road_laroche_4": "road_laroche_5",

"road_laroche_5-road_laroche_6": "road_laroche_6",
"road_laroche_6-road_laroche_5": "road_laroche_6",

"road_laroche_6-road_laroche_7": "road_laroche_7",
"road_laroche_7-road_laroche_6": "road_laroche_7",

"road_laroche_7-road_20_entry": "road_20_entry",
"road_20_entry-road_laroche_7": "road_20_entry",

"road_20_entry-road_22_a": "road_22_a",
"road_22_a-road_20_entry": "road_22_a",

"road_22_a-road_21": "road_21",
"road_21-road_22_a": "road_21",

"road_21-21": "road_21",
"21-road_21": "road_21",




// 1 to 21 



"1-road_1": "road_1",
"road_1-1": "road_1",

"road_1-road_1_e": "road_1_e",
"road_1_e-road_1": "road_1_e",

"road_1_e-road_1_d": "road_1_d",
"road_1_d-road_1_e": "road_1_d",

"road_1_d-road_1_c": "road_1_c",
"road_1_c-road_1_d": "road_1_c",

"road_1_c-road_1_b": "road_1_b",
"road_1_b-road_1_c": "road_1_b",

"road_1_b-road_1_a": "road_1_a",
"road_1_a-road_1_b": "road_1_a",

"road_1_a-road_sub_1": "road_sub_1",
"road_sub_1-road_1_a": "road_sub_1",

"road_sub_1-road_laroche_2": "road_laroche_2",
"road_laroche_2-road_sub_1": "road_laroche_2",

"road_laroche_2-road_laroche_3": "road_laroche_3",
"road_laroche_3-road_laroche_2": "road_laroche_3",

"road_laroche_3-road_laroche_4": "road_laroche_4",
"road_laroche_4-road_laroche_3": "road_laroche_4",

"road_laroche_4-road_laroche_5": "road_laroche_5",
"road_laroche_5-road_laroche_4": "road_laroche_5",

"road_laroche_5-road_laroche_6": "road_laroche_6",
"road_laroche_6-road_laroche_5": "road_laroche_6",

"road_laroche_6-road_laroche_7": "road_laroche_7",
"road_laroche_7-road_laroche_6": "road_laroche_7",

"road_laroche_7-road_20_entry": "road_20_entry",
"road_20_entry-road_laroche_7": "road_20_entry",

"road_20_entry-road_22_a": "road_22_a",
"road_22_a-road_20_entry": "road_22_a",

"road_22_a-road_21": "road_21",
"road_21-road_22_a": "road_21",

"road_21-21": "road_21",
"21-road_21": "road_21",









// from 21 to 23
"21-road_21_a": "road_21_a",
"road_21_a-21": "road_21_a",

"road_21_a-road_23": "road_23",
"road_23-road_21_a": "road_23",

"road_23-23": "road_23",
"23-road_23": "road_23",

// from 23 to 24
"23-road_23_a": "road_23_a",
"road_23_a-23": "road_23_a",

"road_23_a-road_26": "road_26",
"road_26-road_23_a": "road_26",

"road_26-24": "road_26",
"24-road_26": "road_26",


// go from road_22_a to 22
"road_22_a-road_22": "road_22",
"road_22-road_22_a": "road_22",

"road_22-22": "road_22",
"22-road_22": "road_22",

// go from 22 to 24
"22-road_24_a": "road_24_a",
"road_24_a-22": "road_24_a",

"road_24_a-road_24": "road_24",
"road_24-road_24_a": "road_24",

"road_24-26": "road_24",
"26-road_24": "road_24",
// go from road_23_a to 27
"road_23_a-road_27_a": "road_27_a",
"road_27_a-road_23_a": "road_27_a",

"road_27_a-27": "road_27_a",
"27-road_27_a": "road_27_a",

// go from 28 to 29



"28-road_29": "road_29",
"road_29-28": "road_29",

"road_29-29": "road_29",
"29-road_29": "road_29",

// go from 27 to 29
"27-road_27": "road_27",
"road_27-27": "road_27",

"road_27-road_29_c": "road_29_c",
"road_29_c-road_27": "road_29_c",

"road_29_c-29": "road_29_c",
"29-road_29_c": "road_29_c",


// go from 22 to 25

"road_24_a-road_25": "road_25",
"road_25-road_24_a": "road_25",

"road_25-25": "road_25",
"25-road_25": "road_25",


// from 25 to 28
"25-road_28_a": "road_28_a",
"road_28_a-25": "road_28_a",

"road_28_a-road_28": "road_28",
"road_28-road_28_a": "road_28",

"road_28-28": "road_28",
"28-road_28": "road_28",


// go from 28 to 30
"road_28_a-road_30": "road_30",
"road_30-road_28_a": "road_30",

"road_30-30": "road_30",
"30-road_30": "road_30",


// go from 30 to 31

"30-road_31_b": "road_31_b",
"road_31_b-30": "road_31_b",

"road_31_b-road_31_a": "road_31_a",
"road_31_a-road_31_b": "road_31_a",

"road_31_a-road_31": "road_31",
"road_31-road_31_a": "road_31",

"road_31-31": "road_31",
"31-road_31": "road_31",


// go from 29 to 31
"road_27-road_29_b": "road_29_b",
"road_29_b-road_27": "road_29_b",

"road_29_b-road_29_a": "road_29_a",
"road_29_a-road_29_b": "road_29_a",

"road_29_a-31": "road_29_a",
"31-road_29_a": "road_29_a",
 
// //go from laroche-entry to 1
// "laroche-entry-road_laroche-entry": "road_laroche-entry",
// "road_laroche-entry-laroche-entry": "road_laroche-entry",

// "road_laroche-entry-road_laroche_1": "road_laroche-entry",
// "road_laroche_1-road_laroche-entry": "road_laroche-entry",

// "road_laroche_1-road_sub_1": "road_laroche_1",
// "road_sub_1-road_laroche_1": "road_laroche_1",

// "road_sub_1-road_1_a": "road_sub_1",
// "road_1_a-road_sub_1": "road_sub_1",

// "road_1_a-road_1_b": "road_1_a",
// "road_1_b-road_1_a": "road_1_a",

// "road_1_b-road_1_c": "road_1_b",
// "road_1_c-road_1_b": "road_1_b",

// "road_1_c-road_1_d": "road_1_c",
// "road_1_d-road_1_c": "road_1_c",

// "road_1_d-road_1_e": "road_1_d",
// "road_1_e-road_1_d": "road_1_d",

// "road_1_e-road_1": "road_1_e",
// "road_1-road_1_e": "road_1_e",

// "road_1-1": "road_1",
// "1-road_1": "road_1",


// go to laroche-entry to 153
"laroche-entry-road_laroche_22": "road_laroche_22",
"road_laroche_22-laroche-entry": "road_laroche_22",

"road_laroche_22-road_laroche_21": "road_laroche_21",
"road_laroche_21-road_laroche_22": "road_laroche_21",

"road_laroche_21-road_laroche_20": "road_laroche_20",
"road_laroche_20-road_laroche_21": "road_laroche_20",

"road_laroche_20-road_laroche_19": "road_laroche_19",
"road_laroche_19-road_laroche_20": "road_laroche_19",

"road_laroche_19-153": "road_laroche_19",
"153-road_laroche_19": "road_laroche_19",


// go from 153 to 32
"road_laroche_19-road_153": "road_153",
"road_153-road_laroche_19": "road_153",

"road_153-road_32": "road_32",
"road_32-road_153": "road_32",

"road_32-32": "road_32",
"32-road_32": "road_32"



//32 to 33
,"32-road_33": "road_33",
"road_33-32": "road_33",


// 33 to 34
"33-road_34": "road_34",
"road_34-33": "road_34",

// 153 to 36

"road_153-road_laroche_17": "road_laroche_17",
"road_laroche_17-road_153": "road_laroche_17",

"road_laroche_17-road_36": "road_36",
"road_36-road_laroche_17": "road_36",

"road_36-36": "road_36",
"36-road_36": "road_36",


// 36 to 34

"35-road_35": "road_35",
"road_35-35": "road_35",

"road_35-road_35_b": "road_35_b",
"road_35_b-road_35": "road_35_b",

"road_35_b-road_35_a": "road_35_a",
"road_35_a-road_35_b": "road_35_a",

"road_35_a-34": "road_35_a",
"34-road_35_a": "road_35_a",



// 36 to 37
"road_laroche_17-road_laroche_16": "road_laroche_16",
"road_laroche_16-road_laroche_17": "road_laroche_16",

"road_laroche_16-road_37": "road_37",
"road_37-road_laroche_16": "road_37",

"road_37-37": "road_37",
"37-road_37": "road_37"

// 37 to 38
,"37-road_38": "road_38",
"road_38-37": "road_38",

// 38 to 39
"38-road_41": "road_41",
"road_41-38": "road_41",

"road_41-39": "road_41",
"39-road_41": "road_41",


// 39 to 42
"36-road_35": "road_35",
"road_35-36": "road_35",

"road_35-road_42_a": "road_42_a",
"road_42_a-road_35": "road_42_a",

"road_42_a-road_42": "road_42",
"road_42-road_42_a": "road_42",

"road_42-42": "road_42",
"42-road_42": "road_42",


// go from 37 to 40


"road_laroche_16-road_laroche_15": "road_laroche_15",
"road_laroche_15-road_laroche_16": "road_laroche_15",

"road_laroche_15-road_44": "road_44",
"road_44-road_laroche_15": "road_44",

"road_44-40": "road_44",
"40-road_44": "road_44",

// go from 40 to 44
"40-road_43": "road_43",
"road_43-40": "road_43",

"road_43-43": "road_43",
"43-road_43": "road_43",

// 39 to 45


"road_42_a-road_45_a": "road_45_a",
"road_45_a-road_42_a": "road_45_a",

"road_45_a-road_45": "road_45",
"road_45-road_45_a": "road_45",

"road_45-45": "road_45",
"45-road_45": "road_45",


// 40 to 46
"road_laroche_15-road_laroche_14": "road_laroche_14",
"road_laroche_14-road_laroche_15": "road_laroche_14",

"road_laroche_14-road_46": "road_46",
"road_46-road_laroche_14": "road_46",

"road_46-46": "road_46",
"46-road_46": "road_46",


// 46 to 47
"46-line1572": "line1572",
"line1572-46": "line1572",

"line1572-road_47": "road_47",
"road_47-line1572": "road_47",

"road_47-47": "road_47",
"47-road_47": "road_47",

// 45 to 47
"45-road_45": "road_45",
"road_45-45": "road_45",

"road_45-road_47_a": "road_45",
"road_47_a-road_45": "road_45",

"road_47_a-line1576": "road_47_a",
"line1576-road_47_a": "road_47_a",

"line1576-47": "line1576",
"47-line1576": "line1576",




// ploa_skidaway_road to dd


"skidaway_road-SKIDAWAY_ROAD_1": "SKIDAWAY_ROAD_1",
"SKIDAWAY_ROAD_1-skidaway_road": "SKIDAWAY_ROAD_1",

"SKIDAWAY_ROAD_1-con_SKIDAWAY_ROAD": "con_SKIDAWAY_ROAD",
"con_SKIDAWAY_ROAD-SKIDAWAY_ROAD_1": "con_SKIDAWAY_ROAD",

"con_SKIDAWAY_ROAD-path7218": "path7218",
"path7218-con_SKIDAWAY_ROAD": "path7218",

"path7218-polygon7220": "polygon7220",
"polygon7220-path7218": "polygon7220",

"polygon7220-path7090": "path7090",
"path7090-polygon7220": "path7090",

"path7090-path7096": "path7096",
"path7096-path7090": "path7096",

"path7096-dd": "dd",
"dd-path7096": "dd",




// // dd to 4
"dd-path7096": "path7096",
"path7096-dd": "path7096",

"path7096-path7092": "path7092",
"path7092-path7096": "path7092",

"path7092-polygon7212": "polygon7212",
"polygon7212-path7092": "polygon7212",

"polygon7212-line2349": "line2349",
"line2349-polygon7212": "line2349",

"line2349-road_laroche_1": "road_laroche_1",
"road_laroche_1-line2349": "road_laroche_1",




// d2 to 132
"road_laroche_7-road_laroche_8": "road_laroche_8",
"road_laroche_8-road_laroche_7": "road_laroche_8",

"road_laroche_8-road_laroche_9": "road_laroche_9",
"road_laroche_9-road_laroche_8": "road_laroche_9",

"road_laroche_9-road_laroche_10": "road_laroche_10",
"road_laroche_10-road_laroche_9": "road_laroche_10",

"road_laroche_10-polygon6291": "polygon6291",
"polygon6291-road_laroche_10": "polygon6291",

"polygon6291-132": "polygon6291",
"132-polygon6291": "polygon6291",

// 132 to 47
"132-polygon6291": "polygon6291",
"polygon6291-132": "polygon6291",

"polygon6291-road_laroche_10": "road_laroche_10",
"road_laroche_10-polygon6291": "road_laroche_10",

"road_laroche_10-road_laroche_11": "road_laroche_11",
"road_laroche_11-road_laroche_10": "road_laroche_11",

"road_laroche_11-road_laroche_12": "road_laroche_12",
"road_laroche_12-road_laroche_11": "road_laroche_12",

"road_laroche_12-road_laroche_13": "road_laroche_13",
"road_laroche_13-road_laroche_12": "road_laroche_13",

"road_laroche_13-road_46": "road_46",
"road_46-road_laroche_13": "road_46",

"road_46-line1572": "line1572",
"line1572-road_46": "line1572",

"line1572-road_47": "road_47",
"road_47-line1572": "road_47",

"road_47-47": "47",
"47-road_47": "47",


// 132 to k

"132-road_k": "road_k",
"road_k-132": "road_k",

"road_k-k": "k",
"k-road_k": "k",




// k to the-pavlion
"k-hub_r_132": "hub_r_132",
"hub_r_132-k": "hub_r_132",

"hub_r_132-path2571": "path2571",
"path2571-hub_r_132": "path2571",

"path2571-path1889": "path1889",
"path1889-path2571": "path1889",

"path1889-the-pavlion": "path1889",
"the-pavlion-path1889": "path1889",


// SKIDAWAY_ROAD_1 to 141
"skidaway_road-SKIDAWAY_ROAD_1": "SKIDAWAY_ROAD_1",
"SKIDAWAY_ROAD_1-skidaway_road": "SKIDAWAY_ROAD_1",

"SKIDAWAY_ROAD_1-con_SKIDAWAY_ROAD": "con_SKIDAWAY_ROAD",
"con_SKIDAWAY_ROAD-SKIDAWAY_ROAD_1": "con_SKIDAWAY_ROAD",

"con_SKIDAWAY_ROAD-main_a_1": "main_a_1",
"main_a_1-con_SKIDAWAY_ROAD": "main_a_1",

"main_a_1-con_main_a2": "con_main_a2",
"con_main_a2-main_a_1": "con_main_a2",

"con_main_a2-wright_stad_1": "wright_stad_1",
"wright_stad_1-con_main_a2": "wright_stad_1",

"wright_stad_1-conn_wright_studium_l_1": "conn_wright_studium_l_1",
"conn_wright_studium_l_1-wright_stad_1": "conn_wright_studium_l_1",

"conn_wright_studium_l_1-wright_studium_l_2": "wright_studium_l_2",
"wright_studium_l_2-conn_wright_studium_l_1": "wright_studium_l_2",

"wright_studium_l_2-141": "wright_studium_l_2",
"141-wright_studium_l_2": "wright_studium_l_2",

// 141 to wright stadium
"141-wright_studium_r4": "wright_studium_r4",
"wright_studium_r4-141": "wright_studium_r4",

"wright_studium_r4-wright_stadium": "wright_stadium",
"wright_stadium-wright_studium_r4": "wright_stadium",


//// skidaway_road to 140
"skidaway_road-SKIDAWAY_ROAD_1": "SKIDAWAY_ROAD_1",
"SKIDAWAY_ROAD_1-skidaway_road": "SKIDAWAY_ROAD_1",

"SKIDAWAY_ROAD_1-con_SKIDAWAY_ROAD": "con_SKIDAWAY_ROAD",
"con_SKIDAWAY_ROAD-SKIDAWAY_ROAD_1": "con_SKIDAWAY_ROAD",

"con_SKIDAWAY_ROAD-main_a_1": "main_a_1",
"main_a_1-con_SKIDAWAY_ROAD": "main_a_1",

"main_a_1-con_main_a2": "con_main_a2",
"con_main_a2-main_a_1": "con_main_a2",

"con_main_a2-main_a_2": "main_a_2",
"main_a_2-con_main_a2": "main_a_2",

"main_a_2-main_a_3": "main_a_3",
"main_a_3-main_a_2": "main_a_3",

"main_a_3-con_main_a3": "con_main_a3",
"con_main_a3-main_a_3": "con_main_a3",

"con_main_a3-main_a_4": "main_a_4",
"main_a_4-con_main_a3": "main_a_4",

"main_a_4-wright_studium_r1": "wright_studium_r1",
"wright_studium_r1-main_a_4": "wright_studium_r1",

"wright_studium_r1-conn_wright_studium_r3": "conn_wright_studium_r3",
"conn_wright_studium_r3-wright_studium_r1": "conn_wright_studium_r3",

"conn_wright_studium_r3-140": "conn_wright_studium_r3",
"140-conn_wright_studium_r3": "conn_wright_studium_r3",


// 140 to b
"140-wright_studium_r2": "wright_studium_r2",
"wright_studium_r2-140": "wright_studium_r2",

"wright_studium_r2-conn_wright_studium_r_2": "conn_wright_studium_r_2",
"conn_wright_studium_r_2-wright_studium_r2": "conn_wright_studium_r_2",

"conn_wright_studium_r_2-wright_studium_r3": "wright_studium_r3",
"wright_studium_r3-conn_wright_studium_r_2": "wright_studium_r3",

"wright_studium_r3-b": "wright_studium_r3",
"b-wright_studium_r3": "wright_studium_r3",

// b to 141
"b-wright_studium_r3": "wright_studium_r3",
"wright_studium_r3-b": "wright_studium_r3",

"wright_studium_r3-con_wright_studium_r1": "con_wright_studium_r1",
"con_wright_studium_r1-wright_studium_r3": "con_wright_studium_r1",

"con_wright_studium_r1-wright_studium_round_road": "wright_studium_round_road",
"wright_studium_round_road-con_wright_studium_r1": "wright_studium_round_road",

"wright_studium_round_road-conn_wright_studium_l_1": "conn_wright_studium_l_1",
"conn_wright_studium_l_1-wright_studium_round_road": "conn_wright_studium_l_1",

"conn_wright_studium_l_1-wright_studium_l_2": "wright_studium_l_2",
"wright_studium_l_2-conn_wright_studium_l_1": "wright_studium_l_2",

"wright_studium_l_2-141": "wright_studium_l_2",
"141-wright_studium_l_2": "wright_studium_l_2",


//   140 to 147
"140-conn_wright_studium_r3": "conn_wright_studium_r3",
"conn_wright_studium_r3-140": "conn_wright_studium_r3",

"conn_wright_studium_r3-wright_studium_r1": "wright_studium_r1",
"wright_studium_r1-conn_wright_studium_r3": "wright_studium_r1",

"wright_studium_r1-con_main_a4": "con_main_a4",
"con_main_a4-wright_studium_r1": "con_main_a4",

"con_main_a4-main_a_5": "main_a_5",
"main_a_5-con_main_a4": "main_a_5",

"main_a_5-con_main_a5": "con_main_a5",
"con_main_a5-main_a_5": "con_main_a5",

"con_main_a5-line2289": "line2289",
"line2289-con_main_a5": "line2289",

"line2289-line2093": "line2093",
"line2093-line2289": "line2093",

"line2093-147": "line2093",
"147-line2093": "line2093",

// 147 to c
"con_main_a5-main_a_6": "main_a_6",
"main_a_6-con_main_a5": "main_a_6",

"main_a_6-con_main_a6": "con_main_a6",
"con_main_a6-main_a_6": "con_main_a6",

"con_main_a6-rect1912": "rect1912",
"rect1912-con_main_a6": "rect1912",

"rect1912-c": "rect1912",
"c-rect1912": "rect1912",


// c to ploa_football_practice_field

"c-rect1912": "rect1912",
"rect1912-c": "rect1912",

"rect1912-con_main_a6": "con_main_a6",
"con_main_a6-rect1912": "con_main_a6",

"con_main_a6-main_a_7": "main_a_7",
"main_a_7-con_main_a6": "main_a_7",

"main_a_7-con_main_a7": "con_main_a7",
"con_main_a7-main_a_7": "con_main_a7",

"con_main_a7-football_practice_field_1": "football_practice_field_1",
"football_practice_field_1-con_main_a7": "football_practice_field_1",

"football_practice_field_1-sub_football_practice_field": "sub_football_practice_field",
"sub_football_practice_field-football_practice_field_1": "sub_football_practice_field",

"sub_football_practice_field-football_practice_field": "football_practice_field",
"football_practice_field-sub_football_practice_field": "football_practice_field",

// football_practice to cc
"con_main_a7-main_a_8": "main_a_8",
"main_a_8-con_main_a7": "main_a_8",

"main_a_8-con_main_a8": "con_main_a8",
"con_main_a8-main_a_8": "con_main_a8",

"con_main_a8-hub_outer": "hub_outer",
"hub_outer-con_main_a8": "hub_outer",

"hub_outer-con_hub_outer_11": "con_hub_outer_11",
"con_hub_outer_11-hub_outer": "con_hub_outer_11",

"con_hub_outer_11-cc": "con_hub_outer_11",
"cc-con_hub_outer_11": "con_hub_outer_11",


// ploa_football_practice_field to 21
"football_practice_field_1-conn_football_practice_field_1": "football_practice_field_1",
"conn_football_practice_field_1-football_practice_field_1": "football_practice_field_1",

"conn_football_practice_field_1-polygon6394": "conn_football_practice_field_1",
"polygon6394-conn_football_practice_field_1": "conn_football_practice_field_1",

"polygon6394-road_laroche_5": "polygon6394",
"road_laroche_5-polygon6394": "polygon6394",

"road_laroche_5-road_laroche_6": "road_laroche_5",
"road_laroche_6-road_laroche_5": "road_laroche_5",

"road_laroche_6-road_laroche_7": "road_laroche_6",
"road_laroche_7-road_laroche_6": "road_laroche_6",

"road_laroche_7-road_20_entry": "road_laroche_7",
"road_20_entry-road_laroche_7": "road_laroche_7",

"road_20_entry-road_22_a": "road_20_entry",
"road_22_a-road_20_entry": "road_20_entry",

"road_22_a-road_21": "road_22_a",
"road_21-road_22_a": "road_22_a",

"road_21-21": "road_21",
"21-road_21": "road_21",


// cc to aa 
"cc-hub_outer_1": "hub_outer_1",
"hub_outer_1-cc": "hub_outer_1",

"hub_outer_1-con_hub_outer1": "con_hub_outer1",
"con_hub_outer1-hub_outer_1": "con_hub_outer1",

"con_hub_outer1-hub_outer_parking_1": "hub_outer_parking_1",
"hub_outer_parking_1-con_hub_outer1": "hub_outer_parking_1",

"hub_outer_parking_1-aa": "hub_outer_parking_1",
"aa-hub_outer_parking_1": "hub_outer_parking_1",

// cc to L
"con_hub_outer1-hub_outer_2": "hub_outer_2",
"hub_outer_2-con_hub_outer1": "hub_outer_2",

"hub_outer_2-path31242": "path31242",
"path31242-hub_outer_2": "path31242",

"path31242-con_hub_outer_3": "con_hub_outer_3",
"con_hub_outer_3-path31242": "con_hub_outer_3",

"con_hub_outer_3-path1809": "path1809",
"path1809-con_hub_outer_3": "path1809",

"path1809-l": "path1809",
"l-path1809": "path1809",

// l to aa
"con_hub_outer_3-hub_outer_parking_r1": "hub_outer_parking_r1",
"hub_outer_parking_r1-con_hub_outer_3": "hub_outer_parking_r1",

"hub_outer_parking_r1-aa": "hub_outer_parking_r1",
"aa-hub_outer_parking_r1": "hub_outer_parking_r1",
// football to 137
"con_main_a8-hub_entry_left": "hub_entry_left",
"hub_entry_left-con_main_a8": "hub_entry_left",

"hub_entry_left-con_hub_entry_left_1": "con_hub_entry_left_1",
"con_hub_entry_left_1-hub_entry_left": "con_hub_entry_left_1",

"con_hub_entry_left_1-hub_entry_left_1": "hub_entry_left_1",
"hub_entry_left_1-con_hub_entry_left_1": "hub_entry_left_1",

"hub_entry_left_1-con_hub_entry_left_2": "con_hub_entry_left_2",
"con_hub_entry_left_2-hub_entry_left_1": "con_hub_entry_left_2",

"con_hub_entry_left_2-path1962": "path1962",
"path1962-con_hub_entry_left_2": "path1962",

"path1962-137": "path1962",
"137-path1962": "path1962",


// 137 to 135 

  //  ["path1962", "con_hub_entry_left_2"],

"path1962-con_hub_entry_left_2":"con_hub_entry_left_2",
"con_hub_entry_left_2-path1962":"con_hub_entry_left_2",


"con_hub_entry_left_2-hub_entry_left_2": "hub_entry_left_2",
"hub_entry_left_2-con_hub_entry_left_2": "hub_entry_left_2",

"hub_entry_left_2-con_hub_entry_left_3": "con_hub_entry_left_3",
"con_hub_entry_left_3-hub_entry_left_2": "con_hub_entry_left_3",

"con_hub_entry_left_3-hub_sub_b": "hub_sub_b",
"hub_sub_b-con_hub_entry_left_3": "hub_sub_b",

"hub_sub_b-con_hub_sub_b_1": "con_hub_sub_b_1",
"con_hub_sub_b_1-hub_sub_b": "con_hub_sub_b_1",

"con_hub_sub_b_1-hub_sub_a1": "hub_sub_a1",
"hub_sub_a1-con_hub_sub_b_1": "hub_sub_a1",

"hub_sub_a1-con_hub_sub_a1": "con_hub_sub_a1",
"con_hub_sub_a1-hub_sub_a1": "con_hub_sub_a1",

"con_hub_sub_a1-hub_sub_a2": "hub_sub_a2",
"hub_sub_a2-con_hub_sub_a1": "hub_sub_a2",

"hub_sub_a2-con_hub_sub_a2": "con_hub_sub_a2",
"con_hub_sub_a2-hub_sub_a2": "con_hub_sub_a2",

"con_hub_sub_a2-135": "con_hub_sub_a2",
"135-con_hub_sub_a2": "con_hub_sub_a2",

// 137 to 136
"con_hub_entry_left_1-hub_sub_136": "hub_sub_136",
"hub_sub_136-con_hub_entry_left_1": "hub_sub_136",

"hub_sub_136-whiting-hill": "whiting-hill",
"whiting-hill-hub_sub_whiting-hill": "whiting-hill",
 

// f to 134 
"con_hub_sub_b2-hub_sub_b4": "hub_sub_b4",
"hub_sub_b4-con_hub_sub_b2": "hub_sub_b4",

"hub_sub_b4-con_hub_sub_b3": "con_hub_sub_b3",
"con_hub_sub_b3-hub_sub_b4": "con_hub_sub_b3",

"con_hub_sub_b3-hub_sub_b5": "hub_sub_b5",
"hub_sub_b5-con_hub_sub_b3": "hub_sub_b5",

"hub_sub_b5-con_hub_sub_b4": "con_hub_sub_b4",
"con_hub_sub_b4-hub_sub_b5": "con_hub_sub_b4",

"con_hub_sub_b4-jordan-business-school": "jordan-business-school",
"jordan-business-school-con_hub_sub_b4": "jordan-business-school",


// 134 to g 
"con_hub_sub_b4-jordan-business-school": "con_hub_sub_b4",
"jordan-business-school-con_hub_sub_b4": "con_hub_sub_b4",

"jordan-business-school-hub_sub_b6": "jordan-business-school",
"hub_sub_b6-jordan-business-school": "jordan-business-school",

"hub_sub_b6-con_hub_sub_b5": "hub_sub_b6",
"con_hub_sub_b5-hub_sub_b6": "hub_sub_b6",

"con_hub_sub_b5-hub_sub_b7": "con_hub_sub_b5",
"hub_sub_b7-con_hub_sub_b5": "con_hub_sub_b5",

"hub_sub_b7-con_hub_sub_b6": "hub_sub_b7",
"con_hub_sub_b6-hub_sub_b7": "hub_sub_b7",

"con_hub_sub_b6-hub_sub_b8": "con_hub_sub_b6",
"hub_sub_b8-con_hub_sub_b6": "con_hub_sub_b6",

"hub_sub_b8-con_hub_outer_b_4": "hub_sub_b8",
"con_hub_outer_b_4-hub_sub_b8": "hub_sub_b8",

"con_hub_outer_b_4-hub_outer_b_5": "con_hub_outer_b_4",
"hub_outer_b_5-con_hub_outer_b_4": "con_hub_outer_b_4",

"hub_outer_b_5-g": "hub_outer_b_5",
"g-hub_outer_b_5": "hub_outer_b_5",





//  134 to 136 shortcut 
"jordan-business-school-con_hub_sub_b4": "con_hub_sub_b4",
"con_hub_sub_b4-jordan-business-school": "con_hub_sub_b4",

"con_hub_sub_b4-hub_sub_b6": "hub_sub_b6",
"hub_sub_b6-con_hub_sub_b4": "hub_sub_b6",

"hub_sub_b6-con_hub_sub_b5": "con_hub_sub_b5",
"con_hub_sub_b5-hub_sub_b6": "con_hub_sub_b5",

"con_hub_sub_b5-hub_sub_b7": "hub_sub_b7",
"hub_sub_b7-con_hub_sub_b5": "hub_sub_b7",

"hub_sub_b7-con_hub_sub_b6": "con_hub_sub_b6",
"con_hub_sub_b6-hub_sub_b7": "con_hub_sub_b6",

"con_hub_sub_b6-136_b": "136_b",
"136_b-con_hub_sub_b6": "136_b",



// 137 to f 
"con_hub_entry_left_1-hub_sub_a": "hub_sub_a",
"hub_sub_a-con_hub_entry_left_1": "hub_sub_a",

"hub_sub_a-con_hub_sub_b_1": "con_hub_sub_b_1",
"con_hub_sub_b_1-hub_sub_a": "con_hub_sub_b_1",

"con_hub_sub_b_1-hub_sub_b_1": "hub_sub_b_1",
"hub_sub_b_1-con_hub_sub_b_1": "hub_sub_b_1",

"hub_sub_b_1-con_hub_sub_b1": "con_hub_sub_b1",
"con_hub_sub_b1-hub_sub_b_1": "con_hub_sub_b1",

"con_hub_sub_b1-hub_sub_b3": "hub_sub_b3",
"hub_sub_b3-con_hub_sub_b1": "hub_sub_b3",

"hub_sub_b3-con_hub_sub_b2": "con_hub_sub_b2",
"con_hub_sub_b2-hub_sub_b3": "con_hub_sub_b2",

"con_hub_sub_b2-f": "f",
"f-con_hub_sub_b2": "f",

// 135 to 154

"con_hub_sub_a2-hub_sub_a3": "hub_sub_a3",
"hub_sub_a3-con_hub_sub_a2": "hub_sub_a3",

"hub_sub_a3-con_con_hub_sub_c4": "con_con_hub_sub_c4",
"con_con_hub_sub_c4-hub_sub_a3": "con_con_hub_sub_c4",

"con_con_hub_sub_c4-hub_sub_a4": "hub_sub_a4",
"hub_sub_a4-con_con_hub_sub_c4": "hub_sub_a4",

"hub_sub_a4-con_con_hub_sub_c5": "con_con_hub_sub_c5",
"con_con_hub_sub_c5-hub_sub_a4": "con_con_hub_sub_c5",

"con_con_hub_sub_c5-path1784": "path1784",
"path1784-con_con_hub_sub_c5": "path1784",

"path1784-con_d73465": "con_d73465",
"con_d73465-path1784": "con_d73465",

"con_d73465-con_hub_sub_d_3": "con_hub_sub_d_3",
"con_hub_sub_d_3-con_d73465": "con_hub_sub_d_3",

"con_hub_sub_d_3-hub_r_154": "hub_r_154",
"hub_r_154-con_hub_sub_d_3": "hub_r_154",

"hub_r_154-con_hub_r_154": "con_hub_r_154",
"con_hub_r_154-hub_r_154": "con_hub_r_154",

"con_hub_r_154-social-science-building-a": "social-science-building-a",
"social-science-building-a-con_hub_r_154": "social-science-building-a",



// 154 to j ploa_social-science-building
"con_hub_sub_d_3-hub_sub_d3": "hub_sub_d3",
"hub_sub_d3-con_hub_sub_d_3": "hub_sub_d3",

"hub_sub_d3-con_hub_sub_d_4": "con_hub_sub_d_4",
"con_hub_sub_d_4-hub_sub_d3": "con_hub_sub_d_4",

"con_hub_sub_d_4-social-science-building": "social-science-building",
"social-science-building-con_hub_sub_d_4": "social-science-building",


// 154 to j
"con_hub_sub_d_4-hub_sub_d4": "hub_sub_d4",
"hub_sub_d4-con_hub_sub_d_4": "hub_sub_d4",

"hub_sub_d4-con_hub_r1": "con_hub_r1",
"con_hub_r1-hub_sub_d4": "con_hub_r1",

"con_hub_r1-j": "con_hub_r1",
"j-con_hub_r1": "con_hub_r1",
// j to 160 
"j-hub_r_j1": "hub_r_j1",
"hub_r_j1-j": "hub_r_j1",

"hub_r_j1-con_hub_r_j1": "con_hub_r_j1",
"con_hub_r_j1-hub_r_j1": "con_hub_r_j1",

"con_hub_r_j1-con_hub_outer_jr2": "con_hub_outer_jr2",
"con_hub_outer_jr2-con_hub_r_j1": "con_hub_outer_jr2",

"con_hub_outer_jr2-hub_r_j2": "hub_r_j2",
"hub_r_j2-con_hub_outer_jr2": "hub_r_j2",

"hub_r_j2-con_hub_outer_b_7": "con_hub_outer_b_7",
"con_hub_outer_b_7-hub_r_j2": "con_hub_outer_b_7",

"con_hub_outer_b_7-hub_outer_b_8": "hub_outer_b_8",
"hub_outer_b_8-con_hub_outer_b_7": "hub_outer_b_8",

"hub_outer_b_8-con_hub_outer_b_8": "con_hub_outer_b_8",
"con_hub_outer_b_8-hub_outer_b_8": "con_hub_outer_b_8",

"con_hub_outer_b_8-new-student-center": "new-student-center",
"new-student-center-con_hub_outer_b_8": "new-student-center",



// 155 to the-pavlion
"con_hub_r_154-path2509": "path2509",
"path2509-con_hub_r_154": "path2509",

"path2509-con_hub_sub_f2": "con_hub_sub_f2",
"con_hub_sub_f2-path2509": "con_hub_sub_f2",

"con_hub_sub_f2-hub_sub_f3": "hub_sub_f3",
"hub_sub_f3-con_hub_sub_f2": "hub_sub_f3",

"hub_sub_f3-path2485": "path2485",
"path2485-hub_sub_f3": "path2485",

"path2485-hub_sub_g2": "hub_sub_g2",
"hub_sub_g2-path2485": "hub_sub_g2",

"hub_sub_g2-con_hub_outer_b_12": "con_hub_outer_b_12",
"con_hub_outer_b_12-hub_sub_g2": "con_hub_outer_b_12",

"con_hub_outer_b_12-hub_outer_b_12": "hub_outer_b_12",
"hub_outer_b_12-con_hub_outer_b_12": "hub_outer_b_12",

"hub_outer_b_12-con_hub_outer_b_11": "con_hub_outer_b_11",
"con_hub_outer_b_11-hub_outer_b_12": "con_hub_outer_b_11",

"con_hub_outer_b_11-path2571": "path2571",
"path2571-con_hub_outer_b_11": "path2571",

"path2571-path2763": "path2763",
"path2763-path2571": "path2763",

"path2763-path1889": "path1889",
"path1889-path2763": "path1889",

"path1889-the-pavlion": "the-pavlion",
"the-pavlion-path1889": "the-pavlion",



// football to d1 
"con_main_a8-hub_outer_b_1": "hub_outer_b_1",
"hub_outer_b_1-con_main_a8": "hub_outer_b_1",

"hub_outer_b_1-con_hub_outer_b_1": "con_hub_outer_b_1",
"con_hub_outer_b_1-hub_outer_b_1": "con_hub_outer_b_1",

"con_hub_outer_b_1-d1": "d1",
"d1-con_hub_outer_b_1": "d1",





// d1 to e 
"con_hub_outer_b_1-hub_outer_b_2": "hub_outer_b_2",
"hub_outer_b_2-con_hub_outer_b_1": "hub_outer_b_2",

"hub_outer_b_2-con_hub_outer_b_2": "con_hub_outer_b_2",
"con_hub_outer_b_2-hub_outer_b_2": "con_hub_outer_b_2",

"con_hub_outer_b_2-e": "e",
"e-con_hub_outer_b_2": "e",


// e to 134 

"con_hub_outer_b_2-hub_outer_b_3": "hub_outer_b_3",
"hub_outer_b_3-con_hub_outer_b_2": "hub_outer_b_3",

"hub_outer_b_3-con_hub_outer_b_3": "con_hub_outer_b_3",
"con_hub_outer_b_3-hub_outer_b_3": "con_hub_outer_b_3",

"con_hub_outer_b_3- t.a.-wright-stadium": " t.a.-wright-stadium",
" t.a.-wright-stadium-con_hub_outer_b_3": " t.a.-wright-stadium",



// 144 to 134
"jordan-business-school-con_hub_sub_b4": "jordan-business-school",
"con_hub_sub_b4-jordan-business-school": "jordan-business-school",

"con_hub_sub_b4-hub_sub_b6": "con_hub_sub_b4",
"hub_sub_b6-con_hub_sub_b4": "con_hub_sub_b4",

"hub_sub_b6-con_hub_sub_b5": "hub_sub_b6",
"con_hub_sub_b5-hub_sub_b6": "hub_sub_b6",

"con_hub_sub_b5-hub_sub_b7": "con_hub_sub_b5",
"hub_sub_b7-con_hub_sub_b5": "con_hub_sub_b5",

"hub_sub_b7-con_hub_sub_b6": "hub_sub_b7",
"con_hub_sub_b6-hub_sub_b7": "hub_sub_b7",

"con_hub_sub_b6-hub_sub_b8": "con_hub_sub_b6",
"hub_sub_b8-con_hub_sub_b6": "con_hub_sub_b6",

"hub_sub_b8-con_hub_outer_b_4": "hub_sub_b8",
"con_hub_outer_b_4-hub_sub_b8": "hub_sub_b8",

"con_hub_outer_b_4-hub_outer_b_4": "con_hub_outer_b_4",
"hub_outer_b_4-con_hub_outer_b_4": "con_hub_outer_b_4",

"hub_outer_b_4-con_hub_outer_b_3": "hub_outer_b_4",
"con_hub_outer_b_3-hub_outer_b_4": "hub_outer_b_4",

"con_hub_outer_b_3-t.a.-wright-stadium": "con_hub_outer_b_3",
"t.a.-wright-stadium-con_hub_outer_b_3": "con_hub_outer_b_3",


// 144 to g 
"con_hub_outer_b_3-hub_outer_b_4": "hub_outer_b_4",
"hub_outer_b_4-con_hub_outer_b_3": "hub_outer_b_4",

"hub_outer_b_4-con_hub_outer_b_4": "con_hub_outer_b_4",
"con_hub_outer_b_4-hub_outer_b_4": "con_hub_outer_b_4",

"con_hub_outer_b_4-hub_outer_b_5": "hub_outer_b_5",
"hub_outer_b_5-con_hub_outer_b_4": "hub_outer_b_5",

"hub_outer_b_5-g": "g",
"g-hub_outer_b_5": "g",


// g to h 
"g-hub_outer_b_5": "g",
"hub_outer_b_5-g": "g",

"hub_outer_b_5-con_hub_outer_b_5": "hub_outer_b_5",
"con_hub_outer_b_5-hub_outer_b_5": "hub_outer_b_5",

"con_hub_outer_b_5-hub_outer_b_6": "con_hub_outer_b_5",
"hub_outer_b_6-con_hub_outer_b_5": "con_hub_outer_b_5",

"hub_outer_b_6-h": "hub_outer_b_6",
"h-hub_outer_b_6": "hub_outer_b_6",




// h to 160 


  "hub_outer_b_6-con_hub_outer_b_6": "con_hub_outer_b_6",
  "con_hub_outer_b_6-hub_outer_b_6": "con_hub_outer_b_6",

  "con_hub_outer_b_6-hub_outer_b_7": "hub_outer_b_7",
  "hub_outer_b_7-con_hub_outer_b_6": "hub_outer_b_7",

  "hub_outer_b_7-con_hub_outer_b_7": "con_hub_outer_b_7",
  "con_hub_outer_b_7-hub_outer_b_7": "con_hub_outer_b_7",

  "con_hub_outer_b_7-hub_outer_b_8": "hub_outer_b_8",
  "hub_outer_b_8-con_hub_outer_b_7": "hub_outer_b_8",

  "hub_outer_b_8-con_hub_outer_b_8": "con_hub_outer_b_8",
  "con_hub_outer_b_8-hub_outer_b_8": "con_hub_outer_b_8",

  "con_hub_outer_b_8-new-student-center": "con_hub_outer_b_8",
  "new-student-center-con_hub_outer_b_8": "con_hub_outer_b_8",



  //160 to 154 
  "con_hub_outer_b_8-hub_outer_b_9": "hub_outer_b_9",
"hub_outer_b_9-con_hub_outer_b_8": "hub_outer_b_9",
"hub_outer_b_9-con_hub_outer_b_9": "con_hub_outer_b_9",
"con_hub_outer_b_9-hub_outer_b_9": "con_hub_outer_b_9",
"con_hub_outer_b_9-path1800": "path1800",
"path1800-con_hub_outer_b_9": "path1800",
"path1800-social-science-building-b": "path1800",
"social-science-building-b-path1800": "path1800",

// 154 to 161 
"con_hub_outer_b_9-hub_outer_b_10": "hub_outer_b_10",
"hub_outer_b_10-con_hub_outer_b_9": "hub_outer_b_10",

"hub_outer_b_10-con_hub_outer_b_10": "con_hub_outer_b_10",
"con_hub_outer_b_10-hub_outer_b_10": "con_hub_outer_b_10",

"con_hub_outer_b_10-hub_outer_b_11": "hub_outer_b_11",
"hub_outer_b_11-con_hub_outer_b_10": "hub_outer_b_11",

"hub_outer_b_11-con_hub_outer_b_11": "con_hub_outer_b_11",
"con_hub_outer_b_11-hub_outer_b_11": "con_hub_outer_b_11",

"con_hub_outer_b_11-path2571": "path2571",
"path2571-con_hub_outer_b_11": "path2571",

"path2571-path2763": "path2763",
"path2763-path2571": "path2763",

"path2763-path1889": "path1889",
"path1889-path2763": "path1889",

"path1889-the-pavlion": "path1889",
"the-pavlion-path1889": "path1889",



// 137 to 138 
"con_hub_entry_left_2-hub_entry_left_2": "hub_entry_left_2",
"hub_entry_left_2-con_hub_entry_left_2": "hub_entry_left_2",

"hub_entry_left_2-con_hub_entry_left_3": "con_hub_entry_left_3",
"con_hub_entry_left_3-hub_entry_left_2": "con_hub_entry_left_3",

"con_hub_entry_left_3-hub_entry_left_3": "hub_entry_left_3",
"hub_entry_left_3-con_hub_entry_left_3": "hub_entry_left_3",

"hub_entry_left_3-con_hub_entry_left_cercile": "con_hub_entry_left_cercile",
"con_hub_entry_left_cercile-hub_entry_left_3": "con_hub_entry_left_cercile",

"con_hub_entry_left_cercile-hub_entry_right": "hub_entry_right",
"hub_entry_right-con_hub_entry_left_cercile": "hub_entry_right",

"hub_entry_right-con_hub_entry_right1": "con_hub_entry_right1",
"con_hub_entry_right1-hub_entry_right": "con_hub_entry_right1",

"con_hub_entry_right1-hub_j": "hub_j",
"hub_j-con_hub_entry_right1": "hub_j",

"hub_j-con_hub_j": "con_hub_j",
"con_hub_j-hub_j": "con_hub_j",

"con_hub_j-a138": "a138",
"a138-con_hub_j": "a138",


// 138 to 129
"con_hub_entry_right1-path2515": "path2515",
"path2515-con_hub_entry_right1": "path2515",

"path2515-con_con_hub_sub_c2": "con_con_hub_sub_c2",
"con_con_hub_sub_c2-path2515": "con_con_hub_sub_c2",

"con_con_hub_sub_c2-con_con_hub_sub_c1": "con_con_hub_sub_c1",
"con_con_hub_sub_c1-con_con_hub_sub_c2": "con_con_hub_sub_c1",

"con_con_hub_sub_c1-con_hub_sub_e1": "con_hub_sub_e1",
"con_hub_sub_e1-con_con_hub_sub_c1": "con_hub_sub_e1",

"con_hub_sub_e1-con_hub_sub_e2": "con_hub_sub_e2",
"con_hub_sub_e2-con_hub_sub_e1": "con_hub_sub_e2",

"con_hub_sub_e2-con_hub_sub_d": "con_hub_sub_d",
"con_hub_sub_d-con_hub_sub_e2": "con_hub_sub_d",

"con_hub_sub_d-j.kennedy-fine-arts": "j.kennedy-fine-arts",
"j.kennedy-fine-arts-con_hub_sub_d": "j.kennedy-fine-arts",


// 138 to aa    

"hub_entry_right-con_hub_entry_right1": "con_hub_entry_right1",
"con_hub_entry_right1-hub_entry_right": "con_hub_entry_right1",

"con_hub_entry_right1-hub_entry_right1": "hub_entry_right1",
"hub_entry_right1-con_hub_entry_right1": "hub_entry_right1",

"hub_entry_right1-con_hub_entry_right12": "con_hub_entry_right12",
"con_hub_entry_right12-hub_entry_right1": "con_hub_entry_right12",

"con_hub_entry_right12-hub_entry_right2": "hub_entry_right2",
"hub_entry_right2-con_hub_entry_right12": "hub_entry_right2",

"hub_entry_right2-con_hub_entry_right3": "con_hub_entry_right3",
"con_hub_entry_right3-hub_entry_right2": "con_hub_entry_right3",

"con_hub_entry_right3-hub_entry_right3": "hub_entry_right3",
"hub_entry_right3-con_hub_entry_right3": "hub_entry_right3",

"hub_entry_right3-hub_outer_2": "hub_outer_2",
"hub_outer_2-hub_entry_right3": "hub_outer_2",

"hub_outer_2-path31242": "path31242",
"path31242-hub_outer_2": "path31242",

"path31242-con_hub_outer_3": "con_hub_outer_3",
"con_hub_outer_3-path31242": "con_hub_outer_3",

"con_hub_outer_3-hub_outer_parking_r1": "hub_outer_parking_r1",
"hub_outer_parking_r1-con_hub_outer_3": "hub_outer_parking_r1",

"hub_outer_parking_r1-con_hub_outer_parking": "con_hub_outer_parking",
"con_hub_outer_parking-hub_outer_parking_r1": "con_hub_outer_parking",

"con_hub_outer_parking-aa": "aa",
"aa-con_hub_outer_parking": "aa",

// 161 to aa 
"the-pavlion-path1889": "path1889",
"path1889-the-pavlion": "path1889",

"path1889-path2763": "path2763",
"path2763-path1889": "path2763",

"path2763-path2571": "path2571",
"path2571-path2763": "path2571",

"path2571-con_hub_outer_b_11": "con_hub_outer_b_11",
"con_hub_outer_b_11-path2571": "con_hub_outer_b_11",

"con_hub_outer_b_11-hub_outer_b_12": "hub_outer_b_12",
"hub_outer_b_12-con_hub_outer_b_11": "hub_outer_b_12",

"hub_outer_b_12-con_hub_outer_b_12": "con_hub_outer_b_12",
"con_hub_outer_b_12-hub_outer_b_12": "con_hub_outer_b_12",

"con_hub_outer_b_12-hub_sub_g2": "hub_sub_g2",
"hub_sub_g2-con_hub_outer_b_12": "hub_sub_g2",

"hub_sub_g2-path2485": "path2485",
"path2485-hub_sub_g2": "path2485",

"path2485-hub_sub_g1": "hub_sub_g1",
"hub_sub_g1-path2485": "hub_sub_g1",

"hub_sub_g1-path2601": "path2601",
"path2601-hub_sub_g1": "path2601",

"path2601-hub_sub_g": "hub_sub_g",
"hub_sub_g-path2601": "hub_sub_g",

"hub_sub_g-rect2036": "rect2036",
"rect2036-hub_sub_g": "rect2036",

"rect2036-hub_outer_3": "hub_outer_3",
"hub_outer_3-rect2036": "hub_outer_3",

"hub_outer_3-con_hub_outer_3": "con_hub_outer_3",
"con_hub_outer_3-hub_outer_3": "con_hub_outer_3",

"con_hub_outer_3-hub_outer_parking_r1": "hub_outer_parking_r1",
"hub_outer_parking_r1-con_hub_outer_3": "hub_outer_parking_r1",

"hub_outer_parking_r1-con_hub_outer_parking": "con_hub_outer_parking",
"con_hub_outer_parking-hub_outer_parking_r1": "con_hub_outer_parking",

"con_hub_outer_parking-aa": "aa",
"aa-con_hub_outer_parking": "aa",


// aa to z 
"con_hub_outer_3-hub_outer_3": "hub_outer_3",
"hub_outer_3-con_hub_outer_3": "hub_outer_3",

"hub_outer_3-rect2036": "rect2036",
"rect2036-hub_outer_3": "rect2036",

"rect2036-path1978": "path1978",
"path1978-rect2036": "path1978",

"path1978-path2058": "path2058",
"path2058-path1978": "path2058",

"path2058-path2054": "path2054",
"path2054-path2058": "path2054",

"path2054-path2053": "path2053",
"path2053-path2054": "path2053",

"path2053-path1980": "path1980",
"path1980-path2053": "path1980",

"path1980-rect3303": "rect3303",
"rect3303-path1980": "rect3303",

"rect3303-z": "z",
"z-rect3303": "z",


//   z to 128
"z-rect3303": "rect3303",
"rect3303-z": "rect3303",

"rect3303-path1982": "path1982",
"path1982-rect3303": "path1982",

"path1982-path3307": "path3307",
"path3307-path1982": "path3307",

"path3307-polygon1955": "polygon1955",
"polygon1955-path3307": "polygon1955",

"polygon1955-hubert-resident-hall": "hubert-resident-hall",
"hubert-resident-hall-polygon1955": "hubert-resident-hall",


// 128 to m1
"hubert-resident-hall-polygon1955": "polygon1955",
"polygon1955-hubert-resident-hall": "polygon1955",

"polygon1955-path3307": "path3307",
"path3307-polygon1955": "path3307",

"path3307-path1984": "path1984",
"path1984-path3307": "path1984",

"path1984-path3351": "path3351",
"path3351-path1984": "path3351",

"path3351-line66249": "line66249",
"line66249-path3351": "line66249",

"line66249-m1": "m1",
"m1-line66249": "m1",

//m1 to m3 
"m1-sub_m1": "sub_m1",
"sub_m1-m1": "sub_m1",

"sub_m1-m3": "m3",
"m3-sub_m1": "m3",

/// 128 to y 
"path1984-path3351": "path3351",
"path3351-path1984": "path3351",

"path3351-polygon1986": "polygon1986",
"polygon1986-path3351": "polygon1986",

"polygon1986-path3311": "path3311",
"path3311-polygon1986": "path3311",

"path3311-path1988": "path1988",
"path1988-path3311": "path1988",

"path1988-path3365": "path3365",
"path3365-path1988": "path3365",

"path3365-y": "y",
"y-path3365": "y",


// y to 158 tiger-place-residence-hall
"y-path3365": "path3365",
"path3365-y": "path3365",

"path3365-path2781": "path2781",
"path2781-path3365": "path2781",

"path2781-path2809": "path2809",
"path2809-path2781": "path2809",

"path2809-tiger-place-residence-hall": "tiger-place-residence-hall",
"tiger-place-residence-hall-path2809": "tiger-place-residence-hall",


//  tiger-place-residence-hall-a
"tiger-place-residence-hall-path2809": "path2809",
"path2809-tiger-place-residence-hall": "path2809",

"path2809-path1990": "path1990",
"path1990-path2809": "path1990",

"path1990-path2805": "path2805",
"path2805-path1990": "path2805",

"path2805-tiger-place-residence-hall-a": "tiger-place-residence-hall-a",
"tiger-place-residence-hall-a-path2805": "tiger-place-residence-hall-a",



// 158 to 109
"tiger-place-residence-hall-path2809": "path2809",
"path2809-tiger-place-residence-hall": "path2809",

"path2809-path1990": "path1990",
"path1990-path2809": "path1990",

"path1990-path1992": "path1992",
"path1992-path1990": "path1992",

"path1992-path2016": "path2016",
"path2016-path1992": "path2016",

"path2016-path879": "path879",
"path879-path2016": "path879",

"path879-lift-station": "lift-station",
"lift-station-path879": "lift-station",



// 109 to w
"lift-station-path879": "path879",
"path879-lift-station": "path879",

"path879-polygon881": "polygon881",
"polygon881-path879": "polygon881",

"polygon881-polygon1720": "polygon1720",
"polygon1720-polygon881": "polygon1720",

"polygon1720-w": "w",
"w-polygon1720": "w",


// w to x 
"w-polygon1720": "polygon1720",
"polygon1720-w": "polygon1720",

"polygon1720-polygon883": "polygon883",
"polygon883-polygon1720": "polygon883",

"polygon883-path2665": "path2665",
"path2665-polygon883": "path2665",

"path2665-path2663": "path2663",
"path2663-path2665": "path2663",

"path2663-path3279": "path3279",
"path3279-path2663": "path3279",

"path3279-x": "x",
"x-path3279": "x",

// x to u 
"x-path3279": "path3279",
"path3279-x": "path3279",

"path3279-path2663": "path2663",
"path2663-path3279": "path2663",

"path2663-path3395": "path3395",
"path3395-path2663": "path3395",

"path3395-u": "u",
"u-path3395": "u",

// u to t1
"u-path3395": "path3395",
"path3395-u": "path3395",

"path3395-sub_t1": "sub_t1",
"sub_t1-path3395": "sub_t1",

"sub_t1-t1": "t1",
"t1-sub_t1": "t1",


// tl to v 
"t1-path3395": "path3395",
"path3395-t1": "t1",

"path3395-path2661": "path2661",
"path2661-path3395": "path3395",

"path2661-path2659": "path2659",
"path2659-path2661": "path2661",

"path2659-v": "v",
"v-path2659": "path2659",


// w to 106 

"w-polygon1720": "polygon1720",
"polygon1720-w": "polygon1720",

"polygon1720-polygon883": "polygon883",
"polygon883-polygon1720": "polygon883",

"polygon883-path2665": "path2665",
"path2665-polygon883": "path2665",

"path2665-path2018": "path2018",
"path2018-path2665": "path2018",

"path2018-path2020": "path2020",
"path2020-path2018": "path2020",

"path2020-path1888": "path1888",
"path1888-path2020": "path1888",

"path1888-path2799": "path2799",
"path2799-path1888": "path2799",

"path2799-hodge-hall": "path2799",
"hodge-hall-path2799": "path2799",


// v to 106 hodge-hall
"hodge-hall-path2799": "path2799",
"path2799-hodge-hall": "path2799",

"path2799-path1890": "path1890",
"path1890-path2799": "path1890",

"path1890-path2659": "path2659",
"path2659-path1890": "path2659",

"path2659-v": "v",
"v-path2659": "v",


// v to 103

"v-path2659": "path2659",
"path2659-v": "path2659",

"path2659-path1884": "path1884",
"path1884-path2659": "path1884",

"path1884-path2671": "path2671",
"path2671-path1884": "path2671",

"path2671-path1882": "path1882",
"path1882-path2671": "path1882",

"path1882-path2675": "path2675",
"path2675-path1882": "path2675",

"path2675-colston-administration": "colston-administration",
"colston-administration-path2675": "colston-administration",


// 103 to 104
"colston-administration-path2675": "path2675",
"path2675-colston-administration": "path2675",

"path2675-path3413": "path3413",
"path3413-path2675": "path3413",

"path3413-path1880": "path1880",
"path1880-path3413": "path1880",

"path1880-path2309": "path2309",
"path2309-path1880": "path2309",

"path2309-narsh_r": "narsh_r",
"narsh_r-path2309": "narsh_r",

"narsh_r-con_narsh_r_4": "con_narsh_r_4",
"con_narsh_r_4-narsh_r": "con_narsh_r_4",

"con_narsh_r_4-path3287": "path3287",
"path3287-con_narsh_r_4": "path3287",

"path3287-polygon3295": "polygon3295",
"polygon3295-path3287": "polygon3295",

"polygon3295-path3296": "path3296",
"path3296-polygon3295": "path3296",

"path3296-path16644": "path16644",
"path16644-path3296": "path16644",

"path16644-polygon3297": "polygon3297",
"polygon3297-path16644": "polygon3297",

"polygon3297-king-frazier-student-center": "king-frazier-student-center",
"king-frazier-student-center-polygon3297": "king-frazier-student-center",



// 140 to 102 a 
"king-frazier-student-center-path3297": "path3297",
"path3297-king-frazier-student-center": "path3297",

"path3297-path16644": "path16644",
"path16644-path3297": "path16644",

"path16644-polygon3295": "polygon3295",
"polygon3295-path16644": "polygon3295",

"polygon3295-wiley-wilcox-gym-a": "wiley-wilcox-gym-a",
"wiley-wilcox-gym-a-polygon3295": "wiley-wilcox-gym-a",


// 103 to 102 
"con_narsh_r_4-path998": "path998",
"path998-con_narsh_r_4": "path998",

"path998-con_narsh_r_3": "con_narsh_r_3",
"con_narsh_r_3-path998": "con_narsh_r_3",

"con_narsh_r_3-path1001": "path1001",
"path1001-con_narsh_r_3": "path1001",

"path1001-path1489": "path1489",
"path1489-path1001": "path1489",

"path1489-wiley-wilcox-gym": "wiley-wilcox-gym",
"wiley-wilcox-gym-path1489": "wiley-wilcox-gym",

// 102 to s1 
"wiley-wilcox-gym-path1489": "path1489",
"path1489-wiley-wilcox-gym": "path1489",

"path1489-s1": "s1",
"s1-path1489": "s1",


// s1 to 101 
"path1489-path1003": "path1003",
"path1003-path1489": "path1003",

"path1003-path1481": "path1481",
"path1481-path1003": "path1481",

"path1481-path1005": "path1005",
"path1005-path1481": "path1005",

"path1005-con_narsh_r_2": "con_narsh_r_2",
"con_narsh_r_2-path1005": "con_narsh_r_2",

"con_narsh_r_2-path2683": "path2683",
"path2683-con_narsh_r_2": "path2683",

"path2683-gardner-hall": "gardner-hall",
"gardner-hall-path2683": "gardner-hall",


// 101 to s2
"gardner-hall-path2683": "path2683",
"path2683-gardner-hall": "path2683",

"path2683-s2": "s2",
"s2-path2683": "s2",


// 101 to s3 
"con_narsh_r_2-narsh_r_4": "narsh_r_4",
"narsh_r_4-con_narsh_r_2": "narsh_r_4",

"narsh_r_4-con_narsh_r_1": "con_narsh_r_1",
"con_narsh_r_1-narsh_r_4": "con_narsh_r_1",

"con_narsh_r_1-narsh_r_6": "narsh_r_6",
"narsh_r_6-con_narsh_r_1": "narsh_r_6",

"narsh_r_6-s3": "s3",
"s3-narsh_r_6": "s3",

// 161 to m1a
"con_hub_outer_b_12-hub_outer_b_13": "hub_outer_b_13",
"hub_outer_b_13-con_hub_outer_b_12": "hub_outer_b_13",

"hub_outer_b_13-con_hub_outer_b_14": "con_hub_outer_b_14",
"con_hub_outer_b_14-hub_outer_b_13": "con_hub_outer_b_14",

"con_hub_outer_b_14-hub_outer_b_14": "hub_outer_b_14",
"hub_outer_b_14-con_hub_outer_b_14": "hub_outer_b_14",

"hub_outer_b_14-con_hub_outer_b_15": "con_hub_outer_b_15",
"con_hub_outer_b_15-hub_outer_b_14": "con_hub_outer_b_15",

"con_hub_outer_b_15-jaspide_av_m_r_1": "jaspide_av_m_r_1",
"jaspide_av_m_r_1-con_hub_outer_b_15": "jaspide_av_m_r_1",

"jaspide_av_m_r_1-con_jaspide_av_m_r_1": "con_jaspide_av_m_r_1",
"con_jaspide_av_m_r_1-jaspide_av_m_r_1": "con_jaspide_av_m_r_1",

"con_jaspide_av_m_r_1-m1_a": "m1_a",
"m1_a-con_jaspide_av_m_r_1": "m1_a",



// m1 to 127
"m1_a-con_jaspide_av_m_r_1": "con_jaspide_av_m_r_1",
"con_jaspide_av_m_r_1-m1_a": "con_jaspide_av_m_r_1",

"con_jaspide_av_m_r_1-jaspide_av_m_r_1": "jaspide_av_m_r_1",
"jaspide_av_m_r_1-con_jaspide_av_m_r_1": "jaspide_av_m_r_1",

"jaspide_av_m_r_1-jaspide_av_m_r_2": "jaspide_av_m_r_2",
"jaspide_av_m_r_2-jaspide_av_m_r_1": "jaspide_av_m_r_2",

"jaspide_av_m_r_2-con_jaspide_av_m_r_2": "con_jaspide_av_m_r_2",
"con_jaspide_av_m_r_2-jaspide_av_m_r_2": "con_jaspide_av_m_r_2",

"con_jaspide_av_m_r_2-path2607": "path2607",
"path2607-con_jaspide_av_m_r_2": "path2607",

"path2607-polygon3265": "polygon3265",
"polygon3265-path2607": "polygon3265",

"polygon3265-map_road cls-137": "map_road cls-137",
"map_road cls-137-polygon3265": "map_road cls-137",

"map_road cls-137-polygon1931": "polygon1931",
"polygon1931-map_road cls-137": "polygon1931",

"polygon1931-humbert-techonology": "humbert-techonology",
"humbert-techonology-polygon1931": "humbert-techonology",



// 127 to m2

"polygon3265-polygon2605": "polygon2605",
"polygon2605-polygon3265": "polygon2605",

"polygon2605-polygon3363": "polygon3363",
"polygon3363-polygon2605": "polygon3363",

"polygon3363-polygon1974": "polygon1974",
"polygon1974-polygon3363": "polygon1974",

"polygon1974-m2": "m2",
"m2-polygon1974": "m2",


// m2 to 126 

"con_jaspide_av_m_r_2-path1137": "path1137",
"path1137-con_jaspide_av_m_r_2": "path1137",

"path1137-path2069": "path2069",
"path2069-path1137": "path2069",

"path2069-payne-hall": "payne-hall",
"payne-hall-path2069": "payne-hall",


// m1  to n
"con_jaspide_av_m_r_1-path33280": "path33280",
"path33280-con_jaspide_av_m_r_1": "path33280",

"path33280-n": "n",
"n-path33280": "n",

// n to 125 
"n-path33280": "path33280",
"path33280-n": "path33280",

"path33280-jaspide_av_m_sr_1": "jaspide_av_m_sr_1",
"jaspide_av_m_sr_1-path33280": "jaspide_av_m_sr_1",

"jaspide_av_m_sr_1-polygon6988": "polygon6988",
"polygon6988-jaspide_av_m_sr_1": "polygon6988",

"polygon6988-jaspide_av_sub_1": "jaspide_av_sub_1",
"jaspide_av_sub_1-polygon6988": "jaspide_av_sub_1",

"jaspide_av_sub_1-con_jaspide_av_m_sr_1": "con_jaspide_av_m_sr_1",
"con_jaspide_av_m_sr_1-jaspide_av_sub_1": "con_jaspide_av_m_sr_1",

"con_jaspide_av_m_sr_1-polygon2241": "polygon2241",
"polygon2241-con_jaspide_av_m_sr_1": "polygon2241",

"polygon2241-polygon3273": "polygon3273",
"polygon3273-polygon2241": "polygon3273",

"polygon3273-polygon1936": "polygon1936",
"polygon1936-polygon3273": "polygon1936",

"polygon1936-health-clinic": "health-clinic",
"health-clinic-polygon1936": "health-clinic",


// 125 to p 

"polygon3273-p_road": "p_road",
"p_road-polygon3273": "p_road",

"p-ploa_p": "ploa_p",
"ploa_p-p": "ploa_p",


// n to o 
"polygon6988-polygon6986": "polygon6986",
"polygon6986-polygon6988": "polygon6986",

"polygon6986-o": "o",
"o-polygon6986": "o",


// o to 124 
"polygon6986-con_jaspide_av_m_sr_2": "con_jaspide_av_m_sr_2",
"con_jaspide_av_m_sr_2-polygon6986": "con_jaspide_av_m_sr_2",

"con_jaspide_av_m_sr_2-r_124": "r_124",
"r_124-con_jaspide_av_m_sr_2": "r_124",

"r_124-cpath2249": "cpath2249",
"cpath2249-r_124": "cpath2249",

"cpath2249-cottage-9": "cpath2249",
"cottage-9-cpath2249": "cpath2249",


// 126 to 115 

"con_jaspide_av_m_r_2-path2004": "path2004",
"path2004-con_jaspide_av_m_r_2": "path2004",

"path2004-con_jaspide_av_m_r_3": "con_jaspide_av_m_r_3",
"con_jaspide_av_m_r_3-path2004": "con_jaspide_av_m_r_3",

"con_jaspide_av_m_r_3-jaspide_av_m_r_3": "jaspide_av_m_r_3",
"jaspide_av_m_r_3-con_jaspide_av_m_r_3": "jaspide_av_m_r_3",

"jaspide_av_m_r_3-con_jaspide_av_m_r_4": "con_jaspide_av_m_r_4",
"con_jaspide_av_m_r_4-jaspide_av_m_r_3": "con_jaspide_av_m_r_4",

"con_jaspide_av_m_r_4-powell-hall|": "powell-hall",
"powell-hall|-con_jaspide_av_m_r_4": "powell-hall",



// 125 to 115
"con_jaspide_av_m_r_3-jaspide_av_m_sr_4": "jaspide_av_m_sr_4",
"jaspide_av_m_sr_4-con_jaspide_av_m_r_3": "jaspide_av_m_sr_4",

"jaspide_av_m_sr_4-jaspide_av_sub_circle": "jaspide_av_sub_circle",
"jaspide_av_sub_circle-jaspide_av_m_sr_4": "jaspide_av_sub_circle",

"jaspide_av_sub_circle-jaspide_av_m_sr_2": "jaspide_av_m_sr_2",
"jaspide_av_m_sr_2-jaspide_av_sub_circle": "jaspide_av_m_sr_2",

"jaspide_av_m_sr_2-con_jaspide_av_m_sr_1": "con_jaspide_av_m_sr_1",
"con_jaspide_av_m_sr_1-jaspide_av_m_sr_2": "con_jaspide_av_m_sr_1",

"con_jaspide_av_m_sr_1-polygon2241": "polygon2241",
"polygon2241-con_jaspide_av_m_sr_1": "polygon2241",

"polygon2241-polygon3273": "polygon3273",
"polygon3273-polygon2241": "polygon3273",

"polygon3273-polygon1936": "polygon1936",
"polygon1936-polygon3273": "polygon1936",

"polygon1936-health-clinic": "health-clinic",
"health-clinic-polygon1936": "health-clinic",


// 115 to 149
"con_jaspide_av_m_r_4-jaspide_av_m_r_4": "jaspide_av_m_r_4",
"jaspide_av_m_r_4-con_jaspide_av_m_r_4": "jaspide_av_m_r_4",

"jaspide_av_m_r_4-con_alexes_coro_1": "con_alexes_coro_1",
"con_alexes_coro_1-jaspide_av_m_r_4": "con_alexes_coro_1",

"con_alexes_coro_1-alexes_coro_1": "alexes_coro_1",
"alexes_coro_1-con_alexes_coro_1": "alexes_coro_1",

"alexes_coro_1-alexes_coro_22": "alexes_coro_22",
"alexes_coro_22-alexes_coro_1": "alexes_coro_22",

"alexes_coro_22-path1869": "path1869",
"path1869-alexes_coro_22": "path1869",

"path1869-freshmen-living-learning-center": "freshmen-living-learning-center",
"freshmen-living-learning-center-path1869": "freshmen-living-learning-center",

// 149 to 122
"alexes_coro_22-path1924": "path1924",
"path1924-alexes_coro_22": "path1924",

"path1924-alexes_coro_21": "alexes_coro_21",
"alexes_coro_21-path1924": "alexes_coro_21",

"alexes_coro_21-path2743": "path2743",
"path2743-alexes_coro_21": "path2743",

"path2743-path2747": "path2747",
"path2747-path2743": "path2747",

"path2747-sub_r_122": "sub_r_122",
"sub_r_122-path2747": "sub_r_122",

"sub_r_122-path2753": "path2753",
"path2753-sub_r_122": "path2753",

"path2753-bowen-smith-resdent-hall": "bowen-smith-resdent-hall",
"bowen-smith-resdent-hall-path2753": "bowen-smith-resdent-hall",



// 149 to 117 
"freshmen-living-learning-center-sub_r149": "sub_r149",
"sub_r149-freshmen-living-learning-center": "sub_r149",

"sub_r149-path2747": "path2747",
"path2747-sub_r149": "path2747",

"path2747-path2743": "path2743",
"path2743-path2747": "path2743",

"path2743-alexes_coro_21": "alexes_coro_21",
"alexes_coro_21-path2743": "alexes_coro_21",

"alexes_coro_21-alexes_coro_19": "alexes_coro_19",
"alexes_coro_19-alexes_coro_21": "alexes_coro_19",

"alexes_coro_19-public-safety": "public-safety",
"public-safety-alexes_coro_19": "public-safety",



//117 to 118
"public-safety-alexes_coro_18": "alexes_coro_18",
"alexes_coro_18-public-safety": "alexes_coro_18",

"alexes_coro_18-alexes_coro_18": "alexes_coro_18",
"alexes_coro_18-alexes_coro_18": "alexes_coro_18",

"alexes_coro_18-con_alexes_coro_19": "con_alexes_coro_19",
"con_alexes_coro_19-alexes_coro_18": "con_alexes_coro_19",

"con_alexes_coro_19-path1666": "path1666",
"path1666-con_alexes_coro_19": "path1666",

"path1666-a118": "a118",
"a118-path1666": "a118",



//118 to 119
"public-safety-alexes_coro_18": "alexes_coro_18",
"alexes_coro_18-public-safety": "alexes_coro_18",

"alexes_coro_18-alexes_coro_18": "alexes_coro_18",
"alexes_coro_18-alexes_coro_18": "alexes_coro_18",

"alexes_coro_18-con_alexes_coro_19": "con_alexes_coro_19",
"con_alexes_coro_19-alexes_coro_18": "con_alexes_coro_19",

"con_alexes_coro_19-path1666": "path1666",
"path1666-con_alexes_coro_19": "path1666",

"path1666-a118": "a118",
"a118-path1666": "a118",

"a118-path1666": "path1666",
"path1666-a118": "path1666",

"path1666-con_alexes_coro_19": "con_alexes_coro_19",
"con_alexes_coro_19-path1666": "con_alexes_coro_19",

"con_alexes_coro_19-alexes_coro_17": "alexes_coro_17",
"alexes_coro_17-con_alexes_coro_19": "alexes_coro_17",

"alexes_coro_17-con_alexes_coro_18": "con_alexes_coro_18",
"con_alexes_coro_18-alexes_coro_17": "con_alexes_coro_18",

"con_alexes_coro_18-c.hubert-resident-hall": "c.hubert-resident-hall",
"c.hubert-resident-hall-con_alexes_coro_18": "c.hubert-resident-hall",


// 119 to r

"c.hubert-resident-hall-con_alexes_coro_18": "con_alexes_coro_18",
"con_alexes_coro_18-c.hubert-resident-hall": "con_alexes_coro_18",

"con_alexes_coro_18-alexes_coro_16": "alexes_coro_16",
"alexes_coro_16-con_alexes_coro_18": "alexes_coro_16",

"alexes_coro_16-con_alexes_coro_17": "con_alexes_coro_17",
"con_alexes_coro_17-alexes_coro_16": "con_alexes_coro_17",

"con_alexes_coro_17-alexes_coro_15": "alexes_coro_15",
"alexes_coro_15-con_alexes_coro_17": "alexes_coro_15",

"alexes_coro_15-path52354": "path52354",
"path52354-alexes_coro_15": "path52354",

"path52354-path52356": "path52356",
"path52356-path52354": "path52356",

"path52356-r": "r",
"r-path52356": "r",


// r to q

"r-path52356": "path52356",
"path52356-r": "path52356",

"path52356-path3417": "path3417",
"path3417-path52356": "path3417",

"path3417-q": "q",
"q-path3417": "q",

// q to 121
"q-path3417": "path3417",
"path3417-q": "path3417",

"path3417-jaspide_av_sub_1-4": "jaspide_av_sub_1-4",
"jaspide_av_sub_1-4-path3417": "jaspide_av_sub_1-4",

"jaspide_av_sub_1-4-path2757": "path2757",
"path2757-jaspide_av_sub_1-4": "path2757",

"path2757-path2005": "path2005",
"path2005-path2757": "path2005",

"path2005-a121": "a121",
"a121-path2005": "a121",


// 115 to 114

"ploa_powell-hall-con_jaspide_av_m_r_4": "ploa_powell-hall",
"con_jaspide_av_m_r_4-ploa_powell-hall": "ploa_powell-hall",

"con_jaspide_av_m_r_4-jaspide_av_m_r_4": "con_jaspide_av_m_r_4",
"jaspide_av_m_r_4-con_jaspide_av_m_r_4": "con_jaspide_av_m_r_4",

"jaspide_av_m_r_4-con_alexes_coro_1": "jaspide_av_m_r_4",
"con_alexes_coro_1-jaspide_av_m_r_4": "jaspide_av_m_r_4",

"con_alexes_coro_1-path1833": "con_alexes_coro_1",
"path1833-con_alexes_coro_1": "con_alexes_coro_1",

"path1833-herty-hall": "path1833",
"herty-hall-path1833": "path1833",




// 115 to 159
"ploa_powell-hall-con_jaspide_av_m_r_4": "con_jaspide_av_m_r_4",
"con_jaspide_av_m_r_4-ploa_powell-hall": "con_jaspide_av_m_r_4",

"con_jaspide_av_m_r_4-jaspide_av_m_r_4": "jaspide_av_m_r_4",
"jaspide_av_m_r_4-con_jaspide_av_m_r_4": "jaspide_av_m_r_4",

"jaspide_av_m_r_4-con_alexes_coro_1": "con_alexes_coro_1",
"con_alexes_coro_1-jaspide_av_m_r_4": "con_alexes_coro_1",

"con_alexes_coro_1-con_alexes_coro_1": "con_alexes_coro_1",
"con_alexes_coro_1-con_alexes_coro_1": "con_alexes_coro_1",

"con_alexes_coro_1-path1833": "path1833",
"path1833-con_alexes_coro_1": "path1833",

"path1833-alexes_coro_2": "alexes_coro_2",
"alexes_coro_2-path1833": "alexes_coro_2",

"alexes_coro_2-alexes_coro_3": "alexes_coro_3",
"alexes_coro_3-alexes_coro_2": "alexes_coro_3",

"alexes_coro_3-con_alexes_coro_3": "con_alexes_coro_3",
"con_alexes_coro_3-alexes_coro_3": "con_alexes_coro_3",

"con_alexes_coro_3-alexes_coro_4": "alexes_coro_4",
"alexes_coro_4-con_alexes_coro_3": "alexes_coro_4",

"alexes_coro_4-con_alexes_coro_4": "con_alexes_coro_4",
"con_alexes_coro_4-alexes_coro_4": "con_alexes_coro_4",

"con_alexes_coro_4-alexes_coro_5": "alexes_coro_5",
"alexes_coro_5-con_alexes_coro_4": "alexes_coro_5",

"alexes_coro_5-con_alexes_coro_5": "con_alexes_coro_5",
"con_alexes_coro_5-alexes_coro_5": "con_alexes_coro_5",

"con_alexes_coro_5-tiger-court-residence-hall": "tiger-court-residence-hall",
"tiger-court-residence-hall-con_alexes_coro_5": "tiger-court-residence-hall",




//159 to 113
"tiger-court-residence-hall-con_alexes_coro_5": "con_alexes_coro_5",
"con_alexes_coro_5-tiger-court-residence-hall": "con_alexes_coro_5",

"con_alexes_coro_5-alexes_coro_6": "alexes_coro_6",
"alexes_coro_6-con_alexes_coro_5": "alexes_coro_6",

"alexes_coro_6-con_alexes_coro_6": "con_alexes_coro_6",
"con_alexes_coro_6-alexes_coro_6": "con_alexes_coro_6",

"con_alexes_coro_6-alexes_coro_7": "alexes_coro_7",
"alexes_coro_7-con_alexes_coro_6": "alexes_coro_7",

"alexes_coro_7-path2637": "path2637",
"path2637-alexes_coro_7": "path2637",

"path2637-amams-hall": "amams-hall",
"amams-hall-path2637": "amams-hall",


// 113 to 112
"amams-hall-path2635": "path2635",
"path2635-amams-hall": "path2635",

"path2635-polygon3391": "polygon3391",
"polygon3391-path2635": "polygon3391",

"polygon3391-polygon3389": "polygon3389",
"polygon3389-polygon3391": "polygon3389",

"polygon3389-polygon3387": "polygon3387",
"polygon3387-polygon3389": "polygon3387",

"polygon3387-polygon3385": "polygon3385",
"polygon3385-polygon3387": "polygon3385",

"polygon3385-morgan-annex": "morgan-annex",
"morgan-annex-polygon3385": "morgan-annex"
,

// 112 to 111 
"polygon3385-polygon3383": "polygon3383",
"polygon3383-polygon3385": "polygon3383",

"polygon3383-polygon74626": "polygon74626",
"polygon74626-polygon3383": "polygon74626",

"polygon74626-path3379": "path3379",
"path3379-polygon74626": "path3379",

"path3379-polygon3377": "polygon3377",
"polygon3377-path3379": "polygon3377",

"polygon3377-path3377": "path3377",
"path3377-polygon3377": "path3377",

"path3377-morgan-hall": "morgan-hall",
"morgan-hall-path3377": "morgan-hall",



// 111 to 157
"path3377-path2621": "path2621",
"path2621-path3377": "path2621",

"path2621-path2647": "path2647",
"path2647-path2621": "path2647",

"path2647-tiger-point-residence-hall": "tiger-point-residence-hall",
"tiger-point-residence-hall-path2647": "tiger-point-residence-hall",

//157 to 107
"path2647-path2623": "path2623",
"path2623-path2647": "path2623",

"path2623-path2655": "path2655",
"path2655-path2623": "path2655",

"path2655-path2625": "path2625",
"path2625-path2655": "path2625",

"path2625-path3409": "path3409",
"path3409-path2625": "path3409",

"path3409-sub_107": "sub_107",
"sub_107-path3409": "sub_107",

"sub_107-hill-hall": "hill-hall",
"hill-hall-sub_107": "hill-hall",

// 107 to 103
"path3409-path2629": "path2629",
"path2629-path3409": "path2629",

"path2629-path3405": "path3405",
"path3405-path2629": "path3405",

"path3405-path2631": "path2631",
"path2631-path3405": "path2631",

"path2631-path2633": "path2633",
"path2633-path2631": "path2633",

"path2633-path1878": "path1878",
"path1878-path2633": "path1878",

"path1878-path2309": "path2309",
"path2309-path1878": "path2309",

"path2309-path1880": "path1880",
"path1880-path2309": "path1880",

"path1880-path3413": "path3413",
"path3413-path1880": "path3413",

"path3413-path2675": "path2675",
"path2675-path3413": "path2675",

"path2675-ploa_colston-administration": "ploa_colston-administration",
"ploa_colston-administration-path2675": "ploa_colston-administration",



// 159 to 148 
"tiger-court-residence-hall-con_alexes_coro_5": "con_alexes_coro_5",
"con_alexes_coro_5-tiger-court-residence-hall": "con_alexes_coro_5",

"con_alexes_coro_5-alexes_coro_5": "alexes_coro_5",
"alexes_coro_5-con_alexes_coro_5": "alexes_coro_5",

"alexes_coro_5-con_alexes_coro_4": "con_alexes_coro_4",
"con_alexes_coro_4-alexes_coro_5": "con_alexes_coro_4",

"con_alexes_coro_4-alexes_coro_4": "alexes_coro_4",
"alexes_coro_4-con_alexes_coro_4": "alexes_coro_4",

"alexes_coro_4-con_alexes_coro_3": "con_alexes_coro_3",
"con_alexes_coro_3-alexes_coro_4": "con_alexes_coro_3",

"con_alexes_coro_3-alexes_coro_3": "alexes_coro_3",
"alexes_coro_3-con_alexes_coro_3": "alexes_coro_3",

"alexes_coro_3-path1833": "path1833",
"path1833-alexes_coro_3": "path1833",

"path1833-con_alexes_coro_1": "con_alexes_coro_1",
"con_alexes_coro_1-path1833": "con_alexes_coro_1",

"con_alexes_coro_1-alexes_coro_1": "alexes_coro_1",
"alexes_coro_1-con_alexes_coro_1": "alexes_coro_1",

"alexes_coro_1-path1869": "path1869",
"path1869-alexes_coro_1": "path1869",

"path1869-path1869": "path1869",
"path1869-path1869": "path1869",

"path1869-freshmen-living-learning-center": "path1869",
"freshmen-living-learning-center-path1869": "path1869"




};
