# Digimon Card Battle Editor

## Card Memory Exploration using Ghidra

Memory Address of Imperialdramon = 021c932e

Memory Address of Omnimon I = 021c946a

Memory Address of WarGreymon = 021c95a6

Memory Address of Gabumon = 021ce07c

Memory Address of Betamon = 021ce1b8

> ##### I guess each Digimon card takes 13c of memory space

Memory Address of GoldenBanana = 021d8170

Memory Address of Devil Chip = 021d8252

Memory Address of Whistle = 021d8334

Memory Address of Giga Hand = 021d8416

> ##### I guess each Option card takes e2 of memory space

## Example Agumon

Offsets

00 - Card Number
01 - Card Number
02 - Card Type : 00(Digimon), 01(Option), 02(Digivolve)
03 to 23 - Digimon Name in String
24 - Not Sure
25 - Not Sure
26 - First Digit is the Type: Fire(0), Water(1), Grass(2), Dark(3),Rare(4). Second Digit is the level: R(0), A(1), C(2), U(3)
