import React, { useState } from 'react'
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const mappedArray = [
  { id: "1", stateName: "1 - Building 1" },
  { id: "2", stateName: "2 - Building 2" },
  { id: "4", stateName: "4 - Building 4" },
  { id: "3", stateName: "3 - Building 3" },


  { id: "5", stateName: "5 - Building 5" },
  { id: "6", stateName: "6 - Building 6" },

  { id: "7", stateName: "7 - Building 7" },
  { id: "8", stateName: "8 - Building 8 " },
  { id: "9", stateName: "9 - Building 9" },
  { id: "10", stateName: "10 - Building 10" },
  { id: "11", stateName: "11 - Building 11" },
  { id: "12", stateName: "12 - Building 12" },
  { id: "14", stateName: "14 - Building 14" },
  { id: "15", stateName: "15 - Building 15" },
  { id: "16", stateName: "16 - Building 16" },
  { id: "17", stateName: "17 - Building 17" },
  { id: "18", stateName: "18 - Building 18" },
  { id: "19", stateName: "19 - Building 19" },
  { id: "20", stateName: "20 - Building 20" },
  { id: "21", stateName: "21 - Building 21" },
  { id: "22", stateName: "22 - Building 22" },
  { id: "23", stateName: "23 - Building 23" },
  { id: "24", stateName: "24 - Building 24" },
  { id: "25", stateName: "25 - Building 25" },
  { id: "26", stateName: "26 - Building 26" },
  { id: "27", stateName: "27 - Building 27" },
  { id: "28", stateName: "28 - Building 28" },
  { id: "29", stateName: "29 - Building 29" },
  { id: "30", stateName: "30 - Building 30" },
  { id: "31", stateName: "31 - Building 31" },
  { id: "32", stateName: "32 - Building 32" },
  { id: "33", stateName: "33 - Building 33" },
  { id: "34", stateName: "34 - Building 34" },
  { id: "35", stateName: "35 - Building 35" },
  { id: "36", stateName: "36 - Building 36" },
  { id: "37", stateName: "37 - Building 37" },
  { id: "38", stateName: "38 - Building 38" },
  { id: "39", stateName: "39 - Building 39" },
  { id: "40", stateName: "40 - Building 40" },
  { id: "41", stateName: "41 - Building 41" },
  { id: "42", stateName: "42 - Building 42" },
  { id: "43", stateName: "43 - Building 43" },
  { id: "44", stateName: "44 - Building 44" },
  { id: "45", stateName: "45 - Building 45" },
  { id: "46", stateName: "46 - Building 46" },
  { id: "47", stateName: "47 - Building 47" },

  // { id: "129", stateName: "129 - J. KENNEDY FINE ARTS" },
  { id: "132", stateName: "132 - EVERS PHYSICAL PLANT" },
  { id: "135", stateName: "135 - LIBRARY - LIB" },
  { id: "136", stateName: "136 - WHITING HALL" },
  { id: "137", stateName: "137 - DREW-GRIFFITH SCIENCE" },
  { id: "140", stateName: "140 - McGLOCKTON - NROTC -	MCG" },
  { id: "141", stateName: "141 - WRIGHT STADIUM -	WRT" },
  { id: "147", stateName: "147 - UNIVERSITY VILLAGE	- UV" },
  { id: "153", stateName: "153 - UNIVERSITY COMMONS" },
  { id: "162", stateName: "162 - FOUNDATION HOUSE" },
  { id: "t.a.-wright-stadium", stateName: "144 -TIGER ARENA -	TA" },
  { id: "wright_stadium", stateName: "A - WRIGHT STADIUM" },


  { id: "b", stateName: "B - NROTC" },
  { id: "c", stateName: "C - UNIVERSITY VILLAGE" },
  { id: "d1", stateName: "D1 - TIGER ARENA (WEST)" },
  { id: "d2", stateName: "D2 - TIGER ARENA (EAST)" },
  { id: "e", stateName: "E - WHITING HALL" },
  { id: "f", stateName: "F - LIBRARY" },
  { id: "g", stateName: "G - HOWARD JORDAN" },
  { id: "j", stateName: "H - NEW STUDENT UNION" },
  { id: "j", stateName: "J - SOCIAL SCIENCE" },
  { id: "k", stateName: "K - PHYSICAL PLANT" },
  { id: "l", stateName: "L - KENNEDY" },
  { id: "m1", stateName: "M1 - HUBERT TECH" },
  { id: "m2", stateName: "M2 - HUBERT TECH (CAMPUS POLICE) (SERVICE VEHICLES ONLY)" },
  { id: "m3", stateName: "M3 - HUBERT TECH" },
  { id: "amams-hall", stateName: "113 - ADAMS HALL - ADM" },
  { id: "herty-hall", stateName: "114 - HERTY HALL - HRT" },
  { id: "public-safety", stateName: "117 - HAMMOND HALL - HMM" },
  { id: "c.hubert-resident-hall", stateName: "119 - C. HUBERT RESIDENT HALL" },

  { id: "bowen-smith-resdent-hall", stateName: "122 - BOWEN SMITH -	BWN" },

  { id: "humbert-techonology", stateName: "127 - HUBERT HALL -	HUB" },
  { id: "hubert-resident-hall", stateName: "128 - BOSTIC HALL - BST" },

  { id: "132_parking", stateName: "  Parking 132" },
  { id: "whiting-hill", stateName: "136 - WHITING HALL -	WHT" },
  { id: "a118", stateName: "118 - PUBLIC SAFETY -	PUB & STC " },
  { id: "a121", stateName: "121 - MARINE BIOLOGY - MRBIO & MRSC" },
  { id: "a138", stateName: "138" },





  { id: "M3", stateName: "M3 - HUBERT TECH" },
  { id: "n", stateName: "N - PAYNE" },
  { id: "o", stateName: "O - HARRIS MCDEW HEALTH CENTER (PATIENTS)" },
  { id: "p", stateName: "P - FLGC & BOWEN-SMITH" },
  { id: "q", stateName: "Q - Hammond Hall" },
  { id: "r", stateName: "R - Camilla Hubert" },

  { id: "s1", stateName: "S2 - GARDNER HALL" },
  { id: "s2", stateName: "S2 - GARDNER HALL" },
  { id: "s3", stateName: "S3 - CAFETERIA" },
  { id: "t1", stateName: "T1 - HILL HALL (EAST/SIDE)" },
  { id: "u", stateName: "U - HODGE HALL" },
  { id: "v", stateName: "V1 - Colston (North)" },
  { id: "w", stateName: "W - TIGER PLACE" },
  { id: "x", stateName: "X - TIGER POINT" },
  { id: "y", stateName: "Y - MORGAN HALL" },
  { id: "z", stateName: "Z - BOSTIC" },
  { id: "aa", stateName: "AA - TIGER EXPRESS" },
  { id: "bb", stateName: "BB - Drew Griffith" },
  { id: "cc", stateName: "CC - University Village (Overflow)" },
  { id: "dd", stateName: "DD - University Advancement/Alumni House" },
  { id: "ee", stateName: "EE - Harris Hall" },
  { id: "ff", stateName: "FF - Alexis Circle" },
  { id: "football_practice_field", stateName: "170 - FOOTBALL PRACTICE FIELD" },
  //  {id:"laroche-entry",stateName:"Laroche entry"},
  { id: "laundry", stateName: "laundry" },
  { id: "powell-hall", stateName: "115 - POWELL HALL -	PWL" },
  { id: "skidaway_road", stateName: "Skidaway road" },
  { id: "the-pavlion", stateName: "161 - THE PAVILION" },
  { id: "foundation-house", stateName: "162- FOUNDATION HOUSE" },


  { id: "gardner-hall", stateName: "101 - GARDNER -	GRD" },
  { id: "wiley-wilcox-gym", stateName: "102 - WILEY-WILCOX -	WWG" },
  { id: "colston-administration", stateName: "103 - COLSTON -	CST" },
  // { id: "king-frazier-student-center", stateName: "104 - KING-FRASIER -	KNG" },
  { id: "hodge-hall", stateName: "106 - HODGE HAL - HDG" },
  { id: "hill-hall", stateName: "107 -HILL HALL-	HH" },
  { id: "lift-station", stateName: "109 - LIFT STATION" },
  { id: "morgan-hall", stateName: "111 -MORGAN HALL -	MRG" },
  { id: "morgan-annex", stateName: "112 - MORGAN ANNEX -	MRGA" },
  { id: "bowen-smith-resident-hall", stateName: "122 - BOWEN-SMITH RESIDENT HALL" },
  { id: "cottage-9", stateName: "124 - COTTAGE 9" },
  { id: "health-clinic", stateName: "125 - HARRIS MCDEW - HAR" },
  { id: "payne-hall", stateName: "126 - PAYNE HALL -	PYN" },
  { id: "j.kennedy-fine-arts", stateName: "129 - J F KENNEDY -	JFK" },
  { id: "evers-physical-plant", stateName: "132 - PHYSICAL PLANT -	PHY" },
  { id: "jordan-business-school", stateName: "134 - JORDAN HALL - JRD" },
  { id: "a-h-gordon-library", stateName: "135 - A.H. GORDON LIBRARY" },
  { id: "whiting-hall", stateName: "136 - WHITING HALL" },
  { id: "drew-griffith-science", stateName: "137 - DREW GRIFFITH -	DRW" },
  { id: "nordic-and-field-house", stateName: "140 - NORDIC AND FIELD HOUSE" },
  { id: "university-village", stateName: "147 - UNIVERSITY VILLAGE" },
  { id: "freshmen-living-learning-center", stateName: "149 - FRESHMAN LLC	- FLLC" },
  { id: "university-commons", stateName: "153 - UNIVERSITY COMMONS" },
  { id: "social-science-building", stateName: "154 - SOCIAL SCIENCE BUILDING" },
  { id: "tiger-point-residence-hall", stateName: "157 - Tiger Pointe -	TPT & UVC" },
  { id: "tiger-place-residence-hall", stateName: "158 - Tiger Place	- TPL" },
  { id: "tiger-court-residence-hall", stateName: "159 - Tiger Court (Peacock) -	TC" },
  { id: "new-student-center", stateName: "160 - Student Union -	SU" },
  // { id: "the-pavilion", stateName: "161 - THE PAVILION" },
  // { id: "football-practice-field", stateName: "170 - FOOTBALL PRACTICE FIELD" },
  // { id: "nrotc", stateName: "B - NROTC" },
  // { id: "university-village-2", stateName: "C - UNIVERSITY VILLAGE" },
  // { id: "tiger-arena-west", stateName: "D1 - TIGER ARENA (WEST)" },
  // { id: "d2", stateName: "D2 - TIGER ARENA (EAST)" },
  // { id: "whiting-hall-2", stateName: "E - WHITING HALL" },
  // { id: "library", stateName: "F - LIBRARY" },
  // { id: "howard-jordan", stateName: "G - HOWARD JORDAN" },
  // { id: "new-student-union", stateName: "H - NEW STUDENT UNION" },
  // { id: "social-science", stateName: "J - SOCIAL SCIENCE" },
  // { id: "physical-plant", stateName: "K - PHYSICAL PLANT" },
  // { id: "kennedy", stateName: "L - KENNEDY" },
  // { id: "hubert-tech", stateName: "M1 - HUBERT TECH" },
  // { id: "hubert-tech-campus-police", stateName: "M2 - HUBERT TECH (CAMPUS POLICE) (SERVICE VEHICLES ONLY)" },
  // { id: "hubert-tech-2", stateName: "M3 - HUBERT TECH" },
  // { id: "payne", stateName: "N - PAYNE" },
  // { id: "harris-mcdew-health-center", stateName: "O - HARRIS MCDEW HEALTH CENTER (PATIENTS)" },
  // { id: "flgc-and-bowen-smith", stateName: "P - FLGC & BOWEN-SMITH" },
  // { id: "tiger-place", stateName: "W - TIGER PLACE" },
  // { id: "tiger-point", stateName: "X - TIGER POINT" },
  // { id: "bostic", stateName: "Z - BOSTIC" },
  // { id: "tiger-express-2", stateName: "AA - TIGER EXPRESS" }
];

type Props = {
  value: string;
  onChange: (value: string) => void
}

export function SelectLocation({ value, onChange }: Props) {

  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between"
        >
          {value
            ? mappedArray.find((option) => option.id === value)?.stateName
            : "Select location..."}
          <ChevronsUpDownIcon className="ml-2 h-4 w-2 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {mappedArray.sort((a, b) => {
                // Extract the building number/identifier from the beginning
                const getSortKey = (stateName: string) => {
                  // Match the pattern at the start (number or letter followed by dash or space)
                  const match = stateName.match(/^([A-Z]?\d+|[A-Z])\s*[-]\s*/);
                  if (match) {
                    const prefix = match[1];
                    // If it's a number, pad it for proper numeric sorting
                    if (/^\d+$/.test(prefix)) {
                      return prefix.padStart(4, '0'); // Pad numbers to 4 digits
                    }
                    return prefix; // Return letters as-is
                  }
                  // If no pattern match, sort by the full name
                  return stateName;
                };
                
                const keyA = getSortKey(a.stateName);
                const keyB = getSortKey(b.stateName);
                
                return keyA.localeCompare(keyB);
              }).map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.stateName}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : option.id)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.stateName}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}