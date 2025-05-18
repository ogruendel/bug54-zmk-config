# Bug54 keyboard
The Bug54 is a 54 key split keyboard featuring a 4x6 column staggered layout with 3 thumb keys.
![Bug54 top and bottom side](https://github.com/ogruendel/bug54-zmk-config/blob/master/docs/images/PXL_20250518_160201433.RAW-01.COVER.jpg)

## Features:
- 54 key column staggered layout
- Hotswap Kailh Choc V1
- Ultra thin: **< 6mm** for the case and **< 15mm** to the top of the keys for great portability
- Reversible PCBs for greater efficiency when ordering
- ZMK Studio Support

## Hardware
The Bug54 is designed for NiceNano V2 and compatible microcontrollers.

## Quirks / Issues / Ideas
- Currently there is only support for SOD323 Diodes
- The Silkscreen for the MCU bridge pads is wrong on the backside. You will need to bridge pads only on the top side, when viewed in KiCAD
- My custom footprint for the hotswap case cutouts is non ideal and depending on your 3D Printer settings, the fit might be too tight / loose. For me they snap in with a bit of pressure, thus there is no need for screws
- It might be smart to upstream the ZMK config to the ZMK repository
- There is no on / off switch and reset button

## Images
![Bug54 top and bottom side](https://github.com/ogruendel/bug54-zmk-config/blob/master/docs/images/PXL_20250518_160201433.RAW-01.COVER.jpg)
![Bug54 top view](https://github.com/ogruendel/bug54-zmk-config/blob/master/docs/images/PXL_20250518_160228276.RAW-01.COVER.jpg)
![Bug54 bottom view](https://github.com/ogruendel/bug54-zmk-config/blob/master/docs/images/PXL_20250518_160551270.RAW-01.COVER.jpg)
![Bug54 side view](https://github.com/ogruendel/bug54-zmk-config/blob/master/docs/images/PXL_20250518_160307867.RAW-01.COVER.jpg)
